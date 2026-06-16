import { defineRouting } from 'next-intl/routing'
import { LOCALES } from '@/types'

export const routing = defineRouting({
  locales: [...LOCALES],
  defaultLocale: 'pt',
  localePrefix: 'as-needed',
})
