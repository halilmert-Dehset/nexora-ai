import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RelatedTool {
  name: string;
  slug: string;
  category: string;
  description: string;
}

const ALL_TOOLS: RelatedTool[] = [
  { name: 'Word Counter', slug: 'word-counter', category: 'Writing', description: 'Count words, characters, and estimate reading duration.' },
  { name: 'Case Converter', slug: 'case-converter', category: 'Text', description: 'Convert text between UPPERCASE, lowercase, and Title Case.' },
  { name: 'QR Code Generator', slug: 'qr-code-generator', category: 'Utilities', description: 'Create high-res permanent QR codes for URLs and Wi-Fi.' },
  { name: 'Password Generator', slug: 'password-generator', category: 'Security', description: 'Generate strong cryptographically secure random passwords.' },
  { name: 'AI Prompt Enhancer', slug: 'ai-prompt-enhancer', category: 'AI Tools', description: 'Turn simple lines into master prompts for LLMs.' },
  { name: 'Crypto ROI Calculator', slug: 'crypto-profit-calculator', category: 'Finance', description: 'Simulate spot and leveraged crypto trade outcomes.' },
  { name: 'YouTube SEO Tags', slug: 'youtube-seo-tags', category: 'Social Media', description: 'Generate high-CTR titles and algorithmic video tags.' },
  { name: 'Text Summarizer', slug: 'text-summarizer', category: 'Writing', description: 'Condense long documentation into key executive takeaways.' },
];

export const RelatedTools: React.FC<{ currentSlug: string }> = ({ currentSlug }) => {
  const related = ALL_TOOLS.filter(t => t.slug !== currentSlug).slice(0, 3);

  return (
    <div className="mt-12 pt-8 border-t border-slate-850">
      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
        Explore Related Free Utilities
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {related.map(tool => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
          >
            <div>
              <span className="text-[9px] uppercase tracking-wider font-semibold text-cyan-400 mb-1 block">
                {tool.category}
              </span>
              <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                {tool.name}
              </h4>
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                {tool.description}
              </p>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-cyan-400 font-medium mt-3 group-hover:translate-x-1 transition-transform">
              <span>Open Tool</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
