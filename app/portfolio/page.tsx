"use client";

import TopBar from "@/components/shell/TopBar";
import TabsUnderline from "@/components/ui/TabsUnderline";
import CardGlass from "@/components/ui/CardGlass";
import { useState } from "react";
import { portfolio } from "@/lib/data/mock";

export default function PortfolioPage() {
  const [tab, setTab] = useState("Analytic");

  return (
    <div>
      <TopBar />

      <TabsUnderline
        tabs={["Asset", "Cash", "Analytic", "Transaction", "Cash Statement"]}
        active={tab}
        onChange={setTab}
      />

      <div className="px-5 pt-4">
        <CardGlass className="p-5">
          <div className="flex flex-col items-center">
            {/* Donut placeholder ring */}
            <div className="relative h-52 w-52 rounded-full border-[10px] border-white/10">
              <div className="absolute inset-0 rounded-full border-[10px] border-transparent"
                   style={{ borderTopColor: "var(--p)", borderRightColor: "var(--b)", borderBottomColor: "var(--c)" }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="text-xs text-white/55">Total Portfolio</div>
                <div className="mt-1 text-lg font-semibold">฿{portfolio.total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                <div className="mt-1 text-sm" style={{ color: "var(--gain)" }}>
                  +{portfolio.gainValue.toLocaleString()} (+{portfolio.gainPct}%)
                </div>
              </div>
            </div>

            {/* Allocation list */}
            <div className="mt-6 w-full">
              <div className="text-sm font-semibold mb-2">List</div>
              <div className="space-y-3">
                {portfolio.allocations.map((a, idx) => (
                  <div key={a.label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: ["#60A5FA","#A78BFA","#FBBF24","#22D3EE","#34D399","#F472B6","#F87171","#C084FC"][idx % 8] }}
                      />
                      <span className="text-white/75">{a.label}</span>
                    </div>
                    <span className="text-white/80 tabular-nums">
                      {a.value.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardGlass>
      </div>
    </div>
  );
}
