"use client";

import { useState } from "react";
import { Mail, Search } from "lucide-react";
import { portfolio } from "@/lib/data/mock";

const emptyStateTabs = ["Assets", "Orders", "Transactions", "Cash Balance"];
const RING_COLORS = ["#1C7CF3", "#6D38C5", "#E7E91F", "#46CFE5", "#8E8EFF", "#B44BEF", "#A7D736", "#6B7280"];

export default function PortfolioPage() {
  const [showPreviousState, setShowPreviousState] = useState(false);

  const totalAllocation = portfolio.allocations.reduce((sum, allocation) => sum + allocation.value, 0);
  const radius = 106;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;
  const ringSegments = portfolio.allocations.map((allocation, index) => {
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

  return (
    <div className="page-scroll no-scrollbar bg-[radial-gradient(circle_at_50%_-20%,rgba(94,100,220,0.16)_0%,#070a12_35%,#05070d_100%)]">
      <div className="page-x pb-safe-nav pt-safe-top">
        <header className="flex items-center justify-between">
          <h1 className="text-[29px] font-semibold tracking-tight text-white/92 min-[360px]:text-[31px]">Portfolio</h1>
          <div className="flex items-center gap-1.5">
            <button type="button" className="tap flex h-8 w-8 items-center justify-center rounded-full text-white/72 min-[360px]:h-9 min-[360px]:w-9">
              <Search className="h-5 w-5" />
            </button>
            <button type="button" className="tap relative flex h-8 w-8 items-center justify-center rounded-full text-white/72 min-[360px]:h-9 min-[360px]:w-9">
              <Mail className="h-5 w-5" />
              <span className="absolute right-1.5 top-2 h-1.5 w-1.5 rounded-full bg-[#ff5d72]" />
            </button>
          </div>
        </header>

        <section className="no-scrollbar mt-2.5 overflow-x-auto">
          <div className="flex w-max min-w-full items-center gap-2 pr-2">
            {emptyStateTabs.map((tab, index) => {
              const active = index === 0;
              return (
                <button
                  key={tab}
                  type="button"
                  className={`tap rounded-full border px-3 py-0.5 text-[12px] min-[360px]:px-3.5 min-[360px]:text-[13px] ${
                    active
                      ? "border-[#6166d4]/65 bg-[#5a61d8] font-semibold text-white"
                      : "border-white/[0.08] bg-white/[0.015] text-white/55"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-5 flex items-start justify-between gap-3">
          <div>
            <div className="text-[20px] font-semibold leading-none tracking-tight text-white/93 min-[360px]:text-[25px]">
              {showPreviousState
                ? `฿${portfolio.total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                : "฿0.00"}
            </div>
            <div className={`mt-1 text-[13px] min-[360px]:text-[14px] ${showPreviousState ? "text-[#37D399]" : "text-white/46"}`}>
              {showPreviousState
                ? `+${portfolio.gainValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (+${portfolio.gainPct.toFixed(2)}%)`
                : "0.00 (0.00%)"}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowPreviousState(true)}
            className="tap mt-0.5 inline-flex items-center gap-1.5 rounded-full border border-[#3f437b]/65 bg-[#1d2446]/80 px-2.5 py-1 text-[11px] font-semibold text-[#96a2ff] min-[360px]:px-3 min-[360px]:text-[12px]"
          >
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#4c58e0] text-[9px] text-white">◉</span>
            View Analytic
          </button>
        </section>

        {showPreviousState ? (
          <section className="mt-10">
            <div className="flex flex-col items-center">
              <div className="relative h-[260px] w-[260px] min-[390px]:h-[276px] min-[390px]:w-[276px]">
                <svg viewBox="0 0 260 260" className="h-full w-full -rotate-90" aria-hidden="true">
                  <circle cx="130" cy="130" r={radius} fill="none" stroke="#171A2B" strokeWidth="18" />
                  {ringSegments.map((segment) => (
                    <circle
                      key={segment.label}
                      cx="130"
                      cy="130"
                      r={radius}
                      fill="none"
                      stroke={segment.color}
                      strokeWidth="18"
                      strokeLinecap="butt"
                      strokeDasharray={`${segment.length} ${circumference - segment.length}`}
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
                    +{portfolio.gainValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (+{portfolio.gainPct.toFixed(2)}%)
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
          </section>
        ) : (
          <section className="mt-16 flex flex-col items-center text-center min-[360px]:mt-20">
            <button
              type="button"
              onClick={() => setShowPreviousState(true)}
              className="tap relative h-36 w-36 rounded-full min-[360px]:h-40 min-[360px]:w-40"
              aria-label="Show portfolio analytics"
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(90,99,221,0.35),transparent_58%)]" />
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#474b82]/55 bg-[#10162a]/70 min-[360px]:h-22 min-[360px]:w-22" />
              <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#676cc8]/65 bg-[#242b4f]/65 min-[360px]:h-11 min-[360px]:w-11" />
              <div className="absolute left-1/2 top-[38%] h-8 w-8 -translate-x-1/2 rotate-45 border border-[#8d7ce4]/80 bg-[#443f80]/55 min-[360px]:h-9 min-[360px]:w-9" />
            </button>
            <p className="mt-1 text-[16px] leading-snug text-white/72 min-[360px]:text-[18px]">ลงทุนง่าย ปลอดภัย ครบทุกมิติการลงทุน</p>
            <button type="button" className="tap mt-1.5 text-[15px] text-[#8895ff] underline decoration-[#8895ff]/60 underline-offset-4 min-[360px]:text-[16px]">
              เริ่มลงทุนกับ InnovestX
            </button>
          </section>
        )}
      </div>
    </div>
  );
}
