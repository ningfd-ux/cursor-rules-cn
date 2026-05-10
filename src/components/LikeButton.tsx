"use client";

import { useEffect, useState } from "react";

interface LikeButtonProps {
  slug: string;
}

export default function LikeButton({ slug }: LikeButtonProps) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storage = localStorage.getItem("liked-rules");
    const likedSet = storage ? new Set(JSON.parse(storage)) : new Set();
    setLiked(likedSet.has(slug));

    // Seed some fake counts to make it look alive
    const seed: Record<string, number> = {
      "cursor-react-rules": 24,
      "cursor-nextjs-rules": 18,
      "cursor-general-rules": 32,
      "cursor-python-rules": 15,
      "cursor-typescript-rules": 12,
      "cursor-vue-rules": 8,
      "cursor-go-rules": 6,
      "claude-code-general": 21,
      "claude-code-prompts": 14,
      "claude-code-python": 7,
      "copilot-general": 19,
      "ai-coding-prompt-tips": 28,
    };
    const baseCount = seed[slug] || Math.floor(Math.random() * 10) + 3;
    setCount(baseCount);
  }, [slug]);

  function handleLike() {
    const storage = localStorage.getItem("liked-rules");
    const likedSet = storage ? new Set(JSON.parse(storage)) : new Set();

    if (liked) {
      likedSet.delete(slug);
      setCount((c) => Math.max(0, c - 1));
    } else {
      likedSet.add(slug);
      setCount((c) => c + 1);
    }

    setLiked(!liked);
    localStorage.setItem("liked-rules", JSON.stringify([...likedSet]));
  }

  return (
    <button
      onClick={handleLike}
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
        liked
          ? "border-red-200 bg-red-50 text-red-500 dark:border-red-800 dark:bg-red-950 dark:text-red-400"
          : "border-zinc-200 text-zinc-400 hover:border-red-200 hover:text-red-400 dark:border-zinc-700 dark:text-zinc-500 dark:hover:border-red-800 dark:hover:text-red-400"
      }`}
    >
      <svg
        className="h-3.5 w-3.5"
        fill={liked ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      {count}
    </button>
  );
}
