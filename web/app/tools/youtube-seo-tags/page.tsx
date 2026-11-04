import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { YoutubeSeoTool } from '@/components/tools/YoutubeSeoTool';
import { ToolSeoBlock } from '@/components/ToolSeoBlock';
import { AdBanner } from '@/components/AdBanner';
import { SEO_CONTENT } from '@/lib/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YouTube SEO Tag Extractor & Viral Title Generator - Free Studio Tool',
  description: 'Generate high-ranking YouTube video tags and high-CTR titles designed for algorithmic discovery and search visibility.',
  keywords: 'youtube tag extractor, youtube seo tool, viral title generator, youtube keyword tool, video tags generator',
};

export default function YoutubeToolPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 font-medium">
            <ArrowLeft className="w-4 h-4" /> All NEXORA Tools
          </Link>
          <span className="text-xs font-bold text-slate-400">NEXORA AI • Social Media</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <AdBanner slotId="yt-top-banner" format="horizontal" label="Advertisement" />
        <YoutubeSeoTool />
        <AdBanner slotId="yt-middle-banner" format="horizontal" label="Sponsored" />
        <ToolSeoBlock {...SEO_CONTENT.youtube} />
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2026 NEXORA AI • YouTube Creator Suite
      </footer>
    </div>
  );
}
