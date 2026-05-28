import type { Metadata } from "next";
import RescateClient from "./RescateClient";

export const metadata: Metadata = {
  title: "Rescate Clientes | Arista Group — Tu operadora ha quebrado o te ha dejado sin servicio",
  description:
    "¿Tu operadora low-cost ha quebrado o te ha dejado sin línea? Arista te rescata: alta en 24h, 1er mes gratis + 50€ en tu 2ª factura. Alicante y provincia.",
  alternates: { canonical: "https://aristagroup.es/rescate" },
  robots: { index: true, follow: true },
};

export default function RescatePage() {
  return <RescateClient />;
}
