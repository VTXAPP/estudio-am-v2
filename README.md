# Estudio AM · sitio web

Sitio web profesional de **Estudio AM** — fotografía de bodas, eventos y retratos.
**Bilingüe (español / inglés)**, construido con [Astro](https://astro.build): rápido,
optimiza las imágenes solo y se publica gratis.

---

## 🚀 Cómo verlo en tu computadora

```bash
cd ~/code/fotografa-portfolio
npm install      # solo la primera vez
npm run dev      # abre http://localhost:4321
```

Para detenerlo: `Ctrl + C`.

---

## 🌍 Idiomas

- **Español** en `/` (`/`, `/portafolio`, `/sobre-mi`, `/contacto`)
- **Inglés** en `/en/` (`/en/`, `/en/portfolio`, `/en/about`, `/en/contact`)
- El botón **EN / ES** del menú cambia de idioma manteniendo la página.

---

## 🗂️ Estructura

- **Inicio** — portada, frase de marca, selección destacada, “Nuestra mirada” y servicios.
- **Portafolio** — galería única con **filtros** (Todos · Bodas · Eventos · Retratos) y visor ampliado (lightbox).
- **Sobre mí** — retrato + biografía.
- **Contacto** — Instagram, correo y WhatsApp + formulario que abre el mensaje listo.

---

## ✏️ Cómo personalizar (todo en un archivo)

Todo vive en [`src/config/site.ts`](src/config/site.ts):

1. **Marca y contacto** → `SITE` (nombre, ciudad, Instagram, correo, WhatsApp).
2. **Textos en español e inglés** → `CONTENT.es` y `CONTENT.en` (deben coincidir en estructura).
3. **Fotos y categorías** → `PHOTOS` (ver abajo).

> WhatsApp en formato internacional **sin** signos ni espacios.
> Ej. España: `34` + número · México: `52` + `1` + 10 dígitos → `5215512345678`.

---

## 🖼️ Fotos

Las fotos están en `src/assets/` (`am-01.jpg` … `am-26.jpg`) e importadas al inicio de
`src/config/site.ts`. Cada foto en `PHOTOS` tiene:

```ts
{ src: am07, cat: 'retratos', alt: { es: '…', en: '…' }, feat: true }
```

- `cat`: **bodas · eventos · retratos** (define en qué filtro aparece).
- `feat: true`: aparece también en la selección del Inicio.
- El orden del arreglo = el orden en el Portafolio.
- `HERO` = foto de portada · `PORTRAIT` = foto de “Sobre mí” (⚠️ cámbiala por un retrato real tuyo).

**Añadir una foto:** copia el archivo a `src/assets/`, impórtalo arriba
(`import am27 from '../assets/am-27.jpg';`) y agrégalo a `PHOTOS`.

**Recomendación:** lado largo ≥ 1600px, JPG buena calidad, sRGB. Astro genera WebP/AVIF
y tamaños responsivos automáticamente.

---

## 🎨 Paleta y tipografías

- **Crema** `#faf6ee` · **Beige** `#ece2d2` · **Olivo** `#54491d` · **Granate** `#73303c`
- Títulos: *Cormorant Garamond* · Texto y logo: *Jost*

En [`src/styles/global.css`](src/styles/global.css) (variables `:root`).
Logo recreado en código: [`src/components/Logo.astro`](src/components/Logo.astro).

---

## 🌐 Publicar (gratis)

1. Sube esta carpeta a GitHub.
2. En **Netlify** o **Vercel**: “New project” → elige el repo (detecta Astro solo).
3. Conecta tu dominio (ej. `estudioam.com`).

Antes de publicar, pon tu dominio en `astro.config.mjs` (campo `site`).
