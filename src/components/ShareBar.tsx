import React, { useEffect, useState } from 'react';
import { Twitter, Facebook, Share2, Check, Send } from 'lucide-react';

interface ShareBarProps {
  title: string;
  url?: string;
  className?: string;
  isStickyMobile?: boolean;
}

export const ShareBar: React.FC<ShareBarProps> = ({
  title,
  url,
  className = '',
  isStickyMobile = false,
}) => {
  const [copied, setCopied] = useState(false);

  const [fallbackUrl, setFallbackUrl] = useState('');
  useEffect(() => {
    if (!url) {
      const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      setFallbackUrl(canonical?.href || new URL(window.location.pathname, window.location.origin).href);
    }
  }, [url]);
  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2500);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const shareUrl = url || fallbackUrl;
  if (!shareUrl) return null;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    } catch {
      window.prompt('Copy this article link', shareUrl);
    }
  };

  const shareLinks = [
    {
      name: 'X (Twitter)',
      icon: <Twitter className="w-4 h-4" />,
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      bg: 'hover:bg-black hover:text-white',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-4 h-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: 'hover:bg-blue-600 hover:text-white',
    },
    {
      name: 'WhatsApp',
      icon: (
        <span className="font-bold text-xs">WA</span>
      ),
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      bg: 'hover:bg-emerald-600 hover:text-white',
    },
    {
      name: 'Telegram',
      icon: <Send className="w-3.5 h-3.5" />,
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      bg: 'hover:bg-sky-500 hover:text-white',
    },
  ];

  if (isStickyMobile) {
    return (
      <div
        aria-label="Article quick share bar"
        className="mobile-share fixed left-0 right-0 z-30 lg:hidden bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-t border-stone-200 dark:border-stone-800 px-4 py-2 flex items-center justify-between shadow-lg"
      >
        <div className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 dark:text-stone-300">
          <Share2 className="w-3.5 h-3.5" />
          <span>Share:</span>
        </div>

        <div className="flex items-center gap-2">
          {shareLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${item.name}`}
              className="w-8 h-8 rounded-full border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:scale-105 transition-transform"
            >
              {item.icon}
            </a>
          ))}

          <button
            onClick={handleCopyLink}
            aria-label="Copy article link"
            className="px-2.5 py-1.5 rounded-full border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium flex items-center gap-1"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied</span>
              </>
            ) : (
              <span>Copy</span>
            )}
          </button>
        </div>
      </div>
    );
  }

  // Desktop / Inline variant
  return (
    <div className={`flex flex-wrap items-center gap-2 py-3 border-y border-stone-200 dark:border-stone-800 text-xs ${className}`}>
      <span className="text-stone-500 dark:text-stone-400 font-bold uppercase tracking-wider text-[11px] mr-1 flex items-center gap-1">
        <Share2 className="w-3.5 h-3.5 text-red-600" />
        <span>Share Story:</span>
      </span>

      {shareLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${item.name}`}
          className={`px-3 py-1.5 rounded border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300 transition-all flex items-center gap-1.5 font-medium ${item.bg}`}
        >
          {item.icon}
          <span>{item.name}</span>
        </a>
      ))}

      <button
        onClick={handleCopyLink}
        className="px-3 py-1.5 rounded border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 transition-all flex items-center gap-1.5 font-medium cursor-pointer"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">Link Copied!</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
};
