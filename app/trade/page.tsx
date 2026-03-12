"use client";

import { useState } from "react";
import { Mail, Search } from "lucide-react";
import InexActionButton from "@/components/shell/InexActionButton";
import CopyTradeShowcase from "@/components/trade/CopyTradeShowcase";
import TopPickCard from "@/components/trade/TopPickCard";
import IndexLeaderboard from "@/components/trade/IndexLeaderboard";
import SegmentedPill from "@/components/ui/SegmentedPill";
import UnderlineTabs from "@/components/ui/UnderlineTabs";
import ChipRow from "@/components/ui/ChipRow";
import {
  tradeCategories,
  tradeRegions,
  tradeTopPick,
  tradeIndexSummary,
  tradeQuoteRows,
  copyTradeInvestors,
  copyTradeSortOptions,
  type TradeLeaderboardSegment,
} from "@/lib/data/mock";

const listSegments: TradeLeaderboardSegment[] = ["Most Active Value", "Top Gainers", "Top Losers"];

export default function TradePage() {
  const [activeCategory, setActiveCategory] = useState("Stocks & ETFs");

  return (
    <div className="page-scroll no-scrollbar">
      <div className="page-x pb-safe-nav pt-safe-top">
        <header className="flex items-center justify-between pt-0.5">
          <h1 className="text-[25px] font-semibold tracking-[-0.04em] text-white/90 min-[360px]:text-[27px]">Trade</h1>
          <div className="flex items-center gap-1">
            <button type="button" className="tap flex h-8 w-8 items-center justify-center rounded-full text-white/78 min-[360px]:h-9 min-[360px]:w-9">
              <Search className="h-5 w-5 stroke-[1.75] min-[360px]:h-5.5 min-[360px]:w-5.5" />
            </button>
            <button type="button" className="tap relative flex h-8 w-8 items-center justify-center rounded-full text-white/78 min-[360px]:h-9 min-[360px]:w-9">
              <Mail className="h-5 w-5 stroke-[1.75] min-[360px]:h-5.5 min-[360px]:w-5.5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#ff5d72] shadow-[0_0_0_2px_rgba(7,10,18,0.95)] min-[360px]:h-2.5 min-[360px]:w-2.5" />
            </button>
            <InexActionButton />
          </div>
        </header>

        <SegmentedPill
          items={["BUY / SELL"]}
          active="BUY / SELL"
          className="mt-3"
          leadingIcon={<Search className="h-4 w-4" />}
        />

        <UnderlineTabs
          items={tradeCategories}
          active={activeCategory}
          onChange={setActiveCategory}
          className="mt-3"
          ariaLabel="Trade categories"
        />

        <ChipRow
          items={tradeRegions.map((region) => ({
            id: region.id,
            label: region.label,
            iconSrc: region.flagSrc,
          }))}
          active="US"
          variant="soft"
          className="mt-3"
        />

        <TopPickCard topPick={tradeTopPick} className="mt-3" />

        <CopyTradeShowcase
          title="Copy Trade"
          description="Follow top investors, review their performance, and copy strategies in a few taps."
          investors={copyTradeInvestors}
          sortOptions={copyTradeSortOptions}
          previewCount={3}
          detailHrefBase="/trade/copy-trade"
          actionHref="/trade/copy-trade"
          density="compact"
          className="mt-3 h-[32svh] min-h-[255px] sm:h-auto sm:min-h-0"
        />

        <IndexLeaderboard summary={tradeIndexSummary} segments={listSegments} activeSegment={tradeIndexSummary.segment} rows={tradeQuoteRows} className="mt-3" />
      </div>
    </div>
  );
}
