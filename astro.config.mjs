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
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
