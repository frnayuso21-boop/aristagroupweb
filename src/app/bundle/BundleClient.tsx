"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

const VELOCIDADES = [
  { label: "300 Mb",    precio: 25.9,  fibra: "300 Mb",    color: "#7C3AED" },
  { label: "600 Mb",    precio: 28.9,  fibra: "600 Mb",    color: "#1648D8" },
  { label: "1.000 Mb",  precio: 30.0,  fibra: "1.000 Mb",  color: "#00B96B" },
];

const TARIFAS_ENERGIA = [
  {
    nombre: "ARS Base",
    badge: null as string | null,
    destacada: false,
    desc: "Sin cuota mensual. Pagas exactamente lo que consumes.",
    kwhLabel: "Precio fijo kWh",
    kwh: "0,119",
    servicios: [
      { label: "Sin cuota mensual", valor: "0,00 €/mes" },
      { label: "Factura digital",   valor: "incluida"   },
    ],
    color: "#6B7280",
  },
  {
    nombre: "ARS Secured",
    badge: "Más elegido",
    destacada: true,
    desc: "kWh más bajo + asesor energético personal. Incluye suscripción de mantenimiento.",
    kwhLabel: "Precio fijo kWh",
    kwh: "0,119",
    servicios: [
      { label: "Hogar · suscripción", valor: "6,90 €/mes" },
      { label: "Pyme · suscripción",  valor: "9,90 €/mes" },
      { label: "Asesor personal",      valor: "incluido"   },
    ],
    color: "#1648D8",
  },
  {
    nombre: "ARS Prisma",
    badge: "Para empresas",
    destacada: false,
    desc: "Estabilidad frente a subidas del mercado. Incluye suscripción de mantenimiento premium.",
    kwhLabel: "Precio fijo kWh",
    kwh: "0,119",
    servicios: [
      { label: "Hogar · suscripción", valor: "9,90 €/mes"  },
      { label: "Pyme · suscripción",  valor: "14,90 €/mes" },
      { label: "Asesor personal",      valor: "incluido"    },
    ],
    color: "#059669",
  },
];

const CHECK_ITEMS = [
  "Un solo recibo, un solo asesor",
  "70 € de bienvenida (mes 3 + mes 6)",
  "GBs que no gastas no se pierden",
  "Precio garantizado de por vida",
  "Permanencia de 6 meses",
];

function formatPrice(p: number) {
  const str = p.toFixed(2).replace(".", ",");
  const comma = str.indexOf(",");
  return { entero: str.slice(0, comma), decimal: str.slice(comma) };
}

/* ── Icon paths ─────────────────────────────────────────── */
const ICON_LUZ   = "M13 10V3L4 14h7v7l9-11h-7z";
const ICON_FIBRA = "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6";
const ICON_MOVIL = "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z";
const ICON_SHIELD= "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z";
const ICON_BOLT  = "M13 10V3L4 14h7v7l9-11h-7z";

