// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import node from "@astrojs/node";

export default defineConfig({
  site: 'https://robeecodes.github.io',
  base: '/my-portfolio-2026',

  integrations: [
    sanity({
      projectId: "yns81n86",
      dataset: "production",
      useCdn: false,
      apiVersion: "2025-12-15",
      studioBasePath: "/studio",
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
  ],

  adapter: node({
    mode: "standalone",
  }),
});