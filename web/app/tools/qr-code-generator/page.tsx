import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { QrCodeGenerator } from '@/components/tools/QrCodeGenerator';
import { ToolSeoBlock } from '@/components/ToolSeoBlock';
import { AdBanner } from '@/components/AdBanner';
import { SEO_CONTENT } from '@/lib/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free QR Code Generator Online - High Resolution PNG (Never Expires)',
  description: 'Create 100% free permanent QR codes for URLs, Wi-Fi, text, and business links. Zero scan limits, no redirects, and instant high-res PNG download.',
  keywords: 'free qr code generator, permanent qr code, high resolution qr, no sign up qr code, online qr maker',
};

export default function QrCodePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 font-medium">
            <ArrowLeft className="w-4 h-4" /> All NEXORA Tools
          </Link>
          <span className="text-xs font-bold text-slate-400">NEXORA AI • Utilities</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <AdBanner slotId="tool-top-banner" format="horizontal" label="Advertisement" />
        <QrCodeGenerator />
        <AdBanner slotId="tool-middle-banner" format="horizontal" label="Sponsored" />
        <ToolSeoBlock {...SEO_CONTENT.qrcode} />
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2026 NEXORA AI • Free Permanent QR Generator
      </footer>
    </div>
  );
}
