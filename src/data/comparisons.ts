export const comparisons = [
  {
    slug: "cursor-vs-copilot",
    title: "Cursor vs GitHub Copilot — Beyond Code Completion",
    description: "Engineering comparison: repo understanding, context memory, multi-file edits, and how each tool handles real production codebases.",
    icon: "⚖️",
    tags: ["cursor", "copilot", "engineering"],
    content: `# Cursor vs GitHub Copilot — Engineering Deep Dive

## Repo Understanding

| Dimension | Cursor | GitHub Copilot |
|-----------|--------|---------------|
| Codebase indexing | Full repo embedding + RAG | Current file + open tabs |
| Cross-file awareness | Agent reads related files automatically | Manual reference via #file |
| Dependency graph | Understands import chains | File-by-file only |
| Breaking change detection | Flags downstream effects of edits | No cross-file impact analysis |

Cursor maintains a full embedding index of your codebase. When you ask it to refactor across files, it already knows where the usages are. Copilot's context is limited to what's open in your editor — it can't see the full picture unless you manually reference files.

## Context Memory

| Dimension | Cursor | GitHub Copilot |
|-----------|--------|---------------|
| Conversation memory | Full chat history within session | Limited to current prompt |
| Project conventions | Learns from .cursorrules + codebase | Learns from copilot-instructions.md |
| Memory across sessions | Notepad / Rules for AI | None |
| Hallucination rate | Lower (grounded in indexed code) | Higher (less grounding context) |

Cursor's indexed approach means it references real code more often. Copilot works well for inline completions but struggles with project-wide context. Both can hallucinate APIs — but Cursor hallucinates less because it can check against your actual imports.

## Multi-file Edits

| Dimension | Cursor | GitHub Copilot |
|-----------|--------|---------------|
| Agent/Composer mode | Full project refactoring | Not available |
| Apply edits across files | Agent applies edits to multiple files | Manual copy-paste |
| Undo/rollback | Checkpoint system | Ctrl+Z per file |

Cursor's Agent mode can write code across 5+ files in one session. Copilot's edits are inline — you review and accept one suggestion at a time. For large refactors, Cursor saves significant time.

## Large Repo Handling

| Dimension | Cursor | GitHub Copilot |
|-----------|--------|---------------|
| Monorepo support | Indexes sub-packages | No special handling |
| .cursorrules / .gitignore | Respects ignore patterns | Respects .gitignore |
| Performance on >10k files | Slower indexing, usable | No indexing overhead |

## Verdict

**Cursor**: Better for project-level work, refactoring, and any task requiring codebase awareness.
**Copilot**: Better for inline completions and developers who prefer less AI intrusion.
**Both**: Many teams use both — Copilot for completions, Cursor for complex tasks.`,
  },
  {
    slug: "cursor-vs-windsurf",
    title: "Cursor vs Windsurf — IDE-Level AI Comparison",
    description: "Comparing Cascade vs Agent mode, context windows, multi-file editing quality, and large repo performance.",
    icon: "⚖️",
    tags: ["cursor", "windsurf", "engineering"],
    content: `# Cursor vs Windsurf — Engineering Comparison

## Repo Understanding

| Dimension | Cursor | Windsurf |
|-----------|--------|----------|
| Codebase indexing | Full embedding-based index | Cascade indexes open files |
| Cross-file context | RAG across entire repo | Cascade search across workspace |
| Dependency tracking | Import graph analysis | File-level awareness |

Cursor's embedding index gives it deeper codebase understanding. Windsurf's Cascade is strong on files you're actively working on but has less global awareness.

## Context Memory

| Dimension | Cursor | Windsurf |
|-----------|--------|----------|
| Context window size | Large (200k+ tokens) | Medium |
| Persistent memory | Rules for AI / Notepad | .windsurfrules |
| Conversation continuity | Full chat history | Cascade session memory |

Cursor's larger context window means it can hold more of your codebase in memory during a session. Windsurf's Cascade sessions are well-designed but have tighter context limits.

## Multi-file Edits

| Dimension | Cursor | Windsurf |
|-----------|--------|----------|
| Multi-file agent | Agent mode | Cascade |
| Edit quality on 3+ files | Good, sometimes needs guidance | Good, sometimes over-edits |
| Diff review | Inline diff view | Inline review |

Both handle multi-file edits well. Windsurf's Cascade can be more aggressive — it's more likely to edit files you didn't ask for. Cursor's Agent is more conservative and explicit about what it changes.

## Hallucination Behavior

| Dimension | Cursor | Windsurf |
|-----------|--------|----------|
| API hallucination | Low (grounded in imports) | Low-Medium |
| File path hallucination | Uncommon (indexed paths) | Occasional |
| Config hallucination | Respects detected config | Sometimes invents config |

Cursor's strict grounding in your actual imports and file structure gives it an edge. Windsurf can occasionally reference files or configs that don't exist.

## Large Repo Handling

| Dimension | Cursor | Windsurf |
|-----------|--------|----------|
| Monorepo | Partial indexing per sub-package | Workspace-based |
| Performance at scale | Slower startup, stable operation | Faster startup |
| Memory usage | Higher | Moderate |

## Verdict

**Cursor**: More accurate, grounded, and reliable for production work. Larger context window is a real advantage.
**Windsurf**: Faster and more aggressive — good for rapid prototyping. Cascade feels more "helpful" but occasionally overreaches.
**Bottom line**: Cursor for precision, Windsurf for speed.`,
  },
  {
    slug: "cursor-vs-claude-code",
    title: "Cursor vs Claude Code — IDE vs CLI for AI Development",
    description: "Terminal-native vs IDE: how Claude Code handles repos, context, multi-file operations, and CI/CD integration differently.",
    icon: "⚖️",
    tags: ["cursor", "claude-code", "engineering"],
    content: `# Cursor vs Claude Code — IDE vs CLI

## Repo Understanding

| Dimension | Cursor | Claude Code |
|-----------|--------|------------|
| Repo indexing | Automatic embedding index | Reads files on demand |
| Context mechanism | RAG over codebase | Reads tools output in loop |
| Depth | Good (pre-indexed) | Excellent (reads whatever it needs) |

Claude Code reads your files actively during a session — it can go deeper on specific files. Cursor pre-indexes but may miss nuanced patterns that Claude Code finds by reading source directly.

## Context Memory

| Dimension | Cursor | Claude Code |
|-----------|--------|------------|
| Context window | Large (200k+) | Very large (200k+) |
| CLAUDE.md / AGENTS.md | Not natively supported | First-class support |
| Session persistence | Notepad / Rules | CLAUDE.md persists across sessions |

Claude Code's CLAUDE.md/AGENTS.md integration is deeper — it's a first-class concept, not just a file it reads. Cursor treats .cursorrules as config; Claude Code treats AGENTS.md as an extension of its system prompt.

## Multi-file Operations

| Dimension | Cursor | Claude Code |
|-----------|--------|------------|
| Multi-file edits | Agent mode, visual diffs | Reads/writes via tools |
| Batch operations | Manual | Can be scripted |
| Git integration | Basic | Can commit, branch, push |

Claude Code is more automated — it can chain file reads, edits, and git operations in a single session. Cursor requires you to approve each change. For CI/CD and automated refactors, Claude Code wins.

## Hallucination Behavior

| Dimension | Cursor | Claude Code |
|-----------|--------|------------|
| API hallucination | Low (grounded in imports) | Very low (reads source) |
| File operations | User-approved | Autonomous |
| Risk profile | Lower (visual review of all changes) | Higher (autonomous edits) |

Claude Code hallucinates less because it actively reads your code rather than relying on an index. However, its autonomy means mistakes can propagate faster if you don't review.

## Large Repo Handling

| Dimension | Cursor | Claude Code |
|-----------|--------|------------|
| Monorepo | Indexes sub-packages | Reads relevant files only |
| Performance | Upfront indexing cost | Pay-per-read, scales well |
| CI/CD | Not available | Native — runs in CI |

## Verdict

**Cursor**: Best for daily development. Visual diffs, lower risk of unwanted changes, pre-indexed awareness.
**Claude Code**: Best for automated workflows, CI/CD, and deep repo analysis. More autonomous but higher blast radius.
**Ideal**: Cursor for writing code, Claude Code for reviewing and refactoring.`,
  },
];
