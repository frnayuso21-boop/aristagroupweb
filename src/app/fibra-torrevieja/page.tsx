import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fibra y Móvil en Torrevieja | Red Orange desde 35,90€ · Arista",
  description:
    "Fibra y móvil en Torrevieja desde 35,90€/mes. Atención en español, inglés y ruso. Sin permanencia. Alta en 24h. Para residentes europeos de la Costa Blanca.",
  alternates: { canonical: "https://aristagroup.es/fibra-torrevieja" },
  openGraph: {
    title: "Fibra y Móvil en Torrevieja | Arista",
    description: "Desde 35,90€/mes. Atención en español, inglés y ruso.",
    url: "https://aristagroup.es/fibra-torrevieja",
    siteName: "Arista Group",
    images: [{ url: "https://aristagroup.es/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fibra y Móvil en Torrevieja",
    description: "Desde 35,90€/mes. Atención en español, inglés y ruso.",
  },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const CHECK = "M5 13l4 4L19 7";

const FAQS = [
  { q: "¿Do you speak English? / ¿Habláis inglés?", a: "Yes. Our team speaks English, Spanish and Russian. We are used to helping European residents in Torrevieja. / Sí. Nuestro equipo atiende en inglés, español y ruso." },
  { q: "¿Hacéis contratos sin NIE o con NIE extranjero?", a: "Sí. Gestionamos contratos para residentes extranjeros de la Costa Blanca. Solo necesitas tu pasaporte o NIE/TIE." },
  { q: "¿En cuánto tiempo instalan la fibra en Torrevieja?", a: "En 24-48 horas hábiles en las zonas principales de Torrevieja. Para urbanizaciones más alejadas puede ser 48-72 horas." },
  { q: "¿Puedo contratar solo mientras estoy en Torrevieja?", a: "Sí. No hay permanencia. Puedes contratar por la temporada que estés y cancelar cuando te vayas. Sin penalizaciones." },
];

export default function FibraTorrevieja() {
  const waMsg = encodeURIComponent("Hola, quiero contratar fibra y móvil en Torrevieja con Arista.");
  return (
    <>
      <Header />
      <main className="mt-[108px]">

        {/* Hero */}
        <section className="bg-[#0D1F5C] px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/70" style={{ fontWeight: 700 }}>Torrevieja · Costa Blanca · EN / ES / RU</span>
            </div>
            <h1 className="text-[clamp(28px,5vw,58px)] text-white leading-tight tracking-tight mb-5" style={{ fontWeight: 900 }}>
              Fibra y móvil en Torrevieja —{" "}
              <span style={{ color: "#00E58A" }}>Atención en tu idioma</span>
            </h1>
            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Especialistas en conectividad para residentes europeos de Torrevieja y la Costa Blanca. Hablamos inglés, español y ruso. Sin permanencia. Alta en 24h.
            </p>
            <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
              Contratar fibra en Torrevieja →
            </a>
          </div>
        </section>

        {/* Pack */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl text-center text-[#1A1A1A] mb-8" style={{ fontWeight: 800 }}>Pack Fibra + Móvil en Torrevieja</h2>
            <div className="rounded-3xl border-2 border-[#1648D8] bg-white p-8 shadow-xl max-w-md mx-auto">
              <span className="inline-block mb-4 rounded-full bg-[#1648D8] px-3 py-1 text-[11px] text-white" style={{ fontWeight: 700 }}>Más contratado en Torrevieja</span>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-5xl text-[#1648D8]" style={{ fontWeight: 900 }}>35</span>
                <span className="text-2xl text-[#1648D8] mb-1" style={{ fontWeight: 700 }}>,90€</span>
                <span className="text-sm text-gray-400 mb-1.5">/mes</span>
              </div>
              <p className="text-sm text-gray-500 mb-5">Fibra 600 Mb + Móvil 80 GB 5G</p>
              {["Fibra 600 Mb simétrica", "Móvil 80 GB + llamadas ilimitadas", "Sin permanencia", "Alta en 24h", "Atención en inglés, español y ruso", "Asesor personal asignado"].map((f) => (
                <div key={f} className="flex items-center gap-2 mb-2">
                  <svg className="h-4 w-4 flex-shrink-0 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={CHECK} />
                  </svg>
                  <span className="text-sm text-gray-600">{f}</span>
                </div>
              ))}
              <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                className="mt-5 block w-full rounded-2xl py-4 text-center text-sm text-black hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
                Contratar por 35,90€/mes →
              </a>
            </div>
          </div>
        </section>

        {/* Por qué en Torrevieja */}
        <section className="bg-white px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 800 }}>Por qué Arista en Torrevieja</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "Europeos bienvenidos",   d: "Brits, Germans, Scandinavians, Russians — we are used to helping all European residents in Costa Blanca." },
                { t: "Sin barreras de idioma", d: "Atendemos en inglés, español y ruso. Tu asesor habla tu idioma y conoce tu situación." },
                { t: "Sin permanencia",        d: "Para residentes de temporada, la posibilidad de cancelar sin coste es esencial. Aquí la tienes." },
                { t: "Red MasOrange",          d: "La mejor cobertura de la costa. Funcionamos en toda la vega baja y el litoral de Torrevieja." },
                { t: "Gestión del contrato",   d: "Te ayudamos con los trámites aunque seas extranjero: NIE, CIF, contrato en inglés si lo necesitas." },
                { t: "Alta rápida",            d: "En 24-48h tienes el técnico en casa. No tienes que esperar semanas como en las grandes operadoras." },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl border border-gray-100 p-5">
                  <p className="text-sm text-[#1A1A1A] mb-1.5" style={{ fontWeight: 700 }}>{item.t}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 800 }}>Preguntas frecuentes — Torrevieja</h2>
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

        {/* CTA */}
        <section className="bg-[#1648D8] px-6 py-14 lg:px-8 text-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-2xl text-white mb-3" style={{ fontWeight: 900 }}>Fibra en Torrevieja desde 35,90€/mes</h2>
            <p className="text-sm text-white/60 mb-6">Sin permanencia · Alta en 24h · Atención en inglés, español y ruso</p>
            <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
              Contratar en Torrevieja →
            </a>
          </div>
        </section>

        <section className="bg-white px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4" style={{ fontWeight: 700 }}>También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/fibra-ibiza",           label: "Fibra en Ibiza" },
                { href: "/fibra-barata-alicante",  label: "Fibra barata en Alicante" },
                { href: "/cambia-de-compania",      label: "Cambia de operadora" },
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
