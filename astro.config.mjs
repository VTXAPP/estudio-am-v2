// @ts-check
import { defineConfig } from 'astro/config';

// Para publicar en GitHub Pages se compila con:  PAGES_BASE=/estudio-am npm run build
// En local (sin esa variable) el sitio funciona en la raíz "/".
const base = process.env.PAGES_BASE || undefined;

// https://astro.build/config
export default defineConfig({
  site: base ? 'https://vtxapp.github.io' : 'https://example.com',
  base,
});
