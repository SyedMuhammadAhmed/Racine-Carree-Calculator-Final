import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import siteConfig from "./src/config/site.json" with { type: "json" };

export default defineConfig({
  site: siteConfig.siteUrl,
  trailingSlash: "always",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
