import { Tajawal } from "next/font/google";
import "../styles/globals.css";
import * as React from "react";

const fontFamily = Tajawal({
  subsets: ["arabic"],
  display: "swap",
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

const Footer = () => {
  return (
    <div
      className="mx-auto h-10 w-full border-t border-zinc-300 bg-zinc-100 px-2 py-2 flex-row-center"
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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={fontFamily.className}>
      <body className="scroll-smooth antialiased">
        <main className="mx-auto flex min-h-screen flex-col justify-between gap-2">
          <header className="h-12 w-full bg-zinc-100 shadow"></header>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
