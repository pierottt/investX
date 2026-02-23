import React from "react";

export default function IconCircleButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="tap flex w-full min-w-0 flex-col items-center gap-1.5 min-[360px]:gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full glass min-[360px]:h-12 min-[360px]:w-12">
        {icon}
      </div>
      <div className="max-w-full text-center text-[10px] leading-tight text-white/70 min-[360px]:text-[11px]">{label}</div>
    </button>
  );
}
