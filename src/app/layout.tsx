import { Tajawal } from "next/font/google";
import "../styles/globals.css";
import * as React from "react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import NextTopLoader from "nextjs-toploader";
import { Footer } from "@/components/Footer";

const fontFamily = Tajawal({
  subsets: ["arabic"],
  display: "auto",
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

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
        <main className="mx-auto flex min-h-screen flex-col justify-between gap-4 bg-zinc-50/30 shadow-lg">
          <header className="h-12 w-full bg-zinc-100 shadow-lg ">
            <div className="mx-auto h-12 w-full max-w-3xl px-2 font-semibold text-zinc-700 flex-row-start">
              <Link href="/">
                <HiHome size="23" />
              </Link>
            </div>
          </header>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
