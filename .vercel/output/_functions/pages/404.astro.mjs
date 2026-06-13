import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_g157orNn.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DhAPn9N3.mjs';
import { u as useTranslations } from '../chunks/TranslationRuntime_B4IG84nS.mjs';
import { s as site } from '../chunks/site_f0xLIUYF.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "en";
  await useTranslations(lang);
  const title = "Page Not Found";
  const description = "The page you are looking for does not exist.";
  const canonicalUrl = `${site.siteUrl}/404/`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${title} | ${site.siteName}`, "description": description, "locale": lang, "canonicalUrl": canonicalUrl, "robots": "noindex, nofollow" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center"> <p class="text-sm font-semibold text-blue-600 uppercase tracking-wide">404 Error</p> <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1> <p class="mt-4 text-base text-gray-500 max-w-lg mx-auto">
Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
</p> <div class="mt-8"> <a href="/" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
Back to Home
</a> </div> </div> ` })}`;
}, "C:/Users/DELL/Desktop/Racine Carree Calculator Final/src/pages/404.astro", void 0);

const $$file = "C:/Users/DELL/Desktop/Racine Carree Calculator Final/src/pages/404.astro";
const $$url = "/404/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
