import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXORA AI - Free Smart Online Tools & AI Utilities",
  description: "Free, privacy-first online tools for creators, developers, traders, and entrepreneurs. Calculate crypto profit, optimize AI prompts, generate YouTube SEO tags, and summarize text.",
  keywords: "ai tools, free online tools, crypto profit calculator, prompt generator, youtube tag extractor, text summarizer, nexora ai",
  authors: [{ name: "NEXORA AI" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
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
        {/* AdSense Script placeholder */}
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col selection:bg-cyan-500 selection:text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
