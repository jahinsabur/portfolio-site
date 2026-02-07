import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
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
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
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
