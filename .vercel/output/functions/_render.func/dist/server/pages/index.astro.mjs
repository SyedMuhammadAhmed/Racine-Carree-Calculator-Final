import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_g157orNn.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Hero, b as $$Calculator, c as $$ContentSections } from '../chunks/ContentSections_BoHJBL3J.mjs';
import { u as useTranslations, $ as $$Navbar, a as $$Footer, b as getHtmlDir } from '../chunks/TranslationRuntime_B4IG84nS.mjs';
import { s as site } from '../chunks/site_f0xLIUYF.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const lang = "en";
  const t = await useTranslations(lang);
  const title = t("site.title", "Racine Carree Calculator - Free Square Root & Cube Root Tool Online");
  const description = t("site.description", "Calculate square roots, cube roots, nth roots, fractions, and powers with steps and reference tables.");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "lang": lang, "dir": getHtmlDir(lang), "canonicalUrl": `${site.siteUrl}/` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "lang": lang })} ${maybeRenderHead()}<section class="above-fold" id="hero"> <div class="above-fold-stack"> ${renderComponent($$result2, "Hero", $$Hero, { "lang": lang })} ${renderComponent($$result2, "Calculator", $$Calculator, { "lang": lang })} </div> </section> ${renderComponent($$result2, "ContentSections", $$ContentSections, { "lang": lang })} ${renderComponent($$result2, "Footer", $$Footer, { "lang": lang })} ` })}`;
}, "C:/Users/DELL/Desktop/Racine Carree Calculator Final/src/pages/index.astro", void 0);

const $$file = "C:/Users/DELL/Desktop/Racine Carree Calculator Final/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
