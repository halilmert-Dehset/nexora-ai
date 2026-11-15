import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, SpellCheck, Heading, Sparkles } from 'lucide-react';
import { CaseConverter } from '@/components/tools/CaseConverter';
import { ToolSeoBlock } from '@/components/ToolSeoBlock';
import { AdBanner } from '@/components/AdBanner';
import { RelatedTools } from '@/components/RelatedTools';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { SEO_CONTENT } from '@/lib/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Text Case Converter - UPPERCASE, lowercase, Title Case, camelCase',
  description: 'Quickly change letter casing of any text or code. Supports Sentence case, UPPERCASE, lowercase, Title Case, camelCase, and snake_case.',
  keywords: ['case converter', 'change case online', 'uppercase to lowercase', 'title case converter', 'camelcase generator'],
  alternates: {
    canonical: '/tools/case-converter',
  },
  openGraph: {
    title: 'Smart Text Case Converter | NEXORA AI',
    description: 'Transform casing cleanly for titles, documents, and code variables.',
    url: 'https://nexora-ai-eosin-three.vercel.app/tools/case-converter',
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "NEXORA AI Case Converter",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const SPECIALIZED_TEXT_CONVERTERS = [
  {
    name: 'Title Case Converter',
    href: '/tools/case-converter/title-case-converter',
    icon: Heading,
    badge: 'Headlines & Titles',
    description: 'Format article headlines and paper titles conforming to APA, MLA, and Chicago style guide rules.'
  },
  {
    name: 'Sentence Case Converter',
    href: '/tools/case-converter/sentence-case-converter',
    icon: SpellCheck,
    badge: 'Text Normalization',
    description: 'Recover accidental Caps Lock text and auto-capitalize initial letters after periods, question marks, and exclamation points.'
  }
];

export default function CaseConverterPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <JsonLd data={appSchema} />
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 font-medium">
            <ArrowLeft className="w-4 h-4" /> All NEXORA Tools
          </Link>
          <span className="text-xs font-bold text-slate-400">NEXORA AI • Text Tools</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <Breadcrumbs 
          items={[
            { name: "Home", url: "/" },
            { name: "Tools", url: "/#tools" },
            { name: "Case Converter", url: "/tools/case-converter" }
          ]} 
        />
        <AdBanner slotId="cc-top-banner" format="horizontal" label="Advertisement" />
        <CaseConverter />
        <AdBanner slotId="cc-middle-banner" format="horizontal" label="Advertisement" />

        {/* Specialized Text Converters Directory */}
        <section className="my-10 p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h2 className="text-lg font-bold text-white">Specialized Text Converters & Style Formatters</h2>
              <p className="text-xs text-slate-400 mt-0.5">Explore dedicated capitalization tools tailored for editorial titles and natural sentence flow.</p>
            </div>
            <span className="text-[11px] font-semibold text-pink-400 uppercase tracking-wider bg-pink-500/10 px-2.5 py-1 rounded-full border border-pink-500/20 w-fit">
              Focused Tools
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SPECIALIZED_TEXT_CONVERTERS.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/90 hover:border-pink-500/50 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-pink-400 shrink-0" />
                        <h3 className="text-sm font-semibold text-white group-hover:text-pink-300 transition-colors">
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

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-pink-400 mt-4 group-hover:translate-x-1 transition-transform">
                    <span>Open Specialized Tool</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <ToolSeoBlock {...SEO_CONTENT.caseconverter} />
        <RelatedTools currentSlug="case-converter" />
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2026 NEXORA AI • Smart Text Case Converter
      </footer>
    </div>
  );
}
