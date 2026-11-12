import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { CryptoCalculator } from '@/components/tools/CryptoCalculator';
import { ToolSeoBlock } from '@/components/ToolSeoBlock';
import { AdBanner } from '@/components/AdBanner';
import { RelatedTools } from '@/components/RelatedTools';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { SEO_CONTENT } from '@/lib/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crypto Profit & Futures Leverage ROI Calculator - Spot & Perp',
  description: 'Calculate net ROI, liquidation estimates, and profit targets for spot and leveraged futures trades across Binance, Bybit, and OKX.',
  keywords: ['crypto profit calculator', 'leverage calculator', 'crypto roi calculator', 'futures profit calculator', 'liquidation price calculator'],
  alternates: {
    canonical: '/tools/crypto-profit-calculator',
  },
  openGraph: {
    title: 'Crypto Leverage & Profit ROI Calculator | NEXORA AI',
    description: 'Calculate spot and perpetual futures returns, net margin, and risk simulations.',
    url: 'https://nexora-ai-eosin-three.vercel.app/tools/crypto-profit-calculator',
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "NEXORA AI Crypto Calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function CryptoCalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <JsonLd data={appSchema} />
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 font-medium">
            <ArrowLeft className="w-4 h-4" /> All NEXORA Tools
          </Link>
          <span className="text-xs font-bold text-slate-400">NEXORA AI • Finance</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <Breadcrumbs 
          items={[
            { name: "Home", url: "/" },
            { name: "Tools", url: "/#tools" },
            { name: "Crypto ROI Calculator", url: "/tools/crypto-profit-calculator" }
          ]} 
        />
        <AdBanner slotId="crypto-top-banner" format="horizontal" label="Advertisement" />
        <CryptoCalculator />
        <AdBanner slotId="crypto-middle-banner" format="horizontal" label="Advertisement" />
        <ToolSeoBlock {...SEO_CONTENT.crypto} />
        <RelatedTools currentSlug="crypto-profit-calculator" />
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2026 NEXORA AI • Crypto Leverage Simulator
      </footer>
    </div>
  );
}
