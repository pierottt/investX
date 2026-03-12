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
          <div className="space-y-3">
            {inexSummaries.map((summary) => (
              <p key={summary.id} className="text-[13px] leading-snug text-white/88 min-[360px]:text-[14px]">
                <span className="font-medium text-white/95">{summary.asset}:</span> <span>{summary.brief} </span>
                <span className="inline-flex flex-wrap items-center gap-1 align-middle">
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
                </span>
              </p>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
