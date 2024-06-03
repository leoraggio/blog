import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import catppuccinMacchiato from "./catppuccin-macchiato.json";

export default defineConfig({
  integrations: [sitemap()],
  site: "https://astro-theme-creek.netlify.app/",
  markdown: {
    shikiConfig: {
      theme: catppuccinMacchiato,
    },
  },
});
