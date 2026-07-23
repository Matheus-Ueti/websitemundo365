import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { NewsHeading } from '@/components/news/news-heading'
import { getMicrosoftNewsFeed } from '@/lib/microsoft-news-feed'
import type { Locale } from '@/types'

export async function MoreNews() {
  const t = await getTranslations('news.more')
  const locale = (await getLocale()) as Locale
  const articles = await getMicrosoftNewsFeed(locale, t('fallbackCategory'))

  if (articles.length === 0) return null

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <NewsHeading title={t('title')} subtitle={t('subtitle')} className="mb-12" />

        <ul>
          {articles.map((article, index) => (
            <li key={article.id} className={`py-8 ${index > 0 ? 'border-t border-gray-200' : ''}`}>
              <Link
                href={article.href ?? '#'}
                target="_blank"
                rel="noreferrer"
                className="group grid items-center gap-6 sm:grid-cols-[1fr_260px]"
              >
                <div className="flex flex-col justify-center">
                  <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-cyan-600">
                    {article.category}
                    <span className="h-1 w-1 rounded-full bg-cyan-400" aria-hidden />
                    <span className="text-gray-400">{article.date}</span>
                  </span>
                  <h3 className="mt-2 flex items-center gap-1.5 text-lg font-bold leading-snug text-gray-900 group-hover:text-cyan-700 sm:text-xl">
                    {article.title}
                    <ExternalLink
                      className="h-4 w-4 flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                      aria-hidden
                    />
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{article.excerpt}</p>
                </div>

                {article.image && (
                  <div className="relative order-first aspect-[16/10] overflow-hidden rounded-2xl sm:order-none">
                    <Image
                      src={article.image}
                      alt={article.imageAlt ?? article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 260px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
