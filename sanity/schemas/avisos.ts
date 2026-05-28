import { defineField, defineType } from "sanity";

export const aviso = defineType({
  name: "aviso",
  title: "Avisos y Banners",
  type: "document",
  icon: () => "📢",
  fields: [
    defineField({
      name: "texto",
      title: "Texto del banner/aviso",
      type: "string",
      validation: (R) => R.required().max(120),
    }),
    defineField({
      name: "emoji",
      title: "Emoji (opcional)",
      type: "string",
      description: "Ej: 🔥 ⚡ 🎉",
    }),
    defineField({
      name: "tipo",
      title: "Tipo de aviso",
      type: "string",
      options: {
        list: [
          { title: "Banner superior (urgencia)",    value: "banner_top" },
          { title: "Oferta especial",               value: "oferta" },
          { title: "Mantenimiento",                 value: "mantenimiento" },
          { title: "Noticia",                       value: "noticia" },
        ],
      },
      initialValue: "oferta",
    }),
    defineField({
      name: "color",
      title: "Color del banner",
      type: "string",
      options: {
        list: [
          { title: "Azul (por defecto)", value: "azul" },
          { title: "Rojo (urgencia)",    value: "rojo" },
          { title: "Verde (promo)",      value: "verde" },
          { title: "Naranja",            value: "naranja" },
        ],
      },
      initialValue: "azul",
    }),
    defineField({
      name: "enlace",
      title: "URL al hacer clic (opcional)",
      type: "string",
      description: "Ej: /bundle o https://wa.me/34621192578",
    }),
    defineField({
      name: "activo",
      title: "¿Mostrar ahora?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "fechaFin",
      title: "Fecha de fin (opcional)",
      type: "datetime",
    }),
  ],
  preview: {
    select: { title: "texto", subtitle: "tipo" },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ?? "aviso" };
    },
  },
});
