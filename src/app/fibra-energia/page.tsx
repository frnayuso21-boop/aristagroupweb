import type { Metadata } from "next";
import FibraEnergiaClient from "./FibraEnergiaClient";

export const metadata: Metadata = {
  title: "Fibra + Energía | Arista — Luz, Fibra y Móvil en una sola factura",
  description:
    "Contrata la luz, la fibra y el móvil juntos con Arista. Un solo recibo. Precio garantizado de por vida. Desde 25,90€/mes. Sin permanencia.",
  alternates: { canonical: "https://aristagroup.es/fibra-energia" },
};

export default function FibraEnergiaPage() {
  return <FibraEnergiaClient />;
}
