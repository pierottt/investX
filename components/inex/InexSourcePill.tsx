import Image from "next/image";
import type { InexSource } from "@/lib/data/inexSummaries";

interface InexSourcePillProps {
  source: InexSource;
  className?: string;
}

export default function InexSourcePill({ source, className = "" }: InexSourcePillProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-[#171b27]/90 px-2 py-1 text-[10px] font-medium text-white/82 min-[360px]:text-[11px] ${className}`}
    >
      <span className="flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/[0.08] bg-[#0c111d]">
        <Image src={source.logo} alt={`${source.name} logo`} width={14} height={14} className="h-3.5 w-3.5 object-contain" />
      </span>
      {source.name}
    </span>
  );
}
