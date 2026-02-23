import Link from "next/link";
import { ChevronLeft, ChevronDown, Search, Heart, Info, Maximize2 } from "lucide-react";
import CandlestickChart from "@/components/ui/CandlestickChart";
import { mockCandles } from "@/lib/data/mock";

export default async function StockDetailPage({ params }: { params: Promise<{ ticker: string }> }) {
  const { ticker } = await params;

  // Use dynamic ticker or fallback to full layout representation
  const isFPT = ticker.toUpperCase() === "FPT";
  const displayTicker = isFPT ? "FPT" : ticker.toUpperCase();

  return (
    <div className="page-scroll no-scrollbar bg-[rgba(16,18,27,1)] min-h-screen">
      <div className="page-x pt-4 min-[390px]:pt-5 pb-28">
        {/* Header */}
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/markets"
            className="tap focus-accent flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
          >
            <ChevronLeft className="h-6 w-6 text-[rgb(141,117,220)]" />
          </Link>
          <div className="flex items-center gap-2">
            <button type="button" className="tap focus-accent flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
              <Search className="h-5 w-5 text-[rgb(141,117,220)]" />
            </button>
            <button type="button" className="tap focus-accent relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
              <Heart className="h-5 w-5 text-[rgb(141,117,220)]" />
              <div className="absolute top-1 right-1 text-[12px] font-bold text-white/90 leading-none">+</div>
            </button>
          </div>
        </div>

        {/* Title */}
        <div className="mt-3 flex items-end gap-2">
          <h1 className="text-2xl font-bold text-white leading-none tracking-tight">
            {displayTicker}<sup className="text-[9px] text-[rgb(141,117,220)] font-normal ml-0.5">D</sup>
          </h1>
          <span className="text-sm font-medium text-white/70 mb-0.5">
            {isFPT ? "FPT CORPORATION" : "Company Name"}
          </span>
        </div>

        {/* Tag Row */}
        <div className="mt-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 rounded bg-white/5 px-2 py-0.5 border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#02c076]"></div>
            <span className="text-[11px] font-medium text-[#02c076]">Open</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-white/50 font-medium">
            XSTC
            <div className="w-3.5 h-3.5 rounded-full bg-red-600 flex items-center justify-center">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </div>
          </div>
        </div>

        {/* Price Row */}
        <div className="mt-5 flex items-start justify-between">
          <div>
            <div className="text-[32px] font-bold text-white/95 leading-none tracking-tight">
              135,400.00 <span className="text-sm font-semibold text-white/50 ml-0.5">VND</span>
            </div>
            <div className="text-[13px] font-medium text-white/50 mt-1">0.00 0.00%</div>
            <div className="text-[11px] font-medium text-yellow-600/90 mt-1">15 minutes delayed</div>
          </div>

          <div className="text-right">
            <div className="text-[10px] font-bold text-white/80 uppercase tracking-wide">Day&apos;s Range</div>
            <div className="w-24 mt-2 mb-1 pl-2">
              <div className="relative h-[2px] bg-white/15 rounded-full w-full">
                <div className="absolute top-1/2 -translate-y-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-white/80" style={{ left: "20%", marginTop: "-8px" }}></div>
                <div className="absolute top-1/2 -translate-y-1/2 h-1 bg-white/40 rounded-full" style={{ left: "20%", right: "30%" }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-medium text-white/60">
              <span>135.20K</span>
              <span>135.80K</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-5 flex items-center justify-between text-[13px] font-medium text-white/60">
          <div className="flex gap-4">
            <div>Volume <span className="text-white/90 font-semibold ml-0.5">806.20K</span></div>
            <div>Value <span className="text-white/90 font-semibold ml-0.5">109.21B</span></div>
            <div className="hidden min-[360px]:block">Mkt Cap <span className="text-white/90 font-semibold ml-0.5">197.75T</span></div>
          </div>
          <div className="w-5 h-5 flex items-center justify-center bg-white/10 rounded">
            <ChevronDown className="h-4 w-4 text-white/80" />
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-5 border-b border-white/10">
          <div className="flex gap-6 overflow-x-auto no-scrollbar px-1" role="tablist" aria-label="Stock detail sections">
            {["Quotes", "Overview", "Fundamental", "News"].map((tab) => {
              const isActive = tab === "Quotes";
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-current={isActive ? "page" : undefined}
                  className={`tap focus-accent relative shrink-0 rounded-md pb-3 text-[14px] ${
                    isActive ? "font-bold text-[rgb(141,117,220)]" : "font-semibold text-white/50 hover:text-white/75"
                  }`}
                >
                  {tab}
                  {isActive ? <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[rgb(141,117,220)]" /> : null}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chart Tool Bar */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 text-white/60 pb-3">
          <span className="text-blue-500 font-bold shrink-0 text-sm">D</span>
          <span className="shrink-0 font-medium hover:text-white text-sm">W</span>
          <span className="shrink-0 font-medium hover:text-white text-sm">M</span>
          <ChevronDown className="w-3.5 h-3.5 shrink-0 ml-1" />

          <div className="w-px h-3 bg-white/20 mx-1 shrink-0"></div>

          <div className="flex items-center justify-center shrink-0 text-[#02c076] w-5 h-5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="6" width="4" height="12" /><rect x="10" y="3" width="4" height="15" /><line x1="12" y1="18" x2="12" y2="21" stroke="currentColor" strokeWidth="2" /><line x1="6" y1="18" x2="6" y2="19" stroke="currentColor" strokeWidth="2" /><line x1="12" y1="3" x2="12" y2="1" stroke="currentColor" strokeWidth="2" /><rect x="16" y="8" width="4" height="8" /><line x1="18" y1="16" x2="18" y2="18" stroke="currentColor" strokeWidth="2" /><line x1="18" y1="8" x2="18" y2="5" stroke="currentColor" strokeWidth="2" /></svg>
          </div>
          <svg className="shrink-0 hover:text-white" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
          <svg className="shrink-0 hover:text-white" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 17l6-6 4 4 8-8V21H3z" /></svg>
          <ChevronDown className="w-3.5 h-3.5 shrink-0" />

          <div className="w-px h-3 bg-white/20 mx-1 shrink-0"></div>

          <div className="font-serif italic font-bold shrink-0 opacity-80 text-sm">fx</div>

          <div className="w-px h-3 bg-white/20 mx-1 shrink-0"></div>

          <svg className="shrink-0 opacity-30" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7v6h6" /><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13" /></svg>
          <svg className="shrink-0 opacity-30 transform scale-x-[-1]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7v6h6" /><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13" /></svg>
        </div>

        {/* Chart Container */}
        <div className="h-[280px] w-full -mx-4 px-4 sm:mx-0 sm:px-0 relative border-b border-white/5 py-1">
          <CandlestickChart data={mockCandles} className="w-full h-full" />
        </div>

        {/* Chart Footer Toolbar */}
        <div className="flex items-center justify-between py-3 mx-[-16px] px-4 border-b border-white/5">
          <div className="flex items-center gap-6 text-[12px] font-semibold text-white/50">
            <span className="hover:text-white">1M</span>
            <span className="hover:text-white">3M</span>
            <span className="hover:text-white">6M</span>
            <span className="hover:text-white">1Y</span>
            <span className="hover:text-white">5Y</span>
          </div>
          <div className="w-6 h-6 rounded bg-[rgb(141,117,220)]/20 text-[rgb(141,117,220)] flex items-center justify-center tap">
            <Maximize2 className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 text-[13px] font-medium text-white/90">
          The latest price in this chart is from last trading day.
        </div>

        {/* Order Book block */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[17px] font-bold text-white tracking-tight">
            Order Book <Info className="w-3.5 h-3.5 text-white/40" />
          </div>
        </div>

      </div>

      {/* Sticky Bottom Context */}
      <div className="fixed bottom-0 left-0 right-0 p-3 px-4 pb-safe-nav bg-[rgba(15,16,21,0.98)] backdrop-blur-xl border-t border-white/10 z-50">
        <div className="relative flex w-full max-w-md mx-auto">
          <button
            className="bg-[#02c076] hover:bg-[#02b06a] text-white font-bold text-[18px] rounded-l-xl tap py-3.5 flex-1 transition-colors active:scale-[0.98] outline-none"
            style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 15px) 100%, 0 100%)" }}
          >
            <span className="opacity-90 tracking-wide text-center block" style={{ transform: "translateX(-4px)" }}>ซื้อ</span>
          </button>
          <button
            className="bg-[#f84960] hover:bg-[#eb455a] text-white font-bold text-[18px] rounded-r-xl tap py-3.5 flex-1 -ml-2.5 transition-colors active:scale-[0.98] outline-none"
            style={{ clipPath: "polygon(15px 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <span className="opacity-90 tracking-wide block text-center" style={{ transform: "translateX(4px)" }}>ขาย</span>
          </button>
        </div>
      </div>
    </div>
  );
}
