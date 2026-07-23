import { getLocale, getTranslations } from 'next-intl/server'
import { CompanyNewsCard } from '@/components/news/company-news-card'
import { getFeaturedArticles } from '@/data/news'
import type { Locale } from '@/types'

export async function NewsFeatured() {
  const t = await getTranslations('news')
  const locale = (await getLocale()) as Locale
  const articles = getFeaturedArticles(locale)
  const [lead, ...rest] = articles

  if (!lead) return null

  return (
    <section className="bg-white pt-12 pb-16 sm:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">{t('featuredTitle')}</h2>

        <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <CompanyNewsCard article={lead} variant="featured" priority />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {rest.map((article) => (
              <CompanyNewsCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
