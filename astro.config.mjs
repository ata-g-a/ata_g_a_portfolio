import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ata-g-a.github.io/ata_g_a_portfolio/',
  base: '/ata_g_a_portfolio/',
  output: 'static',
  build: {
    outDir: 'dist'
  }
});
