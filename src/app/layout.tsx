import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner";
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

const gaId = "G-9QVY2VBRN4";

export const metadata: Metadata = {
  title: {
    default: "RepoRules — Repository-Aware AI Coding Standards",
    template: "%s | RepoRules",
  },
  description:
    "Generate repository-aware coding standards from your repo. Paste your package.json, get project-specific standards for Cursor, Claude Code, and Copilot.",
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
    title: "RepoRules — Repository-Aware AI Coding Standards",
    description: "Generate repository-aware coding standards from your repo. Analyzes your dependencies, outputs standards for Cursor, Claude Code, Copilot.",
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
                {/* Cloudflare Web Analytics */}
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon="{&quot;token&quot;: &quot;1ef3bf6da9ed49fea3904edcd4aeea6c&quot;}"></script>
        <link rel="alternate" type="application/rss+xml" title="RepoRules" href="https://cursorrules.fun/rss.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "RepoRules",
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
        <Banner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}



