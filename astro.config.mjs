// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO per kund: byt site-URL till kundens domän innan deploy.
export default defineConfig({
  site: 'https://salonglova.se',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
