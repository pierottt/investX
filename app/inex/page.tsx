"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChartLine, CircleDollarSign, Mic, Plus, SendHorizontal, TrendingDown, TrendingUp } from "lucide-react";

type SituationId = 1 | 2 | 3;
type ChatTheme = "instagram" | "line" | "messenger";
type MessageSender = "user" | "assistant";

interface ChatMessage {
  id: string;
  sender: MessageSender;
  time: string;
  text?: string;
  lines?: string[];
  meta?: string;
  proposal?: {
    stockName: string;
    symbol: string;
    side: "buy" | "sell";
    summary: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
    primaryAction: string;
    secondaryAction: string;
  };
}

interface SituationOption {
  id: SituationId;
  theme: ChatTheme;
  messages: ChatMessage[];
  composerPlaceholder: string;
}

interface ThemeStyle {
  selectorActive: string;
  selectorTag: string;
  panel: string;
  channelChip: string;
  thread: string;
  assistantBubble: string;
  userBubble: string;
  assistantMeta: string;
  userMeta: string;
  detailRow: string;
  passiveNote: string;
}

const unifiedThemeStyle: ThemeStyle = {
  selectorActive:
    "border-[#5F63B6] bg-[#2F286A] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]",
  selectorTag: "border-white/[0.06] bg-[#171B27] text-[rgba(255,255,255,0.78)]",
  panel: "border-white/[0.06] bg-[rgba(26,31,50,0.55)] shadow-[0_10px_30px_rgba(0,0,0,0.45)]",
  channelChip: "border-white/[0.06] bg-[#171B27] text-[rgba(255,255,255,0.78)]",
  thread: "border-white/[0.06] bg-[#0C111D]",
  assistantBubble: "border-white/[0.06] bg-[#131722] text-[rgba(255,255,255,0.9)]",
  userBubble:
    "border-[#5F63B6] bg-[#2F286A] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]",
  assistantMeta: "text-[rgba(255,255,255,0.52)]",
  userMeta: "text-[#A2A7FF]",
  detailRow: "border-white/[0.06] bg-[#171B27] text-[rgba(255,255,255,0.88)]",
  passiveNote: "border-white/[0.06] bg-[#131722] text-[rgba(255,255,255,0.72)]",
};

const themeStyles: Record<ChatTheme, ThemeStyle> = {
  instagram: unifiedThemeStyle,
  line: unifiedThemeStyle,
  messenger: unifiedThemeStyle,
};

