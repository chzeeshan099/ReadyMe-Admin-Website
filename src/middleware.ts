import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ✅ 1. blocked page ko bypass karo
  if (pathname.startsWith('/blocked')) {
    return NextResponse.next() 
  }

  // ✅ 2. next/static files bypass
  if (pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  const country = request.geo?.country
  const host = request.headers.get('host') || ''

  console.log('Visitor_Country', country) // Debugging log
  console.log('Visitor_Host', host)

  // const allowedCountries = ['US', 'CA', 'AU', 'NZ'] 

  // ✅ 3. Localhost/dev safety (VERY IMPORTANT)
  // if (!country) {
  //   return NextResponse.next()
  // }

  const blockedCountries = ['']

  // ❌ block logic
  //  if (blockedCountries.includes(country || '') || host.startsWith('localhost') || host.startsWith('127.0.0.1')) {
  //   return NextResponse.redirect(new URL('/auth/blocked', request.url))
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}