import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CpVHVBQL.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B3D3EG4j.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-7xl px-4 py-24 text-center"> <h1 class="text-4xl font-bold">404</h1> <p class="mt-4 text-gray-600">Page not found.</p> <a href="/" class="mt-6 inline-block text-sm text-blue-600 underline">Go home</a> </section> ` })}`;
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
