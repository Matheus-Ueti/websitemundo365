import type { Metadata } from 'next'
import { Geist, Space_Grotesk } from 'next/font/google'
import localFont from 'next/font/local'
import { getLocale } from 'next-intl/server'
import { siteConfig } from '@/lib/site'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

/**
 * Selawik: fonte open-source da Microsoft, metricamente compatível com a
 * Segoe UI, usada nos selos oficiais "Microsoft Solutions Partner".
 * Mantém a tipografia da marca idêntica em qualquer sistema operacional.
 */
const selawik = localFont({
  src: [
    { path: './fonts/selawik/selawksl.woff2', weight: '300', style: 'normal' },
    { path: './fonts/selawik/selawk.woff2', weight: '400', style: 'normal' },
    { path: './fonts/selawik/selawksb.woff2', weight: '600', style: 'normal' },
    { path: './fonts/selawik/selawkb.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-selawik',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()

  return (
    <html
      lang={locale}
      className={`${geist.variable} ${spaceGrotesk.variable} ${selawik.variable}`}
    >
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
