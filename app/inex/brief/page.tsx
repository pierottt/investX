import Link from "next/link";
import { ChevronLeft, Sparkles } from "lucide-react";
import InexSourcePill from "@/components/inex/InexSourcePill";
import { inexSummaries } from "@/lib/data/inexSummaries";

export default function InexBriefFeedPage() {
  return (
    <div className="page-scroll no-scrollbar bg-[radial-gradient(circle_at_50%_-18%,rgba(84,90,210,0.3)_0%,rgba(8,10,16,0.94)_36%,#05070d_100%)]">
      <div className="page-x pb-safe-nav pt-safe-top">
        <header className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="tap flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.02] text-white/72"
            aria-label="Back to home"
          >
            <ChevronLeft className="h-4.5 w-4.5" />
          </Link>

          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#9f8df0]">Asset Brief</p>
            <p className="text-[12px] text-white/50">Stocks, FX, rates, commodities</p>
          </div>
        </header>

        <section className="mt-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#5f63b6]/50 bg-[#2f286a]/35 px-2.5 py-1 text-[11px] font-medium text-[#a8acff]">
            <Sparkles className="h-3.5 w-3.5" />
            Short lines for held assets
          </div>
        </section>

        <section className="mt-3.5 rounded-[22px] border border-[#6f75dc]/58 bg-[#151a26]/84 p-3.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02),0_24px_42px_rgba(0,0,0,0.4)] min-[360px]:p-4">
          <div className="space-y-0">
            {inexSummaries.map((summary) => {
              const isPositive = summary.forecast.tone === "up";
              const forecastAccent = isPositive ? "var(--gain)" : "var(--loss)";

              return (
                <div key={summary.id} className="border-b border-white/[0.06] py-2.5 last:border-b-0 last:pb-0 first:pt-0">
                  <div className="flex items-start justify-between gap-3">
                    <p className="min-w-0 flex-1 text-[13px] leading-snug text-white/88 min-[360px]:text-[14px]">
                      <span className="font-medium text-white/95">{summary.asset}:</span> <span>{summary.brief}</span>
                    </p>
                    <div className="mt-0.5 shrink-0 text-right">
                      <p className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/32">Forecast</p>
                      <div className="mt-1 flex items-baseline justify-end gap-1.5">
                        <p className="text-[11px] font-semibold leading-none tabular-nums min-[360px]:text-[12px]" style={{ color: forecastAccent }}>
                          {summary.forecast.price}
                        </p>
                        <p className="text-[9.5px] font-semibold leading-none tabular-nums min-[360px]:text-[10px]" style={{ color: forecastAccent }}>
                          {summary.forecast.changePct}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1.5 inline-flex flex-wrap items-center gap-1 align-middle">
                    {summary.sources.map((source) => (
                      <a
                        key={`${summary.id}-${source.id}`}
                        href={source.href}
                        target="_blank"
                        rel="noreferrer"
                        className="tap inline-flex align-middle"
                        aria-label={`Open ${source.name} source`}
                      >
                        <InexSourcePill source={source} className="border-white/[0.12] bg-[#171d2c]/95 px-1.5 py-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
