import { defineConfig } from "astro/config";
// Server reload trigger: 2026-09-16T16:08:00
import tailwindcss from "@tailwindcss/vite";

import siteConfig from "./src/config/site.json" with { type: "json" };

const sitemapLocales = {
  en: "en",
  hi: "hi",
  es: "es",
  ru: "ru",
  fr: "fr",
  de: "de",
  it: "it",
  pt: "pt",
  bn: "bn",
  ja: "ja",
  ko: "ko",
  ms: "ms",
  pl: "pl",
  id: "id",
  ar: "ar",
  bg: "bg",
  tr: "tr",
  sv: "sv",
};

const staticPages = [
  'about-us',
  'contact-us',
  'privacy',
  'terms',
  'disclaimer',
  'sitemap',
];

const localeRedirects = {};
Object.keys(sitemapLocales).filter(loc => loc !== 'en').forEach(loc => {
  staticPages.forEach(page => {
    localeRedirects[`/${loc}/${page}/`] = `/${page}/`;
  });
});

export default defineConfig({
  site: siteConfig.siteUrl,
  trailingSlash: "always",
  output: "static",
  redirects: localeRedirects,
  vite: {
    plugins: [tailwindcss()],
    build: { assetsInlineLimit: 0 },
  },
});
