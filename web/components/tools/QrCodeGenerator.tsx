'use client';

import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { QrCode, Download, Copy, Check, Sparkles } from 'lucide-react';

export const QrCodeGenerator = () => {
  const [text, setText] = useState('https://nexora-ai-eosin-three.vercel.app');
  const [qrUrl, setQrUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [size, setSize] = useState(300);

  useEffect(() => {
    generateQr(text);
  }, [text, size]);

  const generateQr = async (val: string) => {
    if (!val.trim()) {
      setQrUrl('');
      return;
    }
    try {
      const url = await QRCode.toDataURL(val, {
        width: size,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      });
      setQrUrl(url);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDownload = () => {
    if (!qrUrl) return;
    const a = document.createElement('a');
    a.href = qrUrl;
    a.download = `nexora-qr-code.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <QrCode className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Free Instant QR Code Generator</h2>
          <p className="text-xs text-slate-400">Generate high-resolution QR codes for websites, Wi-Fi, text, or vCards</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">Enter URL, Text, or Contact Info</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="e.g. https://yourwebsite.com or menu link"
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1">QR Code Resolution (Size)</label>
            <div className="flex gap-2">
              {[200, 300, 500].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`flex-1 py-1.5 text-xs rounded-lg font-semibold transition-all cursor-pointer ${
                    size === s
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                      : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {s}x{s} px
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 bg-slate-950/60 border border-slate-850 rounded-xl text-xs text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% Free & Unlimited Lifespan</span>
            </div>
            <p>Generated QR codes never expire. No redirects, no ads, and no scan limits.</p>
          </div>
        </div>

        {/* QR Preview Column */}
        <div className="flex flex-col items-center justify-center p-4 bg-slate-950 border border-slate-800 rounded-xl">
          {qrUrl ? (
            <>
              <div className="p-3 bg-white rounded-xl shadow-lg mb-4">
                <img src={qrUrl} alt="Generated QR Code" className="w-40 h-40 object-contain" />
              </div>

              <div className="flex gap-2 w-full">
                <button
                  onClick={handleDownload}
                  className="flex-1 py-2 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PNG
                </button>
                <button
                  onClick={handleCopyLink}
                  className="py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center justify-center transition-all cursor-pointer"
                  title="Copy Link Text"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </>
          ) : (
            <div className="text-xs text-slate-500 py-12">Enter text to generate QR code</div>
          )}
        </div>
      </div>
    </div>
  );
};
