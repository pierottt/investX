import CopyTradeInvestorRow from "@/components/trade/CopyTradeInvestorRow";
import type { CopyTradeInvestor } from "@/lib/data/mock";

export interface CopyTradeInvestorListProps {
  investors: CopyTradeInvestor[];
  hrefBase: string;
  density?: "default" | "compact";
  className?: string;
}

export default function CopyTradeInvestorList({
  investors,
  hrefBase,
  density = "default",
  className = "",
}: CopyTradeInvestorListProps) {
  return (
    <div
      className={`overflow-hidden border border-white/[0.07] bg-[linear-gradient(180deg,rgba(34,34,39,0.96)_0%,rgba(26,26,31,0.96)_100%)] ${
        density === "compact" ? "rounded-[1.65rem]" : "rounded-[2rem]"
      } ${className}`}
    >
      {investors.map((investor, index) => (
        <CopyTradeInvestorRow
          key={investor.slug}
          investor={investor}
          href={`${hrefBase}/${investor.slug}`}
          density={density}
          showDivider={index < investors.length - 1}
        />
      ))}
    </div>
  );
}
