import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://iquebcastroblogtutorial.netlify.app/",
  integrations: [preact()]
});