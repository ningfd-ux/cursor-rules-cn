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

export const metadata: Metadata = {
  title: {
    default: "Cursor Rules 中文库 — AI 编程规则与 Prompt 大全",
    template: "%s | Cursor Rules 中文库",
  },
  description:
    "收录 Cursor、Claude Code、GitHub Copilot、Windsurf 等 AI 编程工具的 Rules、Prompt 和最佳实践。中文 AI 编程资源导航。",
  keywords: [
    "Cursor Rules",
    "Cursor 规则",
    "Claude Code",
    "AI 编程",
    "GitHub Copilot",
    "Windsurf",
    "AI Prompt",
    "中文教程",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Cursor Rules 中文库",
    description: "AI 编程规则与 Prompt 大全",
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
      <body className="flex min-h-full flex-col bg-zinc-50 dark:bg-zinc-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
