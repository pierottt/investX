import BottomNav from "./BottomNav";
import React from "react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell-height w-full overflow-x-hidden bg-app">
      <div className="mx-auto flex h-full w-full justify-center px-0 py-0 min-[360px]:px-2 min-[768px]:px-3">
        <div
          className="relative h-full w-full overflow-hidden rounded-none border border-white/5 min-[360px]:rounded-[24px] min-[390px]:rounded-[28px]"
          style={{ maxWidth: 420 }}
        >
          <div className="relative h-full">{children}</div>
          <BottomNav />
        </div>
      </div>
    </div>
  );
}
