import site from '../config/site.json';
import { DEFAULT_LOCALE, LOCALES, getLocalizedUrl, type Locale } from '../../theme/i18n/utils';

export interface AlternateLink {
  hreflang: string;
  href: string;
}

const siteBaseUrl = site.siteUrl.endsWith('/') ? site.siteUrl : `${site.siteUrl}/`;

const openGraphLocales: Record<Locale, string> = {
  en: 'en_US',
  hi: 'hi_IN',
  es: 'es_ES',
  ru: 'ru_RU',
  fr: 'fr_FR',
  de: 'de_DE',
  it: 'it_IT',
  pt: 'pt_PT',
  bn: 'bn_BD',
  ja: 'ja_JP',
  ko: 'ko_KR',
  ms: 'ms_MY',
  pl: 'pl_PL',
  id: 'id_ID',
  ar: 'ar_AR',
  bg: 'bg_BG',
  tr: 'tr_TR',
  sv: 'sv_SE',
};

export function absoluteUrl(pathOrUrl: string): string {
  return new URL(pathOrUrl, siteBaseUrl).toString();
}

export function getOpenGraphLocale(locale: string): string {
  return openGraphLocales[locale as Locale] || openGraphLocales[DEFAULT_LOCALE];
}

export function getHomeAlternateLinks(): AlternateLink[] {
  return getPageAlternateLinks('/');
}

export function getPageAlternateLinks(path: string): AlternateLink[] {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return [
    ...LOCALES.map((locale) => ({
      hreflang: locale,
      href: absoluteUrl(getLocalizedUrl(cleanPath, locale)),
    })),
    {
      hreflang: 'x-default',
      href: absoluteUrl(getLocalizedUrl(cleanPath, DEFAULT_LOCALE)),
    },
  ];
}

export function getOpenGraphAlternateLocales(
  alternateLinks: AlternateLink[] = [],
  currentLocale: string,
): string[] {
  return Array.from(new Set(
    alternateLinks
      .map(({ hreflang }) => hreflang)
      .filter((hreflang) => hreflang !== 'x-default' && hreflang !== currentLocale)
      .map(getOpenGraphLocale)
  ));
}
