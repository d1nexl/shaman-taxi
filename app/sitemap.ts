import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "cs" ? 1 : 0.9,
    alternates: {
      languages: {
        cs: `${site.url}/cs`,
        en: `${site.url}/en`,
        ru: `${site.url}/ru`,
      },
    },
  }));
}
