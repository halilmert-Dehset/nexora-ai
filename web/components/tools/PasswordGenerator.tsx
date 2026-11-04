'use client';

import React, { useState, useEffect } from 'react';
import { KeyRound, Copy, Check, RefreshCw, ShieldCheck } from 'lucide-react';

export const PasswordGenerator = () => {
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let chars = '';
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) chars += '0123456789';
    if (includeSymbols) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    if (!chars) {
      setPassword('');
      return;
    }

    let generated = '';
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    for (let i = 0; i < length; i++) {
      generated += chars[array[i] % chars.length];
    }
    setPassword(generated);
  };

  useEffect(() => {
    generatePassword();
  }, [length, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const handleCopy = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStrength = () => {
    if (length >= 16 && includeSymbols && includeNumbers && includeUppercase) {
      return { text: 'Very Strong', color: 'text-emerald-400', bar: 'bg-emerald-500 w-full' };
    }
    if (length >= 12 && (includeNumbers || includeSymbols)) {
      return { text: 'Strong', color: 'text-cyan-400', bar: 'bg-cyan-500 w-3/4' };
    }
    if (length >= 8) {
      return { text: 'Moderate', color: 'text-amber-400', bar: 'bg-amber-500 w-1/2' };
    }
    return { text: 'Weak', color: 'text-rose-400', bar: 'bg-rose-500 w-1/4' };
  };

  const strength = getStrength();

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
          <KeyRound className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Cryptographically Secure Password Generator</h2>
          <p className="text-xs text-slate-400">Generate unhackable, high-entropy passwords directly inside your browser</p>
        </div>
      </div>

      {/* Password Display Box */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 mb-4">
        <span className="font-mono text-sm sm:text-base text-cyan-300 break-all select-all font-semibold">
          {password || 'Select at least one character type'}
        </span>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={generatePassword}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
            title="Generate New Password"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={handleCopy}
            className="px-3 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-amber-500/20 cursor-pointer"
          >
            {copied ? <Check className="w-4 h-4 text-slate-950" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>

      {/* Strength Indicator */}
      <div className="mb-6 space-y-1.5">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-500">Security Level:</span>
          <span className={`font-bold flex items-center gap-1 ${strength.color}`}>
            <ShieldCheck className="w-3.5 h-3.5" />
            {strength.text}
          </span>
        </div>
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div className={`h-full transition-all duration-300 ${strength.bar}`}></div>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="space-y-4 pt-4 border-t border-slate-800">
        <div>
          <div className="flex justify-between items-center text-xs text-slate-400 mb-1.5">
            <span>Password Length: <strong className="text-white">{length} characters</strong></span>
          </div>
          <input
            type="range"
            min="6"
            max="40"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:border-slate-700">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="accent-amber-500"
            />
            <span>A-Z (Upper)</span>
          </label>

          <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:border-slate-700">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="accent-amber-500"
            />
            <span>a-z (Lower)</span>
          </label>

          <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:border-slate-700">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="accent-amber-500"
            />
            <span>0-9 (Numbers)</span>
          </label>

          <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 cursor-pointer hover:border-slate-700">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="accent-amber-500"
            />
            <span>!@#$ (Symbols)</span>
          </label>
        </div>
      </div>
    </div>
  );
};
