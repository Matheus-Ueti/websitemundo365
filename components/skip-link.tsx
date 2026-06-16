'use client'

import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { SECTION_IDS, sectionHref } from '@/lib/constants/sections'

export function SkipLink() {
  const t = useTranslations('common')

  return (
    <Link
      href={sectionHref(SECTION_IDS.main)}
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-gray-900 focus:shadow-lg"
    >
      {t('skipToContent')}
    </Link>
  )
}
