import { defineConfig } from "astro/config";
// Server reload trigger: 2026-09-16T16:08:00
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
    localeRedirects[`/${loc}/${page}`] = `/${page}/`;
    localeRedirects[`/${loc}/${page}/`] = `/${page}/`;
  });
});

export default defineConfig({
  site: siteConfig.siteUrl,
  trailingSlash: "always",
  output: "static",
  redirects: localeRedirects,
  integrations: [
    sitemap({
      xslUrl: '/sitemap.xsl',
      i18n: {
        defaultLocale: "en",
        locales: sitemapLocales,
      },
      serialize(item) {
        if (item.url === `${siteConfig.siteUrl}/` || item.url.match(/\/[a-z]{2}\/$/)) {
          item.changefreq = 'weekly';
          item.priority = 1.0;
        } else if (item.url.includes('racine-cubique') || item.url.includes('nth-root') || item.url.includes('square-root-chart') || item.url.includes('perfect-square') || item.url.includes('perfect-cube')) {
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
