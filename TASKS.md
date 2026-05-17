# TASKS - CursorRules.fun Phase 1: Funnel Conversion

## Context
CursorRules.fun is being converted from a content site to a funnel for RepoRules.dev. All changes are in C:\Users\P1\cursor-rules-cn.

## Step 1 - Hero + CTA (src/app/page.tsx)
- Change H1 to: "Generate AI-Native Repository Rules"
- Change subtitle to: "Generate Cursor Project Rules (.mdc), AGENTS.md, CLAUDE.md and repository standards automatically."
- Primary CTA: text="Generate Rules on RepoRules.dev" href="https://reporules.dev"
- Secondary CTA: text="See Real Examples" href="/examples"
- Bottom CTA: text="Generate Repository Rules" href="https://reporules.dev"
- DELETE sections: Supported Stacks, Why Our Generator Is Different, Problems We Prevent, Compare
- KEEP: Hero, How It Works, Bottom CTA

## Step 2 - Add .mdc section (src/app/page.tsx, after Hero, before How It Works)
Title "Cursor Now Uses Project Rules (.mdc)" + link "Learn How to Migrate" to /migrate-to-mdc

## Step 3 - Add Without/With Rules section (src/app/page.tsx)
Title "What Happens Without Repository Rules". Two-column grid: problems vs benefits.

## Step 4 - Nav (src/components/Header.tsx)
- Remove Frameworks link. Remove Compare link.
- Right button: "RepoRules.dev" -> https://reporules.dev

## Step 5 - Footer (src/components/Footer.tsx)
Add: "CursorRules.fun is a discovery site for AI repository workflows."
Add: Powered by RepoRules.dev (link to https://reporules.dev)

## Step 6 - Banner (src/components/Banner.tsx)
Text: "Generate modern Cursor Project Rules (.mdc) automatically on RepoRules.dev" -> https://reporules.dev

## Step 7 - CTA on rule pages (src/app/rules/[slug]/page.tsx)
Before <BackToTop />, add legacy notice with link to https://reporules.dev

## Step 8 - Create src/app/migrate-to-mdc/page.tsx
SEO page: "How to Migrate from .cursorrules to .cursor/rules". Bottom CTA to https://reporules.dev.

## Step 9 - Create src/app/agents-md-guide/page.tsx
SEO page: "How AGENTS.md Works in AI Coding Repositories". Bottom CTA to https://reporules.dev.

## Step 10 - Create src/app/repository-memory/page.tsx
SEO page: "Repository Memory for AI Coding Agents". Bottom CTA to https://reporules.dev.

## Step 11 - Build + Push
npm run build
git add -A && git commit -m "cursorrules.fun phase 1: funnel conversion"
git push origin main
