import type { Metadata } from "next";
import AtencionClient from "./AtencionClient";

export const metadata: Metadata = {
  title: "Atención al Cliente | Arista Group — Estamos aquí para ayudarte",
  description:
    "Contacta con el equipo de Arista Group por teléfono, WhatsApp o email. Atención al cliente real, sin bots. Horario y datos de la empresa.",
  alternates: { canonical: "https://aristagroup.es/atencion-al-cliente" },
  robots: { index: true, follow: true },
};

export default function AtencionPage() {
  return <AtencionClient />;
}
