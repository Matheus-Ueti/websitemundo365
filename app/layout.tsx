import type { Metadata } from "next"
import { Geist, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SkipLink } from "@/components/skip-link"
import { WhatsAppFloat } from "@/components/whatsapp-float"
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
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <SkipLink />
        {children}
        <WhatsAppFloat />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
