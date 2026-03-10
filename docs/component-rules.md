# docs/component-rules.md

## Component Design Principles
- Build small, composable UI units with a clear single responsibility.
- Keep presentational components stateless when possible; lift state to route/section level.
- Prefer composition (`children`, slots, render blocks) over rigid component variants.
- Preserve existing shell patterns (page scroll container, safe paddings, bottom nav spacing).

## Prop Typing Standards (TypeScript)
- Define explicit `interface` or `type` for every component prop object.
- Avoid `any`; use unions, literals, and optional props intentionally.
- Export shared interfaces from a stable location when reused by multiple components.
- Use narrow string unions for modes/variants (`"soft" | "solid"`, etc.).
- Type callback props explicitly (`(value: T) => void`).

## Reusability Guidance
- Put generic UI primitives under `components/ui`.
- Put route-specific assemblies under feature folders (`components/trade`, `components/shell`, etc.).
- Keep copy/data out of primitives; pass text and values through props.
- When behavior repeats across pages, extract once and reuse instead of cloning markup.
- For prototyping in this repo, components only need to fit phone-size screens (roughly `320-420px` width).

## Tailwind Styling Conventions
- Use utility classes directly; keep class sets readable and grouped by intent (layout, spacing, typography, color, effects).
- Reuse documented tokens/classes (`bg-app`, glass styles, accent patterns) before adding custom values.
- Prefer responsive modifiers from mobile upward (`min-[360px]`, `min-[390px]`, etc.) to preserve mobile-first behavior.
- Keep one-off arbitrary values minimal and justified by UI parity.
- Do not add desktop-specific layout complexity unless explicitly requested; desktop should act as centered phone preview.

## Data Dependencies and Mock Data
- For UI prototyping, source display data from `lib/data/mock.ts`.
- Reuse existing exported types from `lib/data/mock.ts` when available.
- If adding mock structures, define and export matching TypeScript types alongside data.
- Avoid embedding large inline mock arrays in route/component files.

## Component Change Checklist
- Typing: no `any`, props/interfaces updated, callbacks typed.
- Behavior: loading/empty/error or fallback states handled where relevant.
- Styling: tokens/radii/spacing consistent with [style.md](./style.md).
- Accessibility: keyboard focus, labels, contrast, and touch target size checked.
- Reuse: no duplicate component created for an existing pattern.
- Validation: run `npm run lint`; run `npm run build` for larger structural changes.
