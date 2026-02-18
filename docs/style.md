# docs/style.md

## Global Style Requirements (High Fidelity)

### Theme
- Dark mode only
- Neon fintech feel (subtle glows, gradients, glass cards)

---

## Color Tokens (Suggested)
Use CSS variables or Tailwind theme extensions.

### Core
- Background base: `#0B0D14`
- Background deep: `#121426`
- Panel/Card: `#151A2E`
- Panel border: `rgba(255,255,255,0.06)`
- Text primary: `#E5E7EB`
- Text secondary: `#9CA3AF`

### Accents (Gradient)
- Purple: `#7C3AED`
- Indigo: `#6366F1`
- Blue: `#2563EB`
- Cyan: `#22D3EE`

### Signals
- Gain green: `#22C55E`
- Loss red: `#EF4444`

---

## Gradients
### Background gradient
- `linear-gradient(180deg, #0B0D14 0%, #121426 60%, #0B0D14 100%)`

### Primary accent gradient
- `linear-gradient(135deg, #7C3AED 0%, #2563EB 60%, #22D3EE 100%)`

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
- use sparingly: `0 0 18px rgba(124,58,237,0.25)` or `rgba(37,99,235,0.22)`

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
- Background: `rgba(21,26,46,0.72)`
- Backdrop blur: `backdrop-blur-md`
- Border: `1px solid rgba(255,255,255,0.06)`

### Active Tab
- Text brighter
- Underline or pill highlight using accent gradient
- Subtle glow

### Pressed State
- scale down to 0.96
- reduce glow

---

## Tailwind Setup (Recommended)
- Extend theme: colors, radii
- Add utilities for:
  - `bg-app-gradient`
  - `bg-accent-gradient`
  - `shadow-glow`
  - `glass-card`
