import React, { useEffect, useRef, useState } from 'react';
import { CategoryType } from '../types';
import { categoryPath } from '../lib/routes';
import { CATEGORY_LIST, CATEGORIES_CONFIG, SITE_NAME } from '../config/siteConfig';
import { Menu, X, ChevronRight, Home, TrendingUp } from 'lucide-react';

interface NavigationProps {
  activeCategory?: CategoryType | 'Home';
}

export const Navigation: React.FC<NavigationProps> = ({ activeCategory }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const drawerButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileDrawerOpen) return;
    closeButton.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileDrawerOpen(false);
        drawerButton.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [mobileDrawerOpen]);

  return (
    <>
      {/* Sticky Main Desktop/Tablet Bar */}
      <nav
        aria-label="Main Navigation"
        className="sticky top-0 z-30 w-full bg-white/95 dark:bg-stone-950/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden py-2">
            <button
              ref={drawerButton}
              onClick={() => setMobileDrawerOpen(true)}
              aria-expanded={mobileDrawerOpen}
              aria-controls="mobile-navigation"
              aria-label="Open mobile menu drawer"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center -ml-2 p-2 rounded text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
            <a href="/" aria-label="DailyPulse home" className="font-serif font-bold text-lg text-stone-900 dark:text-white ml-1">
              DAILY<span className="text-red-600">PULSE</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Home link */}
            <a
              href="/"
              aria-current={activeCategory === 'Home' ? 'page' : undefined}
              className={`inline-flex items-center min-h-[44px] px-3.5 py-2 text-sm font-semibold tracking-wide uppercase transition-colors relative cursor-pointer ${
                activeCategory === 'Home'
                  ? 'text-red-600 dark:text-red-500'
                  : 'text-stone-700 dark:text-stone-300 hover:text-red-600 dark:hover:text-red-400'
              }`}
            >
              Home
              {activeCategory === 'Home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"></span>
              )}
            </a>

            {/* Category links */}
            {CATEGORY_LIST.map((cat) => {
              const isActive = activeCategory === cat;
              const meta = CATEGORIES_CONFIG[cat];
              return (
                <a
                  key={cat}
                  href={categoryPath(cat)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`inline-flex items-center min-h-[44px] px-3 py-2 text-sm font-semibold tracking-wide uppercase transition-colors relative cursor-pointer ${
                    isActive
                      ? `${meta.textColor} font-bold`
                      : 'text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ backgroundColor: meta.color }}
                    ></span>
                  )}
                </a>
              );
            })}
          </div>

          {/* Quick Trending Indicator */}
          <div className="hidden xl:flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 font-medium">
            <TrendingUp className="w-3.5 h-3.5 text-red-600" />
            <span>Trending: Geneva Accord · Quantum Chip</span>
          </div>
        </div>

        {/* Mobile Horizontally Scrollable Category Strip */}
        <div className="lg:hidden w-full overflow-x-auto no-scrollbar border-t border-stone-100 dark:border-stone-900 px-3 py-1.5 flex items-center gap-1.5 bg-stone-50 dark:bg-stone-900/60">
          <a
            href="/"
            aria-current={activeCategory === 'Home' ? 'page' : undefined}
            className={`inline-flex items-center shrink-0 min-h-[36px] px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              activeCategory === 'Home'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-700'
            }`}
          >
            All News
          </a>
          {CATEGORY_LIST.map((cat) => {
            const isActive = activeCategory === cat;
            const meta = CATEGORIES_CONFIG[cat];
            return (
              <a
                key={cat}
                href={categoryPath(cat)}
                aria-current={isActive ? 'location' : undefined}
                className={`inline-flex items-center shrink-0 min-h-[36px] px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'text-white shadow-xs'
                    : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-700'
                }`}
                style={isActive ? { backgroundColor: meta.color } : {}}
              >
                {cat}
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile Slide-in Drawer with Backdrop */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <nav id="mobile-navigation" aria-label="Mobile sections" className="relative w-4/5 max-w-sm bg-white dark:bg-stone-950 h-full shadow-2xl flex flex-col z-10 border-r border-stone-200 dark:border-stone-800 overflow-y-auto">
            {/* Header */}
            <div className="p-4 border-b border-stone-200 dark:border-stone-800 flex items-center justify-between">
              <div>
                <span className="font-serif font-black text-2xl text-stone-900 dark:text-white">
                  DAILY<span className="text-red-600">PULSE</span>
                </span>
                <p className="text-[11px] text-stone-500 dark:text-stone-400">
                  Global Editorial Edition
                </p>
              </div>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                ref={closeButton}
                aria-label="Close navigation drawer"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded text-stone-500 hover:text-stone-900 dark:hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Section */}
            <div className="p-4 flex-1 space-y-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 px-3 py-1">
                Sections
              </div>
              <a
                href="/"
                aria-current={activeCategory === 'Home' ? 'page' : undefined}
                className={`w-full min-h-[44px] flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors text-left ${
                  activeCategory === 'Home'
                    ? 'bg-red-50 dark:bg-red-950/40 text-red-600'
                    : 'text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Home className="w-4 h-4 text-stone-500" />
                  <span>Home</span>
                </span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </a>

              {CATEGORY_LIST.map((cat) => {
                const isActive = activeCategory === cat;
                const meta = CATEGORIES_CONFIG[cat];
                return (
                  <a
                    key={cat}
                    href={categoryPath(cat)}
                    aria-current={isActive ? 'location' : undefined}
                    className={`w-full min-h-[44px] flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors text-left ${
                      isActive
                        ? `${meta.bgColor} ${meta.textColor}`
                        : 'text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: meta.color }}
                      ></span>
                      <span>{cat}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </a>
                );
              })}

              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 mt-4">
                <div className="text-[10px] uppercase font-bold tracking-wider text-stone-500 dark:text-stone-400 px-3 py-1">
                  Company & Links
                </div>
                {[
                  { href: '/about', label: 'About Us' },
                  { href: '/contact', label: 'Contact & Newsroom' },
                  { href: '/privacy', label: 'Privacy Policy' },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="flex items-center w-full min-h-[44px] px-3 py-2 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 text-xs text-stone-500 dark:text-stone-400">
              <p>© {SITE_NAME}. All rights reserved.</p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
