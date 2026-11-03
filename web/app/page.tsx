'use client';

import React, { useState } from 'react';
import { PromptEnhancer } from '@/components/tools/PromptEnhancer';
import { CryptoCalculator } from '@/components/tools/CryptoCalculator';
import { YoutubeSeoTool } from '@/components/tools/YoutubeSeoTool';
import { TextSummarizer } from '@/components/tools/TextSummarizer';
import { AdBanner } from '@/components/AdBanner';
import { 
  Sparkles, 
  Calculator, 
  Video, 
  AlignLeft, 
  Zap, 
  ExternalLink
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'prompt' | 'crypto' | 'youtube' | 'summary'>('prompt');

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-white shadow-lg shadow-cyan-500/20">
              N
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                NEXORA <span className="text-cyan-400">AI</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Free Web Tools
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              All Tools Online (100% Free)
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 mb-6">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>Zero Sign-up Required. Instant Online Utilities.</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
          Smarter Tools for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Creators, Traders & Builders</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          High-performance, privacy-focused online tools designed to save you hours every single day. Completely free forever.
        </p>

        {/* Tool Switcher Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800 max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab('prompt')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'prompt' 
                ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            AI Prompt Enhancer
          </button>

          <button
            onClick={() => setActiveTab('crypto')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'crypto' 
                ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Calculator className="w-4 h-4" />
            Crypto ROI Calculator
          </button>

          <button
            onClick={() => setActiveTab('youtube')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'youtube' 
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/25' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Video className="w-4 h-4" />
            YouTube SEO Tags
          </button>

          <button
            onClick={() => setActiveTab('summary')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'summary' 
                ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/25' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <AlignLeft className="w-4 h-4" />
            Article Summarizer
          </button>
        </div>
      </section>

      {/* Main Tool Workspace */}
      <main className="max-w-4xl mx-auto px-4 w-full flex-1">
        {activeTab === 'prompt' && <PromptEnhancer />}
        {activeTab === 'crypto' && <CryptoCalculator />}
        {activeTab === 'youtube' && <YoutubeSeoTool />}
        {activeTab === 'summary' && <TextSummarizer />}

        {/* High-CTR Ad Placement */}
        <AdBanner slotId="bottom-tool-banner" format="horizontal" />

        {/* Curated High-Converting Affiliate Card (Passive Income) */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 mb-1 block">Sponsored Partner Recommendation</span>
            <h4 className="text-white font-bold text-base">Trade with 0% Spot Fees on Binance & Bybit</h4>
            <p className="text-xs text-slate-400 max-w-lg mt-1">Get up to $5,000 in welcome trading bonuses and automated trading bot integration.</p>
          </div>
          <a
            href="https://www.binance.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-white text-slate-950 hover:bg-slate-200 text-xs font-bold shrink-0 flex items-center gap-1.5 transition-all shadow-md"
          >
            Claim Bonus <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </main>

      {/* Footer & SEO Links */}
      <footer className="mt-20 border-t border-slate-900 py-10 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400">NEXORA AI</span>
            <span>•</span>
            <span>Automate. Create. Earn.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div>
            © 2026 NEXORA AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
