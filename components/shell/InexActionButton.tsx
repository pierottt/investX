import Image from "next/image";
import Link from "next/link";

interface InexActionButtonProps {
  className?: string;
  iconClassName?: string;
  imageClassName?: string;
  ariaLabel?: string;
}

export default function InexActionButton({
  className = "",
  iconClassName = "",
  imageClassName = "",
  ariaLabel = "Open INEX assistant",
}: InexActionButtonProps) {
  const resolvedIconClassName = iconClassName || imageClassName;

  return (
    <Link
      href="/inex"
      aria-label={ariaLabel}
      className={`tap focus-accent relative inline-flex h-9 w-9 items-center justify-center text-[#F5F7FA] transition-colors ${className}`}
    >
      <Image src="/inex/icon.svg" alt="" width={25} height={25} className={`relative h-7 w-7 ${resolvedIconClassName}`} />
      <span className="sr-only">INEX</span>
    </Link>
  );
}
