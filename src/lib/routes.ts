import { CATEGORIES_CONFIG, CATEGORY_LIST } from '../config/siteConfig';
import { ARTICLES } from '../data/newsData';
import type { Article, CategoryType, PageRoute } from '../types';

const byId = new Map(ARTICLES.map(article => [article.id, article]));
const bySlug = new Map(ARTICLES.map(article => [article.slug, article]));
const categoriesBySlug = new Map(CATEGORY_LIST.map(category => [CATEGORIES_CONFIG[category].slug, category]));
const staticPages = ['about', 'contact', 'privacy'] as const;

export function getArticle(id: string) {
  return byId.get(id);
}

export function articlePath(value: Article | string): string {
  const article = typeof value === 'string' ? byId.get(value) ?? bySlug.get(value) : value;
  if (!article) throw new Error('Unknown article link: ' + value);
  return '/news/' + article.slug;
}

export function categoryPath(category: CategoryType): string {
  return '/category/' + CATEGORIES_CONFIG[category].slug;
}

export function resolveRoute(path: string, params = new URLSearchParams()): PageRoute {
  if (path === '/') return { type: 'home' };
  if (path === '/search') return { type: 'search', query: (params.get('q') ?? '').trim() };
  for (const type of staticPages) if (path === '/' + type) return { type };
  if (path.startsWith('/news/')) {
    const article = bySlug.get(path.slice(6));
    if (article) return { type: 'article', id: article.id };
  }
  if (path.startsWith('/category/')) {
    const category = categoriesBySlug.get(path.slice(10));
    if (category) return { type: 'category', category };
  }
  return { type: 'notFound' };
}

/** The canonical search page is the archive entry point; query URLs aren't submitted to crawlers. */
export function canonicalPath(route: PageRoute): string | undefined {
  switch (route.type) {
    case 'home': return '/';
    case 'article': return articlePath(route.id);
    case 'category': return categoryPath(route.category);
    case 'notFound': return undefined;
    default: return '/' + route.type;
  }
}

export function indexablePaths(): string[] {
  return ['/', ...CATEGORY_LIST.map(categoryPath), ...ARTICLES.map(articlePath), ...staticPages.map(name => '/' + name)];
}

/** Fragments never reach the server. Migrate old app bookmarks without intercepting in-page anchors. */
export function legacyHashPath(hash: string): string | undefined {
  const old = hash.replace(/^#\/?/, '');
  if (old === '' || old === '/') return undefined;
  if (old === 'search' || old.startsWith('search?')) {
    const query = new URLSearchParams(old.split('?').slice(1).join('?')).get('q');
    return query ? '/search?' + new URLSearchParams({ q: query }) : '/search';
  }
  if (staticPages.some(name => old === name)) return '/' + old;
  const match = /^(article|category)\/([a-z\d-]+)$/i.exec(old);
  if (!match) return undefined;
  const slug = match[2].toLowerCase();
  if (match[1].toLowerCase() === 'category') return '/category/' + slug;
  const article = byId.get(slug) ?? bySlug.get(slug);
  return article ? articlePath(article) : '/news/' + slug;
}
