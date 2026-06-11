import { e as createAstro, f as createComponent, h as addAttribute, l as renderHead, n as renderSlot, r as renderTemplate } from './astro/server_CpVHVBQL.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */

const siteUrl = "https://example.com";
const siteName = "My Astro Site";
const siteDescription = "A production-ready Astro site built with Tailwind CSS v4.";
const googleVerification = "";
const bingVerification = "";
const yandexVerification = "";
const ogImage = "/og-image.png";
const ogImageWidth = 1200;
const ogImageHeight = 630;
const ogImageAlt = "Site preview";
const site = {
  siteUrl,
  siteName,
  siteDescription,
  googleVerification,
  bingVerification,
  yandexVerification,
  ogImage,
  ogImageWidth,
  ogImageHeight,
  ogImageAlt,
};

const header = [{"label":"Home","href":"/"},{"label":"Blog","href":"/blog"},{"label":"About","href":"/about"}];
const footer = [{"label":"Privacy Policy","href":"/privacy"},{"label":"Terms of Service","href":"/terms"},{"label":"Contact","href":"/contact"}];
const nav = {
  header,
  footer,
};

const $$Astro = createAstro("https://example.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = site.siteName,
    description = site.siteDescription,
    ogImage = site.ogImage
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(ogImage, site.siteUrl).href, "content")}><meta property="og:image:width"${addAttribute(String(site.ogImageWidth), "content")}><meta property="og:image:height"${addAttribute(String(site.ogImageHeight), "content")}><meta property="og:image:alt"${addAttribute(site.ogImageAlt, "content")}>${site.googleVerification}${site.bingVerification}${site.yandexVerification}${renderHead()}</head> <body class="min-h-screen bg-white text-gray-900 antialiased"> ${renderSlot($$result, $$slots["header"], renderTemplate` <header class="border-b border-gray-200"> <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4"> <a href="/" class="text-lg font-semibold">${site.siteName}</a> <ul class="flex gap-6"> ${nav.header.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")} class="text-sm text-gray-600 hover:text-gray-900"> ${item.label} </a> </li>`)} </ul> </nav> </header> `)} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderSlot($$result, $$slots["footer"], renderTemplate` <footer class="border-t border-gray-200"> <div class="mx-auto max-w-7xl px-4 py-8"> <ul class="flex justify-center gap-6"> ${nav.footer.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")} class="text-sm text-gray-500 hover:text-gray-700"> ${item.label} </a> </li>`)} </ul> <p class="mt-4 text-center text-xs text-gray-400">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} ${site.siteName}. All rights reserved.
</p> </div> </footer> `)} </body></html>`;
}, "C:/Users/DELL/Desktop/Racine Carree Calculator Final/theme/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, site as s };
