"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const WA_MSG = encodeURIComponent("Hola, quiero información sobre el pack Fibra + Energía de Arista.");

const VELOCIDADES = [
  { label: "300 Mb",   precio: 25.0,  fibra: "300 Mb",   desc: "Pareja — 2 móviles 30GB", movil: "2 líneas 30GB 5G" },
  { label: "600 Mb",   precio: 28.9,  fibra: "600 Mb",   desc: "Ideal para hogares",       movil: "1 línea 80GB 5G" },
  { label: "1.000 Mb", precio: 30.0,  fibra: "1.000 Mb", desc: "Máxima velocidad",          movil: "1 línea 80GB 5G" },
];

function formatPrice(p: number) {
  const s = p.toFixed(2).replace(".", ",");
  const i = s.indexOf(",");
  return { entero: s.slice(0, i), decimal: s.slice(i) };
}

const ICON_LUZ   = "M13 10V3L4 14h7v7l9-11h-7z";
const ICON_FIBRA = "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6";
const ICON_MOVIL = "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z";
const ICON_CHECK = "M5 13l4 4L19 7";

const PROBLEMAS = [
  { emoji: "📄", t: "Facturas imposibles de entender",       d: "Con Arista la factura cabe en una pantalla. Ves exactamente qué pagas y por qué." },
  { emoji: "📞", t: "Atención al cliente de robots",         d: "En Arista hay personas reales. Responden rápido y saben de lo que hablan." },
  { emoji: "📈", t: "Cambios de precio sin avisar",          d: "Tu precio del kWh es fijo. Siempre te avisamos antes de cualquier modificación." },
  { emoji: "🏢", t: "Tres compañías distintas",              d: "Con Arista tienes todo en una sola empresa. Un recibo, una app, un asesor." },
  { emoji: "🔧", t: "Nadie revisa tu potencia",              d: "Tu asesor optimiza la potencia cada año y te avisa si algo no cuadra." },
  { emoji: "📋", t: "Contratos eternos con letra pequeña",   d: "Contratas en 5 minutos, sin permanencia y con condiciones completamente claras." },
];

const COMPARATIVA = [
  { label: "Precio del kWh fijo y transparente",    arista: true,  grandes: true,  digitales: true  },
  { label: "Factura clara en una sola pantalla",    arista: true,  grandes: false, digitales: null  },
  { label: "Asesor energético personal",            arista: true,  grandes: false, digitales: false },
  { label: "Atención por WhatsApp sin esperas",     arista: true,  grandes: false, digitales: null  },
  { label: "Optimización de potencia incluida",     arista: true,  grandes: false, digitales: false },
  { label: "Bundle Luz + Fibra en un recibo",       arista: true,  grandes: null,  digitales: false },
  { label: "Aviso previo antes de subir el precio", arista: true,  grandes: false, digitales: null  },
  { label: "2 meses gratis al contratar",           arista: true,  grandes: false, digitales: false },
];

const FACTURA_ITEMS = [
  { id: "potencia",  dot: "#1648D8", label: "Potencia facturada",  importe: "12,50 €",
    titulo: "Potencia (coste fijo)",
    desc: "Pagas siempre, uses o no uses la luz. Depende de los kW contratados. Con Arista te ayudamos a ajustarlo al mínimo necesario." },
  { id: "energia",   dot: "#00B96B", label: "Energía consumida",   importe: "33,32 €",
    titulo: "Energía (coste variable)",
    desc: "Lo que realmente gastas. Se calcula multiplicando los kWh por el precio unitario. Con Arista ese precio es FIJO de por vida." },
  { id: "impuesto",  dot: "#F59E0B", label: "Impuesto eléctrico",  importe: "2,34 €",
    titulo: "Impuesto eléctrico (5,11%)",
    desc: "Es un impuesto obligatorio del Estado que paga todo el mundo. Ninguna comercializadora puede eliminarlo." },
  { id: "contador",  dot: "#6B7280", label: "Alquiler del contador", importe: "0,81 €",
    titulo: "Alquiler del contador",
    desc: "Coste fijo mensual por el equipo de medida. Es igual para todas las comercializadoras." },
  { id: "iva",       dot: "#7C3AED", label: "IVA (21%)",            importe: "10,28 €",
    titulo: "IVA (21%)",
    desc: "Impuesto sobre el valor añadido. Se aplica sobre el subtotal. Obligatorio por ley." },
];

