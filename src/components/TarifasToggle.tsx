"use client";

import { useState } from "react";
import Link from "next/link";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

/* ─── SVG icons ─── */
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

/* Descuento anual: 10% (2 meses gratis sobre 12) */
function aplicarDescuento(precio: number): string {
  return (precio * 0.9).toFixed(2).replace(".", ",");
}

const TARJETAS = [
  // ── Arista 600 Infinity ─────────────────────────────────────────
  {
    slug: "fibra-600-movil-60gb",
    nombre: "Arista 600 Infinity",
    precioMes: 32.9,
    destacada: false,
    badge: null,
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "1 móvil 60GB 5G" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: (anual: boolean) => anual
      ? `Quiero Arista 600 Infinity 60GB ANUAL por ${aplicarDescuento(32.9)}€/mes.`
      : "Quiero Arista 600 Infinity — Fibra 600Mb + Móvil 60GB 5G por 32,90€/mes.",
  },
  {
    slug: "fibra-600-movil-80gb",
    nombre: "Arista 600 Infinity",
    precioMes: 33.9,
    destacada: false,
    badge: null,
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "1 móvil 80GB 5G" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: (anual: boolean) => anual
      ? `Quiero Arista 600 Infinity 80GB ANUAL por ${aplicarDescuento(33.9)}€/mes.`
      : "Quiero Arista 600 Infinity — Fibra 600Mb + Móvil 80GB 5G por 33,90€/mes.",
  },
  {
    slug: "pack-pareja-600",
    nombre: "Arista 600 Infinity",
    precioMes: 35.9,
    destacada: false,
    badge: null,
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "2 móviles 30GB 5G" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: (anual: boolean) => anual
      ? `Quiero Arista 600 Infinity Pareja ANUAL — Fibra 600Mb + 2×30GB por ${aplicarDescuento(35.9)}€/mes.`
      : "Quiero Arista 600 Infinity — Fibra 600Mb + 2 móviles 30GB 5G por 35,90€/mes.",
  },
  // ── Arista 1000 Ultra ───────────────────────────────────────────
  {
    slug: "pack-pareja-1000",
    nombre: "Arista 1000 Ultra",
    precioMes: 37.95,
    destacada: false,
    badge: null,
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 1Gb simétrica" },
      { icon: <IconMobile />, texto: "2 móviles 30GB 5G" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: (anual: boolean) => anual
      ? `Quiero Arista 1000 Ultra Pareja ANUAL — Fibra 1Gb + 2×30GB por ${aplicarDescuento(37.95)}€/mes.`
      : "Quiero Arista 1000 Ultra — Fibra 1Gb + 2 móviles 30GB 5G por 37,95€/mes.",
  },
  {
    slug: "fibra-1000-movil-80gb",
    nombre: "Arista 1000 Ultra",
    precioMes: 38.9,
    destacada: false,
    badge: null,
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 1Gb simétrica" },
      { icon: <IconMobile />, texto: "1 móvil 80GB 5G" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: (anual: boolean) => anual
      ? `Quiero Arista 1000 Ultra 80GB ANUAL — Fibra 1Gb + Móvil 80GB por ${aplicarDescuento(38.9)}€/mes.`
      : "Quiero Arista 1000 Ultra — Fibra 1Gb + Móvil 80GB 5G por 38,90€/mes.",
  },
  {
    slug: "fibra-1000-ultra",
    nombre: "Arista 1000 Ultra",
    precioMes: 40.9,
    destacada: true,
    badge: "Más completo",
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 1Gb simétrica" },
      { icon: <IconMobile />, texto: "1 móvil Ilimitado 5G" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: (anual: boolean) => anual
      ? `Quiero Arista 1000 Ultra Ilimitado ANUAL — Fibra 1Gb + Móvil Ilimitado por ${aplicarDescuento(40.9)}€/mes.`
      : "Quiero Arista 1000 Ultra — Fibra 1Gb + Móvil Ilimitado 5G por 40,90€/mes.",
  },
];

/* ── Tarjeta reutilizable — mismo diseño que FibraCards ─────────── */
function TarjetaCard({ c, anual }: { c: typeof TARJETAS[number]; anual: boolean }) {
  const precioStr = anual
    ? aplicarDescuento(c.precioMes)
    : c.precioMes.toFixed(2).replace(".", ",");
  const [entero, decimal] = precioStr.split(",");
  const precioOriginalStr = c.precioMes.toFixed(2).replace(".", ",");

  return (
    <div className={`rounded-2xl bg-white flex flex-col h-full relative overflow-visible transition-all duration-300 ${
      c.destacada ? "border-2 border-[#0D47A1] shadow-xl" : "border border-gray-200"
    }`}>
      {c.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] text-black whitespace-nowrap shadow-sm"
            style={{ backgroundColor: "#FFB800", fontWeight: 700 }}>
            ★ {c.badge}
          </span>
        </div>
      )}
      {/* Precio — mismo estilo azul que FibraCards */}
      <div className={`px-6 pb-4 ${c.badge ? "pt-8" : "pt-7"}`}>
        <div className="flex items-end gap-0.5 leading-none">
          <span className="text-[56px] leading-none tracking-tighter text-[#1648D8]" style={{ fontWeight: 800 }}>{entero}</span>
          <div className="mb-1.5">
            <span className="text-xl text-[#1648D8]" style={{ fontWeight: 700 }}>,{decimal}€</span>
            <p className="text-[11px] text-gray-400 leading-none">/mes</p>
          </div>
        </div>
        {anual
          ? <p className="text-[11px] text-gray-400 mt-0.5 line-through">{precioOriginalStr}€ sin descuento</p>
          : <p className="text-[11px] text-gray-400 mt-0.5">Precio final</p>
        }
      </div>
      <div className="h-px bg-gray-100 mx-6" />
      <div className="px-6 pt-4 pb-0">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#1648D8]" style={{ fontWeight: 700 }}>{c.nombre}</p>
      </div>
      <div className="px-6 pt-3 pb-5 flex flex-col gap-3 flex-1">
        {c.lineas.map((l, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
            <span className="text-gray-400">{l.icon}</span>
            {l.texto}
          </div>
        ))}
        <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Quiero añadir líneas adicionales a mi tarifa de Arista.")}`}
          target="_blank" rel="noopener noreferrer"
          className="mt-1 text-sm text-[#0D47A1] hover:underline" style={{ fontWeight: 500 }}>
          + Añade líneas adicionales
        </a>
      </div>
      <div className="px-6 pb-6 flex flex-col gap-2">
        {anual && (
          <p className="text-center text-[11px] text-[#00B96B]" style={{ fontWeight: 600 }}>
            Ahorra {((c.precioMes - c.precioMes * 0.9) * 12).toFixed(0)}€ al año
          </p>
        )}
        <a href={`https://wa.me/${WA}?text=${encodeURIComponent(c.waMsg(anual))}`}
          target="_blank" rel="noopener noreferrer"
          className="block w-full rounded-xl py-3 text-center text-sm text-black transition-colors hover:opacity-90"
          style={{ backgroundColor: "#00B96B", fontWeight: 600 }}>
          Lo quiero
        </a>
        <Link href={`/tarifas/${c.slug}`}
          className="block w-full text-center text-sm text-gray-400 hover:text-[#1648D8] transition-colors py-1 underline underline-offset-2">
          Más información →
        </Link>
      </div>
    </div>
  );
}

export default function TarifasToggle() {
  const [anual, setAnual] = useState(false);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

        {/* Cabecera + toggle */}
        <div className="mb-10 flex flex-col items-center gap-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]">Tarifas</p>
          <h2 className="text-3xl text-[#1A1A1A] tracking-tight lg:text-4xl" style={{ fontWeight: 700 }}>
            Elige tu pack
          </h2>

          {/* Toggle mensual / anual */}
          <div className="flex items-center gap-3">
            <span className={`text-sm transition-colors ${!anual ? "text-[#1A1A1A] font-semibold" : "text-gray-400"}`}>
              Mensual
            </span>

            <button
              onClick={() => setAnual(!anual)}
              aria-label="Cambiar ciclo de facturación"
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1648D8]
                ${anual ? "bg-[#1648D8]" : "bg-gray-200"}`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300
                  ${anual ? "translate-x-8" : "translate-x-1"}`}
              />
            </button>

            <span className={`text-sm transition-colors ${anual ? "text-[#1A1A1A] font-semibold" : "text-gray-400"}`}>
              Anual
            </span>

            {anual && (
              <span className="rounded-full bg-[#00B96B] px-2.5 py-0.5 text-[11px] text-black" style={{ fontWeight: 700 }}>
                −10% · 2 meses gratis
              </span>
            )}
          </div>

          {anual && (
            <p className="text-xs text-gray-400">
              Pagas mensualmente el precio con descuento. Compromiso anual sin permanencia forzosa.
            </p>
          )}
        </div>

        {/* ── Grupo 600 Mb ── */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF]">
                <svg className="h-5 w-5 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <p className="text-lg text-[#1A1A1A]" style={{ fontWeight: 800 }}>Arista 600 Infinity</p>
                <p className="text-sm text-gray-400">Fibra 600 Mb simétrica + líneas móviles · desde 32,90€/mes</p>
              </div>
            </div>
            <div className="flex-1 h-px bg-gray-100" />
            <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-xs text-[#1648D8] whitespace-nowrap" style={{ fontWeight: 700 }}>
              3 opciones
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {TARJETAS.filter(c => c.slug.includes("600")).map((c, i) => <TarjetaCard key={c.slug + i} c={c} anual={anual} />)}
          </div>
        </div>

        {/* ── Grupo 1000 Mb ── */}
        <div className="mb-12">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FEF3C7]">
                <svg className="h-5 w-5 text-[#D97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-lg text-[#1A1A1A]" style={{ fontWeight: 800 }}>Arista 1000 Ultra</p>
                <p className="text-sm text-gray-400">Fibra 1 Gb simétrica + líneas móviles · desde 37,95€/mes</p>
              </div>
            </div>
            <div className="flex-1 h-px bg-gray-100" />
            <span className="rounded-full bg-[#FEF3C7] px-3 py-1 text-xs text-[#D97706] whitespace-nowrap" style={{ fontWeight: 700 }}>
              3 opciones
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {TARJETAS.filter(c => c.slug.includes("1000")).map((c, i) => <TarjetaCard key={c.slug + i} c={c} anual={anual} />)}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          ¿Buscas solo fibra o más opciones?{" "}
          <Link href="/tarifas" className="text-[#0D47A1] underline underline-offset-2 hover:text-[#1565C0] transition-colors">
            Ver todas las tarifas →
          </Link>
        </p>

        {/* Nota de permanencia */}
        <p className="mt-3 text-center text-[11px] text-gray-400 max-w-xl mx-auto">
          * Sin permanencia. Si causas baja antes de los 3 primeros meses se aplica un cargo de instalación de 150€ + IVA.
        </p>
      </div>
    </section>
  );
}
