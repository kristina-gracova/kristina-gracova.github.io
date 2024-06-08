import type { Metadata } from "next";
import { Junge, Quattrocento_Sans } from "next/font/google";
import "./globals.css";
import { k_FONT_DEFAULT, k_PAGE_WIDTH } from "./globals";

export const metadata: Metadata = {
  title: "Kristina Gracova",
  description: "Portfolio",
};

const fontJunge = Junge({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-junge",
});

const fontQcs = Quattrocento_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-qcs",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div className={`${fontJunge.variable}
                         ${fontQcs.variable}
                         ${k_FONT_DEFAULT}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
