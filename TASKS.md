# TASKS — Generator Export System (P0)

## Context
RepoRules.dev UI is final. No more UI changes. This task is the first "real product" step: make the Generator output downloadable repository governance files instead of just a text preview.

## Architecture
- Next.js static export → Cloudflare Pages
- API: `functions/api/generate.ts` (Cloudflare Pages Function) → DeepSeek V4 Flash
- Frontend: `src/app/generator/page.tsx`
- Dependencies to install: `jszip`, `file-saver`

## Task 1 — Install Dependencies

Run:
```bash
npm install jszip file-saver
```

---

## Task 2 — Modify Cloudflare Function Response Structure

File: `functions/api/generate.ts`

**Current:** Returns `{ content: string, remaining: number }`

**Change to:** Return structured JSON with named files:
```typescript
// API response type
{
  files: {
    rules: string;
    memory: string;
    architecture: string;
    cursorRules: string;
    claude: string;
    testingWorkflow: string;
  };
  remaining: number;
}
```

---

## Task 3 — Update DeepSeek Prompt for Structured JSON Output

File: `functions/api/generate.ts`

### 3a. Modify getSystemPrompt()
- Delete marketing/generic language
- Add: "Return JSON only. Output format: { \"rules\": \"...\", \"memory\": \"...\", \"architecture\": \"...\", \"cursorRules\": \"...\", \"claude\": \"...\", \"testingWorkflow\": \"...\" }"
- Add: "Each field must represent a real repository file."
- Add: "Avoid placeholder content. Avoid generic AI assistant wording. Prefer realistic engineering tradeoffs."
- Add: "Include: migration notes, technical debt, repository incidents, architecture constraints"
- Add: "Prefer realistic monorepo naming."

### 3b. Modify DeepSeek API call parameters
- Change `temperature` from `0.3` to `0.6`
- Change `max_tokens` from `2000` to `3500`
- If supported: `response_format: { type: "json_object" }`

### 3c. Update response parsing
- Parse JSON from AI response
- Validate all 6 fields exist
- Fallback: if AI returns unstructured text, wrap in default structure

---

## Task 4 — Refactor Frontend State

File: `src/app/generator/page.tsx`

### 4a. Replace state variables
**Current:**
```typescript
const [generatedRules, setGeneratedRules] = useState("");
```

**Change to:**
```typescript
interface GeneratedFiles {
  rules: string;
  memory: string;
  architecture: string;
  cursorRules: string;
  claude: string;
  testingWorkflow: string;
}

const [generatedFiles, setGeneratedFiles] = useState<GeneratedFiles>({
  rules: "",
  memory: "",
  architecture: "",
  cursorRules: "",
  claude: "",
  testingWorkflow: "",
});

const [activeFile, setActiveFile] = useState<string>("rules.md");
```

### 4b. Update API call handler
- Parse `data.files` from API response
- Set all 6 file fields
- Default active file to "rules.md"

---

## Task 5 — Install and Import Export Libraries

Add at top of `src/app/generator/page.tsx`:
```typescript
import JSZip from "jszip";
import { saveAs } from "file-saver";
```

---

## Task 6 — Add Export Functions

Add inside component body (before return):

### 6a. downloadZip()
```typescript
const downloadZip = async () => {
  const zip = new JSZip();
  
  zip.file("rules.md", generatedFiles.rules || "");
  zip.file("memory.md", generatedFiles.memory || "");
  zip.file("architecture.md", generatedFiles.architecture || "");
  zip.file(".cursorrules", generatedFiles.cursorRules || "");
  zip.file("claude.md", generatedFiles.claude || "");
  zip.file("testing-workflow.md", generatedFiles.testingWorkflow || "");
  
  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, "repo-rules-export.zip");
};
```

### 6b. downloadSingleFile()
```typescript
const downloadSingleFile = (filename: string, content: string) => {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  saveAs(blob, filename);
};
```

---

## Task 7 — Redesign Generator Result UI

Replace the current output section entirely with:

### 7a. Generator Header
```tsx
<div className="mb-8">
  <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-300 font-mono">
    Repository Governance Generated
  </div>
  <div className="flex gap-5 mt-5 font-mono text-xs text-zinc-500">
    <span>6 files generated</span>
    <span>Pattern confidence: 92%</span>
    <span>Migration compatible</span>
  </div>
</div>
```

