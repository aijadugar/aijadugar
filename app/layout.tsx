import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "aijadugar - Master of Magic",
  description:
    "Experience the extraordinary with Ajadugar, a master magician bringing wonder and enchantment to every performance",
  icons: {
    icon: [
      {
        url: "/images/resume-spell.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/resume-spell.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/resume-spell.png",
        type: "/images/resume-spell.png",
      },
    ],
    apple: "/images/resume-spell.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
