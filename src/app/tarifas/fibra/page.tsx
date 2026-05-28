import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FibraCards from "@/components/FibraCards";
import FibraOfertaMobile from "@/components/FibraOfertaMobile";
import FibraCountdown from "@/components/FibraCountdown";

export const metadata: Metadata = {
  title: "Tarifas Fibra Alicante 2026 | 600Mb y 1Gb sin permanencia | Arista",
  description:
    "Fibra óptica en Alicante desde 24,90€/mes. 600Mb o 1Gb simétrica. Sin permanencia. Alta en 24h. Red MasOrange. Empresa local alicantina.",
  alternates: { canonical: "https://aristagroup.es/tarifas/fibra" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

const ICON_FIBRA = "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6";
const ICON_WIFI  = "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0";
const ICON_LOCK  = "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z";
const ICON_SPEED = "M13 10V3L4 14h7v7l9-11h-7z";

const FIBRAS = [
  {
    nombre: "Arista Only 600",
    subtitulo: "Fibra 600Mb simétrica",
    entero: "24",
    decimal: "90",
    lineas: [
      { d: ICON_FIBRA, t: "Fibra 600Mb simétrica" },
      { d: ICON_WIFI,  t: "Red MasOrange" },
      { d: ICON_LOCK,  t: "Sin permanencia" },
      { d: ICON_SPEED, t: "Router WiFi incluido" },
    ],
    waMsg: "Quiero contratar Arista Only 600 — Fibra 600Mb por 24,90€/mes.",
    destacada: false,
  },
  {
    nombre: "Arista Only 1000",
    subtitulo: "Fibra 1Gb simétrica ultrarrápida",
    entero: "32",
    decimal: "90",
    lineas: [
      { d: ICON_FIBRA, t: "Fibra 1Gb simétrica" },
      { d: ICON_WIFI,  t: "Red MasOrange" },
      { d: ICON_LOCK,  t: "Sin permanencia" },
      { d: ICON_SPEED, t: "Router WiFi incluido" },
    ],
    waMsg: "Quiero contratar Arista Only 1000 — Fibra 1Gb por 32,90€/mes.",
    destacada: true,
  },
];

export default function TarifasFibraPage() {
  return (
    <>
      <Header />
      <main>

        {/* HERO MÓVIL — card oferta + contador */}
        <FibraOfertaMobile />

        {/* HERO DESKTOP — mismo patrón que home: imagen + overlay + card flotante */}
        <section className="mt-[108px] bg-[#F5F6F8] pt-10 pb-0 px-2 lg:px-3 hidden md:block">
          <div className="mx-auto w-full max-w-[2000px]">
            {/* wrapper relative para que la card no se recorte */}
            <div className="relative">

              {/* Hero card con overflow-hidden solo para imagen + clip */}
              <div className="relative overflow-hidden rounded-t-2xl shadow-2xl" style={{ height: "460px", backgroundColor: "#0a1a3a" }}>

                {/* Imagen IZQUIERDA — ocupa todo el lado izquierdo */}
                <div className="absolute left-0 top-0 bottom-0" style={{ width: "58%" }}>
                  <Image
                    src="/chica-arista.png"
                    alt="Chica disfrutando de la fibra Arista en Alicante"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Overlay azul forma S invertida — cubre lado DERECHO */}
                <div className="absolute inset-0" style={{ background: "#1648D8", clipPath: "polygon(42% 0, 100% 0, 100% 100%, 42% 100%, 52% 50%)" }} />

                {/* Texto DERECHA */}
                <div className="absolute inset-y-0 right-0 flex items-center px-10 lg:px-14" style={{ width: "52%" }}>
                  <div>
                    <nav className="mb-4 text-xs text-white/40">
                      <Link href="/tarifas" className="hover:text-white transition-colors">Tarifas</Link>
                      <span className="mx-2">/</span>
                      <span className="text-white/70">Solo Fibra</span>
                    </nav>
                    <h1 className="text-[clamp(36px,5vw,64px)] text-white leading-tight tracking-tight" style={{ fontWeight: 900 }}>
                      Fibra óptica
                    </h1>
                    <p className="mt-3 text-[clamp(13px,1.4vw,17px)] text-white/80 leading-snug max-w-sm">
                      ¿Lo más fácil a un clic?<br />
                      <span style={{ color: "#FFD700", fontWeight: 700 }}>Actívalo en 1 minuto y sin preocupaciones.</span>
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {["Sin permanencia", "Alta en 24h", "Router incluido"].map((t) => (
                        <span key={t} className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] text-white" style={{ fontWeight: 600 }}>{t}</span>
                      ))}
                    </div>
                    <div className="mt-5 flex gap-3">
                      <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Quiero contratar Arista Only 600 — Fibra 600Mb por 24,90€/mes.")}`}
                        target="_blank" rel="noopener noreferrer"
                        className="rounded-xl bg-[#00B96B] px-6 py-3 text-sm text-black hover:bg-[#009A59] transition-colors shadow-lg" style={{ fontWeight: 700 }}>
                        Lo quiero →
                      </a>
                      <Link href="/cobertura" className="rounded-xl border border-white/40 px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors">
                        Ver cobertura
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card oferta flotante — sobre la zona azul derecha, fuera del overflow-hidden */}
              <div className="flex flex-col absolute" style={{ left: "24%", top: "6%", width: "270px", zIndex: 20 }}>

                <div className="flex justify-center mb-2">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-[11px] text-black shadow-md whitespace-nowrap"
                    style={{ backgroundColor: "#FFB800", fontWeight: 700 }}>
                    ★ Oferta limitada · Solo esta semana
                  </span>
                </div>

                <div className="rounded-2xl bg-white shadow-2xl border border-gray-100">
                  <div className="px-5 pt-5 pb-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>Arista Only 600</p>
                    <div className="flex items-end gap-0.5 leading-none">
                      <div className="relative inline-block">
                        <svg viewBox="0 0 80 10" className="absolute pointer-events-none" fill="none"
                          style={{ bottom: "-6px", left: "-8px", width: "130%", height: "14px" }}>
                          <path d="M 2 6 C 15 4, 30 8, 46 5 C 58 3, 68 7, 78 5" stroke="#FFB800" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                          <path d="M 4 7.5 C 18 6, 34 9, 50 7 C 62 5, 70 8, 79 6.5" stroke="#FFB800" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.35" />
                        </svg>
                        <span className="relative text-[46px] leading-none tracking-tighter text-[#1648D8]" style={{ fontWeight: 800 }}>24</span>
                      </div>
                      <div className="mb-1">
                        <span className="text-xl text-[#1648D8]" style={{ fontWeight: 700 }}>,90€</span>
                        <p className="text-[10px] text-gray-400 leading-none">/mes</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-px bg-gray-100 mx-4" />
                  <div className="px-5 pt-3 pb-0">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#1648D8]" style={{ fontWeight: 700 }}>Arista Only 600</p>
                  </div>
                  <div className="px-5 pt-2 pb-3 flex flex-col gap-1.5">
                    {[
                      { d: ICON_FIBRA, t: "Fibra 600Mb simétrica" },
                      { d: ICON_WIFI,  t: "Red MasOrange" },
                      { d: ICON_LOCK,  t: "Sin permanencia" },
                      { d: ICON_SPEED, t: "Router WiFi incluido" },
                    ].map((l) => (
                      <div key={l.t} className="flex items-center gap-2 text-[12px] text-gray-600">
                        <svg className="h-3.5 w-3.5 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={l.d} />
                        </svg>
                        {l.t}
                      </div>
                    ))}
                  </div>
                  <div className="mx-4 mb-3 rounded-xl bg-[#F0FFF8] border border-[#00B96B]/30 px-3 py-2 flex items-center gap-2">
                    <svg className="h-4 w-4 flex-shrink-0 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-[11px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>+ Línea móvil de regalo</p>
                      <p className="text-[11px] text-gray-500">Solo <span className="text-[#00B96B]" style={{ fontWeight: 700 }}>+2€/mes</span></p>
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-1">
                    <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Quiero contratar Arista Only 600 — Fibra 600Mb por 24,90€/mes + línea móvil por 2€ más.")}`}
                      target="_blank" rel="noopener noreferrer"
                      className="block w-full rounded-xl py-2.5 text-center text-sm text-black hover:opacity-90 transition-colors"
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

            {/* Banner contador — ancho completo, pegado bajo el hero */}
            <FibraCountdown />

          </div>
        </section>

        {/* CARDS FIBRA */}
        <FibraCards />

        {/* POR QUÉ */}
        <section className="bg-[#F0F4FF] py-14">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 700 }}>¿Por qué elegir la fibra de Arista?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "600Mb o 1Gb simétrico", d: "Misma velocidad de subida y bajada. Ideal para teletrabajo, streaming y gaming." },
                { t: "Red MasOrange", d: "La misma infraestructura que Orange. Máxima cobertura en toda la provincia de Alicante." },
                { t: "Sin permanencia", d: "Sin contratos forzosos. Puedes darte de baja cuando quieras sin penalización." },
                { t: "Alta en 24 horas", d: "Técnico a domicilio en menos de 24h. Router WiFi incluido en el precio." },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl bg-white border border-gray-100 p-6">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E3F2FD] mb-3">
                    <svg className="h-4 w-4 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 600 }}>{item.t}</p>
                  <p className="mt-1.5 text-sm text-gray-500">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1648D8] py-14 text-center">
          <div className="mx-auto max-w-xl px-6">
            <h2 className="text-xl text-white" style={{ fontWeight: 700 }}>¿Tienes dudas? Te asesoramos gratis</h2>
            <p className="mt-2 text-sm text-white/60">Sin compromiso. Resolvemos todas tus preguntas por WhatsApp.</p>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre la fibra de Arista.")}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#00B96B] px-7 py-3.5 text-sm text-black hover:bg-[#009A59] transition-colors" style={{ fontWeight: 600 }}>
              WhatsApp directo →
            </a>
          </div>
        </section>

        {/* Internal linking */}
        <section className="bg-white px-6 py-10 lg:px-8 border-t border-gray-100">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4" style={{ fontWeight: 700 }}>También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/fibra-barata-alicante",  label: "Fibra barata en Alicante" },
                { href: "/fibra-orange-alicante",  label: "Fibra red Orange Alicante" },
                { href: "/cambia-de-compania",      label: "Cambia de operadora" },
                { href: "/fibra-torrevieja",        label: "Fibra en Torrevieja" },
              ].map((l) => (
                <Link key={l.href} href={l.href}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm text-[#1648D8] hover:bg-[#EEF2FF] transition-colors"
                  style={{ fontWeight: 600 }}>
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
