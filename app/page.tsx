import Image from "next/image";
import Link from "next/link";
import { BadgeAlert, Bitcoin, BriefcaseBusiness, Grid2x2, Mail, MessageSquareText, Search, Shuffle, Waves } from "lucide-react";
import InexActionButton from "@/components/shell/InexActionButton";

const marketStrip = [
  { label: "SET", change: "+1.65%" },
  { label: "S&P 500", change: "+0.88%" },
  { label: "Dow Jones", change: "+0.56%" },
];

const quickActions = [
  { label: "Exchange", Icon: Shuffle },
  { label: "Orders", Icon: MessageSquareText },
  { label: "Crypto", Icon: Bitcoin },
  { label: "Streaming", Icon: Waves },
  { label: "More", Icon: Grid2x2 },
];

const productTags = [
  "Stocks & ETFs",
  "Options",
  "Funds",
  "Intel Port",
  "Bonds",
  "Crypto",
  "FX & Currencies",
  "Structured Notes",
  "Private Funds",
  "Private Assets",
];

export default function HomePage() {
  return (
    <div className="page-scroll no-scrollbar bg-[radial-gradient(circle_at_50%_-18%,rgba(84,90,210,0.26)_0%,rgba(8,10,16,0.92)_36%,#05070d_100%)]">
      <div className="page-x pb-safe-nav pt-safe-top">
        <section className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#5f63b6]/50 bg-[#0f1120] text-[#9b9ff5]">
              <BriefcaseBusiness className="h-4.5 w-4.5" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-[16px] font-semibold tracking-tight text-white/90 min-[360px]:text-[17px]">คุณวรากร</div>
              <div className="mt-0.5 inline-flex rounded-md border border-[#4f45aa]/60 bg-[#2f286a]/45 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#a2a7ff]">
                Member
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button type="button" className="tap flex h-9 w-9 items-center justify-center rounded-full text-white/70 hover:text-white/90">
              <Search className="h-5 w-5" />
            </button>
            <button type="button" className="tap relative flex h-9 w-9 items-center justify-center rounded-full text-white/70 hover:text-white/90">
              <Mail className="h-5 w-5" />
              <span className="absolute right-1.5 top-2 h-1.5 w-1.5 rounded-full bg-[#ff5d72]" />
            </button>
            <InexActionButton />
          </div>
        </section>

        <section className="no-scrollbar mt-2.5 overflow-x-auto border-y border-white/[0.05] py-1.5">
          <div className="flex w-max min-w-full items-center gap-4 pr-2 text-[14px] font-medium min-[360px]:text-[15px]">
            {marketStrip.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 whitespace-nowrap">
                <span className="text-[13px] text-white/80 min-[360px]:text-[14px]">{item.label}</span>
                <span className="text-[13px] text-[#39c38a] min-[360px]:text-[14px]">{item.change}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-3.5 rounded-2xl border border-white/[0.06] bg-[#131722]/90 px-3 py-3 min-[360px]:px-3.5 min-[360px]:py-3.5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[13px] text-white/70 min-[360px]:text-[14px]">Total Portfolio</p>
              <p className="mt-1 text-[18px] font-medium tracking-[0.06em] text-white/42 min-[360px]:text-[19px]">********</p>
              <p className="text-[13px] text-white/42 min-[360px]:text-[14px]">(0.00%)</p>
            </div>
            <button
              type="button"
              className="tap min-h-9 rounded-xl border border-white/[0.32] bg-white/[0.03] px-3.5 py-2 text-[14px] font-medium text-white/85 min-[360px]:px-4 min-[360px]:py-2.5 min-[360px]:text-[15px]"
            >
              Deposit
            </button>
          </div>
        </section>

        {/* <section className="mt-3.5 flex items-start justify-between gap-2.5">
          <div className="min-w-0">
            <div className="flex items-start gap-1.5">
              <span className="pt-0.5 text-[18px] leading-none min-[360px]:text-[19px]">🎉</span>
              <h2 className="text-[18px] font-semibold leading-tight tracking-tight text-white/90 min-[360px]:text-[19px]">มีอะไรใหม่ๆ ในแอป ?!</h2>
            </div>
            <p className="mt-1 text-[13px] text-white/52 min-[360px]:text-[14px]">ลองมาแซวกันในโพรดัก</p>
          </div>
          <span className="shrink-0 pt-0.5 text-[15px] text-white/55 min-[360px]:text-[16px]">8/8</span>
        </section> */}

        <section className="mt-3 grid grid-cols-5 gap-1.5 min-[360px]:gap-2">
          {quickActions.map(({ label, Icon }) => (
            <button key={label} type="button" className="tap flex min-h-9 flex-col items-center gap-1.5 py-1">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3f4360] bg-[#0c111d] text-[#7d84aa]">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <span className="text-center text-[10px] leading-tight text-white/58 min-[360px]:text-[11px]">{label}</span>
            </button>
          ))}
        </section>

        <section className="mt-3.5 rounded-[18px] border border-[#9b7b42]/70 bg-[#1a1f32]/55 p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] min-[360px]:p-3.5">
          <Link href="/inex/brief" className="tap block">
            <article className="flex h-[100px] w-full items-center justify-between rounded-2xl border border-white/[0.06] bg-[#0d1220]/85 px-3.5 py-3 min-[360px]:px-4">
              <div className="min-w-0 flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#4f45aa]/55 bg-[#11142a]">
                  <Image src="/inex/icon.svg" alt="INEX logo" width={32} height={32} className="h-7 w-7" />
                </span>
                <div className="min-w-0">
                  <p className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#8f97c6] min-[360px]:text-[11px]">
                    <BadgeAlert className="h-3.5 w-3.5 text-[#6f73f8]" />
                    INEX
                  </p>
                  <h3 className="mt-1 truncate text-[20px] font-semibold leading-none tracking-tight text-white/94 min-[360px]:text-[22px]">Evening Brief</h3>
                </div>
              </div>
              <p className="shrink-0 text-[12px] font-medium text-[#a2a7ff] min-[360px]:text-[13px]">Open</p>
            </article>
          </Link>
        </section>

        <section className="mt-6 min-[360px]:mt-7">
          <h3 className="text-[22px] font-semibold tracking-tight text-white/90 min-[360px]:text-[24px]">Our Products</h3>
          <div className="mt-2.5 flex flex-wrap gap-1.5 min-[360px]:gap-2">
            {productTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/[0.07] bg-[#171b27]/85 px-2.5 py-1.5 text-[12px] leading-none text-white/72 min-[360px]:px-3 min-[360px]:text-[13px]"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
