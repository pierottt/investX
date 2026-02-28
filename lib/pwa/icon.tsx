import React from "react";

type AppIconProps = {
  size: number;
};

export function AppIcon({ size }: AppIconProps) {
  const ring = Math.max(10, Math.round(size * 0.06));
  const padding = Math.round(size * 0.12);
  const markFontSize = Math.round(size * 0.28);
  const labelFontSize = Math.round(size * 0.1);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        borderRadius: size * 0.22,
        background:
          "radial-gradient(circle at 20% 18%, rgba(124, 58, 237, 0.95), rgba(10, 12, 24, 0) 36%), linear-gradient(145deg, #0b0d14 10%, #121426 55%, #0f172a 100%)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: size * 0.08,
          borderRadius: size * 0.18,
          border: `${ring}px solid rgba(255, 255, 255, 0.08)`,
          boxShadow: "inset 0 0 40px rgba(34, 211, 238, 0.1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -size * 0.12,
          right: -size * 0.14,
          height: size * 0.5,
          width: size * 0.5,
          borderRadius: "999px",
          background: "rgba(37, 99, 235, 0.34)",
          filter: "blur(18px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -size * 0.1,
          left: -size * 0.08,
          height: size * 0.44,
          width: size * 0.44,
          borderRadius: "999px",
          background: "rgba(34, 211, 238, 0.24)",
          filter: "blur(20px)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flex: 1,
          padding,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "rgba(229, 231, 235, 0.72)",
            fontSize: labelFontSize,
            fontWeight: 700,
            letterSpacing: size * 0.012,
          }}
        >
          <span>INVEST</span>
          <span>X</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: Math.round(size * 0.026),
            }}
          >
            <span
              style={{
                fontSize: markFontSize,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 0.9,
                textShadow: "0 0 24px rgba(124, 58, 237, 0.4)",
              }}
            >
              IX
            </span>
            <span
              style={{
                fontSize: labelFontSize,
                color: "rgba(229, 231, 235, 0.82)",
                letterSpacing: size * 0.008,
              }}
            >
              Markets. Portfolio. Watchlist.
            </span>
          </div>
          <div
            style={{
              width: size * 0.18,
              height: size * 0.34,
              borderRadius: size * 0.05,
              background: "linear-gradient(180deg, #22d3ee 0%, #2563eb 55%, #7c3aed 100%)",
              boxShadow: "0 0 20px rgba(99, 102, 241, 0.35)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
