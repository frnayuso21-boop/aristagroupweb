import { defineField, defineType } from "sanity";

export const testimonio = defineType({
  name: "testimonio",
  title: "Reseñas y Testimonios",
  type: "document",
  icon: () => "⭐",
  fields: [
    defineField({
      name: "nombre",
      title: "Nombre del cliente",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "ciudad",
      title: "Ciudad",
      type: "string",
    }),
    defineField({
      name: "texto",
      title: "Texto de la reseña",
      type: "text",
      rows: 4,
      validation: (R) => R.required().max(300),
    }),
    defineField({
      name: "estrellas",
      title: "Puntuación (estrellas)",
      type: "number",
      options: { list: [1, 2, 3, 4, 5] },
      initialValue: 5,
      validation: (R) => R.required().min(1).max(5),
    }),
    defineField({
      name: "servicio",
      title: "Servicio contratado",
      type: "string",
      options: {
        list: [
          "Fibra 600Mb",
          "Fibra 1Gb",
          "Fibra + Móvil",
          "Pack Familiar",
          "Pack Pareja",
          "Solo Móvil",
          "Energía",
          "Bundle Fibra + Energía",
          "Rescate Clientes",
        ],
      },
    }),
    defineField({
      name: "fuente",
      title: "Fuente de la reseña",
      type: "string",
      options: {
        list: [
          { title: "Google",     value: "google" },
          { title: "Trustpilot", value: "trustpilot" },
          { title: "Directa",    value: "directa" },
          { title: "WhatsApp",   value: "whatsapp" },
        ],
      },
      initialValue: "google",
    }),
    defineField({
      name: "avatar",
      title: "Foto del cliente (opcional)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "activo",
      title: "¿Mostrar en la web?",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "destacado",
      title: "¿Destacar en home?",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "nombre", subtitle: "ciudad", media: "avatar" },
    prepare({ title, subtitle }) {
      return { title, subtitle: `📍 ${subtitle ?? "—"}` };
    },
  },
});
