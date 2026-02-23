import React from "react";

interface HeatmapItem {
    name: string;
    pct: number;
    colSpan?: number;
}

export default function HeatmapGrid({ items }: { items: HeatmapItem[] }) {
    return (
        <div className="grid grid-cols-5 grid-rows-2 gap-[1px] rounded-lg overflow-hidden h-28 text-[10px] font-medium text-white/90">
            {items.map((item, i) => {
                const isPositive = item.pct > 0;
                // Darker saturated backgrounds as in the screenshot
                const bgColor = isPositive ? "bg-[#1B3A2C]" : "bg-[#431B22]";
                const textColor = isPositive ? "text-[#5AE2A6]" : "text-[#E96A74]";

                const colSpanClass = item.colSpan === 2 ? "col-span-2" : "col-span-1";

                return (
                    <div key={`${item.name}-${i}`} className={`${bgColor} ${colSpanClass} flex flex-col items-start justify-center p-2 border border-white/[0.03] transition-colors relative`}>
                        {/* Subdued glow effect at top left similar to design */}
                        <div className="absolute top-0 left-0 w-8 h-8 bg-white/5 blur-xl rounded-full" />
                        <span className="truncate w-full relative z-10 leading-snug">{item.name}</span>
                        <span className={`${textColor} relative z-10 mt-0.5 tracking-wide`}>{item.pct > 0 ? "+" : ""}{item.pct.toFixed(3)}%</span>
                    </div>
                );
            })}
        </div>
    );
}
