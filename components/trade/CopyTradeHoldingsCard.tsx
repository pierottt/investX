import type { CopyTradeHolding } from "@/lib/data/mock";

export interface CopyTradeHoldingsCardProps {
  holdings: CopyTradeHolding[];
  className?: string;
}

export default function CopyTradeHoldingsCard({ holdings, className = "" }: CopyTradeHoldingsCardProps) {
  return (
    <section className={`rounded-[1.7rem] border border-white/[0.08] bg-[#10131d]/90 p-3.5 min-[360px]:p-4 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[20px] font-semibold tracking-[-0.04em] text-white min-[360px]:text-[22px]">Top holdings</p>
          <p className="mt-1 text-[12px] text-white/56 min-[360px]:text-[13px]">Highest conviction positions in this portfolio.</p>
        </div>
      </div>

      <div className="mt-3.5 space-y-2.5">
        {holdings.map((holding) => (
          <div
            key={holding.ticker}
            className="flex items-center justify-between gap-3 rounded-[1.1rem] border border-white/[0.06] bg-white/[0.03] px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="text-[14px] font-semibold text-white min-[360px]:text-[15px]">{holding.ticker}</p>
              <p className="truncate text-[11px] text-white/56 min-[360px]:text-[12px]">{holding.company}</p>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-[13px] font-semibold text-white min-[360px]:text-[14px]">{holding.weightPct.toFixed(1)}%</p>
              <p className={`text-[11px] ${holding.returnPct >= 0 ? "text-emerald-300" : "text-rose-300"}`}>
                {holding.returnPct >= 0 ? "+" : ""}
                {holding.returnPct.toFixed(1)}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
