import { Mail, Search } from "lucide-react";

export interface PageHeaderProps {
  title: string;
  className?: string;
  showActions?: boolean;
}

export default function PageHeader({ title, className = "", showActions = true }: PageHeaderProps) {
  return (
    <div className={`flex items-center justify-between gap-3 ${className}`}>
      <h1 className="page-title">{title}</h1>

      {showActions ? (
        <div className="flex items-center gap-2">
          <button type="button" className="icon-action-button focus-accent" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" className="icon-action-button focus-accent" aria-label="Inbox">
            <Mail className="h-5 w-5" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
