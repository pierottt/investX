export interface SparklineMiniProps {
  points: number[];
  trend?: "up" | "down" | "neutral";
  className?: string;
  preserveAspectRatio?: string;
}

export default function SparklineMini({ points, trend, className = "", preserveAspectRatio }: SparklineMiniProps) {
  const width = 72;
  const height = 28;
  const padding = 2;
  const high = Math.max(...points);
  const low = Math.min(...points);
  const range = Math.max(1, high - low);
  const step = points.length > 1 ? (width - padding * 2) / (points.length - 1) : 0;

  const polyline = points
    .map((value, idx) => {
      const x = padding + step * idx;
      const y = padding + (height - padding * 2) * (1 - (value - low) / range);
      return `${x},${y}`;
    })
    .join(" ");

  const polygonPoints = `${padding},${height} ${polyline} ${padding + step * (points.length - 1)},${height}`;

  const lineColor = trend === "up" ? "#00C076" : trend === "down" ? "#FF4D4F" : "#888";
  const gradientId = `sparkline-grad-${trend || 'neutral'}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio={preserveAspectRatio}
      width="100%"
      height="100%"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={lineColor} stopOpacity={0.25} />
          <stop offset="100%" stopColor={lineColor} stopOpacity={0.0} />
        </linearGradient>
      </defs>
      <polygon points={polygonPoints} fill={`url(#${gradientId})`} />
      <polyline points={polyline} fill="none" stroke={lineColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
