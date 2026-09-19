// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// SITE_URL y BASE_PATH se definen como variables del repositorio (ver docs/despliegue.md).
// Sin variables, el build apunta a GitHub Pages (project site).
// Con dominio propio: SITE_URL=https://freedivinglitoral.com.ar y BASE_PATH=/
export default defineConfig({
  site: process.env.SITE_URL || 'https://vvalotto.github.io',
  base: process.env.BASE_PATH || '/freediving_litoral/',
  integrations: [sitemap()],
});
