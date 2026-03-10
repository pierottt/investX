# docs/routes.md

## Main Routes and Purpose

| Route | Purpose |
| --- | --- |
| `/` | Home overview, user summary, quick actions, and product discovery. |
| `/markets` | Market overview and stocks context (breadth, heatmap, earnings, indices). |
| `/trade` | Trading landing flow with category tabs, regions, and leaderboard-style data. |
| `/watchlist` | User watchlist tracking and quick market monitoring. |
| `/portfolio` | Portfolio value, allocation analytics, and portfolio-centric actions. |
| `/stocks/[ticker]` | Detailed stock screen for one ticker (price, chart, related data panels). |
| `/offline` | Offline fallback message with retry path back to home. |

## Shared Shell/Header/Nav Requirements
- All main tab routes (`/`, `/markets`, `/trade`, `/watchlist`, `/portfolio`) must render inside the shared `AppShell` frame.
- Bottom nav remains consistent in tab order, labels, and active state behavior.
- Stock detail (`/stocks/[ticker]`) intentionally hides bottom nav.
- Preserve safe-area spacing (`pt-safe-top`, `pb-safe-nav`) and centered desktop container behavior.

## Route Acceptance Checklists

### `/`
- Header actions are visible and aligned.
- Primary sections render in mobile-first order without overflow.
- Quick actions/products remain readable at small widths.

### `/markets`
- Overview/Stocks tabs switch correctly.
- Market cards, heatmap, and earnings sections retain spacing and hierarchy.
- Region chips and section headers remain consistent with current design language.

### `/trade`
- Category and region controls are usable on narrow screens.
- Top pick and leaderboard sections render without clipping.
- Header/action affordances remain consistent with other tab routes.

### `/watchlist`
- Watchlist list sections render stable rows and readable status indicators.
- Any filters/tabs keep consistent active/inactive styling.
- Page layout maintains shell spacing and bottom-nav clearance.

### `/portfolio`
- Portfolio summary and analytics states both remain usable.
- Chart/list sections keep alignment and readable financial values.
- CTA and tabs remain accessible and visually consistent.

### `/stocks/[ticker]`
- Back navigation works and ticker context is clear.
- Price/chart/timeframe controls render without horizontal breakage.
- Detail sections keep contrast and readable data hierarchy.

### `/offline`
- Offline message is clear and centered.
- Retry action is visible, keyboard focusable, and routes to `/`.
- Styling remains consistent with global dark-neon theme.
