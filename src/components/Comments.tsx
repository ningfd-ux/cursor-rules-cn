"use client";

import { useState, useEffect, useCallback } from "react";

interface Comment {
  id: string;
  name: string;
  message: string;
  date: string;
}

interface CommentsProps {
  page?: string;
}

export default function Comments({ page = "/" }: CommentsProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch(`/api/comments?page=${encodeURIComponent(page)}`);
      const data = await res.json();
      if (data.comments) {
        setComments(data.comments);
      }
    } catch {
      // 静默失败
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("请填写昵称和留言内容");
      return;
    }
    if (message.trim().length < 3) {
      setError("留言至少 3 个字");
      return;
    }
    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim(), page }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setSuccess("留言成功！");
        setMessage("");
        fetchComments();
        setTimeout(() => setSuccess(""), 3000);
      }
    } catch {
      setError("网络错误，请稍后重试");
    } finally {
      setSubmitting(false);
    }
  }

  function formatDate(iso: string): string {
    const d = new Date(iso);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    if (diff < 60 * 1000) return "刚刚";
    if (diff < 60 * 60 * 1000) return `${Math.floor(diff / 60000)} 分钟前`;
    if (diff < 24 * 60 * 60 * 1000) return `${Math.floor(diff / 3600000)} 小时前`;
    return d.toLocaleDateString("zh-CN");
  }

  return (
    <div className="mt-12 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
        💬 访客留言 {comments.length > 0 && <span className="text-sm text-zinc-400">({comments.length})</span>}
      </h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-3">
        <div className="flex gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="你的昵称"
            maxLength={30}
            className="w-32 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-blue-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 sm:w-40"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="说点什么..."
            maxLength={1000}
            rows={2}
            className="flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-blue-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={submitting}
            className="rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? "发送中..." : "提交留言"}
          </button>
          {error && <span className="text-xs text-red-500">{error}</span>}
          {success && <span className="text-xs text-green-500">{success}</span>}
        </div>
      </form>

      {/* Comments List */}
      {loading ? (
        <p className="text-xs text-zinc-400">加载中...</p>
      ) : comments.length === 0 ? (
        <p className="text-xs text-zinc-400">还没有留言，来坐沙发 🛋️</p>
      ) : (
        <div className="space-y-3">
          {comments.map((c) => (
            <div key={c.id} className="border-t border-zinc-100 pt-3 first:border-0 first:pt-0 dark:border-zinc-800">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="font-medium text-zinc-600 dark:text-zinc-300">{c.name}</span>
                <span>{formatDate(c.date)}</span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{c.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
