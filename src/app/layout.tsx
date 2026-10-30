import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF9F6"
};

export const metadata: Metadata = {
  title: "VenDeFi | Software Engineering, AI & Automation",
  description:
    "VenDeFi builds custom software, AI-powered systems, and business automation solutions that help businesses operate smarter and grow.",
  keywords: [
    "Software Engineering",
    "AI Agents",
    "Business Automation",
    "Digital Product Engineering",
    "VenDeFi",
    "Custom Software Development",
    "Workflow Automation"
  ],
  authors: [{ name: "VenDeFi" }],
  creator: "VenDeFi",
  publisher: "VenDeFi",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "VenDeFi | Software Engineering, AI & Automation",
    description:
      "VenDeFi builds custom software, AI-powered systems, and business automation solutions that help businesses operate smarter and grow.",
    type: "website",
    locale: "en_US",
    siteName: "VenDeFi"
  },
  twitter: {
    card: "summary_large_image",
    title: "VenDeFi | Software Engineering, AI & Automation",
    description:
      "VenDeFi builds custom software, AI-powered systems, and business automation solutions that help businesses operate smarter and grow."
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FAF9F6] text-[#171717] font-sans selection:bg-[#FF6B35] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
