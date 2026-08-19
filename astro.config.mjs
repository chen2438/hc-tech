import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://studio.vayki.com',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
