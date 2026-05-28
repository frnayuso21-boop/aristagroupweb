import type { Metadata } from "next";
import AyudaClient from "./AyudaClient";

export const metadata: Metadata = {
  title: "Centro de Ayuda | Arista Group — Resuelve tu duda en segundos",
  description:
    "Encuentra respuesta a cualquier duda sobre fibra, móvil, energía, facturas o portabilidad. Centro de ayuda Arista Group con búsqueda y preguntas frecuentes.",
  alternates: { canonical: "https://aristagroup.es/ayuda" },
};

export default function AyudaPage() {
  return <AyudaClient />;
}
