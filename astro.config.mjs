// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";

export default defineConfig({
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  i18n: {
    locales: ["es", "en", "ca"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [icon()],
});
