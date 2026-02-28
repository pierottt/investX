import "./globals.css";
import type { Metadata, Viewport } from "next";
import React from "react";
import AppShell from "@/components/shell/AppShell";
import ServiceWorkerRegistration from "@/components/pwa/ServiceWorkerRegistration";

export const metadata: Metadata = {
  applicationName: "Invest-X",
  title: {
    default: "Invest-X",
    template: "%s | Invest-X",
  },
  description: "Track markets, manage your watchlist, and monitor your portfolio in an installable Invest-X app.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Invest-X",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192", sizes: "192x192", type: "image/png" },
      { url: "/icon-512", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d14",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ServiceWorkerRegistration />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
