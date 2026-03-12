import SparklineMini from "@/components/ui/SparklineMini";
import type { CopyTradeInvestor } from "@/lib/data/mock";

export interface CopyTradePerformanceCardProps {
  investor: CopyTradeInvestor;
  activeWindow?: string;
  className?: string;
}

export default function CopyTradePerformanceCard({
  investor,
  activeWindow = "1Y",
  className = "",
}: CopyTradePerformanceCardProps) {
  return (
    <section className={`rounded-[1.7rem] border border-white/[0.08] bg-[#10131d]/90 p-3.5 min-[360px]:p-4 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-white/42">Portfolio growth</p>
          <p className="mt-1.5 text-[24px] font-semibold tracking-[-0.05em] text-emerald-300 min-[360px]:text-[28px]">
            +{investor.yearlyReturnPct.toFixed(1)}%
          </p>
          <p className="mt-1 text-[12px] text-white/54 min-[360px]:text-[13px]">{investor.strategyLabel}</p>
        </div>

        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-2.5 py-1 text-[11px] font-medium text-emerald-300">
          {investor.riskLabel}
        </div>
      </div>

      <div className="mt-3.5 rounded-[1.2rem] border border-white/[0.06] bg-white/[0.02] p-2.5">
        <SparklineMini
          points={investor.performancePoints}
          trend="up"
          className="h-20 w-full"
          preserveAspectRatio="none"
        />
      </div>

      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {investor.performanceWindows.map((window) => {
          const active = window.label === activeWindow;

          return (
            <div
              key={window.label}
              className={`rounded-full border px-2.5 py-1 text-[11px] ${
                active
                  ? "border-white/50 bg-white/[0.06] text-white"
                  : "border-white/[0.08] bg-white/[0.03] text-white/58"
              }`}
            >
              <span>{window.label}</span>
              <span className="ml-2 text-emerald-300">{window.returnPct.toFixed(1)}%</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
