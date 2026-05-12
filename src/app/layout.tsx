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
    default: "Cursor Rules 中文库 - 让 AI 写出真正能上线的代码",
    template: "%s | Cursor Rules 中文库",
  },
  description:
    "收录 Cursor、Claude Code、GitHub Copilot、Windsurf 等 AI 编程工具的 Rules、Prompt 和最佳实践。让 AI 写出生产级代码，不再有 deprecated API 和 any 类型。",
  keywords: [
    "Cursor Rules",
    "Cursor 规则",
    "Claude Code",
    "AI 编程",
    "GitHub Copilot",
    "Windsurf",
    "AI Prompt",
    "中文教程",
    "AI 代码质量",
    "Production Ready AI Code",
  ],
  robots: "index, follow",
  verification: {
    google: "googlebfdc59878de2548f.html",
  },
  openGraph: {
    title: "Cursor Rules 中文库 - 让 AI 写出真正能上线的代码",
    description: "收录 Cursor、Claude Code、GitHub Copilot 等 AI 编程工具的 Rules 和最佳实践",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
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
        <link rel="alternate" type="application/rss+xml" title="Cursor Rules 中文库" href="https://cursorrules.fun/rss.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Cursor Rules 中文库",
              url: "https://cursorrules.fun/",
              description:
                "让 AI 写出真正能用的代码。81 条 Cursor Rules，覆盖 40+ 技术栈，每条含使用场景和常见错误。",
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
