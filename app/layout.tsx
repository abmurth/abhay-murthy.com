import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import TabBar from "./components/TabBar";
import StatusBar from "./components/StatusBar";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Abhay Murthy",
    template: "%s — Abhay Murthy",
  },
  description:
    "Abhay Murthy — bioengineering + business at UC Berkeley M.E.T. Neurotech, product, and therapeutics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrains.variable} ${grotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <TabBar />
        <main className="site-main flex-1">{children}</main>
        <StatusBar />
      </body>
    </html>
  );
}
