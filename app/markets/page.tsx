"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronRight, Mail, Search } from "lucide-react";
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
      <div className="page-x pb-safe-nav pt-safe-top">
        <header className="flex items-center justify-between pt-0.5">
          <h1 className="text-[25px] font-semibold tracking-[-0.04em] text-white/90 min-[360px]:text-[27px]">Markets</h1>
          <div className="flex items-center gap-1">
            <button type="button" className="tap flex h-8 w-8 items-center justify-center rounded-full text-white/78 min-[360px]:h-9 min-[360px]:w-9">
              <Search className="h-5 w-5 stroke-[1.75] min-[360px]:h-5.5 min-[360px]:w-5.5" />
            </button>
            <button type="button" className="tap relative flex h-8 w-8 items-center justify-center rounded-full text-white/78 min-[360px]:h-9 min-[360px]:w-9">
              <Mail className="h-5 w-5 stroke-[1.75] min-[360px]:h-5.5 min-[360px]:w-5.5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#ff5d72] shadow-[0_0_0_2px_rgba(7,10,18,0.95)] min-[360px]:h-2.5 min-[360px]:w-2.5" />
            </button>
          </div>
        </header>
        <UnderlineTabs
          items={["Overview", "Stocks"]}
          active={tab}
          onChange={setTab}
          className="mt-4"
          ariaLabel="Markets sections"
        />

        {tab === "Overview" && (
          <div className="mt-6 flex flex-col gap-[26px] pb-[30px] w-full">
            <CardGlass className="p-4 bg-[#141416]/90 border border-white/[0.05]">
              <p className="text-[15px] font-semibold text-white">New to market data?</p>
              <p className="mt-1 text-[12px] text-white/70 leading-relaxed">
                Green usually means prices moved up today. Red means prices moved down. Use this page as a quick daily snapshot.
              </p>
            </CardGlass>

            {/* Thai Indices */}
            <section>
              <h2 className="text-[18px] font-bold text-white tracking-tight mb-1 px-0.5">Thai Indices</h2>
              <p className="text-[12px] text-white/55 mb-[14px] px-0.5">Local market benchmark movements for today.</p>
              <div className="grid grid-cols-3 gap-2 min-[390px]:gap-[10px]">
                {thaiIndicesMock.map((idx) => (
                  <IndexCard key={idx.symbol} data={idx} />
                ))}
              </div>
            </section>

            {/* World Index ETFs */}
            <section>
              <div className="flex items-center justify-between mb-1 px-0.5">
                <h2 className="text-[18px] font-bold text-white tracking-tight">World Index ETFs</h2>
                <ChevronRight className="h-5 w-5 text-[#8659D1] -mr-1.5" />
              </div>
              <p className="text-[12px] text-white/55 mb-[14px] px-0.5">Global index snapshots to compare international sentiment.</p>
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
            <CardGlass className="mt-5 p-4 bg-[#141416]/90 border border-white/[0.05]">
              <h2 className="text-[15px] font-semibold text-white">How to read this page</h2>
              <ol className="mt-2 space-y-1.5 text-[12px] text-white/75 leading-relaxed list-decimal pl-4">
                <li>Start with Market Breadth to see if more stocks are rising or falling.</li>
                <li>Use Heatmap to spot strong and weak sectors quickly.</li>
                <li>Check Upcoming Earnings for near-term volatility events.</li>
              </ol>
            </CardGlass>

            {/* Region Pills */}
            <div className="mt-5">
              <p className="mb-2 px-0.5 text-[11px] uppercase tracking-[0.18em] text-white/45">Market Focus</p>
              <ChipRow
                items={tradeRegions.map((region) => ({
                  id: region.id,
                  label: region.label,
                  iconSrc: region.flagSrc,
                }))}
                active="US"
                variant="soft"
              />
            </div>

            <p className="mt-2 px-0.5 text-[11.5px] text-white/55">Current mock data is displayed for US market examples.</p>

            {/* Market Breadth */}
            <section className="mt-6">
              <h2 className="text-[17px] font-bold text-white tracking-tight mb-1 px-0.5">Market Breadth</h2>
              <p className="text-[12px] text-white/55 mb-3 px-0.5">If green side is larger, more stocks are moving up than down.</p>
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
                <h2 className="text-[17px] font-bold text-white tracking-tight">Sector Heatmap</h2>
                <ChevronRight className="h-5 w-5 text-[#8659D1]" />
              </div>
              <p className="text-[12px] text-white/55 mb-3 px-0.5">Green blocks are sectors gaining today. Red blocks are losing sectors.</p>

              <HeatmapGrid items={heatmap} />
            </section>

            {/* Upcoming Earnings */}
            <section className="mt-7">
              <div className="flex items-center justify-between mb-3 px-0.5">
                <h2 className="text-[17px] font-bold text-white tracking-tight">Upcoming Earnings</h2>
                <ChevronRight className="h-5 w-5 text-[#8659D1]" />
              </div>
              <p className="text-[12px] text-white/55 mb-3 px-0.5">Events that often trigger short-term price swings.</p>
              <CardGlass className="p-4 bg-[#141416]/90 border border-white/[0.04]">
                {upcomingEarnings.map((earn, i) => (
                  <div
                    key={i}
                    className={`flex flex-col gap-3 ${i !== upcomingEarnings.length - 1 ? "border-b border-white/[0.08] pb-4 mb-4" : ""}`}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src={earn.flagSrc}
                        alt={earn.symbol}
                        width={18}
                        height={18}
                        className="w-[18px] h-[18px] rounded-sm object-cover"
                      />
                      <span className="text-[15px] font-bold text-white tracking-wide">{earn.symbol}</span>
                      <span className="text-xs text-white/40">{earn.company}</span>
                    </div>
                    <div className="flex flex-col gap-1.5 mt-1">
                      <div className="flex justify-between items-center text-[12px]">
                        <span className="text-white/50">Report time</span>
                        <span className="text-white/80">{earn.announce}</span>
                      </div>
                      <div className="flex justify-between items-center text-[12px]">
                        <span className="text-white/50">Estimated EPS</span>
                        <span className="text-white/80">{earn.estimatedEps}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-white/45">EPS means estimated earnings per share.</p>
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

interface IndexCardData {
  symbol: string;
  changePct: number;
  trend: string;
  flagSrc?: string;
  emojiFlag?: string;
  hasD?: boolean;
}

function IndexCard({ data }: { data: IndexCardData }) {
  const isPositive = data.changePct > 0;
  const isZero = data.changePct === 0;
  const colorClass = isPositive ? "text-[#00C076]" : isZero ? "text-white/40" : "text-[#FF4D4F]";
  const trendLabel = isPositive ? "Rising" : isZero ? "Flat" : "Falling";
  const displaySign = isPositive ? "+" : "";
  const sparklineTrend = data.trend === "up" ? "up" : data.trend === "down" ? "down" : "neutral";

  const points = sparklineTrend === "up"
    ? [2, 3, 2, 4, 5, 4, 6, 8, 7, 9, 8]
    : sparklineTrend === "down"
      ? [9, 8, 9, 7, 6, 8, 5, 4, 5, 3, 2]
      : [5, 5, 6, 5, 4, 5, 5, 6, 5, 5, 5];

  return (
    <CardGlass className="p-2.5 min-[390px]:p-3 bg-[#141416]/90 border border-white/[0.04] flex flex-col relative overflow-hidden rounded-[14px]">
      <div className="flex items-center gap-1.5 z-10">
        {data.flagSrc ? (
          <Image
            src={data.flagSrc}
            alt={data.symbol}
            width={14}
            height={14}
            className="w-[14px] h-[14px] rounded-[2px] object-cover"
          />
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
        <span className="text-[9px] font-medium text-white/45 bg-white/5 px-1.5 py-0.5 rounded-[3px] leading-none mt-[1px]">
          Today
        </span>
      </div>

      <p className={`mt-1 text-[10px] font-medium ${colorClass}`}>{trendLabel}</p>

      <div className="mt-4 relative z-0 h-[38px] w-full flex flex-col justify-end">
        <div className="absolute inset-0 -mx-1 flex items-end opacity-90 bottom-2.5">
          <SparklineMini
            points={points}
            trend={sparklineTrend}
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
