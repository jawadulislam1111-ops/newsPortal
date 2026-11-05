import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import App from './App';
import { canonicalPath, resolveRoute } from './lib/routes';
import { PageHead } from './lib/seo';
import type { PageState } from './types';

export { indexablePaths } from './lib/routes';
export { robotsTxt, sitemapXml } from './lib/seo';

export function renderPage(requestUrl: string, origin: string): { head: string; html: string; status: number; redirect?: string } {
  const url = new URL(requestUrl, origin);
  const path = url.pathname.replace(/\/+$/, '').replace(/\.html$/, '').replace(/^\/index$/, '') || '/';
  const route = resolveRoute(path, url.searchParams);
  if (route.type !== 'notFound' && url.pathname !== path) {
    return { status: 308, redirect: path + url.search, head: '', html: '' };
  }
  const link = canonicalPath(route);
  const state: PageState = { route, canonicalUrl: link && new URL(link, origin).href };
  return {
    status: route.type === 'notFound' ? 404 : 200,
    head: renderToStaticMarkup(<PageHead state={state} />),
    html: renderToString(<App state={state} />),
  };
}
