import "../core/ui/globals.scss";
import "../core/ui/tailwind.css";

import classNames from "classnames";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import BackgroundGradient from "@/component/background-gradient/BackgroundGradient";
import Footer from "@/component/footer/Footer";
import ThemeSwitch from "@/component/theme-switch/ThemeSwitch";
import { ActiveSectionContextProvider } from "@/core/context/active-section/ActiveSectionContext";
import ThemeContextProvider from "@/core/context/theme/ThemeContext";

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
          `relative bg-slate-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 
          dark:text-opacity-90 transition-colors duration-300`
        )}
      >
        <ThemeContextProvider>
          <BackgroundGradient />

          <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>

          <Toaster />

          <ThemeSwitch />

          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
