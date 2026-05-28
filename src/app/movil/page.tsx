import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tarifas Móvil Alicante | Arista Móvil · Red MasOrange desde 6,90€",
  description:
    "Tarifas de móvil desde 6,90€/mes en red MasOrange. 5G, llamadas ilimitadas, eSIM compatible, sin permanencia. Alta en 24 horas. Empresa alicantina.",
  alternates: { canonical: "https://aristagroup.es/movil" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const FUCHSIA = "#E91E8C";

const tarifas = [
  {
    nombre: "Arista Móvil 30",
    gb: "30 GB",
    precio: "6,90",
    badge: null,
    features: ["30 GB datos 5G", "Llamadas ilimitadas", "Red MasOrange", "Sin permanencia", "eSIM compatible"],
  },
  {
    nombre: "Arista Móvil 60",
    gb: "60 GB",
    precio: "7,90",
    badge: null,
    features: ["60 GB datos 5G", "Llamadas ilimitadas", "Red MasOrange", "Sin permanencia", "eSIM compatible"],
  },
  {
    nombre: "Arista Móvil 80",
    gb: "80 GB",
    precio: "8,90",
    badge: "Más popular",
    features: ["80 GB datos 5G", "Llamadas ilimitadas", "Red MasOrange", "Sin permanencia", "eSIM compatible"],
  },
  {
    nombre: "Arista Infinity",
    gb: "Ilimitado",
    precio: "10,90",
    badge: null,
    features: ["Datos ilimitados 5G", "Llamadas ilimitadas", "Red MasOrange", "Sin permanencia", "eSIM compatible"],
  },
];

const comparativa = [
  { concepto: "Precio 80GB/mes",    arista: "8,90€",      movistar: "22,00€",      orange: "18,99€",     vodafone: "21,99€" },
  { concepto: "Red",                arista: "MasOrange",   movistar: "Movistar",    orange: "Orange",     vodafone: "Vodafone" },
  { concepto: "5G incluido",        arista: "✓ Sí",        movistar: "✓ Sí",        orange: "✓ Sí",       vodafone: "✓ Sí" },
  { concepto: "eSIM",               arista: "✓ Sí",        movistar: "✓ Sí",        orange: "✓ Sí",       vodafone: "✓ Sí" },
  { concepto: "Permanencia",        arista: "✗ No",        movistar: "✓ Sí",        orange: "✓ Sí",       vodafone: "✓ Sí" },
  { concepto: "Coste de alta",      arista: "0€",          movistar: "Hasta 30€",   orange: "Hasta 25€",  vodafone: "Hasta 30€" },
  { concepto: "Atención al cliente",arista: "WhatsApp 1h", movistar: "Call center", orange: "Call center",vodafone: "Call center" },
  { concepto: "Empresa local",      arista: "✓ Alicante",  movistar: "✗ No",        orange: "✗ No",       vodafone: "✗ No" },
];

const faqs = [
  { q: "¿Tengo que cambiar de número?",   a: "No. Conservas tu número actual con portabilidad gratuita gestionada por nosotros." },
  { q: "¿Cuánto tarda el alta?",           a: "En 24 horas laborables tienes la línea activa y operativa." },
  { q: "¿Hay permanencia?",                a: "No. Puedes darte de baja cuando quieras sin ninguna penalización." },
  { q: "¿Qué red utiliza Arista Móvil?",  a: "Utilizamos la red MasOrange (antes Orange), con cobertura 5G en toda España." },
  { q: "¿Es compatible con eSIM?",         a: "Sí. Todas nuestras tarifas de móvil son compatibles con eSIM. Te enviamos el QR por email en minutos." },
  { q: "¿Puedo tener varias líneas?",      a: "Sí. Puedes contratar tantas líneas como necesites, cada una con su tarifa." },
  { q: "¿Cómo contacto con vosotros?",    a: "Por WhatsApp al +34 621 192 578 o por email a info@aristamovil.com. Respuesta en menos de 1 hora." },
];

export default function MovilPage() {
  return (
    <>
      <Header />
      <main>

        {/* ══ HERO ═══════════════════════════════════════════════════ */}
        <section className="relative mt-[108px] overflow-hidden" style={{ minHeight: 520 }}>
          <div className="absolute inset-0">
            <Image
              src="/movil-hero.png"
              alt="Personas usando móvil Arista"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, rgba(13,71,161,0.96) 0%, rgba(13,71,161,0.82) 42%, rgba(13,71,161,0.15) 70%, transparent 100%)" }} />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
            <div className="max-w-lg">
              <h1 className="text-[clamp(28px,4.5vw,56px)] text-white leading-tight tracking-tight" style={{ fontWeight: 800 }}>
                Móvil 5G<br />
                <span style={{ color: FUCHSIA }}>sin permanencia</span><br />
                desde 6,90€/mes
              </h1>
              <p className="mt-5 text-base text-white/70 max-w-sm leading-relaxed">
                Misma cobertura que Orange. Precios para personas reales. eSIM disponible. Alta en 24h.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Sin permanencia", "eSIM incluida", "Alta en 24h", "5G real"].map((b) => (
                  <span key={b}
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] text-white/90"
                    style={b === "Sin permanencia"
                      ? { backgroundColor: "rgba(233,30,140,0.2)", border: `1px solid ${FUCHSIA}`, fontWeight: 600 }
                      : { backgroundColor: "rgba(255,255,255,0.12)", fontWeight: 600 }}>
                    {b}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#tarifas"
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm text-black transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
                  Ver tarifas ↓
                </a>
                <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre Arista Móvil.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm text-white/80 hover:border-white hover:text-white transition-colors">
                  WhatsApp →
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-1" style={{ backgroundColor: FUCHSIA }} />
        </section>

        {/* ══ TRUST STRIP ════════════════════════════════════════════ */}
        <section className="py-4" style={{ backgroundColor: FUCHSIA }}>
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Red MasOrange 5G" },
                { icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", label: "eSIM compatible" },
                { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Alta en 24h" },
                { icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z", label: "Sin permanencia" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-white" style={{ fontWeight: 600 }}>
                  <svg className="h-5 w-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TARIFAS ════════════════════════════════════════════════ */}
        <section id="tarifas" className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">

            {/* Cabecera sección */}
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase tracking-[0.35em] mb-2" style={{ color: FUCHSIA, fontWeight: 700 }}>
                Red MasOrange · 5G en toda España
              </p>
              <h2 className="text-[clamp(26px,4vw,44px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 900 }}>
                Tarifas de móvil
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Desde <strong className="text-[#1648D8]">6,90€/mes</strong> · Sin permanencia · eSIM incluida · Alta en 24 h
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
              {tarifas.map((t) => {
                const [ent, dec] = t.precio.split(",");
                const isPopular = !!t.badge;
                return (
                  <div key={t.nombre}
                    className={`rounded-2xl bg-white flex flex-col relative overflow-visible transition-all duration-300 ${
                      isPopular
                        ? "border-2 border-[#0D47A1] shadow-xl -mt-4"
                        : "border border-gray-200"
                    }`}>

                    {isPopular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] text-black whitespace-nowrap shadow-sm"
                          style={{ backgroundColor: "#FFB800", fontWeight: 700 }}>
                          ★ {t.badge}
                        </span>
                      </div>
                    )}

                    {/* Precio */}
                    <div className={`px-6 pb-4 ${isPopular ? "pt-8" : "pt-7"}`}>
                      <div className="flex items-end gap-0.5 leading-none">
                        <span className="text-[56px] leading-none tracking-tighter text-[#1648D8]" style={{ fontWeight: 800 }}>{ent}</span>
                        <div className="mb-1.5">
                          <span className="text-xl text-[#1648D8]" style={{ fontWeight: 700 }}>,{dec}€</span>
                          <p className="text-[11px] text-gray-400 leading-none">/mes</p>
                        </div>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-0.5">Precio final</p>
                    </div>

                    <div className="h-px bg-gray-100 mx-6" />

                    {/* Nombre + features */}
                    <div className="px-6 pt-4 pb-0">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#1648D8]" style={{ fontWeight: 700 }}>{t.nombre}</p>
                    </div>
                    <div className="px-6 pt-3 pb-5 flex flex-col gap-3 flex-1">
                      {t.features.map((f) => (
                        <div key={f} className="flex items-center gap-3 text-sm text-gray-600">
                          <svg className="h-4 w-4 flex-shrink-0 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="px-6 pb-6 flex flex-col gap-2">
                      <a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Quiero contratar ${t.nombre} — ${t.gb} por ${t.precio}€/mes.`)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="block w-full rounded-xl py-3 text-center text-sm text-black transition-opacity hover:opacity-90"
                        style={{ backgroundColor: "#00B96B", fontWeight: 600 }}>
                        Lo quiero
                      </a>
                      <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Quiero más información sobre las tarifas de móvil de Arista.")}`}
                        target="_blank" rel="noopener noreferrer"
                        className="block w-full text-center text-sm text-[#1648D8] hover:text-[#0D47A1] transition-colors py-1 underline underline-offset-2">
                        Más información →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ eSIM ══════════════════════════════════════════════════ */}
        <section className="py-16 border-y border-gray-100" style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #16213E 60%, #0D47A1 100%)" }}>
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-1 w-10 rounded-full" style={{ backgroundColor: FUCHSIA }} />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-white/60" style={{ fontWeight: 700 }}>Nueva tecnología</span>
                </div>
                <h2 className="text-[clamp(24px,3.5vw,42px)] text-white leading-tight tracking-tight mb-5" style={{ fontWeight: 800 }}>
                  eSIM · Sin tarjeta física.<br />
                  <span style={{ color: FUCHSIA }}>Actívala en minutos.</span>
                </h2>
                <p className="text-base text-white/60 leading-relaxed mb-6">
                  Todas nuestras tarifas son compatibles con eSIM. Te enviamos el código QR por email y en minutos tienes tu línea activa, sin esperar ningún sobre.
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    "Sin tarjeta física — se activa por QR",
                    "Compatible con iPhone y Android",
                    "Portabilidad en 24h sin interrupciones",
                    "Puedes tener 2 líneas en el mismo móvil",
                    "Ideal para viajar o para separar trabajo y personal",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/75">
                      <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center rounded-full" style={{ backgroundColor: FUCHSIA }}>
                        <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero activar una eSIM con Arista Móvil.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: FUCHSIA, fontWeight: 700 }}>
                  Activar mi eSIM →
                </a>
              </div>

              {/* Visual eSIM */}
              <div className="flex items-center justify-center">
                <div className="relative rounded-3xl p-8 text-center"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", width: 280 }}>
                  {/* Chip visual */}
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl"
                    style={{ background: `linear-gradient(135deg, ${FUCHSIA} 0%, #9C27B0 100%)` }}>
                    <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white text-lg mb-1" style={{ fontWeight: 800 }}>eSIM</p>
                  <p className="text-white/50 text-sm mb-5">Arista Móvil</p>
                  {/* QR simulado */}
                  <div className="mx-auto grid grid-cols-7 gap-1 w-28">
                    {Array.from({ length: 49 }).map((_, i) => (
                      <div key={i}
                        className="h-3 w-3 rounded-[2px]"
                        style={{ backgroundColor: [0,1,5,6,7,8,12,13,14,20,21,27,28,29,35,36,42,43,47,48].includes(i) ? "white" : "rgba(255,255,255,0.08)" }}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-[10px] text-white/30">Escanea para activar</p>
                  <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#00B96B" }}>
                    <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ COBERTURA ══════════════════════════════════════════════ */}
        <section className="bg-white py-10 border-b border-gray-100">
          <div className="mx-auto max-w-4xl px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] mb-1" style={{ color: FUCHSIA, fontWeight: 700 }}>Antes de contratar</p>
              <h2 className="text-xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>Comprueba la cobertura en tu zona</h2>
              <p className="mt-1 text-sm text-gray-400">Red MasOrange · cobertura 5G en más del 95% del territorio.</p>
            </div>
            <Link href="/cobertura"
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm text-white hover:opacity-90 transition-opacity whitespace-nowrap"
              style={{ backgroundColor: "#1648D8", fontWeight: 700 }}>
              Comprobar cobertura →
            </Link>
          </div>
        </section>

        {/* ══ COMPARATIVA ════════════════════════════════════════════ */}
        <section className="bg-[#F5F7FF] py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-3 flex items-center justify-center gap-3">
                <div className="h-px w-10 rounded-full" style={{ backgroundColor: FUCHSIA }} />
                <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: FUCHSIA, fontWeight: 700 }}>Comparativa</span>
                <div className="h-px w-10 rounded-full" style={{ backgroundColor: FUCHSIA }} />
              </div>
              <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>Arista Móvil vs la competencia</h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-4 py-4 text-left text-xs text-gray-400 uppercase tracking-wider min-w-[140px]">Concepto</th>
                    <th className="px-4 py-4 text-center text-xs text-white min-w-[110px]"
                      style={{ backgroundColor: FUCHSIA, fontWeight: 700 }}>Arista Móvil</th>
                    <th className="px-4 py-4 text-center text-xs text-gray-400 uppercase tracking-wider min-w-[100px]">Movistar</th>
                    <th className="px-4 py-4 text-center text-xs text-gray-400 uppercase tracking-wider min-w-[100px]">Orange</th>
                    <th className="px-4 py-4 text-center text-xs text-gray-400 uppercase tracking-wider min-w-[100px]">Vodafone</th>
                  </tr>
                </thead>
                <tbody>
                  {comparativa.map((row, i) => (
                    <tr key={i} className={`border-b border-gray-50 last:border-0 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                      <td className="px-4 py-3.5 text-gray-600 text-sm" style={{ fontWeight: 500 }}>{row.concepto}</td>
                      <td className="px-4 py-3.5 text-center text-sm" style={{ backgroundColor: "rgba(233,30,140,0.06)", color: FUCHSIA, fontWeight: 700 }}>{row.arista}</td>
                      <td className="px-4 py-3.5 text-center text-sm text-gray-400">{row.movistar}</td>
                      <td className="px-4 py-3.5 text-center text-sm text-gray-400">{row.orange}</td>
                      <td className="px-4 py-3.5 text-center text-sm text-gray-400">{row.vodafone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-xs text-gray-400">* Precios orientativos consultados en mayo 2026. Pueden variar según promociones.</p>
          </div>
        </section>

        {/* ══ FAQ ════════════════════════════════════════════════════ */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-3 flex items-center justify-center gap-3">
                <div className="h-px w-8 rounded-full" style={{ backgroundColor: FUCHSIA }} />
                <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: FUCHSIA, fontWeight: 700 }}>FAQ</span>
                <div className="h-px w-8 rounded-full" style={{ backgroundColor: FUCHSIA }} />
              </div>
              <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>Preguntas frecuentes</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-[#F9FAFB] rounded-2xl border border-gray-100 p-6">
                  <div className="flex gap-4">
                    <div className="w-1 rounded-full flex-shrink-0 self-stretch" style={{ backgroundColor: FUCHSIA }} />
                    <div>
                      <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 600 }}>{faq.q}</p>
                      <p className="mt-2 text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA FINAL ══════════════════════════════════════════════ */}
        <section className="py-16 text-center" style={{ background: `linear-gradient(135deg, #0D47A1 0%, ${FUCHSIA} 100%)` }}>
          <div className="mx-auto max-w-xl px-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/60 mb-3" style={{ fontWeight: 700 }}>Habla con nosotros</p>
            <h2 className="text-3xl text-white tracking-tight" style={{ fontWeight: 800 }}>¿Tienes dudas?<br />Te llamamos en 5 minutos</h2>
            <p className="mt-3 text-sm text-white/60">Empresa alicantina. Personas reales. Sin bots.</p>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre Arista Móvil.")}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base transition-opacity hover:opacity-90"
              style={{ color: FUCHSIA, fontWeight: 700 }}>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escríbenos ahora
            </a>
          </div>
        </section>

        {/* Internal linking */}
        <section className="bg-white px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4" style={{ fontWeight: 700 }}>También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/fibra-barata-alicante", label: "Fibra barata en Alicante" },
                { href: "/cambia-de-compania",    label: "Cambia de Movistar a Arista" },
                { href: "/fibra-torrevieja",      label: "Fibra en Torrevieja" },
                { href: "/movil-barato-alicante", label: "Móvil barato en Alicante" },
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
