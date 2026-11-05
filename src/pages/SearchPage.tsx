import React, { useState, useMemo } from 'react';
import { Article } from '../types';
import { POPULAR_SEARCH_TERMS } from '../data/newsData';
import { CATEGORY_LIST } from '../config/siteConfig';
import { NewsCard } from '../components/NewsCard';
import { AdSlot } from '../components/AdSlot';
import { Search, SlidersHorizontal, AlertCircle } from 'lucide-react';

interface SearchPageProps {
  initialQuery: string;
  allArticles: Article[];
}

export const SearchPage: React.FC<SearchPageProps> = ({
  initialQuery,
  allArticles,
}) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredArticles = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    return allArticles.filter((article) => {
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        article.author.name.toLowerCase().includes(q);

      const matchesCat =
        selectedCategory === 'All' || article.category === selectedCategory;

      return matchesQuery && matchesCat;
    });
  }, [searchTerm, selectedCategory, allArticles]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
      {/* Search Header Bar */}
      <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-sm mb-8">
        <h1 className="font-serif text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white mb-4">
          Search DailyPulse Archives
        </h1>

        <form action="/search" method="get" role="search" className="relative flex items-center">
          <input
            type="search"
            name="q"
            aria-label="Search the archives"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search keywords, topics, authors, treaties..."
            className="w-full pl-11 pr-24 py-3 text-sm sm:text-base rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
          />
          <button type="submit" aria-label="Submit archive search" className="absolute inset-y-0 left-0 px-4 text-stone-500 hover:text-red-600">
            <Search className="w-5 h-5" />
          </button>

          {searchTerm && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="absolute right-4 text-xs font-semibold text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 p-1"
            >
              Clear
            </button>
          )}
        </form>

        {/* Quick Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-5 pt-4 border-t border-stone-100 dark:border-stone-800 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-stone-500 uppercase tracking-wider text-[11px] flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter Category:</span>
            </span>
            <button
              aria-pressed={selectedCategory === 'All'}
              onClick={() => setSelectedCategory('All')}
              className={`px-2.5 py-1 rounded transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900 font-bold'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
              }`}
            >
              All
            </button>
            {CATEGORY_LIST.map((cat) => (
              <button
                key={cat}
                aria-pressed={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded transition-colors ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white dark:bg-white dark:text-stone-900 font-bold'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-stone-500 font-mono">
            <span>{filteredArticles.length} results found</span>
          </div>
        </div>

        {/* Suggested Searches */}
        <div className="mt-4 flex items-center gap-2 flex-wrap text-xs text-stone-500">
          <span className="font-semibold text-[11px] uppercase tracking-wider text-stone-400">
            Suggested:
          </span>
          {POPULAR_SEARCH_TERMS.slice(0, 6).map((term) => (
            <a
              key={term}
              href={'/search?' + new URLSearchParams({ q: term })}
              className="hover:text-red-600 dark:hover:text-red-400 hover:underline"
            >
              "{term}"
            </a>
          ))}
        </div>
      </div>

      {/* Leaderboard ad below search box */}
      <AdSlot size="leaderboard" label="Search Results Sponsor" />

      {/* Results Content */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredArticles.map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              variant="standard"
              headingAs="h2"
              sizes="(min-width: 1280px) 388px, (min-width: 1024px) calc(33.33vw - 38px), (min-width: 768px) calc(50vw - 44px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)"
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-stone-50 dark:bg-stone-900/40 rounded-2xl border border-dashed border-stone-300 dark:border-stone-800 p-12 text-center my-8">
          <div className="w-12 h-12 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-stone-500 mx-auto mb-4">
            <AlertCircle className="w-6 h-6 text-stone-400" />
          </div>
          <h2 className="break-words font-serif text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
            No articles found matching "{searchTerm}"
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-md mx-auto mb-6">
            Try checking for spelling errors, adjusting your category filter, or using more general search terms.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {POPULAR_SEARCH_TERMS.slice(0, 4).map((term) => (
              <a
                key={term}
                href={'/search?' + new URLSearchParams({ q: term })}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-red-600 hover:text-red-600 transition-colors"
              >
                Search "{term}"
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
