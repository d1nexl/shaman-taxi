import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { site } from "@/lib/site";

const display = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const ogLocale: Record<Locale, string> = {
  cs: "cs_CZ",
  en: "en_US",
  ru: "ru_RU",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "cs";
  const dict = getDictionary(locale);

  const ogImage = {
    url: "/gallery/photo-10.jpeg",
    width: 2000,
    height: 1125,
    alt: dict.meta.ogAlt,
  };

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: site.name,
    keywords: dict.meta.keywords,
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    category: "Transportation",
    alternates: {
      canonical: `/${locale}`,
      languages: {
        cs: "/cs",
        en: "/en",
        ru: "/ru",
        "x-default": "/cs",
      },
    },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      alternateLocale: Object.values(ogLocale).filter((l) => l !== ogLocale[locale]),
      url: `${site.url}/${locale}`,
      siteName: site.name,
      title: dict.meta.title,
      description: dict.meta.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "cs";
  const dict = getDictionary(locale);

  const allOffers = [...dict.services.items, ...dict.extraServices.items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: `${site.name} — ${dict.brand.tagline}`,
    description: dict.meta.description,
    telephone: site.phoneDisplay,
    url: `${site.url}/${locale}`,
    image: `${site.url}/gallery/photo-10.jpeg`,
    priceRange: "od 799 Kč / hod",
    currenciesAccepted: "CZK",
    paymentAccepted: "Cash, Bank transfer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Praha",
      addressRegion: "Praha",
      addressCountry: "CZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.0755,
      longitude: 14.4378,
    },
    areaServed: [
      { "@type": "Country", name: "Czech Republic" },
      ...dict.coverage.cities.map((city) => ({ "@type": "City", name: city })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [site.whatsapp, site.telegram],
    knowsLanguage: ["cs", "en", "ru"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: dict.services.title,
      itemListElement: allOffers.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: "description" in s ? s.description : s.text,
        },
      })),
    },
  };

  return (
    <html lang={locale} className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <a href="#main" className="skip-link">
          {locale === "cs" ? "Přeskočit na obsah" : "Skip to content"}
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
