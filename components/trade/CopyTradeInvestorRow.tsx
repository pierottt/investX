import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CopyTradeAvatar from "@/components/trade/CopyTradeAvatar";
import type { CopyTradeInvestor } from "@/lib/data/mock";

export interface CopyTradeInvestorRowProps {
  investor: CopyTradeInvestor;
  href: string;
  showDivider?: boolean;
  className?: string;
}

function formatAssetsUsd(value: number) {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(2)} Billion`;
  }

  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(2)} Million`;
  }

  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(2)}K`;
  }

  return value.toFixed(0);
}

export default function CopyTradeInvestorRow({
  investor,
  href,
  showDivider = false,
  className = "",
}: CopyTradeInvestorRowProps) {
  return (
    <Link
      href={href}
      className={`group relative flex items-center gap-3 rounded-[1.35rem] px-3 py-3 transition-colors hover:bg-white/[0.03] ${className}`}
    >
      <CopyTradeAvatar avatar={investor.avatar} size="md" />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-[15px] font-semibold tracking-[-0.03em] text-white min-[360px]:text-[16px]">
              {investor.name}
            </p>
            <p className="mt-0.5 truncate text-[12px] text-white/56 min-[360px]:text-[13px]">{investor.focusLabel}</p>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-[15px] font-semibold tracking-[-0.03em] text-white min-[360px]:text-[16px]">
              {formatAssetsUsd(investor.assetsUsd)}
            </p>
            <p className="mt-0.5 text-[11px] uppercase tracking-[0.12em] text-white/38">USD</p>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/68">
            <span className="text-emerald-300">{investor.yearlyReturnPct.toFixed(1)}%</span>
            <span className="text-white/38">1Y</span>
          </div>

          <ChevronRight className="h-4 w-4 shrink-0 text-white/28 transition-transform group-hover:translate-x-0.5 group-hover:text-white/50" />
        </div>
      </div>

      {showDivider ? <div className="absolute inset-x-3 bottom-0 border-b border-white/[0.08]" /> : null}
    </Link>
  );
}
