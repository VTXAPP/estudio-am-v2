/* =============================================================================
   ESTUDIO AM · CONFIGURACIÓN ÚNICA  (sitio bilingüe ES / EN)
   -----------------------------------------------------------------------------
   Edita SOLO este archivo para personalizar todo:
   1. Marca y contacto         → SITE
   2. Textos (español/inglés)  → CONTENT.es / CONTENT.en
   3. Fotos y categorías       → PHOTOS  (categoría: bodas | eventos | retratos)
   ========================================================================== */

import type { ImageMetadata } from 'astro';

/* --- FOTOS (en src/assets) ------------------------------------------------ */
import am01 from '../assets/am-01.jpg';
import am02 from '../assets/am-02.jpg';
import am03 from '../assets/am-03.jpg';
import am04 from '../assets/am-04.jpg';
import am05 from '../assets/am-05.jpg';
import am06 from '../assets/am-06.jpg';
import am07 from '../assets/am-07.jpg';
import am08 from '../assets/am-08.jpg';
import am09 from '../assets/am-09.jpg';
import am10 from '../assets/am-10.jpg';
import am11 from '../assets/am-11.jpg';
import am12 from '../assets/am-12.jpg';
import am13 from '../assets/am-13.jpg';
import am14 from '../assets/am-14.jpg';
import am15 from '../assets/am-15.jpg';
import am16 from '../assets/am-16.jpg';
import am17 from '../assets/am-17.jpg';
import am18 from '../assets/am-18.jpg';
import am19 from '../assets/am-19.jpg';
import am20 from '../assets/am-20.jpg';
import am21 from '../assets/am-21.jpg';
import am22 from '../assets/am-22.jpg';
import am23 from '../assets/am-23.jpg';
import am24 from '../assets/am-24.jpg';
import am25 from '../assets/am-25.jpg';
import am26 from '../assets/am-26.jpg';
import amPortrait from '../assets/am-portrait.jpg'; // retrato de la fotógrafa (Sobre mí)

export const IMG = {
  am01, am02, am03, am04, am05, am06, am07, am08, am09, am10, am11, am12, am13,
  am14, am15, am16, am17, am18, am19, am20, am21, am22, am23, am24, am25, am26,
};

export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export type Category = 'bodas' | 'eventos' | 'retratos' | 'producto';
export type PageKey = 'home' | 'portfolio' | 'about' | 'contact';

/* ============================  MARCA Y CONTACTO  ========================== */
export const SITE = {
  name: 'Estudio AM',
  location: '[Tu ciudad]',
  contact: {
    instagram: { handle: '@olavarri_estudio', url: 'https://www.instagram.com/olavarri_estudio/' },
    email: 'estudio@anamariolavarri.com',
    /** WhatsApp internacional SIN signos ni espacios. MX: 52 + 10 dígitos. */
    whatsapp: '525539394586', // +52 55 3939 4586
  },
};

/* ============================  RUTAS POR IDIOMA  ========================= */
/* Se anteponen la base del sitio (raíz en local, /estudio-am/ en GitHub Pages). */
const B = import.meta.env.BASE_URL.replace(/\/$/, '');
export const ROUTES: Record<Locale, Record<PageKey, string>> = {
  es: { home: `${B}/`, portfolio: `${B}/portafolio`, about: `${B}/sobre-mi`, contact: `${B}/contacto` },
  en: { home: `${B}/en/`, portfolio: `${B}/en/portfolio`, about: `${B}/en/about`, contact: `${B}/en/contact` },
};

/* ============================  FOTOS + CATEGORÍAS  ======================= */
/* cat: 'bodas' | 'eventos' | 'retratos' · feat: aparece en la selección del inicio.
   (Las categorías y textos alt se afinan tras clasificar las imágenes.) */
export type Photo = { src: ImageMetadata; cat: Category; alt: { es: string; en: string }; feat?: boolean };

