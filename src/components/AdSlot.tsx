import React, { useState } from 'react';
import { AdSize } from '../types';
import { X, ExternalLink } from 'lucide-react';

interface AdSlotProps {
  size: AdSize;
  className?: string;
  label?: string;
  dismissible?: boolean;
}

export const AdSlot: React.FC<AdSlotProps> = ({
  size,
  className = '',
  label = 'Advertisement',
  dismissible = false,
}) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  // Exact fixed height & width mappings to eliminate Cumulative Layout Shift (CLS)
  switch (size) {
    case 'leaderboard':
      return (
        <aside
          role="complementary"
          aria-label={label}
          className={`w-full my-6 flex flex-col items-center justify-center ${className}`}
        >
          <div className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1 font-mono">
            {label} · 728×90 (Desktop) / 320×50 (Mobile)
          </div>
          <div className="w-[320px] max-w-full h-[50px] sm:w-[728px] sm:h-[90px] border border-dashed border-stone-300 dark:border-stone-700 bg-stone-100/70 dark:bg-stone-900/60 rounded flex flex-col items-center justify-center px-4 text-center transition-colors">
            <span className="text-xs font-medium text-stone-600 dark:text-stone-300 flex items-center gap-1.5">
              <span>Display Leaderboard Sponsor Slot</span>
              <ExternalLink className="w-3 h-3 text-stone-500" />
            </span>
            <span className="text-[11px] text-stone-500 dark:text-stone-400 hidden sm:inline mt-0.5">
              Reserved banner space for programmatic ad networks
            </span>
          </div>
        </aside>
      );

    case 'rectangle':
      return (
        <aside
          role="complementary"
          aria-label={label}
          className={`my-5 flex flex-col items-center justify-center ${className}`}
        >
          <div className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1 font-mono">
            {label} · 300×250
          </div>
          <div className="w-[300px] max-w-full h-[250px] border border-dashed border-stone-300 dark:border-stone-700 bg-stone-100/70 dark:bg-stone-900/60 rounded flex flex-col items-center justify-center p-4 text-center transition-colors">
            <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-stone-500 mb-3">
              <ExternalLink className="w-5 h-5" />
            </div>
            <span className="text-xs font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wide">
              Medium Rectangle (MPU)
            </span>
            <span className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 max-w-[220px]">
              Targeted contextual brand advertisement slot
            </span>
          </div>
        </aside>
      );

    case 'skyscraper':
      return (
        <aside
          role="complementary"
          aria-label={label}
          className={`my-6 flex flex-col items-center justify-center ${className}`}
        >
          <div className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1 font-mono">
            {label} · 300×600
          </div>
          <div className="w-[300px] max-w-full h-[600px] border border-dashed border-stone-300 dark:border-stone-700 bg-stone-100/70 dark:bg-stone-900/60 rounded flex flex-col items-center justify-between p-6 text-center transition-colors">
            <div className="text-[11px] text-stone-500 tracking-wider uppercase font-mono">
              Premium Skyscraper
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-300">
                <ExternalLink className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-stone-800 dark:text-stone-200">
                High-Impact Brand Storytelling
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 max-w-[200px]">
                Fixed vertical ad canvas sticky beside editorial content
              </p>
            </div>
            <span className="text-[10px] text-stone-500 dark:text-stone-400">
              Interactive Display Unit
            </span>
          </div>
        </aside>
      );

    case 'in-article':
      return (
        <aside
          role="complementary"
          aria-label={label}
          className={`my-8 py-3 px-4 border-y border-stone-200 dark:border-stone-800 flex flex-col items-center justify-center bg-stone-50/50 dark:bg-stone-900/30 ${className}`}
        >
          <div className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1 font-mono">
            {label} · 336×280 Large In-Feed Rectangle
          </div>
          <div className="w-full max-w-[336px] h-[280px] border border-dashed border-stone-300 dark:border-stone-700 bg-stone-100/80 dark:bg-stone-900/70 rounded flex flex-col items-center justify-center p-4 text-center">
            <span className="text-xs font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
              <span>In-Article Native Sponsor</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
            </span>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 max-w-[240px]">
              Engaging narrative ad format designed to match editorial flow
            </p>
          </div>
        </aside>
      );

    case 'mobile-anchor':
      return (
        <aside
          role="complementary"
          aria-label="Sticky mobile anchor advertisement"
          className="mobile-anchor-ad fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-stone-950/95 text-stone-100 border-t border-stone-800 backdrop-blur-md shadow-2xl transition-transform duration-300 flex flex-col items-center"
        >
          <div className="w-full max-w-md flex items-center justify-between px-3 py-0.5 text-[9px] uppercase tracking-widest text-stone-400 font-mono">
            <span>Advertisement · 320×50 Anchor</span>
            {dismissible && (
              <button
                onClick={() => setDismissed(true)}
                className="p-1 hover:text-white transition-colors"
                title="Dismiss ad"
                aria-label="Dismiss mobile anchor ad"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <div className="w-[320px] max-w-full h-[50px] flex items-center justify-between px-3 py-1 bg-stone-900 rounded mb-1 text-xs">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="w-7 h-7 rounded bg-red-600 shrink-0 flex items-center justify-center font-bold text-[10px] text-white">
                AD
              </div>
              <div className="truncate">
                <p className="font-medium text-stone-200 truncate text-[11px]">
                  DailyPulse Evening Wrap
                </p>
                <p className="text-[10px] text-stone-400 truncate">
                  A daily digest of global news
                </p>
              </div>
            </div>
            <a href="#newsletter-section" aria-label="Sign up for the DailyPulse Evening Wrap" className="px-2.5 py-1 text-[11px] font-semibold bg-white text-stone-900 rounded shrink-0 hover:bg-stone-200 transition-colors ml-2">
              Sign up
            </a>
          </div>
        </aside>
      );

    default:
      return null;
  }
};
