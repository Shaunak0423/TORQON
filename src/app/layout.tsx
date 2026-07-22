import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// const siteUrl = "https://torqon.vercel.app"; // TODO: replace with your real domain once you have one
const siteUrl = "https://shaunak0423.github.io/TORQON";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TORQON — Goa's First Fitness Challenge Marathon",
    template: "%s · TORQON",
  },
  description:
    "Run. Conquer. Reset. Repeat. TORQON is Goa's first fitness challenge marathon — 3K, 5K and 10K routes with challenge checkpoints and an ice bath finish. By Godspeed x Cosmic Media.",
  keywords: [
    "TORQON",
    "Goa marathon",
    "Goa road marathon",
    "fitness challenge marathon Goa",
    "Godspeed Goa",
    "Cosmic Media Goa",
    "run Goa",
    "5K 10K Goa",
  ],
  authors: [{ name: "Godspeed x Cosmic Media" }],
  openGraph: {
    title: "TORQON — Goa's First Fitness Challenge Marathon",
    description:
      "Run. Conquer. Reset. Repeat. Challenge checkpoints, ice bath recovery, and Goa's most electric fitness community. 3K · 5K · 10K.",
    url: siteUrl,
    siteName: "TORQON",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TORQON — Goa Road Marathon",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TORQON — Goa's First Fitness Challenge Marathon",
    description: "Run. Conquer. Reset. Repeat. 3K · 5K · 10K in Goa.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/TabLogo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#e9d54a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-paper text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
