import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PasswordGenerator } from '@/components/tools/PasswordGenerator';
import { ToolSeoBlock } from '@/components/ToolSeoBlock';
import { AdBanner } from '@/components/AdBanner';
import { RelatedTools } from '@/components/RelatedTools';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { SEO_CONTENT } from '@/lib/seoData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strong Password Generator Online - High Entropy Client-Side Security',
  description: 'Generate unhackable random passwords using browser-native Web Cryptography. Never logged, zero server requests, and 100% private.',
  keywords: ['password generator', 'strong random password', 'secure password maker', '256 bit password', 'random key generator'],
  alternates: {
    canonical: '/tools/password-generator',
  },
  openGraph: {
    title: 'Client-Side Secure Password Generator | NEXORA AI',
    description: 'High entropy cryptographically unhackable password generator running locally in browser.',
    url: 'https://nexora-ai-eosin-three.vercel.app/tools/password-generator',
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "NEXORA AI Password Generator",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function PasswordPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <JsonLd data={appSchema} />
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 font-medium">
            <ArrowLeft className="w-4 h-4" /> All NEXORA Tools
          </Link>
          <span className="text-xs font-bold text-slate-400">NEXORA AI • Security</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 w-full flex-1">
        <Breadcrumbs 
          items={[
            { name: "Home", url: "/" },
            { name: "Tools", url: "/#tools" },
            { name: "Password Generator", url: "/tools/password-generator" }
          ]} 
        />
        <AdBanner slotId="pwd-top-banner" format="horizontal" label="Advertisement" />
        <PasswordGenerator />
        <AdBanner slotId="pwd-middle-banner" format="horizontal" label="Advertisement" />
        <ToolSeoBlock {...SEO_CONTENT.password} />
        <RelatedTools currentSlug="password-generator" />
      </main>

      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © 2026 NEXORA AI • Client-Side Password Generator
      </footer>
    </div>
  );
}
