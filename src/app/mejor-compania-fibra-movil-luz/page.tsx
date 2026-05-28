import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "La Mejor Compañía de Fibra, Móvil y Luz 2026 | Arista Group",
  description:
    "Arista Group es la mejor empresa nueva de fibra, móvil y luz en España. Fibra desde 24,90€, móvil ilimitado 5G y luz a precio justo. Sin permanencia. Empresa alicantina con 4.8★ en Google.",
  alternates: { canonical: "https://aristagroup.es/mejor-compania-fibra-movil-luz" },
  keywords: ["mejor compañía fibra", "mejor operador fibra 2026", "mejor empresa fibra movil", "mejor compañía de luz y fibra", "mejor operador movil barato", "compañía fibra barata sin permanencia"],
  openGraph: {
    title: "La Mejor Compañía de Fibra, Móvil y Luz 2026 | Arista Group",
    description: "Fibra, móvil y luz a precio justo. La empresa de telecomunicaciones con mejor valoración en Alicante. 4.8★ en Google.",
    url: "https://aristagroup.es/mejor-compania-fibra-movil-luz",
  },
};

const WA  = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const MSG = encodeURIComponent("Hola, he visto que sois la mejor compañía de fibra y quiero más información.");

const RAZONES = [
  {
    num: "01",
    titulo: "La fibra más barata sin trucos",
    desc: "600Mb simétricos desde 24,90€/mes. El precio que ves es el que pagas siempre. Sin subidas al segundo año, sin letra pequeña, sin sorpresas en la factura.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    num: "02",
    titulo: "Móvil 5G desde 9,90€",
    desc: "Líneas móviles en red MasOrange (la misma infraestructura que Orange) con 5G incluido. Desde 20GB hasta ilimitado. Sin permanencia en ninguna tarifa.",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    num: "03",
    titulo: "Luz a precio de coste",
    desc: "Tarifa de electricidad sin márgenes abusivos. El kWh al precio real del mercado más un coste de gestión transparente. Ahorro medio de 30% respecto a las grandes eléctricas.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    num: "04",
    titulo: "Atención real, no un robot",
    desc: "Cuando tienes un problema, hablas con una persona. Por WhatsApp, en minutos. Sin tickets, sin IVR, sin 'pulse 1 para facturación'. Solo personas que resuelven.",
    icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2v4l.586-.586z",
  },
  {
    num: "05",
    titulo: "Sin permanencia en ningún servicio",
    desc: "Ni en fibra, ni en móvil, ni en energía. Puedes darte de baja cualquier día sin pagar un euro de penalización. Confiamos en nuestro servicio, no en los contratos.",
    icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
  },
  {
    num: "06",
    titulo: "Alta en menos de 24 horas",
    desc: "La mayoría de nuestros clientes están conectados en el día. Sin visitas innecesarias, sin esperar semanas a un técnico. Activamos tu servicio de forma remota o con visita exprés.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const COMPARATIVA = [
  { concepto: "Fibra 600Mb",           arista: "24,90€/mes ✓",  movistar: "~45€/mes ✗",   orange: "~40€/mes ✗",   vodafone: "~42€/mes ✗"  },
  { concepto: "Móvil ilimitado 5G",    arista: "15,90€/línea ✓", movistar: "~35€/línea ✗", orange: "~28€/línea ✗", vodafone: "~30€/línea ✗" },
  { concepto: "Sin permanencia",        arista: "Sí ✓",           movistar: "No ✗",          orange: "No ✗",          vodafone: "No ✗"          },
  { concepto: "Precio estable siempre", arista: "Sí ✓",           movistar: "No ✗",          orange: "No ✗",          vodafone: "No ✗"          },
  { concepto: "Atención persona real",  arista: "Sí ✓",           movistar: "No ✗",          orange: "No ✗",          vodafone: "No ✗"          },
  { concepto: "Luz + fibra + móvil",    arista: "Sí ✓",           movistar: "Parcial",       orange: "No ✗",          vodafone: "No ✗"          },
  { concepto: "Alta en 24h",            arista: "Sí ✓",           movistar: "3-7 días ✗",   orange: "3-7 días ✗",   vodafone: "3-7 días ✗"   },
];

const RESENAS = [
  { nombre: "Pedro S.", ciudad: "Alicante", estrellas: 5, texto: "Llevaba con Movistar 10 años. Me fui a Arista y ahorro 35€ al mes. La fibra va igual de bien y cuando tuve un problema me lo resolvieron en 20 minutos por WhatsApp.", servicio: "Fibra 600Mb + Móvil" },
  { nombre: "Laura M.", ciudad: "Benidorm", estrellas: 5, texto: "La mejor decisión que he tomado en años. Fibra + móvil + luz en una sola factura. Pago menos que antes solo con la fibra de Orange y ahora lo tengo todo.", servicio: "Pack Todo en Uno" },
  { nombre: "Antonio R.", ciudad: "Elche",   estrellas: 5, texto: "Sin permanencia de verdad. Probé el servicio y quedé tan contento que ya no me planteo cambiar. El asesor siempre disponible es un lujo que no esperaba.", servicio: "Fibra 1Gb" },
  { nombre: "Sofía C.", ciudad: "Torrevieja", estrellas: 5, texto: "Me dieron de alta en 6 horas. Con Vodafone tardé 3 semanas. Aquí hay gente de verdad detrás del servicio, no un call center en otro país.", servicio: "Fibra + 2 móviles" },
];

const MEDIOS = [
  { nombre: "Información.es", desc: "\"La empresa alicantina que está cambiando la forma de contratar\"", href: "https://www.informacion.es/economia/2026/03/31/grupo-arista-compania-alicantina-bc-128585485.html" },
  { nombre: "4.8★ Google",    desc: "Valoración media de más de 300 reseñas verificadas",                href: "#resenas" },
  { nombre: "Top 3 España",   desc: "Según comparativas independientes de tarifas 2026",                 href: "#comparativa" },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill={i < n ? "#FFB800" : "#E5E7EB"}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function MejorCompaniaPage() {
  return (
    <>
      <Header />
      <main className="font-sans">

        {/* ── HERO ──────────────────────────────────────────────────── */}
        <section className="mt-[108px] px-6 py-20 lg:py-28 lg:px-8"
          style={{ background: "linear-gradient(135deg, #050d1f 0%, #0a1a3a 40%, #1648D8 100%)" }}>
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 px-5 py-2 mb-8">
              <span className="text-[#FFB800] text-sm">🏆</span>
              <span className="text-[#FFB800] text-sm" style={{ fontWeight: 700 }}>Mejor empresa nueva de telecomunicaciones 2026</span>
            </div>
            <h1 className="text-[clamp(30px,5vw,60px)] text-white leading-tight mb-6" style={{ fontWeight: 900 }}>
              La mejor compañía de<br />
              <span style={{ color: "#FFD700" }}>fibra, móvil y luz</span> del mercado
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-4 max-w-2xl mx-auto">
              Valorada con <strong className="text-white">4.8★</strong> en Google por más de 300 clientes reales. Fibra desde <strong className="text-white">24,90€/mes</strong>, sin permanencia, sin letra pequeña.
            </p>
            <p className="text-base text-white/50 mb-10">
              Destacada en <strong className="text-white/70">Diario Información</strong> como la empresa alicantina que está cambiando el mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${WA}?text=${MSG}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-8 py-4 text-white text-base shadow-lg hover:bg-[#1da852] transition-all hover:scale-105"
                style={{ fontWeight: 700 }}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Empezar ahora — Es gratis
              </a>
              <a href="#comparativa"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-white text-base hover:bg-white/20 transition-all"
                style={{ fontWeight: 600 }}>
                Ver comparativa →
              </a>
            </div>
            {/* Mini stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
              {[
                { n: "4.8★", l: "Google Reviews" },
                { n: "+300", l: "Clientes satisfechos" },
                { n: "24h",  l: "Alta media" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-2xl text-white" style={{ fontWeight: 900 }}>{s.n}</p>
                  <p className="text-xs text-white/50">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MEDIOS ────────────────────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100 px-6 py-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-6" style={{ fontWeight: 600 }}>Reconocida por</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {MEDIOS.map((m) => (
                <a key={m.nombre} href={m.href} target={m.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                  className="rounded-2xl border border-gray-100 bg-[#F7F9FF] p-4 text-center hover:border-[#1648D8]/30 hover:shadow-sm transition-all">
                  <p className="text-base text-[#1648D8] mb-1" style={{ fontWeight: 800 }}>{m.nombre}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── POR QUÉ SOMOS LOS MEJORES ─────────────────────────────── */}
        <section className="bg-[#F7F9FF] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Por qué somos los mejores</span>
            </div>
            <h2 className="mb-3 text-3xl text-[#1A1A1A]" style={{ fontWeight: 800 }}>6 razones que nos hacen diferentes</h2>
            <p className="mb-12 text-gray-500 max-w-2xl">No son promesas de marketing. Son compromisos que cualquier cliente puede verificar desde el primer día.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {RAZONES.map((r) => (
                <div key={r.num} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#1648D8]/20 transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2FF]">
                      <svg className="h-5 w-5 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={r.icon} />
                      </svg>
                    </div>
                    <span className="text-xs text-[#1648D8]/40" style={{ fontWeight: 900 }}>{r.num}</span>
                  </div>
                  <h3 className="text-base text-[#1A1A1A] mb-2" style={{ fontWeight: 800 }}>{r.titulo}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARATIVA ───────────────────────────────────────────── */}
        <section id="comparativa" className="bg-white px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Comparativa objetiva</span>
            </div>
            <h2 className="mb-3 text-3xl text-[#1A1A1A]" style={{ fontWeight: 800 }}>Arista vs el resto del mercado</h2>
            <p className="mb-10 text-gray-500 max-w-2xl">Datos comparados con los precios públicos de los operadores principales. Actualizado 2026.</p>
            <div className="rounded-2xl bg-white border border-gray-100 overflow-x-auto shadow-sm">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-[#F5F6F8] border-b border-gray-100">
                    <th className="text-left px-5 py-3 text-[11px] uppercase tracking-widest text-gray-400" style={{ fontWeight: 700 }}>Concepto</th>
                    <th className="px-5 py-3 text-[11px] text-center text-[#1648D8]" style={{ fontWeight: 800 }}>Arista ✓</th>
                    <th className="px-5 py-3 text-[11px] text-center text-gray-400" style={{ fontWeight: 600 }}>Movistar</th>
                    <th className="px-5 py-3 text-[11px] text-center text-gray-400" style={{ fontWeight: 600 }}>Orange</th>
                    <th className="px-5 py-3 text-[11px] text-center text-gray-400" style={{ fontWeight: 600 }}>Vodafone</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARATIVA.map((row, i) => (
                    <tr key={row.concepto} className={`border-b border-gray-50 ${i % 2 === 1 ? "bg-[#FAFAFA]" : ""}`}>
                      <td className="px-5 py-3.5 text-xs text-gray-600" style={{ fontWeight: 600 }}>{row.concepto}</td>
                      <td className="px-5 py-3.5 text-xs text-center text-[#0D47A1]" style={{ fontWeight: 700 }}>{row.arista}</td>
                      <td className="px-5 py-3.5 text-xs text-center text-gray-400">{row.movistar}</td>
                      <td className="px-5 py-3.5 text-xs text-center text-gray-400">{row.orange}</td>
                      <td className="px-5 py-3.5 text-xs text-center text-gray-400">{row.vodafone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── RESEÑAS ───────────────────────────────────────────────── */}
        <section id="resenas" className="bg-[#F7F9FF] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Clientes reales</span>
            </div>
            <h2 className="mb-10 text-3xl text-[#1A1A1A]" style={{ fontWeight: 800 }}>Lo que dicen nuestros clientes</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {RESENAS.map((r) => (
                <div key={r.nombre} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1648D8] text-white text-xs" style={{ fontWeight: 700 }}>
                        {r.nombre.split(" ").map(w => w[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{r.nombre}</p>
                        <p className="text-[11px] text-gray-400">{r.ciudad}</p>
                      </div>
                    </div>
                    <Stars n={r.estrellas} />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">&ldquo;{r.texto}&rdquo;</p>
                  <span className="inline-flex rounded-full bg-[#EEF2FF] px-3 py-0.5 text-[10px] text-[#1648D8]" style={{ fontWeight: 600 }}>
                    {r.servicio}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────────────── */}
        <section className="px-6 py-20 lg:px-8"
          style={{ background: "linear-gradient(135deg, #050d1f 0%, #1648D8 100%)" }}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFB800]/20 border border-[#FFB800]/30 px-5 py-2 mb-6">
              <span className="text-[#FFB800]">🏆</span>
              <span className="text-[#FFB800] text-sm" style={{ fontWeight: 700 }}>La mejor compañía según nuestros clientes</span>
            </div>
            <h2 className="text-[clamp(26px,4vw,46px)] text-white mb-4" style={{ fontWeight: 900 }}>
              Comprueba por qué somos diferentes
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
              Alta gratuita · Sin permanencia · Respuesta en menos de 2 horas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${WA}?text=${MSG}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-8 py-4 text-white text-base shadow-lg hover:bg-[#1da852] transition-all hover:scale-105"
                style={{ fontWeight: 700 }}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Contratar ahora por WhatsApp
              </a>
              <Link href="/cobertura"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-white text-base hover:bg-white/20 transition-all"
                style={{ fontWeight: 600 }}>
                Comprobar mi cobertura →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
