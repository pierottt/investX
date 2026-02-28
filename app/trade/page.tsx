"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import PageHeader from "@/components/shell/PageHeader";
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
  type TradeLeaderboardSegment,
} from "@/lib/data/mock";

const listSegments: TradeLeaderboardSegment[] = ["Most Active Value", "Top Gainers", "Top Losers"];

export default function TradePage() {
  const [activeCategory, setActiveCategory] = useState("Stocks & ETFs");

  return (
    <div className="page-scroll no-scrollbar">
      <div className="page-x pb-safe-nav pt-safe-top">
        <PageHeader title="Trade" />

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

        <IndexLeaderboard summary={tradeIndexSummary} segments={listSegments} activeSegment={tradeIndexSummary.segment} rows={tradeQuoteRows} className="mt-3" />
      </div>
    </div>
  );
}
