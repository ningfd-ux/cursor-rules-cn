// Cloudflare Pages Function: POST /api/comments
// Simple flat-file comment storage using Cloudflare KV or a lightweight JSON file
// For now: stores comments in an in-memory map (resets on cold start, fine for MVP)

interface Env {
  COMMENT_STORE: string; // Cloudflare KV binding or edge storage
}

interface Comment {
  id: string;
  name: string;
  message: string;
  date: string;
  page: string;
}

// In-memory store (resets on cold start, ~50 comments max before cycling)
const comments: Comment[] = [];
const MAX_COMMENTS = 50;

export async function onRequestGet(context: { request: Request; env: Env }) {
  const url = new URL(context.request.url);
  const page = url.searchParams.get("page") || "/";

  const pageComments = comments
    .filter((c) => c.page === page)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 20);

  return Response.json({ comments: pageComments });
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const body = await context.request.json() as {
      name: string;
      message: string;
      page?: string;
    };

    if (!body.name || !body.message) {
      return Response.json({ error: "请填写昵称和留言内容" }, { status: 400 });
    }

    if (body.name.length > 30 || body.message.length > 1000) {
      return Response.json({ error: "昵称不能超过30字，留言不能超过1000字" }, { status: 400 });
    }

    const comment: Comment = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: body.name.trim(),
      message: body.message.trim(),
      date: new Date().toISOString(),
      page: body.page || "/",
    };

    comments.unshift(comment);

    // Keep only MAX_COMMENTS
    if (comments.length > MAX_COMMENTS) {
      comments.length = MAX_COMMENTS;
    }

    // Simple spam check: same name+message within 60 seconds = block
    const recentDup = comments
      .slice(1)
      .filter((c) => c.name === comment.name && c.message === comment.message);
    if (recentDup.length > 0) {
      return Response.json(
        { error: "检测到重复留言，请勿重复提交" },
        { status: 429 }
      );
    }

    return Response.json({ comment });
  } catch (e) {
    return Response.json({ error: String(e) }, { status: 500 });
  }
}
