import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, Plus_Jakarta_Sans, Fredoka } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://ayunitamaharani.vercel.app"),
  title: "Ayunita Maharani — Statistics & Data Science",
  description:
    "Statistics undergraduate at Universitas Diponegoro. Python, R and SQL — spatial machine learning, forecasting, and dashboards that make a decision obvious.",
  openGraph: {
    title: "Ayunita Maharani — Statistics & Data Science",
    description: "Spatial machine learning, forecasting and dashboards in Python, R and SQL.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[bricolage.variable, instrument.variable, jakarta.variable, fredoka.variable].join(" ")}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