export default function BundleClient() {
  const [velIdx, setVelIdx] = useState(1);
  const vel = VELOCIDADES[velIdx];
  const { entero, decimal } = formatPrice(vel.precio);

  const bundleMsg = encodeURIComponent(
    `Hola, quiero contratar Fibra + Energía de Arista (Luz + Fibra ${vel.fibra} + 2 móviles 5G) por ${vel.precio.toFixed(2).replace(".", ",")} €/mes.`
  );

  return (
    <>
      <Header />
      <main className="mt-[72px]">

        {/* ══════ HERO CARD ════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[#0D1F5C] px-4 pt-14 pb-0 lg:px-0 lg:pt-0">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:min-h-[520px]">

            {/* ── Columna texto ── */}
            <div className="flex flex-col justify-center py-14 px-6 lg:px-14 xl:px-20 lg:py-20">

              {/* Eyebrow */}
              <div className="mb-5 flex flex-wrap gap-2">
                {[
                  { icon: "M13 10V3L4 14h7v7l9-11h-7z",         label: "Luz" },
                  { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Fibra" },
                  { icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", label: "Móvil" },
                ].map((p) => (
                  <span key={p.label} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/80 backdrop-blur-sm" style={{ fontWeight: 600 }}>
                    <svg className="h-3 w-3 text-[#FFB800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={p.icon} />
                    </svg>
                    {p.label}
                  </span>
                ))}
              </div>

              {/* Título */}
              <h1 className="text-[clamp(30px,4.5vw,56px)] text-white leading-[1.05] tracking-tight mb-4" style={{ fontWeight: 900 }}>
                Fibra, Luz y Móvil.<br />
                <span style={{ color: "#00E58A" }}>Todo en una factura.</span>
              </h1>

              <p className="text-base text-white/65 leading-relaxed mb-8 max-w-md" style={{ fontWeight: 400 }}>
                Contrata la luz, la fibra y el móvil juntos y deja de pagar de más.<br />
                Un solo recibo. Un asesor personal. Precio garantizado de por vida.
              </p>

              {/* Ahorro highlight */}
              <div className="mb-8 inline-flex items-center gap-3 rounded-2xl bg-white/10 border border-white/15 px-5 py-3 backdrop-blur-sm w-fit">
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: "#FFB800" }}>
                  <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] text-white/50 leading-none mb-0.5" style={{ fontWeight: 600 }}>Ahorro estimado</p>
                  <p className="text-white leading-none text-base" style={{ fontWeight: 800 }}>Hasta 600 €/año frente a operadoras grandes</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre el pack Fibra + Energía de Arista.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm text-black transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#00B96B", fontWeight: 700 }}
                >
                  Quiero este pack
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a
                  href="#configurador"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/25 px-7 py-3.5 text-sm text-white/80 transition-colors hover:border-white/50 hover:text-white"
                  style={{ fontWeight: 600 }}
                >
                  Ver precios →
                </a>
              </div>
            </div>

            {/* ── Columna imagen ── */}
            <div className="relative hidden lg:block">
              {/* Fondo degradado que mezcla con la imagen */}
              <div className="absolute inset-y-0 left-0 w-24 z-10"
                style={{ background: "linear-gradient(to right, #0D1F5C, transparent)" }} />

              <Image
                src="/bundle-hero.png"
                alt="Mujer feliz ahorrando en su factura de luz y fibra con Arista"
                fill
                className="object-cover object-center"
                priority
                sizes="50vw"
              />

              {/* Badge flotante — ahorro */}
              <div className="absolute bottom-10 left-6 z-20 rounded-2xl bg-white px-5 py-3.5 shadow-2xl">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-0.5" style={{ fontWeight: 700 }}>Tu factura este mes</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl text-[#1648D8]" style={{ fontWeight: 900 }}>28,90 €</span>
                  <span className="text-sm text-gray-300 line-through" style={{ fontWeight: 500 }}>67 €</span>
                </div>
                <p className="text-[11px] text-[#00B96B] mt-0.5" style={{ fontWeight: 700 }}>✓ Ahorrando 38,10 € al mes</p>
              </div>

              {/* Badge flotante — servicios */}
              <div className="absolute top-10 right-6 z-20 rounded-2xl bg-white/10 border border-white/20 px-4 py-3 backdrop-blur-md">
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/60 mb-2" style={{ fontWeight: 700 }}>Incluye</p>
                {["⚡ Luz · 0,119 €/kWh", "🌐 Fibra · hasta 1 Gb", "📱 2 móviles 5G"].map((s) => (
                  <p key={s} className="text-xs text-white leading-relaxed" style={{ fontWeight: 600 }}>{s}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Ola decorativa inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-white" style={{ clipPath: "ellipse(55% 100% at 50% 100%)" }} />
        </section>

        {/* ── TARIFAS ENERGÍA ──────────────────────────────────── */}
        <section className="bg-white px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">

            {/* Eyebrow */}
            <p className="mb-4 text-center text-[11px] uppercase tracking-[0.35em] text-[#1648D8]" style={{ fontWeight: 700 }}>
              Tarifas
            </p>
            <h1 className="mb-2 text-center text-[clamp(26px,4vw,40px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>
              Energía para cada estilo de vida
            </h1>
            <p className="mx-auto mb-12 max-w-lg text-center text-sm text-gray-400">
              El precio que ves es el que pagas. Sin sorpresas al final del mes.
            </p>

            {/* Cards energía */}
            <div className="grid gap-6 sm:grid-cols-3">
              {TARIFAS_ENERGIA.map((t) => (
                <div
                  key={t.nombre}
                  className="relative flex flex-col rounded-2xl bg-white"
                  style={{
                    border: t.destacada ? `2px solid ${t.color}` : "1px solid #E5E7EB",
                    boxShadow: t.destacada ? "0 8px 32px rgba(22,72,216,.13)" : undefined,
                    marginTop: t.destacada ? 0 : 0,
                  }}
                >
                  {/* Badge */}
                  {t.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span
                        className="inline-flex items-center rounded-full px-3.5 py-1 text-[11px] text-white whitespace-nowrap"
                        style={{ backgroundColor: t.color, fontWeight: 700 }}
                      >
                        {t.badge}
                      </span>
                    </div>
                  )}

                  <div className={`flex flex-1 flex-col gap-4 px-5 pb-5 ${t.badge ? "pt-7" : "pt-5"}`}>
                    {/* Nombre + desc */}
                    <div>
                      <h2 className="text-[17px] text-[#1A1A1A]" style={{ fontWeight: 800 }}>{t.nombre}</h2>
                      <p className="mt-1 text-xs leading-relaxed text-gray-400">{t.desc}</p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hola, quiero contratar la tarifa energía ${t.nombre} de Arista Energía.`)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm text-black transition-opacity hover:opacity-85"
                        style={{ backgroundColor: "#00B96B", fontWeight: 600 }}
                      >
                        Contratar {t.nombre}
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      </a>
                      <button className="inline-flex items-center gap-1 rounded-xl border border-gray-200 px-3 py-2 text-xs text-gray-500 transition-colors hover:border-gray-400">
                        Más info
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Energía */}
                    <div>
                      <div className="mb-2 flex items-center gap-1.5">
                        <svg className="h-3.5 w-3.5" style={{ color: t.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICON_BOLT} />
                        </svg>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400" style={{ fontWeight: 700 }}>Energía</span>
                      </div>
                      <div className="flex items-center justify-between rounded-xl bg-[#F5F6F8] px-3.5 py-2">
                        <span className="text-xs text-gray-500">{t.kwhLabel}</span>
                        <span className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{t.kwh} €/kWh</span>
                      </div>
                    </div>

                    {/* Servicios */}
                    <div>
                      <div className="mb-2 flex items-center gap-1.5">
                        <svg className="h-3.5 w-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICON_SHIELD} />
                        </svg>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400" style={{ fontWeight: 700 }}>Servicios</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {t.servicios.map((s) => (
                          <div key={s.label} className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ backgroundColor: t.color }} />
                              <span className="text-xs text-gray-500">{s.label}</span>
                            </div>
                            {s.valor && (
                              <span className="text-xs text-[#1A1A1A]" style={{ fontWeight: 600 }}>{s.valor}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── BUNDLE CARD (full-width, 2 col) ──────────────────── */}
            <div id="configurador" className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="grid lg:grid-cols-2">

                {/* Columna izquierda — configurador */}
                <div className="flex flex-col gap-0 border-b border-gray-100 p-6 lg:border-b-0 lg:border-r lg:p-8">
                  {/* Eyebrow */}
                  <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-gray-400" style={{ fontWeight: 700 }}>
                    Fibra + Energía
                  </p>
                  <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>
                    Luz · Fibra · Móvil
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">Todo en un solo recibo, un solo precio.</p>

                  {/* Precio */}
                  <div className="mt-5 flex items-end gap-0.5 leading-none">
                    <span
                      className="text-[62px] leading-none tracking-tighter transition-colors duration-200"
                      style={{ fontWeight: 900, color: vel.color }}
                    >
                      {entero}
                    </span>
                    <span
                      className="mb-1.5 text-2xl transition-colors duration-200"
                      style={{ fontWeight: 700, color: vel.color }}
                    >
                      {decimal}
                    </span>
                    <span className="mb-1.5 ml-0.5 text-sm text-gray-400">€/mes</span>
                  </div>
                  <p className="mt-1 text-[11px] text-gray-400">2 líneas 5G · 30 GB c/u</p>
                  <p className="text-[11px] text-gray-400">+ 70 € de Bienvenida · 1er mes gratis</p>

                  {/* Selector velocidad */}
                  <div className="mt-5">
                    <p className="mb-2 text-xs text-gray-400" style={{ fontWeight: 600 }}>Velocidad de fibra</p>
                    <div className="grid grid-cols-3 gap-2">
                      {VELOCIDADES.map((v, i) => (
                        <button
                          key={v.label}
                          onClick={() => setVelIdx(i)}
                          className="rounded-xl py-2.5 text-sm transition-all duration-150"
                          style={{
                            fontWeight: 600,
                            backgroundColor: velIdx === i ? v.color : "#F3F4F6",
                            color:           velIdx === i ? "#fff"   : "#6B7280",
                            border:          velIdx === i ? `1.5px solid ${v.color}` : "1.5px solid transparent",
                          }}
                        >
                          {v.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={`https://wa.me/${WA}?text=${bundleMsg}`}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-6 block w-full rounded-2xl py-3.5 text-center text-sm text-black transition-opacity hover:opacity-85"
                    style={{ backgroundColor: "#00B96B", fontWeight: 700 }}
                  >
                    Contratar por {vel.precio.toFixed(2).replace(".", ",")} €/mes →
                  </a>
                  <p className="mt-2 text-center text-[11px] text-gray-400">
                    Precio garantizado para clientes actuales de Arista Energía.
                  </p>
                </div>

                {/* Columna derecha — qué incluye */}
                <div className="flex flex-col gap-5 p-6 lg:p-8">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400" style={{ fontWeight: 700 }}>
                    Qué incluye
                  </p>

                  {/* 3 ítems de producto */}
                  {[
                    {
                      icon: ICON_LUZ,
                      titulo: "Luz",
                      desc:   "Precio fijo garantizado de por vida",
                      color:  "#F59E0B",
                      bg:     "#FEF3C7",
                    },
                    {
                      icon: ICON_FIBRA,
                      titulo: `Fibra ${vel.fibra}`,
                      desc:   "1er mes completamente gratis",
                      color:  vel.color,
                      bg:     "#EEF2FF",
                    },
                    {
                      icon: ICON_MOVIL,
                      titulo: "2 líneas 5G",
                      desc:   "30 GB/mes acumulables por línea",
                      color:  "#00B96B",
                      bg:     "#DCFCE7",
                    },
                  ].map((item) => (
                    <div key={item.titulo} className="flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: item.bg }}
                      >
                        <svg className="h-4.5 w-4.5" style={{ color: item.color, width: 18, height: 18 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{item.titulo}</p>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}

                  <div className="h-px bg-gray-100" />

                  {/* Checklist */}
                  <div className="flex flex-col gap-2.5">
                    {CHECK_ITEMS.map((v) => (
                      <div key={v} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="h-4 w-4 flex-shrink-0 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {v}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── POR QUÉ ARISTA ────────────────────────────────────── */}
        <section className="bg-[#F5F6F8] px-4 py-14 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-2 text-center text-[11px] uppercase tracking-[0.35em] text-[#1648D8]" style={{ fontWeight: 700 }}>
              Por qué Arista
            </p>
            <h2 className="mb-2 text-center text-[clamp(22px,3.5vw,34px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>
              No somos la más barata.
            </h2>
            <p className="mx-auto mb-10 max-w-md text-center text-sm text-gray-400">
              Somos la que no te va a fallar, no te va a subir el precio y va a coger el teléfono cuando llames.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "Precio garantizado de por vida", d: "Lo que pagas hoy es lo que pagarás siempre. Sin asteriscos." },
                { t: "Un solo asesor personal",        d: "Tienes una persona asignada. La misma siempre. La que conoce tu cuenta." },
                { t: "70 € de bienvenida",             d: "Recibes 35 € en el mes 3 y otros 35 € en el mes 6. Sin trucos." },
                { t: "GBs acumulables",                d: "Los gigas que no gastes este mes pasan al siguiente. No se pierden." },
                { t: "Empresa alicantina",             d: "Sede física en Alicante. Personas reales. No un call center." },
                { t: "Gestión conjunta",               d: "Tu móvil, tu fibra y tu luz en una sola factura y un solo contacto." },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl bg-white border border-gray-100 p-5">
                  <p className="text-sm text-[#1A1A1A] mb-1.5" style={{ fontWeight: 700 }}>{item.t}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────────── */}
        <section className="bg-[#1648D8] px-4 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-2 text-[clamp(22px,3.5vw,36px)] text-white" style={{ fontWeight: 800 }}>¿Empezamos?</h2>
            <p className="mb-8 text-sm text-white/60">
              Luz + Fibra + Móvil desde 25,90 €/mes · Un solo recibo · Alta en 24h
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre Fibra + Energía de Arista — Luz + Fibra + Móvil.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm text-black transition-opacity hover:opacity-85"
                style={{ backgroundColor: "#00B96B", fontWeight: 700 }}
              >
                Solicitar Fibra + Energía →
              </a>
              <Link
                href="/energia"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 px-8 py-4 text-sm text-white transition-colors hover:bg-white/10"
                style={{ fontWeight: 600 }}
              >
                Ver solo energía →
              </Link>
            </div>
          </div>
        </section>

        {/* ── LINKS SEO ─────────────────────────────────────────── */}
        <section className="bg-white px-4 py-10">
          <div className="mx-auto max-w-4xl">
            <p className="mb-4 text-[11px] uppercase tracking-widest text-gray-400">También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/",                 label: "Fibra y Móvil" },
                { href: "/energia",          label: "Solo Arista Energía" },
                { href: "/movil",            label: "Tarifas móvil" },
                { href: "/calculadora-ahorro", label: "Calculadora de ahorro" },
                { href: "/cobertura",        label: "Comprobar cobertura" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-600 transition-colors hover:border-[#1648D8] hover:text-[#1648D8]"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
