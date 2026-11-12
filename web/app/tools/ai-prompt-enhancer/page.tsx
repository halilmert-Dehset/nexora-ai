import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PromptEnhancer } from '@/components/tools/PromptEnhancer';
import { ToolSeoBlock } from '@/components/ToolSeoBlock';
import { AdBanner } from '@/components/AdBanner';
import { RelatedTools } from '@/components/RelatedTools';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { SEO_CONTENT } from '@/lib/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Prompt Enhancer & Master Prompt Architect - ChatGPT & Claude',
  description: 'Turn simple one-line questions into structured master system prompts. Optimized for ChatGPT GPT-4o, Anthropic Claude 3.5, and Midjourney.',
  keywords: ['ai prompt enhancer', 'prompt generator', 'chatgpt prompt optimizer', 'claude prompt builder', 'master prompt'],
  alternates: {
    canonical: '/tools/ai-prompt-enhancer',
  },
  openGraph: {
    title: 'AI Master Prompt Architect | NEXORA AI',
    description: 'Transform basic thoughts into high performance system prompts for major LLMs.',
    url: 'https://nexora-ai-eosin-three.vercel.app/tools/ai-prompt-enhancer',
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "NEXORA AI Prompt Enhancer",
  "applicationCategory": "ProductivityApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function PromptPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <JsonLd data={appSchema} />
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 font-medium">
            <ArrowLeft className="w-4 h-4" /> All NEXORA Tools
          </Link>
          <span className="text-xs font-bold text-slate-400">NEXORA AI • AI Utilities</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <Breadcrumbs 
          items={[
            { name: "Home", url: "/" },
            { name: "Tools", url: "/#tools" },
            { name: "AI Prompt Enhancer", url: "/tools/ai-prompt-enhancer" }
          ]} 
        />
        <AdBanner slotId="prompt-top-banner" format="horizontal" label="Advertisement" />
        <PromptEnhancer />
        <AdBanner slotId="prompt-middle-banner" format="horizontal" label="Advertisement" />
        <ToolSeoBlock {...SEO_CONTENT.prompt} />
        <RelatedTools currentSlug="ai-prompt-enhancer" />
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2026 NEXORA AI • AI Prompt Architect
      </footer>
    </div>
  );
}
