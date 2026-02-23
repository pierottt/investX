"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/shell/PageHeader";
import UnderlineTabs from "@/components/ui/UnderlineTabs";
import { portfolio } from "@/lib/data/mock";

const RING_COLORS = ["#1C7CF3", "#6D38C5", "#E7E91F", "#46CFE5", "#8E8EFF", "#B44BEF", "#A7D736", "#6B7280"];

export default function PortfolioPage() {
  const tabs = ["Asset", "Cash", "Analytic", "Transaction", "Cash Statement"];
  const [tab, setTab] = useState("Analytic");

  const totalAllocation = useMemo(
    () => portfolio.allocations.reduce((sum, allocation) => sum + allocation.value, 0),
    []
  );

  const ring = useMemo(() => {
    const radius = 106;
    const circumference = 2 * Math.PI * radius;
    let offset = 0;

    const segments = portfolio.allocations.map((allocation, index) => {
      const length = totalAllocation > 0 ? (allocation.value / totalAllocation) * circumference : 0;
      const segment = {
        label: allocation.label,
        length,
        offset,
        color: RING_COLORS[index % RING_COLORS.length],
      };
      offset += length;
      return segment;
    });

    return { radius, circumference, segments };
  }, [totalAllocation]);

  return (
    <div className="page-scroll no-scrollbar bg-[radial-gradient(circle_at_top,_#16182b_0%,_#090b15_55%,_#070910_100%)]">
      <div className="page-x pb-safe-nav pt-4 min-[390px]:pt-5">
        <PageHeader title="Portfolio" />
        <UnderlineTabs
          items={tabs}
          active={tab}
          onChange={setTab}
          className="mt-4"
          ariaLabel="Portfolio sections"
        />

        <div className="mt-6 flex flex-col items-center">
          <div className="relative h-[260px] w-[260px] min-[390px]:h-[276px] min-[390px]:w-[276px]">
            <svg viewBox="0 0 260 260" className="h-full w-full -rotate-90" aria-hidden="true">
              <circle cx="130" cy="130" r={ring.radius} fill="none" stroke="#171A2B" strokeWidth="18" />
              {ring.segments.map((segment) => (
                <circle
                  key={segment.label}
                  cx="130"
                  cy="130"
                  r={ring.radius}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth="18"
                  strokeLinecap="butt"
                  strokeDasharray={`${segment.length} ${ring.circumference - segment.length}`}
                  strokeDashoffset={-segment.offset}
                />
              ))}
              <circle cx="130" cy="130" r="88" fill="#080B16" stroke="#252B41" strokeWidth="2" />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <div className="text-xs text-white/55">Total Portfolio</div>
              <div className="mt-1 text-[22px] font-semibold leading-none tracking-tight text-white min-[390px]:text-[24px]">
                ฿{portfolio.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
              <div className="mt-2 text-[12px] font-medium tabular-nums text-[#37D399] min-[390px]:text-[13px]">
                +{portfolio.gainValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (+
                {portfolio.gainPct.toFixed(2)}%)
              </div>
            </div>
          </div>

          <div className="mt-6 w-full">
            <div className="mb-2.5 flex items-center justify-between">
              <div className="text-[15px] font-semibold text-white min-[390px]:text-base">List</div>
              <div className="flex items-center gap-1">
                <span className="rounded-md bg-[#5B3CC0]/55 px-2 py-0.5 text-[10px] font-semibold text-white/90">B</span>
                <span className="rounded-md border border-white/15 bg-white/5 px-1.5 py-0.5 text-[10px] text-white/65">%</span>
              </div>
            </div>

            <div className="space-y-2.5">
              {portfolio.allocations.map((allocation, index) => (
                <div key={allocation.label} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: RING_COLORS[index % RING_COLORS.length] }}
                    />
                    <span className="truncate text-[13px] text-white/76 min-[390px]:text-[14px]">{allocation.label}</span>
                  </div>
                  <span className="text-right text-[16px] leading-none text-white/90 tabular-nums min-[390px]:text-[17px]">
                    {allocation.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
