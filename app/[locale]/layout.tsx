import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server"
import { Analytics } from "@vercel/analytics/next"
import { SkipLink } from "@/components/skip-link"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { routing } from "@/i18n/routing"
import type { Locale, LocaleLayoutProps } from "@/types"
import { siteConfig } from "@/lib/site"

const openGraphLocale: Record<Locale, string> = {
  pt: "pt_BR",
  en: "en_US",
  es: "es_ES",
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    return {}
  }

  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("title"),
      template: `%s | ${siteConfig.name}`,
    },
    description: t("description"),
    openGraph: {
      type: "website",
      locale: openGraphLocale[locale as Locale],
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <SkipLink />
      {children}
      <WhatsAppFloat />
      {process.env.NODE_ENV === "production" && <Analytics />}
    </NextIntlClientProvider>
  )
}