const situationOptions: SituationOption[] = [
  {
    id: 1,
    theme: "instagram",
    messages: [
      {
        id: "s1-m1",
        sender: "assistant",
        time: "09:12",
        text: "Morning. Want a quick market read before the session gets busy?",
      },
      {
        id: "s1-m2",
        sender: "user",
        time: "09:13",
        text: "Yes, please summarize market conditions today.",
      },
      {
        id: "s1-m3",
        sender: "assistant",
        time: "09:14",
        text: "SET closed higher with broad participation from energy and telecom. US futures are slightly positive while USD/THB is stable, so risk sentiment is neutral-to-positive.",
      },
      {
        id: "s1-m4",
        sender: "assistant",
        time: "09:14",
        meta: "Live snapshot",
        lines: ["SET: +1.65%", "S&P 500 futures: +0.34%", "USD/THB: 35.72"],
      },
      {
        id: "s1-m5",
        sender: "user",
        time: "09:15",
        text: "Perfect. Keep me posted if momentum fades.",
      },
    ],
    composerPlaceholder: "Ask INEX about today's market...",
  },
  {
    id: 2,
    theme: "line",
    messages: [
      {
        id: "s2-m1",
        sender: "user",
        time: "10:21",
        text: "I want to buy Google (GOOGL) at 173.50 for 20 shares.",
      },
      {
        id: "s2-m2",
        sender: "assistant",
        time: "10:22",
        text: "Understood. Confirming your intent: BUY GOOGL with a 173.50 limit for 20 shares. Google momentum is stabilizing above intraday support, so a staged entry keeps slippage controlled and caps downside if setup fails.",
      },
      {
        id: "s2-m3",
        sender: "assistant",
        time: "10:22",
        meta: "Execution proposal",
        proposal: {
          stockName: "Google",
          symbol: "GOOGL",
          side: "buy",
          summary: "Limit buy ready. Enter near support and keep risk defined.",
          stats: [
            { label: "Limit", value: "173.50" },
            { label: "Shares", value: "20" },
            { label: "Stop", value: "170.40" },
            { label: "Target", value: "178.80" },
          ],
          primaryAction: "Confirm BUY",
          secondaryAction: "See full proposal",
        },
      },
      {
        id: "s2-m4",
        sender: "user",
        time: "10:23",
        text: "Looks good. Place it only if we print near that limit.",
      },
    ],
    composerPlaceholder: "Type a buy order request...",
  },
  {
    id: 3,
    theme: "messenger",
    messages: [
      {
        id: "s3-m1",
        sender: "user",
        time: "14:07",
        text: "I want to sell NVDA at 182.70 and trim 10 shares.",
      },
      {
        id: "s3-m2",
        sender: "assistant",
        time: "14:08",
        text: "Got it. Confirming your intent: SELL NVDA at 182.70 for a 10-share partial close. NVDA is near resistance after an extended run, so this take-profit locks gains while keeping smaller upside exposure if momentum continues.",
      },
      {
        id: "s3-m3",
        sender: "assistant",
        time: "14:08",
        meta: "Execution proposal",
        proposal: {
          stockName: "NVIDIA",
          symbol: "NVDA",
          side: "sell",
          summary: "Partial trim staged near resistance to lock gains without fully exiting.",
          stats: [
            { label: "Limit", value: "182.70" },
            { label: "Shares", value: "10" },
            { label: "Support", value: "178.20" },
            { label: "Re-entry", value: "176.50" },
          ],
          primaryAction: "Confirm SELL",
          secondaryAction: "See full proposal",
        },
      },
      {
        id: "s3-m4",
        sender: "user",
        time: "14:09",
        text: "Approved. If price tags that level, execute the trim.",
      },
    ],
    composerPlaceholder: "Type a sell order request...",
  },
];

function getNextSituation(current: SituationId): SituationId {
  if (current === 1) return 2;
  if (current === 2) return 3;
  return 1;
}

