import BottomNav from "./BottomNav";
import React from "react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-app">
      <div className="mx-auto flex min-h-screen w-full justify-center px-3 py-6">
        <div className="relative w-full overflow-hidden rounded-[28px] border border-white/5" style={{ maxWidth: 420 }}>
          <div className="relative min-h-screen pb-24">{children}</div>
          <BottomNav />
        </div>
      </div>
    </div>
  );
}
