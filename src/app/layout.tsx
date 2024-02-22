import { Tajawal, El_Messiri } from "next/font/google";
import "../styles/globals.css";
import * as React from "react";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { GoogleAnalytics } from "@/components/clients-imports";
import { type Metadata, type Viewport } from "next";

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
const content = {
  about: "عن المشروع",
  label: "نسخة تجرييبة",
};
const APP_NAME = "صفوة المعرفة";
const APP_DEFAULT_TITLE = "صفوة المعرفة";
const APP_TITLE_TEMPLATE = "%s";
const APP_DESCRIPTION = "علم عمل تغيير";

export const metadata: Metadata = {
  metadataBase: new URL("https://safwat-almaerifa.vercel.app"),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
};
export const viewport: Viewport = {
  themeColor: "#01CD85",
};

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
      <head>
        <meta name="theme-color" content="#f4f4f5" />
      </head>
      <body className="relative scroll-smooth bg-zinc-50 antialiased">
        <React.Suspense fallback={<div>...</div>}>
          <NextTopLoader color="#01CD85" showSpinner={false} speed={300} />
          <main className="noise mx-auto flex min-h-screen flex-col justify-between gap-4 shadow-lg">
            <header className="h-12 w-full bg-zinc-100 shadow-lg ">
              <div className="mx-auto h-12 w-full max-w-4xl px-2 font-semibold text-zinc-700 flex-row-between">
                <div className="gap-2 flex-row-start">
                  <Link href="/">
                    <Image
                      src="/logo_drop.svg"
                      width="140"
                      height="18"
                      alt="logo"
                    />
                  </Link>
                  <span className="font-elMessiri rounded-sm bg-orange-700 px-1 text-sm text-white">
                    {content.label}
                  </span>
                </div>
                <Link href="/about" className="mb-1 ">
                  {content.about}
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
