import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { NewsHeading } from '@/components/news/news-heading'
import type { NewsArticle } from '@/types'

export async function MoreNews() {
  const t = await getTranslations('news.more')
  const articles = t.raw('items') as NewsArticle[]

  if (articles.length === 0) return null

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <NewsHeading title={t('title')} className="mb-12" />

        <ul>
          {articles.map((article, index) => (
            <li
              key={article.id}
              className={`grid gap-6 py-8 sm:grid-cols-[1fr_260px] ${
                index > 0 ? 'border-t border-gray-200' : ''
              }`}
            >
              <div className="flex flex-col justify-center">
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-cyan-600">
                  {article.category}
                  <span className="h-1 w-1 rounded-full bg-cyan-400" aria-hidden />
                  <span className="text-gray-400">{article.date}</span>
                </span>
                <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{article.excerpt}</p>
              </div>

              <div className="relative order-first aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-800 sm:order-none">
                {article.image ? (
                  <Image
                    src={article.image}
                    alt={article.imageAlt ?? article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 260px"
                    className="object-cover"
                  />
                ) : (
                  <span className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
