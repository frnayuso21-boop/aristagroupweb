import { defineField, defineType } from "sanity";

// Documento singleton — ajustes globales editables por el CM
export const ajustes = defineType({
  name: "ajustes",
  title: "Ajustes Globales",
  type: "document",
  icon: () => "⚙️",
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "telefono",
      title: "Teléfono de contacto",
      type: "string",
      description: "Ej: +34 621 192 578",
    }),
    defineField({
      name: "whatsapp",
      title: "Número WhatsApp (solo dígitos con prefijo)",
      type: "string",
      description: "Ej: 34621192578",
    }),
    defineField({
      name: "email",
      title: "Email de contacto",
      type: "string",
    }),
    defineField({
      name: "horario",
      title: "Horario de atención",
      type: "string",
      description: "Ej: Lunes a Viernes 9h–18h",
      initialValue: "Lunes a Viernes · 9h–18h",
    }),
    defineField({
      name: "bannerActivo",
      title: "Texto del banner superior activo",
      type: "string",
      description: "Dejar vacío para ocultar el banner",
    }),
    defineField({
      name: "ofertaDestacada",
      title: "Texto de oferta destacada (home)",
      type: "string",
    }),
    defineField({
      name: "cta_whatsapp_texto",
      title: "Texto del mensaje WhatsApp por defecto",
      type: "string",
      initialValue: "Hola, quiero información sobre las tarifas de Arista Group.",
    }),
    defineField({
      name: "redes",
      title: "Redes sociales",
      type: "object",
      fields: [
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "facebook",  title: "Facebook URL",  type: "url" }),
        defineField({ name: "linkedin",  title: "LinkedIn URL",  type: "url" }),
        defineField({ name: "youtube",   title: "YouTube URL",   type: "url" }),
      ],
    }),
  ],
  preview: {
    prepare() { return { title: "⚙️ Ajustes Globales" }; },
  },
});
