import type { Metadata } from "next";
import CalculadoraClient from "./CalculadoraClient";

export const metadata: Metadata = {
  title: "Calculadora de ahorro | Arista Group — Compara tu factura",
  description:
    "Descubre cuánto estás pagando de más con tu operadora actual. Compara gratis con Arista en 5 segundos. Sin compromiso.",
  alternates: { canonical: "https://aristagroup.es/calculadora-ahorro" },
};

export default function CalculadoraAhorroPage() {
  return <CalculadoraClient />;
}