/* Orden = cómo aparecen en el Portafolio. `feat` = aparece en la selección del inicio. */
export const PHOTOS: Photo[] = [
  { src: am26, cat: 'bodas', alt: { es: 'Novia con velo y ramo en primer plano y novio caminando al fondo por una explanada empedrada frente a un edificio monumental de piedra', en: 'Bride with veil and bouquet in the foreground while the groom walks across a stone-paved courtyard before a monumental stone building' } },
  { src: am15, cat: 'eventos', alt: { es: 'Mujer con blazer claro camina con efecto de movimiento ante un muro blanco con arcos y suelo rosado', en: 'Woman in a light blazer walks with a motion-blur effect against a white arched wall and pink marble floor' }, feat: true },
  { src: am23, cat: 'bodas', alt: { es: 'Novia de espaldas con vestido de tul y cola larga apoyada en una silla en un jardín, en blanco y negro', en: 'Bride seen from behind in a tulle gown with a long train, leaning on a chair in a garden, black and white' }, feat: true },
  { src: am22, cat: 'bodas', alt: { es: 'Anillos de boda y joyería de novia sobre mármol con rodajas de cítricos y frutos rojos', en: 'Wedding rings and bridal jewelry on marble surrounded by citrus slices and berries' }, feat: true },
  { src: am13, cat: 'retratos', alt: { es: 'Madre abrazando a su bebé recién nacido dormido sobre su pecho, retrato íntimo en blanco y negro', en: 'Mother cradling her sleeping newborn against her chest, intimate black-and-white portrait' }, feat: true },
  { src: am05, cat: 'eventos', alt: { es: 'Familia elegante posando junto a un bebé con faldón de bautizo de encaje, en blanco y negro', en: 'Elegant family posing with a baby in a lace christening gown, black and white' }, feat: true },
  { src: am16, cat: 'eventos', alt: { es: 'Interior en penumbra de una iglesia barroca durante una ceremonia de boda, con candelabros iluminando el altar', en: 'Dimly lit baroque church interior during a wedding ceremony, with chandeliers illuminating the altar' }, feat: true },
  { src: am14, cat: 'retratos', alt: { es: 'Madre abrazando a su bebé recién nacido contra el pecho en un retrato cálido e íntimo de maternidad', en: 'Mother cradling her newborn against her chest in a warm, intimate motherhood portrait' } },
  { src: am20, cat: 'retratos', alt: { es: 'Mujer embarazada sostiene su vientre con las manos, vestida con camisa de lino beige, bajo luz cálida', en: 'Pregnant woman cradling her belly, wearing a beige linen shirt, in warm soft light' }, feat: true },
  { src: am02, cat: 'producto', alt: { es: 'Arreglos de flores de colores en floreros de vidrio sobre un banco de madera azul oscuro con fondo blanco', en: 'Colorful flower arrangements in glass vases on a dark blue wooden stool against a white background' }, feat: true },
  { src: am09, cat: 'eventos', alt: { es: 'Bebé con traje blanco de bautizo y medalla dorada mirando a la cámara con ojos azules', en: 'Baby in a white christening gown with a gold medal looking at the camera with blue eyes' }, feat: true },
  { src: am04, cat: 'producto', alt: { es: 'Telón de tela blanca al aire libre con una silla de rejilla en un campo de hierba seca rodeado de pinos', en: 'White fabric backdrop outdoors with a cane chair in a dry grass field surrounded by pines' } },
  { src: am24, cat: 'bodas', alt: { es: 'Cola del vestido de novia de tul extendida sobre el suelo, en blanco y negro', en: 'Bride’s tulle dress train spread across the floor, black and white' } },
  { src: am18, cat: 'eventos', alt: { es: 'Mesa de cena de evento con copas e invitados alrededor, en blanco y negro', en: 'Event dinner table with glasses and guests around, black and white' } },
  { src: am07, cat: 'retratos', alt: { es: 'Mujer joven con blusa blanca entre flores rosas en un jardín, con efecto soñador', en: 'Young woman in a white blouse among pink flowers in a garden, with a dreamy effect' } },
  { src: am17, cat: 'bodas', alt: { es: 'Ramo de alcatraces blancos en un jarrón de cristal iluminado sobre fondo oscuro', en: 'Bouquet of white calla lilies in a glass vase lit against a dark background' } },
  { src: am11, cat: 'producto', alt: { es: 'Superficie de agua de piscina turquesa con reflejos de luz solar', en: 'Turquoise pool water surface with sunlight reflections' } },
  { src: am21, cat: 'retratos', alt: { es: 'Bebé sonriente recostado mirando a la cámara, en blanco y negro', en: 'Smiling baby lying down looking at the camera, black and white' } },
  { src: am10, cat: 'bodas', alt: { es: 'Pastel de bodas blanco decorado con flores blancas y uvas verdes ante un jardín', en: 'White wedding cake decorated with white flowers and green grapes against a garden' } },
  { src: am03, cat: 'producto', alt: { es: 'Hombre con camisa de mezclilla de pie sobre una silla en el jardín de una casa de piedra', en: 'Man in a denim shirt standing on a chair in the garden of a stone house' } },
  { src: am25, cat: 'bodas', alt: { es: 'Cola de vestido de novia con encaje extendida sobre suelo de piedra bajo el sol', en: 'Lace bridal gown train spread across stone paving in sunlight' } },
  { src: am12, cat: 'retratos', alt: { es: 'Pies de un bebé recién nacido sostenidos por las manos de un adulto, en blanco y negro', en: 'Newborn baby’s feet cradled in an adult’s hands, black and white' } },
  { src: am06, cat: 'eventos', alt: { es: 'Pareja con un bebé en brazos vestido con ropón de bautizo, ante una pared blanca, en blanco y negro', en: 'Couple holding a baby in a christening gown against a white wall, black and white' } },
  { src: am01, cat: 'eventos', alt: { es: 'Ranúnculos en tonos terracota, coral y rojo sobre un fondo blanco luminoso', en: 'Ranunculus flowers in terracotta, coral and red tones over a bright white background' } },
  { src: am08, cat: 'retratos', alt: { es: 'Niña con vestido de cuadros de pie sobre una silla junto a un árbol de Navidad iluminado, en blanco y negro', en: 'Little girl in a plaid dress standing on a chair beside a lit Christmas tree, black and white' } },
  { src: am19, cat: 'retratos', alt: { es: 'Retrato editorial íntimo bajo luz cálida y suave', en: 'Intimate editorial portrait in warm, soft light' } },
];

