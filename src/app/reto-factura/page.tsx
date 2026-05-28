import type { Metadata } from "next";
import RetoFacturaClient from "./RetoFacturaClient";

export const metadata: Metadata = {
  title: "El Reto de la Factura | Arista Group — ¿Cuánto pagas de más cada mes?",
  description:
    "Acepta el reto: dinos cuánto pagas ahora y te mostramos cuánto ahorras con Arista. Fibra, móvil y energía. El 94% de participantes ahorra más de 20€/mes.",
  alternates: { canonical: "https://aristagroup.es/reto-factura" },
  openGraph: {
    title: "El Reto de la Factura — ¿Cuánto pagas de más?",
    description: "Acepta el reto y descubre cuánto dinero estás tirando cada mes con tu operadora actual.",
    url: "https://aristagroup.es/reto-factura",
    locale: "es_ES",
    type: "website",
  },
};

export default function RetoFacturaPage() {
  return <RetoFacturaClient />;
}
