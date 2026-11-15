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
  Layers,
  ChevronRight
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
      summary: 'Count words, characters, sentences, and estimated reading time in real-time.',
      subtools: [
        { name: 'Meta Description Counter', href: '/tools/word-counter/meta-description-counter' },
        { name: 'Reading Time Calculator', href: '/tools/word-counter/reading-time-calculator' },
        { name: 'College Essay Word Counter', href: '/tools/word-counter/college-essays' },
        { name: 'Essay Word Counter', href: '/tools/word-counter/for-essays' },
      ]
    },
    { 
      id: 'caseconverter', 
      slug: 'case-converter', 
      name: 'Case Converter', 
      icon: SpellCheck, 
      category: 'Text',
      summary: 'Instantly convert text to UPPERCASE, lowercase, Title Case, camelCase, or snake_case.',
      subtools: [
        { name: 'Title Case Converter', href: '/tools/case-converter/title-case-converter' },
        { name: 'Sentence Case Converter', href: '/tools/case-converter/sentence-case-converter' },
      ]
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Dynamic Header */}
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-black text-lg tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
                NEXORA <span className="text-cyan-400 font-normal">AI</span>
              </span>
              <span className="text-[10px] text-cyan-400/80 block -mt-1 font-mono tracking-widest uppercase">Tool Engine v2.0</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              8 Free Core Tools Active
            </div>
            <Link 
              href="#tools" 
              className="text-xs font-semibold px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white transition-all"
            >
              Directory
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-8 border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/0 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-[11px] text-cyan-400 font-medium mb-4">
            <Shield className="w-3.5 h-3.5" />
            100% Client-Side Privacy • Zero Sign-Up Required
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Precision Web Utilities & <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
              Content Productivity Tools
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Free, privacy-first web utilities built for creators, marketers, and developers. No character caps, zero subscriptions, and instant browser processing.
          </p>
        </div>
      </section>

      {/* Clean Ad Placement */}
      <div className="max-w-4xl mx-auto px-4 mt-6 w-full">
        <AdBanner slotId="top-leaderboard-banner" format="horizontal" label="Advertisement" />
      </div>

      {/* Main Tool Interface */}
      <main className="max-w-4xl mx-auto px-4 py-6 w-full flex-1" id="tools">
        {/* Modern Filter / Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar scroll-smooth">
          {tools.map(tool => {
            const Icon = tool.icon;
            const isActive = activeTab === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => setActiveTab(tool.id as any)}
                className={`flex items-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-[1.02]' 
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-850 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                <span>{tool.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tool Viewport */}
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

        {/* Short & Unique Hub Preview Card with Natural Sub-Tool Links */}
        <div className="mt-8 p-5 rounded-2xl bg-slate-900/40 border border-slate-850 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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

          {/* Natural HTML Links for Specialized Child Tools */}
          {currentTool.subtools && currentTool.subtools.length > 0 && (
            <div className="pt-3 border-t border-slate-800/80">
              <span className="text-[11px] font-semibold text-slate-400 block mb-2">
                Specialized {currentTool.name} Utilities:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentTool.subtools.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 hover:border-cyan-500/50 text-xs text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <span>{sub.name}</span>
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                  </Link>
                ))}
              </div>
            </div>
          )}
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
                <li className="pl-2 border-l border-slate-800 text-[11px] space-y-1">
                  <div><Link href="/tools/word-counter/for-essays" className="hover:text-cyan-400 text-slate-500 hover:text-slate-300 transition-colors">• Essay Pages</Link></div>
                  <div><Link href="/tools/word-counter/college-essays" className="hover:text-cyan-400 text-slate-500 hover:text-slate-300 transition-colors">• College Essays</Link></div>
                  <div><Link href="/tools/word-counter/meta-description-counter" className="hover:text-cyan-400 text-slate-500 hover:text-slate-300 transition-colors">• Meta Descriptions</Link></div>
                  <div><Link href="/tools/word-counter/reading-time-calculator" className="hover:text-cyan-400 text-slate-500 hover:text-slate-300 transition-colors">• Reading Time</Link></div>
                </li>
                <li><Link href="/tools/case-converter" className="hover:text-cyan-400 transition-colors">Case Converter</Link></li>
                <li className="pl-2 border-l border-slate-800 text-[11px] space-y-1">
                  <div><Link href="/tools/case-converter/title-case-converter" className="hover:text-cyan-400 text-slate-500 hover:text-slate-300 transition-colors">• Title Case</Link></div>
                  <div><Link href="/tools/case-converter/sentence-case-converter" className="hover:text-cyan-400 text-slate-500 hover:text-slate-300 transition-colors">• Sentence Case</Link></div>
                </li>
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
