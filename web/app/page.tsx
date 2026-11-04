'use client';

import React, { useState } from 'react';
import { PromptEnhancer } from '@/components/tools/PromptEnhancer';
import { CryptoCalculator } from '@/components/tools/CryptoCalculator';
import { YoutubeSeoTool } from '@/components/tools/YoutubeSeoTool';
import { TextSummarizer } from '@/components/tools/TextSummarizer';
import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';
import { PasswordGenerator } from '@/components/tools/PasswordGenerator';
import { AdBanner } from '@/components/AdBanner';
import { ToolSeoBlock } from '@/components/ToolSeoBlock';
import { SEO_CONTENT } from '@/lib/seoData';
import { 
  Sparkles, 
  Calculator, 
  Video, 
  AlignLeft, 
  Zap, 
  QrCode, 
  KeyRound,
  ExternalLink,
  Shield,
  Layers
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'qrcode' | 'password' | 'prompt' | 'crypto' | 'youtube' | 'summary'>('qrcode');

  const tools = [
    { id: 'qrcode', name: 'QR Code Generator', icon: QrCode, category: 'Utilities', color: 'hover:text-cyan-400' },
    { id: 'password', name: 'Password Generator', icon: KeyRound, category: 'Security', color: 'hover:text-amber-400' },
    { id: 'prompt', name: 'AI Prompt Enhancer', icon: Sparkles, category: 'AI Tools', color: 'hover:text-blue-400' },
    { id: 'crypto', name: 'Crypto ROI Calculator', icon: Calculator, category: 'Finance', color: 'hover:text-emerald-400' },
    { id: 'youtube', name: 'YouTube SEO Tags', icon: Video, category: 'Social Media', color: 'hover:text-rose-400' },
    { id: 'summary', name: 'Text Summarizer', icon: AlignLeft, category: 'Writing', color: 'hover:text-violet-400' },
  ];

  return (
    <div className="flex-1 flex flex-col">
      {/* Top Banner Advertisement (High CPM Leaderboard) */}
      <div className="w-full bg-slate-950 border-b border-slate-900 py-2">
        <AdBanner slotId="top-leaderboard-banner" format="horizontal" label="Featured Sponsor" />
      </div>

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
                All-in-One Utility Hub
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
            <span className="hidden sm:flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              6 Free Online Tools (No Sign-up)
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-10 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 mb-4">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span>Privacy-First. 100% Free Forever. Zero Tracking.</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
          Every Smart Tool You Need, <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-300 bg-clip-text text-transparent">In One Fast Place</span>
        </h1>
        <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto mb-8">
          Free utilities for creators, students, developers, and entrepreneurs. High speed, client-side encryption, and zero registration required.
        </p>

        {/* Categories / Modern Tool Grid Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 max-w-4xl mx-auto">
          {tools.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-800 border-cyan-500/60 shadow-lg shadow-cyan-500/10 text-white'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex justify-between items-center w-full mb-2">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">{t.category}</span>
                </div>
                <span className="text-xs font-bold leading-snug">{t.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Tool Workspace */}
      <main className="max-w-4xl mx-auto px-4 w-full flex-1">
        {activeTab === 'qrcode' && <QrCodeGenerator />}
        {activeTab === 'password' && <PasswordGenerator />}
        {activeTab === 'prompt' && <PromptEnhancer />}
        {activeTab === 'crypto' && <CryptoCalculator />}
        {activeTab === 'youtube' && <YoutubeSeoTool />}
        {activeTab === 'summary' && <TextSummarizer />}

        {/* High-CTR Middle Ad Placement */}
        <AdBanner slotId="middle-tool-banner" format="horizontal" label="Advertisement" />

        {/* Dynamic SEO, How-to & FAQ Block for High Google Ranking */}
        <ToolSeoBlock {...SEO_CONTENT[activeTab]} />

        {/* Curated High-Converting Sponsor / Affiliate Card */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 mb-1 block">Recommended Security Tool</span>
            <h4 className="text-white font-bold text-base">Protect Your Passwords with 256-bit AES Vault</h4>
            <p className="text-xs text-slate-400 max-w-lg mt-1">Safeguard your accounts, credit cards, and crypto keys across all devices with zero-knowledge encryption.</p>
          </div>
          <a
            href="https://bitwarden.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-white text-slate-950 hover:bg-slate-200 text-xs font-bold shrink-0 flex items-center gap-1.5 transition-all shadow-md"
          >
            Learn More <ExternalLink className="w-3.5 h-3.5" />
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
