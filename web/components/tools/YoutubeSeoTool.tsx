'use client';

import React, { useState } from 'react';
import { Video, Tag, Copy, Check, Sparkles } from 'lucide-react';

export const YoutubeSeoTool = () => {
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('Tech & AI');
  const [generatedTags, setGeneratedTags] = useState<string[]>([]);
  const [titles, setTitles] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) return;

    const baseSlug = topic.toLowerCase().trim();
    const cleanWord = baseSlug.replace(/[^a-zA-Z0-9 ]/g, "");

    const newTitles = [
      `I Tested ${topic} So You Don't Have To (Honest Truth)`,
      `How to Use ${topic} Like a PRO in 2026 (Full Tutorial)`,
      `Stop Wasting Time: Master ${topic} in 5 Minutes`,
      `The BEST Way to Automate with ${topic} (Step-by-Step)`,
    ];

    const newTags = [
      topic,
      `${cleanWord} tutorial`,
      `${cleanWord} 2026`,
      `how to use ${cleanWord}`,
      `best ${cleanWord} tips`,
      `${cleanWord} review`,
      `${cleanWord} automation`,
      `nexora ai tools`,
      category.toLowerCase(),
      `free ${cleanWord}`,
      `${cleanWord} for beginners`
    ];

    setTitles(newTitles);
    setGeneratedTags(newTags);
  };

  const copyTags = () => {
    navigator.clipboard.writeText(generatedTags.join(', '));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
          <Video className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">YouTube SEO Title & Tag Extractor</h2>
          <p className="text-xs text-slate-400">Generate viral click-through titles and high-ranking SEO tags</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="md:col-span-2">
          <label className="block text-xs font-semibold text-slate-400 mb-1">Video Topic / Main Keyword</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. Cursor AI vs GitHub Copilot"
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-rose-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1">Niche / Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-rose-500"
          >
            <option>Tech & AI</option>
            <option>Crypto & Finance</option>
            <option>Coding & Development</option>
            <option>Online Business & Marketing</option>
            <option>Productivity</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleGenerate}
        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-400 hover:to-red-500 text-white font-semibold text-sm shadow-lg shadow-rose-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <Sparkles className="w-4 h-4" />
        Generate Viral SEO Bundle
      </button>

      {titles.length > 0 && (
        <div className="mt-6 pt-6 border-t border-slate-800 space-y-4">
          <div>
            <h3 className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">High-CTR Clickable Titles</h3>
            <div className="space-y-1.5">
              {titles.map((t, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 text-xs text-slate-200 flex justify-between items-center group">
                  <span>{t}</span>
                  <button 
                    onClick={() => navigator.clipboard.writeText(t)}
                    className="text-[11px] text-slate-400 hover:text-rose-400 transition-colors opacity-80 group-hover:opacity-100 cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xs font-semibold text-rose-400 uppercase tracking-wider">Optimized YouTube Tags ({generatedTags.length})</h3>
              <button
                onClick={copyTags}
                className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied CSV!' : 'Copy All Tags'}
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 p-3 rounded-xl bg-slate-950 border border-slate-800">
              {generatedTags.map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                  <Tag className="w-3 h-3 text-slate-500" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
