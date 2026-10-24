import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  site: 'https://rideam.github.io',
  integrations: [mdx(), sitemap(),
  ],
  // Vite 8 resolves CSS @import before PostCSS plugins run, so Tailwind must load as a Vite plugin
  vite: {
    plugins: [tailwindcss()],
  },
});
