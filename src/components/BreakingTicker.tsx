import React, { useState, useEffect } from 'react';
import { BREAKING_NEWS } from '../data/newsData';
import { articlePath } from '../lib/routes';
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const breakingStories = BREAKING_NEWS.map(({ id, headline }) => ({ headline, href: articlePath(id) }));

export const BreakingTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || breakingStories.length < 2) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingStories.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentItem = breakingStories[currentIndex];
  if (!currentItem) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + breakingStories.length) % breakingStories.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % breakingStories.length);
  };

  return (
    <div
      id="breaking-news"
      aria-label="Breaking News Ticker"
      className="scroll-mt-28 lg:scroll-mt-14 w-full bg-red-600 dark:bg-red-700 text-white text-xs transition-colors shadow-xs"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between gap-3">
        {/* Breaking Badge */}
        <div className="flex items-center gap-1.5 shrink-0 bg-red-800 dark:bg-red-900 px-2.5 py-1 rounded text-[11px] font-black uppercase tracking-wider select-none">
          <Zap className="w-3.5 h-3.5 fill-current animate-pulse" />
          <span>BREAKING</span>
        </div>

        {/* Animated Headline Display */}
        <div className="flex-1 overflow-hidden">
          <a
            href={currentItem.href}
            className="w-full text-left font-medium text-white/95 hover:text-white hover:underline transition-all truncate block cursor-pointer"
          >
            <span className="opacity-90 font-mono text-[11px] mr-2">
              [{currentIndex + 1}/{breakingStories.length}]
            </span>
            {currentItem.headline}
          </a>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handlePrev}
            aria-label="Previous breaking news headline"
            className="p-1 rounded hover:bg-red-700 dark:hover:bg-red-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next breaking news headline"
            className="p-1 rounded hover:bg-red-700 dark:hover:bg-red-800 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
