import React, { useState } from 'react';
import { Article } from '../types';
import { CATEGORIES_CONFIG } from '../config/siteConfig';
import { Clock } from 'lucide-react';
import { articlePath, categoryPath } from '../lib/routes';
import { imageAlt } from '../lib/images';
import { isoNewsDate } from '../lib/dates';
import { NewsImage } from './NewsImage';

interface NewsCardProps {
  article: Article;
  headingAs?: 'h2' | 'h3';
  sizes?: string;
  priority?: boolean;
  variant?: 'standard' | 'horizontal' | 'hero' | 'compact' | 'trending';
  rank?: number;
  showExcerpt?: boolean;
  className?: string;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  article,
  headingAs: Heading = 'h3',
  sizes,
  priority = false,
  variant = 'standard',
  rank,
  showExcerpt = true,
  className = '',
}) => {
  const [failedImage, setFailedImage] = useState('');
  const categoryMeta = CATEGORIES_CONFIG[article.category];
  const storyLink = <a className="card-headline" href={articlePath(article)}>{article.title}</a>;
  const published = <time dateTime={isoNewsDate(article.date)}>{article.date}</time>;
  const imageSizes = sizes || {
    compact: '(min-width: 640px) 96px, 80px',
    horizontal: '(min-width: 640px) 160px, calc(100vw - 58px)',
    hero: '(min-width: 1280px) 798px, (min-width: 1024px) calc(66.67vw - 55px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)',
    standard: '(min-width: 1280px) 388px, (min-width: 1024px) calc(33.33vw - 38px), (min-width: 640px) calc(50vw - 42px), calc(100vw - 32px)',
    trending: undefined,
  }[variant];

  const renderPhoto = (className: string) => failedImage === article.image ? (
    <div className="w-full h-full flex items-center justify-center bg-stone-800 text-xs font-semibold text-stone-200" aria-hidden="true">
      {article.category} Dispatch
    </div>
  ) : (
    <NewsImage
      src={article.image}
      alt={imageAlt(article.image, article.imageCaption || article.title)}
      sizes={imageSizes}
      priority={priority}
      onError={() => setFailedImage(article.image)}
      className={className}
    />
  );

  // Variant: Trending (Numbered 1-5)
  if (variant === 'trending') {
    return (
      <article
        className={`news-card group flex items-start gap-3.5 py-3 border-b border-stone-200 dark:border-stone-800 last:border-b-0 ${className}`}
      >
        <span className="font-serif font-black text-2xl sm:text-3xl text-stone-300 dark:text-stone-700 group-hover:text-red-600 dark:group-hover:text-red-500 tabular-nums transition-colors w-7 shrink-0 text-center">
          {rank}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400 mb-1">
            <a
              href={categoryPath(article.category)}
              className="card-category font-semibold uppercase tracking-wider text-[11px] hover:underline"
              style={{ color: categoryMeta.color }}
            >
              {article.category}
            </a>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
          <Heading className="font-serif text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
            {storyLink}
          </Heading>
        </div>
      </article>
    );
  }

  // Variant: Compact (Small thumbnail on side)
  if (variant === 'compact') {
    return (
      <article
        className={`news-card group flex items-start gap-3 py-3 border-b border-stone-200 dark:border-stone-800 last:border-b-0 ${className}`}
      >
        <div className="w-20 h-16 sm:w-24 sm:h-18 rounded overflow-hidden shrink-0 bg-stone-200 dark:bg-stone-800 relative">
          {renderPhoto('w-full h-full object-cover group-hover:scale-105 transition-transform duration-300')}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px] text-stone-500 dark:text-stone-400 mb-0.5">
            <a
              href={categoryPath(article.category)}
              className="card-category font-semibold uppercase tracking-wider text-[10px] hover:underline"
              style={{ color: categoryMeta.color }}
            >
              {article.category}
            </a>
            <span aria-hidden="true">·</span>
            {published}
          </div>
          <Heading className="font-serif text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
            {storyLink}
          </Heading>
        </div>
      </article>
    );
  }

  // Variant: Horizontal (List beside Hero or Category Lead)
  if (variant === 'horizontal') {
    return (
      <article
        className={`news-card group flex flex-col sm:flex-row items-stretch gap-4 p-3 rounded-lg border border-stone-200/80 dark:border-stone-800 bg-white dark:bg-stone-900/60 hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-sm transition-all ${className}`}
      >
        <div className="w-full sm:w-40 sm:h-28 aspect-video sm:aspect-auto rounded overflow-hidden shrink-0 bg-stone-200 dark:bg-stone-800 relative">
          {renderPhoto('w-full h-full object-cover group-hover:scale-105 transition-transform duration-300')}
        </div>
        <div className="min-w-0 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400 mb-1">
              <a
                href={categoryPath(article.category)}
                className="card-category font-bold uppercase tracking-wider text-[11px] hover:underline"
                style={{ color: categoryMeta.color }}
              >
                {article.category}
              </a>
              <span aria-hidden="true">·</span>
              {published}
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>
            <Heading className="font-serif text-base font-bold text-stone-900 dark:text-stone-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
              {storyLink}
            </Heading>
            {showExcerpt && (
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 line-clamp-2 leading-relaxed">
                {article.excerpt}
              </p>
            )}
          </div>
          <div className="mt-2 text-[11px] text-stone-500 dark:text-stone-400 flex items-center justify-between">
            <span>By {article.author.name}</span>
          </div>
        </div>
      </article>
    );
  }

  // Variant: Hero Lead (Dominant Featured Story)
  if (variant === 'hero') {
    return (
      <article
        className={`news-card group rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col ${className}`}
      >
        <div className="grid w-full overflow-hidden bg-stone-900 text-white">
          <div className="col-start-1 row-start-1 z-0 aspect-video self-stretch">
            {renderPhoto('w-full h-full object-cover motion-safe:group-hover:scale-103 transition-transform duration-500')}
          </div>
          <div className="pointer-events-none col-start-1 row-start-1 z-10 bg-linear-to-t from-black/90 via-black/40 to-transparent" aria-hidden="true" />

          <div className="col-start-1 row-start-1 z-20 self-end p-4">
            <a
              href={categoryPath(article.category)}
              className="card-category inline-block px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider text-white mb-2 shadow-sm"
              style={{ backgroundColor: categoryMeta.color }}
            >
              {article.category}
            </a>
            <Heading className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight group-hover:text-red-300 transition-colors">
              {storyLink}
            </Heading>
          </div>
        </div>

        <div className="p-5 min-w-0 flex-1 flex flex-col justify-between">
          <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="pt-4 mt-4 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-500 dark:text-stone-400">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="font-semibold text-stone-800 dark:text-stone-200">
                {article.author.name}
              </span>
              <span aria-hidden="true">·</span>
              {published}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Variant: Standard Grid Card (Default)
  return (
    <article
      className={`news-card group rounded-lg overflow-hidden border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-stone-900/70 hover:border-stone-300 dark:hover:border-stone-700 hover:shadow-md transition-all duration-200 flex flex-col ${className}`}
    >
      {/* 16:9 Image container */}
      <div className="relative aspect-16/9 w-full bg-stone-200 dark:bg-stone-800 overflow-hidden">
        {renderPhoto('w-full h-full object-cover group-hover:scale-105 transition-transform duration-300')}
      </div>

      {/* Card Content */}
      <div className="p-4 min-w-0 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata clean unboxed text */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-500 dark:text-stone-400 mb-1.5">
            <a
              href={categoryPath(article.category)}
              className="card-category font-bold uppercase tracking-wider text-[11px] hover:underline cursor-pointer"
              style={{ color: categoryMeta.color }}
            >
              {article.category}
            </a>
            <span aria-hidden="true">·</span>
            {published}
          </div>

          {/* Bold Serif Headline */}
          <Heading className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">
            {storyLink}
          </Heading>

          {/* Excerpt */}
          {showExcerpt && (
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 line-clamp-2 leading-relaxed">
              {article.excerpt}
            </p>
          )}
        </div>

        {/* Footer info */}
        <div className="pt-3 mt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
          <span className="truncate max-w-[150px]">By {article.author.name}</span>
          <span className="shrink-0 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{article.readTime}</span>
          </span>
        </div>
      </div>
    </article>
  );
};
