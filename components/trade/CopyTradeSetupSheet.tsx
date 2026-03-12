"use client";

import { useState } from "react";
import type { CopyTradeInvestor } from "@/lib/data/mock";

const copyRatioOptions = [25, 50, 100] as const;
const maxPositionOptions = [10, 20, 30] as const;
const startModeOptions = ["Mirror current portfolio", "Only follow new trades"] as const;
const syncModeOptions = ["Instant", "Daily", "Manual"] as const;
const riskGuardOptions = [10, 15, 20] as const;

type StartMode = (typeof startModeOptions)[number];
type SyncMode = (typeof syncModeOptions)[number];

function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function SectionLabel({ title, hint }: { title: string; hint?: string }) {
  return (
    <div>
      <p className="text-[13px] font-semibold text-white/90">{title}</p>
      {hint ? <p className="mt-1 text-[12px] leading-5 text-white/48">{hint}</p> : null}
    </div>
  );
}

export default function CopyTradeSetupSheet({ investor }: { investor: CopyTradeInvestor }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [amount, setAmount] = useState(String(investor.minCopyUsd));
  const [copyRatio, setCopyRatio] = useState<(typeof copyRatioOptions)[number]>(100);
  const [maxPosition, setMaxPosition] = useState<(typeof maxPositionOptions)[number]>(20);
  const [startMode, setStartMode] = useState<StartMode>("Mirror current portfolio");
  const [syncMode, setSyncMode] = useState<SyncMode>("Instant");
  const [riskGuard, setRiskGuard] = useState<(typeof riskGuardOptions)[number]>(15);

  const parsedAmount = Math.max(Number(amount) || 0, investor.minCopyUsd);

  function handleConfirm() {
    setIsActive(true);
    setIsOpen(false);
  }

  return (
    <>
      <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] left-1/2 z-50 w-[calc(100%-1.125rem)] -translate-x-1/2" style={{ maxWidth: 388 }}>
        <div className="rounded-[1.6rem] border border-white/[0.08] bg-[#171c27]/92 p-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          {isActive ? (
            <div className="flex items-center gap-2 rounded-[1.2rem] border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-2.5">
              <div className="min-w-0 flex-1">
                <p className="text-[12px] uppercase tracking-[0.16em] text-emerald-300">Copying Active</p>
                <p className="truncate pt-1 text-[13px] text-white/72">
                  {formatUsd(parsedAmount)} at {copyRatio}% ratio, {syncMode.toLowerCase()} sync
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="tap rounded-full border border-white/[0.08] bg-white/[0.06] px-4 py-2 text-[13px] font-medium text-white"
              >
                Manage
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button type="button" className="tap flex-1 rounded-full border border-white/[0.08] bg-white/[0.04] py-3 text-[14px] font-medium text-white/78">
                Watch
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="tap flex-[1.35] rounded-full border border-[#5F63B6] bg-[#6F73F8] py-3 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
              >
                Copy Trade
              </button>
            </div>
          )}
        </div>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Close copy trade setup"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[rgba(3,6,12,0.72)] backdrop-blur-[4px]"
          />

          <div className="absolute inset-0 flex items-end justify-center px-3 pt-safe-top pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
            <div className="relative max-h-full w-full max-w-[388px] overflow-y-auto rounded-[2rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(16,19,29,0.98)_0%,rgba(10,12,20,0.98)_100%)] p-4 shadow-[0_-12px_40px_rgba(0,0,0,0.45)] min-[360px]:p-5">
              <div className="mx-auto h-1.5 w-14 rounded-full bg-white/12" />

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#9f8df0]">Copy Setup</p>
                  <h2 className="mt-1 text-[24px] font-semibold tracking-[-0.04em] text-white">Follow {investor.name}</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="tap rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[12px] text-white/62"
                >
                  Close
                </button>
              </div>

              <div className="mt-5 space-y-5">
                <section>
                  <SectionLabel title="Budget" hint={`Minimum ${formatUsd(investor.minCopyUsd)} to start copying this strategy.`} />
                  <div className="mt-3 rounded-[1.4rem] border border-white/[0.08] bg-white/[0.03] px-3 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[18px] font-semibold text-white/64">$</span>
                      <input
                        inputMode="numeric"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value.replace(/[^\d]/g, ""))}
                        className="w-full bg-transparent text-[22px] font-semibold text-white outline-none placeholder:text-white/22"
                        placeholder={String(investor.minCopyUsd)}
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[investor.minCopyUsd, investor.minCopyUsd * 2, investor.minCopyUsd * 5].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setAmount(String(value))}
                        className="tap rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[12px] text-white/72"
                      >
                        {formatUsd(value)}
                      </button>
                    ))}
                  </div>
                </section>

                <section>
                  <SectionLabel
                    title="Copy Ratio"
                    hint="Use ratio instead of 'follow 2 times'. It controls how much of each trade you mirror."
                  />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {copyRatioOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setCopyRatio(option)}
                        className={`tap rounded-[1.2rem] border px-3 py-3 text-[13px] font-medium ${
                          copyRatio === option
                            ? "border-[#8d7eff]/60 bg-[#7c3aed]/20 text-white"
                            : "border-white/[0.08] bg-white/[0.03] text-white/62"
                        }`}
                      >
                        {option}%
                      </button>
                    ))}
                  </div>
                </section>

                <section>
                  <SectionLabel title="Max Position Size" hint="Cap any single copied holding so one stock cannot dominate your portfolio." />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {maxPositionOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setMaxPosition(option)}
                        className={`tap rounded-[1.2rem] border px-3 py-3 text-[13px] ${
                          maxPosition === option
                            ? "border-white/20 bg-white/[0.08] text-white"
                            : "border-white/[0.08] bg-white/[0.03] text-white/60"
                        }`}
                      >
                        {option}%
                      </button>
                    ))}
                  </div>
                </section>

                <section>
                  <SectionLabel title="Start Mode" hint="Choose whether to mirror the portfolio now or only copy the investor's new moves." />
                  <div className="mt-3 grid gap-2">
                    {startModeOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setStartMode(option)}
                        className={`tap rounded-[1.2rem] border px-3 py-3 text-left text-[13px] ${
                          startMode === option
                            ? "border-white/20 bg-white/[0.08] text-white"
                            : "border-white/[0.08] bg-white/[0.03] text-white/60"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </section>

                <section>
                  <SectionLabel title="Sync Mode" hint="Instant keeps you closest to the investor. Daily or manual gives you more control." />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {syncModeOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setSyncMode(option)}
                        className={`tap rounded-[1.2rem] border px-3 py-3 text-[13px] ${
                          syncMode === option
                            ? "border-white/20 bg-white/[0.08] text-white"
                            : "border-white/[0.08] bg-white/[0.03] text-white/60"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </section>

                <section>
                  <SectionLabel title="Risk Guard" hint="Pause copying if this strategy falls by your selected drawdown limit." />
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {riskGuardOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setRiskGuard(option)}
                        className={`tap rounded-[1.2rem] border px-3 py-3 text-[13px] ${
                          riskGuard === option
                            ? "border-rose-300/30 bg-rose-400/[0.10] text-white"
                            : "border-white/[0.08] bg-white/[0.03] text-white/60"
                        }`}
                      >
                        {option}%
                      </button>
                    ))}
                  </div>
                </section>
              </div>

              <div className="mt-5 rounded-[1.4rem] border border-white/[0.08] bg-white/[0.03] p-3">
                <p className="text-[12px] uppercase tracking-[0.16em] text-white/40">Summary</p>
                <div className="mt-2 grid grid-cols-2 gap-2 text-[13px] text-white/72">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                    <p className="text-white/40">Budget</p>
                    <p className="pt-1 font-medium text-white">{formatUsd(parsedAmount)}</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                    <p className="text-white/40">Copy Ratio</p>
                    <p className="pt-1 font-medium text-white">{copyRatio}%</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                    <p className="text-white/40">Max Position</p>
                    <p className="pt-1 font-medium text-white">{maxPosition}%</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                    <p className="text-white/40">Start</p>
                    <p className="pt-1 font-medium text-white">{startMode}</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2">
                    <p className="text-white/40">Guard</p>
                    <p className="pt-1 font-medium text-white">Pause at {riskGuard}%</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleConfirm}
                className="tap mt-5 w-full rounded-full border border-[#5F63B6] bg-[#6F73F8] py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
              >
                Start Copying
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
