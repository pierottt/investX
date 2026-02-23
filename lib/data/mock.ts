export const homeActions = [
  "Wallet",
  "Exchange",
  "Cafe INVEST",
  "My Order",
  "For you",
  "Point",
  "Login Scan",
  "Streaming",
];

export const marketBreadth = [
  { title: "Advancing", leftPct: 49.57, leftCount: 3146, rightTitle: "Declining", rightPct: 50.43, rightCount: 3201 },
  { title: "New High", leftPct: 63.60, leftCount: 339, rightTitle: "New Low", rightPct: 36.40, rightCount: 194 },
  { title: "Above", centerTitle: "SMA50", leftPct: 61.98, leftCount: 3941, rightTitle: "Below", rightPct: 38.02, rightCount: 2417 },
  { title: "Above", centerTitle: "SMA200", leftPct: 56.75, leftCount: 3239, rightTitle: "Below", rightPct: 43.25, rightCount: 2468 },
];

export const heatmap = [
  { name: "Internet...", pct: -0.95, colSpan: 1 },
  { name: "Software", pct: +0.563, colSpan: 1 },
  { name: "Semiconductors", pct: +0.46, colSpan: 2 },
  { name: "Consumer", pct: +0.563, colSpan: 1 },
  { name: "Drugs...", pct: -0.95, colSpan: 1 },
  { name: "Internet R...", pct: +0.563, colSpan: 1 },
  { name: "Banks - Diversified", pct: -0.98, colSpan: 2 },
  { name: "Oil & Gas", pct: -1.28, colSpan: 1 },
];

export const upcomingEarnings = [
  {
    symbol: "AAPL",
    company: "Apple Inc",
    flagSrc: "/trade/flags/us.svg",
    announce: "Today, After market close",
    estimatedEps: 1.6,
    actualEps: null,
  }
];

export const portfolio = {
  total: 59624011.2,
  gainValue: 9682.0,
  gainPct: 5.53,
  allocations: [
    { label: "Stock", value: 33728105.06 },
    { label: "Cash", value: 10480440.23 },
    { label: "Fund", value: 7291556.06 },
    { label: "Intelligent Portfolio", value: 3012499.14 },
    { label: "Bond", value: 2281455.71 },
    { label: "Private Fund", value: 1200000.0 },
    { label: "Structured Note", value: 500000.0 },
    { label: "TFEX", value: 280000.0 },
  ],
};

export type TradeCategory = "Stocks & ETFs" | "Thai Funds" | "Offshore Funds";
export type TradeRegion = "US" | "HK" | "TH" | "Others";
export type TradeLeaderboardSegment = "Most Active Value" | "Top Gainers" | "Top Losers";

export interface TradeRegionItem {
  id: TradeRegion;
  label: TradeRegion;
  flagSrc: string;
}

export interface TradeTopPick {
  ticker: string;
  company: string;
  price: number;
  change: number;
  changePct: number;
  sparkline: number[];
}

export interface TradeIndexSummary {
  title: string;
  updatedText: string;
  segment: TradeLeaderboardSegment;
}

export interface TradeQuoteRow {
  symbol: string;
  company: string;
  price: number;
  change: number;
  changePct: number;
}

export type WatchlistCategory = "Stocks" | "ETFs" | "Funds" | "Bonds";
export type WatchlistTrend = "up" | "down";

export interface WatchlistQuickAction {
  label: string;
  tone: "buy" | "sell";
}

export interface WatchlistItem {
  symbol: string;
  company: string;
  country: string;
  category: WatchlistCategory;
  price: number;
  changePct: number;
  trend: WatchlistTrend;
  markerColor: string;
  sparkline: number[];
  quickActions?: WatchlistQuickAction[];
}

export const tradeCategories: TradeCategory[] = ["Stocks & ETFs", "Thai Funds", "Offshore Funds"];

export const tradeRegions: TradeRegionItem[] = [
  { id: "US", label: "US", flagSrc: "/trade/flags/us.svg" },
  { id: "HK", label: "HK", flagSrc: "/trade/flags/hk.svg" },
  { id: "TH", label: "TH", flagSrc: "/trade/flags/th.svg" },
  { id: "Others", label: "Others", flagSrc: "/trade/flags/others.svg" },
];

