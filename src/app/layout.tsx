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
    default: "AI Coding Standards Generator — Repository-Aware Rules for AI Code Quality",
    template: "%s | AI Coding Standards Generator",
  },
  description:
    "Generate project-specific coding standards from your repo. Analyzes your dependencies and outputs repository-aware rules for Cursor, Claude Code, Copilot — not generic templates.",
  keywords: [
    "AI coding standards",
    "cursor rules generator",
    "repository-aware",
    "Claude Code",
    "AGENTS.md",
    "GitHub Copilot",
    "AI code quality",
    "coding standards generator",
  ],
  robots: "index, follow",
  verification: {
    google: "googlebfdc59878de2548f.html",
  },
  openGraph: {
    title: "AI Coding Standards Generator — Repository-Aware Rules",
    description: "Generate project-specific coding standards from your repo. Analyzes dependencies, outputs rules for Cursor, Claude Code, Copilot.",
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
        <link rel="alternate" type="application/rss+xml" title="AI Coding Standards Generator" href="https://cursorrules.fun/rss.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AI Coding Standards Generator",
              url: "https://cursorrules.fun/",
              description:
                "Generate repository-aware AI coding standards. Analyzes your dependencies, outputs rules for Cursor, Claude Code, Copilot and AI agents.",
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
