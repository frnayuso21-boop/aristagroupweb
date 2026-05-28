"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

const OPERADORAS = ["Movistar", "Orange", "Vodafone", "MásMóvil", "Jazztel", "Pepephone", "Otra"];
const SERVICIOS = [
  { id: "fibra",  label: "Fibra / Internet" },
  { id: "movil1", label: "1 línea móvil" },
  { id: "movil2", label: "2 líneas móviles" },
  { id: "movil3", label: "3 o más líneas móviles" },
  { id: "tv",     label: "TV" },
  { id: "fijo",   label: "Teléfono fijo" },
  { id: "luz",    label: "Luz / Energía" },
];
const PRECIOS_ARISTA: Record<string, number> = {
  fibra: 24.9, movil1: 6.9, movil2: 13.8, movil3: 20.7, tv: 5, fijo: 0, luz: 0,
};

export default function CalculadoraClient() {
  const [operadora, setOperadora] = useState("");
  const [factura, setFactura]     = useState("");
  const [servicios, setServicios] = useState<string[]>([]);
  const [resultado, setResultado] = useState<null | { actual: number; arista: number; ahorro: number }>(null);

  function toggleServicio(id: string) {
    setServicios((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  }

  function calcular() {
    const actual = parseFloat(factura.replace(",", ".")) || 0;
    const arista = servicios.reduce((acc, s) => acc + (PRECIOS_ARISTA[s] ?? 0), 0);
    setResultado({ actual, arista, ahorro: Math.max(0, actual - arista) });
  }

  const waMsg = encodeURIComponent(
    `Hola, he usado la calculadora de ahorro de Arista. Mi factura actual es de ${factura}€/mes con ${operadora || "mi operadora"}. Quiero saber cuánto me ahorráis.`
  );

  return (
    <>
      <Header />
      <main className="mt-[108px]">
        <section className="bg-[#1648D8] py-16 text-center px-6">
          <div className="mx-auto max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] text-white mb-4" style={{ fontWeight: 600 }}>
              💰 Gratis · Sin compromiso · En 5 segundos
            </span>
            <h1 className="text-[clamp(28px,5vw,52px)] text-white leading-tight tracking-tight" style={{ fontWeight: 800 }}>Calculadora de ahorro</h1>
            <p className="mt-4 text-base text-white/65 max-w-lg mx-auto">Descubre cuánto de más estás pagando con tu operadora actual. Compara gratis con Arista.</p>
          </div>
        </section>

        <section className="bg-[#F5F6F8] py-16 px-6">
          <div className="mx-auto max-w-2xl">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-8">

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>Paso 1</p>
                <h2 className="text-lg text-[#1A1A1A] mb-4" style={{ fontWeight: 700 }}>¿Con qué operadora estás ahora?</h2>
                <div className="flex flex-wrap gap-2">
                  {OPERADORAS.map((op) => (
                    <button key={op} onClick={() => setOperadora(op)}
                      className={`px-4 py-2 rounded-xl text-sm border transition-all ${operadora === op ? "bg-[#1648D8] text-white border-[#1648D8]" : "bg-white text-gray-600 border-gray-200 hover:border-[#1648D8]"}`}
                      style={{ fontWeight: operadora === op ? 700 : 400 }}>
                      {op}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>Paso 2</p>
                <h2 className="text-lg text-[#1A1A1A] mb-4" style={{ fontWeight: 700 }}>¿Qué servicios tienes contratados?</h2>
                <div className="flex flex-col gap-2">
                  {SERVICIOS.map((s) => (
                    <label key={s.id}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-all ${servicios.includes(s.id) ? "border-[#1648D8] bg-[#EFF4FF]" : "border-gray-200 hover:border-gray-300"}`}>
                      <input type="checkbox" className="accent-[#1648D8] h-4 w-4" checked={servicios.includes(s.id)} onChange={() => toggleServicio(s.id)} />
                      <span className="text-sm text-[#1A1A1A]" style={{ fontWeight: servicios.includes(s.id) ? 600 : 400 }}>{s.label}</span>
                      {PRECIOS_ARISTA[s.id] > 0 && <span className="ml-auto text-[11px] text-[#1648D8]" style={{ fontWeight: 700 }}>Arista: {PRECIOS_ARISTA[s.id].toFixed(2).replace(".", ",")}€/mes</span>}
                      {PRECIOS_ARISTA[s.id] === 0 && <span className="ml-auto text-[11px] text-[#00B96B]" style={{ fontWeight: 700 }}>Gratis</span>}
                    </label>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>Paso 3</p>
                <h2 className="text-lg text-[#1A1A1A] mb-4" style={{ fontWeight: 700 }}>¿Cuánto pagas al mes actualmente?</h2>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <input type="number" placeholder="Ej: 59,90" value={factura} onChange={(e) => setFactura(e.target.value)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-lg text-[#1A1A1A] focus:border-[#1648D8] focus:outline-none" style={{ fontWeight: 600 }} />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€/mes</span>
                  </div>
                  <button onClick={calcular} disabled={!factura || servicios.length === 0}
                    className="rounded-xl px-6 py-3 text-sm text-white transition-all disabled:opacity-40 hover:opacity-90"
                    style={{ backgroundColor: "#1648D8", fontWeight: 700 }}>
                    Calcular →
                  </button>
                </div>
              </div>

              {resultado && (
                <div className="rounded-2xl overflow-hidden border border-[#1648D8]">
                  <div className="bg-[#1648D8] px-6 py-4 text-center">
                    <p className="text-[11px] uppercase tracking-widest text-white/60 mb-1" style={{ fontWeight: 600 }}>Tu ahorro estimado con Arista</p>
                    <p className="text-[64px] leading-none text-white tracking-tighter" style={{ fontWeight: 800 }}>{resultado.ahorro.toFixed(2).replace(".", ",")}€</p>
                    <p className="text-sm text-white/65 mt-1">al mes · {(resultado.ahorro * 12).toFixed(0)}€ al año</p>
                  </div>
                  <div className="bg-white px-6 py-5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex gap-6">
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase tracking-wider">Tu factura actual</p>
                        <p className="text-2xl text-gray-500 line-through" style={{ fontWeight: 700 }}>{resultado.actual.toFixed(2).replace(".", ",")}€</p>
                      </div>
                      <div>
                        <p className="text-[11px] text-[#1648D8] uppercase tracking-wider">Con Arista</p>
                        <p className="text-2xl text-[#1648D8]" style={{ fontWeight: 700 }}>{resultado.arista.toFixed(2).replace(".", ",")}€</p>
                      </div>
                    </div>
                    <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm text-black hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
                      Quiero ahorrar →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <p className="mt-6 text-center text-xs text-gray-400">
              * Los precios de Arista son orientativos. El ahorro real puede variar según tu tarifa actual.{" "}
              <Link href="/tarifas" className="underline hover:text-gray-600">Ver tarifas completas →</Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
