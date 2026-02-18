import { Home, BarChart3, ArrowLeftRight, Heart, PieChart } from "lucide-react";

export const navItems = [
  { href: "/", label: "Home", Icon: Home },
  { href: "/markets", label: "Markets", Icon: BarChart3 },
  // Trade is handled as a floating center button
  { href: "/watchlist", label: "Watchlist", Icon: Heart },
  { href: "/portfolio", label: "Portfolio", Icon: PieChart },
];

export const tradeNav = {
  href: "/trade",
  label: "Trade",
  Icon: ArrowLeftRight,
};
