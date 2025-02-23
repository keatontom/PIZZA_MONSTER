import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Instagram } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pizza Monster",
  description: "The coolest pizza place in town",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-aktiv antialiased">
        <div className="min-h-screen bg-background">
          <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm">
            <nav className="px-4 h-14 flex items-center justify-center relative">
              <div className="absolute left-4 flex items-center space-x-4 sm:space-x-6 text-base font-bold tracking-normal">
                <Link href="/hours" className="text-white hover:text-primary transition-colors hover:scale-105 transform">
                  HOURS
                </Link>
                <Link href="/story" className="text-white hover:text-primary transition-colors hover:scale-105 transform">
                  OUR STORY
                </Link>
                <Link
                  href="/order"
                  className="bg-primary text-white px-4 sm:px-6 py-2 rounded-full hover:scale-105 transform transition-transform"
                >
                  ORDER NOW
                </Link>
              </div>
              <Link 
                href="/"
                className="text-white hover:text-primary transition-colors text-sm font-bold tracking-wider"
              >
                PIZZA MONSTER
              </Link>
              <div className="absolute right-4">
                <Link
                  href="https://instagram.com"
                  className="text-white hover:text-primary transition-colors hover:scale-110 transform"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </nav>
          </header>
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  )
}

