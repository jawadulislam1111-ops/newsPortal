import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { CATEGORIES_CONFIG } from '../config/siteConfig';
import { AdSlot } from '../components/AdSlot';
import { ShareBar } from '../components/ShareBar';
import { NewsCard } from '../components/NewsCard';
import { NewsImage } from '../components/NewsImage';
import { articlePath, categoryPath } from '../lib/routes';
import { imageAlt } from '../lib/images';
import { isoNewsDate } from '../lib/dates';
import { Clock, ChevronRight, Bookmark, ArrowRight, Flame } from 'lucide-react';

interface ArticlePageProps {
  article: Article;
  allArticles: Article[];
  canonicalUrl?: string;
}

export const ArticlePage: React.FC<ArticlePageProps> = ({
  article,
  allArticles,
  canonicalUrl,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [bookmarked, setBookmarked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const categoryMeta = CATEGORIES_CONFIG[article.category];

  // Track reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Related news: 4 articles in same category (or other categories if not enough)
  const relatedNews = allArticles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .concat(allArticles.filter((a) => a.id !== article.id && a.category !== article.category))
    .slice(0, 4);

  // Next Article suggestion
  const articleIndex = allArticles.findIndex((story) => story.id === article.id);
  const nextArticle = allArticles.length > 1 ? allArticles[(articleIndex + 1) % allArticles.length] : undefined;

  // Trending articles for sidebar
  const trendingArticles = allArticles.filter((a) => a.trending).slice(0, 5);

  const paragraphs = article.content?.paragraphs || [article.excerpt];
  const subheadings = article.content?.subheadings || [];
  const pullQuote = article.content?.pullQuote;
  const inlineImage = article.content?.inlineImage;

  return (
    <div className="w-full relative">
      {/* Reading Progress Bar at the top */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
        {/* Breadcrumb: Home > Category > Article */}
        <nav aria-label="Breadcrumb" className="mb-5 text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1.5 flex-wrap">
          <a
            href="/"
            className="hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            Home
          </a>
          <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
          <a
            href={categoryPath(article.category)}
            className="font-medium hover:underline cursor-pointer"
            style={{ color: categoryMeta.color }}
          >
            {article.category}
          </a>
          <ChevronRight className="w-3 h-3 text-stone-400 shrink-0" />
          <span aria-current="page" className="truncate max-w-[200px] sm:max-w-md text-stone-800 dark:text-stone-300 font-medium">
            {article.title}
          </span>
        </nav>

        {/* Main Grid: Article Column (8 Cols) + Sidebar (4 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Article Content Container (8 Cols) */}
          <article className="lg:col-span-8 min-w-0 flex flex-col">
            {/* Header Area */}
            <header className="mb-6">
              {/* Category Tag */}
              <div className="flex items-center justify-between mb-3">
                <a
                  href={categoryPath(article.category)}
                  className="inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded transition-opacity cursor-pointer"
                  style={{
                    backgroundColor: `${categoryMeta.color}15`,
                    color: categoryMeta.color,
                  }}
                >
                  {article.category}
                </a>

                {/* Font Size Adjuster & Bookmark */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-stone-100 dark:bg-stone-800 rounded p-0.5 text-xs">
                    <button
                      onClick={() => setFontSize('normal')}
                      className={`px-2 py-1 rounded font-serif ${fontSize === 'normal' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-xs' : 'text-stone-500'}`}
                      aria-pressed={fontSize === 'normal'}
                      title="Default font size"
                    >
                      A
                    </button>
                    <button
                      onClick={() => setFontSize('large')}
                      className={`px-2 py-1 rounded font-serif text-sm font-bold ${fontSize === 'large' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-xs' : 'text-stone-500'}`}
                      aria-pressed={fontSize === 'large'}
                      title="Large font size"
                    >
                      A+
                    </button>
                  </div>

                  <button
                    onClick={() => setBookmarked(!bookmarked)}
                    aria-pressed={bookmarked}
                    aria-label={bookmarked ? "Remove bookmark" : "Save article"}
                    className={`p-1.5 rounded border border-stone-200 dark:border-stone-800 transition-colors ${
                      bookmarked ? 'bg-red-50 text-red-600 dark:bg-red-950/40' : 'text-stone-500 hover:text-stone-900 dark:hover:text-white'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Large Serif Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 dark:text-white tracking-tight leading-[1.18] mb-4">
                {article.title}
              </h1>

              {/* Excerpt deck */}
              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed font-sans mb-5 font-normal">
                {article.excerpt}
              </p>

              {/* Author, Dates, Reading Time */}
              <div className="flex flex-wrap items-center gap-3.5 py-3 border-y border-stone-200 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400">
                <NewsImage
                  src={article.author.avatar}
                  alt=""
                  sizes="40px"
                  className="w-10 h-10 rounded-full object-cover shrink-0 border border-stone-200 dark:border-stone-700"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-stone-900 dark:text-stone-100 text-sm">
                    {article.author.name}
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400">
                    {article.author.role}
                  </div>
                </div>

                <div className="order-last w-full sm:order-none sm:w-auto sm:text-right text-[11px]">
                  <div>Published: <time dateTime={isoNewsDate(article.date)}>{article.date}</time></div>
                  {article.updatedDate && (
                    <div className="text-stone-400 dark:text-stone-400">
                      Updated: <time dateTime={isoNewsDate(article.updatedDate)}>{article.updatedDate}</time>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1 shrink-0 pl-2 border-l border-stone-200 dark:border-stone-800">
                  <Clock className="w-3.5 h-3.5 text-stone-400" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </header>

            {/* Ad slot: below the headline */}
            <AdSlot size="leaderboard" label="Top Article Sponsor" className="mb-6" />

            {/* Full-width featured image with caption */}
            <figure className="mb-8 rounded-xl overflow-hidden bg-stone-900 border border-stone-200 dark:border-stone-800">
              <NewsImage
                src={article.image}
                alt={imageAlt(article.image, article.imageCaption || article.title)}
                priority
                sizes="(min-width: 1280px) 796px, (min-width: 1024px) calc(66.67vw - 56px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)"
                className="w-full aspect-16/9 object-cover"
              />
              {article.imageCaption && (
                <figcaption className="p-3 text-xs text-stone-500 dark:text-stone-400 italic bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800">
                  Photo: {article.imageCaption}
                </figcaption>
              )}
            </figure>

            {/* Share Buttons (Desktop / Inline) */}
            <ShareBar title={article.title} url={canonicalUrl} className="mb-8" />

            {/* Article Body: ~6 paragraphs, 700px reading width, 18px font size, 1.7 line height */}
            <div
              className={`max-w-[700px] mx-auto text-stone-800 dark:text-stone-200 leading-[1.75] ${
                fontSize === 'large' ? 'text-[20px]' : 'text-[18px]'
              }`}
            >
              {/* Paragraph 1 with drop cap */}
              {paragraphs[0] && (
                <p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900 dark:first-letter:text-stone-100">
                  {paragraphs[0]}
                </p>
              )}

              {/* Paragraph 2 */}
              {paragraphs[1] && <p className="mb-6">{paragraphs[1]}</p>}

              {/* Ad slot: after paragraph 2 */}
              <AdSlot size="in-article" label="In-Article Sponsor (Section 1)" />

              {/* Subheading 1 */}
              {subheadings[0] && (
                <h2 className="font-serif text-2xl font-bold text-stone-950 dark:text-white mt-8 mb-4">
                  {subheadings[0].text}
                </h2>
              )}

              {/* Paragraph 3 */}
              {paragraphs[2] && <p className="mb-6">{paragraphs[2]}</p>}

              {/* Pull Quote */}
              {pullQuote && (
                <figure className="my-8 py-6 px-8 border-y-2 border-stone-300 dark:border-stone-700 bg-stone-50/70 dark:bg-stone-900/40 rounded-sm">
                  <blockquote className="font-serif italic text-xl sm:text-2xl text-stone-900 dark:text-stone-100 leading-snug">
                    "{pullQuote.quote}"
                  </blockquote>
                  <figcaption className="mt-3 text-xs font-sans uppercase tracking-widest text-stone-500 font-bold">
                    — {pullQuote.author}
                  </figcaption>
                </figure>
              )}

              {/* Paragraph 4 */}
              {paragraphs[3] && <p className="mb-6">{paragraphs[3]}</p>}

              {/* Ad slot: mid-article */}
              <AdSlot size="in-article" label="In-Article Sponsor (Mid-Article)" />

              {/* Inline Image */}
              {inlineImage && (
                <figure className="my-8 rounded-lg overflow-hidden border border-stone-200 dark:border-stone-800">
                  <NewsImage
                    src={inlineImage.src}
                    alt={imageAlt(inlineImage.src, inlineImage.caption)}
                    sizes="(min-width: 1280px) 700px, (min-width: 1024px) min(700px, calc(66.67vw - 56px)), (min-width: 768px) 700px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)"
                    className="w-full aspect-16/9 object-cover"
                  />
                  <figcaption className="p-2.5 text-xs text-stone-500 dark:text-stone-400 italic bg-stone-50 dark:bg-stone-900">
                    {inlineImage.caption}
                  </figcaption>
                </figure>
              )}

              {/* Subheading 2 */}
              {subheadings[1] && (
                <h2 className="font-serif text-2xl font-bold text-stone-950 dark:text-white mt-8 mb-4">
                  {subheadings[1].text}
                </h2>
              )}

              {/* Paragraph 5 */}
              {paragraphs[4] && <p className="mb-6">{paragraphs[4]}</p>}

              {/* Paragraph 6 */}
              {paragraphs[5] && <p className="mb-6">{paragraphs[5]}</p>}
            </div>

            {/* Ad slot: at the end of article */}
            <AdSlot size="leaderboard" label="Post-Article Display Sponsor" className="mt-8 mb-6" />

            {/* Tags Section */}
            <div className="py-6 border-t border-stone-200 dark:border-stone-800 flex items-center gap-2 flex-wrap text-xs">
              <span className="font-bold text-stone-500 uppercase tracking-wider text-[11px]">
                Related Topics:
              </span>
              {article.tags.map((tag) => (
                <a
                  key={tag}
                  href={'/search?' + new URLSearchParams({ q: tag })}
                  className="px-3 py-1 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer"
                >
                  #{tag}
                </a>
              ))}
            </div>

            {/* Author Bio Box */}
            <div className="my-8 p-6 rounded-xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <NewsImage
                src={article.author.avatar}
                alt=""
                sizes="64px"
                className="w-16 h-16 rounded-full object-cover shrink-0 border-2 border-white dark:border-stone-700 shadow-sm"
              />
              <div className="flex-1 text-center sm:text-left">
                <div className="text-xs uppercase font-bold tracking-wider text-red-600 mb-0.5">
                  About the Author
                </div>
                <h2 className="font-serif text-lg font-bold text-stone-900 dark:text-white">
                  {article.author.name}
                </h2>
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-2">
                  {article.author.role}
                </p>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {article.author.bio || 'Covers global investigative reports, geopolitical summits, and public policy for DailyPulse.'}
                </p>
              </div>
            </div>

            {/* "Next Article" Suggestion Banner */}
            {nextArticle && (
              <a
                href={articlePath(nextArticle)}
                aria-labelledby="next-story-title"
                className="group my-8 p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60 hover:border-red-600 dark:hover:border-red-500 transition-all cursor-pointer flex items-center justify-between gap-4"
              >
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-red-600 font-bold block mb-1">
                    Next Story in Stream →
                  </span>
                  <h2 id="next-story-title" className="font-serif text-lg font-bold text-stone-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors line-clamp-1">
                    {nextArticle.title}
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    {nextArticle.category} · {nextArticle.readTime}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            )}

            {/* "Related News" (4 cards) */}
            <section aria-label="Related News" className="mt-8">
              <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 pb-3 mb-5 border-b-2 border-stone-900 dark:border-stone-100">
                <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-white">
                  Related Stories
                </h2>
                <a
                  href={categoryPath(article.category)}
                  className="text-xs font-bold uppercase tracking-wider text-red-600 hover:underline"
                >
                  More in {article.category}
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {relatedNews.map((item) => (
                  <NewsCard
                    key={item.id}
                    article={item}
                    variant="standard"
                  />
                ))}
              </div>
            </section>
          </article>

          {/* Sidebar on desktop (4 Cols) */}
          <aside className="lg:col-span-4 w-full flex flex-col gap-6">
            {/* Trending Now */}
            <div className="bg-white dark:bg-stone-900/80 rounded-xl p-5 border border-stone-200 dark:border-stone-800 shadow-xs">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-stone-200 dark:border-stone-800">
                <h2 className="font-serif text-base font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-red-600" />
                  <span>Trending Worldwide</span>
                </h2>
              </div>

              <div className="divide-y divide-stone-100 dark:divide-stone-800/60">
                {trendingArticles.map((tArticle, idx) => (
                  <NewsCard
                    key={tArticle.id}
                    article={tArticle}
                    variant="trending"
                    rank={idx + 1}
                  />
                ))}
              </div>
            </div>

            {/* 300x250 Ad */}
            <AdSlot size="rectangle" label="Contextual Sponsor" />

            {/* Sticky 300x600 Skyscraper Ad on desktop */}
            <div className="sticky top-20">
              <AdSlot size="skyscraper" label="Sticky Story Sponsor" />
            </div>
          </aside>
        </div>
      </div>

      {/* Sticky Mobile Share Bar */}
      <ShareBar title={article.title} url={canonicalUrl} isStickyMobile />
    </div>
  );
};
