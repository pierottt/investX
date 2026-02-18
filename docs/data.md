# docs/data.md

## Mock Data Requirements

### Home
- username
- total portfolio masked or shown
- quick actions: icon + label
- featured cards: title + subtitle + CTA

### Markets / Watchlist
- market breadth metrics:
  - Advancing/Declining
  - New High/New Low
  - Above/Below SMA50
  - Above/Below SMA200
- heatmap sectors: name + percent change
- upcoming earnings: company + date/time

### Stock Detail
- ticker
- price
- change %
- volume
- market cap
- candle + volume series (mock)

### Portfolio (Analytic tab)
- total portfolio value
- daily gain
- donut allocations:
  - Stock, Cash, Fund, Intelligent Portfolio, Bond, Private Fund, Structured Note, TFEX
- list values aligned with donut

### CafeINVEST
- categories: Stocks & ETFs, Thai Funds, Offshore Funds
- articles:
  - title
  - date
  - author
  - thumbnail

---

## Local Mock Storage
Use:
- `lib/data/mock.ts` exporting typed arrays/objects
- Optionally JSON under `public/mock/`

---

## Types (Suggested)
- `MarketBreadthMetric`
- `HeatmapSector`
- `EarningsItem`
- `PortfolioAllocation`
- `ArticleItem`
