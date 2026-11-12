import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `https://nexora-ai-eosin-three.vercel.app${item.url}`
    }))
  };

  return (
    <>
      <JsonLd data={breadcrumbListSchema} />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex items-center gap-1.5 text-xs text-slate-400 flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />}
                {isLast ? (
                  <span className="text-slate-200 font-semibold" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    href={item.url} 
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                  >
                    {index === 0 && <Home className="w-3 h-3" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
