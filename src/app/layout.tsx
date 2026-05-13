import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gaId = "G-4ZJT8YPWT8";

export const metadata: Metadata = {
  title: {
    default: "Cursor Rules · AI Coding Standards - Production-Grade AI Code",
    template: "%s | Cursor Rules · AI Coding Standards",
  },
  description:
    "Curated Rules, Prompts, and Best Practices for Cursor, Claude Code, GitHub Copilot, Windsurf, and more AI coding tools. Get production-grade code without deprecated APIs or any types.",
  keywords: [
    "Cursor Rules",
    "Cursor Standards",
    "Claude Code",
    "AI Coding",
    "GitHub Copilot",
    "Windsurf",
    "AI Prompt",
    "AI Code Quality",
    "Production Ready AI Code",
  ],
  robots: "index, follow",
  verification: {
    google: "googlebfdc59878de2548f.html",
  },
  openGraph: {
    title: "Cursor Rules · AI Coding Standards - Production-Grade AI Code",
    description: "Curated Rules and Best Practices for Cursor, Claude Code, GitHub Copilot, and more AI coding tools",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
        <link rel="alternate" type="application/rss+xml" title="Cursor Rules · AI Coding Standards" href="https://cursorrules.fun/rss.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Cursor Rules · AI Coding Standards",
              url: "https://cursorrules.fun/",
              description:
                "Production-grade AI code. 81 Cursor Rules, covering 40+ tech stacks, each with usage scenarios and common mistakes.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://cursorrules.fun/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-zinc-50 dark:bg-zinc-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
