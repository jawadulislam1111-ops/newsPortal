export type CategoryType = 
  | 'National'
  | 'International'
  | 'Sports'
  | 'Technology'
  | 'Entertainment'
  | 'Business'
  | 'Opinion';

export interface Author {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface ArticleContent {
  paragraphs: string[];
  subheadings?: { index: number; text: string }[];
  pullQuote?: { quote: string; author: string };
  inlineImage?: { src: string; caption: string };
}

export interface Article {
  id: string;
  title: string;
  shortTitle?: string;
  slug: string;
  excerpt: string;
  category: CategoryType;
  author: Author;
  date: string;
  updatedDate?: string;
  image: string;
  imageCaption?: string;
  readTime: string;
  trending?: boolean;
  featured?: boolean;
  viewsCount?: number;
  tags: string[];
  content: ArticleContent;
}

export type AdSize = 'leaderboard' | 'rectangle' | 'skyscraper' | 'in-article' | 'mobile-anchor';

export type PageRoute = 
  | { type: 'home' }
  | { type: 'category'; category: CategoryType }
  | { type: 'article'; id: string }
  | { type: 'search'; query: string }
  | { type: 'about' }
  | { type: 'contact' }
  | { type: 'privacy' }
  | { type: 'notFound' };

export interface PageState {
  route: PageRoute;
  canonicalUrl?: string;
}
