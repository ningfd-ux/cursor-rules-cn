"use client";

import { useState } from "react";

export default function FloatingFeedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please fill in all fields");
      return;
    }
    if (message.trim().length < 3) {
      setError("Message too short");
      return;
    }
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim(), page: "/" }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setDone(true);
        setMessage("");
        setName("");
        setTimeout(() => {
          setDone(false);
          setOpen(false);
        }, 2000);
      }
    } catch {
      setError("Network error, please try again");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed right-6 top-24 z-50 flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-all hover:bg-blue-700"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="hidden sm:inline">Feedback</span>
      </button>

      {/* Popover */}
      {open && (
        <div className="fixed right-6 top-44 z-50 w-80 rounded-xl border border-zinc-200 bg-white p-5 shadow-2xl dark:border-zinc-700 dark:bg-zinc-900 sm:w-96">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Thanks for visiting!
              </h3>
              <p className="text-xs text-zinc-400 dark:text-zinc-500">
                Thanks for visiting · Questions or feedback welcome
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded p-0.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {done ? (
            <div className="py-4 text-center">
              <div className="mb-1 text-lg">✅</div>
              <p className="text-sm text-green-600 dark:text-green-400">Thanks for your feedback!</p>
              <p className="text-xs text-zinc-400">We read every message and take feedback seriously</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                maxLength={30}
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-blue-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Any feedback or questions?"
                maxLength={500}
                rows={3}
                className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-blue-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
              />
              {error && <p className="text-xs text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
