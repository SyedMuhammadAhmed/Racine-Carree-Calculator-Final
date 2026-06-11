import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CpVHVBQL.mjs';
import 'piccolore';
import { $ as $$BaseLayout, s as site } from '../chunks/BaseLayout_B3D3EG4j.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": site.siteName, "description": site.siteDescription }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-7xl px-4 py-24 text-center"> <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">${site.siteName}</h1> <p class="mt-4 text-lg text-gray-600">${site.siteDescription}</p> </section> ` })}`;
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
