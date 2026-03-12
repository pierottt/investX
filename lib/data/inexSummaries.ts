export interface InexSource {
  id: "reuters" | "bloomberg" | "bangkok-post";
  name: string;
  href: string;
  logo: string;
}

export interface InexSummary {
  id: string;
  asset: string;
  brief: string;
  sources: InexSource[];
}

export const inexSummaries: InexSummary[] = [
  {
    id: "googl-ad-tone",
    asset: "GOOGL",
    brief: "Ad pricing soft; premarket pressure builds.",
    sources: [
      {
        id: "reuters",
        name: "Reuters",
        href: "https://www.reuters.com/technology/",
        logo: "/inex/sources/reuters.svg",
      },
      {
        id: "bloomberg",
        name: "Bloomberg",
        href: "https://www.bloomberg.com/technology",
        logo: "/inex/sources/bloomberg.svg",
      },
    ],
  },
  {
    id: "nvda-ai-demand",
    asset: "NVDA",
    brief: "AI server demand stays firm.",
    sources: [
      {
        id: "bloomberg",
        name: "Bloomberg",
        href: "https://www.bloomberg.com/technology",
        logo: "/inex/sources/bloomberg.svg",
      },
    ],
  },
  {
    id: "gold-yields",
    asset: "Gold",
    brief: "Yields cool; defensive bid improves.",
    sources: [
      {
        id: "bloomberg",
        name: "Bloomberg",
        href: "https://www.bloomberg.com/markets",
        logo: "/inex/sources/bloomberg.svg",
      },
    ],
  },
  {
    id: "usdthb-range",
    asset: "USD/THB",
    brief: "Range remains tight today.",
    sources: [
      {
        id: "reuters",
        name: "Reuters",
        href: "https://www.reuters.com/markets/currencies/",
        logo: "/inex/sources/reuters.svg",
      },
    ],
  },
  {
    id: "set-energy",
    asset: "SET Energy",
    brief: "Crude stabilizes; rotation resumes.",
    sources: [
      {
        id: "bangkok-post",
        name: "Bangkok Post",
        href: "https://www.bangkokpost.com/business",
        logo: "/inex/sources/bangkok-post.svg",
      },
    ],
  },
  {
    id: "set-banks",
    asset: "SET Banks",
    brief: "Stable NIM keeps bids selective.",
    sources: [
      {
        id: "bangkok-post",
        name: "Bangkok Post",
        href: "https://www.bangkokpost.com/business",
        logo: "/inex/sources/bangkok-post.svg",
      },
    ],
  },
  {
    id: "us-bonds",
    asset: "US Bonds",
    brief: "Rate-cut bets lift duration.",
    sources: [
      {
        id: "reuters",
        name: "Reuters",
        href: "https://www.reuters.com/world/us/",
        logo: "/inex/sources/reuters.svg",
      },
    ],
  },
  {
    id: "oil-vol",
    asset: "Brent Oil",
    brief: "Inventory noise keeps swings elevated.",
    sources: [
      {
        id: "bloomberg",
        name: "Bloomberg",
        href: "https://www.bloomberg.com/energy",
        logo: "/inex/sources/bloomberg.svg",
      },
    ],
  },
  {
    id: "dividend-defensive",
    asset: "Dividend Stocks",
    brief: "Defensive inflows pick up.",
    sources: [
      {
        id: "reuters",
        name: "Reuters",
        href: "https://www.reuters.com/markets/",
        logo: "/inex/sources/reuters.svg",
      },
    ],
  },
  {
    id: "china-metals",
    asset: "Metals",
    brief: "China demand hopes support Asia.",
    sources: [
      {
        id: "bloomberg",
        name: "Bloomberg",
        href: "https://www.bloomberg.com/asia",
        logo: "/inex/sources/bloomberg.svg",
      },
    ],
  },
  {
    id: "global-risk",
    asset: "Global Equities",
    brief: "Tone stays neutral-defensive.",
    sources: [
      {
        id: "reuters",
        name: "Reuters",
        href: "https://www.reuters.com/world/",
        logo: "/inex/sources/reuters.svg",
      },
      {
        id: "bloomberg",
        name: "Bloomberg",
        href: "https://www.bloomberg.com/markets",
        logo: "/inex/sources/bloomberg.svg",
      },
    ],
  },
];
