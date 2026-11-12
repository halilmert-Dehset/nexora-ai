import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CaseConverter } from '@/components/tools/CaseConverter';
import { ToolSeoBlock } from '@/components/ToolSeoBlock';
import { AdBanner } from '@/components/AdBanner';
import { SEO_CONTENT } from '@/lib/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Online Text Case Converter - UPPERCASE, lowercase, Title Case, camelCase',
  description: 'Quickly change letter casing of any text or code. Supports Sentence case, UPPERCASE, lowercase, Title Case, camelCase, and snake_case.',
  keywords: 'case converter, change case online, uppercase to lowercase, title case converter, camelcase generator',
};

export default function CaseConverterPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 font-medium">
            <ArrowLeft className="w-4 h-4" /> All NEXORA Tools
          </Link>
          <span className="text-xs font-bold text-slate-400">NEXORA AI • Text Tools</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <AdBanner slotId="cc-top-banner" format="horizontal" label="Advertisement" />
        <CaseConverter />
        <AdBanner slotId="cc-middle-banner" format="horizontal" label="Sponsored" />
        <ToolSeoBlock {...SEO_CONTENT.caseconverter} />
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2026 NEXORA AI • Smart Text Case Converter
      </footer>
    </div>
  );
}
