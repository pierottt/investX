"use client";

import TopBar from "@/components/shell/TopBar";
import CardGlass from "@/components/ui/CardGlass";

export default function WatchlistPage() {
  return (
    <div>
      <TopBar />
      <div className="px-5 pt-6">
        <CardGlass className="p-5 text-white/70">
          Watchlist placeholder (can reuse Markets layout: tabs + breadth + heatmap).
        </CardGlass>
      </div>
    </div>
  );
}
