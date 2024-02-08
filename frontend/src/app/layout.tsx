import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Patpug - Live in your Comfort Zone",
  description: "We are the bath linen/Towel experts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
