// eslint-disable-next-line no-unused-vars
type UnderlineTabsOnChange = (item: string) => void;

export interface UnderlineTabsProps {
  items: string[];
  active: string;
  onChange: UnderlineTabsOnChange;
  className?: string;
  ariaLabel?: string;
}

export default function UnderlineTabs({
  items,
  active,
  onChange,
  className = "",
  ariaLabel = "Section tabs",
}: UnderlineTabsProps) {
  return (
    <div className={`no-scrollbar overflow-x-auto border-b border-white/10 ${className}`}>
      <div className="underline-tab-list" role="tablist" aria-label={ariaLabel}>
        {items.map((item) => {
          const isActive = item === active;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-current={isActive ? "page" : undefined}
              onClick={() => onChange(item)}
              className={`underline-tab-trigger focus-accent ${isActive ? "underline-tab-trigger-active" : ""}`}
            >
              {item}
              {isActive ? <span className="underline-tab-indicator" /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
