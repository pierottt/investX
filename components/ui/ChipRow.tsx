import Image from "next/image";

export interface ChipRowItem {
  id: string;
  label: string;
  iconSrc?: string;
}

type ChipRowVariant = "soft" | "solid";

export interface ChipRowProps {
  items: ChipRowItem[];
  active: string;
  variant?: ChipRowVariant;
  className?: string;
}

export default function ChipRow({ items, active, variant = "soft", className = "" }: ChipRowProps) {
  return (
    <div className={`no-scrollbar overflow-x-auto ${className}`}>
      <div className="flex w-max min-w-full items-center gap-2">
        {items.map((item) => {
          const isActive = item.id === active;
          const activeClass =
            variant === "solid"
              ? "bg-white/16 text-white"
              : "border border-white/15 bg-white/12 text-white";
          const inactiveClass =
            variant === "solid"
              ? "bg-white/7 text-white/65"
              : "border border-white/10 bg-[rgba(255,255,255,0.06)] text-white/60";

          return (
            <div
              key={item.id}
              className={`flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-[12px] min-[360px]:text-sm ${
                isActive ? activeClass : inactiveClass
              }`}
            >
              {item.iconSrc ? (
                <Image src={item.iconSrc} alt={item.label} width={16} height={16} className="h-4 w-4 rounded-full" />
              ) : null}
              <span className="font-medium">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
