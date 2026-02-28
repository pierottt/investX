import React from "react";

export default function IconCircleButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="tap flex w-full min-w-0 flex-col items-center gap-1 min-[360px]:gap-1.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-full glass min-[360px]:h-10 min-[360px]:w-10">
        {icon}
      </div>
      <div className="max-w-[4.5rem] text-center text-[9px] leading-[1.15] text-white/70 min-[360px]:text-[10px]">{label}</div>
    </button>
  );
}
