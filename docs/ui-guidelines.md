# docs/ui-guidelines.md

## Purpose
Operational UI standards for this project. Use this with [style.md](./style.md) and do not override token intent.

## Mandatory Tokens
- Colors: use theme tokens from [style.md](./style.md) (base backgrounds, panel colors, text primary/secondary, accent gradient, gain/loss signals).
- Spacing: follow the existing rhythm: page padding `16-20px`, section gaps `16-24px`, row heights `44-52px`, bottom nav area around `76px`.
- Radii: large cards `20-24px`, buttons/pills `16-24px`, small tiles `12px`, icon circles fully rounded.
- Shadows/glow: default to subtle card shadow; use accent glow only for active/focus emphasis.
- Rule: avoid introducing new one-off hex values when a documented token already exists.

## Typography Hierarchy
- H1 page titles: `20-27px`, `font-semibold`, tight tracking.
- Section headings: `14-18px`, `font-semibold` or `font-bold` depending on emphasis.
- Body/supporting text: `12-14px`, lower contrast than headings.
- Financial numbers: `16-36px`, tabular look where possible, clear gain/loss color.
- Keep line heights compact and readable on small screens.

## Interaction States
- Hover: minor contrast increase only (desktop).
- Pressed/tap: short scale-down (`~0.96`) using existing `tap` behavior.
- Active: use accent highlight/underline/pill plus optional subtle glow.
- Focus-visible: always provide visible ring, especially for keyboard navigation.
- Disabled: reduce contrast and remove pointer affordance; never rely on color alone.

## Responsive Behavior (Mobile First)
- Build for mobile first in a single-column flow.
- Prototype target is phone only. Components must be designed for phone-size screens, not desktop-first layouts.
- Keep content readable at 320-420px widths.
- On desktop/tablet, only preview as a centered phone frame (`max-width: ~420px`) inside the shell.
- Maintain safe-area padding (`pt-safe-top`, `pb-safe-nav`) to prevent clipped controls.

## Accessibility Checklist
- Minimum text contrast: body text must remain legible on dark surfaces.
- Provide semantic headings and landmark structure (`header`, `nav`, `main`, `section`).
- All icon-only buttons require `aria-label`.
- Preserve keyboard navigation and visible focus state.
- Do not communicate status by color only; include text/icon context.
- Ensure touch targets are comfortable (`>= 40px`, ideally `44px+`).

## Do / Don’t (Project Specific)
- Do keep dark neon fintech tone consistent across new screens.
- Do reuse shell spacing, card styles, and nav rhythm used in existing pages.
- Do keep top actions and bottom navigation behavior consistent per route type.
- Don’t switch to light-theme sections or flat white cards.
- Don’t introduce inconsistent radii, oversized shadows, or random gradients.
- Don’t add decorative motion that competes with core data readability.
- Don’t design component layouts that require desktop breakpoints for primary usability.
