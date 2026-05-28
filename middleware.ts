import { intlMiddleware } from "./i18n/middleware"

export default intlMiddleware

export const config = {
  matcher: ["/", "/(pt|en|es)/:path*"],
}
