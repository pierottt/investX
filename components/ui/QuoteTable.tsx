import Link from "next/link";

export type QuoteColumnKey = "symbol" | "price" | "change" | "changePct";

export interface QuoteColumn {
  key: QuoteColumnKey;
  label: string;
}

export interface QuoteTableRow {
  symbol: string;
  company: string;
  price: number;
  change: number;
  changePct: number;
}

export interface QuoteTableProps {
  columns: QuoteColumn[];
  rows: QuoteTableRow[];
  className?: string;
}

const tableGrid = "grid grid-cols-[1.45fr_0.8fr_0.9fr_0.7fr] items-center gap-2";

function formatSigned(value: number, digits = 2) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(digits)}`;
}

export default function QuoteTable({ columns, rows, className = "" }: QuoteTableProps) {
  return (
    <div className={`mt-2 ${className}`}>
      <div className={`${tableGrid} border-b border-white/10 pb-2 text-[11px] text-white/45 min-[360px]:text-xs`}>
        {columns.map((column, idx) => (
          <div key={column.key} className={idx === 0 ? "text-left" : "text-right"}>
            {column.label}
          </div>
        ))}
      </div>

      <div>
        {rows.map((row) => {
          const valueColor = row.change >= 0 ? "var(--gain)" : "var(--loss)";
          return (
            <Link href={`/stocks/${row.symbol}`} key={row.symbol} className={`${tableGrid} border-b border-white/5 py-3 last:border-b-0 hover:bg-white/[0.02] transition-colors`}>
              <div className="min-w-0 pr-2">
                <div className="truncate text-[15px] leading-tight text-white min-[360px]:text-base">
                  {row.symbol}
                </div>
                <div className="truncate pt-0.5 text-[12px] text-white/55 min-[360px]:text-sm">{row.company}</div>
              </div>
              <div className="text-right text-[14px] font-medium tabular-nums min-[360px]:text-base" style={{ color: valueColor }}>
                {row.price.toFixed(2)}
              </div>
              <div className="text-right text-[14px] tabular-nums min-[360px]:text-base" style={{ color: valueColor }}>
                {formatSigned(row.change)}
              </div>
              <div className="text-right text-[14px] tabular-nums min-[360px]:text-base" style={{ color: valueColor }}>
                {formatSigned(row.changePct)}%
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
