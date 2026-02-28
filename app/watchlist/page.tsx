"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/shell/PageHeader";
import { watchlistItems, type WatchlistCategory, type WatchlistItem } from "@/lib/data/mock";
import CardGlass from "@/components/ui/CardGlass";
import UnderlineTabs from "@/components/ui/UnderlineTabs";

type WatchTab = "All" | WatchlistCategory;

const tabs: WatchTab[] = ["All", "Stocks", "ETFs", "Funds", "Bonds"];

export default function WatchlistPage() {
  const [activeTab, setActiveTab] = useState<WatchTab>("All");

  const filteredRows = useMemo(
    () => (activeTab === "All" ? watchlistItems : watchlistItems.filter((item) => item.category === activeTab)),
    [activeTab]
  );

  return (
    <div className="page-scroll no-scrollbar">
      <div className="page-x pb-safe-nav pt-safe-top">
        <PageHeader title="Watchlist" />
        <UnderlineTabs
          items={tabs}
          active={activeTab}
          onChange={(item) => setActiveTab(item as WatchTab)}
          className="mt-4"
          ariaLabel="Watchlist categories"
        />

        <CardGlass className="mt-3 p-4 min-[390px]:p-5">
          <div className="space-y-2">
            {filteredRows.map((item) => (
              <WatchlistRow key={item.symbol} item={item} />
            ))}
          </div>
        </CardGlass>
      </div>
    </div>
  );
}

function WatchlistRow({ item }: { item: WatchlistItem }) {
  const isGain = item.changePct > 0;
  const isLoss = item.changePct < 0;
  const pctText = `${item.changePct > 0 ? "+" : ""}${item.changePct.toFixed(2)}%`;
  const priceColor = isGain ? "text-[#37D399]" : isLoss ? "text-[#FF6B72]" : "text-white/75";

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_56px_120px] items-center gap-3 rounded-[10px] border border-white/[0.05] bg-white/[0.03] px-3 py-2.5">
      <div className="flex min-w-0 items-start gap-2.5">
        <span className="mt-[2px] inline-flex h-4.5 w-4.5 flex-shrink-0 items-center justify-center rounded-[4px] bg-white/10">
          <span className="h-2.5 w-2.5 rounded-[2px]" style={{ backgroundColor: item.markerColor }} />
        </span>
        <div className="min-w-0">
          <div className="truncate text-[13px] font-semibold leading-5 text-white">{item.symbol}</div>
          <div className="truncate text-[10px] leading-4 text-white/45">{item.company}</div>
        </div>
      </div>

      <div className="flex justify-center">
        <SparkStrip points={item.sparkline} trend={item.trend} id={item.symbol} />
      </div>

      <div className="flex items-center justify-end gap-2">
        <div className={`text-right text-[12px] font-semibold tabular-nums ${priceColor}`}>{item.price.toFixed(2)}</div>
        {item.quickActions ? (
          <div className="flex items-center gap-1">
            {item.quickActions.map((action) => (
              <span
                key={`${item.symbol}-${action.label}`}
                className={`rounded-[5px] border px-2 py-1 text-[9px] font-bold leading-none ${
                  action.tone === "buy"
                    ? "border-[#44A8FF]/40 bg-[#1D6ECB]/45 text-[#92D4FF]"
                    : "border-[#F87171]/40 bg-[#B33349]/45 text-[#FEB2B2]"
                }`}
              >
                {action.label}
              </span>
            ))}
          </div>
        ) : (
          <span
            className={`rounded-[6px] border px-2.5 py-1 text-[10px] font-bold leading-none tabular-nums ${
              isGain
                ? "border-[#29CC7A]/45 bg-[#1D7D57]/45 text-[#7DF0B8]"
                : isLoss
                ? "border-[#F87171]/45 bg-[#923444]/45 text-[#FEB2B2]"
                : "border-white/20 bg-white/10 text-white/70"
            }`}
          >
            {pctText}
          </span>
        )}
      </div>
    </div>
  );
}

function SparkStrip({ points, trend, id }: { points: number[]; trend: "up" | "down"; id: string }) {
  const width = 52;
  const height = 16;
  const top = Math.max(...points);
  const bottom = Math.min(...points);
  const range = Math.max(1, top - bottom);
  const step = points.length > 1 ? width / (points.length - 1) : 0;
  const line = points
    .map((point, index) => {
      const x = index * step;
      const y = height - ((point - bottom) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");

  const glowId = `wl-${id.toLowerCase()}-${trend}`;
  const stroke = trend === "up" ? "#24DB94" : "#FF5F66";

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-[16px] w-[52px]" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={glowId} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.2" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <polyline points={line} fill="none" stroke={`url(#${glowId})`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
