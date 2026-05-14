export interface Rule {
  slug: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  content: string;
  tags: string[];
  source?: string;
  updatedAt: string;
  appliesTo?: string;
}


export const categories = [
  { slug: "cursor", name: "Cursor Rules", count: 42 },
  { slug: "claude", name: "Claude Code", count: 10 },
  { slug: "copilot", name: "GitHub Copilot", count: 7 },
  { slug: "windsurf", name: "Windsurf", count: 4 },
  { slug: "tutorial", name: "Tutorials", count: 5 },
  { slug: "general", name: "General AI", count: 13 },
];

export function getCategoryName(slug: string): string {
  const map: Record<string, string> = {
    cursor: "Cursor",
    claude: "Claude Code",
    copilot: "Copilot",
    windsurf: "Windsurf",
    tutorial: "Tutorial",
    general: "General",
  };
  return map[slug] ?? slug;
}

export const rules: Rule[] = [
  {
    slug: "cursor-general-rules",
    title: "General Coding Standards for AI-Assisted Development",
    category: "cursor",
    description: "Universal coding conventions for style, comments, and architecture — applicable to any Cursor project.",
    icon: "⚙️",
    tags: ["cursor", "general", "coding-standards"],
    updatedAt: "2026-04-28",
    appliesTo: "Cursor 0.40+",
    content: `# General AI Coding Standards

## Code Style
- Use 2-space indentation
- End lines with semicolons
- Use single quotes for strings
- camelCase for variables
- UPPER_SNAKE_CASE for constants

## Comments
- Functions/methods must have JSDoc comments
- Complex logic requires inline comments
- TODO markers must include owner name

## Architecture
- Follow Single Responsibility Principle
- Component files should not exceed 200 lines
- Extract utility functions to dedicated utils/ directory

## Error Handling
- All async operations must use try-catch
- Error messages must include context
- User-facing errors should be clear and actionable

## Performance
- Avoid unnecessary re-renders
- Use virtual scrolling for large lists
- Cache API responses where appropriate

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically. Ideal for team-wide code style consistency and onboarding new team members.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
slug: "cursor-react-rules",
title: "React Best Practices for Cursor",
category: "cursor",
description: "Best practices and rules for React projects in Cursor.",
icon: "⚛️",
tags: ["cursor", "react", "frontend"],
updatedAt: "2026-05-01",
appliesTo: "Cursor 0.40+",
content: `# Cursor React Development Rules

## Component Standards
- Use functional components + Hooks
- Avoid class components — prefer functional components
- One component per file
- Use PascalCase for component file names

## Hooks Rules
- Custom hooks must start with "use"
- Hooks should not contain JSX
- useEffect must clean up side effects with a return function

## State Management
- Prefer useState for local state, useReducer for complex state logic
- Share cross-component state via Context
- Limit prop drilling to 3 levels max

## Styling
- Use Tailwind CSS for styling
- Avoid inline styles on JSX elements
- Reserve CSS Modules for complex component-specific styles

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [Next.js Development Standards for AI Coding](/rules/cursor-nextjs-rules)
- [TypeScript Strict Mode Standards](/rules/cursor-typescript-rules)
- [Vue 3 Development Standards](/rules/cursor-vue-rules)
`,
  },
  {
slug: "cursor-nextjs-rules",
title: "Complete Next.js Development Rules for Cursor",
category: "cursor",
description: "Rules and best practices for Next.js App Router projects in Cursor.",
icon: "▲",
tags: ["cursor", "nextjs", "app-router"],
updatedAt: "2026-05-02",
appliesTo: "Cursor 0.40+",
content: `# Cursor Next.js Project Rules

## Routing Standards
- Use App Router (pages directory is deprecated)
- Use layout.tsx for layout files
- Use loading.tsx for loading states
- Use not-found.tsx for 404 pages

## Data Fetching
- Prefer Server Components — they run on the server, ship zero JS to the client, and can be async
- Only add "use client" when you need interactivity (event handlers, hooks, browser APIs)
- Encapsulate API requests in lib/ so data fetching logic is testable and reusable
- Use Server Actions for form submissions — no need for a separate API route for mutations

## SEO
- Every page must export metadata — it's non-negotiable for SEO
- Use generateMetadata for dynamic routes (product pages, blog posts) based on fetched data
- Every image must include an alt attribute — empty alt="" for decorative images, descriptive text otherwise

## Performance
- Use next/image for all images — it handles lazy loading, size optimization, and prevents layout shift
- Always use next/link for internal navigation — it prefetches routes on hover for instant page transitions
- Use next/dynamic for heavy components (charts, rich text editors, modals) with loading fallbacks

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [React Development Standards for AI Coding](/rules/cursor-react-rules)
- [Tailwind CSS Standards for AI Coding](/rules/cursor-tailwind-rules)
- [Prisma ORM Data Layer Standards](/rules/cursor-prisma-rules)
`,
  },
  {
slug: "cursor-python-rules",
title: "Python Coding Standards for Cursor",
category: "cursor",
description: "Coding rules and best practices for Python projects in Cursor.",
icon: "🐍",
tags: ["cursor", "python", "backend"],
updatedAt: "2026-05-03",
appliesTo: "Cursor 0.40+",
content: `# Cursor Python Development Rules

## Code Style
- Follow PEP 8
- Use 4-space indentation
- Max line length 88 chars (Black defaults); longer lines signal excessive nesting
- Use snake_case for variables, functions, and methods

## Type Hints
- Every function parameter and return value must carry type annotations — no untyped public signatures
- Use typing module for generics, unions, and optionals
- Use TypeAlias for complex types (nested dicts, union type combinations) that repeat across modules

## Project Management
- Use pyproject.toml as the single source of truth for build config, dependencies, and tool settings
- Split dependencies into dev/prod groups so CI installs only what it needs
- Use pytest for all testing — it scales from unit tests to integration suites with fixtures

## Documentation
- Every public function gets a docstring — docstring omitted means the function is private
- Use Google-style docstrings (Args/Returns/Raises sections) for consistency across the codebase
- README must include install steps and a minimal usage example that works out of the box

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [Database Schema Design Standards](/rules/cursor-database-rules)
- [RESTful API Coding Standards](/rules/cursor-api-rules)
- [Testing Standards for AI-Generated Code](/rules/cursor-testing-rules)
`,
  },
  {
slug: "cursor-git-workflow",
title: "Git Workflow Best Practices for Cursor",
category: "cursor",
description: "Standardized Git workflow and commit conventions for Cursor.",
icon: "🔀",
tags: ["cursor", "git", "workflow"],
updatedAt: "2026-04-25",
content: `# Cursor Git Workflow Rules

## Branch Strategy
- main: production branch, merge-only — never commit directly, never force push
- dev: integration branch where feature branches land before main
- feature/*: new feature branches branch off dev, merge back to dev via PR
- fix/*: hotfix branches branch off main, merge to both main and dev

## Commit Conventions
- Follow Conventional Commits — automated changelogs and semantic versioning depend on structured messages
- Format: type(scope): description — keep the description under 72 characters
- Valid types: feat / fix / docs / refactor / test / chore

## Pre-Commit Checks
- Run lint — formatting and type errors should never reach the repo
- Run tests — a broken test in main is a P0 incident
- Check for unused imports — they bloat bundles and confuse readers
- Check for console.log — logging should use a proper logger, never raw console output

## PR Guidelines
- PR title must summarize the change — future you searches git log to find why something broke
- PR description must explain the motivation, not restate the diff
- Link every PR to an issue — untracked changes are unreviewable changes

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
slug: "cursor-typescript-rules",
title: "TypeScript Strict Mode Rules for Cursor",
category: "cursor",
description: "Coding rules for TypeScript projects with strict mode enabled.",
icon: "📘",
tags: ["cursor", "typescript", "strict-mode"],
updatedAt: "2026-05-04",
appliesTo: "Cursor 0.40+",
content: `# Cursor TypeScript Strict Mode Rules

## Configuration Requirements
- strict: true — non-negotiable; without it you're not writing TypeScript, you're writing annotated JavaScript
- noUncheckedIndexedAccess: true — array[index] and object[key] return T | undefined by default, forcing you to handle missing values
- exactOptionalPropertyTypes: true — prevents passing { color: undefined } when color is optional; use ? instead

## Type Definitions
- Prefer interface for object shapes — they're extendable and produce better error messages
- Use type for unions, intersections, and mapped types — type is a type algebra
- Never use any; use unknown when the type is genuinely unknown, and narrow with type guards before use

## Generics
- Single-letter generic params (T, K, V) are fine for simple cases; use full names (TData, TInput) when readability demands it
- Constrain generics with extends — unconstrained generics are just unknown in disguise
- Prefer built-in utility types (Partial, Pick, Omit, Record) over hand-rolling equivalent types

## Best Practices
- Use const assertions (it as const) for literal types — they narrow string arrays to readonly tuples
- Use the satisfies operator for config objects — it validates the shape without widening the type
- Prefer const enum or plain string unions over enum — enums generate runtime code and break tree-shaking

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [React Development Standards for AI Coding](/rules/cursor-react-rules)
- [Next.js Development Standards for AI Coding](/rules/cursor-nextjs-rules)
`,
  },
  {
slug: "claude-code-general",
title: "Claude Code Starter Guide: Essential Rules",
category: "claude",
description: "General rules and optimal prompts for AI coding with Claude Code.",
icon: "🤖",
tags: ["claude-code", "general", "prompt"],
updatedAt: "2026-04-30",
appliesTo: "Claude Code 0.1+",
content: `# Claude Code General Rules

## Core Principles
- Claude Code is a pair programmer, not a replacement — you own every line it writes
- Always review AI-generated code before it lands in your branch
- Maintain codebase consistency — one file matching your patterns beats ten files matching generic patterns

## Prompt Techniques
- Explicitly specify your tech stack and versions — "React 18" vs "React 19" matters, and Claude can't guess
- Provide file paths as context — the first prompt should list 3-5 key files Claude should read first
- Use step-by-step instructions — a chain of 5 small prompts produces better code than one paragraph-long prompt

## Security
- Never let Claude write API keys or secrets into code — use environment variables exclusively
- Review every file modification in the diff before accepting
- Manually confirm sensitive operations (database migrations, deployment commands, permission changes)

## Usage Scenarios

Before starting a Claude Code session, paste the prompt template and replace placeholders with your project details. Claude Code generates code matching the template precision.

## Common Mistakes

- Don't ask too much at once — break large tasks into small steps
- Provide enough file path context to help Claude locate the right files
- Review every line of AI-generated code — don't trust blindly


## Related Standards

- [Effective React Prompts for Claude Code](/rules/claude-code-react)
- [Effective Python Prompts for Claude Code](/rules/claude-code-python)
`,
  },
  {
slug: "claude-code-react",
title: "Effective React Prompts for Claude Code",
category: "claude",
description: "Prompt templates tailored for React projects in Claude Code.",
icon: "⚛️",
tags: ["claude-code", "react", "prompt"],
updatedAt: "2026-05-05",
appliesTo: "Claude Code 0.1+",
content: `# Claude Code React Development Prompts

## Creating a Component
"Create a Button component in src/components/ using TypeScript + Tailwind CSS, with variant (primary/secondary/outline) and size (sm/md/lg) props."

## Fixing a Bug
"The list in Users.tsx renders blank — no data appears. Check the data fetching logic and use React DevTools to inspect state."

## Refactoring
"Extract chart logic from the Dashboard page into a standalone Chart component, with loading and empty states."

## Usage Scenarios

Before starting a Claude Code session, paste the prompt template and replace placeholders with your project details. Claude Code generates code matching the template precision.

## Common Mistakes

- Don't ask too much at once — break large tasks into small steps
- Provide enough file path context to help Claude locate the right files
- Review every line of AI-generated code — don't trust blindly
`,
  },
  {
slug: "claude-code-workflow",
title: "Claude Code Daily Development Workflow",
category: "claude",
description: "Best practices for daily development workflows with Claude Code.",
icon: "🔄",
tags: ["claude-code", "workflow", "best-practices"],
updatedAt: "2026-05-06",
appliesTo: "Claude Code 0.1+",
content: `# Claude Code Workflow Rules

## Daily Development Flow
1. Read relevant files before starting a task — Claude needs context, not guesses
2. Let Claude map the project structure by pointing it to key directories and config files
3. Commit small, review frequently — a 10-line diff is easy to audit; a 500-line diff is impossible
4. Run tests after every commit — CI catches nothing if you never push broken code

## Debugging Flow
1. Describe the observed behavior vs. expected behavior — be specific
2. Provide the full error log — partial logs hide root causes
3. Point to the suspected code area — narrowing scope saves rounds of Q&A
4. Claude proposes a fix; you validate it against edge cases before applying

## Code Review
1. Review every diff — 95% accuracy means 5 out of 100 lines are wrong
2. Run lint and tests locally before filing the PR
3. Check edge cases: null, empty arrays, large inputs, network failures
4. Confirm no security vulnerabilities — AI can introduce injection sinks and hardcoded secrets

## Usage Scenarios

Before starting a Claude Code session, paste the prompt template and replace placeholders with your project details. Claude Code generates code matching the template precision.

## Common Mistakes

- Don't ask too much at once — break large tasks into small steps
- Provide enough file path context to help Claude locate the right files
- Review every line of AI-generated code — don't trust blindly
`,
  },
  {
slug: "claude-code-prompts",
title: "Claude Code Prompt Templates Collection",
category: "claude",
description: "A curated collection of the most practical Claude Code prompt templates and usage tips.",
icon: "💡",
tags: ["claude-code", "prompt", "templates"],
updatedAt: "2026-05-01",
content: `# Claude Code Effective Prompt Collection

## Code Generation
- "Generate a [feature] component using [tech stack]"
- "Implement CRUD operations for [API endpoint]"
- "Write an implementation and tests for [algorithm]"

## Code Review
- "Review this PR for code quality and consistency"
- "Identify potential performance bottlenecks"
- "Check for security vulnerabilities"

## Refactoring
- "Split this component into smaller, focused components"
- "Refactor from [pattern] to [new pattern]"
- "Optimize this function's performance"

## Testing
- "Write unit tests for this component"
- "Generate edge case test scenarios"
- "Write integration tests covering this flow"

## Usage Scenarios

Before starting a Claude Code session, paste the prompt template and replace placeholders with your project details. Claude Code generates code matching the template precision.

## Common Mistakes

- Don't ask too much at once — break large tasks into small steps
- Provide enough file path context to help Claude locate the right files
- Review every line of AI-generated code — don't trust blindly
`,
  },
  {
slug: "copilot-general",
title: "GitHub Copilot Beginner's Guide",
category: "copilot",
description: "Usage rules and best practices for GitHub Copilot.",
icon: "🪁",
tags: ["copilot", "general", "best-practices"],
updatedAt: "2026-04-29",
content: `# GitHub Copilot General Rules

## Configuration
- Enable auto-trigger for inline suggestions — the gap between typing and Tab is where Copilot reads your intent
- Configure .github/copilot-instructions.md with project-specific conventions
- Use Copilot Chat for debugging — it reads your open file context automatically

## Usage Tips
- Write clear comments to guide generation — Copilot reads your intent from the comment above the cursor
- Write the function signature first, then let Copilot fill the body — the signature constrains the output
- Use Tab to accept suggestions; Alt/Option+[ or Alt/Option+] cycles through alternatives

## Code Quality
- Validate every suggestion — Copilot generates plausible-looking code that may not compile
- Never accept code that's obviously wrong — fix the comment or signature and try again
- Manual corrections are expected — Copilot is autocomplete, not a code review

## Usage Scenarios

Save this config to '.github/copilot-instructions.md' in your project root. GitHub Copilot auto-loads these instructions in all IDEs.

## Common Mistakes

- copilot-instructions.md has different syntax from .cursorrules — they're not drop-in replacements
- Configs too long exceed context window limits — keep under 50 lines
- Copilot doesn't support complex multi-step instructions — keep rules simple and direct
`,
  },
  {
slug: "copilot-instructions",
title: "Configuring Copilot Project Instructions",
category: "copilot",
description: "Configure project-level Copilot behavior via copilot-instructions.md.",
icon: "📋",
tags: ["copilot", "configuration", "instructions"],
updatedAt: "2026-05-03",
content: `# GitHub Copilot Project Instructions Configuration

## Creating copilot-instructions.md
Create .github/copilot-instructions.md at your project root

## Configuration Content
- Project tech stack description
- Coding style preferences
- Frameworks and libraries in use
- Naming conventions

## Example
markdown
# Tech Stack
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Prisma ORM

# Coding Standards
- Prefer Server Components over Client Components
- Use Route Handlers for API routes
- Use Prisma for database queries


## Usage Scenarios

Save this config to '.github/copilot-instructions.md' in your project root. GitHub Copilot auto-loads these instructions in all IDEs.

## Common Mistakes

- copilot-instructions.md has different syntax from .cursorrules — they're not drop-in replacements
- Configs too long exceed context window limits — keep under 50 lines
- Copilot doesn't support complex multi-step instructions — keep rules simple and direct
`,
  },
  {
    slug: "copilot-testing",
    title: "Auto-Generating Tests with Copilot",
    category: "copilot",
    description: "Best practices for writing tests with GitHub Copilot.",
    icon: "🧪",
    tags: ["copilot", "testing", "jest"],
    updatedAt: "2026-04-27",
    content: `# Copilot-Assisted Test Writing

## Testing Framework
- Jest + React Testing Library
- Use descriptive test names that document expected behavior
- AAA pattern (Arrange-Act-Assert) — structure every test the same way for readability

## Generating Tests
1. Open the file under test in your editor
2. Create a .test.ts file alongside it
3. Copilot generates tests based on the implementation context it can see

## Mock Strategy
- Mock external API calls with jest.mock — network-dependent tests are flaky and slow
- Use dependency injection for complex dependencies so mocks are explicit
- Avoid over-mocking — if you mock everything, you're testing mocks, not code

## Usage Scenarios

Save this config to '.github/copilot-instructions.md' in your project root. GitHub Copilot auto-loads these instructions in all IDEs.

## Common Mistakes

- copilot-instructions.md has different syntax from .cursorrules — they're not drop-in replacements
- Configs too long exceed context window limits — keep under 50 lines
- Copilot doesn't support complex multi-step instructions — keep rules simple and direct
`,
  },
  {
slug: "windsurf-rules",
title: "Windsurf AI Coding Setup Guide",
category: "windsurf",
description: "AI coding rules and best practices for the Windsurf IDE.",
icon: "🏄",
tags: ["windsurf", "general", "rules"],
updatedAt: "2026-05-02",
appliesTo: "Windsurf 1.0+",
content: `# Windsurf AI Coding Rules

## Basic Configuration
- Enable AI suggestions
- Configure project context so Cascade knows your stack and conventions
- Set code review level based on your team's tolerance for AI-generated code

## Usage Tips
- Describe requirements in natural language — Cascade translates intent to diffs
- Leverage multi-file editing to keep related changes atomic
- Use Cascade for cross-cutting changes that span multiple files

## Best Practices
- Save work regularly — a single bad Cascade run can undo hours of manual edits
- Review every diff before accepting — AI changes must pass the same bar as human PRs
- Test generated code — it passes the type checker more often than it passes your test suite

## Usage Scenarios

These standards auto-apply to Cascade multi-file editing and AI suggestions in Windsurf IDE.

## Common Mistakes

- Check the diff after every Cascade change — don't fully trust the AI
- Commit before large-scale changes to enable easy rollback
- Windsurf AI features require network connectivity — not available offline
`,
  },
  {
slug: "windsurf-cascade",
title: "Windsurf Cascade Multi-File Editing Guide",
category: "windsurf",
description: "Guide to Windsurf Cascade's multi-file editing features.",
icon: "🌊",
tags: ["windsurf", "cascade", "multi-file"],
updatedAt: "2026-04-26",
appliesTo: "Windsurf 1.0+",
content: `# Windsurf Cascade Feature Guide

## What Is Cascade
Cascade is Windsurf's multi-file editing engine — it reads your codebase and applies changes across files in one diff

## Usage Scenarios
- Cross-file refactors (rename a type, cascade the import updates everywhere)
- Adding new features that touch multiple layers (route + service + model + test)
- Global changes (lint fix across the repo, API version bumps)

## Best Practices
- Clearly define the scope of changes — "refactor auth" is ambiguous; "extract JWT validation from 3 route files into a middleware" is actionable
- Review every file's diff individually — don't accept a 10-file diff as one chunk
- Commit in small batches — each Cascade run should produce one atomic commit`,
  },
  {
slug: "ai-coding-prompt-tips",
title: "AI Coding Prompt Mastery: 10x Your Efficiency",
category: "general",
description: "Prompt writing techniques for all AI coding tools.",
icon: "🎯",
tags: ["prompt", "tips", "general"],
updatedAt: "2026-05-05",
content: `# AI Coding Prompt Mastery

## Golden Rules
1. Be specific: never say "optimize the code" — say "replace this O(n^2) nested loop with a hash map lookup for O(n)"
2. Provide context: file paths and key code snippets so the AI knows what it's changing
3. Step-by-step instructions: break large tasks into small, verifiable steps that can be tested independently

## Advanced Techniques
- Use few-shot examples: show 2-3 examples of desired output before the actual request
- Specify the output format (JSON shape, TypeScript interface, file structure)
- Ask the AI to explain the rationale behind each change — it surfaces hidden assumptions

## Pitfalls
- Avoid vague descriptions — "make it better" produces unpredictable changes
- Never assume the AI knows your project structure — name specific files and directories
- Check generated dependency versions — AI training data may suggest deprecated or vulnerable packages

## Applicable Scenarios

These methods apply to all major AI coding tools (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.). Choose the right tool for your needs.

## Common Mistakes

- Don't expect AI to replace thinking — it's an accelerator, not autopilot
- Standards must adapt to project type — there is no universal config
- Always review AI-generated code — it may have hidden issues
- Update your standards regularly — AI tools evolve fast

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },
  {
slug: "ai-code-review",
title: "AI-Powered Code Review: Complete Rules and Workflow",
category: "general",
description: "Rules and workflow for AI-assisted code review.",
icon: "👁️",
tags: ["code-review", "AI", "quality"],
updatedAt: "2026-04-30",
content: `# AI-Assisted Code Review Rules

## Review Focus
1. Logic errors — off-by-one, inverted conditions, missing null checks
2. Performance bottlenecks — N+1 queries, unnecessary re-renders, missing memoization
3. Security vulnerabilities — injection sinks, missing auth checks, exposed secrets
4. Consistency — does this code match patterns used elsewhere in the codebase?

## AI Review Pipeline
1. Submit code as a PR — the AI review step fires automatically
2. AI runs a first-pass review flagging obvious issues (style violations, missing tests, potential bugs)
3. A human reviews the AI's findings — dismiss false positives, prioritize real issues
4. Resolve identified issues before merge; the AI re-scans on each push

## Caveats
- AI cannot fully replace human review — it catches patterns, not intentions
- Business logic must be verified by a human — the AI doesn't know your domain rules
- Security review requires specialized expertise — AI misses context-dependent vulnerabilities

## Applicable Scenarios

These methods apply to all major AI coding tools (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.). Choose the right tool for your needs.

## Common Mistakes

- Don't expect AI to replace thinking — it's an accelerator, not autopilot
- Standards must adapt to project type — there is no universal config
- Always review AI-generated code — it may have hidden issues
- Update your standards regularly — AI tools evolve fast

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },
  {
slug: "cursor-rules-best-practices",
title: "Cursor Rules: Advanced Techniques and Production Tips",
category: "general",
description: "Advanced usage patterns and real-world experience with Cursor Rules.",
icon: "⭐",
tags: ["cursor", "best-practices", "advanced"],
updatedAt: "2026-05-06",
content: `# Cursor Rules Best Practices Collection

## Layered Rule Design
- Global rules (apply to all projects — indentation, git conventions, security)
- Language rules (Python/JS/TS — type discipline, linting, idiom)
- Framework rules (React/Next.js — component patterns, data fetching, routing)
- Project-specific rules (business domain conventions, team preferences)

## Rule Priority
- Specific rules override general ones — a React rule beats a generic TypeScript rule
- Project-level rules outrank global rules — the .cursor/rules in your repo is the final word
- Rules load in filename order — use numeric prefixes (01-global, 02-react) to control precedence

## Production Tips
- Keep rules files under 50 lines — beyond that, the AI starts ignoring rules at random
- Use comment headers to separate sections so the AI can scan structure quickly
- Update rules regularly — the AI tools themselves change, and stale rules produce stale code

## Applicable Scenarios

These methods apply to all major AI coding tools (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.). Choose the right tool for your needs.

## Common Mistakes

- Don't expect AI to replace thinking — it's an accelerator, not autopilot
- Standards must adapt to project type — there is no universal config
- Always review AI-generated code — it may have hidden issues
- Update your standards regularly — AI tools evolve fast

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },

  {
slug: "cursor-vue-rules",
title: "Vue 3 Best Practices for Cursor",
category: "cursor",
description: "Coding rules for Vue 3 + Composition API projects in Cursor.",
icon: "🟢",
tags: ["cursor", "vue", "frontend"],
updatedAt: "2026-05-10",
appliesTo: "Cursor 0.40+",
content: `# Cursor Vue.js Development Rules

## Project Structure
- Use Composition API + script setup — it is the default for Vue 3, shorter syntax, better TypeScript inference
- Avoid Options API — it is not deprecated but Composition API composes better
- Use PascalCase for component file names
- Page components go in pages/ or views/; shared components in components/

## Component Standards
- One component per .vue file — single-file components are already component-scoped
- Prefer composables for logic reuse — they compose better than mixins and renderless components
- Every prop must declare its type and default value — no guessing at runtime
- Emit events use kebab-case names for consistency with HTML event naming

## State Management
- Use Pinia for cross-component state — it's the official Vue 3 state management library
- Split stores by feature domain, not by data type
- Never reference component instances inside stores — stores are framework-agnostic state containers

## Styling
- Use style scoped to prevent style leakage between components
- Place global styles in assets/styles/ — reset, typography, design tokens
- Prefer Tailwind CSS or CSS custom properties (variables) for theming

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [React Development Standards for AI Coding](/rules/cursor-react-rules)
- [Cursor Nuxt 3 Full-Stack Development Rules](/rules/cursor-nuxt-rules)
- [Tailwind CSS Standards for AI Coding](/rules/cursor-tailwind-rules)
`,
  },

  {
slug: "cursor-go-rules",
title: "Writing Elegant Go Code with Cursor",
category: "cursor",
description: "Coding standards and best practices for Go projects in Cursor.",
icon: "🔷",
tags: ["cursor", "go", "golang"],
updatedAt: "2026-05-10",
appliesTo: "Cursor 0.40+",
content: `    # Cursor Go Development Rules

## Code Standards
- Format with gofmt or gofumpt — unformatted Go is not Go
- Follow Effective Go — this is the canonical style guide, not optional
- Use the if err != nil pattern religiously — Go does not have exceptions, and ignoring errors is a bug
- Keep interfaces small, ideally 1-3 methods — large interfaces violate the Interface Segregation Principle

## Project Structure
- Package by feature, not by layer — a user package contains handler, service, and repository, not a handlers directory
- cmd/ holds main package entry points — one subdirectory per binary
- internal/ holds packages that must not be imported externally — the Go toolchain enforces this
- pkg/ holds reusable public packages that other projects can import

## Concurrency
- Use the sync package (Mutex, RWMutex, WaitGroup) to protect shared mutable state
- Use channels for goroutine communication — share memory by communicating, not vice versa
- context.Context carries request-scoped values, deadlines, and cancellation signals through call chains

## Testing
- Test files live in the same directory as the code under test — foo.go gets foo_test.go
- Use table-driven tests — iterate over a slice of test cases, each with name, input, and expected output
- Benchmark functions follow the BenchmarkXxx(b *testing.B) signature and must loop b.N times

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [RESTful API Coding Standards](/rules/cursor-api-rules)
- [Testing Standards for AI-Generated Code](/rules/cursor-testing-rules)
- [Docker Containerization Best Practices for Cursor](/rules/cursor-docker-rules)
`,
  },

  {
slug: "cursor-testing-rules",
title: "Automated Test Generation Rules for Cursor",
category: "cursor",
description: "Rules and best practices for writing unit and integration tests in Cursor.",
icon: "🧪",
tags: ["cursor", "testing", "jest"],
updatedAt: "2026-05-10",
appliesTo: "Cursor 0.40+",
content: `    # Cursor Test Development Rules

## Testing Strategy
- Unit tests cover core business logic — pure functions, validation, state transitions
- Integration tests cover API endpoints and database interactions with real or testcontainers-backed databases
- Every bug fix starts with a regression test — reproduce the bug, prove it's fixed, prevent it from recurring
- Coverage target: >90% on core modules; coverage percentage is a floor, not a ceiling

## Test Naming
- describe names the unit under test (component, function, module)
- it describes the expected behavior in the present tense ("returns null when input is empty")
- Test names should read like documentation — someone reading the test output should understand what failed

## Mock Guidelines
- Mock external services (APIs, databases in unit tests) — they make tests slow and flaky
- Prefer real implementations for internal modules — mocking your own code hides integration bugs
- Store mock data in __fixtures__/ directory — keep test files focused on assertions, not data setup

## Assertion Standards
- Each test verifies exactly one behavior — if a test has three assertions about different things, split it
- Follow the AAA pattern (Arrange-Act-Assert) — a blank line between each phase
- Error scenarios and edge cases must be covered — happy-path tests alone don't prove correctness

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [Cursor E2E Automated Testing Rules](/rules/cursor-e2e-testing)
- [AI-Assisted Testing Strategy Guide](/rules/general-testing-strategy)
`,
  },

  {
slug: "cursor-api-rules",
title: "RESTful API Development Standards for Cursor",
category: "cursor",
description: "Coding standards for RESTful API and GraphQL development in Cursor.",
icon: "🌐",
tags: ["cursor", "api", "rest"],
updatedAt: "2026-05-10",
appliesTo: "Cursor 0.40+",
content: `    # Cursor API Development Rules

## Route Design
- RESTful resources use plural nouns — GET /api/users, not GET /api/user
- Version number goes in the URL path (/api/v1/) — it's explicit and cache-friendly
- Query parameters are for filtering and sorting — GET /api/users?status=active&sort=created_at
- Request body is for create and update operations — POST/PUT/PATCH carry JSON payloads

## Request Validation
- Every input must be validated for type and format — trust no client
- Use Zod, Joi, or similar schema validation libraries — they produce typed objects after validation
- Error messages must use a uniform response format so clients can parse them programmatically
- Never leak sensitive fields (passwords, internal IDs, stack traces) in error responses

## Response Format
- Return consistent { code, data, message } envelope
- List endpoints must support pagination (page, pageSize, total)
- Use HTTP status codes with business error codes
- Long-running endpoints return 202 Accepted with a status URL

## Security
- API keys via Authorization header
- Enforce rate limiting on all endpoints
- Restrict CORS to known origins only
- Log all sensitive operations to an audit trail

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [GraphQL API Standards](/rules/cursor-graphql-rules)
- [Database Schema Design Standards](/rules/cursor-database-rules)
`,
  },

  {
slug: "cursor-docker-rules",
title: "Docker Containerization Best Practices for Cursor",
category: "cursor",
description: "Best practices and rules for developing Docker containerized apps with Cursor.",
icon: "🐳",
tags: ["cursor", "docker", "devops"],
updatedAt: "2026-05-10",
appliesTo: "Cursor 0.40+",
content: `    # Docker Containerization Standards for AI-Assisted Development

## Dockerfile Conventions
- Use multi-stage builds to minimize image size
- Pin base images with explicit version tags
- Combine RUN commands to reduce layer count
- Use .dockerignore to exclude unnecessary files

## Security
- Never run containers as root user
- Minimize installed packages
- Scan images regularly for vulnerabilities
- Inject sensitive config via environment variables

## Orchestration
- Use docker-compose for development environments
- Use Kubernetes for production
- One container per service
- Output logs to stdout/stderr

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [Node.js Express Backend Standards](/rules/cursor-nodejs-rules)
- [CI/CD & Deployment Guide](/rules/general-deployment-rules)
`,
  },

  {
slug: "cursor-database-rules",
title: "Database Schema Design Rules for Cursor",
category: "cursor",
description: "Cursor coding rules for schema design, query optimization, and migrations.",
icon: "🗄️",
tags: ["cursor", "database", "sql"],
updatedAt: "2026-05-10",
appliesTo: "Cursor 0.40+",
content: `    # Database Standards for AI-Assisted Development

## Schema Design
- Use plural snake_case for table names
- Primary keys: BIGINT auto-increment or UUID
- All tables must have created_at and updated_at timestamps
- Create indexes on all foreign key columns

## Query Standards
- Avoid N+1 queries — use JOINs or eager loading
- Analyze complex queries with EXPLAIN
- Use batch processing for large data operations
- Use cursor-based pagination for large datasets

## Migration Management
- Create a new migration file for each schema change
- Migrations must be reversible (up/down)
- Review all migrations before production deployment
- Never modify already-merged migration files

## Security
- Use parameterized queries to prevent SQL injection
- Encrypt sensitive fields at rest
- Configure connection strings via environment variables
- Limit connection pool size in production

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [Prisma ORM Data Layer Standards](/rules/cursor-prisma-rules)
- [Supabase Backend Standards](/rules/cursor-supabase-rules)
`,
  },

  {
slug: "claude-code-python",
title: "Effective Python Prompts for Claude Code",
category: "claude",
description: "High-impact prompt templates for Python development with Claude Code.",
icon: "🐍",
tags: ["claude-code", "python", "prompt"],
updatedAt: "2026-05-10",
appliesTo: "Claude Code 0.1+",
content: `    # Claude Code Python Prompts

## Generate FastAPI Endpoints
"Create a user CRUD router under app/routers/ using FastAPI + SQLAlchemy async. Support paginated listing, create, update, and delete."

## Data Processing
"Write a pandas data processing function: read sales CSV data, aggregate by month, output as Excel."

## Async Tasks
"Implement a background task queue using Celery + Redis with progress tracking and result callbacks. Organize task functions under tasks/."

## Generate Tests
"Write pytest unit tests for services/user_service.py. Mock external API calls. Cover success and failure paths." 

## Usage Scenarios

Before starting a Claude Code session, paste the prompt template and replace placeholders with your project details. Claude Code generates code matching the template precision.

## Common Mistakes

- Don't ask too much at once — break large tasks into small steps
- Provide enough file path context to help Claude locate the right files
- Review every line of AI-generated code — don't trust blindly
`,
  },

  {
slug: "claude-code-testing",
title: "Test Generation Prompts for Claude Code",
category: "claude",
description: "Best prompts for auto-generating and maintaining tests with Claude Code.",
icon: "🧪",
tags: ["claude-code", "testing", "automation"],
updatedAt: "2026-05-10",
content: `    # Claude Code Testing Guide

## Generate Unit Tests
"Generate Jest unit tests for src/utils/format.ts covering edge cases (null, boundary values, special characters)."

## Generate Integration Tests
"Generate integration tests for the /api/users endpoint covering the full user CRUD lifecycle."

## Mock External Dependencies
"Use jest.mock to mock Stripe API calls. Simulate successful and failed payment responses."

## Test Coverage
"Analyze current project test coverage. Identify uncovered code paths. Generate supplementary tests." 

## Usage Scenarios

Before starting a Claude Code session, paste the prompt template and replace placeholders with your project details. Claude Code generates code matching the template precision.

## Common Mistakes

- Don't ask too much at once — break large tasks into small steps
- Provide enough file path context to help Claude locate the right files
- Review every line of AI-generated code — don't trust blindly
`,
  },

  {
slug: "claude-code-refactoring",
title: "Code Refactoring Prompt Templates for Claude Code",
category: "claude",
description: "Prompt templates and workflow for safe code refactoring with Claude Code.",
icon: "🔨",
tags: ["claude-code", "refactoring", "best-practices"],
updatedAt: "2026-05-10",
content: `    # Claude Code Code Refactoring Prompts

## Extract Component
"Extract the 300-line chart logic from the Dashboard page into a standalone component. Include loading, empty, and error states."

## Split Large Functions
"Split the 200-line processOrder function in utils/helpers.ts into smaller functions, each with a single responsibility."

## Migration Pattern
"Migrate all class components to functional components + hooks. Preserve all functionality."

## Optimize Performance
"Analyze re-rendering issues on the list page. Apply React.memo, useMemo, useCallback. Provide before/after performance comparison." 

## Usage Scenarios

Before starting a Claude Code session, paste the prompt template and replace placeholders with your project details. Claude Code generates code matching the template precision.

## Common Mistakes

- Don't ask too much at once — break large tasks into small steps
- Provide enough file path context to help Claude locate the right files
- Review every line of AI-generated code — don't trust blindly
`,
  },

  {
slug: "copilot-vue",
title: "Copilot Best Configuration for Vue 3 Projects",
category: "copilot",
description: "Best configuration and usage rules for GitHub Copilot in Vue 3 projects.",
icon: "🟢",
tags: ["copilot", "vue", "frontend"],
updatedAt: "2026-05-10",
content: `    # Copilot Vue 3 Development Instructions

## Configuration copilot-instructions.md

## Tech Stack
- Vue 3 (Composition API)
- TypeScript (strict)
- Use Vite as the build tool
- Pinia State Management

## Coding Standards
- Use <script setup lang="ts">
- Multi-word component names (MyComponent.vue)
- Place composables in composables/ directory
- Encapsulate API requests in api/ module

## Common Prompts
- "Generate a user list component with search and pagination"
- "Write a Pinia store to manage shopping cart state"
- "Implement route lazy loading and navigation guards" 

## Usage Scenarios

Save this config to '.github/copilot-instructions.md' in your project root. GitHub Copilot auto-loads these instructions in all IDEs.

## Common Mistakes

- copilot-instructions.md has different syntax from .cursorrules — they're not drop-in replacements
- Configs too long exceed context window limits — keep under 50 lines
- Copilot doesn't support complex multi-step instructions — keep rules simple and direct
`,
  },

  {
slug: "copilot-python",
title: "Copilot Best Configuration for Python Development",
category: "copilot",
description: "Best configuration and usage tips for GitHub Copilot in Python projects.",
icon: "🐍",
tags: ["copilot", "python", "backend"],
updatedAt: "2026-05-10",
content: `    # Copilot Python Development Instructions

## Configuration copilot-instructions.md

## Tech Stack
- Python 3.11+
- FastAPI / Django
- SQLAlchemy / Django ORM
- pytest + coverage

## Coding Standards
- Follow PEP 8
- Use type annotations throughout
- Prefer async/await patterns
- Use Google-style docstrings

## Common Prompts
- "Implement a FastAPI user registration endpoint with password hashing and email verification"
- "Write a SQLAlchemy model with soft delete and timestamps"
- "Generate pytest fixtures and test data factories" 

## Usage Scenarios

Save this config to '.github/copilot-instructions.md' in your project root. GitHub Copilot auto-loads these instructions in all IDEs.

## Common Mistakes

- copilot-instructions.md has different syntax from .cursorrules — they're not drop-in replacements
- Configs too long exceed context window limits — keep under 50 lines
- Copilot doesn't support complex multi-step instructions — keep rules simple and direct
`,
  },

  {
slug: "windsurf-react",
title: "Windsurf Cascade Rules for React Development",
category: "windsurf",
description: "Rules and tips for React development with Cascade in Windsurf.",
icon: "⚛️",
tags: ["windsurf", "react", "frontend"],
updatedAt: "2026-05-10",
content: `    # Windsurf React Development Standards

## Project Configuration
- Enable AI code suggestions
- Configure React project context
- Use Cascade for cross-file editing

## Component Development
- Use Cascade to create component templates
- Leverage multi-file editing to sync component and style changes
- Review diffs immediately after AI code generation

## Debugging & Optimization
- Use Cascade to analyze component dependencies
- Cascade auto-updates references during refactoring
- Let AI analyze profiler data for performance issues

## Best Practices
- Run tests after every Cascade modification
- Create a git commit checkpoint before batch changes
- Break complex logic into steps for the AI

## Usage Scenarios

These standards auto-apply to Cascade multi-file editing and AI suggestions in Windsurf IDE.

## Common Mistakes

- Check the diff after every Cascade change — don't fully trust the AI
- Commit before large-scale changes to enable easy rollback
- Windsurf AI features require network connectivity — not available offline
`,
  },

  {
slug: "windsurf-python",
title: "AI Coding Rules for Python Development in Windsurf",
category: "windsurf",
description: "AI coding rules and best practices for Python development in Windsurf.",
icon: "🐍",
tags: ["windsurf", "python", "backend"],
updatedAt: "2026-05-10",
content: `    # Windsurf Python Development Standards

## Development Workflow
- Describe requirements in natural language
- Cascade auto-creates related files
- Run pytest after AI code generation

## Data Science
- Jupyter Notebook + Windsurf integration
- AI-assisted data cleaning and visualization
- Auto-generated model training code

## Web Development
- Rapid FastAPI/Django project scaffolding
- AI generates CRUD endpoints
- Auto-generated database model migrations

## Testing
- AI generates unit and integration tests
- Auto-supplement tests based on coverage gaps
- Auto-generated mock data

## Usage Scenarios

These standards auto-apply to Cascade multi-file editing and AI suggestions in Windsurf IDE.

## Common Mistakes

- Check the diff after every Cascade change — don't fully trust the AI
- Commit before large-scale changes to enable easy rollback
- Windsurf AI features require network connectivity — not available offline
`,
  },

  {
slug: "ai-prompt-engineering",
title: "Prompt Engineering System Methodology for AI Coding",
category: "general",
description: "Systematic Prompt Engineering methodology and templates for AI coding tools.",
icon: "📐",
tags: ["prompt", "engineering", "methodology"],
updatedAt: "2026-05-10",
content: `    # AI Coding Prompt Engineering Guide

## Structured Prompt Template

~~~
Tech Stack: [Next.js 14 + TypeScript + Tailwind]
Task: [Create a user profile edit form]
Requirements:
- Include avatar upload, nickname, and bio fields
- Form validation with Zod
- Show Toast notification on submit
- Responsive for mobile
~~~

## COAST Framework
- **C**ontext: Provide project background
- **O**bjective: Define the task goal clearly
- **A**ctions: List specific steps
- **S**pecifications: Specify technical constraints
- **T**one: Specify output style

## Iterative Refinement
- Round 1: Generate baseline code
- Round 2: Review and flag issues
- Round 3: Ask AI to refine specific areas
- Round 4: Add error handling and edge cases

## Applicable Scenarios

These methods apply to all major AI coding tools (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.). Choose the right tool for your needs.

## Common Mistakes

- Don't expect AI to replace thinking — it's an accelerator, not autopilot
- Standards must adapt to project type — there is no universal config
- Always review AI-generated code — it may have hidden issues
- Update your standards regularly — AI tools evolve fast

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },

  {
slug: "ai-fullstack-development",
title: "Complete Full-Stack Development Workflow with AI Tools",
category: "general",
description: "Complete workflow and best practices for full-stack development with AI coding tools.",
icon: "🚀",
tags: ["full-stack", "workflow", "productivity"],
updatedAt: "2026-05-10",
content: `    # AI Full-Stack Development Workflow

## Project Kickoff
- Generate project scaffolding with AI
- Initialize database schema
- Configure CI/CD pipeline
- Set up development environment (Docker)

## Frontend Development
- AI generates component code and styles
- Auto-generate API type definitions
- AI-assisted responsive layouts
- Auto-generated state management

## Backend Development
- AI generates CRUD endpoints
- Auto-generate middleware
- Database query optimization suggestions
- Auto-generated API documentation

## Deployment & Operations
- AI-generated Dockerfiles
- Auto-generated CI config
- Monitoring and alerting rule generation
- Performance optimization recommendations

## Applicable Scenarios

These methods apply to all major AI coding tools (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.). Choose the right tool for your needs.

## Common Mistakes

- Don't expect AI to replace thinking — it's an accelerator, not autopilot
- Standards must adapt to project type — there is no universal config
- Always review AI-generated code — it may have hidden issues
- Update your standards regularly — AI tools evolve fast

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },

  {
    slug: "nextjs-cursor-setup",
    title: "Next.js + Cursor Best Practices Configuration Guide",
    category: "tutorial",
    description: "Step-by-step guide to configuring Cursor rules so AI perfectly understands Next.js App Router projects.",
    icon: "📖",
    tags: ["nextjs", "cursor", "tutorial"],
    updatedAt: "2026-05-10",
    content: `# Next.js + Cursor Configuration Guide

## Why Configure AI Coding Standards?

By default, AI coding tools lack precise understanding of Next.js projects. Standards files tell the AI about your tech stack, routing conventions, and data fetching patterns.

## Complete Configuration

### Step 1: Create a standards file

Create .cursor/rules/nextjs.mdc in your project root with the following content:

\'\'\`
# Tech Stack
- Next.js 15 (App Router)
- TypeScript strict mode
- Tailwind CSS v4
- Prisma ORM
- NextAuth.js v5

# App Router Conventions
- Use layout.tsx for layout files
- Use loading.tsx for loading states
- Use error.tsx for error boundaries
- Use not-found.tsx for 404 pages

# Data Fetching
- Prefer Server Components
- Use "use client" only for interactive components
- Encapsulate API requests in lib/
- Use Server Actions for form mutations

# Image Optimization
- Use next/image for all images
- All images must include alt attributes
- External images require remotePatterns config
\'\'\`

### Step 2: Verify the result

After setup, try generating a new page. You should see:
- Component structure follows App Router conventions
- Data fetching uses Server Components by default
- Complete TypeScript types, no any usage

## Learning Path

Recommended learning path:
1. Read the tutorial thoroughly
2. Apply core concepts in real projects
3. Return here when encountering issues
4. Combine with other standards for a complete AI coding workflow

## Next Steps

- Visit '/frameworks' for framework-specific standards
- Visit '/compare' to understand differences between AI tools

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },
  {
    slug: "cursor-rules-migration",
    title: "Complete Guide to Migrating from Copilot to Cursor",
    category: "tutorial",
    description: "Complete guide to switching from GitHub Copilot to Cursor — rules migration, workflow adaptation, and team collaboration.",
    icon: "📖",
    tags: ["cursor", "copilot", "migration", "tutorial"],
    updatedAt: "2026-05-10",
    content: `# Complete Guide to Migrating from Copilot to Cursor

## Why Migrate?

Cursor advantages over Copilot:
- Deep understanding of the entire codebase, not just the current file
- Multi-file editing and refactoring
- Smarter code completion with project-wide context awareness

## Migration Steps

### 1. Configure Your Standards

Create .cursor/rules/standards.mdc in your project root:

\'\'\`
# Project Overview
- This is a [project type] project
- Built with [tech stack]
- Database: [database type]
- Deployed on: [deployment platform]

# Coding Standards
- Code style: [style preference]
- Testing framework: [testing tool]
- Naming conventions: [naming rules]

# Important Conventions
- Never modify files in the generated/ directory
- API routes follow RESTful conventions
- Component files should not exceed 200 lines
\'\'\`

### 2. Adapt Your Workflow

- Copilot Tab completion -> Cursor Tab works the same way
- Copilot Chat -> Cursor Chat (Ctrl+K / Cmd+K)
- Copilot inline suggestions -> Cursor inline diff review

### 3. Team Collaboration

Maintain standards files in your repo. The entire team shares the same config for consistent AI behavior.

## Learning Path

Recommended learning path:
1. Read the tutorial thoroughly
2. Apply core concepts in real projects
3. Return here when encountering issues
4. Combine with other standards for a complete AI coding workflow

## Next Steps

- Visit '/frameworks' for framework-specific standards
- Visit '/compare' to understand differences between AI tools

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },
  {
    slug: "cursor-agent-workflow",
    title: "Cursor Agent Mode — From Beginner to Expert",
    category: "tutorial",
    description: "Practical tutorial for Cursor Agent mode — complete workflow from basics to advanced techniques.",
    icon: "📖",
    tags: ["cursor", "agent", "tutorial", "workflow"],
    updatedAt: "2026-05-10",
    content: `# Cursor Agent Mode Deep Dive

## What Is Agent Mode?

Agent mode is the core differentiator of Cursor. It can:
- Auto-read relevant files
- Execute terminal commands
- Complete multi-step tasks
- Auto-fix errors

## Basic Workflow

### Scenario: Adding a New API Endpoint

1. Cmd+K to open Agent mode
2. Enter: "Create a user list API under app/api/users with pagination and search"
3. The Agent will:
   - Read existing route files
   - Create new route files
   - Generate database queries
   - Add parameter validation
   - Create corresponding type definitions

### Scenario: Fixing a Bug

1. Describe: "User sessions sometimes get lost after login"
2. The Agent will:
   - Search code related to sessions
   - Analyze possible causes
   - Propose fixes
   - Apply and verify the fix

## Advanced Techniques

- Use @ to reference specific files
- Give step-by-step instructions instead of long paragraphs
- Review the diff after every Agent operation

## Learning Path

Recommended learning path:
1. Read the tutorial thoroughly
2. Apply core concepts in real projects
3. Return here when encountering issues
4. Combine with other standards for a complete AI coding workflow

## Next Steps

- Visit '/frameworks' for framework-specific standards
- Visit '/compare' to understand differences between AI tools

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },
  {
    slug: "claude-code-workflow-guide",
    title: "Claude Code CLI — Practical Guide",
    category: "tutorial",
    description: "Efficient usage guide and real-world scenarios for the Claude Code CLI tool.",
    icon: "📖",
    tags: ["claude-code", "cli", "tutorial", "workflow"],
    updatedAt: "2026-05-10",
    content: `# Claude Code CLI — Practical Workflow Guide

## Quick Start

Claude Code is Anthropic's CLI-based AI coding assistant.

### Installation

\'\'\`bash
npm install -g @anthropic-ai/claude-code
\'\'\`

### Basic Usage

\'\'\`bash
# Start in current directory
claude

# Ask a direct question
claude "Analyze the code structure of this project"

# Code review
claude "Review code quality in the src/ directory"
\'\'\`

## Real-World Scenarios

### Scenario 1: Code Review

Integrate Claude Code in your CI pipeline:

\'\'\`bash
claude "Review the changes. Focus on: 1. Logic errors 2. Performance issues 3. Security vulnerabilities"
\'\'\`

### Scenario 2: Batch Refactoring

\'\'\`bash
claude "Replace all any types with specific type definitions, keeping behavior unchanged"
\'\'\`

### Scenario 3: Test Generation

\'\'\`bash
claude "Generate pytest tests for utility functions under src/utils/ covering edge cases"
\'\'\`

## Best Practices

- Focus each conversation on one task
- Provide enough file context
- Review all code changes before committing

## Learning Path

Recommended learning path:
1. Read the tutorial thoroughly
2. Apply core concepts in real projects
3. Return here when encountering issues
4. Combine with other standards for a complete AI coding workflow

## Next Steps

- Visit '/frameworks' for framework-specific standards
- Visit '/compare' to understand differences between AI tools

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },
  {
    slug: "cursor-vue-best-practices",
    title: "Vue 3 + Cursor — Practical Development Guide",
    category: "tutorial",
    description: "Efficient workflow and practical tips for Vue 3 development with Cursor AI.",
    icon: "📖",
    tags: ["cursor", "vue", "tutorial", "practical"],
    updatedAt: "2026-05-10",
    content: `# Vue 3 + Cursor — Practical Development

## Configuration Rules

Configure Vue 3 project context in your standards file:

\'\'\`
# Tech Stack
- Vue 3 with Composition API
- TypeScript strict
- Vite 5
- Pinia State Management
- Vue Router 4
- UnoCSS / Tailwind CSS

# Component Standards
- Use <script setup lang="ts">
- Use PascalCase for component names
- Page components go in pages/ directory
- Shared components go in components/ directory

# State Management
- Use Pinia for global state
- Use ref/reactive for local state
- Use provide/inject for cross-component communication

# API Layer
- Encapsulate API requests in api/ directory
- Use a configured axios instance
- Handle errors in request/response interceptors
\'\'\`

## Daily Development Scenarios

### Create a New Component
Enter in Cursor: "Create a UserCard component under components/ that receives a user object prop, displays avatar and name, supports click events."

### Add a Route
"Add a /users/:id route in router/index.ts using the UserDetail component with lazy loading."

### State Management
"Create a useAuth composable with login, logout, and token management. Support persistence.

## Learning Path

Recommended learning path:
1. Read the tutorial thoroughly
2. Apply core concepts in real projects
3. Return here when encountering issues
4. Combine with other standards for a complete AI coding workflow

## Next Steps

- Visit '/frameworks' for framework-specific standards
- Visit '/compare' to understand differences between AI tools

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },


  {
    slug: "cursor-rust-rules",
    title: "Rust Coding Standards for Cursor",
    category: "cursor",
    description: "Coding standards and ownership management best practices for Rust projects with Cursor.",
    icon: "🦀",
    tags: ["cursor", "rust", "systems-programming"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Rust Coding Standards for AI-Assisted Development

## Code Style
- Follow the Rust official style guide
- Format code with rustfmt
- All public items must have doc comments (///)
- Use clippy to maintain code quality

## Ownership & Borrowing
- Prefer references over ownership transfers
- Let the compiler infer lifetimes where possible
- Use Rc/Arc for shared ownership
- RefCell only for interior mutability

## Error Handling
- Use thiserror for library error types
- Use anyhow for recoverable application errors
- Avoid unwrap/expect — use the ? operator instead
- Provide meaningful error messages in library code

## Async
- Use tokio as the async runtime
- async fn as the default async interface
- Avoid blocking the async runtime with synchronous code

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-java-rules",
    title: "Java & Spring Boot Coding Standards for Cursor",
    category: "cursor",
    description: "Java coding standards and Spring Boot best practices for AI-assisted development with Cursor.",
    icon: "☕",
    tags: ["cursor", "java", "spring"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Java & Spring Boot Standards for AI-Assisted Development

## Code Style
- Follow Oracle Java conventions
- Use 4-space indentation
- PascalCase for class names
- camelCase for methods and variables

## Project Structure
- Package by feature module
- Controller/Service/Repository layering
- Use DTOs for API data transfer
- Use enums or constants classes for constants

## Spring Boot
- Use constructor injection over field injection
- Transaction annotations belong on the Service layer
- Use application.yml for configuration
- Unified exception handling with @ControllerAdvice

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-flutter-rules",
    title: "Flutter & Dart Mobile Development Standards for Cursor",
    category: "cursor",
    description: "Coding standards and best practices for Flutter/Dart projects with Cursor.",
    icon: "📱",
    tags: ["cursor", "flutter", "dart"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Flutter & Dart Standards for AI-Assisted Development

## Dart Conventions
- Follow Effective Dart guidelines
- Format with dart format
- Prefer explicit types over var
- Avoid dynamic types

## Flutter Components
- Prefer StatelessWidget by default
- Use StatefulWidget only when necessary
- Split components with single responsibility
- Use const constructors for performance

## State Management
- setState for small projects
- Riverpod or Bloc for medium/large projects
- Avoid excessive global state
- Layer providers by module

## Routes
- Use GoRouter for declarative routing
- Split route modules by feature
- Support deep linking

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-tailwind-rules",
    title: "Tailwind CSS Standards for Cursor",
    category: "cursor",
    description: "Coding standards and best practices for Tailwind CSS development with Cursor.",
    icon: "🎨",
    tags: ["cursor", "tailwind", "css"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Tailwind CSS Standards for AI-Assisted Development

## Usage Principles
- Prefer Tailwind utility classes over custom CSS
- Use @apply for custom style compositions
- Use design system tokens for colors
- Use breakpoint prefixes for responsive design

## Component Styling
- Extract shared components into reusable utility classes
- Use cn() utility to merge class names
- Use dark: prefix for dark mode
- Use Tailwind animate utilities for animations

## Performance
- Avoid dynamic class name construction
- Use PurgeCSS to remove unused styles
- Extract common styles to reduce duplication

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [React Development Standards](/rules/cursor-react-rules),
- [Next.js Development Standards](/rules/cursor-nextjs-rules),
- [Landing Page Development Standards](/rules/cursor-landing-page-rules),

`,
  },
  {
    slug: "cursor-prisma-rules",
    title: "Prisma ORM Data Layer Standards for Cursor",
    category: "cursor",
    description: "Database model design and query standards for Prisma ORM projects with Cursor.",
    icon: "🗃️",
    tags: ["cursor", "prisma", "database"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Prisma ORM Data Layer Standards

## Schema Design
- Use PascalCase singular for model names
- Use camelCase for field names
- Explicit @relation annotations for relationships
- Add indexes on frequently queried columns

## Query Standards
- Use select to fetch only needed fields
- Avoid N+1 queries — use include for eager loading
- Use createMany/updateMany for batch operations
- Use cursor-based pagination

## Migration Management
- Generate a new migration for every schema change
- Review migrations before production deployment
- Use migrate deploy in production

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-e2e-testing",
    title: "E2E Testing Standards for AI-Assisted Development",
    category: "cursor",
    description: "Coding standards for writing Playwright/Cypress end-to-end tests with Cursor.",
    icon: "🎭",
    tags: ["cursor", "e2e", "playwright"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# E2E Testing Standards for AI-Assisted Development

## Framework Selection
- Use Playwright for web applications
- Use Cypress for simpler scenarios
- Consistent Page Object Model pattern

## Testing Design
- Each test must be independently runnable
- Prepare test data with beforeEach
- Avoid inter-test dependencies
- Prioritize critical user path coverage

## Assertion Standards
- Use soft assertions to avoid blocking the flow
- Wait for elements to be visible before interacting
- Capture screenshots for failure analysis

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "claude-code-nextjs",
    title: "Next.js Development Prompts for Claude Code",
    category: "claude",
    description: "Efficient prompt templates for Next.js App Router development with Claude Code.",
    icon: "▲",
    tags: ["claude-code", "nextjs", "prompt"],
    updatedAt: "2026-05-11",
    content: `# Next.js Development Prompts for Claude Code

## Create Page Route
"Create a dashboard page under app/(main)/dashboard/ with overview cards, recent orders table, and sales trend chart."

## Add Server Action
"Create a user registration Server Action in app/actions/user.ts. Validate input with Zod, insert into database, send welcome email."

## Implement Middleware
"Create middleware.ts for login protection. Redirect unauthenticated users to /login. Only allow access to /dashboard/* for authenticated users."

## SEO Optimization
"Generate dynamic metadata and JSON-LD structured data for the product detail page."

## Usage Scenarios

Before starting a Claude Code session, paste the prompt template and replace placeholders with your project details. Claude Code generates code matching the template precision.

## Common Mistakes

- Don't ask too much at once — break large tasks into small steps
- Provide enough file path context to help Claude locate the right files
- Review every line of AI-generated code — don't trust blindly
`,
  },
  {
    slug: "claude-code-api-dev",
    title: "Backend API Development Prompts for Claude Code",
    category: "claude",
    description: "Prompt templates for developing RESTful and GraphQL APIs with Claude Code.",
    icon: "🌐",
    tags: ["claude-code", "api", "backend"],
    updatedAt: "2026-05-11",
    content: `# Backend API Development Prompts for Claude Code

## Create CRUD Endpoints
"Create product CRUD endpoints under app/api/products/ with pagination, category filtering, and price sorting."

## Authentication
"Implement JWT authentication middleware with token signing, verification, and refresh. Token expiry: 7 days."

## File Upload
"Create a file upload endpoint. Support image compression, format validation (jpg/png/webp only), upload to S3 and return URL."

## Usage Scenarios

Before starting a Claude Code session, paste the prompt template and replace placeholders with your project details. Claude Code generates code matching the template precision.

## Common Mistakes

- Don't ask too much at once — break large tasks into small steps
- Provide enough file path context to help Claude locate the right files
- Review every line of AI-generated code — don't trust blindly
`,
  },
  {
    slug: "copilot-react-native",
    title: "Copilot React Native Mobile Development Instructions",
    category: "copilot",
    description: "Best configuration and usage rules for GitHub Copilot in React Native projects.",
    icon: "📱",
    tags: ["copilot", "react-native", "mobile"],
    updatedAt: "2026-05-11",
    content: `# Copilot React Native Mobile Development Instructions

## Configuration copilot-instructions.md

## Tech Stack
- React Native 0.76+
- TypeScript strict
- Expo SDK 52+
- React Navigation 7

## Coding Standards
- Use functional components + Hooks
- Use StyleSheet.create for styles
- Screen components go in screens/ directory
- Centralize navigation configuration

## Common Prompts
- "Create a login page with email/password inputs and form validation"
- "Implement bottom tab navigation with nested drawer navigation"
- "Add push notification handling logic"

## Usage Scenarios

Save this config to '.github/copilot-instructions.md' in your project root. GitHub Copilot auto-loads these instructions in all IDEs.

## Common Mistakes

- copilot-instructions.md has different syntax from .cursorrules — they're not drop-in replacements
- Configs too long exceed context window limits — keep under 50 lines
- Copilot doesn't support complex multi-step instructions — keep rules simple and direct
`,
  },
  {
    slug: "copilot-docker",
    title: "Copilot Docker Containerization Instructions",
    category: "copilot",
    description: "Best practices for Docker development and containerized deployment with GitHub Copilot.",
    icon: "🐳",
    tags: ["copilot", "docker", "devops"],
    updatedAt: "2026-05-11",
    content: `# Copilot Docker Containerization Instructions

## Configuration copilot-instructions.md

## Tech Stack
- Docker / Docker Compose
- Multi-stage builds
- Alpine base images

## Common Prompts
- "Generate a multi-stage build Dockerfile for a Node.js application"
- "Write a docker-compose.yml with PostgreSQL and Redis"
- "Generate a .dockerignore excluding node_modules and .git"

## Usage Scenarios

Save this config to '.github/copilot-instructions.md' in your project root. GitHub Copilot auto-loads these instructions in all IDEs.

## Common Mistakes

- copilot-instructions.md has different syntax from .cursorrules — they're not drop-in replacements
- Configs too long exceed context window limits — keep under 50 lines
- Copilot doesn't support complex multi-step instructions — keep rules simple and direct
`,
  },
  {
    slug: "general-ai-workflow",
    title: "AI Coding Workflow Patterns & Productivity Guide",
    category: "general",
    description: "High-efficiency development workflow patterns and team collaboration guide applicable to all AI coding tools.",
    icon: "🔄",
    tags: ["AI", "workflow", "productivity", "collaboration"],
    updatedAt: "2026-05-11",
    content: `# AI Coding Workflow Patterns & Productivity Guide

## Solo Mode
- Start of day: Have AI review your TODO list and progress
- Before coding: Describe requirements and let AI propose a design plan
- During coding: Commit in small steps and have AI review each increment
- After coding: AI generates tests and documentation

## Team Mode
- Share .cursorrules project rules across the team
- Standardize AI tool versions and configurations
- Combine human code review with AI review
- Share AI prompt templates via a team knowledge base

## Common Pitfalls
- Do not dump too many requirements at once — AI context windows are finite
- Never trust AI-generated code blindly — validate it like any PR
- Never skip testing — AI-written code still needs verification
- AI is weak at architecture decisions — own the high-level design

## Applicable Scenarios

These methods apply to all major AI coding tools (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.). Choose the right tool for your needs.

## Common Mistakes

- Don't expect AI to replace thinking — it's an accelerator, not autopilot
- Standards must adapt to project type — there is no universal config
- Always review AI-generated code — it may have hidden issues
- Update your standards regularly — AI tools evolve fast

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },
  {
    slug: "general-api-design",
    title: "AI-Assisted API Design Best Practices Guide",
    category: "general",
    description: "Standards, patterns, and practical experience for API design with AI coding tools.",
    icon: "📡",
    tags: ["API", "design", "REST"],
    updatedAt: "2026-05-11",
    content: `# AI-Assisted API Design Best Practices Guide

## RESTful Conventions
- Use plural nouns for resources
- GET must never modify data
- POST creates a resource
- PUT for full replacement, PATCH for partial updates

## Request & Response
- Use a consistent error response format
- All list endpoints must support pagination
- Never pass sensitive fields in the URL
- Version number goes in the URL path

## Security
- All APIs require authentication
- Enforce HTTPS for all endpoints
- Validate all input to prevent injection
- Apply rate limiting to all endpoints

## Documentation
- Use OpenAPI/Swagger
- Auto-generate API documentation
- Write a usage example for every endpoint

## Applicable Scenarios

These methods apply to all major AI coding tools (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.). Choose the right tool for your needs.

## Common Mistakes

- Don't expect AI to replace thinking — it's an accelerator, not autopilot
- Standards must adapt to project type — there is no universal config
- Always review AI-generated code — it may have hidden issues
- Update your standards regularly — AI tools evolve fast

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },


  {
    slug: "cursor-svelte-rules",
    title: "Cursor Svelte Development Coding Standards",
    category: "cursor",
    description: "Coding rules and best practices for Svelte 5 + SvelteKit projects in Cursor.",
    icon: "🧑‍💻",
    tags: ["cursor", "svelte", "frontend"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Svelte Development Coding Standards

## Component Standards
- Use Svelte 5 runes syntax
- Component files use .svelte extension
- Use stores and actions for logic reuse
- Single responsibility per component

## SvelteKit Routing
- Use filesystem-based routing
- Page files go in routes/ directory
- API endpoints use +server.ts
- Layouts use +layout.svelte

## Styling
- Use <style> scoped for component-local styles
- Supports Tailwind CSS
- Global styles go in app.css

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-angular-rules",
    title: "Cursor Angular Development Coding Standards",
    category: "cursor",
    description: "Coding rules for Cursor in Angular 17+ standalone component mode.",
    icon: "🅰️",
    tags: ["cursor", "angular", "frontend"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Angular Development Coding Standards

## Component Standards
- Use standalone components
- Component filenames use .component.ts suffix
- Separate template and style files
- Use OnPush change detection

## Dependency Injection
- Use the inject() function
- Services use providedIn: root
- Avoid writing logic in constructors

## Routes
- Use lazy-loaded routes
- Protect sensitive pages with route guards
- Use ResolveFn to preload data

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-nodejs-rules",
    title: "Cursor Node.js Express Backend Development Rules",
    category: "cursor",
    description: "Coding rules and middleware standards for Node.js + Express projects in Cursor.",
    icon: "🟢",
    tags: ["cursor", "nodejs", "express"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Node.js Express Backend Development Rules

## Project Structure
- Organize files by feature module
- Separate into routes/ controllers/ services/ layers
- Middleware goes in middleware/ directory
- Configuration uses environment variables

## API Design
- Use RESTful route naming conventions
- Validate input with express-validator
- Use unified error handling middleware
- Wrap async routes with asyncHandler

## Security
- Use helmet to set security headers
- Configure CORS with cors middleware
- Apply rate limiting to all endpoints
- Never log sensitive information

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-laravel-rules",
    title: "Cursor Laravel PHP Development Rules",
    category: "cursor",
    description: "MVC architecture and Eloquent ORM standards for Laravel 11 projects in Cursor.",
    icon: "🎯",
    tags: ["cursor", "laravel", "php"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Laravel PHP Development Rules

## MVC Architecture
- Models go in app/Models
- Keep controllers thin, models rich
- Business logic goes in Service classes
- Form validation uses FormRequest

## Eloquent
- Use with() for eager-loading relationships
- Avoid N+1 queries
- Use scopes to define reusable query constraints
- Protect against mass assignment

## API
- Use API Resources to format responses
- Authenticate with Sanctum or Passport
- Version your API routes

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-saas-rules",
    title: "Cursor SaaS Project Development Rules",
    category: "cursor",
    description: "Complete development rules for SaaS startup projects in Cursor, from multi-tenancy to payment integration.",
    icon: "🏢",
    tags: ["cursor", "saas", "startup"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor SaaS Project Development Rules

## Multi-Tenancy
- Isolate data by tenant_id field
- Middleware auto-sets tenant context
- Database per-tenant via separate tables or schemas

## Payment Integration
- Stripe subscription management
- Webhook handling for payment events
- Feature gating by plan tier

## User Management
- Email/password + OAuth login
- Role-based access control (RBAC)
- Invite code registration flow

## DevOps
- Automated database migrations
- CI/CD auto-deployment
- Logging and monitoring alerts

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [Cursor Stripe Payment Integration Rules](/rules/cursor-stripe-rules)
- [Cursor Full-Stack App Development Rules](/rules/cursor-fullstack-app-rules)
- [Cursor MVP Rapid Development Rules](/rules/cursor-mvp-rules)

`,
  },
  {
    slug: "cursor-mvp-rules",
    title: "Cursor MVP Rapid Development Rules",
    category: "cursor",
    description: "Development rules for rapidly building MVPs with Cursor, from prototype to launch.",
    icon: "🚀",
    tags: ["cursor", "mvp", "rapid-development"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# MVP Rapid Development Standards

## Development Strategy
- Start with a monolith for rapid validation
- Choose a tech stack you know well
- Core features first, cut non-essentials ruthlessly
- Use off-the-shelf templates and component libraries

## AI Acceleration
- Use Cursor Agent to generate CRUD operations
- AI generates unit tests
- Auto-generate API documentation
- Rapidly iterate on UI prototypes

## Deployment
- One-click deploy via Vercel / Railway
- Use managed databases to reduce ops overhead
- Monitor with Sentry free tier

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-indie-hacker-rules",
    title: "Cursor Solo Developer Workflow Rules",
    category: "cursor",
    description: "Best workflow and rules for solo developers shipping full-stack projects alone with Cursor.",
    icon: "💻",
    tags: ["cursor", "indie", "solo-dev"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Solo Developer Workflow Rules

## One Person = One Team

- Cursor Agent handles backend code
- Cursor Composer handles frontend UI
- Claude Code handles testing and CI
- AI generates design mockups and copywriting

## Maximize Productivity
- Plan every Monday, ship every day
- Use templates to bootstrap projects fast
- Reuse your own .cursorrules library across projects
- AI handles code review and testing

## Toolchain
- GitHub + Vercel for auto-deployment
- Supabase for backend and database
- Stripe for payments
- Resend for transactional email

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-ai-agent-rules",
    title: "Cursor AI Agent Development Rules",
    category: "cursor",
    description: "Rules and best practices for developing AI Agent applications with Cursor.",
    icon: "🤖",
    tags: ["cursor", "ai-agent", "llm"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor AI Agent Development Rules

## Architecture Design
- Use LangChain / Vercel AI SDK
- Agent tool-calling pattern
- Memory management (short-term + long-term)
- Streaming response handling

## Prompt Management
- Centralize system prompts
- Use a template engine to construct prompts
- Version-control prompt changes
- Establish evaluation metrics

## Security
- Input validation and sanitization
- Scope tool execution permissions tightly
- Apply rate limiting
- Filter sensitive information from output

## Testing
- Simulate user conversation flow
- Test tool-calling correctness
- Cover edge cases thoroughly

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [AI Coding Workflow Patterns & Productivity Guide](/rules/general-ai-workflow)
- [Claude Code Starter Guide: Essential Rules](/rules/claude-code-general)

`,
  },
  {
    slug: "cursor-startup-team-rules",
    title: "Cursor Startup Team Collaboration Rules",
    category: "cursor",
    description: "Team collaboration rules for standardizing Cursor config and AI coding conventions across a startup team.",
    icon: "👥",
    tags: ["cursor", "team", "collaboration"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Startup Team Collaboration Rules

## Unified Configuration
- Project-level .cursorrules shared across the team
- Consistent code style configuration
- Uniform AI behavior standards

## Code Review
- AI auto-reviews PRs
- Human confirms AI suggestions before merge
- Code quality gates enforced by CI

## Knowledge Management
- Team-shared prompt templates
- Document Cursor tips and techniques
- Regular best-practice sharing sessions

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-landing-page-rules",
    title: "Cursor Landing Page Development Rules",
    category: "cursor",
    description: "Rules and best practices for rapidly building landing pages with Cursor.",
    icon: "📄",
    tags: ["cursor", "landing-page", "frontend"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Landing Page Development Standards

## Technology Stack
- Next.js + Tailwind CSS
- Framer Motion for animations
- Mobile-first responsive design
- SEO optimization built in

## Page Structure
- Hero + Features + Testimonials + CTA
- Social proof (user reviews)
- FAQ to address objections
- Footer with all essential links

## Performance
- Use next/image for all images
- Use next/font for typefaces
- Inline critical CSS
- Lazy-load below-the-fold content

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-graphql-rules",
    title: "Cursor GraphQL API Development Rules",
    category: "cursor",
    description: "Coding rules and query optimization best practices for GraphQL API development with Cursor.",
    icon: "◈",
    tags: ["cursor", "graphql", "api"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor GraphQL API Development Rules

## Schema Design
- Use SDL-first approach
- Type names use PascalCase
- Field names use camelCase
- Define Queries and Mutations separately

## Resolvers
- Use DataLoader to eliminate N+1 queries
- Batch and optimize queries
- Return errors in a standard format

## Security
- Enforce depth limits to prevent malicious queries
- Analyze query complexity
- Authenticate via middleware
- Apply field-level authorization

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-redis-rules",
    title: "Cursor Redis Caching Development Rules",
    category: "cursor",
    description: "Coding rules for integrating and using Redis caching in Cursor projects.",
    icon: "⚡",
    tags: ["cursor", "redis", "caching"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Redis Caching Standards

## Caching Strategy
- Guard against cache penetration, breakdown, and avalanche
- Set appropriate TTL values
- Use distributed locks to prevent concurrent writes
- Implement cache warming on startup

## Data Structures
- Strings for simple key-value caching
- Hashes for storing object fields
- Lists for message queues
- Sorted Sets for leaderboards

## Conventions
- Prefix keys with business domain identifiers
- Set expiration times uniformly
- Split large keys to avoid hot-key bottlenecks
- Monitor cache hit rate

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-fullstack-app-rules",
    title: "Cursor Full-Stack Application Development Rules",
    category: "cursor",
    description: "End-to-end coding rules for full-stack application development with Cursor.",
    icon: "⚡",
    tags: ["cursor", "fullstack", "web"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Full-Stack Application Development Rules

## Recommended Tech Stack
- Next.js / Nuxt for the frontend
- Prisma / Drizzle for ORM
- PostgreSQL as the database
- Tailwind CSS for styling

## Development Workflow
- Design the database schema first
- Generate type definitions
- Implement API endpoints
- Develop frontend pages

## Quality Assurance
- E2E test critical user paths
- Unit test core business logic
- Monitor performance budgets
- Run accessibility checks

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "general-rule-generator-workflow",
    title: "AI Rule Generator Development Workflow",
    category: "general",
    description: "Workflow and methodology for auto-generating personalized .cursorrules via structured forms.",
    icon: "🔧",
    tags: ["AI", "generator", "workflow"],
    updatedAt: "2026-05-11",
    content: `# AI Rule Generator Development Workflow

## Rule Template Structure

A good Rule contains:
1. Tech stack declaration (which frameworks and languages the project uses)
2. Coding conventions (naming, indentation, comments)
3. Architecture constraints (component size, layering rules)
4. Security rules (input validation, sensitive data handling)

## Generation Method

Use structured prompts to have AI generate a Rule:

"Generate a .cursorrules for [tech stack], including code style, component standards, and error handling rules."

## Example Prompt

"Generate a .cursorrules for TypeScript + React + Tailwind CSS. Components use functional components and Hooks, styling uses Tailwind utility classes."

## Applicable Scenarios

These methods apply to all major AI coding tools (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.). Choose the right tool for your needs.

## Common Mistakes

- Don't expect AI to replace thinking — it's an accelerator, not autopilot
- Standards must adapt to project type — there is no universal config
- Always review AI-generated code — it may have hidden issues
- Update your standards regularly — AI tools evolve fast

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },


  {
    slug: "cursor-ruby-rails",
    title: "Cursor Ruby on Rails Development Rules",
    category: "cursor",
    description: "Coding rules and best practices for Ruby on Rails 7+ projects in Cursor.",
    icon: "💎",
    tags: ["cursor", "ruby", "rails"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Ruby on Rails Development Rules

## Rails Conventions
- Follow Rails convention over configuration
- Use RESTful resource routing
- Separate Model/View/Controller concerns
- Business logic goes in Service layer

## Code Style
- 2-space indentation
- Methods use snake_case
- Class names use CamelCase
- Constants use SCREAMING_SNAKE_CASE

## Database
- Migrations use the change method
- Define associations and validations in models
- Add indexes to optimize queries
- Use find_each for batch operations

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-swift-ios",
    title: "Cursor iOS Swift Development Rules",
    category: "cursor",
    description: "Coding standards and best practices for Swift + SwiftUI projects in Cursor.",
    icon: "🍎",
    tags: ["cursor", "swift", "ios"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor iOS Swift Development Rules

## Swift Conventions
- Use the latest Swift version
- Follow the Swift API Design Guidelines
- Prefer SwiftUI by default
- Use UIKit only for compatibility scenarios

## Architecture
- Use MVVM architecture
- Service layer handles network requests
- Repository pattern manages data access
- Dependency injection manages services

## SwiftUI
- Use @State/@Binding for local state
- @ObservableObject for observable objects
- Keep views small and focused
- Provide mock data in previews

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-kotlin-android",
    title: "Cursor Kotlin Android Development Rules",
    category: "cursor",
    description: "Coding rules for Android Kotlin + Jetpack Compose projects in Cursor.",
    icon: "🤖",
    tags: ["cursor", "kotlin", "android"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Kotlin Android Development Rules

## Kotlin Conventions
- Use Kotlin 1.9+
- Follow the Kotlin coding conventions
- Use coroutines for async operations
- Use Flow for data streams

## Jetpack Compose
- Use @Composable functions to build UI
- Lift state up to ViewModel
- Manage side effects with SideEffect
- Provide sample data in preview functions

## Architecture
- MVVM + Clean Architecture
- Repository manages data sources
- Hilt for dependency injection
- Navigation Compose for routing

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-csharp-dotnet",
    title: "Cursor C# .NET Development Rules",
    category: "cursor",
    description: "Coding rules and architecture standards for .NET 8+ projects in Cursor.",
    icon: "🔷",
    tags: ["cursor", "csharp", "dotnet"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor C# .NET Development Rules

## Code Style
- Follow .NET coding conventions
- Use 4-space indentation
- Classes and methods use PascalCase
- Parameters and fields use camelCase

## ASP.NET Core
- Use Minimal APIs or Controllers
- Register services via dependency injection
- Entity Framework Core for data management
- Serilog for structured logging

## Architecture
- Clean Architecture layering
- MediatR for command/query separation
- FluentValidation for input validation
- AutoMapper for object mapping

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-astro-rules",
    title: "Cursor Astro Static Site Development Rules",
    category: "cursor",
    description: "Coding rules and island architecture best practices for Astro framework projects in Cursor.",
    icon: "🚀",
    tags: ["cursor", "astro", "frontend"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Astro Static Site Standards

## Astro Conventions
- Use .astro component syntax
- Manage Markdown articles via content collections
- Island architecture for interactive components
- Use View Transitions for routing

## Content Management
- Manage blog content with Markdown/MDX
- Validate frontmatter with collection schemas
- Auto-generate table of contents and navigation

## Performance
- Statically generate all pages
- Use Astro:image for images
- Load island components on demand

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-remix-rules",
    title: "Cursor Remix Full-Stack Development Rules",
    category: "cursor",
    description: "Coding rules and best practices for Remix full-stack framework projects in Cursor.",
    icon: "🎸",
    tags: ["cursor", "remix", "react"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Remix Full-Stack Development Rules

## Routing Standards
- Use nested routes and layouts
- loader loads server-side data
- action handles form submissions
- useFetcher enables progressive enhancement

## Data Management
- loader/action access the database directly
- Use Session to manage user state
- Cookie for client preference management

## Deployment
- Target Cloudflare Pages
- Or deploy to Fly.io / Vercel
- Manage environment variables per deployment target

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-tauri-rules",
    title: "Cursor Tauri Desktop App Development Rules",
    category: "cursor",
    description: "Coding standards for Cursor with Tauri desktop app projects covering Rust backend and frontend.",
    icon: "🖥️",
    tags: ["cursor", "tauri", "desktop"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Tauri Desktop App Standards

## Project Structure
- Frontend uses React/Vue/Svelte
- Rust backend lives in src-tauri/
- Commands are defined in Rust
- Events bridge frontend and backend

## Rust Backend
- Use tauri::command to export functions
- Return Result for error handling
- Use safe APIs for filesystem operations
- SQLite for the database

## Frontend
- Call @tauri-apps/api from the JavaScript side
- Window management via Webview API
- System tray and menu configuration

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-supabase-rules",
    title: "Cursor Supabase Backend Development Rules",
    category: "cursor",
    description: "Database strategies and row-level security rules for Supabase BaaS projects in Cursor.",
    icon: "⚡",
    tags: ["cursor", "supabase", "database"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Supabase Backend Development Rules

## Database Design
- Leverage native PostgreSQL features
- Row-Level Security (RLS) policies
- Enable Realtime for live subscriptions
- Manage file uploads with Storage buckets

## Authentication
- Built-in email/OAuth authentication
- Custom JWT claims
- User metadata management
- Role-based access control

## API
- Auto-generated RESTful API
- Use PostgREST for filtered queries
- Edge Functions for custom logic
- Database function calls

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-stripe-rules",
    title: "Cursor Stripe Payment Integration Rules",
    category: "cursor",
    description: "Checkout flow and Webhook standards for Stripe payment integration projects in Cursor.",
    icon: "💳",
    tags: ["cursor", "stripe", "payment"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Stripe Payment Integration Rules

## Checkout Flow
- Use Stripe Checkout or Payment Element
- Create PaymentIntent to handle payments
- Manage subscriptions with Stripe Billing
- Handle async events via Webhooks

## Webhook Security
- Verify Stripe signatures on every event
- Use idempotency keys to prevent duplicate processing
- Process time-consuming tasks asynchronously
- Log every event for audit trail

## Data Model
- Customer object maps to a user
- Subscription maps to a membership plan
- Product/Price manages pricing tiers
- Invoice records billing history

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "claude-code-debugging",
    title: "Claude Code Debugging & Fix Prompts",
    category: "claude",
    description: "Prompt templates and debugging workflow for efficient code debugging with Claude Code.",
    icon: "🐛",
    tags: ["claude-code", "debugging", "prompt"],
    updatedAt: "2026-05-11",
    content: `# Claude Code Debugging & Fix Prompts

## Error Analysis
"Analyze this error stack trace: paste error log here. What caused this error? How do I fix it?"

## Locate Bug
"In src/components/UserList.tsx, the list renders blank on the second render. Inspect the code, identify the root cause, and provide a fix."

## Performance Analysis
"Analyze the performance bottleneck in this function (paste code). Provide an optimized version and explain why it is faster."

## Security Audit
"Review this user input handling code. Identify security vulnerabilities and provide fixes. Focus on XSS and SQL injection."

## Usage Scenarios

Before starting a Claude Code session, paste the prompt template and replace placeholders with your project details. Claude Code generates code matching the template precision.

## Common Mistakes

- Don't ask too much at once — break large tasks into small steps
- Provide enough file path context to help Claude locate the right files
- Review every line of AI-generated code — don't trust blindly
`,
  },
  {
    slug: "general-code-security",
    title: "AI Coding Security Standards Guide",
    category: "general",
    description: "Secure coding conventions when using AI coding tools, to prevent introducing vulnerabilities.",
    icon: "🔒",
    tags: ["AI", "security", "best-practices"],
    updatedAt: "2026-05-11",
    content: `# AI Coding Security Standards Guide

## Input Validation
- Never trust user input — validate everything at the boundary
- Use whitelist-based validation
- Use parameterized SQL queries to prevent injection
- Escape output to prevent XSS

## Authentication & Authorization
- Hash passwords with bcrypt
- Set reasonable JWT token expiration times
- Inject API keys via environment variables only
- Apply the principle of least privilege

## AI-Generated Code Review
- Inspect all AI-generated SQL queries for injection paths
- Verify the integrity of authentication logic
- Audit file path concatenation for traversal vulnerabilities
- Never use AI-generated cryptographic code — roll it by hand or use a vetted library

## Applicable Scenarios

These methods apply to all major AI coding tools (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.). Choose the right tool for your needs.

## Common Mistakes

- Don't expect AI to replace thinking — it's an accelerator, not autopilot
- Standards must adapt to project type — there is no universal config
- Always review AI-generated code — it may have hidden issues
- Update your standards regularly — AI tools evolve fast

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },
  {
    slug: "general-responsive-design",
    title: "AI 辅助响应式设计规则",
    category: "general",
    description: "使用 AI 编程工具实现响应式设计的编码规范和最佳实践。",
    icon: "📱",
    tags: ["AI", "响应式", "CSS"],
    updatedAt: "2026-05-11",
    content: `# AI 辅助响应式设计规则

## 设计原则
- Mobile First 优先开发
- 使用相对单位 rem/em/%
- 断点使用 Tailwind 默认值
- 图片设置 max-width: 100%

## 布局
- CSS Grid 用于整体布局
- Flexbox 用于组件内排列
- Container Queries 组件级响应
- 间距使用间距系统

## AI Prompt
"创建响应式导航栏：移动端汉堡菜单，平板展开图标+文字，桌面完整菜单。"

"设计卡片网格布局，自动适应 1/2/3/4 列，图片保持比例。"

## Applicable Scenarios

These methods apply to all major AI coding tools (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.). Choose the right tool for your needs.

## Common Mistakes

- Don't expect AI to replace thinking — it's an accelerator, not autopilot
- Standards must adapt to project type — there is no universal config
- Always review AI-generated code — it may have hidden issues
- Update your standards regularly — AI tools evolve fast

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },


  {
    slug: "cursor-nuxt-rules",
    title: "Cursor Nuxt 3 全栈开发规则",
    category: "cursor",
    description: "Nuxt 3 + Vue 项目中使用 Cursor 的全栈开发编码规则。",
    icon: "🍃",
    tags: ["cursor", "nuxt", "vue"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Nuxt 3 全栈开发规则

## 目录结构
- pages/ 文件路由
- composables/ 共享逻辑
- server/ API 和中间件
- middleware/ 路由守卫

## Data Fetching
- useFetch 获取服务端数据
- useState 共享状态
- useAsyncData 异步数据
- Server Routes API 端点

## 模块
- Pinia State Management
- Tailwind CSS 样式
- Nuxt Image 图片优化
- Nuxt SEO 元数据

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "cursor-playwright-rules",
    title: "Cursor Playwright E2E 测试规则",
    category: "cursor",
    description: "使用 Cursor 编写 Playwright 端到端测试的编码规则和最佳实践。",
    icon: "🎭",
    tags: ["cursor", "playwright", "e2e"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Playwright E2E 测试规则

## Testing结构
- 测试文件放在 e2e/ 目录
- Page Object 模式管理页面
- describe 组织测试套件
- Each test must be independently runnable

## 选择器
- 优先使用 role 和 text
- 避免 CSS 类名选择器
- data-testid 用于复杂组件
- 等待元素可见后操作

## 断言
- 使用 soft assert 收集错误
- Capture screenshots for failure analysis
- 网络请求使用 route 拦截
- 视觉回归使用 screenshot

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines
`,
  },
  {
    slug: "general-monorepo-rules",
    title: "AI Monorepo 多包管理开发规则",
    category: "general",
    description: "使用 AI 编程工具管理 Monorepo 项目的编码规则和包管理最佳实践。",
    icon: "📦",
    tags: ["AI", "monorepo", "turborepo"],
    updatedAt: "2026-05-11",
    content: `# AI Monorepo 多包管理开发规则

## 工具选择
- Turborepo 构建编排
- pnpm workspace 包管理
- Changesets 版本和发版
- ESLint + Prettier 统一配置

## Project Structure
- packages/ 公共包
- apps/ 应用入口
- tools/ 构建工具
- 共享 tsconfig 配置

## AI 协作
- AI 理解包依赖关系
- 跨包重构自动更新引用
- 统一代码风格配置
- 自动生成 Changelog

## Applicable Scenarios

These methods apply to all major AI coding tools (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.). Choose the right tool for your needs.

## Common Mistakes

- Don't expect AI to replace thinking — it's an accelerator, not autopilot
- Standards must adapt to project type — there is no universal config
- Always review AI-generated code — it may have hidden issues
- Update your standards regularly — AI tools evolve fast

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },
  {
    slug: "general-deployment-rules",
    title: "AI 部署运维 CI/CD 指南",
    category: "general",
    description: "使用 AI 编程工具配置 CI/CD 流水线和自动化部署的规则。",
    icon: "🚢",
    tags: ["AI", "deploy", "cicd"],
    updatedAt: "2026-05-11",
    content: `# AI 部署运维 CI/CD 指南

## CI 配置
- GitHub Actions 自动化
- lint + test + build 流水线
- 预览部署每个 PR
- 自动生成 Release Notes

## Docker
- 多阶段构建优化
- 使用 .dockerignore
- 安全扫描镜像
- 标签管理版本

## 监控
- 健康检查端点
- 错误追踪 Sentry
- 性能监控
- 日志聚合和告警

## Applicable Scenarios

These methods apply to all major AI coding tools (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.). Choose the right tool for your needs.

## Common Mistakes

- Don't expect AI to replace thinking — it's an accelerator, not autopilot
- Standards must adapt to project type — there is no universal config
- Always review AI-generated code — it may have hidden issues
- Update your standards regularly — AI tools evolve fast

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },
  {
    slug: "general-testing-strategy",
    title: "AI 辅助测试策略完整指南",
    category: "general",
    description: "测试金字塔策略和 AI 辅助生成测试的最佳实践。",
    icon: "🧪",
    tags: ["AI", "test", "strategy"],
    updatedAt: "2026-05-11",
    content: `# AI 辅助测试策略完整指南

## Testing金字塔
- 单元测试占 70%（快速、隔离）
- Integration tests 20% (API, database)
- E2E tests 10% (critical paths)

## AI in Testing
- 根据代码自动生成单元测试
- 生成 mock 数据和 fixture
- 分析覆盖率补充测试
- Auto-fix failing tests

## Testing Conventions
- AAA pattern (Arrange-Act-Assert)
- Use descriptive test names
- One behavior per test case
- 边界情况优先覆盖

## Applicable Scenarios

These methods apply to all major AI coding tools (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.). Choose the right tool for your needs.

## Common Mistakes

- Don't expect AI to replace thinking — it's an accelerator, not autopilot
- Standards must adapt to project type — there is no universal config
- Always review AI-generated code — it may have hidden issues
- Update your standards regularly — AI tools evolve fast

## Usage Scenarios

Save this content directly to your project. Adjust tech stack names and versions as needed. Combine with related standards for best results.

## Common Mistakes

- Copying rules without adjusting for your project, leading to inconsistent AI behavior
- Standards don't match actual project, AI output diverges from codebase structure
- Not updating standards as the project evolves
`,
  },
];
