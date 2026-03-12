import CopyTradeAvatar from "@/components/trade/CopyTradeAvatar";
import CopyTradeMetricChip from "@/components/trade/CopyTradeMetricChip";
import type { CopyTradeInvestor } from "@/lib/data/mock";

export interface CopyTradeProfileCardProps {
  investor: CopyTradeInvestor;
  className?: string;
}

function formatUsdCompact(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export default function CopyTradeProfileCard({ investor, className = "" }: CopyTradeProfileCardProps) {
  return (
    <section className={`rounded-[1.7rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,20,29,0.95)_0%,rgba(12,14,22,0.95)_100%)] p-3.5 min-[360px]:p-4 ${className}`}>
      <div className="flex items-start gap-3">
        <CopyTradeAvatar avatar={investor.avatar} size="lg" />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-[21px] font-semibold tracking-[-0.05em] text-white min-[360px]:text-[24px]">{investor.name}</h1>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-white/48">
              {investor.updatedLabel}
            </span>
          </div>
          <p className="mt-1.5 text-[13px] text-white/64 min-[360px]:text-[14px]">{investor.focusLabel}</p>
          <p className="mt-2.5 text-[12px] leading-5 text-white/72 min-[360px]:text-[13px]">{investor.thesis}</p>
        </div>
      </div>

      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {investor.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/68">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <CopyTradeMetricChip label="AUM" value={formatUsdCompact(investor.assetsUsd)} />
        <CopyTradeMetricChip label="Copiers" value={investor.copiers.toLocaleString("en-US")} />
        <CopyTradeMetricChip label="Win Rate" value={`${investor.winRatePct.toFixed(0)}%`} tone="positive" />
        <CopyTradeMetricChip label="Min. Copy" value={`$${investor.minCopyUsd.toLocaleString("en-US")}`} />
      </div>
    </section>
  );
}
