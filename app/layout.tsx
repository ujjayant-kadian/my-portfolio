import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { Inter, Fira_Code } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Terminal Portfolio",
  description: "A terminal-themed portfolio website",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans bg-terminal-black text-terminal-green min-h-screen`}
      >
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}

