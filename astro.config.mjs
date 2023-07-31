import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ayanavakarmakar.software",
  integrations: [
    tailwind(),
    react(),
    sitemap(),
    partytown({
      // Adds dataLayer.push as a forwarding-event
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "server",
  adapter: vercel(),
});
