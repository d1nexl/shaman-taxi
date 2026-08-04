export const locales = ["cs", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "cs";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeNames: Record<Locale, string> = {
  cs: "Čeština",
  en: "English",
  ru: "Русский",
};

export const localeShort: Record<Locale, string> = {
  cs: "CS",
  en: "EN",
  ru: "RU",
};
