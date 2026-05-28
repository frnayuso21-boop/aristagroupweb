"use client";

import { useState } from "react";
import Link from "next/link";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

function desc(v: number) {
  return (v * 0.9).toFixed(2).replace(".", ",");
}

const IconRouter = () => (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const IconMobile = () => (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);
const IconTV = () => (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconLock = () => (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
  </svg>
);
const IconWifi = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

const CARDS = [
  {
    slug: "arista-only-600",
    nombre: "Arista Only 600",
    precioMes: 24.9,
    destacada: false,
    badge: null as string | null,
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    detalles: [
      "Fibra óptica 600Mb simétrica (subida y bajada)",
      "Red MasOrange · cobertura nacional",
      "Router WiFi 6 incluido",
      "Instalación incluida",
      "Sin permanencia",
      "Atención al cliente por WhatsApp",
    ],
    waMsg: (a: boolean) => a
      ? `Quiero Arista Only 600 ANUAL — Fibra 600Mb por ${desc(24.9)}€/mes.`
      : "Quiero Arista Only 600 — Fibra 600Mb por 24,90€/mes.",
  },
  {
    slug: "pack-pareja-600",
    nombre: "Pack Pareja 600",
    precioMes: 35.9,
    destacada: true,
    badge: "2 líneas incluidas" as string | null,
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "Línea 1 · 30GB 5G" },
      { icon: <IconMobile />, texto: "Línea 2 · 30GB 5G" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    detalles: [
      "Fibra óptica 600Mb simétrica",
      "2 líneas móviles con 30GB cada una en red 5G",
      "Llamadas ilimitadas nacionales",
      "Red MasOrange · cobertura nacional",
      "Router WiFi 6 incluido",
      "Instalación incluida",
      "Sin permanencia",
    ],
    waMsg: (a: boolean) => a
      ? `Quiero Pack Pareja 600 ANUAL — Fibra 600Mb + 2 líneas 30GB por ${desc(35.9)}€/mes.`
      : "Quiero Pack Pareja 600 — Fibra 600Mb + 2 líneas 30GB 5G por 35,90€/mes.",
  },
  {
    slug: "fibra-600-infinity",
    nombre: "Arista 600 Infinity",
    precioMes: 40.9,
    destacada: false,
    badge: null as string | null,
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "1 móvil ilimitado 5G" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    detalles: [
      "Fibra óptica 600Mb simétrica",
      "1 línea móvil con datos ilimitados en 5G",
      "Llamadas ilimitadas nacionales e internacionales",
      "Red MasOrange · cobertura nacional",
      "Router WiFi 6 incluido",
      "Instalación incluida",
      "Sin permanencia",
    ],
    waMsg: (a: boolean) => a
      ? `Quiero Arista 600 Infinity ANUAL — Fibra 600Mb + Móvil ilimitado por ${desc(40.9)}€/mes.`
      : "Quiero Arista 600 Infinity — Fibra 600Mb + Móvil ilimitado 5G por 40,90€/mes.",
  },
  {
    slug: "pack-familiar-full",
    nombre: "Pack Familiar Full",
    precioMes: 60,
    destacada: false,
    badge: "Lo más completo" as string | null,
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "3 móviles ilimitados 5G" },
      { icon: <IconTV />,     texto: "TV + Fijo incluidos" },
    ],
    detalles: [
      "Fibra óptica 600Mb simétrica",
      "3 líneas móviles con datos ilimitados en 5G",
      "Llamadas ilimitadas nacionales e internacionales",
      "TV con canales premium incluida",
      "Línea fija incluida",
      "Red MasOrange · cobertura nacional",
      "Router WiFi 6 incluido",
      "Instalación incluida",
      "Sin permanencia",
    ],
    waMsg: (a: boolean) => a
      ? `Quiero Pack Familiar Full ANUAL — Fibra 600Mb + 3 móviles ilimitados + TV + Fijo por ${desc(60)}€/mes.`
      : "Quiero Pack Familiar Full — Fibra 600Mb + 3 móviles ilimitados + TV + Fijo por 60€/mes.",
  },
];


