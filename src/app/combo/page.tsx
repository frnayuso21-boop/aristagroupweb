import type { Metadata } from "next";
import ComboClient from "./ComboClient";

export const metadata: Metadata = {
  title: "Crea tu combo a medida | Arista Group — Fibra, Móvil y TV",
  description:
    "Configura tu tarifa personalizada de fibra, móvil, TV y más. Sin letra pequeña. Sin permanencia. Precio exacto en tiempo real.",
  alternates: { canonical: "https://aristagroup.es/combo" },
};

export default function ComboPage() {
  return <ComboClient />;
}
