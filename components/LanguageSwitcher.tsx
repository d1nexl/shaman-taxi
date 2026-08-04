"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeShort, type Locale } from "@/lib/i18n/config";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();

  function pathFor(locale: Locale) {
    const segments = pathname.split("/");
    if (segments.length > 1 && locales.includes(segments[1] as Locale)) {
      segments[1] = locale;
      return segments.join("/") || `/${locale}`;
    }
    return `/${locale}`;
  }

  function remember(locale: Locale) {
    document.cookie = `NEXT_LOCALE=${locale};path=/;max-age=31536000;samesite=lax`;
  }

  return (
    <div
      className="inline-flex items-center rounded-full border border-line bg-white/70 p-0.5 backdrop-blur"
      role="group"
      aria-label="Language"
    >
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={pathFor(locale)}
            onClick={() => remember(locale)}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 font-mono text-xs tracking-wide transition-colors duration-300 ${
              active ? "bg-ink text-paper" : "text-muted hover:text-ink"
            }`}
          >
            {localeShort[locale]}
          </Link>
        );
      })}
    </div>
  );
}
