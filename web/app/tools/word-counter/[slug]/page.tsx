import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { AdBanner } from '@/components/AdBanner';
import { JsonLd } from '@/components/JsonLd';
import { PSEO_PAGES, WORD_COUNTER_PSEO_SLUGS } from '@/lib/pseo/wave1Data';
import { PseoWordCounter } from '@/components/pseo/PseoWordCounter';
import { PseoContentBlock } from '@/components/pseo/PseoContentBlock';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return WORD_COUNTER_PSEO_SLUGS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pageData = PSEO_PAGES[slug];

  if (!pageData) {
    return {
      title: 'Page Not Found | NEXORA AI',
    };
  }

  return {
    title: pageData.title,
    description: pageData.metaDescription,
    alternates: {
      canonical: pageData.canonicalUrl,
    },
    openGraph: {
      title: pageData.title,
      description: pageData.metaDescription,
      url: pageData.canonicalUrl,
      siteName: 'NEXORA AI',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageData.title,
      description: pageData.metaDescription,
    },
  };
}

export default async function WordCounterPseoPage({ params }: PageProps) {
  const { slug } = await params;
  const pageData = PSEO_PAGES[slug];

  if (!pageData || pageData.parentCategory !== 'word-counter') {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Word Counter', url: '/tools/word-counter' },
    { name: pageData.h1, url: pageData.fullPath },
  ];

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: pageData.h1,
    url: pageData.canonicalUrl,
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: pageData.metaDescription,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pageData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <JsonLd data={softwareSchema} />
      <JsonLd data={faqSchema} />

      <div className="max-w-4xl mx-auto">
        <Breadcrumbs items={breadcrumbs} />

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            {pageData.h1}
          </h1>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            {pageData.subtitle}
          </p>
        </div>

        <AdBanner slotId="top-pseo-banner" />

        <PseoWordCounter pageData={pageData} />

        <PseoContentBlock pageData={pageData} />

        <div className="mt-12">
          <AdBanner slotId="bottom-pseo-banner" />
        </div>
      </div>
    </main>
  );
}
