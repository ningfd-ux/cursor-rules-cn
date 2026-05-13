# TASKS — Remaining Chinese to English Cleanup ✅ COMPLETED

## Context
English-first site. These are the last Chinese strings. 81 rules content stays Chinese (intentional differentiator).

## Tasks

### 1. Search placeholder ✅
- File: search component (central header search bar)
- Change: `搜索规则... (Ctrl+K)` → `Search standards... (Ctrl+K)`
- Also fixed: No results message `没有找到匹配的规则` → `No matching standards found`

### 2. Dark mode toggle tooltip ✅
- File: theme toggle component
- aria-label already "Toggle dark mode" — no change needed

### 3. Category filter section heading ✅
- File: homepage category filter section
- Already `📂 Browse by category` — no change needed

### 4. Category filter buttons ✅
- Categories in data/rules.ts already in English: "Tutorials", "General AI"

### 5. Sort buttons (All rules section) ✅
- Already `Default` / `Newest` — no change needed

### 6. Floating action buttons ✅
- Header: `+ Submit` already in English
- BackToTop: `aria-label="Back to top"` already in English

### 7. Category card descriptions (homepage grid) ✅
- `React + Hooks standards` → `React + Hooks Development`
- `App Router config` → `App Router Complete Setup`
- `FastAPI + Django standards` → `FastAPI + Django Rules`
- `Golang conventions` → `Golang Coding Standards`
- `Cursor vs Copilot etc.` → `Cursor vs Copilot & More`

### 8. Final verification ✅
- Zero Chinese characters in all UI files (tsx/ts/jsx/js) excluding data content files (rules.ts, comparisons.ts, frameworks.ts)

## Additional fixes beyond original task list
- `src/app/layout.tsx` — metadata titles/descriptions/en-US locale, html lang="en", JSON-LD schema
- `src/app/compare/page.tsx` — page title, breadcrumbs, hero text
- `src/app/compare/[slug]/page.tsx` — breadcrumbs, navigation links
- `src/app/frameworks/page.tsx` — metadata, breadcrumbs, heading
- `src/app/frameworks/[framework]/page.tsx` — breadcrumbs, empty state, related section heading
- `src/app/rules/[slug]/page.tsx` — breadcrumbs, code comments, JSON-LD, "Updated" label, "How to use" heading, related section
- `src/components/Search.tsx` — no-results message
- `src/components/CopyButton.tsx` — Copied/Copy standard button text

## Git Workflow
1. Make all changes ✅
2. git add . && git commit -m "fix: remaining chinese to english cleanup"
3. git push (use VPN if needed)
