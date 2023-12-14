import { Tajawal, El_Messiri } from "next/font/google";
import "../styles/globals.css";
import * as React from "react";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { GoogleAnalytics } from "@/components/clients-imports";

// use for headings
const tajawal = Tajawal({
  subsets: ["arabic"],
  display: "auto",
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});

// use for body
const elMessiri = El_Messiri({
  subsets: ["arabic"],
  display: "auto",
  weight: ["400", "500", "600", "700"],
  variable: "--font-elMessiri",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${elMessiri.variable}`}
    >
      <body className="relative scroll-smooth antialiased">
        <React.Suspense fallback={<div>...</div>}>
          <NextTopLoader color="#84cc16" showSpinner={false} speed={300} />
          <main className="mx-auto flex min-h-screen flex-col justify-between gap-4 bg-zinc-50/30 shadow-lg">
            <header className="h-12 w-full bg-zinc-100 shadow-lg ">
              <div className="mx-auto h-12 w-full max-w-3xl px-2 font-semibold text-zinc-700 flex-row-start">
                <Link href="/">
                  <Image src="/logo.svg" width="130" height="18" alt="logo" />
                </Link>
              </div>
            </header>
            {children}
            <Footer />
          </main>
          <GoogleAnalytics trackPageViews strategy="lazyOnload" />
        </React.Suspense>
      </body>
    </html>
  );
}
