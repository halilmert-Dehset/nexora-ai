import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { WordCounter } from '@/components/tools/WordCounter';
import { ToolSeoBlock } from '@/components/ToolSeoBlock';
import { AdBanner } from '@/components/AdBanner';
import { RelatedTools } from '@/components/RelatedTools';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { SEO_CONTENT } from '@/lib/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Word & Character Counter Online - Real-Time Essay Analytics',
  description: 'Count words, characters, sentences, paragraphs, and calculate reading time instantly. 100% free, private, and zero character limits.',
  keywords: ['word counter', 'character counter', 'letter count online', 'essay word count', 'reading time calculator'],
  alternates: {
    canonical: '/tools/word-counter',
  },
  openGraph: {
    title: 'Free Word & Character Counter Online | NEXORA AI',
    description: 'Instant real-time writing statistics, word count, character count, and speech time calculations.',
    url: 'https://nexora-ai-eosin-three.vercel.app/tools/word-counter',
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "NEXORA AI Word Counter",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function WordCounterPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <JsonLd data={appSchema} />
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 font-medium">
            <ArrowLeft className="w-4 h-4" /> All NEXORA Tools
          </Link>
          <span className="text-xs font-bold text-slate-400">NEXORA AI • Writing Tools</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <Breadcrumbs 
          items={[
            { name: "Home", url: "/" },
            { name: "Tools", url: "/#tools" },
            { name: "Word Counter", url: "/tools/word-counter" }
          ]} 
        />
        <AdBanner slotId="wc-top-banner" format="horizontal" label="Advertisement" />
        <WordCounter />
        <AdBanner slotId="wc-middle-banner" format="horizontal" label="Advertisement" />
        <ToolSeoBlock {...SEO_CONTENT.wordcounter} />
        <RelatedTools currentSlug="word-counter" />
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2026 NEXORA AI • Real-Time Word & Character Counter
      </footer>
    </div>
  );
}
