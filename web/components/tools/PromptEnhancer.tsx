'use client';

import React, { useState } from 'react';
import { Sparkles, Copy, Check, Wand2 } from 'lucide-react';

export const PromptEnhancer = () => {
  const [inputPrompt, setInputPrompt] = useState('');
  const [role, setRole] = useState('Senior Software Engineer');
  const [tone, setTone] = useState('Professional & Actionable');
  const [outputPrompt, setOutputPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  const handleEnhance = () => {
    if (!inputPrompt.trim()) return;

    const enhanced = `You are a world-class ${role}.
Your tone should be ${tone}.

## Objective:
${inputPrompt}

## Strict Guidelines:
1. Provide a step-by-step breakdown before providing the final solution.
2. Emphasize clarity, modern best practices, and zero fluff.
3. Highlight potential edge cases, pitfalls, or security risks.
4. If applicable, provide clear, copy-pasteable code examples with helpful comments.
5. Conclude with a concise summary checklist of actionable next steps.`;

    setOutputPrompt(enhanced);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Wand2 className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">AI Prompt Enhancer & Architect</h2>
          <p className="text-xs text-slate-400">Turn simple one-liners into master prompts for ChatGPT, Claude, and Midjourney</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1">Target Persona / Role</label>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
          >
            <option>Senior Software Engineer</option>
            <option>Elite Copywriter & Marketer</option>
            <option>Quantitative Crypto Trader</option>
            <option>Product Manager & Strategist</option>
            <option>Viral Social Media Creator</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 mb-1">Desired Tone & Style</label>
          <select 
            value={tone} 
            onChange={(e) => setTone(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
          >
            <option>Professional & Actionable</option>
            <option>Ultra Concise (No Fluff)</option>
            <option>Persuasive & High Converting</option>
            <option>Academic & Thorough</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-slate-400 mb-1">Your Raw Prompt or Idea</label>
        <textarea
          rows={3}
          value={inputPrompt}
          onChange={(e) => setInputPrompt(e.target.value)}
          placeholder="e.g. Write an email to pitch my web design services to real estate agents..."
          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
        />
      </div>

      <button
        onClick={handleEnhance}
        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
      >
        <Sparkles className="w-4 h-4" />
        Enhance Prompt with NEXORA AI
      </button>

      {outputPrompt && (
        <div className="mt-6 pt-6 border-t border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Enhanced Master Prompt</span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied!' : 'Copy Prompt'}
            </button>
          </div>
          <pre className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
            {outputPrompt}
          </pre>
        </div>
      )}
    </div>
  );
};
