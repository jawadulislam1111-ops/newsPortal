import { CATEGORIES_CONFIG, SITE_NAME } from '../config/siteConfig';
import { ARTICLES } from '../data/newsData';
import type { Article, PageState } from '../types';
import { isoNewsDate } from './dates';
import { imageAlt, SITE_SOCIAL_IMAGE, socialImage } from './images';
import { articlePath, categoryPath, getArticle, indexablePaths } from './routes';

const siteDescription = 'Read the latest DailyPulse reporting on national and world affairs, technology, business, sports, and culture, plus analysis from our opinion desk.';
const staticInfo = {
  about: ['About DailyPulse', 'Meet the DailyPulse newsroom and learn how our editors report, verify stories, handle corrections, and maintain editorial independence.', 'AboutPage'],
  contact: ['Contact the DailyPulse newsroom', 'Contact the DailyPulse editorial team with a story tip, a correction, feedback on our coverage, or an inquiry for the newsroom.', 'ContactPage'],
  privacy: ['Privacy policy', 'Read how DailyPulse handles newsletter subscriptions, site diagnostics, and advertising, and learn how to contact us about your privacy rights.', 'WebPage'],
  search: ['Search DailyPulse', 'Search the DailyPulse archive by headline, author, or topic and browse reporting from all seven news desks.', 'SearchResultsPage'],
} as const;

function pageInfo({ route }: PageState) {
  if (route.type === 'home') return { name: 'DailyPulse: Latest news and analysis', description: siteDescription, type: 'CollectionPage' };
  if (route.type === 'category') return { name: route.category + ' news', description: CATEGORIES_CONFIG[route.category].description, type: 'CollectionPage' };
  if (route.type === 'article') {
    const article = getArticle(route.id)!;
    return { name: article.shortTitle || article.title, description: article.excerpt, type: 'WebPage', article };
  }
  if (route.type === 'notFound') return { name: 'Page not found', description: 'This DailyPulse page could not be found. Return to the homepage or search the news archive.', type: 'WebPage' };
  const [name, description, type] = staticInfo[route.type];
  return { name, description, type };
}

/** Escape raw-text script delimiters in JSON, including untrusted search terms and editorial copy. */
function jsonForHtml(value: unknown): string {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, char => '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0'));
}

const ref = (id: string) => ({ '@id': id });
const crumb = (position: number, name: string, item: string) => ({ '@type': 'ListItem', position, name, item });

function schema(state: PageState, info: ReturnType<typeof pageInfo>, image: string) {
  const url = state.canonicalUrl!;
  const root = new URL('/', url).href;
  const org = root + '#publisher', site = root + '#website', page = url + '#webpage';
  const article: Article | undefined = info.article;
  const section = state.route.type === 'category' ? state.route.category : article?.category;
  const breadcrumbs = section ? [
    crumb(1, 'DailyPulse', root),
    crumb(2, section, new URL(categoryPath(section), root).href),
    ...(article ? [crumb(3, article.title, url)] : []),
  ] : undefined;
  const graph: object[] = [
    { '@type': 'NewsMediaOrganization', '@id': org, name: SITE_NAME, url: root,
      logo: { '@type': 'ImageObject', url: new URL('/dailypulse-mark.svg', root).href, width: 128, height: 128 } },
    { '@type': 'WebSite', '@id': site, name: SITE_NAME, url: root, publisher: ref(org), inLanguage: 'en' },
    { '@type': info.type, '@id': page, url, name: article?.title ?? info.name, description: info.description,
      isPartOf: ref(site), inLanguage: 'en', breadcrumb: breadcrumbs && ref(url + '#breadcrumbs'),
      mainEntity: article ? ref(url + '#article') : state.route.type === 'category' ? ref(url + '#stories') : undefined },
  ];
  if (breadcrumbs) graph.push({ '@type': 'BreadcrumbList', '@id': url + '#breadcrumbs', itemListElement: breadcrumbs });
  if (article) graph.push({
    '@type': 'NewsArticle', '@id': url + '#article', url, mainEntityOfPage: ref(page),
    headline: article.title, description: article.excerpt, image: [image], articleSection: article.category,
    author: { '@type': 'Person', name: article.author.name }, publisher: ref(org),
    datePublished: isoNewsDate(article.date), dateModified: article.updatedDate && isoNewsDate(article.updatedDate),
    inLanguage: 'en', keywords: article.tags,
  });
  if (state.route.type === 'category') graph.push({
    '@type': 'ItemList', '@id': url + '#stories', name: info.name,
    itemListElement: ARTICLES.filter(a => a.category === section).map((a, i) => ({
      '@type': 'ListItem', position: i + 1, name: a.title, url: new URL(articlePath(a), root).href,
    })),
  });
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function PageHead({ state }: { state: PageState }) {
  const info = pageInfo(state);
  const article = info.article;
  const title = state.route.type === 'home' || state.route.type === 'search' || state.route.type === 'about' || state.route.type === 'contact'
    ? info.name : info.name + ' | ' + SITE_NAME;
  const canonical = state.canonicalUrl;
  const preview = article ? socialImage(article.image) : SITE_SOCIAL_IMAGE;
  const image = canonical && new URL(preview, canonical).href;
  const generatedCard = preview === SITE_SOCIAL_IMAGE || /^\/media\/news\/[a-z0-9-]+-social\.jpg$/.test(preview);
  const alt = article && preview !== SITE_SOCIAL_IMAGE ? imageAlt(article.image, article.title) : 'DailyPulse masthead above photographs of a summit, a processor, and a sprinter.';
  return <>
    <title>{title}</title>
    <meta name="description" content={info.description} />
    <link rel="icon" type="image/svg+xml" href="/dailypulse-mark.svg" />
    {canonical && image && <>
      <link rel="canonical" href={canonical} />
      {state.route.type !== 'search' && <meta name="robots" content="index, follow, max-image-preview:large" />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={article?.title ?? title} />
      <meta property="og:description" content={info.description} />
      <meta property="og:image" content={image} />
      {generatedCard && <>
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </>}
      <meta property="og:image:alt" content={alt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={article?.title ?? title} />
      <meta name="twitter:description" content={info.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={alt} />
      {article && <>
        <meta name="author" content={article.author.name} />
        <meta property="article:section" content={article.category} />
        <meta property="article:published_time" content={isoNewsDate(article.date)} />
        {article.updatedDate && <meta property="article:modified_time" content={isoNewsDate(article.updatedDate)} />}
      </>}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonForHtml(schema(state, info, image)) }} />
    </>}
    <script id="page-state" type="application/json" dangerouslySetInnerHTML={{ __html: jsonForHtml(state) }} />
  </>;
}

const escapeXml = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

export function sitemapXml(origin: string): string {
  const lastModified = new Map(ARTICLES.map(a => [articlePath(a), isoNewsDate(a.updatedDate || a.date)]));
  const urls = indexablePaths().map(path => {
    const lastmod = lastModified.get(path);
    return '  <url><loc>' + escapeXml(new URL(path, origin).href) + '</loc>' + (lastmod ? '<lastmod>' + lastmod + '</lastmod>' : '') + '</url>';
  });
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.join('\n') + '\n</urlset>\n';
}

export function robotsTxt(origin: string): string {
  return 'User-agent: *\nDisallow: /search\nAllow: /\n\nSitemap: ' + new URL('/sitemap.xml', origin).href + '\n';
}
