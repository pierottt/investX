import { ImageResponse } from "next/og";
import { AppIcon } from "@/lib/pwa/icon";

export const runtime = "nodejs";

export async function GET() {
  const size = 512;

  return new ImageResponse(<AppIcon size={size} />, {
    width: size,
    height: size,
  });
}
