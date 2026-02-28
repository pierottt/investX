import TopBar from "@/components/shell/TopBar";
import CardGlass from "@/components/ui/CardGlass";
import IconCircleButton from "@/components/ui/IconCircleButton";
import GradientButton from "@/components/ui/GradientButton";
import { Wallet, ArrowLeftRight, Coffee, ClipboardList, Sparkles, Star, ScanFace, Radio, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="page-scroll no-scrollbar">
      <TopBar />

      <div className="page-x pb-safe-nav pt-safe-top">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_18%_0%,rgba(124,58,237,0.32),transparent_42%),radial-gradient(circle_at_90%_16%,rgba(34,211,238,0.18),transparent_34%),rgba(12,15,28,0.94)] p-4 shadow-glow min-[360px]:p-5">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_45%)]" />
          <div className="pointer-events-none absolute -left-20 top-16 h-40 w-40 rounded-full bg-[rgba(37,99,235,0.2)] blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -top-12 h-44 w-44 rounded-full bg-[rgba(124,58,237,0.22)] blur-3xl" />

          <div className="relative min-w-0">
            <p className="text-[11px] uppercase tracking-[0.16em] text-white/55 min-[360px]:text-xs">INVESTMENT DASHBOARD</p>
            <p className="mt-3 text-xs text-white/80 min-[360px]:text-sm">Good morning</p>
            <h1 className="mt-1 text-xl font-semibold tracking-tight text-white min-[360px]:text-2xl">MR. INVESTX</h1>

            <div className="mt-4 rounded-2xl border border-white/10 bg-[rgba(7,10,20,0.72)] p-3 backdrop-blur-md min-[360px]:p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] text-white/55 min-[360px]:text-xs">Total Portfolio</p>
                  <p className="mt-1 text-sm font-medium tracking-[0.18em] text-white/90 min-[360px]:text-base">**************</p>
                  <p className="mt-1 text-[11px] text-[#7DD3FC] min-[360px]:text-xs">Estimated +2.16% this week</p>
                </div>
                <button
                  type="button"
                  aria-label="Go to portfolio summary"
                  className="tap focus-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent shadow-glow min-[360px]:h-11 min-[360px]:w-11"
                >
                  <ArrowUpRight className="h-4 w-4 text-white min-[360px]:h-[18px] min-[360px]:w-[18px]" />
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/75 min-[360px]:text-[11px]">
                  Risk Profile: Balanced
                </span>
                <span className="rounded-full border border-[#34D399]/35 bg-[#14553B]/45 px-2.5 py-1 text-[10px] font-medium text-[#86EFAC] min-[360px]:text-[11px]">
                  Market Status: Open
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-6 min-[390px]:mt-7">
          <div className="mb-3 px-0.5">
            <h2 className="text-[15px] font-semibold tracking-tight text-white min-[390px]:text-base">Quick Actions</h2>
            <p className="mt-1 text-[11px] text-white/55 min-[390px]:text-xs">Shortcuts to your most-used tools</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] p-3.5 backdrop-blur-sm min-[390px]:p-4">
            <div className="grid grid-cols-4 gap-2.5 min-[360px]:gap-3 min-[390px]:gap-4">
              <IconCircleButton icon={<Wallet className="h-4 w-4 text-white/85 min-[360px]:h-5 min-[360px]:w-5" />} label="Wallet" />
              <IconCircleButton icon={<ArrowLeftRight className="h-4 w-4 text-white/85 min-[360px]:h-5 min-[360px]:w-5" />} label="Exchange" />
              <IconCircleButton icon={<Coffee className="h-4 w-4 text-white/85 min-[360px]:h-5 min-[360px]:w-5" />} label="Cafe INVEST" />
              <IconCircleButton icon={<ClipboardList className="h-4 w-4 text-white/85 min-[360px]:h-5 min-[360px]:w-5" />} label="My Order" />
              <IconCircleButton icon={<Sparkles className="h-4 w-4 text-white/85 min-[360px]:h-5 min-[360px]:w-5" />} label="For you" />
              <IconCircleButton icon={<Star className="h-4 w-4 text-white/85 min-[360px]:h-5 min-[360px]:w-5" />} label="Point" />
              <IconCircleButton icon={<ScanFace className="h-4 w-4 text-white/85 min-[360px]:h-5 min-[360px]:w-5" />} label="Login Scan" />
              <IconCircleButton icon={<Radio className="h-4 w-4 text-white/85 min-[360px]:h-5 min-[360px]:w-5" />} label="Streaming" />
            </div>
          </div>
        </section>

        {/* Featured cards */}
        <section className="mt-6 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 min-[390px]:gap-4 min-[390px]:mt-7">
          <CardGlass className="group min-h-[156px] p-4 transition-[filter,transform] duration-200 hover:brightness-110">
            <p className="inline-flex rounded-full border border-[#8B5CF6]/40 bg-[#7C3AED]/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[#D8B4FE]">
              Featured
            </p>
            <h3 className="mt-3 text-sm font-semibold tracking-tight text-white min-[390px]:text-[15px]">INVEST IDEAS</h3>
            <p className="mt-2 text-xs leading-relaxed text-white/65">Curated strategies and market insights matched with your profile.</p>
            <div className="mt-4">
              <GradientButton className="focus-accent px-3.5 py-2 text-xs transition-[filter,transform] duration-200 hover:brightness-110">
                Explore Now
              </GradientButton>
            </div>
          </CardGlass>

          <CardGlass className="group relative min-h-[156px] overflow-hidden p-4 transition-[filter,transform] duration-200 hover:brightness-110">
            <div className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full bg-[rgba(37,99,235,0.34)] blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-[rgba(124,58,237,0.3)] blur-2xl" />
            <div className="relative">
              <h3 className="text-sm font-semibold tracking-tight text-white min-[390px]:text-[15px]">Intelligence Portfolio</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/65">AI-assisted portfolio guidance with scenario-based suggestions.</p>
              <div className="mt-4 h-14 rounded-xl border border-white/10 bg-[linear-gradient(120deg,rgba(124,58,237,0.24)_0%,rgba(37,99,235,0.26)_48%,rgba(34,211,238,0.22)_100%)] p-2">
                <div className="h-full w-full rounded-lg border border-white/15 bg-[linear-gradient(90deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.02)_100%)]" />
              </div>
            </div>
          </CardGlass>
        </section>
      </div>
    </div>
  );
}
