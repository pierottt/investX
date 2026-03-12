export interface CopyTradeMetricChipProps {
  label: string;
  value: string;
  tone?: "default" | "positive";
  className?: string;
}

export default function CopyTradeMetricChip({
  label,
  value,
  tone = "default",
  className = "",
}: CopyTradeMetricChipProps) {
  return (
    <div
      className={`rounded-[1.1rem] border px-3 py-2 ${
        tone === "positive"
          ? "border-emerald-400/20 bg-emerald-400/[0.08]"
          : "border-white/[0.08] bg-white/[0.03]"
      } ${className}`}
    >
      <p className="text-[10px] uppercase tracking-[0.12em] text-white/42 min-[360px]:text-[10.5px]">{label}</p>
      <p className={`mt-1 text-[14px] font-semibold min-[360px]:text-[15px] ${tone === "positive" ? "text-emerald-300" : "text-white/92"}`}>
        {value}
      </p>
    </div>
  );
}
