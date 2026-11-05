import React, { useState } from 'react';
import { Article } from '../types';
import { HeroSection } from '../components/HeroSection';
import { CategoryBlock } from '../components/CategoryBlock';
import { Sidebar } from '../components/Sidebar';
import { AdSlot } from '../components/AdSlot';
import { ProgrammaticLeaderboard } from '../components/ProgrammaticLeaderboard';
import { ProgrammaticAd, SandboxedAdFrame, scriptAdDocument } from '../components/SandboxedAd';
import { NewsCard } from '../components/NewsCard';

interface HomePageProps {
  articles: Article[];
}

export const HomePage: React.FC<HomePageProps> = ({
  articles,
}) => {
  const [latestFilter, setLatestFilter] = useState<'all' | 'curated'>('all');

  // Lead story is the main featured article (Geneva Accord or first featured)
  const leadStory = articles.find((a) => a.featured && a.id === 'art-intl-01') || articles[0];
  
  // Top 4 stories for Hero side list
  const topStories = articles.filter((a) => a.id !== leadStory.id).slice(0, 4);

  // Trending articles (sorted by trending or view count)
  const trendingArticles = articles.filter((a) => a.trending).slice(0, 5);

  // Most Read articles
  const mostReadArticles = [...articles]
    .sort((a, b) => (b.viewsCount || 0) - (a.viewsCount || 0))
    .slice(0, 6);

  // Latest News (8 cards)
  const latestArticles = articles
    .filter((a) => a.id !== leadStory.id && !topStories.some((t) => t.id === a.id))
    .slice(0, 8);

  // Category blocks
  const nationalArticles = articles.filter((a) => a.category === 'National');
  const internationalArticles = articles.filter((a) => a.category === 'International');
  const sportsArticles = articles.filter((a) => a.category === 'Sports');
  const techArticles = articles.filter((a) => a.category === 'Technology');
  const entArticles = articles.filter((a) => a.category === 'Entertainment');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
      {/* 1. Header leaderboard advertisement below the ticker */}
      <ProgrammaticLeaderboard />

      {/* 2. Hero Section: One large featured story beside 4 top stories */}
      <HeroSection
        leadStory={leadStory}
        topStories={topStories}
      />

      {/* Main Grid: Content Area (8 Cols) + Sidebar (4 Cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left / Main Content Column (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col">
          {/* 3. "Latest News" Grid of 8 Cards */}
          <section aria-label="Latest News Grid" className="mb-12">
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2.5 pb-3 mb-6 border-b-2 border-stone-900 dark:border-stone-100">
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Latest Wire Dispatch
                </h2>
                <span className="text-xs bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-400 font-semibold px-2 py-0.5 rounded">
                  Live Feed
                </span>
              </div>

              {/* Segmented filter */}
              <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 p-1 rounded-lg text-xs">
                <button
                  aria-pressed={latestFilter === 'all'}
                  onClick={() => setLatestFilter('all')}
                  className={`px-3 py-1 font-medium rounded transition-colors cursor-pointer ${
                    latestFilter === 'all'
                      ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-xs'
                      : 'text-stone-500 hover:text-stone-900 dark:hover:text-white'
                  }`}
                >
                  All 8 Stories
                </button>
                <button
                  aria-pressed={latestFilter === 'curated'}
                  onClick={() => setLatestFilter('curated')}
                  className={`px-3 py-1 font-medium rounded transition-colors cursor-pointer ${
                    latestFilter === 'curated'
                      ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-xs'
                      : 'text-stone-500 hover:text-stone-900 dark:hover:text-white'
                  }`}
                >
                  Editor's Picks
                </button>
              </div>
            </div>

            {/* 8-Card Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {(latestFilter === 'all' ? latestArticles : latestArticles.slice(0, 4)).map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                  variant="standard"
                />
              ))}
            </div>
          </section>

          <ProgrammaticAd
            label="Advertisement"
            keyId="025c68e2b9d50c1aa7f881a9383ab226"
            width={468}
            height={60}
          />

          <aside
            role="complementary"
            aria-label="Advertisement"
            className="my-6 flex flex-col items-center"
          >
            <div className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1 font-mono">
              Advertisement
            </div>
            <SandboxedAdFrame
              title="Advertisement"
              srcDoc={scriptAdDocument('https://bauval.org/21/713e05fd1de221162c74ebb89f2f6439', {
                async: true,
                dataCfasync: true,
                containerId: 'container-713e05fd1de221162c74ebb89f2f6439',
              })}
              width={300}
              height={250}
            />
          </aside>

          {/* In-feed ad banner between sections */}
          <AdSlot size="leaderboard" label="In-Feed Native Sponsor" className="my-4" />

          {/* 4. One Block Per Category */}
          {/* Category Block 1: National */}
          <CategoryBlock
            category="National"
            articles={nationalArticles}
          />

          {/* In-feed ad banner between blocks */}
          <AdSlot size="in-article" label="Special Section Sponsor" />

          {/* Category Block 2: International */}
          <CategoryBlock
            category="International"
            articles={internationalArticles}
          />

          {/* Category Block 3: Technology */}
          <CategoryBlock
            category="Technology"
            articles={techArticles}
          />

          {/* In-feed ad banner between blocks */}
          <AdSlot size="leaderboard" label="Frontier Tech Sponsor" className="my-4" />

          {/* Category Block 4: Sports */}
          <CategoryBlock
            category="Sports"
            articles={sportsArticles}
          />

          {/* Category Block 5: Entertainment */}
          <CategoryBlock
            category="Entertainment"
            articles={entArticles}
          />
        </div>

        {/* Right / Sidebar Column (4 Cols on desktop, moves below on mobile) */}
        <div className="lg:col-span-4 w-full">
          <Sidebar
            trendingArticles={trendingArticles}
            mostReadArticles={mostReadArticles}
          />
        </div>
      </div>
    </div>
  );
};
