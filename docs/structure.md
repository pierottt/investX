# docs/structure.md

## Goal
Duplicate the INNOVEST-X app UI (dark neon fintech) using Next.js (App Router) with reusable components and consistent styling.

---

## Tech Stack
- Next.js (App Router)
- TailwindCSS
- (Optional) shadcn/ui for primitives (Tabs, Card, Button)
- (Optional) Recharts for charts (donut)
- (Optional) TradingView lightweight charts / custom chart placeholder
- next/image for images
- lucide-react for icons

---

## App Routes (App Router)

### Main Shell (Bottom Tabs)
All pages share a persistent bottom navigation bar:
- Home
- Markets
- Trade (center floating CTA)
- Watchlist
- Portfolio

### Routes
- `/` -> Home
- `/markets` -> Market overview/stocks
- `/trade` -> Trade landing (can be placeholder)
- `/watchlist` -> Watchlist
- `/portfolio` -> Portfolio (tabs: Asset/Cash/Analytic/Transaction/Cash Statement)
- `/stocks/[ticker]` -> Stock detail page (AAPL sample)

---

## Folder Structure (Recommended)

app/
  layout.tsx
  globals.css
  page.tsx                # Home
  markets/
    page.tsx
  trade/
    page.tsx
  watchlist/
    page.tsx
  portfolio/
    page.tsx
  stocks/
    [ticker]/
      page.tsx

components/
  shell/
    AppShell.tsx          # wraps pages w/ background + safe padding + bottom nav
    BottomNav.tsx         # bottom navigation + floating trade button
    TopBar.tsx            # optional (logo + icons)
  ui/
    CardGlass.tsx         # glassmorphism card
    IconCircleButton.tsx  # circular icon action
    GradientButton.tsx
    TabsPill.tsx
    CountryPills.tsx
    MetricBar.tsx
    HeatmapGrid.tsx
    FinancialList.tsx
    DonutPortfolio.tsx
    CandleChartMock.tsx   # placeholder chart component
  sections/
    home/
      HeroBanner.tsx
      QuickActions.tsx
      FeaturedCards.tsx
    markets/
      MarketBreadth.tsx
      HeatmapSection.tsx
      UpcomingEarnings.tsx
    portfolio/
      PortfolioDonutSection.tsx
      AllocationListSection.tsx
    cafe/
      CategoryCards.tsx
      ArticleList.tsx

lib/
  constants/
    tokens.ts             # color tokens, radii, spacing constants
    nav.ts                # bottom nav definitions
  data/
    mock.ts               # mock portfolio, heatmap, articles, earnings

docs/
  page.md
  structure.md
  style.md
  components.md
  data.md

---

## Layout & Shell

### app/layout.tsx responsibilities
- Load global font (Inter/SF-like)
- Apply global background (dark gradient)
- Provide AppShell wrapper

### AppShell responsibilities
- Max width mobile (e.g., 420px) centered for desktop preview
- Provide consistent padding
- Render children
- Render BottomNav fixed/sticky

---

## Responsive Behavior
- Primary target: mobile viewport (iPhone-like)
- Desktop: center the "phone width" container with background glow

---

## Implementation Phases
1. Static UI duplication (no real data)
2. Add mock data (local JSON)
3. Replace charts with real chart libs (optional)
4. Add navigation + interactions + animations
