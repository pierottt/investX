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
  const hideOnCopyTradeDetail = pathname.startsWith("/trade/copy-trade/");

  if (hideOnStockDetail || hideOnCopyTradeDetail) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-[420px] px-3 pb-[calc(0.62rem+env(safe-area-inset-bottom))] min-[390px]:px-4">
        <nav
          aria-label="Bottom navigation"
          className="rounded-[2.35rem] border border-white/[0.07] bg-[radial-gradient(120%_160%_at_50%_-10%,rgba(38,44,66,0.82)_0%,rgba(22,25,37,0.94)_45%,rgba(15,17,27,0.97)_100%)] p-1.5 shadow-[0_20px_44px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-[30px]"
        >
          <div className="grid grid-cols-5 items-stretch gap-0.5">
            {tabs.map(({ href, label, Icon }) => {
              const active = isActive(href);

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`tap flex min-w-0 flex-col items-center justify-center gap-1.5 rounded-[1.6rem] px-1 py-2.5 text-center transition-[color,background-color] min-[360px]:gap-2 min-[360px]:py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a7dff]/45 focus-visible:ring-inset ${
                    active
                      ? "bg-[linear-gradient(180deg,rgba(126,115,255,0.16)_0%,rgba(126,115,255,0.02)_100%)] text-[#7f74ff]"
                      : "text-[#7d849e] hover:bg-white/[0.015] hover:text-[#959cb7]"
                  }`}
                >
                  <Icon
                    strokeWidth={active ? 2.55 : 2.2}
                    className={`h-[25px] w-[25px] shrink-0 min-[360px]:h-[27px] min-[360px]:w-[27px] ${
                      active ? "drop-shadow-[0_0_10px_rgba(127,116,255,0.28)]" : ""
                    }`}
                  />
                  <span className="text-[10.5px] font-semibold leading-none tracking-[-0.01em] min-[360px]:text-[11px]">
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
