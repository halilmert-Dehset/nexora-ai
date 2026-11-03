import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 mb-8 font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to NEXORA AI Tools
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-xs text-slate-400">Effective Date: November 3, 2026</p>
        </div>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl">
        <section>
          <h2 className="text-base font-bold text-white mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using NEXORA AI, you agree to comply with and be bound by these Terms of Service. If you do not agree, please discontinue using the platform.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">2. Educational & Informational Purpose (No Financial Advice)</h2>
          <p>
            The tools provided on NEXORA AI—including the Crypto ROI & Profit Calculator—are strictly for informational, educational, and simulation purposes. NEXORA AI does NOT offer investment advice, financial planning, or trading recommendations. Cryptocurrency trading carries substantial risk of loss.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">3. Disclaimer of Warranties</h2>
          <p>
            All tools and services are provided "AS IS" and without warranty of any kind. NEXORA AI does not warrant that the tools will be completely uninterrupted or error-free.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">4. Modifications</h2>
          <p>
            We reserve the right to modify or terminate any part of our online tools at any time without prior notice.
          </p>
        </section>
      </div>
    </div>
  );
}
