import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";
import CopyTradeHoldingsCard from "@/components/trade/CopyTradeHoldingsCard";
import CopyTradePerformanceCard from "@/components/trade/CopyTradePerformanceCard";
import CopyTradeProfileCard from "@/components/trade/CopyTradeProfileCard";
import CopyTradeSetupSheet from "@/components/trade/CopyTradeSetupSheet";
import { getCopyTradeInvestorBySlug } from "@/lib/data/mock";

export default async function CopyTradeInvestorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const investor = getCopyTradeInvestorBySlug(slug);

  if (!investor) {
    notFound();
  }

  return (
    <div className="page-scroll no-scrollbar bg-[radial-gradient(circle_at_top,rgba(113,75,255,0.18),transparent_28%),linear-gradient(180deg,#06080e_0%,#0c111a_48%,#06080e_100%)]">
      <div className="page-x pb-36 pt-safe-top">
        <header className="flex items-center justify-between gap-3">
          <Link href="/trade/copy-trade" className="tap flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/72">
            <ChevronLeft className="h-5 w-5" />
          </Link>

          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#9f8df0]">Copy Trade</p>
            <p className="text-[13px] text-white/46">Investor detail</p>
          </div>
        </header>

        <CopyTradeProfileCard investor={investor} className="mt-4" />
        <CopyTradePerformanceCard investor={investor} className="mt-4" />
        <CopyTradeHoldingsCard holdings={investor.holdings} className="mt-4" />
      </div>

      <CopyTradeSetupSheet investor={investor} />
    </div>
  );
}
