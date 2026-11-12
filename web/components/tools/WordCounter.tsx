'use client';

import React, { useState } from 'react';
import { Type, Copy, Check, Trash2, Clock, AlignJustify } from 'lucide-react';

export const WordCounter = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s+/g, '').length;
  const sentences = text.trim() ? (text.match(/[^.!?]+[.!?]+(\s|$)/g) || [text]).length : 0;
  const paragraphs = text.trim() ? text.split(/\n+/).filter(p => p.trim().length > 0).length : 0;
  const readingTimeMinutes = Math.ceil(words / 200);
  const speakingTimeMinutes = Math.ceil(words / 130);

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
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
          <Type className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Live Word & Character Counter</h2>
          <p className="text-xs text-slate-400">Real-time writing statistics, reading time estimation, and sentence analytics</p>
        </div>
      </div>

      {/* Quick Metric Cards */}
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

      {/* Input Area */}
      <div className="mb-4">
        <textarea
          rows={7}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing or paste your essay, blog draft, or assignment here..."
          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-200 focus:outline-none focus:border-teal-500 transition-colors"
        />
      </div>

      {/* Bottom Controls and Extra Insights */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-teal-400" />
            Reading: <strong className="text-slate-200">~{readingTimeMinutes} min</strong>
          </span>
          <span className="flex items-center gap-1.5">
            <AlignJustify className="w-3.5 h-3.5 text-cyan-400" />
            Speaking: <strong className="text-slate-200">~{speakingTimeMinutes} min</strong>
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
