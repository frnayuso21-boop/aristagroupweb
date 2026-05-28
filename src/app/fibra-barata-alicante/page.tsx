import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FibraCards from "@/components/FibraCards";

export const metadata: Metadata = {
  title: "Fibra Barata Alicante 2026 | Desde 24,90€/mes · Arista",
  description:
    "Fibra óptica barata en Alicante desde 24,90€/mes. Red MasOrange. Sin permanencia. Alta en 24h. La operadora local más económica de Alicante.",
  alternates: { canonical: "https://aristagroup.es/fibra-barata-alicante" },
  openGraph: {
    title: "Fibra Barata Alicante 2026 | Desde 24,90€/mes",
    description: "Fibra óptica barata en Alicante desde 24,90€/mes. Red MasOrange. Sin permanencia.",
    url: "https://aristagroup.es/fibra-barata-alicante",
    siteName: "Arista Group",
    images: [{ url: "https://aristagroup.es/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fibra Barata Alicante 2026",
    description: "Desde 24,90€/mes. Red MasOrange. Sin permanencia.",
  },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const CHECK = "M5 13l4 4L19 7";

const FAQS = [
  { q: "¿Hay fibra de Arista en todos los barrios de Alicante?", a: "Sí. Cubrimos todo el municipio de Alicante, incluyendo el centro, Albufereta, Playa de San Juan, Carolinas, Benalúa y pedanías. Comprueba tu cobertura exacta en nuestra web o escríbenos por WhatsApp." },
  { q: "¿Por qué la fibra de Arista es más barata que Movistar u Orange?", a: "Somos una operadora local sin los gastos de una multinacional. Pagamos menos comisiones, no tenemos call center externo y repercutimos ese ahorro en el precio. Misma red MasOrange, menor precio." },
  { q: "¿Cuánto tarda el alta de la fibra?", a: "El técnico viene en 24-48 horas hábiles. En muchos casos el mismo día o al día siguiente de firmar el contrato." },
  { q: "¿Tengo que devolver el router si me voy?", a: "No. El router es tuyo desde el día uno. No hay depósito ni alquiler mensual." },
];

export default function FibraBarataAlicante() {
  const waMsg = encodeURIComponent("Hola, quiero contratar fibra barata en Alicante con Arista.");
  return (
    <>
      <Header />
      <main className="mt-[108px]">

        {/* Hero */}
        <section className="bg-[#0D1F5C] px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/70" style={{ fontWeight: 700 }}>Alicante · Red MasOrange</span>
            </div>
            <h1 className="text-[clamp(30px,5vw,60px)] text-white leading-tight tracking-tight mb-5" style={{ fontWeight: 900 }}>
              Fibra barata en Alicante —{" "}
              <span style={{ color: "#00E58A" }}>Desde 24,90€/mes</span>
            </h1>
            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              La operadora local de Alicante con la mejor relación calidad-precio. Misma red que Orange. Sin permanencia. Sin letra pequeña. Alta en 24 horas.
            </p>
            <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
              Contratar fibra en Alicante →
            </a>
          </div>
        </section>

        {/* Tarifas — mismo diseño que /tarifas/fibra */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl text-center text-[#1A1A1A] mb-8" style={{ fontWeight: 800 }}>Tarifas de fibra en Alicante</h2>
          </div>
          <FibraCards />
        </section>

        {/* Por qué Arista en Alicante */}
        <section className="bg-white px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 800 }}>Por qué elegir Arista en Alicante</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "Empresa alicantina", d: "Sede en El Campello. Atendemos a alicantinos desde hace años. No somos un call center de Madrid." },
                { t: "Misma red que Orange", d: "Usamos la red MasOrange, la mejor cobertura de fibra en toda la provincia de Alicante." },
                { t: "Sin permanencia", d: "Puedes irte cuando quieras. Ningún contrato de fidelización. Nos quedamos porque damos buen servicio." },
                { t: "Alta en 24h", d: "El técnico va a tu casa en 24-48h. Sin listas de espera ni trámites interminables." },
                { t: "Asesor personal", d: "Tendrás una persona asignada que conoce tu contrato. No explicas tu caso cada vez que llamas." },
                { t: "Precio garantizado", d: "Lo que pagas hoy es lo que pagas siempre. Sin subidas anuales ni sorpresas en la factura." },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl border border-gray-100 p-5">
                  <div className="flex items-start gap-2 mb-2">
                    <svg className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={CHECK} />
                    </svg>
                    <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{item.t}</p>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed pl-6">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparativa vs Movistar y Orange */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl text-[#1A1A1A] mb-6 text-center" style={{ fontWeight: 800 }}>Arista vs Movistar y Orange en Alicante</h2>
            <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm">
              <div className="grid grid-cols-4 border-b border-gray-100 bg-gray-50 px-4 py-3">
                {["", "Arista", "Movistar", "Orange"].map((h) => (
                  <div key={h} className="text-center text-xs text-gray-500" style={{ fontWeight: 700 }}>{h}</div>
                ))}
              </div>
              {[
                { c: "Fibra 600Mb",       a: "24,90€", m: "39,99€",  o: "34,99€" },
                { c: "Sin permanencia",   a: "✓ Sí",    m: "✗ No",   o: "✗ No" },
                { c: "Alta en 24h",       a: "✓ Sí",    m: "✗ No",   o: "✗ No" },
                { c: "Asesor personal",   a: "✓ Sí",    m: "✗ No",   o: "✗ No" },
                { c: "Empresa local",     a: "✓ Alicante", m: "✗ No", o: "✗ No" },
              ].map((row, i) => (
                <div key={row.c} className={`grid grid-cols-4 items-center px-4 py-3 border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                  <span className="text-sm text-gray-600">{row.c}</span>
                  <span className="text-center text-sm text-[#1648D8]" style={{ fontWeight: 700 }}>{row.a}</span>
                  <span className="text-center text-sm text-gray-400">{row.m}</span>
                  <span className="text-center text-sm text-gray-400">{row.o}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 800 }}>Preguntas frecuentes</h2>
            <div className="flex flex-col gap-4">
              {FAQS.map((f) => (
                <div key={f.q} className="rounded-2xl border border-gray-100 p-5">
                  <p className="text-sm text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{f.q}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-[#1648D8] px-6 py-14 lg:px-8 text-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-2xl text-white mb-3" style={{ fontWeight: 900 }}>¿Empezamos?</h2>
            <p className="text-sm text-white/60 mb-6">Fibra barata en Alicante desde 24,90€/mes · Alta en 24h · Sin permanencia</p>
            <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
              Contratar fibra en Alicante →
            </a>
          </div>
        </section>

        {/* Internal linking */}
        <section className="bg-white px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4" style={{ fontWeight: 700 }}>También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/movil-barato-alicante", label: "Móvil barato en Alicante" },
                { href: "/cambia-de-compania",    label: "Cambia de Movistar a Arista" },
                { href: "/fibra-torrevieja",      label: "Fibra en Torrevieja" },
                { href: "/fibra-orange-alicante", label: "Fibra red Orange Alicante" },
                { href: "/tarifas/fibra",         label: "Ver todas las tarifas de fibra" },
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
