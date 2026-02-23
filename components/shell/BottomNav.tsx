"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Globe, ArrowRightLeft, ArrowUpDown, Heart, PieChart } from "lucide-react";

const tabs = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/markets", label: "Market", Icon: Globe },
  { href: "/watchlist", label: "Watchlist", Icon: Heart },
  { href: "/portfolio", label: "Portfolio", Icon: PieChart }
];

export default function BottomNav() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const isTradeActive = pathname.startsWith("/trade");

  return (
    <div
      className="fixed bottom-0 left-1/2 z-40 w-full -translate-x-1/2"
      style={{ maxWidth: 420 }}
    >
      <div className="px-2 pb-[calc(0.375rem+env(safe-area-inset-bottom))] min-[360px]:px-3 min-[360px]:pb-[calc(0.5rem+env(safe-area-inset-bottom))] min-[390px]:px-4">
        <div className="relative rounded-3xl glass px-2 py-2 shadow-glow min-[360px]:px-4 min-[360px]:py-3 bg-background/80 backdrop-blur-xl border border-white/10">
          <Link
            href="/trade"
            className="tap absolute -top-5 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full shadow-[0_0_20px_rgba(79,70,229,0.5),inset_0_4px_10px_rgba(255,255,255,0.4)] bg-gradient-to-tr from-indigo-950 via-blue-700 to-blue-200 min-[360px]:-top-6 min-[360px]:h-16 min-[360px]:w-16 border border-white/20 transition-transform active:scale-95"
            aria-label="Trade"
          >
            {isTradeActive ? (
              <ArrowUpDown strokeWidth={2.5} className="h-6 w-6 text-white min-[360px]:h-7 min-[360px]:w-7" />
            ) : (
              <ArrowRightLeft strokeWidth={2.5} className="h-6 w-6 text-white min-[360px]:h-7 min-[360px]:w-7" />
            )}
          </Link>

          <div className="flex items-end justify-between pt-1">
            {tabs.slice(0, 2).map(({ href, label, Icon }) => {
              const active = isActive(href);
              return (
                <Link key={href} href={href} className="tap flex w-1/5 flex-col items-center gap-1 min-[360px]:gap-1.5">
                  <Icon className={`h-5 w-5 min-[360px]:h-6 min-[360px]:w-6 ${active ? "text-[#a78bfa]" : "text-white/55"}`} />
                  <span className={`text-center text-[10px] leading-tight min-[360px]:text-[11px] font-medium ${active ? "text-[#a78bfa]" : "text-white/55"}`}>
                    {label}
                  </span>
                </Link>
              );
            })}

            <div className="flex w-1/5 flex-col items-center justify-end gap-1 min-[360px]:gap-1.5" aria-hidden="true">
              <div className="h-5 min-[360px]:h-6" />
              <span className={`text-center text-[10px] leading-tight min-[360px]:text-[11px] font-medium ${isTradeActive ? "text-[#a78bfa]" : "text-white/55"}`}>
                Trade
              </span>
            </div>

            {tabs.slice(2).map(({ href, label, Icon }) => {
              const active = isActive(href);
              return (
                <Link key={href} href={href} className="tap flex w-1/5 flex-col items-center gap-1 min-[360px]:gap-1.5">
                  <Icon className={`h-5 w-5 min-[360px]:h-6 min-[360px]:w-6 ${active ? "text-[#a78bfa]" : "text-white/55"}`} />
                  <span className={`text-center text-[10px] leading-tight min-[360px]:text-[11px] font-medium ${active ? "text-[#a78bfa]" : "text-white/55"}`}>
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
