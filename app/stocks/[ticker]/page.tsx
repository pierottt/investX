import Link from "next/link";
import { ChevronLeft, ChevronRight, Heart, Info, Search } from "lucide-react";

const chartPoints = [
  198, 186, 192, 190, 194, 188, 176, 180, 174, 168, 156, 142, 160, 158, 152, 147, 151, 149, 151,
];

function buildLine(points: number[], width: number, height: number) {
  const top = Math.max(...points);
  const bottom = Math.min(...points);
  const range = Math.max(1, top - bottom);
  const step = points.length > 1 ? width / (points.length - 1) : 0;

  return points
    .map((point, index) => {
      const x = index * step;
      const y = height - ((point - bottom) / range) * height;
      return `${x},${y}`;
    })
    .join(" ");
}

const chartLine = buildLine(chartPoints, 620, 210);

export default async function StockDetailPage({ params }: { params: Promise<{ ticker: string }> }) {
  const { ticker } = await params;
  const symbol = ticker.toUpperCase();

  return (
    <div className="page-scroll no-scrollbar bg-[radial-gradient(circle_at_52%_-20%,rgba(88,95,212,0.17)_0%,#070a12_34%,#05070d_100%)]">
      <div className="page-x pb-36 pt-safe-top">
        <header className="flex items-center justify-between">
          <Link href="/markets" className="tap flex h-9 w-9 items-center justify-center rounded-full text-white/72">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div className="flex items-center gap-1.5 text-white/72">
            <button type="button" className="tap flex h-9 w-9 items-center justify-center rounded-full">
              <Search className="h-5 w-5" />
            </button>
            <button type="button" className="tap flex h-9 w-9 items-center justify-center rounded-full">
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </header>

        <section className="mt-2.5">
          <div className="flex items-end gap-2">
            <h1 className="text-[24px] font-semibold leading-none tracking-tight text-white/95 min-[360px]:text-[27px]">{symbol}</h1>
            <span className="mb-0.5 text-[12px] text-white/62 min-[360px]:text-[13px]">Oracle Corp</span>
          </div>

          <div className="mt-1.5 flex items-center justify-between text-[11px] text-white/48 min-[360px]:text-[12px]">
            <div className="inline-flex items-center gap-1.5 rounded-md border border-[#73452f] bg-[#2d1d17]/80 px-2 py-0.5 text-[#be794f]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c2784f]" />
              Pre-Market
            </div>
            <span className="text-white/54">NYSE</span>
          </div>
        </section>

        <section className="mt-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-[34px] font-semibold leading-none tracking-tight text-[#f16767] min-[360px]:text-[36px]">151.56</p>
            <p className="mt-1 text-[14px] text-[#e46b6b] min-[360px]:text-[15px]">-1.40 -0.92%</p>
            <p className="mt-0.5 text-[12px] text-white/48 min-[360px]:text-[13px]">Pre-Market</p>
            <p className="mt-0.5 text-[11px] text-[#cb8b49] min-[360px]:text-[12px]">18:01:34 Delayed</p>
          </div>

          <div className="w-[42%] max-w-[154px]">
            <p className="text-right text-[12px] text-white/56">Day&apos;s Range</p>
            <div className="mt-1.5 h-1.5 rounded-full bg-white/15">
              <div className="h-full w-[56%] rounded-full bg-white/55" />
            </div>
            <div className="mt-1.5 flex items-center justify-between text-[12px] text-white/58">
              <span>146.44</span>
              <span>152.00</span>
            </div>
          </div>
        </section>

        <section className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-[12px] text-white/55 min-[360px]:text-[13px]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>
              Volume <span className="text-white/84">5.59M</span>
            </span>
            <span>
              Value <span className="text-white/84">840.99M</span>
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <span>
              Mkt Cap <span className="text-white/84">425.43B</span>
            </span>
            <button type="button" className="tap flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.08] text-[11px]">⌄</button>
          </div>
        </section>

        <section className="no-scrollbar mt-3 overflow-x-auto">
          <div className="flex w-max min-w-full items-center gap-2 pr-2">
            {[
              { label: "Overview", active: true },
              { label: "INVX", active: false },
              { label: "News", active: false },
            ].map((tab) => (
              <button
                key={tab.label}
                type="button"
                className={`tap rounded-full border px-3.5 py-1 text-[12px] min-[360px]:px-4 min-[360px]:text-[13px] ${
                  tab.active
                    ? "border-[#6368d4]/62 bg-[#5961d8] font-semibold text-white"
                    : "border-white/[0.09] bg-white/[0.01] text-white/52"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        <p className="mt-2.5 text-[12px] text-[#6b72e6] min-[360px]:text-[13px]">151.56 - 1.40 (-0.92%)</p>

        <section className="mt-1.5 rounded-2xl border border-white/[0.06] bg-[#0e111b]/70 p-1.5 min-[360px]:p-2">
          <svg viewBox="0 0 620 220" className="h-[208px] w-full min-[360px]:h-[226px]" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="price-line" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#5f68ff" stopOpacity="1" />
                <stop offset="100%" stopColor="#5f68ff" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="price-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#5f68ff" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#5f68ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline points={`${chartLine} 620,220 0,220`} fill="url(#price-fill)" stroke="none" />
            <polyline points={chartLine} fill="none" stroke="url(#price-line)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </section>

        <section className="mt-2.5 flex items-center justify-between gap-2 text-[11px] text-white/48 min-[360px]:text-[12px]">
          <div className="flex items-center gap-3 min-[360px]:gap-4">
            {[
              { label: "1D", active: false },
              { label: "5D", active: false },
              { label: "1M", active: false },
              { label: "3M", active: true },
              { label: "6M", active: false },
              { label: "1Y", active: false },
              { label: "5Y", active: false },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                className={`tap ${item.active ? "rounded-full bg-[#4c56d5]/52 px-2 py-0.5 text-white" : "text-white/54"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-white/62">
            <button type="button" className="tap">◫◫</button>
            <button type="button" className="tap">⌂</button>
          </div>
        </section>

        <section className="mt-5">
          <h2 className="flex items-center gap-1.5 text-[20px] font-semibold tracking-tight text-white/93 min-[360px]:text-[22px]">
            Order Book <Info className="h-4 w-4 text-white/48" />
          </h2>
          <div className="mt-1.5 flex items-center text-[12px] text-[#5dd3a8] min-[360px]:text-[13px]">
            <span className="w-1/2">50.00%</span>
            <span className="w-1/2 text-right text-[#ea6a72]">50.00%</span>
          </div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
            <div className="h-full w-1/2 bg-[#5cb99d]" />
          </div>
          <div className="mt-1 grid grid-cols-5 rounded-md border border-white/[0.08] bg-white/[0.02] px-2 py-1 text-[11px] text-white/62 min-[360px]:text-[12px]">
            <span className="text-[#5dd3a8]">Bid</span>
            <span className="text-center">150.95</span>
            <span className="text-center">40</span>
            <span className="text-center text-[#ea6a72]">40</span>
            <span className="text-right">151.01</span>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-white/[0.07] bg-[#101522]/80 p-3">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-[20px] font-semibold text-white/92 min-[360px]:text-[22px]">Company Profile</h3>
            <button type="button" className="tap flex h-6.5 w-6.5 items-center justify-center rounded-full bg-white/[0.08] text-white/55">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <p className="text-[12px] leading-relaxed text-white/68 min-[360px]:text-[13px]">
            Oracle Corporation offers integrated suites of applications plus secure, autonomous infrastructure in the Oracle Cloud.
            The Company operates through three segments and serves enterprise clients globally.
          </p>
          <div className="mt-2 flex items-center justify-between text-[11px] text-white/45 min-[360px]:text-[12px]">
            <span>From LSEG</span>
            <button type="button" className="tap text-[#6e82ff]">Read more</button>
          </div>
        </section>

        <section className="mt-5 rounded-2xl border border-white/[0.07] bg-[#101522]/80 p-3">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-[20px] font-semibold text-white/92 min-[360px]:text-[22px]">Analyst Rating</h3>
            <button type="button" className="tap flex h-6.5 w-6.5 items-center justify-center rounded-full bg-white/[0.08] text-white/55">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-[96px_1fr] gap-2.5 min-[360px]:grid-cols-[108px_1fr]">
            <div className="rounded-xl border border-[#5cd8b4]/35 bg-[#153129]/75 p-2 text-center">
              <p className="text-[11px] text-[#9de8cf] min-[360px]:text-[12px]">Target</p>
              <p className="mt-1 text-[20px] font-semibold text-white/94 min-[360px]:text-[22px]">289.60</p>
              <p className="text-[11px] text-[#89d9bd] min-[360px]:text-[12px]">91.08%</p>
            </div>

            <div>
              <p className="text-[13px] text-white/72 min-[360px]:text-[14px]">Consensus</p>
              <p className="text-[24px] font-semibold leading-none text-[#67e3b9] min-[360px]:text-[26px]">BUY</p>
              <p className="text-[11px] text-white/54">Based on 44 Analyst Ratings</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.1]">
                <div className="h-full w-[74%] bg-[#5cd8b4]" />
              </div>
              <div className="mt-1 flex items-center justify-between text-[11px] text-white/48 min-[360px]:text-[12px]">
                <span>32 Buy</span>
                <span>10 Hold</span>
                <span>2 Sell</span>
              </div>
            </div>
          </div>

          <div className="mt-3 border-t border-white/[0.06] pt-2.5">
            <div className="mb-1 flex items-center justify-between text-[10px] text-white/52 min-[360px]:text-[11px]">
              <span>Price Target Range</span>
              <span>Updated 6 Mar 2026</span>
            </div>
            <div className="grid grid-cols-3 text-[10px] text-white/44 min-[360px]:text-[11px]">
              <div>
                <p>HIGH</p>
                <p className="text-[16px] text-white/90 min-[360px]:text-[17px]">400.00</p>
              </div>
              <div className="text-center">
                <p>MED</p>
                <p className="text-[16px] text-white/90 min-[360px]:text-[17px]">290.00</p>
              </div>
              <div className="text-right">
                <p>LOW</p>
                <p className="text-[16px] text-white/90 min-[360px]:text-[17px]">155.00</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+0.625rem)] left-1/2 z-50 w-[calc(100%-1.125rem)] -translate-x-1/2" style={{ maxWidth: 388 }}>
        <div className="rounded-[1.5rem] border border-white/[0.08] bg-[#1a2028]/95 p-1.5 shadow-[0_16px_28px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <button type="button" className="tap flex-1 rounded-full bg-[#58b696] py-2.5 text-[18px] font-semibold text-white min-[360px]:py-3">
              Buy
            </button>
            <button type="button" className="tap flex h-11 w-11 flex-col items-center justify-center rounded-xl text-[9px] text-white/68 min-[360px]:h-12 min-[360px]:w-12 min-[360px]:text-[10px]">
              <span className="text-[15px] min-[360px]:text-[16px]">▣</span>
              DR Trade
            </button>
            <button type="button" className="tap flex h-11 w-11 flex-col items-center justify-center rounded-xl text-[9px] text-white/68 min-[360px]:h-12 min-[360px]:w-12 min-[360px]:text-[10px]">
              <span className="text-[15px] min-[360px]:text-[16px]">◉</span>
              Price Alert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
