import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import AppShell from "@/components/shell/AppShell";

export const metadata: Metadata = {
  title: "Invest-X",
  description: "Dark neon fintech UI clone scaffold in Next.js"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
