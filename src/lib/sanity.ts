import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET    ?? "production",
  apiVersion: "2024-01-01",
  useCdn:    true,
  token:     process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// ── QUERIES GROQ ──────────────────────────────────────────────

/** Todos los artículos del blog (lista) */
export const BLOG_LIST_QUERY = `
  *[_type == "blogPost"] | order(publicadoEn desc) {
    _id,
    titulo,
    "slug": slug.current,
    resumen,
    imagen,
    categoria,
    autor,
    publicadoEn,
    destacado
  }
`;

/** Un artículo concreto por slug */
export const BLOG_POST_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    titulo,
    "slug": slug.current,
    resumen,
    imagen,
    categoria,
    autor,
    publicadoEn,
    contenido,
    seo
  }
`;

/** Slugs para generateStaticParams */
export const BLOG_SLUGS_QUERY = `
  *[_type == "blogPost"] { "slug": slug.current }
`;

/** Testimonios activos (todos) */
export const TESTIMONIOS_QUERY = `
  *[_type == "testimonio" && activo == true] | order(_createdAt desc) {
    _id,
    nombre,
    ciudad,
    texto,
    estrellas,
    servicio,
    fuente,
    avatar,
    destacado
  }
`;

/** Solo los testimonios destacados (home) */
export const TESTIMONIOS_HOME_QUERY = `
  *[_type == "testimonio" && activo == true && destacado == true][0...6] {
    _id,
    nombre,
    ciudad,
    texto,
    estrellas,
    servicio,
    fuente,
    avatar
  }
`;

/** Ajustes globales */
export const AJUSTES_QUERY = `
  *[_type == "ajustes" && _id == "ajustes-global"][0] {
    telefono,
    whatsapp,
    email,
    horario,
    bannerActivo,
    ofertaDestacada,
    cta_whatsapp_texto,
    redes
  }
`;

/** Aviso/banner activo */
export const AVISO_ACTIVO_QUERY = `
  *[_type == "aviso" && activo == true] | order(_createdAt desc)[0] {
    texto,
    emoji,
    tipo,
    color,
    enlace
  }
`;