export default function InexPage() {
  const [activeSituation, setActiveSituation] = useState<SituationId>(1);
  const [draft, setDraft] = useState("");

  const active = situationOptions.find((option) => option.id === activeSituation) ?? situationOptions[0];
  const activeTheme = themeStyles[active.theme];
  const hasProposal = active.messages.some((message) => message.proposal);
  const cycleSituation = () => {
    setActiveSituation((current) => getNextSituation(current));
  };

  return (
    <div className="page-scroll no-scrollbar bg-[radial-gradient(circle_at_50%_-18%,rgba(84,90,210,0.26)_0%,rgba(8,10,16,0.92)_36%,#05070D_100%)]">
      <div className="page-x pb-safe-nav pt-safe-top">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="tap focus-accent inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-white/80"
            aria-label="Back to home"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </header>

        <section className={`mt-4 rounded-2xl border p-3.5 ${activeTheme.panel}`}>
          <div className={`mt-3 space-y-2.5 rounded-2xl border p-2.5 ${activeTheme.thread}`}>
            {active.messages.map((message) => {
              const isUser = message.sender === "user";
              const speaker = isUser ? "You" : "INEX";
              return (
                <div key={message.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                  <div className={`flex max-w-[86%] flex-col ${isUser ? "items-end" : "items-start"}`}>
                    {message.proposal ? (
                      <div className="w-full overflow-hidden rounded-[22px] border border-white/[0.06] bg-[#171B27] shadow-[0_10px_30px_rgba(0,0,0,0.32)]">
                        <div
                          className={`border-b border-white/[0.06] px-4 py-4 ${
                            message.proposal.side === "buy" ? "bg-[#1c2240]" : "bg-[#261922]"
                          }`}
                        >
                          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em]">
                            {message.proposal.side === "buy" ? (
                              <TrendingUp className="h-3.5 w-3.5 text-[#39C38A]" />
                            ) : (
                              <TrendingDown className="h-3.5 w-3.5 text-[#FF5D72]" />
                            )}
                            <span className={message.proposal.side === "buy" ? "text-[#A2A7FF]" : "text-[#FFB3BD]"}>
                              {message.proposal.side === "buy" ? "Buy Proposal" : "Sell Proposal"}
                            </span>
                          </div>
                          <p className="mt-3 text-[26px] font-semibold leading-none text-white">{message.proposal.stockName}</p>
                          <p className="mt-1 text-[12px] text-[rgba(255,255,255,0.68)]">{message.proposal.symbol}</p>
                          <p className="mt-3 text-[12.5px] leading-relaxed text-[rgba(255,255,255,0.78)]">{message.proposal.summary}</p>
                          <div className="mt-4 grid grid-cols-2 gap-2">
                            {message.proposal.stats.map((stat) => (
                              <div key={stat.label} className="rounded-xl border border-white/[0.06] bg-[#131722] px-3 py-2">
                                <p className="text-[10px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.46)]">{stat.label}</p>
                                <p className="mt-1 text-[15px] font-medium text-white">{stat.value}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-[#171B27]">
                          <button
                            type="button"
                            className={`tap flex w-full items-center justify-center px-4 py-3 text-[15px] font-medium ${
                              message.proposal.side === "buy" ? "text-[#39C38A]" : "text-[#FF5D72]"
                            }`}
                          >
                            {message.proposal.primaryAction}
                          </button>
                          <button
                            type="button"
                            className="tap flex w-full items-center justify-center border-t border-white/[0.06] px-4 py-3 text-[15px] font-medium text-[#A2A7FF]"
                          >
                            {message.proposal.secondaryAction}
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className={`rounded-2xl border px-3 py-2 ${isUser ? activeTheme.userBubble : activeTheme.assistantBubble}`}>
                        {message.text ? <p className="text-[12.5px] leading-relaxed min-[360px]:text-[13px]">{message.text}</p> : null}
                        {message.lines ? (
                          <div className="mt-2 grid gap-1.5">
                            {message.lines.map((line) => (
                              <div key={line} className={`rounded-md border px-2 py-1 text-[11px] ${activeTheme.detailRow}`}>
                                {line}
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    )}
                    <p className={`mt-1 px-1 text-[10px] ${isUser ? activeTheme.userMeta : activeTheme.assistantMeta}`}>
                      {speaker}
                      {message.meta ? ` | ${message.meta}` : ""}
                      {` | ${message.time}`}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {!hasProposal ? (
            <div className={`mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] ${activeTheme.passiveNote}`}>
              <ChartLine className="h-3.5 w-3.5" />
              Summary only, no order confirmation in this situation.
            </div>
          ) : null}
        </section>

        <section className="mt-4 rounded-[22px] border border-white/[0.06] bg-[#131722] p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
          <div className="flex items-end gap-2">
            <button
              type="button"
              className="tap flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.06] bg-[#171B27] text-[rgba(255,255,255,0.56)]"
              aria-label="More chat actions"
            >
              <Plus className="h-4.5 w-4.5" />
            </button>
            <div className="flex min-h-10 flex-1 items-center rounded-[18px] border border-white/[0.06] bg-[#0C111D] px-3">
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder={active.composerPlaceholder}
                className="w-full bg-transparent text-[13px] text-[rgba(255,255,255,0.9)] outline-none placeholder:text-[rgba(255,255,255,0.5)]"
                aria-label="Message INEX"
              />
            </div>
            <button
              type="button"
              className="tap flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5F63B6] bg-[#2F286A] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]"
              aria-label="Send message"
            >
              {draft.trim() ? <SendHorizontal className="h-4.5 w-4.5" /> : <Mic className="h-4.5 w-4.5" />}
            </button>
          </div>
        </section>

        <button
          type="button"
          onClick={cycleSituation}
          className="mt-4 flex w-full items-center justify-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[rgba(255,255,255,0.48)]"
          aria-label="Switch INEX demo situation"
        >
          <CircleDollarSign className="h-3.5 w-3.5" />
          Prototype flow only
        </button>
      </div>
    </div>
  );
}
