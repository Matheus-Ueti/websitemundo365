'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { FlagIcon } from '@/components/news/flag-icon'
import { NewsHeading } from '@/components/news/news-heading'
import { getArticlesByCountry, getNewsCountries } from '@/data/news'
import type { CountryCode, Locale } from '@/types'

export function MovementsSection() {
  const t = useTranslations('news')
  const locale = useLocale() as Locale
  // Só mostra abas de países que de fato têm notícia.
  const countries = getNewsCountries()
  const [activeId, setActiveId] = useState<CountryCode>(countries[0] ?? 'br')
  const articles = getArticlesByCountry(activeId, locale)

  if (countries.length === 0) return null

  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <NewsHeading
          title={t('movements.title')}
          subtitle={t('movements.subtitle')}
          className="mb-12"
        />

        <div
          role="tablist"
          aria-label={t('movements.title')}
          className="flex gap-6 overflow-x-auto pb-3 sm:justify-between sm:gap-4 sm:overflow-visible"
        >
          {countries.map((code) => {
            const isActive = code === activeId

            return (
              <button
                key={code}
                type="button"
                role="tab"
                id={`movement-tab-${code}`}
                aria-selected={isActive}
                aria-controls={`movement-panel-${code}`}
                onClick={() => setActiveId(code)}
                className="group flex flex-shrink-0 flex-col items-center gap-3 rounded-xl px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
              >
                <FlagIcon
                  code={code}
                  alt=""
                  className={`h-16 w-16 sm:h-[72px] sm:w-[72px] transition-all duration-300 ${
                    isActive
                      ? 'ring-2 ring-cyan-400 ring-offset-2 scale-105'
                      : 'opacity-60 group-hover:opacity-100 group-hover:scale-105'
                  }`}
                />
                <span
                  className={`text-base font-bold transition-colors [font-family:var(--font-space-grotesk)] ${
                    isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-600'
                  }`}
                >
                  {t(`countryLabels.${code}`)}
                </span>
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`movement-panel-${activeId}`}
          aria-labelledby={`movement-tab-${activeId}`}
          tabIndex={-1}
          className="mt-14"
        >
          <ul>
            {articles.map((article, index) => (
              <li
                key={article.slug}
                className={`py-8 ${index > 0 ? 'border-t border-gray-200' : ''}`}
              >
                <Link
                  href={`/noticias/${article.slug}`}
                  className="group grid gap-6 sm:grid-cols-[340px_1fr]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-800">
                    <Image
                      src={article.cover}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 340px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-cyan-600">
                      {article.category}
                      <span className="h-1 w-1 rounded-full bg-cyan-400" aria-hidden />
                      <span className="text-gray-400">{article.date}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-300" aria-hidden />
                      <span className="text-gray-400 normal-case tracking-normal">
                        {article.place}
                      </span>
                    </span>
                    <h4 className="mt-2 flex items-start gap-1.5 text-lg font-bold leading-snug text-gray-900 group-hover:text-cyan-700 sm:text-xl">
                      {article.title}
                      <ArrowUpRight
                        className="mt-1 h-4 w-4 flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden
                      />
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                      {article.dek}
                    </p>
                    <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-cyan-600">
                      {t('readMore')}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
