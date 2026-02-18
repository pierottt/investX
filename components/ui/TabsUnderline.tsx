"use client";

export default function TabsUnderline({
  tabs,
  active,
  onChange,
}: {
  tabs: string[];
  active: string;
  onChange: (t: string) => void;
}) {
  return (
    <div className="px-5 pt-4">
      <div className="flex gap-4 text-sm">
        {tabs.map((t) => {
          const is = t === active;
          return (
            <button
              key={t}
              onClick={() => onChange(t)}
              className={`tap pb-2 ${is ? "text-white" : "text-white/55"}`}
            >
              <span className={`font-medium ${is ? "" : ""}`}>{t}</span>
              <div className={`mt-2 h-[2px] w-10 rounded-full ${is ? "bg-accent" : "bg-transparent"}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
