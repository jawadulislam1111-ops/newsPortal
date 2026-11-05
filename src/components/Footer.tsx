import React, { useState } from 'react';
import { SITE_NAME, SITE_TAGLINE, CATEGORY_LIST } from '../config/siteConfig';
import { categoryPath } from '../lib/routes';
import { Mail, CheckCircle2, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [footerEmail, setFooterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (footerEmail.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="w-full bg-stone-900 text-stone-300 border-t border-stone-800 transition-colors pt-12 pb-20 lg:pb-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Tier: Logo, Description & Newsletter Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a
                href="/" aria-label="DailyPulse home"
                className="text-left font-serif text-3xl sm:text-4xl font-black text-white hover:opacity-90 transition-opacity cursor-pointer"
              >
                DAILY<span className="text-red-600">PULSE</span>
              </a>
              <p className="mt-3 text-sm text-stone-400 max-w-md leading-relaxed">
                {SITE_TAGLINE} Independent, rigorously audited, 24/7 global coverage across national politics, international summits, frontier technology, business intelligence, and arts.
              </p>
            </div>

          </div>

          {/* Quick Newsletter Signup */}
          <div id="newsletter-section" className="scroll-mt-28 lg:scroll-mt-16 lg:col-span-7 bg-stone-950/70 p-6 rounded-xl border border-stone-800/80 flex flex-col justify-center">
            <h2 className="font-serif text-lg font-bold text-white mb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-500" />
              <span>Get the DailyPulse Evening Wrap</span>
            </h2>
            <p className="text-xs text-stone-400 mb-4">
              A 5-minute digest of the ten stories that shaped global markets, legislation, and culture today.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  aria-label="Email address for the Evening Wrap"
                  autoComplete="email"
                  required
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="min-w-0 flex-1 px-4 py-2.5 rounded-lg bg-stone-900 border border-stone-700 text-white text-xs placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shrink-0"
                >
                  Join 180,000+ Readers
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Thank you! You are now subscribed to the Evening Wrap.</span>
              </div>
            )}
          </div>
        </div>

        <nav aria-label="Footer navigation" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 py-10 border-b border-stone-800 text-xs">
          {[
            { title: 'Editorial Sections', links: CATEGORY_LIST.slice(0, 4).map((category) => ({ href: categoryPath(category), label: category + ' News' })) },
            { title: 'Specialized Beats', links: [
              ...CATEGORY_LIST.slice(4).map((category) => ({ href: categoryPath(category), label: category })),
              { href: '#breaking-news', label: 'Breaking Wire' },
            ] },
            { title: 'Company', links: [
              { href: '/about', label: 'About ' + SITE_NAME },
              { href: '/contact', label: 'Contact Newsroom' },
              { href: '/contact#inquiries', label: 'Advertising Inquiries' },
              { href: '/search', label: 'Search the Archives' },
            ] },
            { title: 'Standards', links: [
              { href: '/privacy', label: 'Privacy Policy' },
              { href: '/about#editorial-standards', label: 'Editorial Standards' },
              { href: '/about#corrections', label: 'Corrections Policy' },
            ] },
          ].map(({ title, links }) => (
            <div key={title}>
              <h2 className="font-mono text-[11px] uppercase tracking-widest text-stone-400 font-bold mb-3">{title}</h2>
              <ul className="space-y-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} className="hover:text-white transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-stone-400 font-bold mb-3">Edition</h2>
            <p className="text-stone-300">Global (English)</p>
            <a href="#page-top" className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-white transition-colors mt-4">
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </a>
          </div>
        </nav>

        {/* Bottom Tier: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>
            © {SITE_NAME} Media Group LLC. All rights reserved.
          </p>
          <p className="text-center sm:text-right text-[11px]">
            Content on this site is protected under international copyright law. Published in compliance with FTC and IAB advertising guidelines.
          </p>
        </div>
      </div>
    </footer>
  );
};
