import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BundleCard from "@/components/BundleCard";

export const metadata: Metadata = {
  title: "Luz y Gas Alicante | Arista Energía · Sin sorpresas en la factura",
  description:
    "Tarifas de luz y gas para hogares y empresas en Alicante. 0,119 €/kWh fijo. Precio garantizado de por vida. Asesor personal incluido. Sin letra pequeña.",
  alternates: { canonical: "https://aristagroup.es/energia" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

/* ── Tarifas Energía ────────────────────────────────────────────── */
const TARIFAS = [
  {
    nombre: "ARS Base",
    badge: null as string | null,
    destacada: false,
    desc: "Sin cuota mensual. Pagas exactamente lo que consumes.",
    kwh: "0,119",
    kwhLabel: "Precio fijo kWh",
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
    kwh: "0,119",
    kwhLabel: "Precio fijo kWh",
    servicios: [
      { label: "Hogar · suscripción", valor: "6,90 €/mes" },
      { label: "Pyme · suscripción",  valor: "9,90 €/mes" },
      { label: "Asesor personal",     valor: "incluido"   },
    ],
    color: "#1648D8",
  },
  {
    nombre: "ARS Prisma",
    badge: "Para empresas",
    destacada: false,
    desc: "Estabilidad frente a subidas del mercado. Incluye suscripción de mantenimiento premium.",
    kwh: "0,119",
    kwhLabel: "Precio fijo kWh",
    servicios: [
      { label: "Hogar · suscripción", valor: "9,90 €/mes"  },
      { label: "Pyme · suscripción",  valor: "14,90 €/mes" },
      { label: "Asesor personal",     valor: "incluido"    },
    ],
    color: "#059669",
  },
];

const ICON_BOLT   = "M13 10V3L4 14h7v7l9-11h-7z";
const ICON_SHIELD = "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z";
const ICON_FIRE   = "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z";

export default function EnergiaPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="mt-[108px] bg-gradient-to-br from-[#009A59] to-[#00B96B] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white mb-5" style={{ fontWeight: 700 }}>
              ✦ Arista Energía · Alicante 2026
            </span>
            <h1 className="text-[clamp(26px,4vw,48px)] text-white leading-tight tracking-tight" style={{ fontWeight: 800 }}>
              Luz y gas sin sorpresas<br />para tu hogar y negocio
            </h1>
            <p className="mt-4 text-base text-white/70 max-w-md mx-auto">
              0,119 €/kWh fijo · Precio garantizado de por vida · Asesor personal incluido
            </p>
            <a href="#tarifas"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm text-[#009A59] hover:bg-gray-50 transition-colors" style={{ fontWeight: 700 }}>
              Ver tarifas energía ↓
            </a>
          </div>
        </section>

        {/* ── TARIFAS LUZ ───────────────────────────────────────── */}
        <section id="tarifas" className="bg-white px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-center text-[11px] uppercase tracking-[0.35em] text-[#1648D8]" style={{ fontWeight: 700 }}>Tarifas</p>
            <h2 className="mb-2 text-center text-[clamp(24px,3.5vw,36px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>
              Energía para cada estilo de vida
            </h2>
            <p className="mx-auto mb-12 max-w-md text-center text-sm text-gray-400">
              El precio que ves es el que pagas. Sin sorpresas al final del mes.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              {TARIFAS.map((t) => (
                <div
                  key={t.nombre}
                  className="relative flex flex-col rounded-2xl bg-white"
                  style={{
                    border: t.destacada ? `2px solid ${t.color}` : "1px solid #E5E7EB",
                    boxShadow: t.destacada ? "0 8px 32px rgba(22,72,216,.12)" : undefined,
                  }}
                >
                  {t.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full px-3.5 py-1 text-[11px] text-white whitespace-nowrap"
                        style={{ backgroundColor: t.color, fontWeight: 700 }}>
                        {t.badge}
                      </span>
                    </div>
                  )}

                  <div className={`flex flex-1 flex-col gap-4 px-5 pb-5 ${t.badge ? "pt-7" : "pt-5"}`}>
                    <div>
                      <h3 className="text-[17px] text-[#1A1A1A]" style={{ fontWeight: 800 }}>{t.nombre}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-gray-400">{t.desc}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hola, quiero contratar la tarifa energía ${t.nombre} de Arista Energía.`)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-sm text-black transition-opacity hover:opacity-85"
                        style={{ backgroundColor: "#00B96B", fontWeight: 600 }}>
                        Contratar {t.nombre}
                      </a>
                    </div>

                    <div className="h-px bg-gray-100" />

                    {/* Energía kWh */}
                    <div>
                      <div className="mb-2 flex items-center gap-1.5">
                        <svg style={{ color: t.color, width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        <svg className="text-gray-400" style={{ width: 14, height: 14 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            <span className="text-xs text-[#1A1A1A]" style={{ fontWeight: 600 }}>{s.valor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── POTENCIA ──────────────────────────────────── */}
            <div className="mt-6 rounded-2xl border border-gray-200 bg-[#F5F6F8] px-6 py-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-0.5" style={{ fontWeight: 700 }}>Precios diarios de potencia</p>
                  <p className="text-xs text-gray-500">Aplicables a todas las tarifas · Tarifa 2.0 TD</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-0.5" style={{ fontWeight: 600 }}>Punta (P1)</p>
                    <p className="text-base text-[#1A1A1A]" style={{ fontWeight: 800 }}>0,1608 €/kW/día</p>
                  </div>
                  <div className="h-8 w-px bg-gray-200" />
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-0.5" style={{ fontWeight: 600 }}>Llano (P2)</p>
                    <p className="text-base text-[#1A1A1A]" style={{ fontWeight: 800 }}>0,0869 €/kW/día</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ARS GAS ───────────────────────────────────────────── */}
        <section className="bg-[#F5F6F8] px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#F59E0B]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B45309]" style={{ fontWeight: 700 }}>Gas Natural</span>
            </div>
            <h2 className="mb-1 text-3xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>ARS Gas</h2>
            <p className="mb-8 text-sm text-gray-400">El gas a 0,0899 €/kWh durante 12 meses. Asistente 24h incluido.</p>

            <div className="overflow-hidden rounded-2xl border border-[#FDE68A] bg-white">
              <div className="grid sm:grid-cols-2 gap-0">
                {/* Precio */}
                <div className="flex flex-col gap-4 border-b border-[#FDE68A] p-6 sm:border-b-0 sm:border-r">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FEF3C7]">
                      <svg style={{ color: "#F59E0B", width: 16, height: 16 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICON_FIRE} />
                      </svg>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#B45309]" style={{ fontWeight: 700 }}>Gas Natural</p>
                  </div>
                  <div>
                    <div className="flex items-end gap-0.5 leading-none">
                      <span className="text-[56px] leading-none tracking-tighter text-[#F59E0B]" style={{ fontWeight: 900 }}>0,0899</span>
                      <span className="mb-2 text-base text-gray-400">€/kWh</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-400">Precio fijo durante 12 meses</p>
                  </div>
                  <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero contratar ARS Gas de Arista Energía.")}`}
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl px-5 py-2.5 text-sm text-black transition-opacity hover:opacity-85 self-start"
                    style={{ backgroundColor: "#F59E0B", fontWeight: 700 }}>
                    Contratar ARS Gas →
                  </a>
                </div>

                {/* Incluye */}
                <div className="flex flex-col gap-4 p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400" style={{ fontWeight: 700 }}>Qué incluye</p>
                  <div className="flex flex-col gap-3">
                    {[
                      { label: "Asistente 24h",        valor: "incluido"   },
                      { label: "Hogar · suscripción",  valor: "6,90 €/mes" },
                      { label: "Pyme · suscripción",   valor: "9,90 €/mes" },
                      { label: "Asesor personal",      valor: "incluido"   },
                      { label: "Factura digital",      valor: "incluida"   },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#F59E0B]" />
                          <span className="text-xs text-gray-500">{s.label}</span>
                        </div>
                        <span className="text-xs text-[#1A1A1A]" style={{ fontWeight: 600 }}>{s.valor}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400 border-t border-gray-100 pt-3">
                    Precio fijo garantizado 12 meses desde la fecha de contratación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BUNDLE LUZ + FIBRA + MÓVIL ────────────────────────── */}
        <section className="bg-white py-16 px-4 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Fibra + Energía</span>
            </div>
            <h2 className="mb-1 text-3xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>
              Añade fibra y móvil a tu energía
            </h2>
            <p className="mb-8 text-sm text-gray-400">
              Clientes de Arista Energía tienen acceso a precios exclusivos de Fibra + Energía. Todo en un solo recibo.
            </p>
            <BundleCard />
          </div>
        </section>

        {/* ── EMPRESAS ENERGÍA ──────────────────────────────────── */}
        <section className="bg-[#F0F4FF] py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00B96B]">Para empresas</p>
            <h2 className="mt-2 text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>
              Restaurantes, hoteles, clínicas y comercios
            </h2>
            <p className="mt-4 text-sm text-gray-500 max-w-lg mx-auto">
              Gestionamos el suministro energético de tu negocio con precios competitivos y asesor dedicado.
              Margen desde 375€/mes por cliente empresa.
            </p>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Quiero un análisis gratuito de energía para mi empresa.")}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#00B96B] px-7 py-3.5 text-sm text-black hover:bg-[#009A59] transition-colors" style={{ fontWeight: 600 }}>
              Solicitar análisis gratuito →
            </a>
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────────── */}
        <section className="bg-[#0D47A1] py-16 text-center">
          <div className="mx-auto max-w-xl px-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50">Arista Total</p>
            <h2 className="mt-3 text-2xl text-white" style={{ fontWeight: 700 }}>Móvil + Energía en un solo equipo</h2>
            <p className="mt-3 text-sm text-white/60">
              La única empresa local en Alicante que gestiona tu móvil y tu luz.
            </p>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Quiero información sobre Arista Total — móvil y energía.")}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#00B96B] px-7 py-3.5 text-sm text-black hover:bg-[#009A59] transition-colors" style={{ fontWeight: 600 }}>
              Conocer Arista Total →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
