# DailyPulse technical SEO implementation plan

> For agentic workers: implement the independent media, markup, and delivery changes in parallel; integrate and verify them with the shared routes.

**Goal:** Make every published story and section readable, linkable, and shareable at its own URL, with or without JavaScript.

**Architecture:** Use the existing articles and category configuration as the source of routes. Render React to HTML on localhost and generate static documents, a sitemap, and robots.txt at build time for Vercel. Hydrate the same markup to retain the interactive controls.

**Tech stack:** Vite, React, TypeScript, responsive WebP assets, Vercel static hosting.

**Spec:** The user's Main SEO Checklist in this chat; Vercel is the intended host.

## Global constraints

- Keep `http://localhost:3001` usable. Use the configured or Vercel production origin in published SEO URLs; do not invent a domain or deploy the project.
- Preserve published content and existing bookmarks. Keep public pages crawlable, with no `noindex` tags. Search queries and errors stay out of the sitemap.

## Review focus

- Direct requests, refreshes, old hash bookmarks, and a missing story must lead to the intended content or a genuine 404.
- Links, page headings, canonical URLs, and article structured data must agree in the delivered HTML.
- Share images and image candidates must resolve after `src/` is no longer served.
- Narrow screens must allow reading and navigation without horizontal page scrolling.
- Vercel preview builds must use the production origin in SEO URLs; raw search text must never become HTML or executable script.

## Implementation and acceptance

- [x] **Routes and metadata:** Implemented in `src/lib/routes.ts`, `src/lib/dates.ts`, `src/lib/seo.tsx`, `src/entry-server.tsx`, `src/App.tsx`, and `src/main.tsx`. Checked all 45 canonical routes, old story/search hashes, invalid URLs, and serialization of untrusted search text.
- [x] **Links and layout:** Converted site navigation to native links and GET search forms. The export crawl checks article reachability, headings, image attributes, and local fragments. Browser checks covered seven page types at six widths between 320 and 1440 pixels.
- [x] **Media:** Shipped and checked 192 responsive and sharing assets. The five bundled covers total 624,948 bytes at 1200px, down from 4,933,931 bytes. Editorial images have descriptive alt text and intrinsic sizes.
- [x] **Delivery:** Generated 45 indexable documents, a search page, a 404 page, robots.txt, and sitemap.xml. Verified HTTP behavior locally and checked that a simulated Vercel build used the production origin throughout.
