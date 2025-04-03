import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "METRONYX - Industrial IT Solutions",
  description:
    "Transform your manufacturing operations with cutting-edge IT solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="w-full border-t py-6 md:py-0 bg-[#FFCC66]">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24 px-4 md:px-6">
              <p className="text-center text-sm leading-loose text-[#111111] md:text-left">
                © {new Date().getFullYear()} METRONYX. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/services"
                  className="text-sm font-medium hover:text-white p-3 rounded-md hover:shadow-md transition-colors hover:bg-[#111111]"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-white p-3 rounded-md hover:shadow-md transition-colors hover:bg-[#111111]"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium hover:text-white p-3 rounded-md hover:shadow-md transition-colors hover:bg-[#111111]"
                >
                  Contact
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
