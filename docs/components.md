# docs/components.md

## Component Library (Reusable)

### 1) AppShell
**Purpose:** Apply background + center mobile width + safe padding + BottomNav.
- Props: `children`
- Behavior:
  - mobile container max-width ~420px
  - fixed BottomNav

---

### 2) BottomNav
**Purpose:** 5-tab navigation with center floating Trade button.
- Tabs: Home, Markets, Trade, Watchlist, Portfolio
- Active indicator:
  - icon + label brighter
  - purple/blue glow
- Center Trade:
  - circular gradient button
  - slightly elevated above bar

---

### 3) TopBar
**Purpose:** Logo left + quick icons right.
- Left: app wordmark "innovestX"
- Right icons: Search, Mail, Profile avatar

---

### 4) CardGlass
**Purpose:** Base card style used everywhere.
- Rounded 20px
- Glass effect + subtle border
- Optional header slot

---

### 5) IconCircleButton
**Purpose:** circular quick action button.
- 48px circle
- Icon centered
- Label optional below

---

### 6) TabsPill / TabsUnderline
**Purpose:** page-level tabs (Home sections, Portfolio tabs, Market tabs)
- Active:
  - underline OR pill highlight
  - glow accent

---

### 7) CountryPills
**Purpose:** US/HK/TH selectable pills.
- active pill:
  - border glow purple
  - text brighter

---

### 8) MetricBar
**Purpose:** Split progress bar (green vs red) with labels.
- Props:
  - title
  - leftLabel, leftValue
  - rightLabel, rightValue
- Bar:
  - left green fill
  - right red fill
  - rounded ends

---

### 9) HeatmapGrid
**Purpose:** grid of sector tiles with % change.
- Tile:
  - rounded 12px
  - background green/red intensity based on value
  - sector name + percent

---

### 10) DonutPortfolio
**Purpose:** donut chart with center summary.
- Center text:
  - Total Portfolio
  - Value
  - Gain (green)

---

### 11) FinancialList
**Purpose:** asset allocation list rows.
- Each row:
  - colored dot
  - label
  - value right aligned

---

### 12) CandleChartMock (or Chart Wrapper)
**Purpose:** placeholder that resembles candlestick UI.
- Later replace with:
  - TradingView Lightweight Charts
  - or a chart library

---

## Animation Guidelines (Optional)
- Use framer-motion for:
  - tab underline slide
  - button press micro-interaction
  - list fade-in
