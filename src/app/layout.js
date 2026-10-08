
import "./globals.css";

import { Manrope, DM_Sans } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { site } from "@/config/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://example.com"),

  title: {
    default: `${site.name} | Freight Dispatch & Logistics`,
    template: `%s | ${site.shortName}`,
  },

  description: site.description,

  keywords: [
    "freight dispatch",
    "freight coordination",
    "transportation support",
    "dry van dispatch",
    "reefer dispatch",
    "flatbed coordination",
    "logistics services",
  ],

  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${dmSans.variable} antialiased`}
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
        }}
      >
        {/* NAVBAR — ALWAYS FIRST */}
        <Navbar />

        {/* CURRENT PAGE CONTENT */}
        <div className="min-h-[60vh]">
          {children}
        </div>

        {/* FOOTER — ALWAYS LAST */}
        <Footer />
      </body>
    </html>
  );
}
