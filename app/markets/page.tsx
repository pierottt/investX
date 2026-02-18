"use client";

import TopBar from "@/components/shell/TopBar";
import TabsUnderline from "@/components/ui/TabsUnderline";
import CardGlass from "@/components/ui/CardGlass";
import { useState } from "react";
import { marketBreadth, heatmap } from "@/lib/data/mock";

function MetricRow({ title, leftPct, rightTitle, rightPct }: any) {
  return (
    <div className="py-3">
      <div className="flex items-center justify-between text-xs text-white/70">
        <span>{title}</span>
        <span>{rightTitle}</span>
      </div>
      <div className="mt-2 h-3 w-full rounded-full overflow-hidden bg-white/5 flex">
        <div className="h-full" style={{ width: `${leftPct}%`, background: "var(--gain)" }} />
        <div className="h-full" style={{ width: `${rightPct}%`, background: "var(--loss)" }} />
      </div>
      <div className="mt-2 flex items-center justify-between text-[11px] text-white/55">
        <span>{leftPct.toFixed(2)}%</span>
        <span>{rightPct.toFixed(2)}%</span>
      </div>
    </div>
  );
}

export default function MarketsPage() {
  const [tab, setTab] = useState("Stocks");

  return (
    <div>
      <TopBar />

      <TabsUnderline tabs={["Overview", "Stocks"]} active={tab} onChange={setTab} />

      <div className="px-5 pt-4">
        <CardGlass className="p-4">
          <div className="text-sm font-semibold">Market Breadth</div>
          <div className="mt-2">
            {marketBreadth.map((m) => (
              <MetricRow key={m.title} {...m} />
            ))}
          </div>
        </CardGlass>
      </div>

      <div className="px-5 pt-5">
        <CardGlass className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold">Heatmap</div>
            <div className="text-xs text-white/55">›</div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            {heatmap.map((h) => {
              const positive = h.pct >= 0;
              return (
                <div
                  key={h.name}
                  className="rounded-xl p-3 border border-white/5"
                  style={{
                    background: positive ? "rgba(34,197,94,0.14)" : "rgba(239,68,68,0.14)",
                  }}
                >
                  <div className="text-xs text-white/75">{h.name}</div>
                  <div className="mt-1 text-sm font-medium" style={{ color: positive ? "var(--gain)" : "var(--loss)" }}>
                    {h.pct > 0 ? "+" : ""}
                    {h.pct.toFixed(2)}%
                  </div>
                </div>
              );
            })}
          </div>
        </CardGlass>
      </div>
    </div>
  );
}
