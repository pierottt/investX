import Image from "next/image";
import Link from "next/link";
import CardGlass from "@/components/ui/CardGlass";
import SparklineMini from "@/components/ui/SparklineMini";
import type { TradeTopPick } from "@/lib/data/mock";

export interface TopPickCardProps {
  topPick: TradeTopPick;
  className?: string;
}

function formatSigned(value: number) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}`;
}

export default function TopPickCard({ topPick, className = "" }: TopPickCardProps) {
  const isPositive = topPick.change >= 0;

  return (
    <CardGlass className={`p-4 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <h2 className="text-lg font-semibold leading-tight text-white min-[360px]:text-xl">INVX Top Picks</h2>
        <Image src="/trade/invest-ideas-mark.svg" alt="Invest Ideas" width={62} height={18} className="h-auto w-[62px] opacity-85" />
      </div>

      <p className="pt-2 text-[13px] leading-tight text-white/75 min-[360px]:text-sm">
        Analyst-backed picks with strategic signals and momentum insight.
      </p>
      <p className="pt-1 text-[13px] leading-tight text-white/75 min-[360px]:text-sm">
        Discover more at <span className="text-[rgb(141,117,220)] underline decoration-white/30 underline-offset-2">Invest Ideas</span>
      </p>

      <Link href={`/stocks/${topPick.ticker}`} className="mt-4 flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] px-2.5 py-3 hover:bg-white/[0.05] transition-colors">
        <div className="min-w-0 flex-1">
          <div className="truncate text-[15px] font-medium text-white min-[360px]:text-base">{topPick.ticker}</div>
          <div className="truncate pt-0.5 text-[12px] text-white/55 min-[360px]:text-sm">{topPick.company}</div>
        </div>

        <SparklineMini points={topPick.sparkline} trend={isPositive ? "up" : "down"} className="h-7 w-[72px] shrink-0" />

        <div className="shrink-0 text-right">
          <div className="text-[15px] font-medium tabular-nums min-[360px]:text-base" style={{ color: isPositive ? "var(--gain)" : "var(--loss)" }}>
            {topPick.price.toFixed(2)}
          </div>
          <div className="text-[12px] tabular-nums min-[360px]:text-sm" style={{ color: isPositive ? "var(--gain)" : "var(--loss)" }}>
            {formatSigned(topPick.change)}
          </div>
        </div>

        <div className="shrink-0 rounded-lg bg-[rgba(239,68,68,0.9)] px-2 py-1 text-[11px] font-semibold tabular-nums text-white min-[360px]:text-xs">
          {formatSigned(topPick.changePct)}%
        </div>
      </Link>
    </CardGlass>
  );
}
