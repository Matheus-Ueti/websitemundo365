import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { SECTION_IDS } from '@/lib/constants/sections'
import { Header } from '@/components/header'
import { NewsFeatured } from '@/components/news/news-featured'
import { MovementsSection } from '@/components/news/movements-section'
import { MoreNews } from '@/components/news/more-news'
import { Footer } from '@/components/footer'
import type { LocalePageProps } from '@/types'

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'news' })

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function NewsPage({ params }: LocalePageProps) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('news')

  return (
    <main id={SECTION_IDS.main} className="relative min-h-screen bg-white">
      <Header />

      {/* Faixa roxa atrás do header, que é absolute e depende de um fundo escuro. */}
      <div className="h-20 bg-gradient-to-r from-[#6b21a8] via-[#7c3aed] to-[#8b5cf6]" />

      <h1 className="sr-only">{t('pageTitle')}</h1>

      <NewsFeatured />
      <MovementsSection />
      <MoreNews />
      <Footer />
    </main>
  )
}
