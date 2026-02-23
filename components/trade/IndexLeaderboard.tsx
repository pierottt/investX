import { ChevronDown } from "lucide-react";
import QuoteTable from "@/components/ui/QuoteTable";
import type { TradeIndexSummary, TradeLeaderboardSegment, TradeQuoteRow } from "@/lib/data/mock";

export interface IndexLeaderboardProps {
  summary: TradeIndexSummary;
  segments: TradeLeaderboardSegment[];
  activeSegment: TradeLeaderboardSegment;
  rows: TradeQuoteRow[];
  className?: string;
}

const columns = [
  { key: "symbol", label: "Symbol" },
  { key: "price", label: "Price" },
  { key: "change", label: "Price Chg" },
  { key: "changePct", label: "%Chg" },
] as const;

export default function IndexLeaderboard({
  summary,
  segments,
  activeSegment,
  rows,
  className = "",
}: IndexLeaderboardProps) {
  return (
    <section className={`rounded-2xl border border-white/10 bg-[rgba(8,10,18,0.6)] p-3 min-[360px]:p-4 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-1 text-xl font-semibold text-white min-[360px]:text-2xl">
          <span>{summary.title}</span>
          <ChevronDown className="h-4 w-4 text-white/75" />
        </div>
        <div className="text-right text-[11px] text-white/40 min-[360px]:text-xs">{summary.updatedText}</div>
      </div>

      <div className="mt-2 flex items-center gap-2">
        {segments.map((segment) => {
          const isActive = segment === activeSegment;
          return (
            <div
              key={segment}
              className={`rounded-lg px-2.5 py-1 text-[11px] font-medium min-[360px]:text-sm ${
                isActive ? "bg-white/18 text-white" : "text-white/55"
              }`}
            >
              {segment}
            </div>
          );
        })}
      </div>

      <QuoteTable columns={[...columns]} rows={rows} className="mt-3" />
    </section>
  );
}
