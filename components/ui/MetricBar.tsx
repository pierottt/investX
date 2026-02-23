import React from "react";

interface MetricBarProps {
    title: string;
    leftPct: number;
    leftCount: number;
    rightTitle: string;
    rightPct: number;
    rightCount: number;
    centerTitle?: string;
    className?: string;
}

export default function MetricBar({
    title,
    leftPct,
    leftCount,
    rightTitle,
    rightPct,
    rightCount,
    centerTitle,
    className = "",
}: MetricBarProps) {
    return (
        <div className={`flex flex-col gap-1.5 ${className}`}>
            {/* Header */}
            <div className="flex justify-between items-end text-[11px] font-medium mt-1">
                <span className="text-[#20A678] tracking-wide">{title}</span>
                {centerTitle && <span className="text-[#888888] text-[10px] tracking-widest">{centerTitle}</span>}
                <span className="text-[#E5535E] tracking-wide">{rightTitle}</span>
            </div>

            {/* Slanted Progress Bar */}
            <div className="h-[5px] w-full flex items-center gap-[2px]">
                <div
                    className="h-full bg-[#20A678] rounded-l-full"
                    style={{ width: `${leftPct}%`, clipPath: "polygon(0 0, calc(100% - 3px) 0, 100% 100%, 0 100%)" }}
                />
                <div
                    className="h-full bg-[#E5535E] rounded-r-full"
                    style={{ width: `${rightPct}%`, clipPath: "polygon(3px 0, 100% 0, 100% 100%, 0 100%)" }}
                />
            </div>

            {/* Footer */}
            <div className="flex justify-between items-start text-[10px] text-[#20A678]/80 -mt-0.5">
                <span>{leftPct.toFixed(2)}% ({leftCount})</span>
                <span className="text-[#E5535E]/80">{rightPct.toFixed(2)}% ({rightCount})</span>
            </div>
        </div>
    );
}
