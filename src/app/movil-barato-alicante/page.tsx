import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Móvil Barato Alicante 2026 | Red Orange desde 6,90€ · Arista",
  description:
    "Tarifas móvil baratas en Alicante. Red Orange desde 6,90€/mes. Sin permanencia. La operadora local de Alicante con mejor precio.",
  alternates: { canonical: "https://aristagroup.es/movil-barato-alicante" },
  openGraph: {
    title: "Móvil Barato Alicante 2026 | Desde 6,90€",
    description: "Red Orange desde 6,90€/mes en Alicante. Sin permanencia.",
    url: "https://aristagroup.es/movil-barato-alicante",
    siteName: "Arista Group",
    images: [{ url: "https://aristagroup.es/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Móvil Barato Alicante 2026",
    description: "Red Orange desde 6,90€/mes. Sin permanencia.",
  },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const CHECK = "M5 13l4 4L19 7";

const TARIFAS = [
  { nombre: "Arista Móvil 30",   gb: "30 GB",      precio: "6,90",  popular: false },
  { nombre: "Arista Móvil 60",   gb: "60 GB",      precio: "7,90",  popular: false },
  { nombre: "Arista Móvil 80",   gb: "80 GB",      precio: "8,90",  popular: true  },
  { nombre: "Arista Infinity",   gb: "Ilimitado",  precio: "10,90", popular: false },
];

const FAQS = [
  { q: "¿La red Orange de Arista es igual que Orange directo?", a: "Sí. Usamos la red MasOrange, exactamente la misma infraestructura física. La diferencia es que Arista cobra menos porque tiene menos estructura." },
  { q: "¿Qué pasa con mi número si me paso a Arista?", a: "Lo conservas. La portabilidad la gestionamos nosotros de forma gratuita. El número sigue siendo tuyo sin interrupción de servicio." },
  { q: "¿Puedo usar eSIM con Arista en Alicante?", a: "Sí. Todas nuestras tarifas son compatibles con eSIM. Se activa con un código QR que te enviamos por email en minutos." },
  { q: "¿Funciona el 5G de Arista en toda Alicante?", a: "El 5G de red MasOrange cubre las zonas urbanas de Alicante, El Campello, San Juan, Santa Pola y la mayoría de la costa. Consulta cobertura exacta en nuestra web." },
];

export default function MovilBaratoAlicante() {
  const waMsg = encodeURIComponent("Hola, quiero contratar móvil barato en Alicante con Arista.");
  return (
    <>
      <Header />
      <main className="mt-[108px]">

        {/* Hero */}
        <section className="px-6 py-16 lg:px-8 lg:py-20 text-center"
          style={{ background: "linear-gradient(135deg, #0d0028 0%, #1a0050 50%, #E91E8C22 100%)" }}>
          <div className="mx-auto max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
              style={{ backgroundColor: "rgba(233,30,140,0.1)", borderColor: "rgba(233,30,140,0.3)" }}>
              <span className="text-[11px] uppercase tracking-[0.25em]" style={{ color: "#E91E8C", fontWeight: 700 }}>5G · Red MasOrange · Alicante</span>
            </div>
            <h1 className="text-[clamp(28px,5vw,58px)] text-white leading-tight tracking-tight mb-5" style={{ fontWeight: 900 }}>
              Móvil barato en Alicante —{" "}
              <span style={{ color: "#E91E8C" }}>Red Orange desde 6,90€/mes</span>
            </h1>
            <p className="text-base text-white/55 leading-relaxed mb-8 max-w-2xl mx-auto">
              La operadora local de Alicante con las mejores tarifas móviles. 5G, llamadas ilimitadas, eSIM y sin permanencia. Sin permanencia y sin sorpresas.
            </p>
            <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#E91E8C", fontWeight: 700 }}>
              Ver tarifas móvil →
            </a>
          </div>
        </section>

        {/* Tarifas */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl text-center text-[#1A1A1A] mb-8" style={{ fontWeight: 800 }}>Tarifas de móvil en Alicante</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TARIFAS.map((t) => (
                <div key={t.nombre} className={`rounded-3xl border p-5 ${t.popular ? "border-[#E91E8C] shadow-lg" : "border-gray-200 bg-white"}`}
                  style={{ backgroundColor: t.popular ? "#FDF2F8" : undefined }}>
                  {t.popular && <span className="inline-block mb-2 rounded-full px-3 py-1 text-[11px] text-white" style={{ backgroundColor: "#E91E8C", fontWeight: 700 }}>Más popular</span>}
                  <p className="text-xs text-gray-400 mb-1">{t.nombre}</p>
                  <p className="text-3xl font-bold text-[#1A1A1A] mb-0.5">{t.gb}</p>
                  <div className="flex items-end gap-0.5 mb-3">
                    <span className="text-2xl text-[#1648D8]" style={{ fontWeight: 900 }}>{t.precio.split(",")[0]}</span>
                    <span className="text-base text-[#1648D8] mb-0.5" style={{ fontWeight: 700 }}>,{t.precio.split(",")[1]}€</span>
                    <span className="text-xs text-gray-400 mb-1">/mes</span>
                  </div>
                  {["5G incluido", "Llamadas ilimitadas", "Sin permanencia", "eSIM compatible"].map((f) => (
                    <div key={f} className="flex items-center gap-1.5 mb-1">
                      <svg className="h-3.5 w-3.5 flex-shrink-0 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={CHECK} />
                      </svg>
                      <span className="text-xs text-gray-500">{f}</span>
                    </div>
                  ))}
                  <a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hola, quiero contratar ${t.nombre} — ${t.gb} por ${t.precio}€/mes.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="mt-3 block w-full rounded-xl py-2.5 text-center text-xs text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#E91E8C", fontWeight: 700 }}>
                    Contratar →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparativa */}
        <section className="bg-white px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl text-[#1A1A1A] mb-6 text-center" style={{ fontWeight: 800 }}>Arista vs operadoras grandes en Alicante</h2>
            <div className="rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="grid grid-cols-5 border-b border-gray-100 bg-gray-50 px-4 py-3">
                {["", "Arista", "Movistar", "Orange", "Vodafone"].map((h) => (
                  <div key={h} className="text-center text-[11px] text-gray-500" style={{ fontWeight: 700 }}>{h}</div>
                ))}
              </div>
              {[
                { c: "80 GB/mes",           a: "8,90€",      m: "22,00€",      o: "18,99€",     v: "21,99€" },
                { c: "Sin permanencia",     a: "✓ Sí",        m: "✗ No",        o: "✗ No",       v: "✗ No" },
                { c: "eSIM",               a: "✓ Sí",        m: "✓ Sí",        o: "✓ Sí",       v: "✓ Sí" },
                { c: "Empresa local",       a: "✓ Alicante",  m: "✗ No",        o: "✗ No",       v: "✗ No" },
                { c: "Atención WhatsApp",   a: "✓ <1h",       m: "✗ Call center",o: "✗ Call center",v: "✗ Call center" },
              ].map((row, i) => (
                <div key={row.c} className={`grid grid-cols-5 items-center px-4 py-2.5 border-b border-gray-50 text-xs ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                  <span className="text-gray-600">{row.c}</span>
                  <span className="text-center text-[#E91E8C]" style={{ fontWeight: 700 }}>{row.a}</span>
                  <span className="text-center text-gray-400">{row.m}</span>
                  <span className="text-center text-gray-400">{row.o}</span>
                  <span className="text-center text-gray-400">{row.v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 800 }}>Preguntas frecuentes</h2>
            <div className="flex flex-col gap-4">
              {FAQS.map((f) => (
                <div key={f.q} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <p className="text-sm text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{f.q}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Internal linking */}
        <section className="bg-[#1648D8] px-6 py-14 lg:px-8 text-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-2xl text-white mb-3" style={{ fontWeight: 900 }}>Móvil barato en Alicante desde hoy</h2>
            <p className="text-sm text-white/60 mb-6">Red MasOrange · Desde 6,90€/mes · Alta en 24h</p>
            <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity mb-8"
              style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
              Contratar móvil en Alicante →
            </a>
          </div>
        </section>

        <section className="bg-white px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4" style={{ fontWeight: 700 }}>También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/fibra-barata-alicante", label: "Fibra barata en Alicante" },
                { href: "/tarifas",               label: "Todas las tarifas" },
                { href: "/cambia-de-compania",     label: "Cambia de operadora" },
                { href: "/movil",                  label: "Tarifas móvil detalle" },
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
