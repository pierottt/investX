"use client";

import { useState } from "react";
import { ChevronRight, Info } from "lucide-react";
import PageHeader from "@/components/shell/PageHeader";
import UnderlineTabs from "@/components/ui/UnderlineTabs";
import ChipRow from "@/components/ui/ChipRow";
import CardGlass from "@/components/ui/CardGlass";
import MetricBar from "@/components/ui/MetricBar";
import HeatmapGrid from "@/components/ui/HeatmapGrid";
import SparklineMini from "@/components/ui/SparklineMini";
import {
  marketBreadth,
  heatmap,
  upcomingEarnings,
  tradeRegions,
  thaiIndicesMock,
  worldIndicesMock,
} from "@/lib/data/mock";

export default function MarketsPage() {
  const [tab, setTab] = useState("Overview");

  return (
    <div className="page-scroll no-scrollbar">
      <div className="page-x pb-safe-nav pt-4 min-[390px]:pt-5">
        <PageHeader title="Markets" />
        <UnderlineTabs
          items={["Overview", "Stocks"]}
          active={tab}
          onChange={setTab}
          className="mt-4"
          ariaLabel="Markets sections"
        />

        {tab === "Overview" && (
          <div className="mt-6 flex flex-col gap-[26px] pb-[30px] w-full">
            {/* Thai Indices */}
            <section>
              <h2 className="text-[18px] font-bold text-white tracking-tight mb-[14px] px-0.5">Thai Indices</h2>
              <div className="grid grid-cols-3 gap-2 min-[390px]:gap-[10px]">
                {thaiIndicesMock.map((idx) => (
                  <IndexCard key={idx.symbol} data={idx} />
                ))}
              </div>
            </section>

            {/* World Index ETFs */}
            <section>
              <div className="flex items-center justify-between mb-[14px] px-0.5">
                <h2 className="text-[18px] font-bold text-white tracking-tight">World Index ETFs</h2>
                <ChevronRight className="h-5 w-5 text-[#8659D1] -mr-1.5" />
              </div>
              <div className="grid grid-cols-3 gap-2 min-[390px]:gap-[10px]">
                {worldIndicesMock.map((idx) => (
                  <IndexCard key={idx.symbol} data={idx} />
                ))}
              </div>
            </section>
          </div>
        )}

        {tab === "Stocks" && (
          <div className="flex flex-col gap-0 pb-6">
            {/* Region Pills */}
            <ChipRow
              items={tradeRegions.map((region) => ({
                id: region.id,
                label: region.label,
                iconSrc: region.flagSrc,
              }))}
              active="US"
              variant="soft"
              className="mt-5"
            />

            {/* Market Breadth */}
            <section className="mt-6">
              <h2 className="text-[17px] font-bold text-white tracking-tight mb-3 px-0.5">Market Breadth</h2>
              <CardGlass className="p-3.5 flex flex-col gap-4 bg-[#141416]/90 border border-white/[0.04]">
                {marketBreadth.map((mb, i) => (
                  <MetricBar
                    key={i}
                    title={mb.title}
                    leftPct={mb.leftPct}
                    leftCount={mb.leftCount}
                    rightTitle={mb.rightTitle}
                    rightPct={mb.rightPct}
                    rightCount={mb.rightCount}
                    centerTitle={mb.centerTitle}
                  />
                ))}
              </CardGlass>
            </section>

            {/* Heatmap */}
            <section className="mt-7">
              <div className="flex items-center justify-between mb-3 px-0.5">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <h2 className="text-[17px] font-bold text-white tracking-tight">Heatmap</h2>
                  <Info className="h-[14px] w-[14px] text-white/40" />
                </div>
                <ChevronRight className="h-5 w-5 text-[#8659D1]" />
              </div>

              <HeatmapGrid items={heatmap} />
            </section>

            {/* Upcoming Earnings */}
            <section className="mt-7">
              <div className="flex items-center justify-between mb-3 px-0.5">
                <div className="flex items-center gap-1.5 cursor-pointer">
                  <h2 className="text-[17px] font-bold text-white tracking-tight">Upcoming Earnings</h2>
                  <Info className="h-[14px] w-[14px] text-white/40" />
                </div>
                <ChevronRight className="h-5 w-5 text-[#8659D1]" />
              </div>
              <CardGlass className="p-4 bg-[#141416]/90 border border-white/[0.04]">
                {upcomingEarnings.map((earn, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <img src={earn.flagSrc} alt={earn.symbol} className="w-[18px] h-[18px] rounded-sm object-cover" />
                      <span className="text-[15px] font-bold text-white tracking-wide">{earn.symbol}</span>
                      <span className="text-xs text-white/40">{earn.company}</span>
                    </div>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <div className="flex justify-between items-center text-[12px]">
                        <span className="text-white/40">Announce</span>
                        <span className="text-white/80">{earn.announce}</span>
                      </div>
                      <div className="flex justify-between items-center text-[12px]">
                        <span className="text-white/40">Estimated EPS</span>
                        <span className="text-white/80">{earn.estimatedEps}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardGlass>
            </section>
          </div>
        )}

      </div>
    </div>
  );
}

function IndexCard({ data }: { data: any }) {
  const isPositive = data.changePct > 0;
  const isZero = data.changePct === 0;
  const colorClass = isPositive ? "text-[#00C076]" : isZero ? "text-white/40" : "text-[#FF4D4F]";
  const displaySign = isPositive ? "+" : "";

  const points = data.trend === "up"
    ? [2, 3, 2, 4, 5, 4, 6, 8, 7, 9, 8]
    : data.trend === "down"
      ? [9, 8, 9, 7, 6, 8, 5, 4, 5, 3, 2]
      : [5, 5, 6, 5, 4, 5, 5, 6, 5, 5, 5];

  return (
    <CardGlass className="p-2.5 min-[390px]:p-3 bg-[#141416]/90 border border-white/[0.04] flex flex-col relative overflow-hidden rounded-[14px]">
      <div className="flex items-center gap-1.5 z-10">
        {data.flagSrc ? (
          <img src={data.flagSrc} alt={data.symbol} className="w-[14px] h-[14px] rounded-[2px] object-cover" />
        ) : (
          <span className="text-[14px] leading-none mb-[1px]">{data.emojiFlag}</span>
        )}
        <span className="text-[13.5px] font-bold text-white tracking-wide truncate">{data.symbol}</span>
        {data.hasD && (
          <span className="flex-shrink-0 text-[7.5px] text-[#E5B842] border border-[#E5B842]/40 rounded-[2px] px-[3px] py-[1px] leading-[8px] -ml-0.5 mb-1.5 font-bold">D</span>
        )}
      </div>

      <div className="flex items-center gap-1.5 mt-1 z-10">
        <span className={`text-[12.5px] min-[390px]:text-[13px] font-semibold leading-none ${colorClass}`}>
          {displaySign}{data.changePct.toFixed(2)}%
        </span>
        <span className="text-[9px] font-medium text-white/40 bg-white/5 px-1.5 py-0.5 rounded-[3px] leading-none mt-[1px]">Today</span>
      </div>

      <div className="mt-4 relative z-0 h-[38px] w-full flex flex-col justify-end">
        <div className="absolute inset-0 -mx-1 flex items-end opacity-90 bottom-2.5">
          <SparklineMini
            points={points}
            trend={data.trend}
            className="w-full h-[26px]"
            preserveAspectRatio="none"
          />
        </div>
        <div className="relative text-[9.5px] text-white/20 font-medium tracking-wide">
          20-Day Chart
        </div>
      </div>
    </CardGlass>
  );
}
