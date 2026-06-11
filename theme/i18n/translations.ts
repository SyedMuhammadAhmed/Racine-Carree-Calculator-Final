import { DEFAULT_LOCALE, type Locale } from './utils';
import shared from './locales/shared.json';

// Dynamic import for locales using import.meta.glob (Vite feature standard in Astro)
const locales = import.meta.glob('./locales/*.json', { eager: true });

export type TranslationSet = Record<string, any>;

export function loadTranslations(locale: Locale): TranslationSet {
  const mainPath = `./locales/${locale}.json`;
  const defaultPath = `./locales/${DEFAULT_LOCALE}.json`;
  const faqPath = `./locales/${locale}.faq.json`;
  const defaultFaqPath = `./locales/${DEFAULT_LOCALE}.faq.json`;

  const mainData = (locales[mainPath] || locales[defaultPath] || { default: {} }) as any;
  const faqData = (locales[faqPath] || locales[defaultFaqPath] || { default: [] }) as any;

  return {
    ...mainData.default,
    faq: faqData.default,
    shared
  };
}

export function t(translations: TranslationSet, key: string): any {
  const keys = key.split('.');
  let current = translations;
  for (const k of keys) {
    if (current && typeof current === 'object' && k in current) {
      current = current[k];
    } else {
      // Fallback behavior: return the key itself if not found
      return key;
    }
  }
  return current;
}

export async function useTranslations(locale: string) {
  const translations = loadTranslations(locale as Locale);
  return function(key: string, fallback?: string): any {
    const val = t(translations, key);
    if (val === key && fallback !== undefined) {
      return fallback;
    }
    return val;
  };
}
