import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Operadora Local Alicante | Arista Móvil · Empresa Alicantina",
  description:
    "Arista es la operadora local de Alicante. Atención humana real. Fibra y móvil en red Orange. Sin robots ni esperas. Empresa alicantina con asesor personal.",
  alternates: { canonical: "https://aristagroup.es/operadora-local-alicante" },
  openGraph: {
    title: "Operadora Local Alicante | Arista",
    description: "Atención humana real. Empresa alicantina. Red Orange.",
    url: "https://aristagroup.es/operadora-local-alicante",
    siteName: "Arista Group",
    images: [{ url: "https://aristagroup.es/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operadora Local Alicante | Arista",
    description: "Atención humana real. Empresa alicantina. Red Orange.",
  },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const CHECK = "M5 13l4 4L19 7";

const FAQS = [
  { q: "¿Qué hace diferente a Arista de las otras operadoras?", a: "Somos alicantinos. Conocemos la provincia, sus municipios y sus necesidades. Tienes una persona asignada que siempre responde. No hay robots, no hay colas, no hay 'su llamada es muy importante para nosotros'." },
  { q: "¿Tienen sede física en Alicante?", a: "Sí. Estamos en El Campello, Alicante. Puedes visitarnos o contactarnos directamente por WhatsApp, teléfono o email." },
  { q: "¿La atención al cliente es realmente rápida?", a: "Nuestro tiempo de respuesta medio por WhatsApp es inferior a 1 hora en horario laboral. Sin centralitas, sin tickets de soporte que se pierden." },
  { q: "¿En qué zonas de Alicante operan?", a: "En toda la provincia: Alicante ciudad, El Campello, Benidorm, Torrevieja, Orihuela Costa, Santa Pola, Elche, Villena y toda la costa. También en Ibiza y otras zonas de Baleares." },
];

export default function OperadoraLocalAlicante() {
  const waMsg = encodeURIComponent("Hola, quiero información sobre los servicios de Arista, la operadora local de Alicante.");
  return (
    <>
      <Header />
      <main className="mt-[108px]">

        {/* Hero */}
        <section className="bg-[#0D1F5C] px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/70" style={{ fontWeight: 700 }}>Empresa alicantina · Personas reales · Red Orange</span>
            </div>
            <h1 className="text-[clamp(26px,4.5vw,56px)] text-white leading-tight tracking-tight mb-5" style={{ fontWeight: 900 }}>
              La operadora local de Alicante —{" "}
              <span style={{ color: "#00E58A" }}>Atención humana real</span>
            </h1>
            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              No somos un call center de Madrid. Somos de Alicante, conocemos Alicante y atendemos a alicantinos. Fibra y móvil en red Orange. Precio garantizado. Sin robots.
            </p>
            <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
              Hablar con un asesor alicantino →
            </a>
          </div>
        </section>

        {/* Lo que nos diferencia */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl text-center text-[#1A1A1A] mb-10" style={{ fontWeight: 800 }}>Lo que significa ser operadora local</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { emoji: "🏠", t: "Sede en El Campello",        d: "No somos una web sin cara. Tenemos oficina física en Alicante y puedes visitarnos." },
                { emoji: "👤", t: "Asesor personal asignado",    d: "Una persona real conoce tu contrato. La misma siempre. Sin explicar tu caso cada vez." },
                { emoji: "⚡", t: "Respuesta en menos de 1h",    d: "WhatsApp, teléfono o email. Sin robots, sin colas, sin tickets que se pierden." },
                { emoji: "💰", t: "Precios locales",              d: "Sin los gastos de una multinacional. Ahorramos y te lo pasamos en precio." },
                { emoji: "🔒", t: "Precio garantizado",          d: "Lo que pagas hoy es lo que pagas siempre. Sin subidas anuales que llegan sin avisar." },
                { emoji: "🌊", t: "Conocemos la provincia",      d: "Sabemos dónde hay cobertura, cómo es la instalación en cada barrio y qué necesita cada zona." },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl bg-white border border-gray-100 p-5">
                  <span className="text-2xl mb-3 block">{item.emoji}</span>
                  <p className="text-sm text-[#1A1A1A] mb-1.5" style={{ fontWeight: 700 }}>{item.t}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="bg-white px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 800 }}>Servicios de Arista en Alicante</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "Fibra óptica",      p: "Desde 24,90€/mes", d: "600 Mb y 1 Gb simétrica. Red MasOrange. Router WiFi incluido. Alta en 24h.", href: "/tarifas/fibra" },
                { t: "Móvil 5G",          p: "Desde 6,90€/mes",  d: "30, 60, 80 GB o ilimitado. Llamadas incluidas. eSIM. Red MasOrange.",          href: "/movil" },
                { t: "Fibra + Energía",   p: "Desde 28,90€/mes", d: "Luz, fibra y móvil en una sola factura. Precio del kWh garantizado.",            href: "/fibra-energia" },
                { t: "Para empresas",     p: "A medida",          d: "Soluciones para autónomos, pymes y corporaciones. Facturación a empresa.",        href: "/empresas" },
              ].map((item) => (
                <Link key={item.t} href={item.href}
                  className="rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow hover:border-[#1648D8]/20 block">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-[#1A1A1A] mb-0.5" style={{ fontWeight: 700 }}>{item.t}</p>
                      <p className="text-xs text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>{item.p}</p>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.d}</p>
                    </div>
                    <svg className="h-5 w-5 flex-shrink-0 text-[#1648D8] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 800 }}>Preguntas sobre Arista Alicante</h2>
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
            <h2 className="text-2xl text-white mb-3" style={{ fontWeight: 900 }}>Habla con alguien de Alicante</h2>
            <p className="text-sm text-white/60 mb-6">Sin robots · Respuesta en menos de 1h · Empresa local alicantina</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
                WhatsApp →
              </a>
              <a href="tel:+34621192578"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 px-8 py-4 text-sm text-white hover:bg-white/10 transition-colors"
                style={{ fontWeight: 600 }}>
                Llamar ahora
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4" style={{ fontWeight: 700 }}>También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/fibra-barata-alicante",  label: "Fibra barata en Alicante" },
                { href: "/movil-barato-alicante",  label: "Móvil barato en Alicante" },
                { href: "/fibra-orange-alicante",  label: "Fibra red Orange Alicante" },
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