/* Selección de "Trabajos recientes" (inicio), EN EL ORDEN en que se muestran.
   Para reordenar o cambiar la selección, edita solo este arreglo. */
export const FEATURED: Photo[] = [
  am05, // familia en bautizo (B&N)
  am16, // ceremonia en la iglesia barroca
  am13, // madre con su bebé recién nacido (B&N)
  am22, // anillos y joyería sobre mármol con cítricos
  am23, // novia en la silla del jardín (B&N)
  am15, // mujer con blazer, efecto de movimiento
].map((src) => PHOTOS.find((p) => p.src === src)!);

/** Foto de portada (hero) — novia + novio en El Escorial. */
export const HERO = am26;
/** Retrato de la fotógrafa para "Sobre mí" (se muestra en blanco y negro). */
export const PORTRAIT = amPortrait;

/* =============================  TEXTOS  ================================== */
type Service = { title: string; text: string };
type Strings = {
  tagline: string;
  location: string;
  metaDescription: string;
  nav: Record<PageKey, string>;
  langToggle: string; // etiqueta del botón para cambiar de idioma
  hero: { eyebrow: string; title: string; cta: string };
  intro: string; // frase poética
  approach: { eyebrow: string; title: string; col1: string; col2: string };
  featured: { eyebrow: string; title: string };
  services: { eyebrow: string; title: string; items: Service[]; cta: string };
  quote: string;
  portfolio: { eyebrow: string; title: string; lead: string; filters: { all: string } & Record<Category, string> };
  about: { eyebrow: string; title: string; paragraphs: string[]; quote: string };
  contact: {
    eyebrow: string; title: string; lead: string;
    waLabel: string; waValue: string; emailLabel: string; igLabel: string;
    form: {
      name: string; namePh: string; type: string; types: string[];
      date: string; datePh: string; message: string; messagePh: string;
      sendWa: string; sendEmail: string; note: string; subject: string; greeting: string;
      fType: string; fDate: string;
    };
  };
  cta: { eyebrow: string; heading: string; text: string };
  heroMeta: string;
  kindWords: string;
  testimonials: { quote: string; author: string }[];
  aboutInfo: { label: string; value: string }[];
  footerRights: string;
  scroll: string;
};

