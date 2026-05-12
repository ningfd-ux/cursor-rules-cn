import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "隐私政策",
  description: "Cursor Rules 中文库的隐私政策和数据处理说明。",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← 返回首页
      </Link>
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-100">隐私政策</h1>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">数据收集</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          本站使用 Google Analytics (GA4) 收集匿名访问数据，包括页面浏览量、访问来源、设备类型等。
          这些数据帮助我们了解网站使用情况，持续改进内容质量。不会收集个人身份信息。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Cookie</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          本站使用 Google Analytics Cookie 来区分独立访客。你可以通过浏览器设置禁用 Cookie。
          暗色模式偏好存储在浏览器本地存储（localStorage）中，不会被发送到服务器。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">第三方服务</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          本站部署在 Cloudflare Pages 上，使用 Google Analytics 分析流量。这些服务各自遵循其隐私政策。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">数据安全</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          本站不存储用户数据，不设置用户账号。所有内容公开可访问。
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">更新日期</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          本隐私政策最后更新于 2026 年 5 月 11 日。
        </p>
      </section>
    </div>
  );
}
