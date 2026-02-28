import Link from "next/link";

export const metadata = {
  title: "Offline",
};

export default function OfflinePage() {
  return (
    <div className="page-fit flex items-center justify-center px-5">
      <div className="glass shadow-glow w-full max-w-[320px] rounded-[28px] p-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Offline Mode</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white">You&apos;re offline</h1>
        <p className="mt-3 text-sm leading-6 text-white/65">
          Invest-X is showing cached screens. Reconnect to refresh market data and portfolio activity.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="bg-accent tap inline-flex min-w-[140px] items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white shadow-glow"
          >
            Retry Home
          </Link>
        </div>
      </div>
    </div>
  );
}
