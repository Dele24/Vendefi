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
  themeColor: "#FFFFFF"
};

export const metadata: Metadata = {
  title: "VenDeFi | Technology That Improves Sales & Reduces Operating Costs",
  description:
    "VenDeFi builds custom software, AI agents, and intelligent business automation solutions that help companies capture more enquiries, eliminate manual work, and scale efficiently.",
  keywords: [
    "Software Engineering",
    "AI Agents",
    "Business Automation",
    "VenDeFi",
    "Conversational AI",
    "Sales Automation",
    "Custom Software Development",
    "Workflow Optimization"
  ],
  authors: [{ name: "VenDeFi" }],
  creator: "VenDeFi",
  publisher: "VenDeFi",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "VenDeFi | Technology That Improves Sales & Reduces Operating Costs",
    description:
      "VenDeFi builds custom software, AI agents, and intelligent business automation solutions that help companies capture more enquiries, eliminate manual work, and scale efficiently.",
    type: "website",
    locale: "en_US",
    siteName: "VenDeFi"
  },
  twitter: {
    card: "summary_large_image",
    title: "VenDeFi | Technology That Improves Sales & Reduces Operating Costs",
    description:
      "VenDeFi builds custom software, AI agents, and intelligent business automation solutions that help companies capture more enquiries, eliminate manual work, and scale efficiently."
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" id="top">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B132B] font-sans selection:bg-[#0B63F6] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
