"use client";

import { useState } from "react";
import Link from "next/link";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

function aplicarDescuento(precio: number): string {
  return (precio * 0.9).toFixed(2).replace(".", ",");
}

const IconRouter = () => (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const IconWifi = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);
const IconLock = () => (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
  </svg>
);
const IconSpeed = () => (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const FIBRAS = [
  {
    slug: "arista-only-600",
    nombre: "Arista Only 600",
    precioMes: 24.9,
    destacada: false,
    badge: null as string | null,
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconSpeed />,  texto: "Alta velocidad garantizada" },
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
    waMsg: (anual: boolean) => anual
      ? `Quiero Arista Only 600 ANUAL — Fibra 600Mb por ${aplicarDescuento(24.9)}€/mes.`
      : "Quiero Arista Only 600 — Fibra 600Mb por 24,90€/mes.",
  },
  {
    slug: "arista-only-1000",
    nombre: "Arista Only 1000",
    precioMes: 32.9,
    destacada: true,
    badge: "Más velocidad" as string | null,
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 1Gb simétrica" },
      { icon: <IconSpeed />,  texto: "Ultrarrápida · ideal teletrabajo" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    detalles: [
      "Fibra óptica 1Gb simétrica (subida y bajada)",
      "Ideal para teletrabajo y streaming en 4K",
      "Red MasOrange · cobertura nacional",
      "Router WiFi 6 incluido",
      "Instalación incluida",
      "Sin permanencia",
      "Atención al cliente por WhatsApp",
    ],
    waMsg: (anual: boolean) => anual
      ? `Quiero Arista Only 1000 ANUAL — Fibra 1Gb por ${aplicarDescuento(32.9)}€/mes.`
      : "Quiero Arista Only 1000 — Fibra 1Gb por 32,90€/mes.",
  },
];


export default function FibraCards() {
  const [anual, setAnual] = useState(false);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">

        {/* Toggle mensual / anual */}
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

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 items-start">
          {FIBRAS.map((c) => {
            const precioStr = anual
              ? aplicarDescuento(c.precioMes)
              : c.precioMes.toFixed(2).replace(".", ",");
            const [entero, decimal] = precioStr.split(",");
            const precioOriginalStr = c.precioMes.toFixed(2).replace(".", ",");

            return (
              <div key={c.nombre}
                className={`rounded-2xl bg-white flex flex-col relative overflow-visible transition-all duration-300
                  ${c.destacada ? "border-2 border-[#0D47A1] shadow-xl -mt-4" : "border border-gray-200"}`}>

                {c.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] text-black whitespace-nowrap shadow-sm"
                      style={{ backgroundColor: "#FFB800", fontWeight: 700 }}>
                      ★ {c.badge}
                    </span>
                  </div>
                )}

                {/* Precio */}
                <div className={`flex items-start justify-between px-6 pb-4 ${c.badge ? "pt-8" : "pt-7"}`}>
                  <div>
                    <div className="flex items-end gap-0.5 leading-none">
                      <span className="text-[56px] leading-none tracking-tighter text-[#1648D8]" style={{ fontWeight: 800 }}>
                        {entero}
                      </span>
                      <div className="mb-1.5">
                        <span className="text-xl text-[#1648D8]" style={{ fontWeight: 700 }}>,{decimal}€</span>
                        <p className="text-[11px] text-gray-400 leading-none">/mes</p>
                      </div>
                    </div>
                    {anual ? (
                      <p className="text-[11px] text-gray-400 mt-0.5 line-through">{precioOriginalStr}€ sin descuento</p>
                    ) : (
                      <p className="text-[11px] text-gray-400 mt-0.5">Precio final</p>
                    )}
                  </div>
                </div>

                <div className="h-px bg-gray-100 mx-6" />

                {/* Nombre tarifa */}
                <div className="px-6 pt-4 pb-0">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#1648D8]" style={{ fontWeight: 700 }}>{c.nombre}</p>
                </div>

                {/* Líneas */}
                <div className="px-6 pt-3 pb-5 flex flex-col gap-3 flex-1">
                  {c.lineas.map((l, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <span className="text-gray-400">{l.icon}</span>
                      {l.texto}
                    </div>
                  ))}
                  <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Quiero añadir líneas móviles a mi fibra de Arista.")}`}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-1 text-sm text-[#0D47A1] hover:underline" style={{ fontWeight: 500 }}>
                    + Añadir línea móvil
                  </a>
                </div>

                {/* CTA */}
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
                  <Link
                    href={`/tarifas/${c.slug}`}
                    className="block w-full text-center text-sm text-gray-400 hover:text-[#1648D8] transition-colors py-1 underline underline-offset-2">
                    Más información →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          ¿Quieres añadir línea móvil?{" "}
          <Link href="/fibra-y-movil" className="text-[#0D47A1] underline underline-offset-2 hover:text-[#1565C0] transition-colors">
            Ver packs Fibra + Móvil →
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
