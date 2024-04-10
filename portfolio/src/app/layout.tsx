import type { Metadata } from "next";
import "./globals.css";
import PageAnimatePresence from "./pageanimatepresence";

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
      <body><PageAnimatePresence>{children}</PageAnimatePresence></body>
    </html>
  );
}
