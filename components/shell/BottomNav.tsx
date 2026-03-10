"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Compass, Heart, Home, PieChart } from "lucide-react";

const tabs = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/markets", label: "Discover", Icon: Compass },
  { href: "/trade", label: "Trade", Icon: BarChart3 },
  { href: "/watchlist", label: "Watchlist", Icon: Heart },
  { href: "/portfolio", label: "Portfolio", Icon: PieChart },
];

export default function BottomNav() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const hideOnStockDetail = pathname.startsWith("/stocks/");

  if (hideOnStockDetail) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-1/2 z-40 w-full -translate-x-1/2" style={{ maxWidth: 420 }}>
      <div className="px-4 pb-[calc(0.85rem+env(safe-area-inset-bottom))] min-[360px]:px-5 min-[360px]:pb-[calc(0.95rem+env(safe-area-inset-bottom))]">
        <nav
          aria-label="Bottom navigation"
          className="rounded-[2.15rem] border border-white/[0.04] bg-[linear-gradient(180deg,rgba(23,25,34,0.96)_0%,rgba(18,20,29,0.98)_100%)] px-2 py-2 shadow-[0_18px_48px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(255,255,255,0.025)] backdrop-blur-[30px]"
        >
          <div className="flex items-stretch justify-between gap-1">
            {tabs.map(({ href, label, Icon }) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`tap flex min-w-0 flex-1 flex-col items-center justify-center gap-1.5 rounded-[1.6rem] px-1 py-2.5 text-center transition-colors min-[360px]:gap-2 min-[360px]:py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a7dff]/45 focus-visible:ring-inset ${
                    active
                      ? "bg-transparent text-[#7e73ff]"
                      : "text-[#737995] hover:bg-white/[0.012] hover:text-white/78"
                  }`}
                >
                  <Icon
                    strokeWidth={active ? 2.5 : 2.15}
                    className={`h-6 w-6 shrink-0 min-[360px]:h-7 min-[360px]:w-7 ${active ? "drop-shadow-[0_0_10px_rgba(126,115,255,0.24)]" : ""}`}
                  />
                  <span className="text-[9px] font-medium leading-none tracking-[-0.03em] min-[360px]:text-[10px]">
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
