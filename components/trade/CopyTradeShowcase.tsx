"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import CardGlass from "@/components/ui/CardGlass";
import CopyTradeInvestorList from "@/components/trade/CopyTradeInvestorList";
import { sortCopyTradeInvestors, type CopyTradeInvestor, type CopyTradeSortOption } from "@/lib/data/mock";

export interface CopyTradeShowcaseProps {
  title?: string;
  description: string;
  investors: CopyTradeInvestor[];
  activeSort?: CopyTradeSortOption;
  sortOptions: CopyTradeSortOption[];
  detailHrefBase: string;
  previewCount?: number;
  actionHref?: string;
  actionLabel?: string;
  className?: string;
}

export default function CopyTradeShowcase({
  title = "Copy Trade",
  description,
  investors,
  activeSort = "Most Viewed",
  sortOptions,
  detailHrefBase,
  previewCount,
  actionHref,
  actionLabel,
  className = "",
}: CopyTradeShowcaseProps) {
  const [selectedSort, setSelectedSort] = useState<CopyTradeSortOption>(activeSort);
  const visibleInvestors = sortCopyTradeInvestors(investors, selectedSort).slice(0, previewCount ?? investors.length);

  return (
    <CardGlass className={`overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.16),transparent_30%),rgba(10,12,20,0.8)] p-4 min-[360px]:p-5 ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-[24px] font-semibold tracking-[-0.05em] text-white min-[360px]:text-[26px]">{title}</h2>
          <p className="mt-2 max-w-[32ch] text-[14px] leading-6 text-white/64 min-[360px]:text-[15px]">{description}</p>
        </div>

        {actionHref ? (
          <Link
            href={actionHref}
            aria-label={actionLabel ?? "View all copy trade investors"}
            className="tap flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/70"
          >
            <ArrowRight className="h-5 w-5" />
          </Link>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {sortOptions.map((option) => {
          const active = option === selectedSort;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setSelectedSort(option)}
              className={`tap rounded-full border px-5 py-3 text-[14px] font-semibold tracking-[-0.02em] min-[360px]:px-6 min-[360px]:text-[15px] ${
                active
                  ? "border-white/60 bg-white/[0.03] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
                  : "border-white/[0.12] bg-white/[0.02] text-white/72"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <CopyTradeInvestorList investors={visibleInvestors} hrefBase={detailHrefBase} className="mt-5" />

      {actionHref && actionLabel ? (
        <Link
          href={actionHref}
          className="mt-4 inline-flex items-center gap-2 text-[13px] font-medium text-[#9f8df0] transition-colors hover:text-[#b2a5ff]"
        >
          <span>{actionLabel}</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </CardGlass>
  );
}
