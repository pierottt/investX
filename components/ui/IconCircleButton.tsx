import React from "react";

export default function IconCircleButton({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="tap flex flex-col items-center gap-2">
      <div className="h-12 w-12 rounded-full glass flex items-center justify-center">{icon}</div>
      <div className="text-[11px] text-white/70">{label}</div>
    </button>
  );
}
