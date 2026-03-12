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
    <section className={`rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,20,29,0.95)_0%,rgba(12,14,22,0.95)_100%)] p-4 min-[360px]:p-5 ${className}`}>
      <div className="flex items-start gap-4">
        <CopyTradeAvatar avatar={investor.avatar} size="lg" />

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-[24px] font-semibold tracking-[-0.05em] text-white min-[360px]:text-[28px]">{investor.name}</h1>
            <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-white/48">
              {investor.updatedLabel}
            </span>
          </div>
          <p className="mt-2 text-[14px] text-white/64 min-[360px]:text-[15px]">{investor.focusLabel}</p>
          <p className="mt-3 text-[13px] leading-6 text-white/72 min-[360px]:text-[14px]">{investor.thesis}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {investor.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[12px] text-white/68">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        <CopyTradeMetricChip label="AUM" value={formatUsdCompact(investor.assetsUsd)} />
        <CopyTradeMetricChip label="Copiers" value={investor.copiers.toLocaleString("en-US")} />
        <CopyTradeMetricChip label="Win Rate" value={`${investor.winRatePct.toFixed(0)}%`} tone="positive" />
        <CopyTradeMetricChip label="Min. Copy" value={`$${investor.minCopyUsd.toLocaleString("en-US")}`} />
      </div>
    </section>
  );
}
