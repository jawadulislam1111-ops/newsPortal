import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

interface TopBarProps {
  isDark: boolean;
  onToggleDark: () => void;
}

const editionDate = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'America/New_York',
});

export const TopBar: React.FC<TopBarProps> = ({ isDark, onToggleDark }) => {
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(new Date());
  }, []);

  return (
    <div id="page-top" className="w-full bg-stone-100 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-300 py-1.5 px-4 sm:px-8 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
          <span className="font-medium text-stone-700 dark:text-stone-200">Global Edition</span>
          {today && (
            <time dateTime={today.toISOString()} className="sm:border-l sm:border-stone-300 sm:dark:border-stone-700 sm:pl-3">
              {editionDate.format(today)}
            </time>
          )}
        </div>
        <button
          type="button"
          onClick={onToggleDark}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="flex shrink-0 items-center gap-1.5 px-2 py-0.5 rounded text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800 cursor-pointer"
        >
          {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
          <span className="font-medium text-[11px]">{isDark ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </div>
  );
};
