import React from 'react';
import { Article, CategoryType } from '../types';
import { CATEGORIES_CONFIG } from '../config/siteConfig';
import { NewsCard } from './NewsCard';
import { categoryPath } from '../lib/routes';
import { ArrowRight } from 'lucide-react';

interface CategoryBlockProps {
  category: CategoryType;
  articles: Article[];
}

export const CategoryBlock: React.FC<CategoryBlockProps> = ({
  category,
  articles,
}) => {
  const meta = CATEGORIES_CONFIG[category];
  if (!articles || articles.length === 0) return null;

  const leadArticle = articles[0];
  const sideArticles = articles.slice(1, 4);

  return (
    <section aria-label={`${category} News`} className="w-full my-8">
      {/* Category Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 pb-2.5 mb-5 border-b-2 border-stone-200 dark:border-stone-800">
        <div className="flex items-center gap-2.5">
          <span
            className="w-3.5 h-3.5 rounded-sm"
            style={{ backgroundColor: meta.color }}
          ></span>
          <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
            {category}
          </h2>
        </div>

        <a
          href={categoryPath(category)}
          className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors hover:underline cursor-pointer"
          style={{ color: meta.color }}
        >
          <span>See all in {category}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      {/* Block Layout: 1 Lead Story (Left 55%) + 2-3 Smaller Stories (Right 45%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Lead Story */}
        <div className="lg:col-span-7">
          <NewsCard
            article={leadArticle}
            variant="standard"
            sizes="(min-width: 1280px) 456px, (min-width: 1024px) calc(38.89vw - 40px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)"
            className="h-full"
          />
        </div>

        {/* 2-3 Smaller stories on side */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-3">
          {sideArticles.map((story) => (
            <NewsCard
              key={story.id}
              article={story}
              variant="compact"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
