'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { FlagIcon } from '@/components/news/flag-icon'
import { NewsHeading } from '@/components/news/news-heading'
import type { CountryCode, CountryMovement } from '@/types'

export function MovementsSection() {
  const t = useTranslations('news.movements')
  const countries = t.raw('countries') as CountryMovement[]
  const [activeId, setActiveId] = useState<CountryCode>(countries[0]?.id ?? 'br')
  const current = countries.find((country) => country.id === activeId) ?? countries[0]

  if (!current) return null

  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <NewsHeading title={t('title')} subtitle={t('subtitle')} className="mb-12" />

        <div
          role="tablist"
          aria-label={t('title')}
          className="flex gap-6 overflow-x-auto pb-3 sm:justify-between sm:gap-4 sm:overflow-visible"
        >
          {countries.map((country) => {
            const isActive = country.id === activeId

            return (
              <button
                key={country.id}
                type="button"
                role="tab"
                id={`movement-tab-${country.id}`}
                aria-selected={isActive}
                aria-controls={`movement-panel-${country.id}`}
                onClick={() => setActiveId(country.id)}
                className="group flex flex-shrink-0 flex-col items-center gap-3 rounded-xl px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
              >
                <FlagIcon
                  code={country.id}
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
                  {country.name}
                </span>
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`movement-panel-${current.id}`}
          aria-labelledby={`movement-tab-${current.id}`}
          tabIndex={-1}
          className="mt-14"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-500">
            {current.eyebrow}
          </p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {current.title}
          </h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-500">
            {current.description}
          </p>

          <ul className="mt-10">
            {current.entries.map((entry, index) => (
              <li
                key={entry.id}
                className={`grid gap-6 py-8 sm:grid-cols-[340px_1fr] ${
                  index > 0 ? 'border-t border-gray-200' : ''
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-800">
                  {entry.image ? (
                    <Image
                      src={entry.image}
                      alt={entry.imageAlt ?? entry.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 340px"
                      className="object-cover"
                    />
                  ) : (
                    <span className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900" />
                  )}
                </div>

                <div className="flex flex-col justify-center">
                  <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-cyan-600">
                    {entry.category}
                    <span className="h-1 w-1 rounded-full bg-cyan-400" aria-hidden />
                    <span className="text-gray-400">{entry.date}</span>
                  </span>
                  <h4 className="mt-2 text-lg font-bold leading-snug text-gray-900 sm:text-xl">
                    {entry.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{entry.excerpt}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
