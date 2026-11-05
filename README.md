# DailyPulse

DailyPulse is a React and Vite news portal. Each article, category, and information page ships as HTML with its content and metadata. The build also generates a sitemap, crawler instructions, a search page, and a custom 404 page.

## Run locally

Use Node.js 24 and npm. From the directory containing `package.json`, run these commands and open [localhost on port 3001](http://localhost:3001/).

```sh
npm ci
npm run dev
```

The development server renders the current story and metadata on each request. Run the following commands to preview the static production files at [localhost on port 4173](http://localhost:4173/).

```sh
npm run lint
npm run build
npm run preview
```

Local builds use `http://localhost:3001` for absolute links by default. To test a public canonical domain locally, copy `.env.example` to `.env.local`, set `SITE_URL` to the site's full HTTPS origin, and rebuild.

## Deploy to Vercel

1. Import the project into Vercel. Set the Root Directory to the folder containing `package.json` and `vercel.json`. Choose the Vite preset and Node.js 24.
2. Enable access to system environment variables in the Vercel project settings. The build uses `VERCEL_PROJECT_PRODUCTION_URL` (or its Vite-prefixed equivalent) for canonical links, social images, and the sitemap. This value identifies the production domain even during a preview build. To choose a specific domain, set `SITE_URL` in both the Production and Preview environments. [Vercel system environment variables](https://vercel.com/docs/environment-variables/system-environment-variables#vercel_project_production_url)
3. Deploy. The checked-in configuration installs with `npm ci`, runs `npm run build -- --deployment`, and serves `dist`. A deployment build requires a public HTTPS origin. When changing the primary domain, rebuild so the generated URLs use it.
4. Open `/sitemap.xml`, `/robots.txt`, and an article URL on the production domain. View the article's page source to inspect the headline and canonical tag. An unknown article path should return HTTP 404. Submit the production sitemap in Google Search Console after verifying the domain.

Vercel serves extensionless article and category URLs, redirects `.html` and trailing-slash variants, and serves the generated `404.html` for missing pages. Its CDN redirects HTTP requests to HTTPS and sends the HSTS header. Local development uses HTTP. [Vercel clean URLs](https://vercel.com/docs/project-configuration/vercel-json#cleanurls) · [Custom 404 pages](https://vercel.com/kb/guide/custom-404-page) · [Vercel TLS](https://vercel.com/docs/cdn-security/encryption) · [Vercel response headers](https://vercel.com/docs/headers/response-headers#strict-transport-security)

## Check the generated pages

After building, run `python scripts/check-seo.py` to audit `dist`. With the development server running, run `python scripts/check-seo.py --base http://localhost:3001` to audit HTTP responses. Rebuild after editing the story or category data to regenerate every affected page and the sitemap.
