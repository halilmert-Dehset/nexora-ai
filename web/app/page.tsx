'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PromptEnhancer } from '@/components/tools/PromptEnhancer';
import { CryptoCalculator } from '@/components/tools/CryptoCalculator';
import { YoutubeSeoTool } from '@/components/tools/YoutubeSeoTool';
import { TextSummarizer } from '@/components/tools/TextSummarizer';
import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';
import { PasswordGenerator } from '@/components/tools/PasswordGenerator';
import { WordCounter } from '@/components/tools/WordCounter';
import { CaseConverter } from '@/components/tools/CaseConverter';
import { AdBanner } from '@/components/AdBanner';
import { 
  Sparkles, 
  Calculator, 
  Video, 
  AlignLeft, 
  Zap, 
  QrCode, 
  KeyRound,
  Type,
  SpellCheck,
  ExternalLink,
  ArrowRight,
  Shield,
  Layers
} from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'wordcounter' | 'caseconverter' | 'qrcode' | 'password' | 'prompt' | 'crypto' | 'youtube' | 'summary'>('wordcounter');

  const tools = [
    { 
      id: 'wordcounter', 
      slug: 'word-counter', 
      name: 'Word Counter', 
      icon: Type, 
      category: 'Writing',
      summary: 'Count words, characters, sentences, and estimated reading time in real-time.' 
    },
    { 
      id: 'caseconverter', 
      slug: 'case-converter', 
      name: 'Case Converter', 
      icon: SpellCheck, 
      category: 'Text',
      summary: 'Instantly convert text to UPPERCASE, lowercase, Title Case, camelCase, or snake_case.' 
    },
    { 
      id: 'qrcode', 
      slug: 'qr-code-generator', 
      name: 'QR Code Generator', 
      icon: QrCode, 
      category: 'Utilities',
      summary: 'Generate permanent, high-resolution QR codes with zero expiration limits.' 
    },
    { 
      id: 'password', 
      slug: 'password-generator', 
      name: 'Password Generator', 
      icon: KeyRound, 
      category: 'Security',
      summary: 'Create high-entropy, cryptographically unhackable random passwords locally.' 
    },
    { 
      id: 'prompt', 
      slug: 'ai-prompt-enhancer', 
      name: 'AI Prompt Enhancer', 
      icon: Sparkles, 
      category: 'AI Tools',
      summary: 'Engineer structured system prompts for ChatGPT, Claude, and Midjourney.' 
    },
    { 
      id: 'crypto', 
      slug: 'crypto-profit-calculator', 
      name: 'Crypto ROI Calculator', 
      icon: Calculator, 
      category: 'Finance',
      summary: 'Calculate profit, net margin, and leverage ROI for spot and futures contracts.' 
    },
    { 
      id: 'youtube', 
      slug: 'youtube-seo-tags', 
      name: 'YouTube SEO Tags', 
      icon: Video, 
      category: 'Social Media',
      summary: 'Generate high-CTR click-through titles and algorithmic tags for YouTube videos.' 
    },
    { 
      id: 'summary', 
      slug: 'text-summarizer', 
      name: 'Text Summarizer', 
      icon: AlignLeft, 
      category: 'Writing',
      summary: 'Extract executive bullet points and key takeaways from long documentation.' 
    },
  ];

  const currentTool = tools.find(t => t.id === activeTab) || tools[0];

  return (
    <div className="flex-1 flex flex-col">
      {/* Top Banner Advertisement (Clean Container) */}
      <div className="w-full bg-slate-950 border-b border-slate-900 py-2">
        <AdBanner slotId="top-leaderboard-banner" format="horizontal" label="Advertisement" />
      </div>

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
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
          </Link>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
            <span className="hidden sm:flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              8 Free Online Tools (No Sign-up)
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

        {/* Categories / Modern Tool Grid Selector with Crawlable Links */}
        <div id="tools" className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 max-w-5xl mx-auto">
          {tools.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer relative group ${
                  isActive
                    ? 'bg-slate-800 border-cyan-500/60 shadow-lg shadow-cyan-500/10 text-white'
                    : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex justify-between items-center w-full mb-2">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <Link
                    href={`/tools/${t.slug}`}
                    title={`Open dedicated ${t.name} page`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-slate-500 hover:text-cyan-400 transition-colors p-0.5"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div>
                  <span className="text-[8px] uppercase tracking-wider text-slate-500 font-semibold block mb-0.5">{t.category}</span>
                  <span className="text-xs font-bold leading-snug">{t.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Tool Workspace */}
      <main className="max-w-4xl mx-auto px-4 w-full flex-1">
        {activeTab === 'wordcounter' && <WordCounter />}
        {activeTab === 'caseconverter' && <CaseConverter />}
        {activeTab === 'qrcode' && <QrCodeGenerator />}
        {activeTab === 'password' && <PasswordGenerator />}
        {activeTab === 'prompt' && <PromptEnhancer />}
        {activeTab === 'crypto' && <CryptoCalculator />}
        {activeTab === 'youtube' && <YoutubeSeoTool />}
        {activeTab === 'summary' && <TextSummarizer />}

        {/* Clean Ad Placement */}
        <AdBanner slotId="middle-tool-banner" format="horizontal" label="Advertisement" />

        {/* Short & Unique Hub Preview Card (Eliminates Duplicate Content) */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-900/40 border border-slate-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 mb-1 block">Quick Hub Overview</span>
            <h3 className="text-sm font-bold text-white">Using {currentTool.name}</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">{currentTool.summary}</p>
          </div>
          <Link
            href={`/tools/${currentTool.slug}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 hover:text-cyan-200 text-xs font-semibold shrink-0 transition-colors border border-slate-700"
          >
            <span>Full Guide & FAQ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Curated High-Converting Sponsor / Affiliate Card */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 mb-1 block">Recommended Writing Assistant</span>
            <h4 className="text-white font-bold text-base">Write 10x Faster with AI Productivity Tools</h4>
            <p className="text-xs text-slate-400 max-w-lg mt-1">Supercharge your essays, email campaigns, and code comments with seamless automated grammar and style suggestions.</p>
          </div>
          <a
            href="https://grammarly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-white text-slate-950 hover:bg-slate-200 text-xs font-bold shrink-0 flex items-center gap-1.5 transition-all shadow-md"
          >
            Learn More <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </main>

      {/* Footer & Comprehensive Site Directory Links */}
      <footer className="mt-20 border-t border-slate-900 py-10 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="font-bold text-slate-300 block mb-2">Writing Utilities</span>
              <ul className="space-y-1.5 text-slate-400">
                <li><Link href="/tools/word-counter" className="hover:text-cyan-400 transition-colors">Word Counter</Link></li>
                <li><Link href="/tools/case-converter" className="hover:text-cyan-400 transition-colors">Case Converter</Link></li>
                <li><Link href="/tools/text-summarizer" className="hover:text-cyan-400 transition-colors">Text Summarizer</Link></li>
              </ul>
            </div>
            <div>
              <span className="font-bold text-slate-300 block mb-2">Security & Web</span>
              <ul className="space-y-1.5 text-slate-400">
                <li><Link href="/tools/password-generator" className="hover:text-cyan-400 transition-colors">Password Generator</Link></li>
                <li><Link href="/tools/qr-code-generator" className="hover:text-cyan-400 transition-colors">QR Code Generator</Link></li>
              </ul>
            </div>
            <div>
              <span className="font-bold text-slate-300 block mb-2">AI & Marketing</span>
              <ul className="space-y-1.5 text-slate-400">
                <li><Link href="/tools/ai-prompt-enhancer" className="hover:text-cyan-400 transition-colors">AI Prompt Enhancer</Link></li>
                <li><Link href="/tools/youtube-seo-tags" className="hover:text-cyan-400 transition-colors">YouTube SEO Tags</Link></li>
                <li><Link href="/tools/crypto-profit-calculator" className="hover:text-cyan-400 transition-colors">Crypto ROI Calculator</Link></li>
              </ul>
            </div>
            <div>
              <span className="font-bold text-slate-300 block mb-2">Platform & Legal</span>
              <ul className="space-y-1.5 text-slate-400">
                <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Support</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-400">NEXORA AI</span>
              <span>•</span>
              <span>Automate. Create. Earn.</span>
            </div>
            <div>
              © 2026 NEXORA AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
