import TopBar from "@/components/shell/TopBar";
import CardGlass from "@/components/ui/CardGlass";

export default function TradePage() {
  return (
    <div>
      <TopBar />
      <div className="px-5 pt-6">
        <CardGlass className="p-5 text-white/70">
          Trade page placeholder (center floating CTA destination).
        </CardGlass>
      </div>
    </div>
  );
}
