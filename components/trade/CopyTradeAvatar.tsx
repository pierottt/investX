import type { CopyTradeAvatar as CopyTradeAvatarData } from "@/lib/data/mock";

export interface CopyTradeAvatarProps {
  avatar: CopyTradeAvatarData;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "h-9 w-9 text-[13px]",
  md: "h-11 w-11 text-[15px]",
  lg: "h-14 w-14 text-[17px]",
};

export default function CopyTradeAvatar({ avatar, size = "md", className = "" }: CopyTradeAvatarProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full font-semibold tracking-[-0.03em] shadow-[0_10px_24px_rgba(0,0,0,0.28)] ${sizeClasses[size]} ${className}`}
      style={{
        background: avatar.background,
        color: avatar.textColor ?? "#f8fafc",
      }}
      aria-hidden="true"
    >
      {avatar.initials}
    </div>
  );
}
