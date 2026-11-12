import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nexora-ai-eosin-three.vercel.app"),
  title: {
    default: "NEXORA AI - Free Smart Online Tools & AI Utilities",
    template: "%s | NEXORA AI",
  },
  description: "Free, privacy-first online tools for creators, developers, traders, and entrepreneurs. Client-side processing, zero data logging, and no sign-up required.",
  keywords: [
    "ai tools",
    "free online tools",
    "word counter",
    "qr code generator",
    "password generator",
    "case converter",
    "crypto profit calculator",
    "youtube tag extractor",
    "text summarizer",
    "nexora ai"
  ],
  authors: [{ name: "NEXORA AI Team" }],
  creator: "NEXORA AI",
  publisher: "NEXORA AI",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexora-ai-eosin-three.vercel.app",
    siteName: "NEXORA AI",
    title: "NEXORA AI - Free Smart Online Tools & AI Utilities",
    description: "Free, privacy-first online tools for creators, developers, and builders. 100% free with client-side encryption.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXORA AI - Free Smart Online Tools & AI Utilities",
    description: "Free, privacy-first online tools for creators, developers, and builders.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NEXORA AI",
  "url": "https://nexora-ai-eosin-three.vercel.app",
  "logo": "https://nexora-ai-eosin-three.vercel.app/favicon.ico",
  "description": "Provider of free, privacy-first client-side web utility tools and calculators.",
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NEXORA AI",
  "url": "https://nexora-ai-eosin-three.vercel.app",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nexora-ai-eosin-three.vercel.app/tools/{search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={webSiteSchema} />
        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-J10BJMF8G3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J10BJMF8G3');
            `,
          }}
        />
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4721220882387425"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col selection:bg-cyan-500 selection:text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
