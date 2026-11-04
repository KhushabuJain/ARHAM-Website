import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://arhamdesign.com"),

  title: {
    default: "ARHAM | Engineering & Construction",
    template: "%s | ARHAM",
  },

  description:
    "ARHAM provides integrated engineering solutions for industrial and commercial buildings, covering architectural design, structural engineering, HVAC, firefighting, electrical, plumbing, and construction execution.",

  keywords: [
    "ARHAM",
    "Engineering and Construction",
    "Industrial Building Construction",
    "Commercial Building Construction",
    "Architectural Design",
    "Structural Engineering",
    "HVAC Solutions",
    "Firefighting Systems",
    "Electrical Installations",
    "Plumbing and Drainage",
    "Turnkey Engineering Solutions",
  ],

  authors: [{ name: "ARHAM" }],
  creator: "ARHAM",
  publisher: "ARHAM",

  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/logo-icon-transparent.png",
    apple: "/logo-icon-transparent.png",
  },

  openGraph: {
    title: "ARHAM | Engineering & Construction",
    description:
      "Integrated engineering and construction solutions for industrial and commercial buildings.",
    url: "https://arhamdesign.com",
    siteName: "ARHAM",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ARHAM | Engineering & Construction",
    description:
      "Integrated engineering and construction solutions for industrial and commercial buildings.",
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
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#fafafc] text-slate-900 flex flex-col font-sans selection:bg-[#3154a5] selection:text-white antialiased">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