export const tradeTopPick: TradeTopPick = {
  ticker: "KO",
  company: "Coca-Cola Co",
  price: 65.56,
  change: -1.11,
  changePct: -1.66,
  sparkline: [82, 80, 79, 81, 77, 78, 75, 72, 73, 69, 68],
};

export const tradeIndexSummary: TradeIndexSummary = {
  title: "S&P500",
  updatedText: "The list was updated on 12:55",
  segment: "Most Active Value",
};

export const tradeQuoteRows: TradeQuoteRow[] = [
  { symbol: "NVDA", company: "Nvidia Corp", price: 141.25, change: 0.73, changePct: 0.52 },
  { symbol: "TSLA", company: "Tesla Inc", price: 259.52, change: -2.99, changePct: -1.14 },
  { symbol: "AMD", company: "Advanced Micro Devices", price: 166.25, change: 6.33, changePct: 3.96 },
  { symbol: "AAPL", company: "Apple Inc", price: 233.87, change: 0.27, changePct: 0.12 },
];

export const watchlistItems: WatchlistItem[] = [
  {
    symbol: "GOOG",
    company: "Alphabet Inc",
    country: "US",
    category: "Stocks",
    price: 243.19,
    changePct: 16.0,
    trend: "up",
    markerColor: "#8B5CF6",
    sparkline: [18, 20, 22, 21, 23, 28, 26, 30, 33, 31, 35],
  },
  {
    symbol: "IJARB",
    company: "Japan Report Tr",
    country: "JP",
    category: "Funds",
    price: 243.19,
    changePct: 16.0,
    trend: "up",
    markerColor: "#A78BFA",
    sparkline: [14, 13, 15, 16, 15, 17, 19, 21, 22, 24, 26],
  },
  {
    symbol: "T",
    company: "AT&T Inc",
    country: "US",
    category: "Stocks",
    price: 342.39,
    changePct: 6.0,
    trend: "up",
    markerColor: "#EF4444",
    sparkline: [24, 20, 18, 16, 15, 18, 20, 23, 25, 27, 30],
  },
  {
    symbol: "BRD",
    company: "Bluebird Inc",
    country: "US",
    category: "ETFs",
    price: 242.19,
    changePct: -7.0,
    trend: "down",
    markerColor: "#22D3EE",
    sparkline: [25, 18, 19, 20, 20, 16, 14, 15, 16, 17, 18],

    // quickActions: [
    //   { label: "BUY", tone: "buy" },
    //   { label: "SELL", tone: "sell" },
    // ],
  },
  {
    symbol: "TSLA",
    company: "Tesla",
    country: "US",
    category: "Stocks",
    price: 243.19,
    changePct: 16.0,
    trend: "up",
    markerColor: "#60A5FA",
    sparkline: [10, 11, 13, 14, 16, 18, 17, 19, 22, 24, 26],
  },
  {
    symbol: "CHIN",
    company: "China Telecom",
    country: "CN",
    category: "Funds",
    price: 243.19,
    changePct: 18.5,
    trend: "up",
    markerColor: "#F97316",
    sparkline: [8, 9, 10, 13, 14, 15, 17, 16, 20, 22, 24],
  },
  {
    symbol: "VTZ6",
    company: "Vantage 6",
    country: "US",
    category: "Bonds",
    price: 243.19,
    changePct: -9.0,
    trend: "down",
    markerColor: "#3B82F6",
    sparkline: [28, 27, 26, 25, 24, 22, 23, 21, 19, 18, 16],
  },
];

export const thaiIndicesMock = [
  { symbol: "SET", flagSrc: "/trade/flags/th.svg", changePct: 0.83, trend: "down" },
  { symbol: "SET50", flagSrc: "/trade/flags/th.svg", changePct: 0.82, trend: "up" },
  { symbol: "MAI", flagSrc: "/trade/flags/th.svg", changePct: 0.64, trend: "down" },
];

