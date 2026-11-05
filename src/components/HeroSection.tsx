import React from 'react';
import { Article } from '../types';
import { NewsCard } from './NewsCard';

interface HeroSectionProps {
  leadStory: Article;
  topStories: Article[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  leadStory,
  topStories,
}) => {
  return (
    <section aria-label="Top News Stories" className="w-full mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column (7 cols): One Large Featured Story */}
        <div className="lg:col-span-7 xl:col-span-8">
          <NewsCard
            article={leadStory}
            variant="hero"
            headingAs="h2"
            priority
            sizes="(min-width: 1280px) 802px, (min-width: 1024px) calc(58.33vw - 48px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)"
            className="h-full"
          />
        </div>

        {/* Right Column (5 cols): List of 4 smaller top stories */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col">
          <div className="flex items-center justify-between pb-2 mb-3 border-b-2 border-stone-900 dark:border-stone-100">
            <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-stone-900 dark:text-white flex items-center gap-1.5">
              <span>Top Stories</span>
            </h2>
            <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest">
              Live Updates
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {topStories.slice(0, 4).map((story) => (
              <NewsCard
                key={story.id}
                article={story}
                variant="horizontal"
                showExcerpt={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
