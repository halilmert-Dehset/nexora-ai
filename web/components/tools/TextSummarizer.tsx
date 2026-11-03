'use client';

import React, { useState } from 'react';
import { AlignLeft, FileText, CheckCircle2 } from 'lucide-react';

export const TextSummarizer = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [stats, setStats] = useState({ words: 0, chars: 0, readingTime: 0 });

  const handleSummarize = () => {
    if (!text.trim()) return;

    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const charCount = text.length;
    const readingTime = Math.ceil(wordCount / 200);

    setStats({ words: wordCount, chars: charCount, readingTime });

    // Client-side instant key takeaway extraction
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    const topSentences = sentences.slice(0, Math.min(3, sentences.length)).map(s => s.trim());

    setSummary(topSentences.join(' '));
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
          <AlignLeft className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">AI Quick Text & Article Summarizer</h2>
          <p className="text-xs text-slate-400">Instant bullet takeaways, word counter, and reading time estimation</p>
        </div>
      </div>

      <div className="mb-4">
        <textarea
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste any article, blog post, or long documentation here..."
          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:outline-none focus:border-violet-500"
        />
      </div>

      <button
        onClick={handleSummarize}
        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-violet-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <FileText className="w-4 h-4" />
        Analyze & Extract Summary
      </button>

      {stats.words > 0 && (
        <div className="mt-6 pt-6 border-t border-slate-800 space-y-4">
          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-center">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Words</span>
              <span className="text-lg font-bold text-white">{stats.words}</span>
            </div>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-center">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Characters</span>
              <span className="text-lg font-bold text-white">{stats.chars}</span>
            </div>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-center">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Reading Time</span>
              <span className="text-lg font-bold text-violet-400">~{stats.readingTime} min</span>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Executive Takeaway Summary
            </h3>
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 leading-relaxed">
              {summary}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
