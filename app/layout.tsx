import type { Metadata } from "next"
import { Geist, Space_Grotesk } from "next/font/google"
import { getLocale } from "next-intl/server"
import { siteConfig } from "@/lib/site"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
}

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()

  return (
    <html lang={locale} className={`${geist.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
