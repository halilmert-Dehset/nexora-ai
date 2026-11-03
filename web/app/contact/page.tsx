import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Info } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300 mb-8 font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to NEXORA AI Tools
      </Link>

      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Mail className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Contact & Support</h1>
          <p className="text-xs text-slate-400">Get in touch with the NEXORA AI engineering team</p>
        </div>
      </div>

      <div className="bg-slate-900/60 border border-slate-800 p-6 sm:p-8 rounded-2xl space-y-6 text-sm text-slate-300">
        <p>
          Have questions, feature requests, or partnership inquiries? We would love to hear from you.
        </p>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Direct Email Inquiries</span>
            <span className="text-sm font-bold text-white">contact@nexora-ai.com</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-4">
          <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500 uppercase tracking-wider block font-semibold">Response Time</span>
            <span className="text-sm text-slate-300">Typically within 24 to 48 business hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}