function CheckIcon({ val }: { val: boolean | null }) {
  if (val === true)  return <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#DCFCE7] mx-auto"><svg className="h-4 w-4 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={ICON_CHECK} /></svg></span>;
  if (val === false) return <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FEE2E2] mx-auto"><svg className="h-4 w-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg></span>;
  return <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FEF9C3] mx-auto text-yellow-500 text-sm">—</span>;
}

function WaBtn({ label, msg, style }: { label: string; msg?: string; style?: React.CSSProperties }) {
  const m = msg ?? WA_MSG;
  return (
    <a href={`https://wa.me/${WA}?text=${m}`} target="_blank" rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
      style={{ backgroundColor: "#00B96B", fontWeight: 700, boxShadow: "0 0 20px rgba(0,185,107,0.3)", ...style }}>
      {label}
    </a>
  );
}

export default function FibraEnergiaClient() {
  const [velIdx, setVelIdx] = useState(0);
  const [facturaItem, setFacturaItem] = useState<string | null>(null);
  const vel = VELOCIDADES[velIdx];
  const { entero, decimal } = formatPrice(vel.precio);
  const bundleMsg = encodeURIComponent(
    `Hola, quiero contratar Fibra + Energía de Arista (Luz + Fibra ${vel.fibra} + Móvil 5G) por ${vel.precio.toFixed(2).replace(".", ",")} €/mes.`
  );
  const activeItem = FACTURA_ITEMS.find(f => f.id === facturaItem);

  return (
    <>
      <Header />
      <main className="mt-[108px]">

        {/* ══ 1 · HERO ════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden px-6 py-20 lg:px-8 lg:py-24"
          style={{ background: "linear-gradient(135deg, #04091a 0%, #0d1f5c 45%, #1a3a8f 100%)" }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse, #1648D8, transparent)", filter: "blur(60px)" }} />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[1fr_400px] gap-14 items-center">

              <div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {[
                    { icon: ICON_LUZ,   label: "Luz",   color: "#FFB800", glow: "rgba(255,184,0,0.25)" },
                    { icon: ICON_FIBRA, label: "Fibra", color: "#00E58A", glow: "rgba(0,229,138,0.2)" },
                    { icon: ICON_MOVIL, label: "Móvil", color: "#E91E8C", glow: "rgba(233,30,140,0.2)" },
                  ].map((p) => (
                    <span key={p.label}
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] text-white/90 border"
                      style={{ backgroundColor: p.glow, borderColor: `${p.color}40`, fontWeight: 600 }}>
                      <svg className="h-3.5 w-3.5" style={{ color: p.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={p.icon} />
                      </svg>
                      {p.label}
                    </span>
                  ))}
                </div>

                <h1 className="text-[clamp(32px,5vw,64px)] text-white leading-[1.05] tracking-tight mb-5" style={{ fontWeight: 900 }}>
                  Luz, Fibra y Móvil.<br />
                  <span style={{ background: "linear-gradient(90deg, #00E58A, #FFB800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Todo en una factura.
                  </span>
                </h1>
                <p className="text-base text-white/55 leading-relaxed mb-8 max-w-lg">
                  Un solo recibo. Un asesor personal. Precio del kWh garantizado de por vida.<br />
                  Deja de pagar por separado a tres compañías distintas.
                </p>

                {/* CTA 1 + CTA 2 */}
                <div className="flex flex-wrap gap-3">
                  <WaBtn label="Quiero este pack →" style={{ fontSize: "15px", paddingLeft: "2rem", paddingRight: "2rem" }} />
                  <a href="#configurador"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-8 py-4 text-sm text-white/70 hover:border-white/40 hover:text-white transition-colors"
                    style={{ fontWeight: 600 }}>
                    Ver precios ↓
                  </a>
                </div>
              </div>

              {/* Card servicios */}
              <div className="rounded-3xl border p-6"
                style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.12)", backdropFilter: "blur(16px)" }}>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/35 mb-6" style={{ fontWeight: 700 }}>Incluye todo esto</p>
                <div className="flex flex-col gap-3 mb-6">
                  {[
                    { icon: ICON_LUZ,   color: "#FFB800", glow: "rgba(255,184,0,0.15)",  titulo: "Energía eléctrica",    desc: "Precio fijo 0,119 €/kWh garantizado" },
                    { icon: ICON_FIBRA, color: "#00E58A", glow: "rgba(0,229,138,0.12)",  titulo: "Fibra 600 Mb – 1 Gb",  desc: "Simétrica · Router WiFi · Red Orange" },
                    { icon: ICON_MOVIL, color: "#E91E8C", glow: "rgba(233,30,140,0.12)", titulo: "Línea móvil 5G",        desc: "80 GB · Llamadas ilimitadas · eSIM" },
                  ].map((item) => (
                    <div key={item.titulo}
                      className="flex items-center gap-4 rounded-2xl px-4 py-3.5 border"
                      style={{ backgroundColor: item.glow, borderColor: `${item.color}25` }}>
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl" style={{ backgroundColor: item.color }}>
                        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-white mb-0.5" style={{ fontWeight: 700 }}>{item.titulo}</p>
                        <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl p-4 border" style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}>
                  <p className="text-[11px] text-white/35 mb-1">Desde</p>
                  <div className="flex items-end gap-1 leading-none mb-1">
                    <span className="text-5xl text-white" style={{ fontWeight: 900 }}>28</span>
                    <span className="text-2xl text-white mb-1" style={{ fontWeight: 700 }}>,90€</span>
                    <span className="text-sm text-white/40 mb-1.5">/mes</span>
                  </div>
                  <p className="text-[11px] text-white/35">IVA incluido · Sin permanencia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ TRUST STRIP ════════════════════════════════════════════════ */}
        <section className="border-y border-gray-100 bg-white py-4">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Precio garantizado de por vida", color: "#1648D8" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",                                                                                                                                                                     label: "Alta en 24 horas",              color: "#00B96B" },
                { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",                                                                                                                                              label: "Asesor personal dedicado",      color: "#F59E0B" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",                                                                                              label: "Empresa alicantina",            color: "#7C3AED" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <svg className="h-4 w-4 flex-shrink-0" style={{ color: item.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                  <span className="text-sm text-gray-600" style={{ fontWeight: 600 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 2 · LO QUE SOLUCIONAMOS ════════════════════════════════════ */}
        <section className="bg-[#F5F7FF] py-16 px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>¿Reconoces alguno?</p>
              <h2 className="text-[clamp(22px,3.5vw,36px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>Lo que solucionamos</h2>
              <p className="mt-2 text-sm text-gray-400 max-w-lg mx-auto">Los problemas que tiene casi todo el mundo con la electricidad y cómo Arista los resuelve.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
              {PROBLEMAS.map((p) => (
                <div key={p.t} className="rounded-2xl bg-white border border-gray-100 p-5 hover:shadow-md transition-shadow">
                  <span className="text-2xl mb-3 block">{p.emoji}</span>
                  <p className="text-sm text-[#1A1A1A] mb-1.5 line-through decoration-gray-300" style={{ fontWeight: 600 }}>{p.t}</p>
                  <div className="flex items-start gap-2">
                    <svg className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={ICON_CHECK} />
                    </svg>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.d}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* CTA 3 */}
            <div className="text-center">
              <WaBtn label="Empezar sin compromiso →" />
              <p className="mt-3 text-xs text-gray-400">Sin permanencia · Alta en 24h · Te llamamos si lo prefieres</p>
            </div>
          </div>
        </section>

        {/* ══ 3 · CONFIGURADOR ═══════════════════════════════════════════ */}
        <section id="configurador" className="bg-white py-20 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>Configura tu pack</p>
              <h2 className="text-[clamp(22px,3.5vw,36px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>Elige la velocidad de fibra</h2>
              <p className="mt-2 text-sm text-gray-400">Luz, móvil y todo lo demás ya está incluido.</p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                {/* Selector oscuro */}
                <div className="relative p-8 flex flex-col gap-6"
                  style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1648D8 100%)" }}>
                  <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                  <div className="relative z-10 flex flex-col gap-6">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-3" style={{ fontWeight: 700 }}>Velocidad de fibra</p>
                      <div className="grid grid-cols-2 gap-3">
                        {VELOCIDADES.map((v, i) => (
                          <button key={v.label} onClick={() => setVelIdx(i)}
                            className="rounded-2xl px-4 py-4 text-left transition-all duration-200"
                            style={{
                              backgroundColor: velIdx === i ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.07)",
                              border: velIdx === i ? "2px solid rgba(255,255,255,0.5)" : "2px solid rgba(255,255,255,0.12)",
                            }}>
                            <p className="text-base text-white" style={{ fontWeight: 800 }}>{v.label}</p>
                            <p className="text-[11px] text-white/50">{v.desc}</p>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-2" style={{ fontWeight: 700 }}>Tu precio mensual</p>
                      <div className="flex items-end gap-1 leading-none mb-1">
                        <span className="text-[72px] leading-none tracking-tighter text-white" style={{ fontWeight: 900 }}>{entero}</span>
                        <div className="mb-3">
                          <span className="text-3xl text-white" style={{ fontWeight: 700 }}>{decimal}€</span>
                          <p className="text-xs text-white/40">/mes</p>
                        </div>
                      </div>
                      <p className="text-xs text-white/40">Luz + Fibra {vel.fibra} + Móvil 5G · IVA incluido</p>
                    </div>
                    {/* CTA 4 */}
                    <a href={`https://wa.me/${WA}?text=${bundleMsg}`}
                      target="_blank" rel="noopener noreferrer"
                      className="block w-full rounded-2xl py-4 text-center text-sm text-black hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
                      Contratar por {vel.precio.toFixed(2).replace(".", ",")} €/mes →
                    </a>
                    <p className="text-center text-[11px] text-white/35">Sin permanencia · Alta en 24h · Precio garantizado</p>
                  </div>
                </div>

                {/* Qué incluye */}
                <div className="bg-white p-8 flex flex-col gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4" style={{ fontWeight: 700 }}>Qué incluye</p>
                    <div className="flex flex-col gap-3">
                      {[
                        { icon: ICON_LUZ,   color: "#F59E0B", bg: "#FEF3C7", titulo: "Luz",                desc: "Precio fijo kWh garantizado de por vida" },
                        { icon: ICON_FIBRA, color: "#1648D8", bg: "#EEF2FF", titulo: `Fibra ${vel.fibra}`, desc: "1er mes completamente gratis" },
                        { icon: ICON_MOVIL, color: "#00B96B", bg: "#DCFCE7", titulo: "Móvil 5G 80GB",      desc: "Llamadas ilimitadas · eSIM compatible" },
                      ].map((item) => (
                        <div key={item.titulo} className="flex items-center gap-3 rounded-xl p-3" style={{ backgroundColor: item.bg }}>
                          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: item.color }}>
                            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{item.titulo}</p>
                            <p className="text-xs text-gray-500">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="h-px bg-gray-100" />
                  <div className="flex flex-col gap-2.5">
                    {[
                      { t: "Un solo recibo",       d: "Luz + Fibra + Móvil juntos" },
                      { t: "70 € de bienvenida",   d: "35€ mes 3 + 35€ mes 6" },
                      { t: "GBs acumulables",      d: "No caducan nunca" },
                      { t: "Precio garantizado",   d: "De por vida. Sin asteriscos" },
                      { t: "Sin permanencia",      d: "Cancela cuando quieras" },
                    ].map((v) => (
                      <div key={v.t} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EEF2FF]">
                          <svg className="h-3 w-3 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={ICON_CHECK} />
                          </svg>
                        </div>
                        <div>
                          <span className="text-sm text-[#1A1A1A]" style={{ fontWeight: 600 }}>{v.t}</span>
                          <span className="text-xs text-gray-400 ml-1.5">— {v.d}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 4 · ARISTA FRENTE A LAS DEMÁS ══════════════════════════════ */}
        <section className="bg-[#F5F7FF] py-16 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>Compara y decide con datos</p>
              <h2 className="text-[clamp(22px,3.5vw,36px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>Arista frente a las demás</h2>
              <p className="mt-2 text-sm text-gray-400">No todas las eléctricas son iguales.</p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm">
              {/* Cabecera columnas */}
              <div className="grid grid-cols-[1fr_100px_120px_120px] border-b border-gray-100 px-4 py-3 bg-gray-50">
                <div className="text-xs text-gray-400 uppercase tracking-wider" style={{ fontWeight: 600 }}>Característica</div>
                <div className="text-center">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#1648D8] px-2.5 py-1 text-[11px] text-white" style={{ fontWeight: 700 }}>
                    ✦ Arista
                  </span>
                </div>
                <div className="text-center text-xs text-gray-400" style={{ fontWeight: 600 }}>Grandes<br />eléctricas</div>
                <div className="text-center text-xs text-gray-400" style={{ fontWeight: 600 }}>Eléctricas<br />digitales</div>
              </div>

              {COMPARATIVA.map((row, i) => (
                <div key={row.label}
                  className={`grid grid-cols-[1fr_100px_120px_120px] items-center px-4 py-3 border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                  <span className="text-sm text-gray-700" style={{ fontWeight: 500 }}>{row.label}</span>
                  <div className="flex justify-center"><CheckIcon val={row.arista} /></div>
                  <div className="flex justify-center"><CheckIcon val={row.grandes} /></div>
                  <div className="flex justify-center"><CheckIcon val={row.digitales} /></div>
                </div>
              ))}

              {/* Resultados */}
              <div className="grid grid-cols-[1fr_100px_120px_120px] items-center px-4 py-3 bg-[#F0F4FF] border-t-2 border-[#1648D8]/20">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-400" style={{ fontWeight: 700 }}>Resultado</span>
                <div className="text-center text-[#1648D8] text-sm" style={{ fontWeight: 900 }}>8/8</div>
                <div className="text-center text-gray-400 text-sm" style={{ fontWeight: 700 }}>2/8</div>
                <div className="text-center text-gray-400 text-sm" style={{ fontWeight: 700 }}>4/8</div>
              </div>
            </div>

            {/* Leyenda + CTA 5 */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-[#DCFCE7] border border-[#00B96B]/30 inline-block" />Incluido</span>
                <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-[#FEF9C3] border border-yellow-300/50 inline-block" />Parcial o según plan</span>
                <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-[#FEE2E2] border border-red-300/50 inline-block" />No disponible</span>
              </div>
              <WaBtn label="Contratar Arista →" />
            </div>
          </div>
        </section>

        {/* ══ 5 · FACTURA INTERACTIVA ════════════════════════════════════ */}
        <section className="bg-white py-16 px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>Transparencia total</p>
              <h2 className="text-[clamp(20px,3vw,32px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>Toca cualquier sección de la factura</h2>
              <p className="mt-2 text-sm text-gray-400">Para ver la explicación sencilla de qué significa cada parte.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 items-start">

              {/* Factura visual */}
              <div className="rounded-3xl border border-gray-200 overflow-hidden shadow-lg">
                <div className="px-5 py-4 flex items-center justify-between"
                  style={{ background: "linear-gradient(90deg, #0d47a1, #1648D8)" }}>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60" style={{ fontWeight: 700 }}>Arista Energía</p>
                    <p className="text-base text-white" style={{ fontWeight: 800 }}>Factura de octubre 2026</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50">Consumo: 280 kWh</p>
                    <p className="text-xl text-white" style={{ fontWeight: 900 }}>59,25 €</p>
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-1" style={{ fontWeight: 700 }}>Toca para saber qué es</p>
                  {FACTURA_ITEMS.map((f) => (
                    <button key={f.id} onClick={() => setFacturaItem(facturaItem === f.id ? null : f.id)}
                      className="flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 border"
                      style={{
                        backgroundColor: facturaItem === f.id ? `${f.dot}12` : "#F9FAFB",
                        borderColor: facturaItem === f.id ? `${f.dot}40` : "transparent",
                      }}>
                      <div className="flex items-center gap-3">
                        <div className="h-3 w-3 rounded-full flex-shrink-0" style={{ backgroundColor: f.dot }} />
                        <span className="text-sm text-gray-700" style={{ fontWeight: 500 }}>{f.label}</span>
                      </div>
                      <span className="text-sm text-[#1A1A1A] flex-shrink-0" style={{ fontWeight: 700 }}>{f.importe}</span>
                    </button>
                  ))}
                  <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100 mt-1">
                    <span className="text-sm text-gray-400">Total</span>
                    <span className="text-base text-[#1648D8]" style={{ fontWeight: 900 }}>59,25 €</span>
                  </div>
                </div>
              </div>

              {/* Panel de explicación */}
              <div>
                {activeItem ? (
                  <div className="rounded-3xl border p-6 transition-all"
                    style={{ backgroundColor: `${activeItem.dot}08`, borderColor: `${activeItem.dot}30` }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-4 w-4 rounded-full" style={{ backgroundColor: activeItem.dot }} />
                      <p className="text-base text-[#1A1A1A]" style={{ fontWeight: 800 }}>{activeItem.titulo}</p>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{activeItem.desc}</p>
                  </div>
                ) : (
                  <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 text-center">
                    <p className="text-3xl mb-3">👆</p>
                    <p className="text-sm text-gray-400" style={{ fontWeight: 600 }}>Toca cualquier sección de la factura para ver su explicación sencilla.</p>
                  </div>
                )}

                <div className="mt-4 rounded-2xl border border-[#1648D8]/20 bg-[#EEF2FF] px-5 py-4">
                  <p className="text-xs text-[#1648D8] mb-2" style={{ fontWeight: 800 }}>LO MÁS IMPORTANTE</p>
                  {[
                    { emoji: "⚡", t: "Potencia", d: "= coste fijo aunque no consumas" },
                    { emoji: "💡", t: "Energía",  d: "= lo que pagas por usar la luz" },
                    { emoji: "🔑", t: "CUPS",     d: "= el DNI de tu instalación" },
                    { emoji: "📊", t: "Total",    d: "= potencia + energía + impuestos" },
                  ].map((x) => (
                    <div key={x.t} className="flex items-center gap-2 py-1 border-b border-[#1648D8]/10 last:border-0">
                      <span>{x.emoji}</span>
                      <span className="text-xs text-[#1648D8]" style={{ fontWeight: 700 }}>{x.t}</span>
                      <span className="text-xs text-[#1648D8]/70">{x.d}</span>
                    </div>
                  ))}
                </div>

                {/* CTA 6 */}
                <Link href="/entender-factura"
                  className="mt-4 flex items-center justify-center gap-2 rounded-2xl border-2 border-[#1648D8]/20 py-3.5 text-sm text-[#1648D8] hover:bg-[#EEF2FF] transition-colors"
                  style={{ fontWeight: 700 }}>
                  Ver guía completa de la factura →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6 · CTA FINAL ══════════════════════════════════════════════ */}
        <section className="relative overflow-hidden py-20 px-6 lg:px-8 text-center"
          style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1648D8 50%, #0891B2 100%)" }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3" style={{ fontWeight: 700 }}>¿Listo?</p>
            <h2 className="text-[clamp(24px,4vw,46px)] text-white mb-3 tracking-tight" style={{ fontWeight: 900 }}>¿Empezamos?</h2>
            <p className="text-sm text-white/50 mb-10">Luz + Fibra + Móvil desde 28,90 €/mes · Un solo recibo · Alta en 24h</p>
            {/* CTA 7 */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <WaBtn label="Solicitar Fibra + Energía →"
                style={{ fontSize: "15px", paddingLeft: "2.5rem", paddingRight: "2.5rem", paddingTop: "1rem", paddingBottom: "1rem", boxShadow: "0 0 32px rgba(0,185,107,0.4)" }} />
              <Link href="/energia"
                className="inline-flex items-center justify-center rounded-2xl border border-white/25 px-9 py-4 text-sm text-white hover:bg-white/10 transition-colors"
                style={{ fontWeight: 600 }}>
                Ver solo energía →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
