import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/logo.svg"
                    width={180}
                    height={180}
                    alt="METRONYX Logo"
                    className="rounded-lg"
                  />
                </Link>
              </div>
              <nav className="hidden md:flex gap-6">
                <Link
                  href="/"
                  className="text-sm font-medium hover:text-[#8B2703] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-medium hover:text-[#8B2703] transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium hover:text-[#8B2703] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium hover:text-[#8B2703] transition-colors"
                >
                  Contact
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <Link href="/contact">
                  <Button className="bg-[#8B2703] hover:bg-[#6d1e02] ml-1">
                    Get Started
                  </Button>
                </Link>
                <button className="md:hidden" aria-label="Toggle Menu">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-menu"
                  >
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="w-full border-t py-6 md:py-0 bg-[#FFCC66]">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24 px-4 md:px-6">
              <p className="text-center text-sm leading-loose text-[#8B2703] md:text-left">
                © {new Date().getFullYear()} METRONYX. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/services"
                  className="text-sm font-medium text-[#8B2703] hover:text-[#6d1e02] transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-[#8B2703] hover:text-[#6d1e02] transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-[#8B2703] hover:text-[#6d1e02] transition-colors"
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

import "./globals.css";
import Image from "next/image";
