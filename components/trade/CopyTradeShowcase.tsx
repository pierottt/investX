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
  density?: "default" | "compact";
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
  density = "default",
  className = "",
}: CopyTradeShowcaseProps) {
  const [selectedSort, setSelectedSort] = useState<CopyTradeSortOption>(activeSort);
  const visibleInvestors = sortCopyTradeInvestors(investors, selectedSort).slice(0, previewCount ?? investors.length);
  const isCompact = density === "compact";

  return (
    <CardGlass
      className={`overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.16),transparent_30%),rgba(10,12,20,0.8)] ${
        isCompact ? "p-3.5 min-[360px]:p-4" : "p-4 min-[360px]:p-5"
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2
            className={`font-semibold tracking-[-0.05em] text-white ${
              isCompact ? "text-[21px] min-[360px]:text-[23px]" : "text-[24px] min-[360px]:text-[26px]"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-2 max-w-[32ch] text-white/64 ${
              isCompact ? "text-[13px] leading-5 min-[360px]:text-[14px]" : "text-[14px] leading-6 min-[360px]:text-[15px]"
            }`}
          >
            {description}
          </p>
        </div>

        {actionHref ? (
          <Link
            href={actionHref}
            aria-label={actionLabel ?? "View all copy trade investors"}
            className={`tap flex shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/70 ${
              isCompact ? "h-9 w-9" : "h-10 w-10"
            }`}
          >
            <ArrowRight className={isCompact ? "h-4.5 w-4.5" : "h-5 w-5"} />
          </Link>
        ) : null}
      </div>

      <div className={`flex flex-wrap ${isCompact ? "mt-4 gap-2.5" : "mt-5 gap-3"}`}>
        {sortOptions.map((option) => {
          const active = option === selectedSort;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setSelectedSort(option)}
              className={`tap rounded-full border font-semibold tracking-[-0.02em] ${
                isCompact ? "px-4 py-2 text-[13px] min-[360px]:px-4.5 min-[360px]:text-[14px]" : "px-5 py-3 text-[14px] min-[360px]:px-6 min-[360px]:text-[15px]"
              } ${
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

      <CopyTradeInvestorList
        investors={visibleInvestors}
        hrefBase={detailHrefBase}
        density={density}
        className={isCompact ? "mt-4" : "mt-5"}
      />

      {actionHref && actionLabel ? (
        <Link
          href={actionHref}
          className={`inline-flex items-center gap-2 font-medium text-[#9f8df0] transition-colors hover:text-[#b2a5ff] ${
            isCompact ? "mt-3 text-[12px]" : "mt-4 text-[13px]"
          }`}
        >
          <span>{actionLabel}</span>
          <ArrowRight className={isCompact ? "h-3.5 w-3.5" : "h-4 w-4"} />
        </Link>
      ) : null}
    </CardGlass>
  );
}
