'use client';

import React, { useState } from 'react';
import { SpellCheck, Copy, Check, RotateCcw, Sparkles } from 'lucide-react';
import { PseoPageData } from '@/lib/pseo/types';

interface PseoCaseConverterProps {
  pageData: PseoPageData;
}

export const PseoCaseConverter: React.FC<PseoCaseConverterProps> = ({ pageData }) => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  // Conversion algorithms
  const toSentenceCase = () => {
    if (!text) return;
    // Lowercase all, capitalize after punctuation, and keep isolated 'i' capitalized
    let res = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
    // Capitalize standalone 'i'
    res = res.replace(/\bi\b/g, 'I');
    setText(res);
  };

  const toTitleCase = () => {
    if (!text) return;
    const minorWords = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'in', 'of']);
    const words = text.toLowerCase().split(/\s+/);
    const converted = words.map((w, index) => {
      if (index === 0 || index === words.length - 1 || !minorWords.has(w)) {
        return w.charAt(0).toUpperCase() + w.slice(1);
      }
      return w;
    }).join(' ');
    setText(converted);
  };

  const toLowerCase = () => setText(text.toLowerCase());
  const toUpperCase = () => setText(text.toUpperCase());
  const toCamelCase = () => {
    const res = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
    setText(res);
  };
  const toSnakeCase = () => {
    const res = text.trim().toLowerCase().replace(/[\s\W-]+/g, '_');
    setText(res);
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isTitleCasePage = pageData.toolType === 'title-case';
  const isSentenceCasePage = pageData.toolType === 'sentence-case';

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md mb-8">
      {/* Tool Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
            <SpellCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[11px] font-semibold tracking-wider text-pink-400 uppercase bg-pink-500/10 px-2 py-0.5 rounded-full border border-pink-500/20">
              {pageData.badge}
            </span>
            <h2 className="text-xl font-bold text-white mt-1">{pageData.h1}</h2>
          </div>
        </div>
      </div>

      {/* Input Textarea */}
      <div className="mb-4">
        <textarea
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={
            isTitleCasePage 
              ? "Type or paste your headline here (e.g. 'the impact of modern technology on education')..." 
              : "Paste accidental all-caps or unformatted text here (e.g. 'THIS WAS TYPED WITH CAPS LOCK ON. HOW DO I FIX IT?')..."
          }
          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-200 focus:outline-none focus:border-pink-500 transition-colors"
        />
      </div>

      {/* Primary Target Conversion Callout */}
      <div className="mb-4 p-3 rounded-xl bg-pink-500/10 border border-pink-500/30 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span className="text-xs font-semibold text-pink-200">
            {isTitleCasePage ? 'Headline Format (Capitalize main words, keep minor words lowercase):' : 'Sentence Format (Capitalize first letter following sentence delimiters):'}
          </span>
        </div>
        <button
          onClick={isTitleCasePage ? toTitleCase : toSentenceCase}
          disabled={!text}
          className="py-2 px-4 rounded-lg bg-pink-500 hover:bg-pink-400 disabled:opacity-40 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-pink-500/20 cursor-pointer"
        >
          {isTitleCasePage ? 'Convert to Title Case Now' : 'Convert to Sentence Case Now'}
        </button>
      </div>

      {/* Additional Conversion Buttons */}
      <div className="pt-2 border-t border-slate-800/80">
        <span className="text-[11px] text-slate-400 block mb-2 font-medium">Alternative Text Case Options:</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-4">
          <button
            onClick={toSentenceCase}
            className={`py-2 px-2.5 border text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              isSentenceCasePage 
                ? 'bg-pink-500/20 text-pink-300 border-pink-500/50' 
                : 'bg-slate-950 border-slate-800 hover:border-pink-500/50 text-slate-200'
            }`}
          >
            Sentence case
          </button>
          <button
            onClick={toTitleCase}
            className={`py-2 px-2.5 border text-xs font-semibold rounded-xl transition-all cursor-pointer ${
              isTitleCasePage 
                ? 'bg-pink-500/20 text-pink-300 border-pink-500/50' 
                : 'bg-slate-950 border-slate-800 hover:border-pink-500/50 text-slate-200'
            }`}
          >
            Title Case
          </button>
          <button
            onClick={toLowerCase}
            className="py-2 px-2.5 bg-slate-950 border border-slate-800 hover:border-pink-500/50 text-xs font-semibold rounded-xl text-slate-200 transition-all cursor-pointer"
          >
            lower case
          </button>
          <button
            onClick={toUpperCase}
            className="py-2 px-2.5 bg-slate-950 border border-slate-800 hover:border-pink-500/50 text-xs font-semibold rounded-xl text-slate-200 transition-all cursor-pointer"
          >
            UPPER CASE
          </button>
          <button
            onClick={toCamelCase}
            className="py-2 px-2.5 bg-slate-950 border border-slate-800 hover:border-pink-500/50 text-xs font-semibold rounded-xl text-slate-200 transition-all cursor-pointer"
          >
            camelCase
          </button>
          <button
            onClick={toSnakeCase}
            className="py-2 px-2.5 bg-slate-950 border border-slate-800 hover:border-pink-500/50 text-xs font-semibold rounded-xl text-slate-200 transition-all cursor-pointer"
          >
            snake_case
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-800/80">
        <span className="text-xs text-slate-500">
          Length: {text.length} chars | {text.trim() ? text.trim().split(/\s+/).length : 0} words
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setText('')}
            disabled={!text}
            className="py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 text-xs flex items-center gap-1 transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Clear
          </button>
          <button
            onClick={handleCopy}
            disabled={!text}
            className="py-1.5 px-3 rounded-lg bg-pink-500 hover:bg-pink-400 disabled:opacity-40 text-slate-950 font-bold text-xs flex items-center gap-1 transition-all shadow-md shadow-pink-500/20 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied!' : 'Copy Converted Text'}
          </button>
        </div>
      </div>
    </div>
  );
};
