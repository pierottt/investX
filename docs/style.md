# docs/style.md

## Global Style Requirements (High Fidelity)

### Theme
- Dark mode only
- Premium brokerage dark mode (ink-like navy surfaces, restrained indigo accents, minimal glow)

---

## Color Tokens (Suggested)
Use CSS variables or Tailwind theme extensions.

### Core
- Background base: `#05070D`
- Background deep: `#0C111D`
- Panel/Card: `#131722`
- Panel/Card alt: `#171B27`
- Editorial panel tint: `rgba(26,31,50,0.55)`
- Panel border: `rgba(255,255,255,0.06)`
- Text primary: `rgba(255,255,255,0.88-0.90)`
- Text secondary: `rgba(255,255,255,0.70-0.80)`
- Text tertiary / muted: `rgba(255,255,255,0.42-0.58)`

### Accents
- Indigo primary: `#6F73F8`
- Indigo soft: `#9B9FF5`
- Indigo label: `#A2A7FF`
- Indigo border: `#5F63B6`
- Indigo deep fill: `#2F286A`

### Signals
- Gain green: `#39C38A`
- Alert / unread red: `#FF5D72`
- Editorial highlight bronze: `#9B7B42`

---

## Gradients
### Background gradient
- `radial-gradient(circle at 50% -18%, rgba(84,90,210,0.26) 0%, rgba(8,10,16,0.92) 36%, #05070D 100%)`

### Accent treatment
- Prefer solid indigo/lilac accents over multi-color gradients

---

## Radii
- Page sections / large cards: 20–24px
- Buttons / pills: 16–24px
- Small tiles (heatmap): 12px
- Icon circle: 999px (full)

---

## Shadows & Glow
### Card shadow
- soft + subtle: `0 10px 30px rgba(0,0,0,0.45)`

### Glow (accent)
- use sparingly; rely on the page-level indigo bloom instead of neon glows
- optional inset hairline: `inset 0 0 0 1px rgba(255,255,255,0.03)`

---

## Typography
- Font: Inter (fallback to system)
- Heading: 20–22px, font-semibold/bold
- Section title: 14–16px, font-semibold
- Body: 13–14px
- Numeric finance: 16–18px, font-medium

---

## Spacing
- Page padding: 16–20px
- Section gap: 16–24px
- List item height: 44–52px
- BottomNav height: ~76px with safe padding

---

## UI Patterns

### Glass Card
- Background: `#131722`, `#171B27`, or `rgba(26,31,50,0.55)`
- Backdrop blur: avoid by default
- Border: `1px solid rgba(255,255,255,0.06)`

### Active Tab
- Text brighter
- Use solid indigo/lilac fill, border, or text emphasis
- Keep emphasis crisp; avoid visible neon glow

### Pressed State
- scale down to 0.96
- reduce glow

---

## Tailwind Setup (Recommended)
- Extend theme: colors, radii
- Add utilities for:
  - `bg-app-radial`
  - `bg-accent-indigo`
  - `border-soft`
  - `glass-card`