export const worldIndicesMock = [
  { symbol: "S&P 500", hasD: true, flagSrc: "/trade/flags/us.svg", changePct: -0.32, trend: "up" },
  { symbol: "Dow Jones", hasD: true, flagSrc: "/trade/flags/us.svg", changePct: -0.18, trend: "up" },
  { symbol: "Nasdaq 100", hasD: true, flagSrc: "/trade/flags/us.svg", changePct: -0.76, trend: "up" },
  { symbol: "Europe", hasD: true, emojiFlag: "🇪🇺", changePct: -0.77, trend: "down" },
  { symbol: "Germany", hasD: true, emojiFlag: "🇩🇪", changePct: -1.06, trend: "down" },
  { symbol: "UK", hasD: true, emojiFlag: "🇬🇧", changePct: -0.86, trend: "down" },
  { symbol: "CSI 300", hasD: true, emojiFlag: "🇨🇳", changePct: 0.69, trend: "down" },
  { symbol: "H-shares", hasD: true, emojiFlag: "🇨🇳", changePct: 0.73, trend: "down" },
  { symbol: "Vietnam (DR)", hasD: false, emojiFlag: "🇻🇳", changePct: 0.00, trend: "neutral" },
];

export const mockCandles = [
  { time: "09:30", open: 133000, high: 134500, low: 132500, close: 134200, volume: 15000 },
  { time: "09:45", open: 134200, high: 135100, low: 133800, close: 134900, volume: 18000 },
  { time: "10:00", open: 134900, high: 135500, low: 134000, close: 135300, volume: 22000 },
  { time: "10:15", open: 135300, high: 136200, low: 134800, close: 135800, volume: 30000 },
  { time: "10:30", open: 135800, high: 136000, low: 135200, close: 135400, volume: 12000 },
  { time: "10:45", open: 135400, high: 136500, low: 135100, close: 136300, volume: 25000 },
  { time: "11:00", open: 136300, high: 137000, low: 136000, close: 136800, volume: 19000 },
  { time: "11:15", open: 136800, high: 136900, low: 135500, close: 135700, volume: 28000 },
  { time: "11:30", open: 135700, high: 136200, low: 135200, close: 136000, volume: 16000 },
  { time: "11:45", open: 136000, high: 136400, low: 135800, close: 136100, volume: 14000 },
  { time: "12:00", open: 136100, high: 136500, low: 135900, close: 136400, volume: 17000 },
  { time: "12:15", open: 136400, high: 137200, low: 136200, close: 137000, volume: 24000 },
  { time: "12:30", open: 137000, high: 142500, low: 136800, close: 142000, volume: 85000 }, // Spike!
  { time: "12:45", open: 142000, high: 142800, low: 138000, close: 138500, volume: 92000 }, // Drop!
  { time: "13:00", open: 138500, high: 139500, low: 136500, close: 136800, volume: 65000 },
  { time: "13:15", open: 136800, high: 137300, low: 136600, close: 137100, volume: 32000 },
  { time: "13:30", open: 137100, high: 137600, low: 136900, close: 137500, volume: 28000 },
  { time: "13:45", open: 137500, high: 138000, low: 136200, close: 136800, volume: 45000 },
  { time: "14:00", open: 136800, high: 138200, low: 136500, close: 138000, volume: 38000 },
  { time: "14:15", open: 138000, high: 138500, low: 137600, close: 138400, volume: 22000 },
  { time: "14:30", open: 138400, high: 138600, low: 137900, close: 138200, volume: 18000 },
  { time: "14:45", open: 138200, high: 138400, low: 134800, close: 135000, volume: 55000 }, // Drop
  { time: "15:00", open: 135000, high: 135300, low: 133500, close: 133700, volume: 42000 },
  { time: "15:15", open: 133700, high: 134500, low: 133600, close: 134300, volume: 31000 },
  { time: "15:30", open: 134300, high: 135000, low: 133100, close: 134800, volume: 36000 },
  { time: "15:45", open: 134800, high: 135200, low: 134500, close: 135100, volume: 29000 },
  { time: "16:00", open: 135100, high: 135500, low: 134800, close: 135400, volume: 34000 },
];
