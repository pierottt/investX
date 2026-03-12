"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChartLine, CircleDollarSign, Mic, Plus, SendHorizontal, TrendingDown, TrendingUp, X } from "lucide-react";

type SituationId = 1 | 2 | 3 | 4;
type ChatTheme = "instagram" | "line" | "messenger";
type MessageSender = "user" | "assistant";
type ProposalSide = "buy" | "sell" | "portfolio";
const RING_COLORS = ["#1C7CF3", "#6D38C5", "#E7E91F", "#46CFE5", "#8E8EFF", "#B44BEF", "#A7D736", "#6B7280"];

interface ChatMessage {
  id: string;
  sender: MessageSender;
  time: string;
  text?: string;
  lines?: string[];
  meta?: string;
  sources?: string[];
  proposal?: {
    stockName: string;
    symbol: string;
    side: ProposalSide;
    summary: string;
    stats: Array<{
      label: string;
      value: string;
    }>;
    allocations?: Array<{
      asset: string;
      weight: string;
      reason: string;
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
        sources: ["SET market summary", "S&P 500 futures", "USD/THB spot rate"],
      },
      {
        id: "s1-m4",
        sender: "assistant",
        time: "09:14",
        meta: "Live snapshot",
        lines: ["SET: +1.65%", "S&P 500 futures: +0.34%", "USD/THB: 35.72"],
        sources: ["SET close snapshot", "CME equity futures", "FX market feed"],
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
        sources: ["GOOGL intraday price action", "Support and resistance model", "Order request: 173.50 x 20"],
      },
      {
        id: "s2-m3",
        sender: "assistant",
        time: "10:22",
        meta: "Execution proposal",
        sources: ["Client order details", "GOOGL intraday support", "Risk control rules"],
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
        sources: ["NVDA intraday trend", "Resistance model", "Order request: 182.70 x 10"],
      },
      {
        id: "s3-m3",
        sender: "assistant",
        time: "14:08",
        meta: "Execution proposal",
        sources: ["Client order details", "NVDA resistance zone", "Profit-taking rules"],
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
  {
    id: 4,
    theme: "instagram",
    messages: [
      {
        id: "s4-m1",
        sender: "user",
        time: "16:02",
        text: "Build me a moderate-risk 5-year portfolio with some dividends.",
      },
      {
        id: "s4-m2",
        sender: "assistant",
        time: "16:03",
        text: "Here is a balanced mix for growth, income, and lower drawdowns.",
        sources: ["5-year horizon", "Moderate-risk profile", "Dividend preference"],
      },
      {
        id: "s4-m3",
        sender: "assistant",
        time: "16:03",
        meta: "Portfolio recommendation",
        sources: ["ETF allocation model", "Diversification rules", "Quarterly rebalance plan"],
        proposal: {
          stockName: "Balanced Growth Income",
          symbol: "Moderate Risk",
          side: "portfolio",
          summary: "Diversified for steady upside, income, and defense.",
          stats: [
            { label: "Goal", value: "Growth + income" },
            { label: "Horizon", value: "5 years" },
            { label: "Risk", value: "Moderate" },
            { label: "Rebalance", value: "Quarterly" },
          ],
          allocations: [
            {
              asset: "VOO",
              weight: "35%",
              reason: "US large-cap core.",
            },
            {
              asset: "QQQ",
              weight: "20%",
              reason: "Higher-growth tech tilt.",
            },
            {
              asset: "SCHD",
              weight: "20%",
              reason: "Dividend quality anchor.",
            },
            {
              asset: "IEF",
              weight: "15%",
              reason: "Stability in risk-off moves.",
            },
            {
              asset: "GLD",
              weight: "10%",
              reason: "Inflation and stress hedge.",
            },
          ],
          primaryAction: "Use this portfolio",
          secondaryAction: "Adjust risk mix",
        },
      },
    ],
    composerPlaceholder: "Adjust this portfolio...",
  },
];

const suggestedQuestionsBySituation: Record<SituationId, string[]> = {
  1: [
    "What are today's key market movers?",
    "Give me a quick risk-on vs risk-off read.",
    "Which sectors are leading right now?",
  ],
  2: [
    "Build a staged buy plan for GOOGL.",
    "What stop and target levels fit this entry?",
    "Should I split this order into tranches?",
  ],
  3: [
    "How should I size a partial NVDA trim?",
    "What signals confirm this sell level?",
    "Suggest a re-entry plan after profit-taking.",
  ],
  4: [
    "Rebalance this portfolio for lower volatility.",
    "Increase dividend yield without taking much more risk.",
    "What allocation tweaks fit a 5-year horizon?",
  ],
};

function getAllocationPercent(weight: string) {
  const percent = Number.parseFloat(weight);
  if (Number.isNaN(percent)) return 0;
  return Math.min(Math.max(percent, 0), 100);
}

function getAllocationRingSegments(allocations: NonNullable<ChatMessage["proposal"]>["allocations"]) {
  const safeAllocations = allocations ?? [];
  const total = safeAllocations.reduce((sum, allocation) => sum + getAllocationPercent(allocation.weight), 0);
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return safeAllocations.map((allocation, index) => {
    const value = getAllocationPercent(allocation.weight);
    const length = total > 0 ? (value / total) * circumference : 0;
    const segment = {
      ...allocation,
      color: RING_COLORS[index % RING_COLORS.length],
      length,
      offset,
    };
    offset += length;
    return segment;
  });
}

function getNextSituation(current: SituationId): SituationId {
  if (current === 1) return 2;
  if (current === 2) return 3;
  if (current === 3) return 4;
  return 1;
}

export default function InexPage() {
  const [activeSituation, setActiveSituation] = useState<SituationId>(1);
  const [draft, setDraft] = useState("");
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [openSources, setOpenSources] = useState<Record<string, boolean>>({});
  const [isSuggestionSheetDismissed, setIsSuggestionSheetDismissed] = useState(false);
  const composerInputRef = useRef<HTMLInputElement>(null);

  const active = situationOptions.find((option) => option.id === activeSituation) ?? situationOptions[0];
  const activeTheme = themeStyles[active.theme];
  const showSuggestedQuestions = !hasStartedTyping && draft.length === 0 && !isSuggestionSheetDismissed;
  const suggestedQuestions = suggestedQuestionsBySituation[activeSituation];
  const hasProposal = active.messages.some((message) => message.proposal);
  const isPortfolioShowcase = activeSituation === 4;
  const citationBadgeClassName = isPortfolioShowcase
    ? "inline-flex h-4 min-w-4 items-center justify-center rounded-full border border-[#5F63B6]/60 bg-[#3A4176] px-1 text-[7px] font-semibold text-white align-middle shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-[#7B83E8] hover:bg-[#4A5394]"
    : "inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-[#5F63B6]/60 bg-[#3A4176] px-1 text-[9px] font-semibold text-white align-middle shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-[#7B83E8] hover:bg-[#4A5394]";
  const sourcesToggleClassName = isPortfolioShowcase
    ? "mt-2 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-1 text-[8px] font-medium text-[rgba(255,255,255,0.82)] transition hover:border-[#5F63B6]/60 hover:bg-[#232A45]"
    : "mt-2 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-[10px] font-medium text-[rgba(255,255,255,0.82)] transition hover:border-[#5F63B6]/60 hover:bg-[#232A45]";
  const sourcesPanelClassName = isPortfolioShowcase
    ? "mt-2 space-y-1 rounded-2xl border border-white/[0.06] bg-[#101522] p-2"
    : "mt-2 space-y-1.5 rounded-2xl border border-white/[0.06] bg-[#101522] p-2.5";
  const sourcesItemClassName = isPortfolioShowcase
    ? "flex items-start gap-2 rounded-xl border border-white/[0.04] bg-white/[0.03] px-2 py-1.5 text-[8px] text-[rgba(255,255,255,0.72)]"
    : "flex items-start gap-2 rounded-xl border border-white/[0.04] bg-white/[0.03] px-2.5 py-2 text-[10px] text-[rgba(255,255,255,0.72)]";

  const cycleSituation = () => {
    setActiveSituation((current) => getNextSituation(current));
    setIsSuggestionSheetDismissed(false);
  };
  const toggleSources = (messageId: string) => {
    setOpenSources((current) => ({
      ...current,
      [messageId]: !current[messageId],
    }));
  };
  const applySuggestedQuestion = (question: string) => {
    setDraft(question);
    setHasStartedTyping(true);
    setIsSuggestionSheetDismissed(true);
  };
  const hasDraft = Boolean(draft.trim());

  return (
    <div className="h-full overflow-y-auto overscroll-contain no-scrollbar [-webkit-overflow-scrolling:touch] bg-[radial-gradient(circle_at_50%_-18%,rgba(84,90,210,0.26)_0%,rgba(8,10,16,0.92)_36%,#05070D_100%)]">
      <div className="page-x flex min-h-full flex-col pt-safe-top">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className={`tap focus-accent inline-flex items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-white/80 ${
              isPortfolioShowcase ? "h-8 w-8" : "h-9 w-9"
            }`}
            aria-label="Back to home"
          >
            <ArrowLeft className={isPortfolioShowcase ? "h-4.5 w-4.5" : "h-5 w-5"} />
          </Link>
        </header>

        <section
          className={`rounded-2xl border ${activeTheme.panel} ${
            isPortfolioShowcase ? "mt-3 p-2.5" : "mt-4 p-3.5"
          } ${showSuggestedQuestions ? "flex flex-1 flex-col justify-center" : ""}`}
        >
          <div
            className={`rounded-2xl border ${activeTheme.thread} ${
              showSuggestedQuestions
                ? isPortfolioShowcase
                  ? "mt-0 flex min-h-[80vh] flex-1 items-stretch justify-stretch p-2.5"
                  : "mt-0 flex min-h-[80vh] flex-1 items-stretch justify-stretch p-3"
                : isPortfolioShowcase
                  ? "mt-2 space-y-1.5 p-2"
                  : "mt-3 space-y-2.5 p-2.5"
            }`}
          >
            {showSuggestedQuestions ? (
              <div className="mx-auto flex h-[min(88svh,760px)] max-h-full w-full max-w-[440px] flex-col rounded-[24px] border border-white/[0.06] bg-[linear-gradient(180deg,#151A29_0%,#0E1422_100%)] p-3 shadow-[0_14px_34px_rgba(0,0,0,0.42)] min-[390px]:p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-[rgba(255,255,255,0.5)]">
                      Suggested questions
                    </p>
                    <p className="mt-1 text-[12px] text-[rgba(255,255,255,0.72)] min-[390px]:text-[13px]">
                      Pick one to start instantly.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsSuggestionSheetDismissed(true)}
                    className="tap inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-[rgba(255,255,255,0.65)] transition hover:border-white/[0.14] hover:text-white"
                    aria-label="Dismiss suggested questions"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="no-scrollbar mt-3 flex-1 overflow-y-auto pr-0.5">
                  <div className="grid gap-2">
                    {suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => applySuggestedQuestion(question)}
                        className="tap w-full rounded-2xl border border-white/[0.08] bg-white/[0.03] px-3 py-3 text-left text-[12px] text-[rgba(255,255,255,0.88)] transition hover:border-[#5F63B6]/60 hover:bg-[#232A45]"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              active.messages.map((message) => {
                const isUser = message.sender === "user";
                const speaker = isUser ? "You" : "INEX";
                const isPortfolioProposal = message.proposal?.side === "portfolio";
                const hasSources = !isUser && !message.proposal && Boolean(message.text && message.sources?.length);
                const isSourcesOpen = Boolean(openSources[message.id]);
                return (
                  <div key={message.id} className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex flex-col ${isUser ? "items-end" : "items-start"} ${
                        isPortfolioShowcase ? "max-w-[92%]" : "max-w-[80%]"
                      }`}
                    >
                      {message.proposal ? (
                        <div className="w-full overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#171B27] shadow-[0_10px_30px_rgba(0,0,0,0.32)]">
                          <div
                            className={`border-b border-white/[0.06] ${
                              isPortfolioShowcase && isPortfolioProposal
                                ? "px-2.5 py-2.5"
                                : "px-3.5 py-3.5"
                            } ${
                              message.proposal.side === "buy"
                                ? "bg-[#1c2240]"
                                : message.proposal.side === "sell"
                                  ? "bg-[#261922]"
                                  : "bg-[#1A2233]"
                            }`}
                          >
                            <div
                              className={`flex items-center gap-2 uppercase tracking-[0.18em] ${
                                isPortfolioProposal ? (isPortfolioShowcase ? "text-[8px]" : "text-[9px]") : "text-[10px]"
                              }`}
                            >
                              {message.proposal.side === "buy" ? (
                                <TrendingUp className="h-3.5 w-3.5 text-[#39C38A]" />
                              ) : message.proposal.side === "sell" ? (
                                <TrendingDown className="h-3.5 w-3.5 text-[#FF5D72]" />
                              ) : (
                                <ChartLine className="h-3.5 w-3.5 text-[#6DD3FF]" />
                              )}
                              <span
                                className={
                                  message.proposal.side === "buy"
                                    ? "text-[#A2A7FF]"
                                    : message.proposal.side === "sell"
                                      ? "text-[#FFB3BD]"
                                      : "text-[#9FDCFF]"
                                }
                              >
                                {message.proposal.side === "buy"
                                  ? "Buy Proposal"
                                  : message.proposal.side === "sell"
                                    ? "Sell Proposal"
                                    : "Portfolio Match"}
                              </span>
                            </div>
                            <p
                              className={`mt-2.5 font-semibold leading-none text-white ${
                                isPortfolioProposal ? (isPortfolioShowcase ? "text-[16px]" : "text-[18px]") : "text-[22px]"
                              }`}
                            >
                              {message.proposal.stockName}
                            </p>
                            <p
                              className={`mt-1 text-[rgba(255,255,255,0.68)] ${
                                isPortfolioProposal ? (isPortfolioShowcase ? "text-[9px]" : "text-[10px]") : "text-[11px]"
                              }`}
                            >
                              {message.proposal.symbol}
                            </p>
                            <p
                              className={`leading-relaxed text-[rgba(255,255,255,0.78)] ${
                                isPortfolioProposal
                                  ? isPortfolioShowcase
                                    ? "mt-2 text-[9.5px]"
                                    : "mt-2.5 text-[10.5px]"
                                  : "mt-2.5 text-[11.5px]"
                              }`}
                            >
                              {message.proposal.summary}
                            </p>
                            <div
                              className={`grid grid-cols-2 ${
                                isPortfolioProposal
                                  ? isPortfolioShowcase
                                    ? "mt-2 gap-1"
                                    : "mt-3 gap-1.5"
                                  : "mt-3 gap-2"
                              }`}
                            >
                              {message.proposal.stats.map((stat) => (
                                <div
                                  key={stat.label}
                                  className={`rounded-xl border border-white/[0.06] bg-[#131722] ${
                                    isPortfolioProposal
                                      ? isPortfolioShowcase
                                        ? "px-1.5 py-1"
                                        : "px-2 py-1.5"
                                      : "px-2.5 py-2"
                                  }`}
                                >
                                  <p
                                    className={`uppercase tracking-[0.14em] text-[rgba(255,255,255,0.46)] ${
                                      isPortfolioProposal ? (isPortfolioShowcase ? "text-[8px]" : "text-[9px]") : "text-[10px]"
                                    }`}
                                  >
                                    {stat.label}
                                  </p>
                                  <p
                                    className={`mt-1 font-medium text-white ${
                                      isPortfolioProposal ? (isPortfolioShowcase ? "text-[11px]" : "text-[12px]") : "text-[14px]"
                                    }`}
                                  >
                                    {stat.value}
                                  </p>
                                </div>
                              ))}
                            </div>
                            {message.proposal.allocations ? (
                              <div className={isPortfolioShowcase ? "mt-2 space-y-1.5" : "mt-3 space-y-2"}>
                                <div
                                  className={`flex flex-col items-center rounded-[18px] border border-white/[0.06] bg-[#131722] ${
                                    isPortfolioProposal
                                      ? isPortfolioShowcase
                                        ? "px-2 py-1.5"
                                        : "px-2.5 py-2.5"
                                      : "px-3 py-3"
                                  }`}
                                >
                                  <div
                                    className={`relative ${
                                      isPortfolioProposal
                                        ? isPortfolioShowcase
                                          ? "h-[104px] w-[104px]"
                                          : "h-[128px] w-[128px]"
                                        : "h-[146px] w-[146px]"
                                    }`}
                                  >
                                    <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90" aria-hidden="true">
                                      <circle cx="70" cy="70" r="52" fill="none" stroke="#202637" strokeWidth="12" />
                                      {getAllocationRingSegments(message.proposal.allocations).map((segment) => (
                                        <circle
                                          key={segment.asset}
                                          cx="70"
                                          cy="70"
                                          r="52"
                                          fill="none"
                                          stroke={segment.color}
                                          strokeWidth="12"
                                          strokeLinecap="butt"
                                          strokeDasharray={`${segment.length} ${2 * Math.PI * 52 - segment.length}`}
                                          strokeDashoffset={-segment.offset}
                                        />
                                      ))}
                                      <circle cx="70" cy="70" r="40" fill="#0D1321" stroke="#2A3348" strokeWidth="2" />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                      <p
                                        className={`uppercase tracking-[0.14em] text-[rgba(255,255,255,0.42)] ${
                                          isPortfolioProposal ? (isPortfolioShowcase ? "text-[5px]" : "text-[6px]") : "text-[7px]"
                                        }`}
                                      >
                                        Mix
                                      </p>
                                      <p className={`mt-0.5 font-semibold leading-none text-white ${isPortfolioShowcase ? "text-[18px]" : "text-[24px]"}`}>
                                        100%
                                      </p>
                                      <p className={`mt-0.5 text-[#9FDCFF] ${isPortfolioShowcase ? "text-[8px]" : "text-[11px]"}`}>
                                        {message.proposal.allocations.length} assets
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {getAllocationRingSegments(message.proposal.allocations).map((allocation) => (
                                  <div
                                    key={allocation.asset}
                                    className={`rounded-xl border border-white/[0.06] bg-[#131722] ${
                                      isPortfolioProposal
                                        ? isPortfolioShowcase
                                          ? "px-1.5 py-1.5"
                                          : "px-2 py-2"
                                        : "px-2.5 py-2.5"
                                    }`}
                                  >
                                    <div className={isPortfolioShowcase ? "flex items-start gap-2" : "flex items-start gap-2.5"}>
                                      <span
                                        className={`mt-1 shrink-0 rounded-full ${
                                          isPortfolioProposal
                                            ? isPortfolioShowcase
                                              ? "h-1.5 w-1.5"
                                              : "h-2 w-2"
                                            : "h-2.5 w-2.5"
                                        }`}
                                        style={{ backgroundColor: allocation.color }}
                                        aria-hidden="true"
                                      />
                                      <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-3">
                                          <p
                                            className={`font-medium text-white ${
                                              isPortfolioProposal
                                                ? isPortfolioShowcase
                                                  ? "text-[10.5px]"
                                                  : "text-[12px]"
                                                : "text-[13px]"
                                            }`}
                                          >
                                            {allocation.asset}
                                          </p>
                                          <p
                                            className={`font-medium text-[#9FDCFF] ${
                                              isPortfolioProposal
                                                ? isPortfolioShowcase
                                                  ? "text-[9.5px]"
                                                  : "text-[11px]"
                                                : "text-[12px]"
                                            }`}
                                          >
                                            {allocation.weight}
                                          </p>
                                        </div>
                                        <p
                                          className={`mt-1 leading-relaxed text-[rgba(255,255,255,0.68)] ${
                                            isPortfolioProposal
                                              ? isPortfolioShowcase
                                                ? "text-[8.5px]"
                                                : "text-[10px]"
                                              : "text-[11px]"
                                          }`}
                                        >
                                          {allocation.reason}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ) : null}
                          </div>
                          <div className="bg-[#171B27]">
                            <button
                              type="button"
                              className={`tap flex w-full items-center justify-center px-4 font-medium ${
                                isPortfolioShowcase && isPortfolioProposal ? "py-2 text-[12px]" : "py-2.5 text-[14px]"
                              } ${
                                message.proposal.side === "buy"
                                  ? "text-[#39C38A]"
                                  : message.proposal.side === "sell"
                                    ? "text-[#FF5D72]"
                                    : "text-[#6DD3FF]"
                              }`}
                            >
                              {message.proposal.primaryAction}
                            </button>
                            <button
                              type="button"
                              className={`tap flex w-full items-center justify-center border-t border-white/[0.06] px-4 font-medium text-[#A2A7FF] ${
                                isPortfolioShowcase && isPortfolioProposal ? "py-2 text-[12px]" : "py-2.5 text-[14px]"
                              }`}
                            >
                              {message.proposal.secondaryAction}
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`rounded-[18px] border ${
                            isPortfolioShowcase ? "px-2 py-1.5" : "px-2.5 py-2"
                          } ${isUser ? activeTheme.userBubble : activeTheme.assistantBubble}`}
                        >
                          {message.text ? (
                            <p className={isPortfolioShowcase ? "text-[10.5px] leading-relaxed" : "text-[12px] leading-relaxed min-[360px]:text-[12.5px]"}>
                              {message.text}
                              {hasSources ? (
                                <span className={isPortfolioShowcase ? "ml-1 inline-flex items-center gap-1 align-middle" : "ml-1.5 inline-flex items-center gap-1 align-middle"}>
                                  {message.sources?.map((source, index) => (
                                    <button
                                      key={source}
                                      type="button"
                                      onClick={() => toggleSources(message.id)}
                                      className={citationBadgeClassName}
                                      aria-label={`Show source ${index + 1}`}
                                    >
                                      {index + 1}
                                    </button>
                                  ))}
                                </span>
                              ) : null}
                            </p>
                          ) : null}
                          {message.lines ? (
                            <div className="mt-1.5 grid gap-1.5">
                              {message.lines.map((line) => (
                                <div key={line} className={`rounded-md border px-2 py-1 text-[11px] ${activeTheme.detailRow}`}>
                                  {line}
                                </div>
                              ))}
                            </div>
                          ) : null}
                          {hasSources ? (
                            <>
                              <button
                                type="button"
                                onClick={() => toggleSources(message.id)}
                                className={sourcesToggleClassName}
                                aria-expanded={isSourcesOpen}
                              >
                                <span className="flex -space-x-1">
                                  {message.sources?.slice(0, 3).map((source, index) => (
                                      <span
                                        key={source}
                                        className={isPortfolioShowcase
                                          ? "flex h-3 w-3 items-center justify-center rounded-full border border-[#5F63B6]/60 bg-[#3A4176] text-[6px] font-semibold text-white"
                                          : "flex h-4 w-4 items-center justify-center rounded-full border border-[#5F63B6]/60 bg-[#3A4176] text-[7px] font-semibold text-white"}
                                      aria-hidden="true"
                                    >
                                      {index + 1}
                                    </span>
                                  ))}
                                </span>
                                <span>Sources</span>
                              </button>
                              {isSourcesOpen ? (
                                <div className={sourcesPanelClassName}>
                                  {message.sources?.map((source, index) => (
                                    <div key={source} className={sourcesItemClassName}>
                                      <span className={citationBadgeClassName}>{index + 1}</span>
                                      <span>{source}</span>
                                    </div>
                                  ))}
                                </div>
                              ) : null}
                            </>
                          ) : null}
                        </div>
                      )}
                      <p
                        className={`px-1 ${isUser ? activeTheme.userMeta : activeTheme.assistantMeta} ${
                          isPortfolioShowcase ? "mt-0.5 text-[8px]" : "mt-1 text-[10px]"
                        }`}
                      >
                        {speaker}
                        {message.meta ? ` | ${message.meta}` : ""}
                        {` | ${message.time}`}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {!showSuggestedQuestions && !hasProposal ? (
            <div className={`mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] ${activeTheme.passiveNote}`}>
              <ChartLine className="h-3.5 w-3.5" />
              Summary only, no order confirmation in this situation.
            </div>
          ) : null}
        </section>

        <button
          type="button"
          onClick={cycleSituation}
          className="mt-4 flex w-full items-center justify-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[rgba(255,255,255,0.48)]"
          aria-label="Switch INEX demo situation"
        >
          <CircleDollarSign className="h-3.5 w-3.5" />
          Switch situation
        </button>
        <div className="sticky bottom-0 z-30 mt-3 pb-[calc(env(safe-area-inset-bottom)+0.25rem)]">
          <section className="mx-auto w-full max-w-[420px]">
            <div className="rounded-[22px] border border-white/[0.06] bg-[#131722] p-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
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
                    ref={composerInputRef}
                    value={draft}
                    onFocus={() => {
                      requestAnimationFrame(() => {
                        composerInputRef.current?.scrollIntoView({ block: "nearest" });
                      });
                    }}
                    onChange={(event) => {
                      const nextDraft = event.target.value;
                      setDraft(nextDraft);
                      if (!hasStartedTyping && nextDraft.length > 0) {
                        setHasStartedTyping(true);
                      }
                    }}
                    placeholder={active.composerPlaceholder}
                    className="w-full bg-transparent text-[13px] text-[rgba(255,255,255,0.9)] outline-none placeholder:text-[rgba(255,255,255,0.5)]"
                    aria-label="Message INEX"
                  />
                </div>
                <button
                  type="button"
                  onClick={!hasDraft ? cycleSituation : undefined}
                  className="tap flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5F63B6] bg-[#2F286A] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]"
                  aria-label={hasDraft ? "Send message" : "Switch INEX demo situation"}
                >
                  {hasDraft ? <SendHorizontal className="h-4.5 w-4.5" /> : <Mic className="h-4.5 w-4.5" />}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
