import { getTranslations } from 'next-intl/server'
import { NewsCard } from '@/components/news/news-card'
import type { NewsArticle } from '@/types'

export async function NewsFeatured() {
  const t = await getTranslations('news')
  const articles = t.raw('featured') as NewsArticle[]
  const [lead, ...rest] = articles

  if (!lead) return null

  return (
    <section className="bg-white pt-12 pb-16 sm:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="sr-only">{t('featuredTitle')}</h2>

        <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <NewsCard article={lead} variant="featured" />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {rest.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
