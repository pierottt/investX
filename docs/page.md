# docs/page.md

## Pages: Detailed UI Requirements

---

# `/` Home Page

## Header (TopBar)
- Left: "innovestX" wordmark + subtitle "A subsidiary of SCBX Group"
- Right: search icon, mail icon, profile avatar

## Hero Banner
- Background: cosmic / futuristic illustration
- Greeting text (Thai):
  - `สวัสดีตอนเช้า`
  - `คุณ [Username]`
- Portfolio summary card overlay:
  - Title: "Total Portfolio"
  - Balance masked (********) or optionally shown
  - Right: circular gradient arrow button

## Quick Actions (Grid 4x2)
Buttons:
- Wallet, Exchange, Cafe INVEST, My Order
- For you, Point, Login Scan, Streaming

Each:
- circle icon + label
- pressed state scale

## Featured Cards
Two cards side by side:
1) "INVEST IDEAS" + CTA "Explore Now"
2) "Intelligence portfolio" + futuristic circular artwork

## BottomNav
- persistent

---

# `/markets` Market Page

## Tabs
- Overview
- Stocks (active)

## Country Pills
- US, HK, TH

## Market Breadth
Split bars with left green + right red for:
- Advancing vs Declining
- New High vs New Low
- Above SMA50 vs Below
- Above SMA200 vs Below

## Heatmap
Sector grid tiles with % changes

## Upcoming Earnings
List rows with company icon + name + schedule

---

# `/stocks/[ticker]` Stock Detail Page

## Header
- Back arrow
- Ticker + company name
- Exchange label (NASDAQ)
- Favorite icon

## Price Summary
- large current price (green if up)
- change % (green/red)
- after hours row
- Volume, Market Cap line

## Tabs
- Quotes (active)
- Overview
- INVX
- Fundamental
- Technical

## Chart
- Candle chart area
- Volume bars below
- Timeframe selector:
  - 1m, 3m, 5m, 15m, 1H, 2H, More
- selected timeframe pill purple

## Trade Action Bar
Sticky bottom:
- Green "Buy"
- Red "Sell"
Rounded big buttons

---

# `/portfolio` Portfolio Page

## Top Tabs
- Asset
- Cash
- Analytic (active)
- Transaction
- Cash Statement

## Donut Chart
- Multi-color allocation ring
- Center:
  - Total Portfolio
  - ฿ value
  - +gain (+%) green

## Allocation List
Rows with colored dot + label + amount:
- Stock, Cash, Fund, Intelligent Portfolio, Bond, Private Fund, Structured Note, TFEX

---

# `/watchlist` Watchlist Page
- Very similar layout to Markets page
- Tabs + Country pills + breadth + heatmap + earnings

---

# `/trade` Trade Page
- Placeholder (center CTA destination)
- Could show quick order entry or “Coming soon”
- Keep theme consistent

---

# (Optional) CafeINVEST Page
If you want it as a route:
- `/cafe`

## Header
- Title "All in INVX"
- Right icons: search, mail, profile

## Category Cards
- Stocks & ETFs
- Thai Funds
- Offshore Funds
Each shows badge: "Available on App & Web"

## Article List
- thumbnail right
- title left
- date + author smaller gray
