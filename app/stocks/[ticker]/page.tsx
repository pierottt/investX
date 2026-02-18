import Link from "next/link";
import CardGlass from "@/components/ui/CardGlass";
import { ChevronLeft, Heart } from "lucide-react";

export default async function StockDetailPage({ params }: { params: Promise<{ ticker: string }> }) {
  const { ticker } = await params;

  return (
    <div className="px-5 pt-6">
      <div className="flex items-center justify-between">
        <Link href="/markets" className="tap h-9 w-9 rounded-full glass flex items-center justify-center">
          <ChevronLeft className="h-4 w-4 text-white/80" />
        </Link>
        <div className="text-sm font-semibold">{ticker.toUpperCase()}</div>
        <button className="tap h-9 w-9 rounded-full glass flex items-center justify-center" aria-label="Favorite">
          <Heart className="h-4 w-4 text-white/80" />
        </button>
      </div>

      <div className="mt-4">
        <CardGlass className="p-4">
          <div className="text-xs text-white/55">NASDAQ • DAYS RANGE</div>
          <div className="mt-2 text-2xl font-semibold" style={{ color: "var(--gain)" }}>
            176.08
          </div>
          <div className="mt-1 text-sm text-white/60">+2.36 ( +1.36% )</div>

          <div className="mt-4 h-48 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center text-white/50 text-sm">
            Candlestick Chart (placeholder)
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="tap rounded-2xl py-3 font-semibold text-white" style={{ background: "var(--gain)" }}>
              Buy
            </button>
            <button className="tap rounded-2xl py-3 font-semibold text-white" style={{ background: "var(--loss)" }}>
              Sell
            </button>
          </div>
        </CardGlass>
      </div>
    </div>
  );
}
