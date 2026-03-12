import CopyTradeInvestorRow from "@/components/trade/CopyTradeInvestorRow";
import type { CopyTradeInvestor } from "@/lib/data/mock";

export interface CopyTradeInvestorListProps {
  investors: CopyTradeInvestor[];
  hrefBase: string;
  className?: string;
}

export default function CopyTradeInvestorList({
  investors,
  hrefBase,
  className = "",
}: CopyTradeInvestorListProps) {
  return (
    <div className={`overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[linear-gradient(180deg,rgba(34,34,39,0.96)_0%,rgba(26,26,31,0.96)_100%)] ${className}`}>
      {investors.map((investor, index) => (
        <CopyTradeInvestorRow
          key={investor.slug}
          investor={investor}
          href={`${hrefBase}/${investor.slug}`}
          showDivider={index < investors.length - 1}
        />
      ))}
    </div>
  );
}
