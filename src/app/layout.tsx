import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../core/ui/globals.scss";
import "../core/ui/tailwind.css";
import classNames from "classnames";
import BackgroundGradient from "@/component/background-gradient/BackgroundGradient";
import { ActiveSectionContextProvider } from "@/core/context/active-section/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eren Yalçın | Portfolio",
  description: "NextJS portfolio website of Eren Yalçın",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} className={"!scroll-smooth"}>
      <body
        className={classNames(
          inter.className,
          "relative bg-slate-50 text-gray-950",
        )}
      >
        <BackgroundGradient />

        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </body>
    </html>
  );
}
