import React, { useState } from 'react';
import { SITE_NAME, SITE_TAGLINE } from '../config/siteConfig';
import { Search, X, Bell } from 'lucide-react';

interface HeaderProps {
  currentSearchQuery?: string;
  isHome?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ currentSearchQuery = '', isHome = false }) => {
  const [query, setQuery] = useState(currentSearchQuery);
  const Brand = isHome ? 'h1' : 'div';

  return (
    <header className="relative w-full bg-white dark:bg-stone-950 border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between gap-4">
        <div>
          <Brand className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 dark:text-white">
            <a href="/" aria-label={isHome ? undefined : `${SITE_NAME} home`} className="inline-flex items-center gap-1.5">
              <span className="uppercase">Daily<span className="text-red-600">Pulse</span></span>
              {isHome && <span className="sr-only"> News</span>}
              <span aria-hidden="true" className="w-2.5 h-2.5 rounded-full bg-red-600 mb-1 sm:mb-2" />
            </a>
          </Brand>
          <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 font-sans tracking-wide mt-0.5 hidden sm:block">
            {SITE_TAGLINE}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <form action="/search" method="get" role="search" className="hidden md:flex items-center relative w-52 lg:w-72">
            <input
              type="search"
              name="q"
              aria-label="Search DailyPulse"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search news, topics, authors..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600"
            />
            <button type="submit" aria-label="Submit search" className="absolute inset-y-0 left-0 px-3 text-stone-500 hover:text-red-600">
              <Search className="w-4 h-4" />
            </button>
          </form>

          <details className="group md:hidden">
            <summary aria-label="Search DailyPulse" className="list-none [&::-webkit-details-marker]:hidden p-2 rounded-full text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer">
              <Search className="w-5 h-5 group-open:hidden" />
              <X className="hidden w-5 h-5 group-open:block" />
            </summary>
            <form action="/search" method="get" role="search" className="absolute z-40 left-0 right-0 top-full px-4 py-3 bg-stone-50 dark:bg-stone-900 border-y border-stone-200 dark:border-stone-800 flex items-center gap-2 shadow-sm">
              <input
                type="search"
                name="q"
                aria-label="Search DailyPulse"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search headlines, topics..."
                className="min-w-0 flex-1 px-3 py-2 text-sm rounded border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-950 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button type="submit" className="px-4 py-2 text-xs font-semibold uppercase bg-red-600 text-white rounded hover:bg-red-700">
                Search
              </button>
            </form>
          </details>

          <a href="#newsletter-section" className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white rounded shadow-sm">
            <Bell className="w-3.5 h-3.5" />
            <span>Newsletter</span>
          </a>
        </div>
      </div>
    </header>
  );
};
