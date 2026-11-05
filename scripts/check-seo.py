"""Crawl a DailyPulse build or a local HTTP server without executing JavaScript (Python 3.9+)."""
import argparse
import json
import re
import sys
import xml.etree.ElementTree as ET
from collections import Counter, deque
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import unquote, urljoin, urlsplit
from urllib.request import Request, urlopen


class Document(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.links, self.assets, self.headings, self.schemas, self.canonicals, self.titles = [], [], [], [], [], []
        self.meta, self.ids, self.problems = {}, set(), []
        self.capture = None
        self.in_link = False
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get("id"):
            if a["id"] in self.ids:
                self.problems.append("duplicate id #" + a["id"])
            self.ids.add(a["id"])
        if tag == "a":
            if self.in_link or not a.get("href") or a["href"] == "#":
                self.problems.append("nested anchor or missing link target")
            self.in_link = True
            self.links.append(a.get("href") or "")
        elif tag == "img":
            if "alt" not in a or not a.get("src"):
                self.problems.append("image is missing alt or src")
            if not all(str(a.get(k, "")).isdigit() and int(a[k]) > 0 for k in ("width", "height")):
                self.problems.append("image has no intrinsic size: " + str(a.get("src")))
            if a.get("src"):
                self.assets.append(a["src"])
            self.assets.extend(s.split()[0] for s in a.get("srcset", "").split(",") if s.strip())
        elif tag == "meta":
            key = a.get("name") or a.get("property")
            if key:
                self.meta.setdefault(key.lower(), []).append(a.get("content", ""))
        elif tag == "link" and a.get("rel") == "canonical":
            self.canonicals.append(a.get("href", ""))
        if tag == "title" or re.fullmatch(r"h[1-6]", tag) or (tag == "script" and a.get("type") == "application/ld+json"):
            self.capture = (tag, [])

    def handle_data(self, data):
        if self.capture:
            self.capture[1].append(data)

    def handle_endtag(self, tag):
        if tag == "a":
            self.in_link = False
        if self.capture and self.capture[0] == tag:
            value = " ".join("".join(self.capture[1]).split()) if tag != "script" else "".join(self.capture[1])
            if tag == "title":
                self.titles.append(value)
            elif tag == "script":
                self.schemas.append(json.loads(value))
            else:
                self.headings.append((int(tag[1]), value))
            self.capture = None


def main():
    args = argparse.ArgumentParser(description=__doc__)
    args.add_argument("--dist", type=Path, default=Path(__file__).resolve().parents[1] / "dist")
    args.add_argument("--base", help="Read from this local server instead of the built files")
    args.add_argument("--origin", help="Also require this canonical origin (for deployment checks)")
    opts = args.parse_args()
    errors = []

    def require(condition, message):
        if not condition:
            errors.append(message)

    def read(path, head=False):
        if opts.base:
            req = Request(opts.base.rstrip("/") + path, method="HEAD" if head else "GET")
            try:
                with urlopen(req, timeout=20) as response:
                    return response.status, response.headers.get_content_type(), None if head else response.read()
            except HTTPError as exc:
                return exc.code, exc.headers.get_content_type(), None if head else exc.read()
        rel = unquote(urlsplit(path).path).strip("/")
        choices = [opts.dist / (rel or "index.html")]
        if rel and "." not in rel.rsplit("/", 1)[-1]:
            choices += [opts.dist / (rel + ".html"), opts.dist / rel / "index.html"]
        file = next((p for p in choices if p.is_file()), None)
        if file is None:
            return 404, "text/html", None if head else (opts.dist / "404.html").read_bytes()
        return 200, file.suffix, None if head else file.read_bytes()

    status, mime, raw = read("/sitemap.xml")
    require(status == 200 and (not opts.base or "xml" in mime), "sitemap.xml is not served as XML")
    xml = ET.fromstring(raw)
    locations = [e.text for e in xml.findall("{*}url/{*}loc")]
    if not locations:
        raise ValueError("The sitemap contains no URLs")
    first = urlsplit(locations[0])
    origin = first.scheme + "://" + first.netloc
    require(bool(first.netloc) and first.scheme in ("https", "http"), "sitemap needs absolute URLs")
    if opts.origin:
        require(origin == opts.origin.rstrip("/"), "unexpected canonical origin: " + origin)
    paths = {urlsplit(u).path for u in locations}
    require(len(paths) == len(locations), "duplicate sitemap paths")
    require(all(u == origin + urlsplit(u).path for u in locations), "sitemap is mixing origins, queries or fragments")
    require({"/", "/about", "/contact", "/privacy"} <= paths and "/search" not in paths and "/404" not in paths, "unexpected sitemap coverage")
    if not opts.base:
        exported = {("/" + f.relative_to(opts.dist).as_posix()[:-5]).removesuffix("/index") or "/"
                    for f in opts.dist.rglob("*.html")}
        require(exported == paths | {"/404", "/search"}, "HTML files and sitemap disagree: " + str(exported ^ (paths | {"/404", "/search"})))
    status, mime, body = read("/robots.txt")
    robots = body.decode()
    require(status == 200 and (not opts.base or mime == "text/plain") and "Sitemap: " + origin + "/sitemap.xml" in robots,
            "incorrect robots.txt response or sitemap declaration")
    require(not re.search(r"^Disallow:\s*/\s*$", robots, re.M | re.I), "robots.txt blocks the entire site")

    missing = "/news/dailypulse-missing-article-for-audit"
    def getdoc(path):
        code, kind, body = read(path)
        require(code == (404 if path == missing else 200), f"{path}: HTTP {code}")
        require(not opts.base or kind == "text/html", f"{path}: expected HTML, got {kind}")
        return path, Document(body.decode("utf-8"))

    with ThreadPoolExecutor(max_workers=4) as pool:
        docs = dict(pool.map(getdoc, sorted(paths | {"/search", missing})))
    assets, edges = set(), {p: set() for p in docs}
    titles, descriptions = Counter(), Counter()
    for path, doc in docs.items():
        errors.extend(f"{path}: {msg}" for msg in doc.problems)
        require(len(doc.titles) == 1 and doc.titles[0], f"{path}: missing or duplicate title")
        headings = doc.headings
        require(bool(headings) and headings[0][0] == 1 and sum(n == 1 for n, _ in headings) == 1, f"{path}: invalid H1")
        require(all(b[0] <= a[0] + 1 for a, b in zip(headings, headings[1:])), f"{path}: skipped heading level")
        for h in doc.links:
            url = urlsplit(urljoin(origin + path, h))
            if url.netloc != first.netloc or url.scheme not in ("https", "http"):
                continue
            target = url.path or "/"
            local_fragment = target == path and h.startswith("#") and bool(url.fragment)
            require(target in docs and (target != missing or local_fragment), f"{path}: unavailable link {h}")
            if target in docs:
                edges[path].add(target)
                if url.fragment:
                    require(unquote(url.fragment) in docs[target].ids, f"{path}: missing fragment {h}")
        if path != missing:
            require(doc.canonicals == [origin + path], f"{path}: incorrect canonical {doc.canonicals}")
        if path not in paths:
            continue
        titles.update(doc.titles)
        descriptions.update(doc.meta.get("description", []))
        for key in ("description", "og:url", "og:title", "og:description", "og:image", "og:image:alt", "twitter:card", "twitter:image"):
            require(len(doc.meta.get(key, [])) == 1 and doc.meta[key][0], f"{path}: missing or duplicate {key}")
        require(doc.meta.get("og:url") == doc.canonicals, f"{path}: og:url differs from canonical")
        require("noindex" not in " ".join(doc.meta.get("robots", [])).lower(), f"{path}: blocked by noindex")
        require(len(doc.schemas) == 1 and doc.schemas[0].get("@context") == "https://schema.org", f"{path}: missing structured data")
        graph = [node for schema in doc.schemas for node in schema.get("@graph", [])]
        if path.startswith("/news/"):
            article = next((n for n in graph if n.get("@type") == "NewsArticle"), {})
            require(headings and article.get("headline") == headings[0][1] and article.get("url") == origin + path
                    and article.get("author", {}).get("name") and article.get("datePublished") and article.get("image")
                    and any(n.get("@type") == "BreadcrumbList" for n in graph), f"{path}: incomplete or inconsistent article schema")
        for h in doc.assets + doc.meta.get("og:image", []):
            url = urlsplit(urljoin(origin + path, h))
            require(url.netloc == first.netloc, f"{path}: image is hosted elsewhere: {h}")
            if url.netloc == first.netloc:
                assets.add(url.path)
    require(len(titles) == len(paths) and len(descriptions) == len(paths), "indexable pages share titles or descriptions")
    def check_image(path):
        status, mime, _ = read(path, head=True)
        require(status == 200 and (not opts.base or mime.startswith("image/")), f"{path}: image unavailable ({status}, {mime})")
    with ThreadPoolExecutor(max_workers=6) as pool:
        list(pool.map(check_image, sorted(assets)))
    seen, queue = {"/"}, deque(["/"])
    while queue:
        for target in edges[queue.popleft()] - seen:
            if target in paths:
                seen.add(target)
                queue.append(target)
    require(paths <= seen, "orphaned sitemap URLs: " + ", ".join(sorted(paths - seen)))
    if errors:
        print("\n".join(dict.fromkeys(errors)), file=sys.stderr)
        return 1
    print(f"Verified {len(paths)} indexable pages ({sum(p.startswith('/news/') for p in paths)} articles), "
          f"{len(assets)} image files, unique page heads, one H1 per page, crawlable links, sitemap, robots and 404s at {origin}.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
