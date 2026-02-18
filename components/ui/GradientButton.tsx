import React from "react";

export default function GradientButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button className={`tap bg-accent text-white rounded-full px-4 py-2 text-sm font-medium shadow-glow ${className}`}>
      {children}
    </button>
  );
}
