import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "DR Detail | Professional Auto Detailing in Conshohocken, PA",
    template: "%s | DR Detail",
  },
  description:
    "Professional auto detailing services in Conshohocken, PA and Montgomery County. Auto detailing, paint correction, ceramic coating, car washing, and window tinting. Call (610) 941-9000.",
  keywords: [
    "auto detailing Conshohocken PA",
    "car detailing Montgomery County",
    "paint correction",
    "ceramic coating",
    "window tinting",
    "DR Detail",
    "Dr Detail PA",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-dark text-white`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
