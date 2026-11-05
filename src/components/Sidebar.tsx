import React, { useState } from 'react';
import { Article } from '../types';
import { NewsCard } from './NewsCard';
import { AdSlot } from './AdSlot';
import { Mail, CheckCircle2, Flame, Award } from 'lucide-react';

interface SidebarProps {
  trendingArticles: Article[];
  mostReadArticles: Article[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  trendingArticles,
  mostReadArticles,
}) => {
  const [mostReadTab, setMostReadTab] = useState<'today' | 'week'>('today');
  const [email, setEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setNewsletterSubscribed(true);
    }
  };

  return (
    <aside aria-label="Editorial Sidebar" className="w-full flex flex-col gap-6">
      {/* 1. Trending Now (Numbered 1-5) */}
      <div className="bg-white dark:bg-stone-900/80 rounded-xl p-5 border border-stone-200 dark:border-stone-800 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-2 border-b border-stone-200 dark:border-stone-800">
          <h2 className="font-serif text-base font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-red-600" />
            <span>Trending Now</span>
          </h2>
          <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest">
            Top 5
          </span>
        </div>

        <div className="divide-y divide-stone-100 dark:divide-stone-800/60">
          {trendingArticles.slice(0, 5).map((article, idx) => (
            <NewsCard
              key={article.id}
              article={article}
              variant="trending"
              rank={idx + 1}
            />
          ))}
        </div>
      </div>

      {/* 2. 300x250 Medium Rectangle Ad Slot */}
      <AdSlot size="rectangle" label="Sponsor Dispatch" />

      {/* 3. Most Read Section (Today / This Week tabs) */}
      <div className="bg-white dark:bg-stone-900/80 rounded-xl p-5 border border-stone-200 dark:border-stone-800 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-stone-200 dark:border-stone-800">
          <h2 className="font-serif text-base font-bold uppercase tracking-wider text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Most Read</span>
          </h2>

          {/* Interactive filter tabs */}
          <div className="flex items-center bg-stone-100 dark:bg-stone-800 p-0.5 rounded text-xs">
            <button
              aria-pressed={mostReadTab === 'today'}
              onClick={() => setMostReadTab('today')}
              className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                mostReadTab === 'today'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-xs'
                  : 'text-stone-500 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              Today
            </button>
            <button
              aria-pressed={mostReadTab === 'week'}
              onClick={() => setMostReadTab('week')}
              className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                mostReadTab === 'week'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-white shadow-xs'
                  : 'text-stone-500 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              This Week
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          {(mostReadTab === 'today' ? mostReadArticles.slice(0, 4) : [...mostReadArticles].reverse().slice(0, 4)).map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              variant="compact"
            />
          ))}
        </div>
      </div>

      {/* 4. Newsletter Signup Box */}
      <div
        className="bg-stone-900 text-stone-100 rounded-xl p-6 border border-stone-800 shadow-md relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-28 h-28 bg-red-600/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="w-10 h-10 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mb-3">
          <Mail className="w-5 h-5" />
        </div>

        <h2 className="font-serif text-lg font-bold text-white mb-1.5">
          The Daily Morning Briefing
        </h2>
        <p className="text-xs text-stone-400 mb-4 leading-relaxed">
          Curated investigative reporting, international dispatches, and key market moves delivered to your inbox every morning at 6:00 AM EST.
        </p>

        {!newsletterSubscribed ? (
          <form onSubmit={handleNewsletterSubmit} className="space-y-2">
            <input
              type="email"
              aria-label="Email address for the Morning Briefing"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-stone-800 border border-stone-700 text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600"
            />
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              Subscribe Free
            </button>
            <p className="text-[10px] text-stone-500 text-center">
              No spam ever. Unsubscribe anytime in 1 click.
            </p>
          </form>
        ) : (
          <div className="bg-emerald-950/60 border border-emerald-800/80 rounded-lg p-3 text-center">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 mx-auto mb-1.5" />
            <p className="text-xs font-semibold text-emerald-200">
              Welcome to the DailyPulse Briefing
            </p>
            <p className="text-[11px] text-emerald-400/80 mt-1">
              Check your inbox shortly for your first edition.
            </p>
          </div>
        )}
      </div>

      {/* 5. Sticky 300x600 Skyscraper Ad Slot */}
      <div className="sticky top-20">
        <AdSlot size="skyscraper" label="Premium Display Sponsor" />
      </div>
    </aside>
  );
};
