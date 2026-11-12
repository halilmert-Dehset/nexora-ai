import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
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
        <ToolSeoBlock {...SEO_CONTENT.caseconverter} />
        <RelatedTools currentSlug="case-converter" />
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2026 NEXORA AI • Smart Text Case Converter
      </footer>
    </div>
  );
}
