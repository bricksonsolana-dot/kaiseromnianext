import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['el', 'en']
const defaultLocale = 'el'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if pathname already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    // If using default locale prefix (/el/...), redirect to bare path for canonical URLs
    if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
      const newPath = pathname.replace(`/${defaultLocale}`, '') || '/'
      return NextResponse.redirect(new URL(newPath, request.url))
    }
    // /en/... passes through
    return
  }

  // No locale in path — rewrite to default locale internally
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.rewrite(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|api|favicon\\.ico|images|.*\\..*).*)'],
}
