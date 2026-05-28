import type { Metadata } from "next";
import HoguerasClient from "./HoguerasClient";

export const metadata: Metadata = {
  title: "Oferta Hogueras Alicante 2026 | Primer mes gratis · Arista",
  description:
    "Oferta especial Hogueras de San Juan. Contrata fibra y móvil en Alicante del 19 al 24 de junio y el primer mes es gratis. Red MasOrange. Sin permanencia.",
  alternates: { canonical: "https://aristagroup.es/hogueras" },
  openGraph: {
    title: "Oferta Hogueras Alicante 2026 | Primer mes gratis",
    description:
      "Solo del 19 al 24 de junio. Fibra y móvil en red Orange con el primer mes gratis.",
    url: "https://aristagroup.es/hogueras",
    siteName: "Arista Group",
    images: [{ url: "https://aristagroup.es/og-hogueras.jpg", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
};

export default function HoguerasPage() {
  return <HoguerasClient />;
}
