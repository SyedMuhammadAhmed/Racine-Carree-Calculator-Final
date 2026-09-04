import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
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

export default defineConfig({
  site: siteConfig.siteUrl,
  trailingSlash: "always",
  output: "static",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: sitemapLocales,
      },
      serialize(item) {
        if (item.url === `${siteConfig.siteUrl}/` || item.url.match(/\/[a-z]{2}\/$/)) {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (item.url.includes('racine-cubique') || item.url.includes('nth-root')) {
          item.changefreq = 'weekly';
          item.priority = 0.9;
        } else {
          item.changefreq = 'monthly';
          item.priority = 0.6;
        }
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
