import { ImageResponse } from "next/og";
import { AppIcon } from "@/lib/pwa/icon";

export const runtime = "nodejs";

export async function GET() {
  const size = 180;

  return new ImageResponse(<AppIcon size={size} />, {
    width: size,
    height: size,
  });
}