/* ── Componente principal ───────────────────────────────── */
function TarjetaCard({ c, anual }: { c: (typeof CARDS)[number]; anual: boolean }) {
  const precioStr = anual ? desc(c.precioMes) : c.precioMes.toFixed(2).replace(".", ",");
  const [entero, decimal] = precioStr.split(",");
  const precioOriginalStr = c.precioMes.toFixed(2).replace(".", ",");
  return (
    <div className={`rounded-2xl bg-white flex flex-col relative overflow-visible transition-all duration-300
      ${c.destacada ? "border-2 border-[#0D47A1] shadow-xl" : "border border-gray-200 shadow-sm hover:shadow-md"}`}>
      {c.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] text-black whitespace-nowrap shadow-sm"
            style={{ backgroundColor: "#FFB800", fontWeight: 700 }}>★ {c.badge}</span>
        </div>
      )}
      <div className="flex items-start justify-between px-4 pb-3 pt-6">
        <div>
          <div className="relative inline-block">
            <div className="flex items-end gap-0.5 leading-none">
              <span className="text-[40px] leading-none tracking-tighter text-[#1648D8]" style={{ fontWeight: 800 }}>{entero}</span>
              <div className="mb-1">
                <span className="text-base text-[#1648D8]" style={{ fontWeight: 700 }}>,{decimal}€</span>
                <p className="text-[10px] text-gray-400 leading-none">/mes</p>
              </div>
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#1648D8]" />
          </div>
          {anual
            ? <p className="text-[10px] text-gray-400 mt-1.5 line-through">{precioOriginalStr}€ sin descuento</p>
            : <p className="text-[10px] text-gray-400 mt-1.5">Precio final</p>}
        </div>
      </div>
      <div className="h-px bg-gray-100 mx-4" />
      <div className="px-4 py-3 flex flex-col gap-2 flex-1">
        <p className="text-[11px] uppercase tracking-[0.15em] text-[#1648D8] mb-0.5" style={{ fontWeight: 700 }}>{c.nombre}</p>
        {c.lineas.map((l, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
            <span className="text-gray-400">{l.icon}</span>{l.texto}
          </div>
        ))}
      </div>
      <div className="px-4 pb-4 flex flex-col gap-1.5">
        {anual && <p className="text-center text-[10px] text-[#00B96B]" style={{ fontWeight: 600 }}>Ahorra {((c.precioMes - c.precioMes * 0.9) * 12).toFixed(0)}€ al año</p>}
        <a href={`https://wa.me/${WA}?text=${encodeURIComponent(c.waMsg(anual))}`}
          target="_blank" rel="noopener noreferrer"
          className="block w-full rounded-xl py-2.5 text-center text-xs text-black transition-colors hover:opacity-90"
          style={{ backgroundColor: "#00B96B", fontWeight: 600 }}>Lo quiero</a>
        <Link href={`/tarifas/${c.slug}`}
          className="block w-full text-center text-xs text-gray-400 hover:text-[#1648D8] transition-colors py-0.5 underline underline-offset-2">
          Más información →
        </Link>
      </div>
    </div>
  );
}

export default function HomeCards() {
  const [anual, setAnual] = useState(false);

  return (
    <section className="bg-[#F5F6F8] py-10">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">

        {/* Toggle */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <span className={`text-sm transition-colors ${!anual ? "text-[#1A1A1A] font-semibold" : "text-gray-400"}`}>Mensual</span>
          <button
            onClick={() => setAnual(!anual)}
            aria-label="Cambiar ciclo de facturación"
            className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none ${anual ? "bg-[#1648D8]" : "bg-gray-200"}`}
          >
            <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${anual ? "translate-x-8" : "translate-x-1"}`} />
          </button>
          <span className={`text-sm transition-colors ${anual ? "text-[#1A1A1A] font-semibold" : "text-gray-400"}`}>Anual</span>
          {anual && (
            <span className="rounded-full bg-[#00B96B] px-2.5 py-0.5 text-[11px] text-black" style={{ fontWeight: 700 }}>
              −10% · 2 meses gratis
            </span>
          )}
        </div>

        {/* Fila 1 — 3 cards: 24,90 / 35,90 / 40,90 */}
        <div className="grid gap-4 sm:grid-cols-3 items-stretch mb-4">
          {CARDS.slice(0, 3).map((c) => <TarjetaCard key={c.nombre} c={c} anual={anual} />)}
        </div>

        {/* Fila 2 — card 60€ + card Crear mi combo */}
        <div className="grid gap-4 sm:grid-cols-2 items-stretch max-w-[680px] mx-auto mb-6">
          {CARDS.slice(3).map((c) => <TarjetaCard key={c.nombre} c={c} anual={anual} />)}

          {/* Card Crear mi combo */}
          <div className="rounded-2xl flex flex-col overflow-hidden border-2 border-dashed border-[#1648D8] bg-white shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col items-center justify-center flex-1 px-6 py-10 text-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E3F2FD]">
                <svg className="h-7 w-7 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-[#1648D8] mb-1" style={{ fontWeight: 700 }}>A tu medida</p>
                <h3 className="text-xl text-[#1A1A1A] leading-snug" style={{ fontWeight: 800 }}>Crear mi combo</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">Elige fibra, líneas móviles y extras.<br />Solo lo que necesitas, al precio justo.</p>
              </div>
              <Link href="/combo"
                className="mt-2 block w-full rounded-xl py-3 text-center text-sm text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: "#1648D8", fontWeight: 600 }}>
                Diseñar mi combo →
              </Link>
            </div>
          </div>
        </div>

        {/* Banner azul — Calcular ahorro */}
        <div className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ backgroundColor: "#1648D8" }}>
          <div className="text-center sm:text-left">
            <p className="text-[11px] uppercase tracking-[0.25em] text-white/60 mb-1" style={{ fontWeight: 600 }}>💰 Gratis · Sin compromiso</p>
            <h3 className="text-lg text-white" style={{ fontWeight: 800 }}>Descubre cuánto de más estás pagando</h3>
            <p className="mt-1 text-sm text-white/65">Compara tu factura actual con Arista. En 5 segundos.</p>
          </div>
          <Link href="/calculadora-ahorro"
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm text-[#1648D8] hover:bg-white/90 transition-colors whitespace-nowrap shadow"
            style={{ fontWeight: 700 }}>
            Calcular ahorro en 5 seg →
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400">
          ¿Quieres ver el tarifario completo?{" "}
          <Link href="/fibra-y-movil" className="text-[#0D47A1] underline underline-offset-2 hover:text-[#1565C0] transition-colors">
            Ver todos los packs →
          </Link>
        </p>

        {/* Nota de permanencia */}
        <p className="mt-4 text-center text-[11px] text-gray-400 max-w-xl mx-auto">
          * Sin permanencia. Si causas baja antes de los 3 primeros meses se aplica un cargo de instalación de 150€ + IVA.
        </p>
      </div>

    </section>
  );
}
