"use client";

import { useEffect, useRef, useState } from "react";

export interface Candle {
    time: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume?: number;
}

interface CandlestickChartProps {
    data: Candle[];
    className?: string;
}

export default function CandlestickChart({ data, className = "" }: CandlestickChartProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight,
                });
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const { width, height } = dimensions;

    if (width === 0 || height === 0 || data.length === 0) {
        return <div ref={containerRef} className={`w-full h-full ${className}`} />;
    }

    const rightPadding = 60;
    const bottomPadding = 40;
    const chartWidth = width - rightPadding;
    const mainChartHeight = height - bottomPadding;

    const minPrice = Math.min(...data.map((d) => d.low));
    const maxPrice = Math.max(...data.map((d) => d.high));
    const priceRange = maxPrice - minPrice;
    const paddingY = priceRange * 0.1;
    const chartMin = minPrice - paddingY;
    const chartMax = maxPrice + paddingY;
    const chartRange = chartMax - chartMin;

    const maxVolume = Math.max(...data.map((d) => d.volume || 0));

    // We'll give it a standard percentage width for candles
    const candleWidth = Math.max((chartWidth / data.length) * 0.7, 2);
    const gap = (chartWidth - candleWidth * data.length) / Math.max(data.length, 1);

    const getPriceY = (price: number) => {
        return mainChartHeight - ((price - chartMin) / chartRange) * mainChartHeight;
    };

    // Calculate Y-axis labels
    const numYLabels = 5;
    const yLabels = Array.from({ length: numYLabels }).map((_, i) => {
        const val = chartMax - (i / (numYLabels - 1)) * chartRange;
        return {
            val,
            y: getPriceY(val),
            text: val.toFixed(0) // Assuming VND for FPT example
        };
    });

    const currentPrice = data[data.length - 1].close;
    const currentPriceY = getPriceY(currentPrice);

    return (
        <div ref={containerRef} className={`relative w-full h-full text-[11px] font-medium text-white/50 font-mono ${className}`}>
            <svg className="absolute inset-0 w-full h-full overflow-visible">
                {/* Y-axis guidelines & labels */}
                {yLabels.map((lbl, i) => (
                    <g key={`y-axis-${i}`}>
                        <line x1={0} y1={lbl.y} x2={chartWidth} y2={lbl.y} stroke="white" strokeOpacity={0.05} strokeDasharray="2 4" />
                        <text x={chartWidth + 6} y={lbl.y} fill="currentColor" alignmentBaseline="middle">{lbl.text}</text>
                    </g>
                ))}

                {/* Main Candles and Volume */}
                {data.map((candle, i) => {
                    const x = i * (candleWidth + gap) + gap / 2;
                    const yOpen = getPriceY(candle.open);
                    const yClose = getPriceY(candle.close);
                    const yHigh = getPriceY(candle.high);
                    const yLow = getPriceY(candle.low);

                    const isPositive = candle.close >= candle.open;
                    const color = isPositive ? "#02c076" : "#f84960"; // Matched approx colors from image

                    const rectY = isPositive ? yClose : yOpen;
                    const rectHeight = Math.max(Math.abs(yOpen - yClose), 1);

                    // Volume
                    let volG = null;
                    if (candle.volume && maxVolume > 0) {
                        const volHeight = (candle.volume / maxVolume) * (mainChartHeight * 0.2); // Volume takes bottom 20% max
                        const volY = height - volHeight;
                        volG = (
                            <rect
                                x={x}
                                y={volY}
                                width={candleWidth}
                                height={volHeight}
                                fill={color}
                                fillOpacity={0.4}
                            />
                        );
                    }

                    return (
                        <g key={`candle-${i}`}>
                            {/* Wick */}
                            <line x1={x + candleWidth / 2} y1={yHigh} x2={x + candleWidth / 2} y2={yLow} stroke={color} strokeWidth={1} />
                            {/* Body */}
                            <rect x={x} y={rectY} width={candleWidth} height={rectHeight} fill={color} />
                            {/* Volume */}
                            {volG}
                        </g>
                    );
                })}

                {/* Current Price Line & Tag */}
                <line x1={0} y1={currentPriceY} x2={chartWidth} y2={currentPriceY} stroke="#02c076" strokeDasharray="3 3" />
                <rect x={chartWidth} y={currentPriceY - 10} width={rightPadding} height={20} fill="#02c076" rx={2} />
                <text x={chartWidth + 6} y={currentPriceY} fill="white" alignmentBaseline="middle" fontWeight="bold">
                    {currentPrice.toFixed(2)}
                </text>
            </svg>

            {/* Chart Overlays */}
            <div className="absolute top-0 left-0 p-2 pointer-events-none">
                <div style={{ color: "#02c076" }}>135,400.00 +500.00 (+0.37%)</div>
                <div className="text-white mt-4">Volume</div>
            </div>

            <div className="absolute top-12 left-2 pointer-events-auto">
                <button className="flex items-center justify-center w-8 h-8 rounded border border-white/20 bg-black/40 text-white hover:bg-white/10">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 15l-6-6-6 6" /></svg>
                </button>
            </div>

            {/* Bottom X-axis proxy items */}
            <div className="absolute bottom-1 w-full pl-8 pr-[60px] flex justify-between items-center text-[11px] font-semibold">
                <div className="w-10 h-10 rounded-full bg-[#1e222d] flex items-center justify-center border-4 border-black">
                    {/* TV Logo proxy */}
                    <div className="font-black text-white text-xs diagonal-fractions tracking-tighter">TV</div>
                </div>
                <div>Oct</div>
                <div>Nov</div>
                <div className="opacity-0">padding</div>
            </div>
            <div className="absolute bottom-2 right-14 opacity-50">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" /></svg>
            </div>
            {/* Value scale on bottom right overlay */}
            <div className="absolute right-0 bottom-1 bg-[#02c076]/20 text-[#02c076] px-1 py-0.5 rounded text-[10px] font-bold">2.46 M</div>
        </div>
    );
}
