import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexora-ai-eosin-three.vercel.app';

  const toolRoutes = [
    '/tools/word-counter',
    '/tools/case-converter',
    '/tools/qr-code-generator',
    '/tools/password-generator',
    '/tools/ai-prompt-enhancer',
    '/tools/crypto-profit-calculator',
    '/tools/youtube-seo-tags',
    '/tools/text-summarizer',
  ];

  const toolsSitemap = toolRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...toolsSitemap,
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
