import React from 'react';
import Link from 'next/link';
import { PseoPageData } from '@/lib/pseo/types';
import { HelpCircle, CheckCircle, Info, ExternalLink } from 'lucide-react';

interface PseoContentBlockProps {
  pageData: PseoPageData;
}

export const PseoContentBlock: React.FC<PseoContentBlockProps> = ({ pageData }) => {
  return (
    <article className="mt-12 space-y-12 text-slate-300">
      {/* Intro Section */}
      <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          Understanding {pageData.h1}
        </h2>
        <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
          {pageData.introParagraphs.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>
      </section>

      {/* Guide & Benchmarks Section */}
      <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          {pageData.guideSection.title}
        </h2>
        <p className="text-sm text-slate-400 mb-6">
          {pageData.guideSection.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pageData.guideSection.items.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/90">
              <h3 className="text-sm font-semibold text-teal-400 mb-1 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                {item.label}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Notes / Disclaimers */}
        {pageData.technicalNotes && pageData.technicalNotes.length > 0 && (
          <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200/90 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-amber-300">
              <Info className="w-4 h-4 shrink-0" />
              <span>Important Technical & Style Guidelines</span>
            </div>
            {pageData.technicalNotes.map((note, idx) => (
              <p key={idx} className="leading-relaxed">{note}</p>
            ))}
          </div>
        )}
      </section>

      {/* Step-by-Step Instructions */}
      <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
          How to Use the {pageData.h1}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pageData.howToSteps.map((step, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 relative">
              <span className="text-2xl font-black text-slate-800 absolute top-2 right-3 select-none">
                0{idx + 1}
              </span>
              <h3 className="text-sm font-bold text-white mb-1.5">{step.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle className="w-5 h-5 text-teal-400" />
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {pageData.faqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Companion Related Tools */}
      <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-4">
          Related Productivity & Writing Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {pageData.relatedTools.map((tool, idx) => (
            <Link
              key={idx}
              href={tool.href}
              className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-teal-500/50 transition-all group"
            >
              <div className="flex items-center justify-between text-white font-semibold text-sm mb-1 group-hover:text-teal-400">
                <span>{tool.name}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
};
