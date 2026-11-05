import React from 'react';
import { Article, CategoryType } from '../types';
import { CATEGORIES_CONFIG } from '../config/siteConfig';
import { NewsCard } from '../components/NewsCard';
import { AdSlot } from '../components/AdSlot';
import { Award } from 'lucide-react';

interface CategoryPageProps {
  category: CategoryType;
  articles: Article[];
  allArticles: Article[];
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  articles,
  allArticles,
}) => {
  const meta = CATEGORIES_CONFIG[category];

  // Category articles
  const categoryArticles = articles.filter((a) => a.category === category);
  const [leadArticle, ...gridArticles] = categoryArticles;

  // Most Read articles across site for the sidebar
  const mostReadArticles = [...allArticles]
    .sort((a, b) => (b.viewsCount || 0) - (a.viewsCount || 0))
    .slice(0, 5);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
      {/* Category Header Banner with accent color */}
      <header
        className="rounded-2xl p-6 sm:p-10 mb-8 border border-stone-200 dark:border-stone-800 transition-colors relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${meta.color}15 0%, rgba(28,25,23,0.03) 100%)`,
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span
            className="w-3.5 h-3.5 rounded-sm inline-block"
            style={{ backgroundColor: meta.color }}
          ></span>
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: meta.color }}
          >
            {category} Section
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 dark:text-white tracking-tight">
          {category}
        </h1>

        <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
          {meta.description}
        </p>

        <div className="mt-4 flex items-center gap-3 text-xs text-stone-500 dark:text-stone-400 font-mono">
          <span>{categoryArticles.length} Published Articles</span>
          <span>·</span>
          <span>Updated continuously</span>
        </div>
      </header>

      {/* Top Leaderboard Ad Slot */}
      <AdSlot size="leaderboard" label={`${category} Section Sponsor`} />

      {/* Main Grid: Content (8 Cols) + Sidebar (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
        {/* Left Column: Category Articles */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Featured Story at the Top */}
          {leadArticle && (
            <div className="mb-10">
              <div className="flex items-center justify-between pb-2 mb-4 border-b border-stone-200 dark:border-stone-800">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Featured {category} Story
                </span>
              </div>
              <NewsCard
                article={leadArticle}
                variant="hero"
                headingAs="h2"
              />
            </div>
          )}

          {/* Grid of Remaining Article Cards */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-5 border-b-2 border-stone-900 dark:border-stone-100">
            <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white">
              All {category} Dispatches
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {gridArticles.map((article) => (
              <NewsCard
                key={article.id}
                article={article}
                variant="standard"
              />
            ))}
          </div>

          {/* In-feed ad banner */}
          <AdSlot size="leaderboard" label={`${category} Archive Sponsor`} className="mt-10" />
        </div>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 w-full flex flex-col gap-6">
          {/* Most Read Box */}
          <div className="bg-white dark:bg-stone-900/80 rounded-xl p-5 border border-stone-200 dark:border-stone-800 shadow-xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200 dark:border-stone-800">
              <h2 className="font-serif text-base font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Most Read Today</span>
              </h2>
            </div>

            <div className="flex flex-col">
              {mostReadArticles.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  variant="compact"
                />
              ))}
            </div>
          </div>

          {/* 300x250 Ad Slot */}
          <AdSlot size="rectangle" label={`${category} Sponsor Slot`} />

          {/* Sticky 300x600 Ad Slot */}
          <div className="sticky top-20">
            <AdSlot size="skyscraper" label="Sponsored Skyscraper" />
          </div>
        </aside>
      </div>
    </div>
  );
};
