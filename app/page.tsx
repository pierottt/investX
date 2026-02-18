import TopBar from "@/components/shell/TopBar";
import CardGlass from "@/components/ui/CardGlass";
import IconCircleButton from "@/components/ui/IconCircleButton";
import GradientButton from "@/components/ui/GradientButton";
import { Wallet, ArrowLeftRight, Coffee, ClipboardList, Sparkles, Star, ScanFace, Radio } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      <TopBar />

      {/* Hero */}
      <div className="px-5 pt-5">
        <div className="relative overflow-hidden rounded-2xl glass shadow-glow p-5">
          {/* fake cosmic gradient */}
          <div className="absolute inset-0 opacity-40 bg-accent blur-2xl" />
          <div className="relative">
            <div className="text-white/80 text-sm">สวัสดีตอนเช้า</div>
            <div className="text-xl font-semibold">คุณ อินโนเวสท์เอกซ์</div>

            <div className="mt-4 flex items-center justify-between rounded-2xl glass p-4">
              <div>
                <div className="text-xs text-white/55">Total Portfolio</div>
                <div className="mt-1 text-base font-medium tracking-wider">**************</div>
              </div>
              <button className="tap h-11 w-11 rounded-full bg-accent shadow-glow flex items-center justify-center">
                <span className="text-white text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-5 pt-6">
        <div className="grid grid-cols-4 gap-4">
          <IconCircleButton icon={<Wallet className="h-5 w-5 text-white/80" />} label="Wallet" />
          <IconCircleButton icon={<ArrowLeftRight className="h-5 w-5 text-white/80" />} label="Exchange" />
          <IconCircleButton icon={<Coffee className="h-5 w-5 text-white/80" />} label="Cafe INVEST" />
          <IconCircleButton icon={<ClipboardList className="h-5 w-5 text-white/80" />} label="My Order" />
          <IconCircleButton icon={<Sparkles className="h-5 w-5 text-white/80" />} label="For you" />
          <IconCircleButton icon={<Star className="h-5 w-5 text-white/80" />} label="Point" />
          <IconCircleButton icon={<ScanFace className="h-5 w-5 text-white/80" />} label="Login Scan" />
          <IconCircleButton icon={<Radio className="h-5 w-5 text-white/80" />} label="Streaming" />
        </div>
      </div>

      {/* Featured cards */}
      <div className="px-5 pt-6 grid grid-cols-2 gap-4">
        <CardGlass className="p-4">
          <div className="text-sm font-semibold">INVEST IDEAS</div>
          <div className="mt-2 text-xs text-white/60">Curated strategies & insights</div>
          <div className="mt-3">
            <GradientButton className="px-3 py-2 text-xs">Explore Now</GradientButton>
          </div>
        </CardGlass>

        <CardGlass className="p-4">
          <div className="text-sm font-semibold">Intelligence portfolio</div>
          <div className="mt-2 text-xs text-white/60">AI-assisted portfolio guidance</div>
          <div className="mt-4 h-12 w-12 rounded-full bg-accent opacity-60" />
        </CardGlass>
      </div>
    </div>
  );
}
