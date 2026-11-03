'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, BookOpen, Lightbulb } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface ToolSeoBlockProps {
  title: string;
  description: string;
  howToSteps: string[];
  faqs: FaqItem[];
  tips: string[];
}

export const ToolSeoBlock: React.FC<ToolSeoBlockProps> = ({
  title,
  description,
  howToSteps,
  faqs,
  tips
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="mt-12 border-t border-slate-800/80 pt-10 text-slate-300 space-y-8">
      {/* Comprehensive Overview */}
      <section className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl">
        <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-cyan-400" />
          About {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          {description}
        </p>
      </section>

      {/* Step-by-Step Guide */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            How to Use This Tool
          </h4>
          <ol className="space-y-3 text-xs sm:text-sm text-slate-300">
            {howToSteps.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 font-bold text-xs flex items-center justify-center shrink-0 border border-cyan-500/20">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Pro Tips */}
        <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            Pro Strategies & Best Practices
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
            {tips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ Accordion (Schema / Rich Snippet friendly) */}
      <section className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl">
        <h3 className="text-base font-bold text-white flex items-center gap-2 mb-4">
          <HelpCircle className="w-5 h-5 text-cyan-400" />
          Frequently Asked Questions (FAQ)
        </h3>
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                className="border border-slate-800/80 rounded-xl bg-slate-950/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-3.5 text-left text-xs sm:text-sm font-medium text-slate-200 flex justify-between items-center hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>
                {isOpen && (
                  <div className="px-3.5 pb-3.5 text-xs text-slate-400 leading-relaxed border-t border-slate-850 pt-2.5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
