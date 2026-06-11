import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const response = NextResponse.next()
  const locale = request.nextUrl.pathname.startsWith('/en') ? 'en' : 'nl'
  response.headers.set('x-locale', locale)
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
