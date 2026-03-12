import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import CopyTradeShowcase from "@/components/trade/CopyTradeShowcase";
import { copyTradeInvestors, copyTradeSortOptions } from "@/lib/data/mock";

export const metadata = {
  title: "Copy Trade",
};

export default function CopyTradePage() {
  return (
    <div className="page-scroll no-scrollbar bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.16),transparent_28%),linear-gradient(180deg,#090b12_0%,#0f1320_58%,#090b12_100%)]">
      <div className="page-x pb-safe-nav pt-safe-top">
        <header className="flex items-start gap-3">
          <Link href="/trade" className="tap mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/72">
            <ChevronLeft className="h-4.5 w-4.5" />
          </Link>

          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#9f8df0]">Trade</p>
            <h1 className="mt-1 text-[26px] font-semibold tracking-[-0.05em] text-white min-[360px]:text-[29px]">Copy Trade</h1>
            <p className="mt-1.5 max-w-[33ch] text-[13px] leading-5 text-white/60 min-[360px]:text-[14px]">
              Follow top investors, compare their performance, and choose a strategy to copy with confidence.
            </p>
          </div>
        </header>

        <CopyTradeShowcase
          title="Investor Directory"
          description="Explore investor strategies, review performance, and start copying the approach that fits your goals."
          investors={copyTradeInvestors}
          sortOptions={copyTradeSortOptions}
          detailHrefBase="/trade/copy-trade"
          density="compact"
          className="mt-4"
        />
      </div>
    </div>
  );
}
