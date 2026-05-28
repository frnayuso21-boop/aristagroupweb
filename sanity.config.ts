import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "arista-group-studio",
  title: "Arista Group — Panel CMS",
  basePath: "/admin",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Arista Group CMS")
          .items([
            S.listItem()
              .title("⚙️ Ajustes Globales")
              .id("ajustes")
              .child(
                S.document().schemaType("ajustes").documentId("ajustes-global")
              ),
            S.divider(),
            S.listItem()
              .title("📝 Blog y Artículos")
              .child(S.documentTypeList("blogPost").title("Artículos")),
            S.listItem()
              .title("⭐ Reseñas y Testimonios")
              .child(S.documentTypeList("testimonio").title("Testimonios")),
            S.listItem()
              .title("📢 Avisos y Banners")
              .child(S.documentTypeList("aviso").title("Avisos")),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
