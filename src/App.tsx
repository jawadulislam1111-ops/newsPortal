import { useEffect, useState } from 'react';
import type { PageState } from './types';
import { ARTICLES } from './data/newsData';
import { getArticle } from './lib/routes';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { BreakingTicker } from './components/BreakingTicker';
import { Footer } from './components/Footer';
import { AdSlot } from './components/AdSlot';
import { ScriptAdLoader } from './components/SandboxedAd';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { CategoryPage } from './pages/CategoryPage';
import { SearchPage } from './pages/SearchPage';
import { AboutPage, ContactPage, PrivacyPolicyPage } from './pages/StaticPages';

function NotFoundPage() {
  return <section className="max-w-3xl mx-auto px-4 sm:px-8 py-16">
    <p className="text-sm font-bold uppercase tracking-wide text-red-600">404</p>
    <h1 className="font-serif text-4xl font-bold my-3">Page not found</h1>
    <p className="mb-6">We couldn’t find this page. You can <a className="underline" href="/search">search the archive</a> or <a className="underline" href="/">return to the latest headlines</a>.</p>
  </section>;
}

export default function App({ state: { route, canonicalUrl } }: { state: PageState }) {
  // The initial client tree must match the HTML delivered by the server.
  const [isDark, setIsDark] = useState(false);
  const [query, setQuery] = useState(route.type === 'search' ? route.query : '');
  useEffect(() => {
    let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    try {
      const stored = localStorage.getItem('dailypulse_theme');
      if (stored === 'light' || stored === 'dark') dark = stored === 'dark';
    } catch { /* Storage may be disabled. The OS preference still works. */ }
    document.documentElement.classList.toggle('dark', dark);
    setIsDark(dark);
  }, []);
  useEffect(() => {
    // Static hosts serve one search document for any query string.
    if (route.type === 'search') setQuery((new URLSearchParams(location.search).get('q') ?? '').trim());
  }, [route.type]);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try { localStorage.setItem('dailypulse_theme', next ? 'dark' : 'light'); } catch { /* Session-only theme. */ }
  }

  const article = route.type === 'article' ? getArticle(route.id) : undefined;
  const activeCategory = route.type === 'home' ? 'Home' : route.type === 'category' ? route.category : article?.category;
  return <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans transition-colors selection:bg-red-600 selection:text-white">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-black focus:p-3">Skip to content</a>
    <TopBar isDark={isDark} onToggleDark={toggleTheme} />
    <Header key={query} isHome={route.type === 'home'} currentSearchQuery={query} />
    <Navigation activeCategory={activeCategory} />
    <BreakingTicker />
    <main id="main-content" className="flex-1 min-w-0 w-full pb-12">
      {route.type === 'home' && <HomePage articles={ARTICLES} />}
      {route.type === 'category' && <CategoryPage category={route.category} articles={ARTICLES} allArticles={ARTICLES} />}
      {route.type === 'article' && (article
        ? <ArticlePage article={article} allArticles={ARTICLES} canonicalUrl={canonicalUrl} />
        : <NotFoundPage />)}
      {route.type === 'search' && <SearchPage key={query} initialQuery={query} allArticles={ARTICLES} />}
      {route.type === 'about' && <AboutPage />}
      {route.type === 'contact' && <ContactPage />}
      {route.type === 'privacy' && <PrivacyPolicyPage />}
      {route.type === 'notFound' && <NotFoundPage />}
    </main>
    <ScriptAdLoader src="https://abscloud.org/1/76df1cfa95c3148caedae51157b161ed" dataCfasync />
    <ScriptAdLoader src="https://araplhn.org/4/89d506c3bd7f628724eadcc7fef2a965" />
    <ScriptAdLoader src="https://bauval.org/14/de2f1e442ed6ba9421fac93ff0422708" dataCfasync />
    <AdSlot size="mobile-anchor" dismissible />
    <Footer />
  </div>;
}
