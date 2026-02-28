import { Search, Mail } from "lucide-react";

export default function TopBar({
  title = "investX",
  subtitle = "invest platform"
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="page-x pt-safe-top flex items-start justify-between gap-3">
      <div className="min-w-0 flex-1 pr-1">
        <div className="text-base font-semibold tracking-tight min-[360px]:text-lg">{title}</div>
        <div className="truncate text-[10px] text-white/55 min-[360px]:text-xs">{subtitle}</div>
      </div>

      <div className="flex shrink-0 items-center gap-2 min-[360px]:gap-3">
        <button
          className="tap focus-accent flex h-8 w-8 items-center justify-center rounded-full glass min-[360px]:h-9 min-[360px]:w-9"
          type="button"
          aria-label="Search"
        >
          <Search className="h-4 w-4 text-white/80" />
        </button>
        <button
          className="tap focus-accent flex h-8 w-8 items-center justify-center rounded-full glass min-[360px]:h-9 min-[360px]:w-9"
          type="button"
          aria-label="Inbox"
        >
          <Mail className="h-4 w-4 text-white/80" />
        </button>
        <div
          className="h-8 w-8 rounded-full border border-white/10 bg-white/10 min-[360px]:h-9 min-[360px]:w-9"
          aria-label="Profile"
        />
      </div>
    </div>
  );
}
