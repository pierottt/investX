import React from "react";

export default function CardGlass({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`glass shadow-glow rounded-2xl ${className}`}>{children}</div>;
}
