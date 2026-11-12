import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { TextSummarizer } from '@/components/tools/TextSummarizer';
import { ToolSeoBlock } from '@/components/ToolSeoBlock';
import { AdBanner } from '@/components/AdBanner';
import { RelatedTools } from '@/components/RelatedTools';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { SEO_CONTENT } from '@/lib/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI Text Summarizer & Article TLDR Generator',
  description: 'Condense long articles, essays, and documents into executive bullet points with word and character statistics.',
  keywords: ['text summarizer', 'article summarizer', 'free tldr generator', 'word counter', 'reading time estimator'],
  alternates: {
    canonical: '/tools/text-summarizer',
  },
  openGraph: {
    title: 'Instant AI Text Summarizer | NEXORA AI',
    description: 'Rapid executive summaries and takeaways for documentation and long-form articles.',
    url: 'https://nexora-ai-eosin-three.vercel.app/tools/text-summarizer',
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "NEXORA AI Text Summarizer",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function TextSummarizerPage() {
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
            { name: "Text Summarizer", url: "/tools/text-summarizer" }
          ]} 
        />
        <AdBanner slotId="sum-top-banner" format="horizontal" label="Advertisement" />
        <TextSummarizer />
        <AdBanner slotId="sum-middle-banner" format="horizontal" label="Advertisement" />
        <ToolSeoBlock {...SEO_CONTENT.summary} />
        <RelatedTools currentSlug="text-summarizer" />
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2026 NEXORA AI • Executive Text Summarizer
      </footer>
    </div>
  );
}
