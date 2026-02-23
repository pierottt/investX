import type { ReactNode } from "react";

type SegmentedPillSize = "sm" | "md";

export interface SegmentedPillProps {
  items: string[];
  active: string;
  size?: SegmentedPillSize;
  className?: string;
  leadingIcon?: ReactNode;
}

export default function SegmentedPill({
  items,
  active,
  size = "md",
  className = "",
  leadingIcon,
}: SegmentedPillProps) {
  const sizeClasses =
    size === "sm"
      ? "min-h-8 rounded-xl px-2 text-[11px] min-[360px]:text-xs"
      : "min-h-10 rounded-2xl px-3 text-[12px] min-[360px]:text-sm";

  return (
    <div
      className={`flex w-full items-center justify-center gap-2 bg-[rgba(96,48,184,0.8)] ${sizeClasses} ${className}`}
      role="group"
      aria-label="Segmented control"
    >
      {leadingIcon ? <span className="text-white/90">{leadingIcon}</span> : null}
      {items.map((item) => {
        const isActive = item === active;
        return (
          <span key={item} className={isActive ? "font-semibold text-white" : "text-white/65"}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
