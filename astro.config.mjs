// @ts-check
import { defineConfig } from 'astro/config';

// Dominio propio: anamariolavarri.com — se sirve desde la raíz "/".
// PAGES_BASE queda solo por si algún día se necesita volver a publicar bajo
// un subdirectorio de vtxapp.github.io (pruebas, etc.).
const base = process.env.PAGES_BASE || undefined;

// https://astro.build/config
export default defineConfig({
  site: base ? 'https://vtxapp.github.io' : 'https://anamariolavarri.com',
  base,
});
