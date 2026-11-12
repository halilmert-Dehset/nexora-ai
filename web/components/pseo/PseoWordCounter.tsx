'use client';

import React, { useState } from 'react';
import { Type, Clock, AlignJustify, Copy, Check, Trash2, Search, Smartphone, Monitor, BookOpen, AlertCircle, CheckCircle2 } from 'lucide-react';
import { PseoPageData } from '@/lib/pseo/types';

interface PseoWordCounterProps {
  pageData: PseoPageData;
}

export const PseoWordCounter: React.FC<PseoWordCounterProps> = ({ pageData }) => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  // Mode specific states
  const [readingWpm, setReadingWpm] = useState<130 | 200 | 260>(200);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [collegePreset, setCollegePreset] = useState<'common-app' | 'uc-piq' | 'short-supp'>('common-app');

  // Core metrics calculation
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s+/g, '').length;
  const sentences = text.trim() ? (text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text]).length : 0;
  const paragraphs = text.trim() ? text.split(/\n+/).filter(p => p.trim().length > 0).length : 0;

  // Reading time calculations
  const totalSeconds = words > 0 ? Math.round((words / readingWpm) * 60) : 0;
  const readingMin = Math.floor(totalSeconds / 60);
  const readingSec = totalSeconds % 60;

  // Speech duration (fixed standard 130 WPM speech)
  const totalSpeechSec = words > 0 ? Math.round((words / 130) * 60) : 0;
  const speechMin = Math.floor(totalSpeechSec / 60);
  const speechSec = totalSpeechSec % 60;

  // Academic essay page calculations (Standard 12pt Times New Roman, 1-inch margins)
  const doubleSpacedPages = words > 0 ? (words / 250).toFixed(1) : '0.0';
  const singleSpacedPages = words > 0 ? (words / 500).toFixed(1) : '0.0';

  // College admissions limits
  const collegeLimits = {
    'common-app': { name: 'Common App Personal Essay', min: 250, max: 650, note: 'Strict 650-word cap. Text box will truncate beyond 650.' },
    'uc-piq': { name: 'UC Personal Insight Questions (PIQ)', min: 100, max: 350, note: 'Maximum 350 words per prompt for UC application.' },
    'short-supp': { name: 'Standard Short Supplement', min: 50, max: 250, note: 'Typical 150-250 word supplemental essay range.' }
  };
  const activeLimit = collegeLimits[collegePreset];
  const wordsRemaining = activeLimit.max - words;

  // Meta description thresholds
  const isMetaShort = chars < 120;
  const isMetaOptimal = chars >= 120 && chars <= 158;
  const isMetaLong = chars > 158;

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md mb-8">
      {/* Tool Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
            <Type className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-teal-400 uppercase bg-teal-500/10 px-2 py-0.5 rounded-full border border-teal-500/20">
              {pageData.badge}
            </span>
            <h2 className="text-xl font-bold text-white mt-1">{pageData.h1}</h2>
          </div>
        </div>
      </div>

      {/* SPECIAL WIDGET 1: Meta Description Counter & SERP Preview */}
      {pageData.toolType === 'meta-description' && (
        <div className="mb-5 p-4 rounded-xl bg-slate-950 border border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-semibold text-slate-300">Google SERP Snippet Preview</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
              <button
                onClick={() => setPreviewDevice('desktop')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded cursor-pointer transition-colors ${
                  previewDevice === 'desktop' ? 'bg-teal-500/20 text-teal-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" /> Desktop (~960px)
              </button>
              <button
                onClick={() => setPreviewDevice('mobile')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded cursor-pointer transition-colors ${
                  previewDevice === 'mobile' ? 'bg-teal-500/20 text-teal-400 font-semibold' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" /> Mobile (~680px)
              </button>
            </div>
          </div>

          {/* Simulated SERP Card */}
          <div className={`p-4 rounded-lg bg-[#202124] border border-slate-700/60 font-sans transition-all ${
            previewDevice === 'mobile' ? 'max-w-sm' : 'max-w-2xl'
          }`}>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-4 h-4 rounded-full bg-slate-600 flex items-center justify-center text-[9px] text-white font-bold">N</div>
              <div className="text-[12px] text-[#bdc1c6] leading-none">
                <span>nexora.ai</span>
                <span className="text-slate-500 mx-1">›</span>
                <span className="text-slate-400">tools</span>
              </div>
            </div>
            <div className="text-[#8ab4f8] hover:underline text-[17px] font-normal leading-snug cursor-pointer mb-1 line-clamp-1">
              Your Target Page Title Here | High CTR Snippet
            </div>
            <div className="text-[#bdc1c6] text-[13px] leading-relaxed break-words">
              {text ? (
                <>
                  {previewDevice === 'mobile' && chars > 120 ? (
                    <span>{text.slice(0, 120)}<span className="text-red-400 font-bold">... (Mobile Truncation)</span></span>
                  ) : previewDevice === 'desktop' && chars > 158 ? (
                    <span>{text.slice(0, 158)}<span className="text-red-400 font-bold">... (Desktop Truncation)</span></span>
                  ) : (
                    text
                  )}
                </>
              ) : (
                <span className="italic text-slate-500">
                  Type your meta description below to preview how it will appear in Google search results...
                </span>
              )}
            </div>
          </div>

          {/* Real-time Status Indicator */}
          <div className="mt-3 flex flex-wrap items-center justify-between text-xs pt-2 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="text-slate-400">Status:</span>
              {chars === 0 ? (
                <span className="text-slate-500">Empty</span>
              ) : isMetaShort ? (
                <span className="text-amber-400 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> A bit short ({chars} chars) — Add more context
                </span>
              ) : isMetaOptimal ? (
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Optimal Range ({chars} chars / ~{Math.round(chars * 5.9)}px)
                </span>
              ) : (
                <span className="text-rose-400 font-semibold flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Truncation Risk ({chars} chars &gt; 158)
                </span>
              )}
            </div>
            <span className="text-slate-500 text-[11px]">Estimated Desktop Limit: ~158-160 Chars (~960px)</span>
          </div>
        </div>
      )}

      {/* SPECIAL WIDGET 2: Reading Time Calculator Settings */}
      {pageData.toolType === 'reading-time' && (
        <div className="mb-5 p-4 rounded-xl bg-slate-950 border border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-semibold text-slate-300">Reading Speed Benchmark:</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => setReadingWpm(130)}
                className={`px-3 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                  readingWpm === 130 
                    ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 font-semibold' 
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                130 WPM (Technical / ESL)
              </button>
              <button
                onClick={() => setReadingWpm(200)}
                className={`px-3 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                  readingWpm === 200 
                    ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 font-semibold' 
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                200 WPM (Standard Web Avg)
              </button>
              <button
                onClick={() => setReadingWpm(260)}
                className={`px-3 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                  readingWpm === 260 
                    ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 font-semibold' 
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                260 WPM (Fast Reader)
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-center">
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Silent Reading Time</span>
              <span className="text-2xl font-black text-teal-400">
                {readingMin} <span className="text-sm font-normal text-slate-300">min</span> {readingSec} <span className="text-sm font-normal text-slate-300">sec</span>
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Based on {readingWpm} WPM</span>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">Speaking / Presentation Time</span>
              <span className="text-2xl font-black text-cyan-400">
                {speechMin} <span className="text-sm font-normal text-slate-300">min</span> {speechSec} <span className="text-sm font-normal text-slate-300">sec</span>
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Standard Public Speaking Pace (~130 WPM)</span>
            </div>
          </div>
        </div>
      )}

      {/* SPECIAL WIDGET 3: College Application Limits */}
      {pageData.toolType === 'college-essays' && (
        <div className="mb-5 p-4 rounded-xl bg-slate-950 border border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="text-xs font-semibold text-slate-300">Target Admissions Application:</span>
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={() => setCollegePreset('common-app')}
                className={`px-3 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                  collegePreset === 'common-app' 
                    ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 font-semibold' 
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Common App (650 Max)
              </button>
              <button
                onClick={() => setCollegePreset('uc-piq')}
                className={`px-3 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                  collegePreset === 'uc-piq' 
                    ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 font-semibold' 
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                UC PIQ (350 Max)
              </button>
              <button
                onClick={() => setCollegePreset('short-supp')}
                className={`px-3 py-1.5 rounded-lg border cursor-pointer transition-colors ${
                  collegePreset === 'short-supp' 
                    ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 font-semibold' 
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Short Supplement (250 Max)
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900 rounded-lg border border-slate-800">
            <div>
              <div className="text-xs font-semibold text-slate-200">{activeLimit.name}</div>
              <div className="text-[11px] text-slate-400">{activeLimit.note}</div>
            </div>
            <div className="text-right">
              <span className={`text-xl font-black ${
                words > activeLimit.max 
                  ? 'text-rose-400' 
                  : words < activeLimit.min && words > 0 
                  ? 'text-amber-400' 
                  : 'text-teal-400'
              }`}>
                {words} / {activeLimit.max} words
              </span>
              <div className="text-[11px] text-slate-400">
                {words > activeLimit.max ? (
                  <span className="text-rose-400 font-semibold">Exceeds limit by {words - activeLimit.max} words!</span>
                ) : (
                  <span>{wordsRemaining} words remaining</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SPECIAL WIDGET 4: Academic Essay Page Conversions */}
      {pageData.toolType === 'for-essays' && (
        <div className="mb-5 p-4 rounded-xl bg-slate-950 border border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-semibold text-slate-300">Academic Page Length Estimator (12pt Font, 1-inch Margins)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Double-Spaced (MLA/APA)</span>
              <span className="text-2xl font-black text-teal-400">{doubleSpacedPages}</span>
              <span className="text-[10px] text-slate-400 block">~250 words / page</span>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Single-Spaced</span>
              <span className="text-2xl font-black text-cyan-400">{singleSpacedPages}</span>
              <span className="text-[10px] text-slate-400 block">~500 words / page</span>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3 bg-slate-900 rounded-lg border border-slate-800">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Reading Duration</span>
              <span className="text-2xl font-black text-white">{Math.ceil(words / 200)} <span className="text-xs font-normal text-slate-400">min</span></span>
              <span className="text-[10px] text-slate-400 block">Evaluator reading time</span>
            </div>
          </div>
          <div className="mt-2 text-[11px] text-slate-500 italic">
            * Note: Page counts are estimates based on standard 12pt Times New Roman with 1-inch margins. Actual page counts vary with font geometry and Works Cited formatting.
          </div>
        </div>
      )}

      {/* Universal Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-center">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Words</span>
          <span className="text-2xl font-black text-teal-400">{words}</span>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-center">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Characters</span>
          <span className="text-2xl font-black text-cyan-400">{chars}</span>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-center">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Sentences</span>
          <span className="text-2xl font-black text-white">{sentences}</span>
        </div>
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-center">
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Paragraphs</span>
          <span className="text-2xl font-black text-white">{paragraphs}</span>
        </div>
      </div>

      {/* Input Textarea */}
      <div className="mb-4">
        <textarea
          rows={7}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={`Paste or type your text here to analyze ${pageData.h1.toLowerCase()}...`}
          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-200 focus:outline-none focus:border-teal-500 transition-colors"
        />
      </div>

      {/* Bottom Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-teal-400" />
            Reading: <strong className="text-slate-200">~{Math.ceil(words / 200)} min</strong>
          </span>
          <span className="flex items-center gap-1.5">
            <AlignJustify className="w-3.5 h-3.5 text-cyan-400" />
            Speaking: <strong className="text-slate-200">~{Math.ceil(words / 130)} min</strong>
          </span>
          <span className="hidden sm:inline text-slate-500">
            No spaces: {charsNoSpaces}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleClear}
            disabled={!text}
            className="py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 text-xs flex items-center gap-1 transition-all cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" /> Clear
          </button>
          <button
            onClick={handleCopy}
            disabled={!text}
            className="py-1.5 px-3 rounded-lg bg-teal-500 hover:bg-teal-400 disabled:opacity-40 text-slate-950 font-bold text-xs flex items-center gap-1 transition-all shadow-md shadow-teal-500/20 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied!' : 'Copy Text'}
          </button>
        </div>
      </div>
    </div>
  );
};
