export const LOCALES = ['en', 'hi', 'es', 'ru', 'fr', 'de', 'it', 'pt', 'bn', 'ja', 'ko', 'ms', 'pl', 'id', 'ar', 'bg', 'tr', 'sv'] as const;
export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';
export const RTL_LOCALES = ['ar'];

export function getLocaleFromParams(params: Record<string, string | undefined>): Locale {
  const locale = params.locale;
  if (locale && LOCALES.includes(locale as Locale)) {
    return locale as Locale;
  }
  return DEFAULT_LOCALE;
}

export function getLocalizedUrl(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) {
    return cleanPath;
  }
  return `/${locale}${cleanPath}`;
}

export function getStaticPathsForLocales(): Array<{ params: { locale: string } }> {
  return LOCALES.filter(l => l !== DEFAULT_LOCALE).map(locale => ({
    params: { locale }
  }));
}

export function isRTL(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale as string);
}

export function getHtmlDir(locale: Locale): "rtl" | "ltr" {
  return isRTL(locale) ? "rtl" : "ltr";
}
