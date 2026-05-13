import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Cursor Rules — AI Coding Standards & Generator.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link href="/" className="mb-6 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-zinc-600">
        ← Back to home
      </Link>
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-100">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Data Collection</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          We use Google Analytics (GA4) to collect anonymous usage data including page views, traffic sources,
          and device types. No personally identifiable information is collected.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Cookies</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          We use Google Analytics cookies to distinguish unique visitors. You can disable cookies
          in browser settings. Dark mode preference is stored in localStorage and never sent to a server.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Third-party services</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          This site is hosted on Cloudflare Pages and uses Google Analytics for traffic analysis.
          These services follow their respective privacy policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Data security</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          We store no user data and have no user accounts. All content is publicly accessible.
        </p>
      </section>

      <section>
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">Last updated</h2>
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          This privacy policy was last updated on May 12, 2026.
        </p>
      </section>
    </div>
  );
}
