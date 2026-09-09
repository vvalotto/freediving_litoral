// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// site/base apuntan a GitHub Pages (repo project site).
// Cuando se migre a hosting propio, quitar "base" y ajustar "site".
export default defineConfig({
  site: 'https://vvalotto.github.io',
  base: '/freediving_litoral/',
});
