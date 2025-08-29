import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon';

export default defineConfig({
  integrations: [astroIcon()],
  site: 'https://ata-g-a.github.io/ata_g_a_portfolio/',
  base: '/ata_g_a_portfolio/',
  output: 'static',
  build: {
    outDir: 'dist'
  }
});
