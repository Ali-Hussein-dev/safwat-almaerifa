import { Tajawal } from "next/font/google";
import "../styles/globals.css";
import * as React from "react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import NextTopLoader from "nextjs-toploader";

const fontFamily = Tajawal({
  subsets: ["arabic"],
  display: "swap",
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

const Footer = () => {
  return (
    <div
      className="sticky bottom-0 -z-10 mx-auto h-14 w-full border-t border-zinc-300 bg-zinc-700 px-2 py-2 text-zinc-100 flex-row-center"
      dir="ltr"
    >
      <div className="max-w-3xl">
        Made by{" "}
        <a href="https://ali-hussein.com" className="underline">
          A.H
        </a>
      </div>
    </div>
  );
};
// const Links = [{ name: "الرئيسية", href: "/" }];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={fontFamily.className}>
      <body className="scroll-smooth antialiased">
        <NextTopLoader color="#84cc16" showSpinner={false} speed={300} />
        <main className="z-10 mx-auto flex min-h-screen flex-col justify-between gap-4 bg-zinc-50 shadow-lg">
          <header className="h-12 w-full bg-zinc-100 shadow-lg ">
            <div className="mx-auto h-12 w-full max-w-3xl px-2 font-semibold text-zinc-700 flex-row-start">
              <Link href="/">
                <HiHome size="23" />
              </Link>
            </div>
          </header>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