export const CONTENT: Record<Locale, Strings> = {
  es: {
    tagline: 'Fotografía de bodas, eventos y retratos',
    location: 'Ciudad de México · disponible para viajar bajo solicitud',
    metaDescription:
      'Estudio AM · Fotografía de bodas, eventos y retratos. Imágenes naturales, elegantes y atemporales que cuentan tu historia.',
    nav: { home: 'Inicio', portfolio: 'Portafolio', about: 'Sobre mí', contact: 'Contacto' },
    langToggle: 'EN',
    hero: { eyebrow: 'Estudio AM · Fotografía', title: 'Momentos que permanecen', cta: 'Ver portafolio' },
    intro:
      'Pensada para quienes buscan significado, para almas que sienten profundamente, donde cada historia es distinta y cada imagen se moldea con intención.',
    approach: {
      eyebrow: 'Nuestra mirada',
      title: 'Cada historia es única',
      col1:
        'Como marca, nuestra fotografía comienza con la escucha y la sensibilidad. Cada familia, persona o marca tiene su propia esencia y necesidades únicas; por eso cada sesión es un proceso personalizado y cuidado.',
      col2:
        'Desde la visión estética y la creatividad de la artista, creamos imágenes que se adaptan a cada historia, explorando la luz, los espacios y los detalles hasta encontrar la atmósfera perfecta para cada sesión.',
    },
    featured: { eyebrow: 'Selección', title: 'Trabajos recientes' },
    services: {
      eyebrow: 'Servicios',
      title: 'Lo que fotografío',
      items: [
        { title: 'Bodas', text: 'El relato completo de tu día, desde los detalles más pequeños hasta los momentos que no se repiten. Un acompañamiento cercano y discreto.' },
        { title: 'Eventos y celebraciones', text: 'Bautizos, comuniones, aniversarios y celebraciones familiares. Fotografía natural que conserva la alegría de los que más quieres.' },
        { title: 'Retratos', text: 'Sesiones de familia y personales. Imágenes honestas, sin poses forzadas, pensadas para reflejar quién eres.' },
      ],
      cta: 'Consultar',
    },
    quote:
      'Arraigada en la escucha, guiada por la intuición estética y la creatividad, y dedicada a la búsqueda de la luz perfecta para cada sesión única.',
    portfolio: {
      eyebrow: 'Portafolio',
      title: 'Mi trabajo',
      lead: 'Una selección de bodas, eventos y retratos. Cada imagen busca contar lo que se sintió, no solo lo que se vio.',
      filters: { all: 'Todos', bodas: 'Bodas', eventos: 'Eventos', retratos: 'Retratos', producto: 'Producto' },
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Detrás de la cámara',
      paragraphs: [
        'Soy artista visual, fotógrafa y profesional de la comunicación, movida por una búsqueda constante de lo estético y lo esencial. La fotografía se convirtió en mi forma de observar y entender el mundo, especialmente en los momentos de transformación personal, ofreciéndome un espacio de claridad, pausa y conexión.',
        'A través de la imagen exploro la luz, la emoción y los detalles que muchas veces pasan desapercibidos, construyendo un lenguaje visual íntimo y honesto. Sigo explorando la fotografía como un ejercicio de observación y experimentación, guiada por todo lo que percibe mi mirada y por la manera en que lo traduzco en imágenes.',
      ],
      quote:
        'Pensada para quienes buscan significado, para almas que sienten profundamente, donde cada historia es distinta y cada imagen se moldea con intención.',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos',
      lead: 'Cuéntame qué tienes en mente: una boda, un bautizo o evento, o una sesión de retrato. Te respondo personalmente lo antes posible.',
      waLabel: 'WhatsApp', waValue: 'Escríbeme directo →', emailLabel: 'Correo', igLabel: 'Instagram',
      form: {
        name: 'Nombre', namePh: 'Tu nombre', type: 'Tipo de sesión',
        types: ['Boda', 'Evento o bautizo', 'Retrato (familia o personal)', 'Otro'],
        date: 'Fecha aproximada', datePh: 'Ej. octubre 2026', message: 'Mensaje', messagePh: 'Cuéntame los detalles…',
        sendWa: 'Enviar por WhatsApp', sendEmail: 'Enviar por correo',
        note: 'Al enviar se abrirá WhatsApp o tu correo con el mensaje listo. No se guarda nada en el sitio.',
        subject: 'Consulta', greeting: 'Hola Estudio AM, soy', fType: 'Tipo', fDate: 'Fecha aproximada',
      },
    },
    cta: {
      eyebrow: 'Contacto',
      heading: 'Cuéntame tu historia',
      text: 'Cuéntame sobre tu boda, evento o sesión. Me encantará acompañarte y crear imágenes que conserves para siempre.',
    },
    heroMeta: 'Fotografía documental & editorial',
    kindWords: 'En sus palabras',
    testimonials: [
      { quote: '[Testimonio de un cliente — sustituye por una reseña real.]', author: '[Nombre del cliente]' },
      { quote: '[Otra reseña breve y sincera sobre tu trabajo y tu trato.]', author: '[Nombre del cliente]' },
      { quote: '[Una tercera frase que transmita la experiencia de trabajar contigo.]', author: '[Nombre del cliente]' },
    ],
    aboutInfo: [
      { label: 'Base', value: 'Ciudad de México' },
      { label: 'Cobertura', value: 'Nacional e internacional' },
      { label: 'Enfoque', value: 'Bodas · Eventos · Retratos · Producto' },
    ],
    footerRights: 'Todos los derechos reservados.',
    scroll: 'scroll',
  },

  en: {
    tagline: 'Wedding, event and portrait photography',
    location: 'Mexico City · available for overseas work upon request',
    metaDescription:
      'Estudio AM · Wedding, event and portrait photography. Natural, elegant and timeless images that tell your story.',
    nav: { home: 'Home', portfolio: 'Portfolio', about: 'About', contact: 'Contact' },
    langToggle: 'ES',
    hero: { eyebrow: 'Estudio AM · Photography', title: 'Moments that remain', cta: 'View portfolio' },
    intro:
      'Crafted for those who seek meaning, for souls who feel deeply, where every story is different and every image is shaped by intention.',
    approach: {
      eyebrow: 'Our approach',
      title: 'Every story is unique',
      col1:
        'As a brand, our photography begins with listening and sensitivity. Every family, person, or brand has its own essence and unique needs, which is why each session is a personalized and thoughtful process.',
      col2:
        'Through the artist’s aesthetic vision and creativity, we create images that adapt to each story, exploring light, spaces, and details until finding the perfect atmosphere for every session.',
    },
    featured: { eyebrow: 'Selection', title: 'Recent work' },
    services: {
      eyebrow: 'Services',
      title: 'What I photograph',
      items: [
        { title: 'Weddings', text: 'The full story of your day, from the smallest details to the moments that never repeat. Close, discreet companionship.' },
        { title: 'Events & celebrations', text: 'Christenings, communions, anniversaries and family celebrations. Natural photography that keeps the joy of those you love.' },
        { title: 'Portraits', text: 'Family and personal sessions. Honest images, no forced poses, made to reflect who you are.' },
      ],
      cta: 'Enquire',
    },
    quote:
      'Rooted in listening, guided by aesthetic intuition and creativity, and devoted to the pursuit of the perfect light for each unique session.',
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'My work',
      lead: 'A selection of weddings, events and portraits. Each image tries to tell what was felt, not only what was seen.',
      filters: { all: 'All', bodas: 'Weddings', eventos: 'Events', retratos: 'Portraits', producto: 'Product' },
    },
    about: {
      eyebrow: 'About',
      title: 'Behind the camera',
      paragraphs: [
        'I am a visual artist, photographer, and communication professional, driven by a constant search for what is aesthetic and essential. Photography became my way of observing and understanding the world, especially during moments of personal transformation, offering me a space for clarity, pause, and connection.',
        'Through imagery, I explore light, emotion, and the details that often go unnoticed, building an intimate and honest visual language. I continue to explore photography as an exercise in observation and experimentation, guided by everything my eye perceives and by the way I translate it into images.',
      ],
      quote:
        'Crafted for those who seek meaning, for souls who feel deeply, where every story is different and every image is shaped by intention.',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s talk',
      lead: 'Tell me what you have in mind: a wedding, a christening or event, or a portrait session. I’ll personally reply as soon as possible.',
      waLabel: 'WhatsApp', waValue: 'Message me directly →', emailLabel: 'Email', igLabel: 'Instagram',
      form: {
        name: 'Name', namePh: 'Your name', type: 'Session type',
        types: ['Wedding', 'Event or christening', 'Portrait (family or personal)', 'Other'],
        date: 'Approximate date', datePh: 'e.g. October 2026', message: 'Message', messagePh: 'Tell me the details…',
        sendWa: 'Send via WhatsApp', sendEmail: 'Send via email',
        note: 'Submitting opens WhatsApp or your email with the message ready. Nothing is stored on the site.',
        subject: 'Enquiry', greeting: 'Hi Estudio AM, I’m', fType: 'Type', fDate: 'Approximate date',
      },
    },
    cta: {
      eyebrow: 'Contact',
      heading: 'Tell me your story',
      text: 'Tell me about your wedding, event or session. I would love to accompany you and create images you’ll keep forever.',
    },
    heroMeta: 'Documentary & editorial photography',
    kindWords: 'Kind words',
    testimonials: [
      { quote: '[Client testimonial — replace with a real review.]', author: '[Client name]' },
      { quote: '[Another short, heartfelt review about your work and your care.]', author: '[Client name]' },
      { quote: '[A third line that conveys the experience of working with you.]', author: '[Client name]' },
    ],
    aboutInfo: [
      { label: 'Based in', value: 'Mexico City' },
      { label: 'Coverage', value: 'Nationwide & overseas' },
      { label: 'Focus', value: 'Weddings · Events · Portraits · Product' },
    ],
    footerRights: 'All rights reserved.',
    scroll: 'scroll',
  },
};

/* --- Helpers -------------------------------------------------------------- */
export const other = (lang: Locale): Locale => (lang === 'es' ? 'en' : 'es');

export function links(lang: Locale) {
  const msg = lang === 'es'
    ? 'Hola Estudio AM, vi tu página y me encantaría cotizar una sesión 😊'
    : 'Hi Estudio AM, I saw your website and I’d love to get a quote for a session 😊';
  return {
    whatsapp: `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(msg)}`,
    email: `mailto:${SITE.contact.email}`,
    instagram: SITE.contact.instagram.url,
  };
}
