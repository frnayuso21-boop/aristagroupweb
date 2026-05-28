import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Artículos del Blog",
  type: "document",
  icon: () => "📝",
  fields: [
    defineField({
      name: "titulo",
      title: "Título del artículo",
      type: "string",
      validation: (R) => R.required().min(10).max(100),
    }),
    defineField({
      name: "slug",
      title: "URL del artículo (slug)",
      type: "slug",
      options: { source: "titulo", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "resumen",
      title: "Resumen (meta description)",
      type: "text",
      rows: 3,
      validation: (R) => R.required().max(160),
    }),
    defineField({
      name: "imagen",
      title: "Imagen de portada",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Texto alternativo (SEO)", type: "string" }),
      ],
    }),
    defineField({
      name: "categoria",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Fibra y Móvil",   value: "fibra-movil" },
          { title: "Energía",          value: "energia" },
          { title: "Consejos",         value: "consejos" },
          { title: "Noticias",         value: "noticias" },
          { title: "Ahorro",           value: "ahorro" },
        ],
      },
    }),
    defineField({
      name: "contenido",
      title: "Contenido del artículo",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal",    value: "normal" },
            { title: "Título H2", value: "h2" },
            { title: "Título H3", value: "h3" },
            { title: "Cita",      value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Negrita",  value: "strong" },
              { title: "Cursiva",  value: "em" },
              { title: "Código",   value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Enlace",
                fields: [
                  { name: "href", type: "url", title: "URL" },
                  { name: "blank", type: "boolean", title: "Abrir en nueva pestaña" },
                ],
              },
            ],
          },
        },
        { type: "image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "autor",
      title: "Autor",
      type: "string",
      initialValue: "Equipo Arista",
    }),
    defineField({
      name: "publicadoEn",
      title: "Fecha de publicación",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "destacado",
      title: "¿Artículo destacado en portada?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "metaTitulo",       title: "Meta título (si es diferente al título)",       type: "string" }),
        defineField({ name: "metaDescripcion",  title: "Meta descripción (si es diferente al resumen)", type: "text", rows: 2 }),
        defineField({ name: "canonical",        title: "Canonical URL",                                 type: "url" }),
      ],
    }),
  ],
  preview: {
    select: { title: "titulo", subtitle: "categoria", media: "imagen" },
  },
  orderings: [
    { title: "Más reciente primero", name: "fecha_desc", by: [{ field: "publicadoEn", direction: "desc" }] },
  ],
});
