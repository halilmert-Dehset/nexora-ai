export type PseoCategory = 'word-counter' | 'case-converter';

export interface PseoFaq {
  question: string;
  answer: string;
}

export interface PseoHowToStep {
  name: string;
  text: string;
}

export interface PseoPageData {
  slug: string;
  parentCategory: PseoCategory;
  fullPath: string; // e.g. /tools/word-counter/meta-description-counter
  canonicalUrl: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  badge: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  
  // Specific tool configurations
  toolType: 'meta-description' | 'reading-time' | 'college-essays' | 'for-essays' | 'title-case' | 'sentence-case';
  
  // SEO Body Content
  introParagraphs: string[];
  guideSection: {
    title: string;
    description: string;
    items: { label: string; detail: string }[];
  };
  technicalNotes?: string[];
  howToSteps: PseoHowToStep[];
  faqs: PseoFaq[];
  relatedTools: { name: string; href: string; description: string }[];
}
