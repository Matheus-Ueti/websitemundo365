import createMiddleware from 'next-intl/middleware'
import { routing } from './routing'

/** Handler de locale — importado por `middleware.ts` na raiz (Next exige `config` lá). */
export const intlMiddleware = createMiddleware(routing)