### 7b. File Tabs
```tsx
<div className="flex gap-2 mb-6 overflow-x-auto">
  {["rules.md", "memory.md", "architecture.md", ".cursorrules", "claude.md", "testing-workflow.md"].map((file) => (
    <button
      key={file}
      onClick={() => setActiveFile(file)}
      className={`
        h-9 px-4 rounded-lg text-sm whitespace-nowrap transition-colors
        ${activeFile === file
          ? "bg-zinc-800 text-zinc-100 border border-zinc-600"
          : "border border-zinc-700 text-zinc-400 hover:border-zinc-500"
        }
      `}
    >
      {file}
    </button>
  ))}
</div>
```

### 7c. File Content Preview
```tsx
<div className="overflow-auto rounded-xl border border-zinc-800 bg-zinc-950 p-6">
  <pre className="text-sm leading-relaxed text-zinc-300 whitespace-pre-wrap font-mono">
    {generatedFiles[getActiveFileKey()]}
  </pre>
</div>
```

Helper:
```typescript
const getActiveFileKey = (): keyof GeneratedFiles => {
  const map: Record<string, keyof GeneratedFiles> = {
    "rules.md": "rules",
    "memory.md": "memory",
    "architecture.md": "architecture",
    ".cursorrules": "cursorRules",
    "claude.md": "claude",
    "testing-workflow.md": "testingWorkflow",
  };
  return map[activeFile] || "rules";
};
```

### 7d. Repository Signals
```tsx
<div className="bg-[#151922] border border-[#2a2d35] rounded-xl p-5 mt-8">
  <div className="text-sm font-medium mb-4 text-zinc-200">
    Repository Signals Detected
  </div>
  <div className="space-y-3 text-sm text-zinc-400">
    <div>✓ Next.js App Router</div>
    <div>✓ Shared validation layer</div>
    <div>✓ Monorepo structure</div>
    <div>✓ AI workflow conventions</div>
  </div>
</div>
```

### 7e. Export Section
```tsx
<div className="mt-10">
  <div className="text-sm font-medium mb-4 text-zinc-200">
    Export Repository Files
  </div>
  <div className="flex flex-wrap gap-3">
    <button
      onClick={downloadZip}
      className="h-11 px-5 rounded-lg bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-zinc-200 transition-colors"
    >
      Download ZIP
    </button>
    <button
      onClick={() => downloadSingleFile("rules.md", generatedFiles.rules)}
      className="h-11 px-5 rounded-lg border border-zinc-700 text-zinc-300 text-sm hover:border-zinc-500 transition-colors"
    >
      Export rules.md
    </button>
    <button
      onClick={() => downloadSingleFile("memory.md", generatedFiles.memory)}
      className="h-11 px-5 rounded-lg border border-zinc-700 text-zinc-300 text-sm hover:border-zinc-500 transition-colors"
    >
      Export memory.md
    </button>
    <button
      onClick={() => downloadSingleFile(".cursorrules", generatedFiles.cursorRules)}
      className="h-11 px-5 rounded-lg border border-zinc-700 text-zinc-300 text-sm hover:border-zinc-500 transition-colors"
    >
      Export .cursorrules
    </button>
  </div>
</div>
```

---

## Task 8 — Empty State

When no generation has happened yet (all generatedFiles fields empty):
```tsx
<div className="bg-[#151922] border border-dashed border-[#2a2d35] rounded-xl p-10 text-center mt-10">
  <div className="text-lg font-medium mb-3 text-zinc-200">
    Generate repository governance files
  </div>
  <p className="text-zinc-500 leading-7 max-w-xl mx-auto">
    Analyze repository structure and generate rules.md,
    memory.md, migration governance and AI workflows.
  </p>
</div>
```

---

## Task 9 — Loading State

Replace current loading text with:
```tsx
<div className="space-y-4 py-8">
  <div className="text-sm font-medium text-zinc-200">
    Analyzing repository architecture...
  </div>
  <div className="font-mono text-xs text-zinc-500 leading-7">
    ✓ detecting repository boundaries<br />
    ✓ analyzing validation layers<br />
    ✓ checking migration patterns<br />
    ✓ generating governance files
  </div>
</div>
```

---

## Task 10 — Verification Checklist

After all changes:
- [ ] `npm run build` succeeds
- [ ] Generator page loads without console errors
- [ ] Empty state shows before generation
- [ ] Loading state shows during API call
- [ ] File tabs switch content correctly
- [ ] Repository Signals section renders
- [ ] Download ZIP creates valid zip with 6 files
- [ ] Export single file downloads correctly
- [ ] git add && git commit
- [ ] git push
