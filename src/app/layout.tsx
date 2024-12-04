import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
