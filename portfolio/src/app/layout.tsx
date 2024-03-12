import type { Metadata } from "next";
import { Junge } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kristina Gracova",
  description: "Portfolio",
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
