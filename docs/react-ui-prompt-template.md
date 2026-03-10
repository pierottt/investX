# docs/react-ui-prompt-template.md

Use this template when you want Codex to generate high-quality React web UI from prompt only (no Figma).

## Copy/Paste Prompt Template

```md
You are a senior product designer + frontend engineer.
Build a polished, production-quality UI for this requirement:

[DESCRIBE WHAT YOU WANT]

Project context:
- Stack: Next.js App Router + TypeScript + Tailwind
- Reuse existing components and tokens where possible
- Match this repo's visual language in `docs/style.md` and `docs/components.md`
- Target mobile-first layout, but render cleanly on desktop

Design direction:
- Feel: premium fintech, clean hierarchy, strong visual rhythm
- Use expressive spacing and typography; avoid generic "template" look
- Use meaningful motion only where it improves comprehension

Implementation requirements:
1. Create reusable components with clear props (no giant monolith component).
2. Keep code strongly typed and easy to maintain.
3. Include interactive states (hover, active, focus, disabled when relevant).
4. Ensure accessibility (semantic HTML, keyboard focus, labels/aria where needed).
5. Avoid hardcoded repeated values; use shared constants/tokens when possible.

Output format:
1. Brief UI concept summary (max 8 bullets).
2. File plan (new/updated files).
3. Full code for each file.
4. Short test/verification checklist.
5. Notes on tradeoffs and follow-up improvements.

Constraints:
- Do not ask clarifying questions unless blocked.
- Make reasonable assumptions and continue.
- Prefer practical, shippable UI over placeholder-heavy output.
```

## Fast Variants

### A) Single Component

```md
Use the prompt template above.
Scope: Build one reusable component only: [COMPONENT NAME]
Include:
- Props interface
- Component code
- Example usage in one page/section
- Optional skeleton/loading state
```

### B) Full Page Section

```md
Use the prompt template above.
Scope: Build a complete section for route: [ROUTE]
Include:
- Section container
- 3-5 reusable child components
- Mock data in `lib/data/mock.ts` shape
- Responsive behavior notes
```

### C) Refactor Existing UI

```md
Use the prompt template above.
Scope: Refactor existing file(s): [PATHS]
Goals:
- Improve visual quality
- Improve reusability and readability
- Preserve behavior
Return a before/after file plan and full updated code.
```

