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
  forecast: {
    price: string;
    changePct: string;
    tone: "up" | "down";
  };
  sources: InexSource[];
}

export const inexSummaries: InexSummary[] = [
  {
    id: "googl-ad-tone",
    asset: "GOOGL",
    brief: "Ad pricing soft; premarket pressure builds.",
    forecast: {
      price: "171.20",
      changePct: "-1.8%",
      tone: "down",
    },
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
    forecast: {
      price: "192.50",
      changePct: "+5.4%",
      tone: "up",
    },
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
    forecast: {
      price: "2,198",
      changePct: "+1.2%",
      tone: "up",
    },
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
    forecast: {
      price: "35.40",
      changePct: "-0.6%",
      tone: "down",
    },
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
    forecast: {
      price: "1,118",
      changePct: "+2.1%",
      tone: "up",
    },
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
    forecast: {
      price: "428",
      changePct: "+0.9%",
      tone: "up",
    },
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
    forecast: {
      price: "108.30",
      changePct: "+1.1%",
      tone: "up",
    },
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
    forecast: {
      price: "79.40",
      changePct: "-1.7%",
      tone: "down",
    },
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
    forecast: {
      price: "104.80",
      changePct: "+0.8%",
      tone: "up",
    },
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
    forecast: {
      price: "92.10",
      changePct: "+1.5%",
      tone: "up",
    },
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
    forecast: {
      price: "5,180",
      changePct: "-0.4%",
      tone: "down",
    },
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
