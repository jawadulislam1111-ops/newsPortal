import React, { useState } from 'react';
import { AdSize } from '../types';
import { X, ExternalLink } from 'lucide-react';
import { SandboxedAdFrame, programmaticAdDocument } from './SandboxedAd';

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
          <SandboxedAdFrame
            title={label}
            srcDoc={programmaticAdDocument('ecd410b2e746db2798f8706d706dc62b', 300, 250)}
            width={300}
            height={250}
          />
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
          <div className="text-[10px] uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1 font-mono">
            {label} · 160×300
          </div>
          <SandboxedAdFrame
            title={label}
            srcDoc={programmaticAdDocument('f6ea50a5f32fe8c9cd4796b9a7edbe89', 160, 300)}
            width={160}
            height={300}
          />
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
          <SandboxedAdFrame
            title="Mobile banner advertisement"
            srcDoc={programmaticAdDocument('635a84daca19430336b1b1e6558fe433', 320, 50)}
            width={320}
            height={50}
            className="mb-1 rounded"
          />
        </aside>
      );

    default:
      return null;
  }
};
