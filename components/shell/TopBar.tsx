import { Search, Mail } from "lucide-react";

export default function TopBar({
  title = "innovestX",
  subtitle = "A subsidiary of SCBX Group"
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start justify-between px-5 pt-6">
      <div>
        <div className="text-lg font-semibold tracking-tight">{title}</div>
        <div className="text-xs text-white/55">{subtitle}</div>
      </div>

      <div className="flex items-center gap-3">
        <button className="tap h-9 w-9 rounded-full glass flex items-center justify-center" aria-label="Search">
          <Search className="h-4 w-4 text-white/80" />
        </button>
        <button className="tap h-9 w-9 rounded-full glass flex items-center justify-center" aria-label="Inbox">
          <Mail className="h-4 w-4 text-white/80" />
        </button>
        <div className="h-9 w-9 rounded-full bg-white/10 border border-white/10" aria-label="Profile" />
      </div>
    </div>
  );
}
