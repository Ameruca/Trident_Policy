import { defineConfig } from 'astro/config';

// Sitio 100% estático: Vercel lo detecta como Astro y publica la carpeta dist/.
export default defineConfig({
  output: 'static',
});
