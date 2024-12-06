import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "XSCAPE STUDIO CLONE",
  description: "Built by framer motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
