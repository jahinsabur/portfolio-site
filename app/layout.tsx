import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Using system fonts for display until Clash Display is installed
// To install: Download from https://www.fontshare.com/fonts/clash-display
// Place ClashDisplay-Variable.woff2 in public/fonts/ and uncomment below

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Portfolio | Electronics & Electrical Engineer | Embedded Systems & IoT",
  description: "Professional portfolio of an Electronics & Electrical Engineer specializing in Embedded Systems, IoT, Sensors, Automation, Solar and EV projects. Founder of Sensoreact.",
  keywords: ["Embedded Systems", "IoT", "Electronics Engineer", "Automation", "Solar Energy", "EV Charging", "Sensors", "Raspberry Pi", "ESP32", "Sensoreact"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Electronics & Electrical Engineer Portfolio",
    description: "Embedded Systems | IoT | Automation | Solar & EV Projects",
    url: "https://portfolio.sensoreact.com",
    siteName: "Engineering Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
