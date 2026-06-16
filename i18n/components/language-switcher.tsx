'use client'

import { useLocale } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { LOCALE_LABELS, LOCALES, type Locale } from '@/types'
import { cn } from '@/lib/utils'

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const pathname = usePathname()

  return (
    <div
      className="flex items-center gap-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-0.5"
      role="group"
      aria-label="Idioma"
    >
      {LOCALES.map((code) => (
        <Link
          key={code}
          href={pathname}
          locale={code}
          className={cn(
            'min-w-[2.25rem] rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors text-center',
            locale === code
              ? 'bg-white text-purple-900 shadow-sm'
              : 'text-white/90 hover:bg-white/10'
          )}
          aria-current={locale === code ? 'true' : undefined}
        >
          {LOCALE_LABELS[code]}
        </Link>
      ))}
    </div>
  )
}
