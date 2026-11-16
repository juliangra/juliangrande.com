import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { projects } from './src/data/projects.ts';

export default defineConfig({
  site: 'https://juliangrande.com',
  // Removed pages: send old links somewhere useful instead of a 404.
  // Former project pages go straight to the project's repository.
  redirects: {
    '/blog': '/',
    '/about': '/',
    '/projects': '/',
    '/contact': '/#contact',
    ...Object.fromEntries(
      projects.map((p) => [`/projects/${p.slug}`, p.links.github ?? p.links.live ?? '/']),
    ),
  },
  integrations: [
    sitemap(),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
