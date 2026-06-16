import { intlMiddleware } from "./i18n/middleware"

export default intlMiddleware

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
