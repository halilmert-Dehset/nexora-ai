import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Clock, FileText, CheckCircle2 } from 'lucide-react';
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

const SPECIALIZED_WORD_TOOLS = [
  {
    name: 'Meta Description Counter',
    href: '/tools/word-counter/meta-description-counter',
    icon: CheckCircle2,
    badge: 'SERP & SEO',
    description: 'Check Google snippet character boundaries (~158 chars) with live desktop and mobile preview.'
  },
  {
    name: 'Reading Time Calculator',
    href: '/tools/word-counter/reading-time-calculator',
    icon: Clock,
    badge: 'Speed & Timing',
    description: 'Calculate silent reading and speech delivery duration with customizable 130, 200, and 260 WPM.'
  },
  {
    name: 'College Essay Word Counter',
    href: '/tools/word-counter/college-essays',
    icon: FileText,
    badge: 'Admissions',
    description: 'Track strict Common App (250–650 words) and UC PIQ (350 words) admissions word limits.'
  },
  {
    name: 'Essay Word Counter & Pages',
    href: '/tools/word-counter/for-essays',
    icon: BookOpen,
    badge: 'Academic Writing',
    description: 'Estimate double-spaced (~250 words/page) and single-spaced academic paper page counts.'
  }
];

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

        {/* Specialized Word Tools Directory */}
        <section className="my-10 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h2 className="text-lg font-bold text-white">Specialized Word Tools & Targeted Counters</h2>
              <p className="text-xs text-slate-400 mt-0.5">Explore focused tools built for specific academic, SEO, and presentation scenarios.</p>
            </div>
            <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider bg-teal-500/10 px-2.5 py-1 rounded-full border border-teal-500/20 w-fit">
              Focused Tools
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SPECIALIZED_WORD_TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-teal-500/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-teal-400 shrink-0" />
                        <h3 className="text-sm font-semibold text-white group-hover:text-teal-300 transition-colors">
                          {tool.name}
                        </h3>
                      </div>
                      <span className="text-[10px] text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {tool.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400 mt-4 group-hover:translate-x-1 transition-transform">
                    <span>Open Specialized Tool</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <ToolSeoBlock {...SEO_CONTENT.wordcounter} />
        <RelatedTools currentSlug="word-counter" />
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2026 NEXORA AI • Real-Time Word & Character Counter
      </footer>
    </div>
  );
}
