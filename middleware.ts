import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "./lib/i18n/config";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next internals, API routes, files, and SEO route handlers.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) {
    return NextResponse.next();
  }

  // Pick a locale from the Accept-Language header, fall back to default.
  const accept = request.headers.get("accept-language")?.toLowerCase() ?? "";
  const preferred =
    locales.find((locale) => accept.startsWith(locale)) ?? defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
