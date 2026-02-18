"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BarChart3, ArrowLeftRight, Heart, PieChart } from "lucide-react";

const tabs = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/markets", label: "Markets", Icon: BarChart3 },
  { href: "/watchlist", label: "Watchlist", Icon: Heart },
  { href: "/portfolio", label: "Portfolio", Icon: PieChart }
];

export default function BottomNav() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
      <div className="relative glass shadow-glow rounded-2xl px-4 py-3">
        <Link
          href="/trade"
          className="tap absolute -top-6 left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-accent shadow-glow flex items-center justify-center"
          aria-label="Trade"
        >
          <ArrowLeftRight className="h-6 w-6 text-white" />
        </Link>

        <div className="flex items-end justify-between pt-2">
          {tabs.slice(0, 2).map(({ href, label, Icon }) => {
            const active = isActive(href);
            return (
              <Link key={href} href={href} className="tap flex w-1/4 flex-col items-center gap-1">
                <Icon className={`h-5 w-5 ${active ? "text-white" : "text-white/55"}`} />
                <span className={`text-[11px] ${active ? "text-white" : "text-white/55"}`}>{label}</span>
                <span className={`h-[2px] w-8 rounded-full ${active ? "bg-accent" : "bg-transparent"}`} />
              </Link>
            );
          })}

          <div className="w-1/4" />

          {tabs.slice(2).map(({ href, label, Icon }) => {
            const active = isActive(href);
            return (
              <Link key={href} href={href} className="tap flex w-1/4 flex-col items-center gap-1">
                <Icon className={`h-5 w-5 ${active ? "text-white" : "text-white/55"}`} />
                <span className={`text-[11px] ${active ? "text-white" : "text-white/55"}`}>{label}</span>
                <span className={`h-[2px] w-8 rounded-full ${active ? "bg-accent" : "bg-transparent"}`} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
