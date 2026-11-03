import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 mb-8 font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to NEXORA AI Tools
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Shield className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-xs text-slate-400">Effective Date: November 3, 2026 | Last Updated: 2026</p>
        </div>
      </div>

      <div className="space-y-6 text-sm text-slate-300 leading-relaxed bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl">
        <section>
          <h2 className="text-base font-bold text-white mb-2">1. Introduction</h2>
          <p>
            Welcome to NEXORA AI (accessible from https://nexora-ai-eosin-three.vercel.app/). We respect your privacy and are committed to protecting any personal information you may provide while using our suite of online tools.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">2. Zero Data Logging Policy (Client-Side Processing)</h2>
          <p>
            Most of our tools (including AI Prompt Enhancer, Crypto Profit Calculator, YouTube Tag Extractor, and Text Summarizer) perform processing client-side inside your own browser or transiently. We do NOT store, sell, or monitor your personal input prompts, calculations, or pasted texts.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">3. Google AdSense & Third-Party Cookies</h2>
          <p>
            Google, as a third-party vendor, uses cookies to serve ads on NEXORA AI. Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our site and/or other sites on the Internet.
          </p>
          <p className="mt-2">
            Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Google Ads Settings</a> or <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">aboutads.info</a>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">4. Affiliate Disclosure</h2>
          <p>
            Some links on NEXORA AI may be affiliate links. If you click on an affiliate link and make a purchase or sign up for a service (such as cryptocurrency exchanges), we may receive a referral commission at no additional cost to you.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-white mb-2">5. Contact Us</h2>
          <p>
            If you have any questions or feedback regarding our privacy practices, please contact us at support@nexora-ai.com.
          </p>
        </section>
      </div>
    </div>
  );
}
