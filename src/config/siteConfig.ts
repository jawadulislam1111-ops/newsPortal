import { CategoryType } from '../types';

export const SITE_NAME = "DailyPulse";
export const SITE_TAGLINE = "In-depth reporting, global perspectives, and breaking analysis.";

export interface CategoryMeta {
  name: CategoryType;
  slug: string;
  color: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  darkTextColor: string;
  description: string;
}

export const CATEGORIES_CONFIG: Record<CategoryType, CategoryMeta> = {
  National: {
    name: 'National',
    slug: 'national',
    color: '#D62828',
    bgColor: 'bg-red-50 dark:bg-red-950/40',
    textColor: 'text-red-700 dark:text-red-400',
    borderColor: 'border-red-600',
    darkTextColor: 'dark:text-red-400',
    description: 'Federal policy, domestic developments, civic governance, and nationwide investigative reporting.',
  },
  International: {
    name: 'International',
    slug: 'international',
    color: '#2563EB',
    bgColor: 'bg-blue-50 dark:bg-blue-950/40',
    textColor: 'text-blue-700 dark:text-blue-400',
    borderColor: 'border-blue-600',
    darkTextColor: 'dark:text-blue-400',
    description: 'Geopolitical diplomacy, global trade pacts, cross-border security, and international affairs.',
  },
  Sports: {
    name: 'Sports',
    slug: 'sports',
    color: '#16A34A',
    bgColor: 'bg-green-50 dark:bg-green-950/40',
    textColor: 'text-green-700 dark:text-green-400',
    borderColor: 'border-green-600',
    darkTextColor: 'dark:text-green-400',
    description: 'Track and field championships, league tournaments, athlete profiles, and tactical analysis.',
  },
  Technology: {
    name: 'Technology',
    slug: 'technology',
    color: '#9333EA',
    bgColor: 'bg-purple-50 dark:bg-purple-950/40',
    textColor: 'text-purple-700 dark:text-purple-400',
    borderColor: 'border-purple-600',
    darkTextColor: 'dark:text-purple-400',
    description: 'Semiconductor frontiers, artificial intelligence, quantum breakthroughs, cybersecurity, and hardware reviews.',
  },
  Entertainment: {
    name: 'Entertainment',
    slug: 'entertainment',
    color: '#EA580C',
    bgColor: 'bg-orange-50 dark:bg-orange-950/40',
    textColor: 'text-orange-700 dark:text-orange-400',
    borderColor: 'border-orange-600',
    darkTextColor: 'dark:text-orange-400',
    description: 'Cinema retrospectives, streaming industry shifts, music tours, and critical cultural discourse.',
  },
  Business: {
    name: 'Business',
    slug: 'business',
    color: '#0D9488',
    bgColor: 'bg-teal-50 dark:bg-teal-950/40',
    textColor: 'text-teal-700 dark:text-teal-400',
    borderColor: 'border-teal-600',
    darkTextColor: 'dark:text-teal-400',
    description: 'Equity markets, central bank interest rates, venture capital rounds, and macroeconomics.',
  },
  Opinion: {
    name: 'Opinion',
    slug: 'opinion',
    color: '#4B5563',
    bgColor: 'bg-stone-100 dark:bg-stone-800/60',
    textColor: 'text-stone-700 dark:text-stone-300',
    borderColor: 'border-stone-500',
    darkTextColor: 'dark:text-stone-300',
    description: 'Authoritative columnists, contributing essays, guest debates, and editorial board reflections.',
  },
};

export const CATEGORY_LIST: CategoryType[] = [
  'National',
  'International',
  'Sports',
  'Technology',
  'Entertainment',
  'Business',
  'Opinion',
];
