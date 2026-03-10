"use client";

import Image from "next/image";
import { ChevronDown, ChevronUp, List, Mail, PencilLine, Plus, Search } from "lucide-react";

const rows = [
  {
    symbol: "GOOGL",
    marketSuffix: "D",
    company: "Alphabet Inc",
    flagSrc: "/trade/flags/us.svg",
    price: "306.36",
    secondaryPrice: "306.85",
    gain: "+2.70%",
    intradayDelta: "+0.16%",
    sessionLabel: "Pre",
    trend: [26, 22, 20, 16, 14, 15, 13, 13, 19, 17, 16, 18, 15, 18, 14, 13, 12, 10],
  },
  {
    symbol: "NVDA",
    marketSuffix: "D",
    company: "NVIDIA Corp",
    flagSrc: "/trade/flags/us.svg",
    price: "182.65",
    secondaryPrice: "182.91",
    gain: "+2.72%",
    intradayDelta: "+0.14%",
    sessionLabel: "Pre",
    trend: [16, 17, 16, 11, 12, 15, 15, 17, 18, 19, 21, 10, 6, 10, 12, 8, 10, 9],
  },
];

export default function WatchlistPage() {
  return (
    <div className="page-scroll no-scrollbar bg-[radial-gradient(circle_at_50%_-18%,rgba(79,90,255,0.12)_0%,rgba(5,8,15,0.96)_34%,#04060c_100%)]">
      <div className="page-x pb-safe-nav pt-safe-top">
        <header className="flex items-center justify-between pt-0.5">
          <h1 className="text-[25px] font-semibold tracking-[-0.04em] text-white/90 min-[360px]:text-[27px]">Watchlist</h1>
          <div className="flex items-center gap-1">
            <button type="button" className="tap flex h-8 w-8 items-center justify-center rounded-full text-white/78 min-[360px]:h-9 min-[360px]:w-9">
              <Search className="h-5 w-5 stroke-[1.75] min-[360px]:h-5.5 min-[360px]:w-5.5" />
            </button>
            <button type="button" className="tap relative flex h-8 w-8 items-center justify-center rounded-full text-white/78 min-[360px]:h-9 min-[360px]:w-9">
              <Mail className="h-5 w-5 stroke-[1.75] min-[360px]:h-5.5 min-[360px]:w-5.5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#ff5d72] shadow-[0_0_0_2px_rgba(7,10,18,0.95)] min-[360px]:h-2.5 min-[360px]:w-2.5" />
            </button>
          </div>
        </header>

        <section className="mt-3.5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <button
                type="button"
                className="tap rounded-[22px] border border-[#6e71ff]/55 bg-[linear-gradient(180deg,#6868ff_0%,#5c57f0_100%)] px-2 py-2 text-[15px] font-semibold tracking-[-0.03em] text-white shadow-[0_12px_18px_rgba(98,93,255,0.2),inset_0_1px_0_rgba(255,255,255,0.12)] min-[360px]:px-5 min-[360px]:py-2 min-[360px]:text-[16px]"
              >
                All
              </button>

              <div className="mt-4 flex items-end gap-5 min-[360px]:gap-6">
                <button type="button" className="tap relative pb-2.5 text-[15px] font-semibold tracking-[-0.03em] text-white/92 min-[360px]:text-[16px]">
                  All Assets
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-7 -translate-x-1/2 rounded-full bg-[#6465ff] min-[360px]:w-8" />
                </button>
                <button type="button" className="tap pb-2.5 text-[14px] font-medium tracking-[-0.03em] text-white/62 min-[360px]:text-[15px]">
                  Stocks
                </button>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-end gap-4 pt-0.5 text-white/82 min-[360px]:gap-5">
              <button
                type="button"
                className="tap flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#060911]/65 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] min-[360px]:h-11 min-[360px]:w-11"
              >
                <List className="h-5.5 w-5.5 stroke-[1.85] min-[360px]:h-6 min-[360px]:w-6" />
              </button>
              <div className="flex items-center gap-3 pr-0.5 min-[360px]:gap-4">
                <button
                  type="button"
                  className="tap flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#060911]/45 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] min-[360px]:h-10 min-[360px]:w-10"
                >
                  <PencilLine className="h-5.5 w-5.5 stroke-[1.8] min-[360px]:h-6 min-[360px]:w-6" />
                </button>
                <button type="button" className="tap flex h-9 w-9 items-center justify-center rounded-[10px] text-white/84 min-[360px]:h-10 min-[360px]:w-10">
                  <Plus className="h-6 w-6 stroke-[1.85] min-[360px]:h-6.5 min-[360px]:w-6.5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4">
          <div className="grid grid-cols-[minmax(0,1fr)_64px_74px_76px] items-end text-[9px] text-white/42 min-[360px]:grid-cols-[minmax(0,1fr)_72px_82px_86px] min-[360px]:text-[10px]">
            <div className="flex items-center gap-1.5">
              <span>Country</span>
              <SortGlyph />
            </div>
            <div className="text-center">20-Day</div>
            <div className="flex items-center justify-end gap-1.5">
              <span>Price</span>
              <SortGlyph />
            </div>
            <div className="flex items-center justify-end gap-1.5">
              <span>%Chg</span>
              <SortGlyph />
            </div>
          </div>

          <div className="mt-2.5 space-y-4 min-[360px]:space-y-5">
            {rows.map((row, index) => (
              <div
                key={row.symbol}
                className="grid grid-cols-[minmax(0,1fr)_64px_74px_76px] items-center min-[360px]:grid-cols-[minmax(0,1fr)_72px_82px_86px]"
              >
                <div className="min-w-0 pr-2">
                  <div className="flex items-start gap-1.5">
                    <p className="text-[15px] font-medium leading-none tracking-[-0.03em] text-white/94 min-[360px]:text-[15px]">{row.symbol}</p>
                    <span className="pt-0.5 text-[10px] font-medium leading-none tracking-[-0.03em] text-[#be8d2d] min-[360px]:text-[11px]">
                      {row.marketSuffix}
                    </span>
                  </div>
                  <div className="mt-1.5 flex min-w-0 items-center gap-1.5 min-[360px]:mt-2 min-[360px]:gap-2">
                    <Image src={row.flagSrc} alt="" width={14} height={14} className="h-[14px] w-[14px] shrink-0 rounded-full min-[360px]:h-4 min-[360px]:w-4" />
                    <p className="truncate text-[10px] leading-none text-white/58 min-[360px]:text-[11px]">{row.company}</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Sparkline points={row.trend} id={`spark-${index}`} />
                </div>

                <div className="justify-self-end text-right">
                  <p className="text-[16px] font-medium leading-none tracking-[-0.03em] text-[#2cc6aa] min-[360px]:text-[16px]">{row.price}</p>
                  <p className="mt-1.5 text-[9px] leading-none text-white/42 min-[360px]:mt-2 min-[360px]:text-[10px]">
                    {row.secondaryPrice}
                  </p>
                </div>

                <div className="justify-self-end text-right">
                  <div className="inline-flex min-w-[70px] justify-center rounded-[6px] bg-[linear-gradient(180deg,#28d7a9_0%,#1fc894_100%)] px-1.5 py-1.5 shadow-[0_6px_14px_rgba(29,200,150,0.14)] min-[360px]:min-w-[70px] min-[360px]:px-2 min-[360px]:py-1">
                    <span className="text-[10px] font-semibold tracking-[-0.02em] text-white min-[360px]:text-[11px]">{row.gain}</span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-end gap-1.5 min-[360px]:mt-2 min-[360px]:gap-2">
                    <span className="text-[8px] leading-none text-white/62 min-[360px]:text-[9px]">{row.intradayDelta}</span>
                    <span className="rounded-[4px] bg-[#8c92a7] px-1.5 py-0.5 text-[8px] font-semibold leading-none tracking-[-0.02em] text-[#12151d] min-[360px]:px-2 min-[360px]:py-1 min-[360px]:text-[9px]">
                      {row.sessionLabel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 border-t border-white/[0.08] pt-5 min-[360px]:mt-10 min-[360px]:pt-6">
          <h2 className="text-[13px] font-medium tracking-[-0.02em] text-white/62 min-[360px]:text-[14px]">Disclaimer</h2>

          <div className="mt-3 text-[9px] leading-[1.45] text-white/38 min-[360px]:mt-4 min-[360px]:text-[10px]">
            <div className="mb-1.5 flex items-center gap-2">
              <span className="inline-flex items-center gap-1">
                <span className="h-3.5 w-3.5 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#00d8ff_0deg,#1a7cff_140deg,#3ce4b3_280deg,#00d8ff_360deg)] opacity-90 min-[360px]:h-4 min-[360px]:w-4" />
                <span className="text-[10px] font-semibold tracking-[-0.03em] text-[#32d3b0] min-[360px]:text-[11px]">GTN</span>
              </span>
              <span className="text-[10px] leading-none tracking-[-0.02em] text-white/55 min-[360px]:text-[11px]">Market Data Provided by GTN</span>
            </div>

            <p>
              The market data provided by GTN excludes data from the stock exchanges in Thailand (TH-EXs), the United States (US-EXs), and
              Hong Kong (HK-EXs). Market data from TH-EXs is provided by the Stock Exchange of Thailand and is real-time. Market Data from
              US-EXs and HK-EXs is provided by LSEG.{" "}
              <span className="text-[#d0a03d]">
                The market data provided by GTN and LSEG is delayed by 15 minutes
              </span>{" "}
              unless real-time market data subscription has been subscribed by the user. InnovestX does not guarantee or affirm the accuracy
              of the data displayed through this Applications provided from third-party providers, including but not limited to, those market
              data, company financial, security information (the Data). You may wish to review the Data from other official public data
              sources or providers.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

function SortGlyph() {
  return (
    <span className="flex flex-col gap-[1px] text-white/46">
      <ChevronUp className="h-2.5 w-2.5 stroke-[2.4]" />
      <ChevronDown className="-mt-1 h-2.5 w-2.5 stroke-[2.4]" />
    </span>
  );
}

function Sparkline({ points, id }: { points: number[]; id: string }) {
  const width = 76;
  const height = 40;
  const high = Math.max(...points);
  const low = Math.min(...points);
  const range = Math.max(high - low, 1);
  const step = width / (points.length - 1);

  const coordinates = points.map((point, index) => {
    const x = index * step;
    const y = height - ((point - low) / range) * (height - 8) - 4;
    return { x, y };
  });

  const linePath = coordinates.map(({ x, y }, index) => `${index === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const areaPath = `${linePath} L ${width},${height} L 0,${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-[34px] w-[64px] overflow-visible min-[360px]:h-[38px] min-[360px]:w-[72px]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff4268" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#ff4268" stopOpacity="0" />
        </linearGradient>
        <filter id={`${id}-glow`} x="-20%" y="-20%" width="140%" height="160%">
          <feGaussianBlur stdDeviation="4.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path d={areaPath} fill={`url(#${id}-fill)`} />
      <path
        d={linePath}
        fill="none"
        stroke="#f04c68"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#${id}-glow)`}
      />
    </svg>
  );
}
