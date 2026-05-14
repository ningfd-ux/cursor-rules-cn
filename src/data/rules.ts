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
- 使用 clippy 保持代码质量

## 所有权与借用
- 优先使用引用而不是所有权转移
- 生命周期标注尽可能让编译器推断
- 使用 Rc/Arc 管理共享所有权
- RefCell 只用于内部可变性

## Error Handling
- 使用 thiserror 定义错误类型
- 使用 anyhow 处理可恢复错误
- 避免 unwrap/expect，使用 ? 运算符
- 为库代码提供有意义的错误信息

## 异步
- 使用 tokio 作为异步运行时
- async fn 作为默认异步接口
- 避免阻塞线程池中的异步任务

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
    title: "Cursor Java 开发编码规范规则",
    category: "cursor",
    description: "Java 项目中使用 Cursor 进行开发的编码规范和 Spring Boot 最佳实践。",
    icon: "☕",
    tags: ["cursor", "java", "spring"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Java 开发编码规范规则

## Code Style
- 遵循 Java 官方编码规范
- Use 4-space indentation
- 类名使用 PascalCase
- 方法名和变量使用 camelCase

## Project Structure
- 按功能模块分包
- Controller/Service/Repository 分层
- DTO 用于 API 数据传输
- 常量使用枚举或常量类

## Spring Boot
- 使用构造函数注入
- 事务注解放在 Service 层
- 配置使用 application.yml
- 统一异常处理使用 @ControllerAdvice

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
    title: "Cursor Flutter 移动端开发规则",
    category: "cursor",
    description: "Flutter/Dart 项目中使用 Cursor 的编码规则和最佳实践。",
    icon: "📱",
    tags: ["cursor", "flutter", "dart"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Flutter 移动端开发规则

## Dart 规范
- 遵循 effective-dart 指南
- 使用 dart format 格式化
- 类型标注优先于 var
- 避免动态类型

## Flutter 组件
- 使用 StatelessWidget 优先
- StatefulWidget 只在必要时使用
- 组件拆分保持单一职责
- 使用 const 构造函数优化性能

## State Management
- 小项目使用 setState
- 中大型项目使用 Riverpod 或 Bloc
- 避免全局状态滥用
- Provider 按模块分层

## Routes
- 使用 GoRouter 声明式路由
- 路由模块按功能拆分
- 深度链接支持

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
    title: "Cursor Tailwind CSS 开发规则",
    category: "cursor",
    description: "使用 Cursor 配合 Tailwind CSS 开发的编码规范和最佳实践。",
    icon: "🎨",
    tags: ["cursor", "tailwind", "css"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Tailwind CSS Standards for AI-Assisted Development

## 使用原则
- 优先使用 Tailwind 工具类
- 自定义样式使用 @apply 指令
- 颜色使用设计系统 token
- 响应式使用断点前缀

## Components样式
- 公共组件提取为可复用类
- 使用 cn() 合并 class 名
- 暗色模式使用 dark: 前缀
- 动画使用 Tailwind 动画类

## Performance
- 避免动态拼接 class
- 使用 PurgeCSS 清除未使用的样式
- 提取公共样式减少重复

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [让 Cursor 更懂 React 的最佳开发规则,](/rules/cursor-react-rules)
- [用 Cursor 开发 Next.js 项目的完整规则,](/rules/cursor-nextjs-rules)
- [Cursor Landing Page 开发规则,](/rules/cursor-landing-page-rules)

`,
  },
  {
    slug: "cursor-prisma-rules",
    title: "Cursor Prisma ORM 数据层开发规则",
    category: "cursor",
    description: "Prisma ORM 项目中使用 Cursor 的数据库模型设计和查询规则。",
    icon: "🗃️",
    tags: ["cursor", "prisma", "database"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Prisma ORM Data Layer Standards

## Schema Design
- 模型名使用 PascalCase 单数
- 字段名使用 camelCase
- 关系使用 @relation 明确注解
- 索引在查询热点字段上添加

## Query Standards
- 使用 select 只查询需要的字段
- 避免 N+1 使用 include 预加载
- 批量操作使用 createMany/updateMany
- 分页使用 cursor-based

## Migration Management
- 每次变更生成新迁移
- 迁移需 Review 后再部署
- 生产环境使用 migrate deploy

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
    title: "Cursor E2E 自动化测试规则",
    category: "cursor",
    description: "用 Cursor 编写 Playwright/Cypress 端到端测试的编码规则。",
    icon: "🎭",
    tags: ["cursor", "e2e", "playwright"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor E2E 自动化测试规则

## 框架选择
- Web 应用使用 Playwright
- 简单场景使用 Cypress
- 统一使用 Page Object 模式

## Testing设计
- Each test must be independently runnable
- 测试数据使用 beforeEach 准备
- 避免测试间依赖
- 关键用户路径优先覆盖

## Assertion Standards
- 使用软断言不中断流程
- 等待元素可见后再操作
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
    title: "Claude Code Next.js 项目开发 Prompt",
    category: "claude",
    description: "用 Claude Code 开发 Next.js App Router 项目的高效 Prompt 模板。",
    icon: "▲",
    tags: ["claude-code", "nextjs", "prompt"],
    updatedAt: "2026-05-11",
    content: `# Claude Code Next.js 项目开发 Prompt

## 创建页面路由
"在 app/(main)/dashboard/ 下创建仪表盘页面，包含数据概览卡片、最近订单表格和销售趋势图表。"

## 添加 Server Action
"在 app/actions/user.ts 中创建用户注册 Server Action，使用 Zod 验证输入，插入数据库后发送欢迎邮件。"

## 实现中间件
"创建 middleware.ts，实现登录保护，未登录用户重定向到 /login，已登录用户才能访问 /dashboard/*。"

## 优化 SEO
"为产品详情页生成动态 metadata 和结构化数据 JSON-LD。

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
    title: "Claude Code 后端 API 开发 Prompt",
    category: "claude",
    description: "用 Claude Code 开发 RESTful 和 GraphQL API 的 Prompt 模板。",
    icon: "🌐",
    tags: ["claude-code", "api", "backend"],
    updatedAt: "2026-05-11",
    content: `# Claude Code 后端 API 开发 Prompt

## 创建 CRUD 接口
"在 app/api/products/ 下创建商品 CRUD 接口，支持分页查询、按分类筛选、价格排序。"

## 身份验证
"实现 JWT 身份验证中间件，包含 token 签发、验证和刷新，过期时间 7 天。"

## 文件上传
"创建文件上传接口，支持图片压缩、格式校验（仅 jpg/png/webp），上传到 S3 并返回 URL。

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
    title: "Copilot React Native 移动端指令",
    category: "copilot",
    description: "GitHub Copilot 在 React Native 项目中的最佳配置和使用规则。",
    icon: "📱",
    tags: ["copilot", "react-native", "mobile"],
    updatedAt: "2026-05-11",
    content: `# Copilot React Native 移动端指令

## Configuration copilot-instructions.md

## Tech Stack
- React Native 0.76+
- TypeScript strict
- Expo SDK 52+
- React Navigation 7

## Coding Standards
- Use functional components + Hooks
- 样式使用 StyleSheet.create
- 屏幕组件放在 screens/ 目录
- 导航配置统一管理

## Common Prompts
- "创建登录页面，包含邮箱密码输入和表单验证"
- "实现底部 Tab 导航和抽屉导航嵌套"
- "添加推送通知处理逻辑"

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
    title: "Copilot Docker 容器化指令",
    category: "copilot",
    description: "GitHub Copilot 辅助 Docker 开发和容器化部署的最佳实践。",
    icon: "🐳",
    tags: ["copilot", "docker", "devops"],
    updatedAt: "2026-05-11",
    content: `# Copilot Docker 容器化指令

## Configuration copilot-instructions.md

## Tech Stack
- Docker / Docker Compose
- 多阶段构建
- Alpine 基础镜像

## Common Prompts
- "为 Node.js 应用生成多阶段构建 Dockerfile"
- "写 docker-compose.yml 包含 PostgreSQL 和 Redis"
- "生成 .dockerignore 排除 node_modules 和 .git"

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
    title: "AI 编程工作流模式与效率指南",
    category: "general",
    description: "适用所有 AI 编程工具的高效开发工作流模式和团队协作指南。",
    icon: "🔄",
    tags: ["AI", "工作流", "效率", "协作"],
    updatedAt: "2026-05-11",
    content: `# AI 编程工作流模式与效率指南

## 单人模式
- 每日开始：让 AI 回顾 TODO 和进度
- 编码前：描述需求让 AI 设计方案
- 编码中：小步提交，每次让 AI Review
- 编码后：AI 生成测试和文档

## 团队模式
- 共享 .cursorrules 项目规则
- 统一 AI 工具版本和配置
- Code Review 结合 AI 审查
- 知识库共享 AI Prompt 模板

## 常见陷阱
- 不要一次性提太多需求
- 不要完全信任 AI 生成的代码
- 不要跳过测试
- AI 不擅长做架构决策

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
    title: "AI 辅助 API 设计最佳实践指南",
    category: "general",
    description: "使用 AI 编程工具进行 API 设计的规范、模式和实战经验。",
    icon: "📡",
    tags: ["API", "设计", "REST"],
    updatedAt: "2026-05-11",
    content: `# AI 辅助 API 设计最佳实践指南

## RESTful 规范
- 资源使用复数名词
- GET 不修改数据
- POST 创建资源
- PUT 全量更新，PATCH 部分更新

## 请求和响应
- 统一错误响应格式
- 列表接口必须分页
- 敏感字段不在 URL 中传递
- 版本号在 URL 路径中

## Security
- 所有 API 需要认证
- HTTPS 强制使用
- 输入校验防注入
- 限制请求频率

## Documentation
- 使用 OpenAPI/Swagger
- 自动生成 API 文档
- 每个端点写示例

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
    title: "Cursor Svelte 开发编码规范规则",
    category: "cursor",
    description: "Svelte 5 + SvelteKit 项目中 Cursor 的编码规则和最佳实践。",
    icon: "🧑‍💻",
    tags: ["cursor", "svelte", "前端"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Svelte 开发编码规范规则

## Component Standards
- 使用 Svelte 5 runes 语法
- 组件文件使用 .svelte 扩展名
- 逻辑复用使用 stores 和 actions
- 每个组件单一职责

## SvelteKit 路由
- 使用 filesystem-based routing
- 页面文件放在 routes/ 目录
- API 端点使用 +server.ts
- 布局使用 +layout.svelte

## Styling
- 使用 <style> 局部作用域
- 支持 Tailwind CSS
- 全局样式放在 app.css

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
    title: "Cursor Angular 开发编码规范规则",
    category: "cursor",
    description: "Angular 17+ 独立组件模式下 Cursor 的编码规则。",
    icon: "🅰️",
    tags: ["cursor", "angular", "前端"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Angular 开发编码规范规则

## Component Standards
- 使用 standalone 组件
- 组件文件名使用 .component.ts
- 模板和样式文件分离
- 使用 OnPush 变更检测

## 依赖注入
- 使用 inject() 函数
- 服务使用 providedIn: root
- 避免在构造函数中写逻辑

## Routes
- 使用懒加载路由
- 路由守卫保护敏感页面
- 使用 ResolveFn 预加载数据

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
    title: "Cursor Node.js Express 后端开发规则",
    category: "cursor",
    description: "Node.js + Express 项目中 Cursor 的编码规则和中间件规范。",
    icon: "🟢",
    tags: ["cursor", "nodejs", "express"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Node.js Express 后端开发规则

## Project Structure
- 按功能模块组织文件
- routes/ controllers/ services/ 分层
- 中间件放在 middleware/ 目录
- 配置使用环境变量

## API 设计
- RESTful 路由命名
- 使用 express-validator 校验输入
- 统一错误处理中间件
- 使用 asyncHandler 包装异步路由

## Security
- 使用 helmet 增强安全头
- 使用 cors 配置跨域
- 请求频率限制
- 敏感信息不在日志中输出

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
    title: "Cursor Laravel PHP 开发规则",
    category: "cursor",
    description: "Laravel 11 项目中使用 Cursor 的 MVC 架构和 Eloquent 规范。",
    icon: "🎯",
    tags: ["cursor", "laravel", "php"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Laravel PHP 开发规则

## MVC 架构
- 模型放在 app/Models
- 控制器瘦、模型胖
- 业务逻辑放在 Service 类
- 表单验证使用 FormRequest

## Eloquent
- 使用 with() 预加载关联
- 避免 N+1 查询
- 使用 scope 定义查询范围
- 批量赋值保护

## API
- 使用 API Resource 格式化响应
- 使用 Sanctum 或 Passport 认证
- 版本化 API 路由

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
    title: "Cursor SaaS 项目开发规则",
    category: "cursor",
    description: "SaaS 创业项目使用 Cursor 的完整开发规则，从多租户到支付集成。",
    icon: "🏢",
    tags: ["cursor", "saas", "startup"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor SaaS 项目开发规则

## 多租户
- 使用 tenant_id 字段隔离数据
- 中间件自动设置租户上下文
- 数据库按租户分表或 schema

## 支付集成
- Stripe 订阅管理
- Webhook 处理支付事件
- 按计划限制功能访问

## 用户管理
- 邮箱密码 + OAuth 登录
- 角色权限控制 RBAC
- 邀请码注册机制

## DevOps
- 数据库迁移自动化
- CI/CD 自动部署
- 日志和监控告警

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [Cursor Stripe 支付集成规则,](/rules/cursor-stripe-rules)
- [Cursor 全栈应用开发规则,](/rules/cursor-fullstack-app-rules)
- [Cursor MVP 快速开发规则,](/rules/cursor-mvp-rules)

`,
  },
  {
    slug: "cursor-mvp-rules",
    title: "Cursor MVP 快速开发规则",
    category: "cursor",
    description: "用 Cursor 快速构建 MVP 的开发规则，从原型到上线。",
    icon: "🚀",
    tags: ["cursor", "mvp", "快速开发"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# MVP Rapid Development Standards

## 开发策略
- 先用单体架构快速验证
- 选择熟悉的技术栈
- 核心功能优先，非核心砍掉
- 使用现成模版和组件库

## AI 加速
- 用 Cursor Agent 生成 CRUD
- AI 生成单元测试
- 自动编写 API 文档
- 快速迭代 UI 原型

## Deployment
- Vercel / Railway 一键部署
- 使用托管数据库减少运维
- 监控使用 Sentry 免费版

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
    title: "Cursor 独立开发者工作流规则",
    category: "cursor",
    description: "独立开发者使用 Cursor 一人搞定全栈开发的最佳工作流和规则。",
    icon: "💻",
    tags: ["cursor", "indie", "独立开发"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor 独立开发者工作流规则

## 一个人 = 一个团队

- Cursor Agent 做后端代码
- Cursor Composer 做前端 UI
- Claude Code 做测试和 CI
- AI 生成设计稿和文案

## 效率最大化
- 每周一规划，每天发布
- 使用模板快速启动项目
- 复用自己的 .cursorrules 库
- AI 做代码审查和测试

## 工具链
- GitHub + Vercel 自动部署
- Supabase 做后端和数据库
- Stripe 做支付
- Resend 做邮件

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
    title: "Cursor AI Agent 开发规则",
    category: "cursor",
    description: "使用 Cursor 开发 AI Agent 应用的规则和最佳实践。",
    icon: "🤖",
    tags: ["cursor", "ai-agent", "llm"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor AI Agent 开发规则

## Architecture设计
- 使用 LangChain / Vercel AI SDK
- Agent 工具调用模式
- 记忆管理（短期 + 长期）
- 流式响应处理

## Prompt 管理
- 系统提示词集中管理
- 使用模板引擎构建 prompt
- 版本控制提示词变更
- 效果评估机制

## Security
- 输入验证和清理
- 限制工具执行权限
- 速率限制
- 敏感信息过滤

## Testing
- 模拟用户对话测试
- 工具调用正确性测试
- 边缘情况覆盖

## Usage Scenarios

Save as .cursor/rules/*.mdc or AGENTS.md. The AI coding tool loads these conventions automatically for every session. Ideal for team-wide consistency and onboarding.

## Common Mistakes

- Don't write business-specific logic in standards — keep conventions universal
- Don't change standards too frequently — version-control them to maintain consistent AI behavior
- Too many rules degrade AI output quality — target 30-50 well-chosen lines


## Related Standards

- [AI 编程工作流模式与效率指南,](/rules/general-ai-workflow)
- [Claude Code 入门必读的通用规则,](/rules/claude-code-general)

`,
  },
  {
    slug: "cursor-startup-team-rules",
    title: "Cursor 创业团队协作规则",
    category: "cursor",
    description: "创业团队统一 Cursor 配置和 AI 编码规范的团队协作规则。",
    icon: "👥",
    tags: ["cursor", "team", "协作"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor 创业团队协作规则

## 统一配置
- 项目级 .cursorrules 团队共享
- 一致的代码风格配置
- 统一的 AI 行为规范

## Code Review
- AI 自动审查 PR
- 人工确认 AI 建议
- 代码质量门禁

## 知识管理
- 团队共享 Prompt 模板
- Cursor 技巧文档化
- 定期分享最佳实践

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
    title: "Cursor Landing Page 开发规则",
    category: "cursor",
    description: "用 Cursor 快速构建落地页的规则和最佳实践。",
    icon: "📄",
    tags: ["cursor", "landing-page", "前端"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Landing Page Development Standards

## 技术选型
- Next.js + Tailwind CSS
- Framer Motion 动画
- 响应式设计优先
- SEO 优化内置

## 页面结构
- Hero + 特性 + 案例 + CTA
- 社交证明（用户评价）
- FAQ 解答疑虑
- 页脚含所有链接

## Performance
- Use next/image for images
- 字体使用 next/font
- 关键 CSS 内联
- 延迟加载非首屏内容

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
    title: "Cursor GraphQL API 开发规则",
    category: "cursor",
    description: "使用 Cursor 开发 GraphQL API 的编码规则和查询优化最佳实践。",
    icon: "◈",
    tags: ["cursor", "graphql", "api"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor GraphQL API 开发规则

## Schema Design
- 使用 SDL 优先方式
- 类型命名使用 PascalCase
- 字段命名使用 camelCase
- Query 和 Mutation 分开定义

## 解析器
- 使用 DataLoader 解决 N+1
- 批量查询优化
- 错误处理返回标准格式

## Security
- 深度限制防止恶意查询
- 复杂度分析
- 认证中间件
- 字段级别权限

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
    title: "Cursor Redis 缓存开发规则",
    category: "cursor",
    description: "在 Cursor 项目中集成和使用 Redis 缓存的编码规则。",
    icon: "⚡",
    tags: ["cursor", "redis", "缓存"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Redis Caching Standards

## 缓存策略
- 缓存穿透、击穿、雪崩防护
- 合理设置 TTL
- 使用分布式锁防并发
- 缓存预热机制

## 数据结构
- 字符串用于简单缓存
- Hash 存储对象字段
- List 做消息队列
- Sorted Set 做排行榜

## 规范
- Key 命名使用业务前缀
- 过期时间统一设置
- 大 Key 拆分
- 监控缓存命中率

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
    title: "Cursor 全栈应用开发规则",
    category: "cursor",
    description: "使用 Cursor 进行全栈应用开发的端到端编码规则。",
    icon: "⚡",
    tags: ["cursor", "fullstack", "web"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor 全栈应用开发规则

## Tech Stack推荐
- Next.js / Nuxt 做前端
- Prisma / Drizzle 做 ORM
- PostgreSQL 做数据库
- Tailwind CSS 做样式

## Development Workflow
- 先设计数据库 Schema
- 生成类型定义
- 实现 API 接口
- 开发前端页面

## 质量保证
- E2E 测试关键路径
- 单元测试核心逻辑
- 性能预算监控
- 可访问性检查

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
    title: "AI Rule Generator 开发工作流",
    category: "general",
    description: "通过结构化表单自动生成个性化 .cursorrules 的工作流和方法。",
    icon: "🔧",
    tags: ["AI", "generator", "工作流"],
    updatedAt: "2026-05-11",
    content: `# AI Rule Generator 开发工作流

## 规则模板结构

一个好的 Rule 包含：
1. 技术栈声明（项目使用什么框架和语言）
2. 编码规范（命名、缩进、注释）
3. 架构约束（组件大小、分层规则）
4. 安全规则（输入校验、敏感信息）

## 生成方法

使用结构化提示词让 AI 生成 Rule：

"生成一个 [技术栈] 的 .cursorrules，包含代码风格、组件规范和错误处理规则。"

## 示例 Prompt

"生成一个 TypeScript + React + Tailwind CSS 的 .cursorrules，组件使用函数组件和 Hooks，样式使用 Tailwind 类。"

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
    title: "Cursor Ruby on Rails 开发规则",
    category: "cursor",
    description: "Ruby on Rails 7+ 项目中使用 Cursor 的编码规则和最佳实践。",
    icon: "💎",
    tags: ["cursor", "ruby", "rails"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Ruby on Rails 开发规则

## Rails 规范
- 遵循 Rails 约定优于配置
- 使用 RESTful 资源路由
- Model/View/Controller 分离
- 业务逻辑放在 Service 层

## Code Style
- 使用 2 空格缩进
- 方法使用 snake_case
- 类名使用 CamelCase
- 常量使用 SCREAMING_SNAKE_CASE

## 数据库
- 迁移使用 change 方法
- 模型中定义关联和验证
- 使用索引优化查询
- 批量操作使用 find_each

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
    title: "Cursor iOS Swift 开发规则",
    category: "cursor",
    description: "Swift + SwiftUI 项目中 Cursor 的编码规范和最佳实践。",
    icon: "🍎",
    tags: ["cursor", "swift", "ios"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor iOS Swift 开发规则

## Swift 规范
- 使用 Swift 最新版本
- 遵循 Swift API 设计指南
- 使用 SwiftUI 优先
- UIKit 用于兼容性场景

## Architecture
- 使用 MVVM 架构
- Service 层处理网络请求
- Repository 模式管理数据
- 依赖注入管理服务

## SwiftUI
- 使用 @State/@Binding 管理局部状态
- @ObservableObject 管理可观察对象
- 视图拆分保持小型化
- 预览提供 mock 数据

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
    title: "Cursor Kotlin Android 开发规则",
    category: "cursor",
    description: "Android Kotlin + Jetpack Compose 项目中 Cursor 的编码规则。",
    icon: "🤖",
    tags: ["cursor", "kotlin", "android"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Kotlin Android 开发规则

## Kotlin 规范
- 使用 Kotlin 1.9+
- 遵循 Kotlin 编码规范
- 使用 coroutines 处理异步
- Flow 用于数据流

## Jetpack Compose
- 使用 @Composable 函数构建 UI
- 状态提升至 ViewModel
- SideEffect 管理副作用
- 预览函数提供示例数据

## Architecture
- MVVM + Clean Architecture
- Repository 管理数据源
- Hilt 依赖注入
- Navigation Compose 路由

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
    title: "Cursor C# .NET 开发规则",
    category: "cursor",
    description: ".NET 8+ 项目中使用 Cursor 的编码规则和架构规范。",
    icon: "🔷",
    tags: ["cursor", "csharp", "dotnet"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor C# .NET 开发规则

## Code Style
- 遵循 .NET 编码规范
- Use 4-space indentation
- 类和方法使用 PascalCase
- 参数和字段使用 camelCase

## ASP.NET Core
- 使用最小 API 或控制器
- 依赖注入注册服务
- Entity Framework Core 管理数据
- Serilog 结构化日志

## Architecture
- Clean Architecture 分层
- MediatR 处理命令查询
- FluentValidation 输入校验
- AutoMapper 对象映射

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
    title: "Cursor Astro 静态站点开发规则",
    category: "cursor",
    description: "Astro 框架项目中 Cursor 的编码规则和岛屿架构最佳实践。",
    icon: "🚀",
    tags: ["cursor", "astro", "前端"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Astro Static Site Standards

## Astro 规范
- 使用 .astro 组件语法
- 内容集合管理 Markdown 文章
- 岛屿架构交互组件
- 使用 View Transitions 路由

## 内容管理
- Markdown/MDX 管理博客内容
- 集合 schema 验证 frontmatter
- 自动生成目录和导航

## Performance
- 静态生成所有页面
- 图片使用 Astro:image
- 按需加载岛屿组件

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
    title: "Cursor Remix 全栈开发规则",
    category: "cursor",
    description: "Remix 全栈框架项目中使用 Cursor 的编码规则和最佳实践。",
    icon: "🎸",
    tags: ["cursor", "remix", "react"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Remix 全栈开发规则

## Routing Standards
- 使用嵌套路由和布局
- loader 加载服务端数据
- action 处理表单提交
- useFetcher 实现渐进增强

## 数据管理
- loader/action 直接访问数据库
- 使用 Session 管理用户状态
- Cookie 管理客户端偏好

## Deployment
- 适配 Cloudflare Pages
- 或部署到 Fly.io / Vercel
- 环境变量管理配置

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
    title: "Cursor Tauri 桌面应用开发规则",
    category: "cursor",
    description: "Tauri 桌面应用项目中 Cursor 的 Rust 后端和前端编码规范。",
    icon: "🖥️",
    tags: ["cursor", "tauri", "desktop"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Tauri Desktop App Standards

## Project Structure
- 前端使用 React/Vue/Svelte
- Rust 后端在 src-tauri/
- 命令在 Rust 中定义
- 事件在前后端间传递

## Rust 后端
- 使用 tauri::command 导出函数
- 错误处理返回 Result
- 文件系统操作使用安全 API
- 数据库使用 SQLite

## 前端
- 调用 @tauri-apps/api
- 窗口管理使用 Webview API
- 系统托盘和菜单配置

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
    title: "Cursor Supabase 后端开发规则",
    category: "cursor",
    description: "Supabase BaaS 项目中使用 Cursor 的数据库策略和行级安全规则。",
    icon: "⚡",
    tags: ["cursor", "supabase", "database"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Supabase 后端开发规则

## 数据库设计
- 使用 PostgreSQL 原生特性
- 行级安全 RLS 策略
- 实时订阅启用 Realtime
- 存储桶管理文件上传

## 认证
- 内置邮箱/OAuth 认证
- 自定义 JWT 声明
- 用户元数据管理
- 角色权限控制

## API
- 自动生成 RESTful API
- 使用 PostgREST 过滤查询
- Edge Functions 自定义逻辑
- 数据库函数调用

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
    title: "Cursor Stripe 支付集成规则",
    category: "cursor",
    description: "Stripe 支付集成项目中使用 Cursor 的结算流程和 Webhook 规范。",
    icon: "💳",
    tags: ["cursor", "stripe", "payment"],
    updatedAt: "2026-05-11",
    appliesTo: "Cursor 0.40+",
    content: `# Cursor Stripe 支付集成规则

## 结账流程
- 使用 Stripe Checkout 或 Payment Element
- 创建 PaymentIntent 处理支付
- 订阅管理使用 Stripe Billing
- Webhook 处理异步事件

## Webhook 安全
- 验证 Stripe 签名
- 幂等键防止重复处理
- 异步处理耗时任务
- 日志记录所有事件

## 数据模型
- Customer 对象对应用户
- Subscription 映射会员计划
- Product/Price 管理定价
- Invoice 记录账单

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
    title: "Claude Code 调试修复 Prompt",
    category: "claude",
    description: "用 Claude Code 高效调试代码的 Prompt 模板和调试工作流。",
    icon: "🐛",
    tags: ["claude-code", "调试", "prompt"],
    updatedAt: "2026-05-11",
    content: `# Claude Code 调试修复 Prompt

## 分析错误
"分析这个错误堆栈：粘贴错误日志。导致这个错误的原因是什么？如何修复？"

## 定位 Bug
"在 src/components/UserList.tsx 中，列表在第二次渲染时显示空白。检查代码找出原因并提供修复。"

## Performance分析
"分析这个函数（粘贴代码）的性能瓶颈，提供优化方案并解释为什么新方案更快。"

## Security审计
"审查这段用户输入处理代码，找出安全漏洞并提供修复方案。重点关注 XSS 和 SQL 注入。"

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
    title: "AI 编程安全规范指南",
    category: "general",
    description: "使用 AI 编程工具时的安全编码规范，防止引入漏洞。",
    icon: "🔒",
    tags: ["AI", "安全", "最佳实践"],
    updatedAt: "2026-05-11",
    content: `# AI 编程安全规范指南

## 输入验证
- 永远不要信任用户输入
- 使用白名单校验
- SQL 参数化查询防注入
- XSS 防护使用转义

## Authentication & Authorization
- 密码使用 bcrypt 哈希
- JWT 令牌设置合理过期时间
- API Key 通过环境变量注入
- 最小权限原则

## AI 生成代码审查
- 检查 AI 生成的 SQL 查询
- 验证认证逻辑完整性
- 审计文件路径拼接
- 不使用 AI 生成的密码学代码

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
- 集成测试占 20%（API、数据库）
- E2E 测试占 10%（关键路径）

## AI 在测试中的应用
- 根据代码自动生成单元测试
- 生成 mock 数据和 fixture
- 分析覆盖率补充测试
- 自动修复失败的测试

## Testing规范
- AAA pattern (Arrange-Act-Assert)
- Use descriptive test names
- 一个测试一个行为
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
