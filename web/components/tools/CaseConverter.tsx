'use client';

import React, { useState } from 'react';
import { SpellCheck, Copy, Check, RotateCcw } from 'lucide-react';

export const CaseConverter = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const toSentenceCase = () => {
    const res = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase());
    setText(res);
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toTitleCase = () => {
    const res = text.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    setText(res);
  };

  const toCamelCase = () => {
    const res = text
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
    setText(res);
  };

  const toSnakeCase = () => {
    const res = text
      .trim()
      .toLowerCase()
      .replace(/[\s\W-]+/g, '_');
    setText(res);
  };

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
          <SpellCheck className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Smart Text Case Converter</h2>
          <p className="text-xs text-slate-400">Instantly switch between UPPERCASE, lowercase, Title Case, camelCase, and sentence case</p>
        </div>
      </div>

      <div className="mb-4">
        <textarea
          rows={6}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste text here to convert case instantly..."
          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3.5 text-sm text-slate-200 focus:outline-none focus:border-pink-500 transition-colors"
        />
      </div>

      {/* Conversion Action Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-4">
        <button
          onClick={toSentenceCase}
          className="py-2 px-2.5 bg-slate-950 border border-slate-800 hover:border-pink-500/50 text-xs font-semibold rounded-xl text-slate-200 transition-all cursor-pointer"
        >
          Sentence case
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
          onClick={toTitleCase}
          className="py-2 px-2.5 bg-slate-950 border border-slate-800 hover:border-pink-500/50 text-xs font-semibold rounded-xl text-slate-200 transition-all cursor-pointer"
        >
          Title Case
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

      <div className="flex justify-between items-center pt-3 border-t border-slate-800/80">
        <span className="text-xs text-slate-500">
          Character count: <strong className="text-slate-300">{text.length}</strong>
        </span>

        <button
          onClick={handleCopy}
          disabled={!text}
          className="py-1.5 px-4 rounded-lg bg-pink-500 hover:bg-pink-400 disabled:opacity-40 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-pink-500/20 cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied!' : 'Copy Converted Text'}
        </button>
      </div>
    </div>
  );
};
