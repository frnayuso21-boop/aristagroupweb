import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeCards from "@/components/HomeCards";
import { SavingsCalculator, FAQAccordion, SocialProof, ExitIntentPopup } from "@/components/HomeDynamic";

export const metadata: Metadata = {
  title: "Arista Móvil ® | Internet, Energía, Móvil, TV y Empresas",
  description:
    "Arista Móvil — Internet, Energía, Móvil, TV y soluciones para Empresas en Alicante. Red Orange sin permanencia. Alta en 24 horas. Empresa local.",
  alternates: { canonical: "https://aristagroup.es" },
};

const WA  = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const MSG = encodeURIComponent("Hola, quiero más información sobre Arista Group.");

const ventajas = [
  {
    titulo: "Red Orange",
    texto: "Misma cobertura. Sin el precio.",
    icon: (
      <svg className="h-7 w-7 text-[#0D47A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    titulo: "Sin letra pequeña",
    texto: "El precio que ves es el que pagas.",
    icon: (
      <svg className="h-7 w-7 text-[#0D47A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    titulo: "Atención real",
    texto: "WhatsApp directo, sin bots.",
    icon: (
      <svg className="h-7 w-7 text-[#0D47A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2v4l.586-.586z" />
      </svg>
    ),
  },
  {
    titulo: "Sin permanencia",
    texto: "Libre desde el primer día.",
    icon: (
      <svg className="h-7 w-7 text-[#0D47A1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// SVG icons reutilizables
const IconWifi = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);
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

const cards = [
  {
    nombre: "Arista Infinity",
    precioEntero: "40",
    precioDecimal: ",90",
    destacada: false,
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "1 móvil ilimitado 5G" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: "Quiero contratar Arista Infinity — Fibra 600Mb + 1 móvil ilimitado 5G por 40,90€/mes.",
  },
  {
    nombre: "Pack Familiar",
    precioEntero: "60",
    precioDecimal: ",00",
    destacada: true,
    badge: "Lo más recomendado",
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "3 móviles ilimitados 5G" },
      { icon: <IconTV />,     texto: "TV incluida" },
    ],
    waMsg: "Quiero contratar el Pack Familiar — Fibra 600Mb + 3 móviles ilimitados + TV por 60€/mes.",
  },
  {
    nombre: "Pack Pareja",
    precioEntero: "35",
    precioDecimal: ",90",
    destacada: false,
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "2 móviles 30GB 5G" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: "Quiero contratar el Arista Ultra 600 — Fibra 600Mb + 2 móviles 30GB 5G por 35,90€/mes.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>

        {/* ══════ HERO MÓVIL — misma card del hero desktop ═════════════════════════════════════ */}
        {/* mt = 36px (tira top) + 72px (header) + 28px (banner Hogueras móvil) = 136px */}
        <section className="mt-[136px] bg-[#F5F6F8] px-4 pt-5 pb-6 md:hidden">

          {/* Badge superior */}
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] text-black shadow-md whitespace-nowrap"
              style={{ backgroundColor: "#FFB800", fontWeight: 700 }}>
              ★ Más vendido
            </span>
          </div>

          {/* Card blanca — idéntica a la del hero desktop */}
          <div className="rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-visible">
            {/* Precio */}
            <div className="px-5 pt-5 pb-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>Arista Ultra 600</p>
              <div className="flex items-end gap-0.5 leading-none">
                <div className="relative inline-block">
                  {/* Subrayado estilo bolígrafo */}
                  <svg viewBox="0 0 80 10" className="absolute pointer-events-none" fill="none"
                    style={{ bottom: "-6px", left: "-8px", width: "130%", height: "14px" }}>
                    <path d="M 2 6 C 15 4, 30 8, 46 5 C 58 3, 68 7, 78 5"
                      stroke="#FFB800" strokeWidth="1.8" strokeLinecap="round" fill="none"
                      style={{ strokeDasharray: 90, strokeDashoffset: 0, animation: "drawCircle 0.5s 0.45s ease-out both" }}/>
                    <path d="M 4 7.5 C 18 6, 34 9, 50 7 C 62 5, 70 8, 79 6.5"
                      stroke="#FFB800" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.35"
                      style={{ strokeDasharray: 90, strokeDashoffset: 0, animation: "drawCircle 0.5s 0.52s ease-out both" }}/>
                  </svg>
                  <span className="relative text-[46px] leading-none tracking-tighter text-[#1648D8]" style={{ fontWeight: 800 }}>35</span>
                </div>
                <div className="mb-1">
                  <span className="text-xl text-[#1648D8]" style={{ fontWeight: 700 }}>,90€</span>
                  <p className="text-[10px] text-gray-400 leading-none">/mes</p>
                </div>
              </div>
            </div>
            <div className="h-px bg-gray-100 mx-4" />
            {/* Nombre tarifa */}
            <div className="px-5 pt-3 pb-0">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#1648D8]" style={{ fontWeight: 700 }}>Arista Ultra 600</p>
            </div>
            {/* Features */}
            <div className="px-5 pt-2 pb-3 flex flex-col gap-2">
              {[
                { d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", t: "Fibra 600Mb simétrica" },
                { d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", t: "Línea 1 · 30GB 5G" },
                { d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", t: "Línea 2 · 30GB 5G" },
                { d: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z", t: "Sin permanencia" },
              ].map((l) => (
                <div key={l.t} className="flex items-center gap-2 text-[12px] text-gray-600">
                  <svg className="h-4 w-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={l.d} />
                  </svg>
                  {l.t}
                </div>
              ))}
            </div>
            {/* CTA */}
            <div className="px-5 pb-5 pt-2">
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Quiero contratar el Arista Ultra 600 — Fibra 600Mb + 2 líneas 30GB 5G por 35,90€/mes.")}`}
                target="_blank" rel="noopener noreferrer"
                className="block w-full rounded-xl py-2.5 text-center text-sm text-black transition-colors hover:opacity-90"
                style={{ backgroundColor: "#00B96B", fontWeight: 600 }}>
                Lo quiero
              </a>
              <Link href="/fibra-y-movil" className="block text-center text-[11px] text-gray-400 hover:text-gray-600 transition-colors pt-2">
                Ver todos los packs →
              </Link>
            </div>
          </div>
        </section>

        {/* ══════ HERO — card amplia con divisor en S (SOLO DESKTOP) ══════════════════════════ */}
        <section className="mt-[108px] bg-[#F5F6F8] pt-10 pb-8 px-2 lg:px-3 hidden md:block">
          <div className="mx-auto w-full max-w-[2000px]">
            {/* Wrapper relative para que la card flotante no se recorte */}
            <div className="relative">

              {/* Hero card con overflow-hidden (solo para imagen + clip-path) */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl" style={{ height: "460px", backgroundColor: "#0a1a3a" }}>

                {/* Imagen pareja */}
                <div className="absolute right-0 top-0 bottom-0" style={{ width: "52%" }}>
                  <Image
                    src="/pareja-home-hero.png"
                    alt="Pareja feliz con Arista Group en Alicante"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Overlay izquierdo con forma S */}
                <div className="absolute inset-0"
                  style={{
                    background: "#1648D8",
                    clipPath: "polygon(0 0, 62% 0, 52% 50%, 62% 100%, 0 100%)",
                  }} />

                {/* Contenido texto */}
                <div className="absolute inset-0 flex items-center px-10 lg:px-14" style={{ maxWidth: "56%" }}>
                  <div style={{ animation: "fadeUp 0.7s 0.1s cubic-bezier(0.16,1,0.3,1) both" }}>
                    <h1 className="text-[clamp(26px,3.8vw,52px)] text-white leading-tight tracking-tight" style={{ fontWeight: 900 }}>
                      Fibra y móvil<br />en red Orange.<br />
                      <span style={{ color: "#FFD700" }}>Sin el precio.</span>
                    </h1>
                    <p className="mt-3 text-sm text-white/70 max-w-xs">
                      Misma cobertura de Orange. Sin permanencia.<br />Empresa alicantina de verdad.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href="#tarifas"
                        className="rounded-xl bg-[#00B96B] px-6 py-3 text-sm text-black hover:bg-[#009A59] transition-colors shadow-lg" style={{ fontWeight: 700 }}>
                        Ver cuánto ahorro →
                      </a>
                      <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero hablar con un asesor de Arista.")}`} target="_blank" rel="noopener noreferrer"
                        className="rounded-xl border border-white/40 px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors">
                        Hablar con un asesor
                      </a>
                    </div>
                    <div className="mt-5 flex gap-4 flex-wrap">
                      {["Red Orange", "Sin permanencia", "Alta en 24h"].map((t) => (
                        <span key={t} className="text-[11px] text-white/60 flex items-center gap-1">
                          <span style={{ color: "#FFD700" }}>✓</span> {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Card Pack Pareja — flotando sobre el hero */}
              <div className="hidden lg:flex flex-col absolute"
                style={{
                  left: "32%",
                  top: "8%",
                  transform: "translateX(-50%)",
                  width: "250px",
                  animation: "fadeUp 0.7s 0.25s cubic-bezier(0.16,1,0.3,1) both",
                  zIndex: 20,
                }}>
                {/* Badge superior */}
                <div className="flex justify-center mb-2">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] text-black shadow-md whitespace-nowrap"
                    style={{ backgroundColor: "#FFB800", fontWeight: 700 }}>
                    ★ Más vendido
                  </span>
                </div>

                {/* Card blanca */}
                <div className="rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-visible">
                  {/* Precio */}
                  <div className="px-5 pt-5 pb-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>Arista Ultra 600</p>
                    <div className="flex items-end gap-0.5 leading-none">
                      <div className="relative inline-block">
                        {/* Subrayado estilo bolígrafo */}
                        <svg viewBox="0 0 80 10" className="absolute pointer-events-none" fill="none"
                          style={{ bottom: "-6px", left: "-8px", width: "130%", height: "14px" }}>
                          <path d="M 2 6 C 15 4, 30 8, 46 5 C 58 3, 68 7, 78 5"
                            stroke="#FFB800" strokeWidth="1.8" strokeLinecap="round" fill="none"
                            style={{ strokeDasharray: 90, strokeDashoffset: 0, animation: "drawCircle 0.5s 0.45s ease-out both" }}/>
                          <path d="M 4 7.5 C 18 6, 34 9, 50 7 C 62 5, 70 8, 79 6.5"
                            stroke="#FFB800" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.35"
                            style={{ strokeDasharray: 90, strokeDashoffset: 0, animation: "drawCircle 0.5s 0.52s ease-out both" }}/>
                        </svg>
                        <span className="relative text-[46px] leading-none tracking-tighter text-[#1648D8]" style={{ fontWeight: 800 }}>35</span>
                      </div>
                      <div className="mb-1">
                        <span className="text-xl text-[#1648D8]" style={{ fontWeight: 700 }}>,90€</span>
                        <p className="text-[10px] text-gray-400 leading-none">/mes</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-gray-100 mx-4" />
                  {/* Nombre tarifa */}
                  <div className="px-5 pt-3 pb-0">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#1648D8]" style={{ fontWeight: 700 }}>Arista Ultra 600</p>
                  </div>
                  {/* Features */}
                  <div className="px-5 pt-2 pb-3 flex flex-col gap-2">
                    {[
                      { d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", t: "Fibra 600Mb simétrica" },
                      { d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", t: "Línea 1 · 30GB 5G" },
                      { d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", t: "Línea 2 · 30GB 5G" },
                      { d: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z", t: "Sin permanencia" },
                    ].map((l) => (
                      <div key={l.t} className="flex items-center gap-2 text-[12px] text-gray-600">
                        <svg className="h-4 w-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={l.d} />
                        </svg>
                        {l.t}
                      </div>
                    ))}
                  </div>
                  {/* CTA */}
                  <div className="px-5 pb-5 pt-2">
                    <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Quiero contratar el Arista Ultra 600 — Fibra 600Mb + 2 líneas 30GB 5G por 35,90€/mes.")}`}
                      target="_blank" rel="noopener noreferrer"
                      className="block w-full rounded-xl py-2.5 text-center text-sm text-black transition-colors hover:opacity-90"
                      style={{ backgroundColor: "#00B96B", fontWeight: 600 }}>
                      Lo quiero
                    </a>
                    <Link href="/fibra-y-movil" className="block text-center text-[11px] text-gray-400 hover:text-gray-600 transition-colors pt-2">
                      Ver todos los packs →
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══════ STRIP RETO DE LA FACTURA ═════════════════════ */}
        <div className="px-4 py-3 sm:py-4" style={{ background: "linear-gradient(135deg,#F59E0B 0%,#D97706 100%)" }}>
          <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
            <div className="text-center sm:text-left">
              <p className="text-sm text-black" style={{ fontWeight: 800 }}>
                🏆 Reto de la Factura — Gana 1 año GRATIS
              </p>
              <p className="text-xs text-black/60 mt-0.5 hidden sm:block">Sube tu factura · El mayor ahorro gana · Ganador cada mes</p>
            </div>
            <Link href="/reto-factura"
              className="flex-shrink-0 rounded-xl bg-black px-5 py-2 text-sm text-white hover:bg-gray-900 transition-colors whitespace-nowrap"
              style={{ fontWeight: 700 }}>
              Participar en el sorteo →
            </Link>
          </div>
        </div>

        {/* ══════ 4 CARDS HOME ══════════════════════════════════ */}
        <div id="tarifas"><HomeCards /></div>

        {/* ══════ ARISTA BUNDLE — Fibra + Energía ══════════════ */}
        <section className="py-14 px-4 lg:px-6 bg-[#F7F9FF]">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
              <div className="grid lg:grid-cols-2">

                {/* Imagen izquierda — solo desktop */}
                <div className="relative hidden lg:block lg:h-auto min-h-[420px] overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop"
                    alt="Hogar con fibra y energía Arista"
                    fill
                    className="object-cover object-center"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,26,58,0.7) 0%, rgba(22,72,216,0.5) 100%)" }} />
                  {/* Precio flotante */}
                  <div className="absolute bottom-6 left-6">
                    <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-xl">
                      <p className="text-[10px] uppercase tracking-widest text-[#1648D8] mb-0.5" style={{ fontWeight: 700 }}>Desde</p>
                      <p className="text-3xl text-[#1A1A1A] leading-none" style={{ fontWeight: 900 }}>25€<span className="text-base text-gray-400 ml-1">/mes</span></p>
                      <p className="text-xs text-gray-400 mt-0.5">Fibra 300Mb + 2 móviles + Luz</p>
                    </div>
                  </div>
                  {/* Badge TOP */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] text-black shadow" style={{ backgroundColor: "#FFD700", fontWeight: 800 }}>
                      ⚡ TOP — Solo en Arista
                    </span>
                  </div>
                </div>

                {/* Cabecera móvil — solo mobile */}
                <div className="lg:hidden px-6 pt-6 pb-4 flex items-center justify-between" style={{ background: "linear-gradient(135deg,#0a1a3a 0%,#1648D8 100%)" }}>
                  <div>
                    <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] text-black mb-3" style={{ backgroundColor: "#FFD700", fontWeight: 800 }}>
                      ⚡ TOP — Solo en Arista
                    </span>
                    <p className="text-white/70 text-xs">Fibra + Luz + Móvil</p>
                  </div>
                  <div className="rounded-2xl bg-white/15 backdrop-blur-sm p-3 text-center">
                    <p className="text-[10px] text-white/60 uppercase tracking-widest" style={{ fontWeight: 700 }}>Desde</p>
                    <p className="text-2xl text-white leading-none" style={{ fontWeight: 900 }}>25€</p>
                    <p className="text-[10px] text-white/50">/mes</p>
                  </div>
                </div>

                {/* Contenido derecha */}
                <div className="bg-white px-8 py-10 lg:px-10 flex flex-col justify-center">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8] mb-3" style={{ fontWeight: 700 }}>Fibra + Luz + Móvil</p>
                  <h2 className="text-[clamp(24px,3.5vw,40px)] text-[#1A1A1A] leading-tight tracking-tight mb-4" style={{ fontWeight: 900 }}>
                    Todo en una sola factura.<br />
                    <span className="text-[#1648D8]">Sin sorpresas.</span>
                  </h2>
                  <p className="text-base text-gray-500 leading-relaxed mb-6">
                    Arista es la única empresa que combina <strong className="text-[#1A1A1A]">fibra óptica, móvil 5G y luz eléctrica</strong> en un solo contrato. Un precio. Una factura. Una llamada cuando necesitas ayuda.
                  </p>

                  {/* Qué incluye */}
                  <div className="grid gap-3 mb-7">
                    {[
                      { emoji: "⚡", titulo: "Luz a precio justo", desc: "0,119 €/kWh garantizado · Sin subidas sorpresa" },
                      { emoji: "🌐", titulo: "Fibra 300Mb – 1Gb", desc: "Simétrica · Router WiFi · Red Orange" },
                      { emoji: "📱", titulo: "Móvil 5G incluido",  desc: "Desde 30GB · eSIM · Sin permanencia" },
                    ].map((f) => (
                      <div key={f.titulo} className="flex items-start gap-3 rounded-2xl bg-[#F7F9FF] px-4 py-3">
                        <span className="text-xl mt-0.5">{f.emoji}</span>
                        <div>
                          <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{f.titulo}</p>
                          <p className="text-xs text-gray-400">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tarifa destacada */}
                  <div className="rounded-2xl border-2 border-[#1648D8]/20 bg-[#EEF2FF] px-5 py-4 mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-[#1648D8] mb-0.5" style={{ fontWeight: 700 }}>Oferta pareja</p>
                      <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>Fibra 300Mb + 2 móviles 30GB + Luz</p>
                    </div>
                    <p className="text-3xl text-[#1648D8]" style={{ fontWeight: 900 }}>25€<span className="text-sm text-gray-400">/mes</span></p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre Fibra + Energía de Arista.")}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm text-black transition-all hover:opacity-90 shadow-md"
                      style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
                      Contratar ahora →
                    </a>
                    <Link href="/fibra-energia"
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 px-6 py-3.5 text-sm text-[#1648D8] hover:border-[#1648D8]/40 transition-colors"
                      style={{ fontWeight: 600 }}>
                      Ver todos los precios →
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ══════ SERVICIOS ADICIONALES ════════════════════════ */}
        {false && <section className="bg-[#F5F6F8] py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]">Más servicios</span>
            </div>
            <h2 className="mb-8 text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>
              Todo lo que necesitas, en un solo sitio.
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* Protección del hogar */}
              <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E3F2FD]">
                  <svg className="h-6 w-6 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#1648D8] mb-1" style={{ fontWeight: 700 }}>Protección Hogar</p>
                  <h3 className="text-base text-[#1A1A1A] leading-snug" style={{ fontWeight: 700 }}>Seguro del hogar completo</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">Cobertura de daños, robo, incendio y asistencia 24h incluida.</p>
                </div>
                <div className="mt-auto flex items-baseline gap-1">
                  <span className="text-2xl text-[#1648D8]" style={{ fontWeight: 800 }}>9,90</span>
                  <span className="text-sm text-gray-400">€/mes</span>
                </div>
                <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre el seguro de protección del hogar de Arista.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl py-2.5 text-sm text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#1648D8", fontWeight: 600 }}>
                  Lo quiero
                </a>
              </div>

              {/* Energía */}
              <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F5E9]">
                  <svg className="h-6 w-6 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#00B96B] mb-1" style={{ fontWeight: 700 }}>Arista Energía</p>
                  <h3 className="text-base text-[#1A1A1A] leading-snug" style={{ fontWeight: 700 }}>Luz y gas sin sorpresas</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">Precio fijo garantizado. Sin letra pequeña ni penalizaciones.</p>
                </div>
                <div className="mt-auto flex items-baseline gap-1">
                  <span className="text-2xl text-[#1648D8]" style={{ fontWeight: 800 }}>0,119</span>
                  <span className="text-sm text-gray-400">€/kWh</span>
                </div>
                <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre la tarifa de energía de Arista.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl py-2.5 text-sm text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#1648D8", fontWeight: 600 }}>
                  Lo quiero
                </a>
              </div>

              {/* Arista TV */}
              <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF8E1]">
                  <svg className="h-6 w-6 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#F59E0B] mb-1" style={{ fontWeight: 700 }}>Arista TV</p>
                  <h3 className="text-base text-[#1A1A1A] leading-snug" style={{ fontWeight: 700 }}>190 canales TDT + Deportes</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">Cine, deporte y series. TV Total con LALIGA incluida desde 5€.</p>
                </div>
                <div className="mt-auto flex items-baseline gap-1">
                  <span className="text-2xl text-[#1648D8]" style={{ fontWeight: 800 }}>desde 5</span>
                  <span className="text-sm text-gray-400">€/mes</span>
                </div>
                <Link href="/tv"
                  className="block w-full text-center rounded-xl py-2.5 text-sm text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#1648D8", fontWeight: 600 }}>
                  Ver canales
                </Link>
              </div>

              {/* Soluciones Empresa */}
              <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3E8FF]">
                  <svg className="h-6 w-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#7C3AED] mb-1" style={{ fontWeight: 700 }}>Empresas</p>
                  <h3 className="text-base text-[#1A1A1A] leading-snug" style={{ fontWeight: 700 }}>Soluciones para negocios</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">Fibra simétrica, líneas móviles y centralita para autónomos y pymes.</p>
                </div>
                <div className="mt-auto">
                  <span className="text-sm text-gray-400">Presupuesto personalizado</span>
                </div>
                <Link href="/empresas"
                  className="block w-full text-center rounded-xl py-2.5 text-sm text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#1648D8", fontWeight: 600 }}>
                  Ver soluciones
                </Link>
              </div>

            </div>
          </div>
        </section>}

        {/* ══════ RESEÑAS GOOGLE / TRUSTPILOT ════════════════════ */}
        <section className="bg-[#F5F6F8] py-14 px-4 lg:px-6">
          <div className="mx-auto max-w-6xl">
            {/* Cabecera con puntuación */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-6 bg-[#1648D8]" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Opiniones reales</span>
                </div>
                <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>Lo que dicen nuestros clientes</h2>
              </div>
              {/* Score box */}
              <div className="flex items-center gap-3 bg-white rounded-2xl border border-gray-100 px-5 py-3 shadow-sm flex-shrink-0">
                <div className="text-center">
                  <p className="text-3xl text-[#1A1A1A] leading-none" style={{ fontWeight: 900 }}>3.8</p>
                  <div className="flex mt-1">
                    {[1,2,3,4].map(i => (
                      <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="#FFB800">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20">
                      <defs><linearGradient id="hh"><stop offset="80%" stopColor="#FFB800"/><stop offset="80%" stopColor="#E5E7EB"/></linearGradient></defs>
                      <path fill="url(#hh)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-0.5">sobre 5</p>
                </div>
                <div className="h-10 w-px bg-gray-100" />
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-[11px] text-gray-500">Google</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#00B67A">
                      <path d="M12 0l2.545 8.506H24l-7.272 5.255 2.545 8.506L12 17.012 4.727 22.267l2.545-8.506L0 8.506h9.455L12 0z"/>
                    </svg>
                    <span className="text-[11px] text-gray-500">Trustpilot</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 reseñas destacadas */}
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { nombre: "María G.", avatar: "MG", color: "#1648D8", estrellas: 5, fecha: "hace 2 semanas", fuente: "Google",
                  texto: "Llevaba años con Movistar pagando una barbaridad. Cambié a Arista y pago 35€ por fibra 600Mb y 2 móviles. La atención por WhatsApp es increíble.", servicio: "Fibra + Móvil" },
                { nombre: "Carlos M.", avatar: "CM", color: "#0D47A1", estrellas: 4, fecha: "hace 1 mes", fuente: "Google",
                  texto: "Buena relación calidad-precio. La fibra va muy estable y el móvil funciona perfecto en Alicante. Sin permanencia como prometían.", servicio: "Solo Fibra 600Mb" },
                { nombre: "Ana R.", avatar: "AR", color: "#7C3AED", estrellas: 5, fecha: "hace 3 semanas", fuente: "Trustpilot",
                  texto: "Me sorprendió lo fácil que fue darse de alta. Un mensaje de WhatsApp y en 24 horas tenía la fibra funcionando. La factura es exactamente lo que dijeron.", servicio: "Pack Familiar" },
              ].map((r) => (
                <div key={r.nombre} className="rounded-2xl bg-white border border-gray-100 p-5 flex flex-col gap-3 shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-white text-xs"
                        style={{ backgroundColor: r.color, fontWeight: 700 }}>{r.avatar}</div>
                      <div>
                        <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{r.nombre}</p>
                        <p className="text-[11px] text-gray-400">{r.fecha}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {r.fuente === "Google" ? (
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="#00B67A">
                          <path d="M12 0l2.545 8.506H24l-7.272 5.255 2.545 8.506L12 17.012 4.727 22.267l2.545-8.506L0 8.506h9.455L12 0z"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill={i < r.estrellas ? "#FFB800" : "#E5E7EB"}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">&ldquo;{r.texto}&rdquo;</p>
                  <span className="inline-flex self-start rounded-full bg-[#EEF2FF] px-2.5 py-0.5 text-[10px] text-[#1648D8]" style={{ fontWeight: 600 }}>
                    {r.servicio}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link href="/resenas"
                className="inline-flex items-center gap-2 rounded-xl border border-[#1648D8]/30 px-5 py-2.5 text-sm text-[#1648D8] hover:bg-[#EEF2FF] transition-colors"
                style={{ fontWeight: 600 }}>
                Ver todas las reseñas →
              </Link>
            </div>
          </div>
        </section>

        {/* ══════ LOS 5 PORQUÉS ═════════════════════════════════ */}
        <section className="bg-white py-16 px-4 lg:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Sin rodeos</span>
            </div>
            <h2 className="mb-10 text-3xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>
              ¿Por qué Arista y no otra?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
              {[
                { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", titulo: "Hablas con una persona real", texto: "Cuando llamas a Movistar esperas 20 minutos y hablas con un robot. Cuando llamas a Arista te cojo yo el teléfono." },
                { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", titulo: "El precio que ves es el que pagas", texto: "Sin subidas sin avisar. Sin letra pequeña. Sin sorpresas en la factura." },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", titulo: "Somos de aquí", texto: "Empresa alicantina. Conocemos las calles, los barrios, la gente. No somos un call center en Madrid." },
                { icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z", titulo: "Sin permanencia", texto: "Si no estás contento en 30 días te ayudamos a volver. Sin coste. Sin explicaciones." },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", titulo: "Alta en 24 horas", texto: "Gestionamos todo nosotros. Tú no haces nada. En menos de 24 horas estás activo." },
              ].map((b) => (
                <div key={b.titulo} className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-[#F5F6F8] p-6 hover:border-[#1648D8]/30 hover:shadow-sm transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF2FF]">
                    <svg className="h-6 w-6 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={b.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{b.titulo}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{b.texto}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero cambiarme a Arista ahora.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm text-white hover:bg-[#1040C0] transition-colors"
                style={{ backgroundColor: "#1648D8", fontWeight: 700 }}>
                Quiero cambiarme ahora →
              </a>
            </div>
          </div>
        </section>

        {/* ══════ CALCULADORA INLINE ════════════════════════════ */}
        <SavingsCalculator />

        {/* ══════ DOS DIVISIONES ════════════════════════════════ */}
        <section className="bg-white py-16 px-4 lg:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Todo en un lugar</span>
            </div>
            <h2 className="text-3xl text-[#1A1A1A] tracking-tight mb-8" style={{ fontWeight: 800 }}>Todo lo que necesitas en un solo lugar</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Arista Móvil */}
              <div className="rounded-3xl p-8 flex flex-col gap-5" style={{ background: "linear-gradient(135deg,#1648D8 0%,#2563EB 100%)" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-1" style={{ fontWeight: 700 }}>Arista Móvil</p>
                  <h3 className="text-2xl text-white mb-1" style={{ fontWeight: 800 }}>Fibra y Móvil</h3>
                  <p className="text-sm text-white/70">Red Orange · Desde 35,90€/mes · Sin permanencia</p>
                </div>
                <div className="flex flex-col gap-2">
                  {["Fibra 600Mb simétrica", "Móvil ilimitado 5G", "TV incluida en packs"].map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <svg className="h-4 w-4 text-[#00B96B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/movil"
                  className="mt-auto block w-full rounded-xl py-3 text-center text-sm text-[#1648D8] bg-white hover:bg-white/90 transition-colors"
                  style={{ fontWeight: 700 }}>
                  Ver tarifas móvil →
                </Link>
              </div>
              {/* Arista Energía */}
              <div className="rounded-3xl p-8 flex flex-col gap-5" style={{ background: "linear-gradient(135deg,#059669 0%,#10B981 100%)" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                  <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-1" style={{ fontWeight: 700 }}>Arista Energía</p>
                  <h3 className="text-2xl text-white mb-1" style={{ fontWeight: 800 }}>Luz y Gas</h3>
                  <p className="text-sm text-white/70">Para hogares y empresas · Sin sorpresas</p>
                </div>
                <div className="flex flex-col gap-2">
                  {["Precio fijo kWh", "Asesor personal", "Sin permanencia"].map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/80">
                      <svg className="h-4 w-4 text-white flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/energia"
                  className="mt-auto block w-full rounded-xl py-3 text-center text-sm text-[#059669] bg-white hover:bg-white/90 transition-colors"
                  style={{ fontWeight: 700 }}>
                  Ver tarifas energía →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ ARISTA TOTAL ══════════════════════════════════ */}
        <section style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1D9E75 100%)" }} className="py-16 px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* Texto izquierda */}
              <div>
                <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white mb-5" style={{ fontWeight: 700 }}>
                  📱 Móvil · 🌐 Fibra · ⚡ Energía
                </span>
                <h2 className="text-[clamp(32px,5vw,60px)] text-white leading-tight tracking-tight mb-4" style={{ fontWeight: 900 }}>
                  Todo en uno.
                </h2>
                <p className="text-xl text-white/80 leading-snug mb-8 max-w-md" style={{ fontWeight: 600 }}>
                  Tu móvil, tu fibra y tu luz.<br />Un solo número. Una sola llamada.
                </p>
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre Arista Total — Fibra, Móvil y Energía todo en uno.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-base text-black transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
                  Quiero Arista Total
                </a>
              </div>

              {/* Card beneficios derecha */}
              <div className="rounded-3xl bg-white/10 border border-white/20 p-7 backdrop-blur-sm flex flex-col gap-5">
                <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 mb-1" style={{ fontWeight: 700 }}>
                  Gestiona tu fibra, tu móvil y tu luz desde un solo sitio. Una llamada para todo.
                </p>
                {[
                  {
                    titulo: "Un solo contacto",
                    desc: "Cuando hay cualquier problema llamas a una persona real que conoce tu contrato completo.",
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  },
                  {
                    titulo: "Precio bloqueado",
                    desc: "El precio de tu móvil no sube si eres cliente de energía. Y al revés.",
                    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                  },
                  {
                    titulo: "Primer mes de móvil gratis",
                    desc: "Al contratar energía y móvil juntos el primer mes de móvil es regalo.",
                    icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4H5z",
                  },
                ].map((b) => (
                  <div key={b.titulo} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={b.icon} />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white mb-0.5" style={{ fontWeight: 700 }}>{b.titulo}</p>
                      <p className="text-xs text-white/55 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════ PRUEBA SOCIAL CON CONTADOR ════════════════════ */}
        <SocialProof />

        {/* ══════ COMPARATIVA ═══════════════════════════════════ */}
        <section className="bg-white py-16 px-4 lg:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Comparativa 2026</span>
            </div>
            <h2 className="text-3xl text-[#1A1A1A] tracking-tight mb-2" style={{ fontWeight: 800 }}>Arista vs las grandes operadoras</h2>
            <p className="text-sm text-gray-400 mb-8">Datos basados en tarifas públicas. Fibra 600Mb + 1 móvil.</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full min-w-[580px]">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 px-5 text-left text-[11px] uppercase tracking-widest text-gray-400 bg-[#F5F6F8]" style={{ fontWeight: 700 }}>
                      Concepto
                    </th>
                    <th className="py-4 px-5 text-center text-sm bg-[#EEF2FF] relative" style={{ fontWeight: 800 }}>
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#1648D8] px-3 py-0.5 text-[10px] text-white whitespace-nowrap" style={{ fontWeight: 700 }}>Tu elección</span>
                      <span className="text-[#1648D8]">Arista ✓</span>
                    </th>
                    <th className="py-4 px-5 text-center text-sm bg-[#F5F6F8] text-gray-400" style={{ fontWeight: 600 }}>Movistar</th>
                    <th className="py-4 px-5 text-center text-sm bg-[#F5F6F8] text-gray-400" style={{ fontWeight: 600 }}>Orange</th>
                    <th className="py-4 px-5 text-center text-sm bg-[#F5F6F8] text-gray-400" style={{ fontWeight: 600 }}>Vodafone</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { concepto: "Fibra 600Mb + 1 móvil",  arista: "40,90€/mes",     movistar: "~55€/mes",    orange: "~50€/mes",    vodafone: "~55€/mes"    },
                    { concepto: "Solo fibra 600Mb",        arista: "24,90€/mes",     movistar: "~45€/mes",    orange: "~40€/mes",    vodafone: "~42€/mes"    },
                    { concepto: "Red móvil",               arista: "MasOrange 5G",   movistar: "Movistar 5G", orange: "Orange 5G",   vodafone: "Vodafone 5G" },
                    { concepto: "Permanencia",             arista: "No ✓",           movistar: "12 meses ✗",  orange: "12 meses ✗",  vodafone: "12 meses ✗"  },
                    { concepto: "Precio estable",          arista: "Siempre ✓",      movistar: "Sube ✗",      orange: "Sube ✗",      vodafone: "Sube ✗"      },
                    { concepto: "Atención al cliente",     arista: "Persona real ✓", movistar: "Call center ✗",orange: "Call center ✗",vodafone:"Call center ✗"},
                    { concepto: "Alta en 24h",             arista: "Sí ✓",           movistar: "3-7 días ✗",  orange: "3-7 días ✗",  vodafone: "3-7 días ✗"  },
                    { concepto: "Empresa local",           arista: "Alicante ✓",     movistar: "Madrid ✗",    orange: "Madrid ✗",    vodafone: "Madrid ✗"    },
                  ].map((row, i) => (
                    <tr key={row.concepto} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                      <td className="py-3.5 px-5 text-xs text-gray-600 border-r border-gray-100" style={{ fontWeight: 600 }}>{row.concepto}</td>
                      <td className="py-3.5 px-5 text-center text-sm text-[#1648D8] bg-[#EEF2FF]/50 border-r border-gray-100" style={{ fontWeight: 700 }}>{row.arista}</td>
                      <td className="py-3.5 px-5 text-center text-xs text-gray-400 border-r border-gray-100">{row.movistar}</td>
                      <td className="py-3.5 px-5 text-center text-xs text-gray-400 border-r border-gray-100">{row.orange}</td>
                      <td className="py-3.5 px-5 text-center text-xs text-gray-400">{row.vodafone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero cambiarme a Arista y empezar a ahorrar.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm text-black transition-colors hover:opacity-90"
                style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
                Cambia ahora y empieza a ahorrar →
              </a>
            </div>
          </div>
        </section>

        {/* ══════ EN PRENSA ══════════════════════════════════════ */}
        <section className="bg-[#F7F9FF] border-y border-gray-100 py-14 px-4 lg:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>Medios de comunicación</p>
              <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>Arista en la prensa</h2>
            </div>

            {/* Card grande principal */}
            <a href="https://www.informacion.es/economia/2026/03/31/grupo-arista-compania-alicantina-bc-128585485.html"
              target="_blank" rel="noopener noreferrer"
              className="group block rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 bg-white mb-6">
              <div className="grid lg:grid-cols-2">
                {/* Imagen grande — solo desktop */}
                <div className="relative hidden lg:block lg:h-full min-h-[280px] bg-gray-100 overflow-hidden">
                  <Image
                    src="/prensa-informacion.jpg"
                    alt="Artículo en Información.es sobre Grupo Arista"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] text-[#1648D8] shadow" style={{ fontWeight: 800 }}>
                      📰 INFORMACIÓN · 31 mar 2026
                    </span>
                  </div>
                </div>
                {/* Contenido */}
                <div className="flex flex-col justify-between p-6 lg:p-10">
                  {/* Badge solo móvil */}
                  <div className="lg:hidden mb-3">
                    <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-[11px] text-[#1648D8] border border-[#1648D8]/20" style={{ fontWeight: 800 }}>
                      📰 INFORMACIÓN · 31 mar 2026
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 mb-3" style={{ fontWeight: 700 }}>Economía · Empresas en Alicante</p>
                    <h3 className="text-2xl lg:text-3xl text-[#1A1A1A] leading-tight mb-4 group-hover:text-[#1648D8] transition-colors" style={{ fontWeight: 900 }}>
                      "La empresa alicantina que está cambiando la forma de contratar luz y móvil"
                    </h3>
                    <p className="text-base text-gray-500 leading-relaxed mb-6">
                      En un mercado donde las grandes compañías compiten por precio, Grupo Arista ha decidido seguir un camino diferente: ofrecer tranquilidad, cercanía y control total al cliente.
                    </p>
                    {/* Cita del fundador dentro de la card */}
                    <div className="rounded-2xl bg-[#EEF2FF] border border-[#1648D8]/15 px-5 py-4 mb-6">
                      <p className="text-sm text-[#1648D8] leading-relaxed italic mb-2">
                        "No queremos ser la compañía más barata, queremos ser en la que más confíes."
                      </p>
                      <p className="text-xs text-[#1648D8]/70" style={{ fontWeight: 700 }}>— Francisco Ayuso, Fundador · Diario Información</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-base text-[#1648D8]" style={{ fontWeight: 700 }}>
                    Leer artículo completo
                    <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Badge reconocimiento */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { emoji: "🏆", texto: "Mejor nueva empresa de telecomunicaciones 2026" },
                { emoji: "⭐", texto: "4.8/5 en Google Reviews" },
                { emoji: "📰", texto: "Destacada en Diario Información" },
              ].map((b) => (
                <div key={b.texto} className="flex items-center gap-2 rounded-full bg-white border border-gray-100 px-5 py-2.5 shadow-sm">
                  <span className="text-lg">{b.emoji}</span>
                  <span className="text-xs text-[#1A1A1A]" style={{ fontWeight: 700 }}>{b.texto}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ FAQ ACCORDION ═════════════════════════════════ */}
        <FAQAccordion />

        {/* ══════ CTA FINAL ═════════════════════════════════════ */}
        <section className="py-20 px-4 lg:px-6" style={{ backgroundColor: "#0D47A1" }}>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[clamp(32px,5vw,56px)] text-white leading-tight tracking-tight mb-3" style={{ fontWeight: 900 }}>
              ¿Sigues pagando de más?
            </h2>
            <p className="text-lg text-white/65 mb-10">Cada mes que esperas son euros que pierdes. Cambia hoy.</p>
            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero contratar con Arista. Alta en 24h.")}`}
                target="_blank" rel="noopener noreferrer"
                className="block rounded-2xl py-4 text-center text-base text-black hover:opacity-90 transition-colors shadow-xl"
                style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
                Contratar ahora — Alta en 24h
              </a>
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, he visto la web de Arista y quiero información sobre las tarifas.")}`}
                target="_blank" rel="noopener noreferrer"
                className="block rounded-2xl py-4 text-center text-base text-white hover:bg-white/10 transition-colors border border-white/20"
                style={{ fontWeight: 600 }}>
                💬 Hablar por WhatsApp →
              </a>
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero que me llamen del equipo de Arista para información sobre tarifas.")}`}
                target="_blank" rel="noopener noreferrer"
                className="block rounded-2xl py-4 text-center text-base text-white/70 hover:text-white transition-colors border border-white/15"
                style={{ fontWeight: 600 }}>
                📞 ¿Te llamamos? Deja tu número
              </a>
            </div>
          </div>
        </section>

        {/* ══════ EXIT INTENT POPUP ════════════════════════════ */}
        <ExitIntentPopup />

        {/* ══════ VENTAJAS (legacy — ocultado) ════════════════ */}
        {false && <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]">Ventajas exclusivas</span>
            </div>
            <h2 className="mb-10 text-3xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>
              Lo que nos hace diferentes.
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {/* Precios definitivos */}
              <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "linear-gradient(135deg,#1648D8 0%,#2563EB 100%)" }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1" style={{ fontWeight: 600 }}>Sin sorpresas</p>
                  <h3 className="text-xl text-white leading-snug" style={{ fontWeight: 800 }}>Precios definitivos</h3>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed">Los precios son definitivos, no son precios promocionales que suben al año.</p>
                </div>
              </div>

              {/* Mejoras constantes */}
              <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "linear-gradient(135deg,#EC4899 0%,#F472B6 100%)" }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1" style={{ fontWeight: 600 }}>Siempre mejor</p>
                  <h3 className="text-xl text-white leading-snug" style={{ fontWeight: 800 }}>Mejoras constantes</h3>
                  <p className="mt-2 text-sm text-white/75 leading-relaxed">Todas las mejoras de tarifas las disfrutan primero nuestros clientes, no solo los nuevos.</p>
                </div>
              </div>

              {/* Plan Amigo */}
              <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "linear-gradient(135deg,#F59E0B 0%,#FCD34D 100%)" }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/25">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/70 uppercase tracking-widest mb-1" style={{ fontWeight: 600 }}>Recomienda y gana</p>
                  <h3 className="text-xl text-white leading-snug" style={{ fontWeight: 800 }}>Plan Amigo · 50€</h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">Trae a un amigo y lleváis <strong>50€ de descuento cada uno</strong> en vuestra factura. ¡Sin límite!</p>
                </div>
              </div>

              {/* Gigas compartir */}
              <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "linear-gradient(135deg,#06B6D4 0%,#67E8F9 100%)" }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1" style={{ fontWeight: 600 }}>Flexible</p>
                  <h3 className="text-xl text-white leading-snug" style={{ fontWeight: 800 }}>Gigas para compartir</h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">Comparte tus gigas con quien quieras o acumúlalos si no los gastas este mes.</p>
                </div>
              </div>

              {/* Atención personalizada */}
              <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "linear-gradient(135deg,#00B96B 0%,#34D399 100%)" }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1" style={{ fontWeight: 600 }}>Siempre contigo</p>
                  <h3 className="text-xl text-white leading-snug" style={{ fontWeight: 800 }}>Atención personalizada</h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">Te atendemos por WhatsApp o desde la App de Arista donde puedes ver tu factura y hacer cambios.</p>
                </div>
              </div>

              {/* Sin permanencia */}
              <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: "linear-gradient(135deg,#6366F1 0%,#A5B4FC 100%)" }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1" style={{ fontWeight: 600 }}>Total libertad</p>
                  <h3 className="text-xl text-white leading-snug" style={{ fontWeight: 800 }}>Sin permanencia</h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">Te quedas porque quieres, no porque estés atado. Cancela cuando quieras sin coste.</p>
                </div>
              </div>

            </div>
          </div>
        </section>}

        {/* ══════ STRIP DUDAS ═══════════════════════════════════ */}
        <section className="bg-[#F5F6F8] py-5 border-t border-[#E8E9EC]">
          <div className="mx-auto max-w-5xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#1A1A1A] text-center sm:text-left" style={{ fontWeight: 500 }}>
              ¿Tienes dudas? Te respondemos en menos de <span style={{ fontWeight: 700 }}>5 minutos.</span>
            </p>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, tengo dudas sobre las tarifas de Arista.")}`}
              target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 rounded-xl bg-[#00B96B] px-6 py-2.5 text-sm text-black hover:bg-[#009A59] transition-colors" style={{ fontWeight: 600 }}>
              Escribir ahora
            </a>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
