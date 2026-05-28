import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fibra y Móvil en Ibiza 2026 | Arista · Red Orange sin permanencia",
  description:
    "Fibra y móvil en Ibiza desde 35,90€/mes. Red MasOrange. Sin permanencia. Para residentes y negocios de hostelería en Ibiza, Sant Antoni y Santa Eulalia.",
  alternates: { canonical: "https://aristagroup.es/fibra-ibiza" },
  openGraph: {
    title: "Fibra y Móvil en Ibiza | Arista",
    description: "Desde 35,90€/mes. Sin permanencia. Para residentes y hostelería.",
    url: "https://aristagroup.es/fibra-ibiza",
    siteName: "Arista Group",
    images: [{ url: "https://aristagroup.es/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fibra y Móvil en Ibiza",
    description: "Desde 35,90€/mes. Sin permanencia.",
  },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const CHECK = "M5 13l4 4L19 7";

const FAQS = [
  { q: "¿Cubren Ibiza Town, Sant Antoni y Santa Eulalia?", a: "Sí. La red MasOrange tiene cobertura en todo el casco urbano de Ibiza, Sant Antoni de Portmany y Santa Eulalia del Río, además de las principales urbanizaciones." },
  { q: "¿Podemos contratar para un negocio de hostelería?", a: "Sí. Ofrecemos soluciones específicas para hoteles, bares y restaurantes en Ibiza: fibra dedicada, varias líneas móviles, facturación a empresa y asistencia prioritaria en temporada alta." },
  { q: "¿Puedo activar y cancelar por temporada?", a: "Sí. Sin permanencia, puedes contratar para la temporada y cancelar al terminar el verano sin ningún coste adicional." },
  { q: "¿Funciona la fibra si mi local está en una zona residencial alejada?", a: "Comprueba tu dirección en nuestro verificador de cobertura o escríbenos por WhatsApp. Cubrimos la mayoría de las zonas urbanizadas de la isla." },
];

export default function FibraIbiza() {
  const waMsg = encodeURIComponent("Hola, quiero contratar fibra y móvil en Ibiza con Arista.");
  return (
    <>
      <Header />
      <main className="mt-[108px]">

        {/* Hero */}
        <section className="bg-[#0D1F5C] px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/70" style={{ fontWeight: 700 }}>Ibiza · Baleares · Red MasOrange</span>
            </div>
            <h1 className="text-[clamp(28px,5vw,58px)] text-white leading-tight tracking-tight mb-5" style={{ fontWeight: 900 }}>
              Fibra y móvil en Ibiza —{" "}
              <span style={{ color: "#00E58A" }}>Sin permanencia</span>
            </h1>
            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Para residentes, negocios y hostelería de Ibiza Town, Sant Antoni y Santa Eulalia. Fibra 600 Mb + móvil 5G desde 35,90€/mes. Actívalo por temporada.
            </p>
            <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
              Contratar fibra en Ibiza →
            </a>
          </div>
        </section>

        {/* Sectores */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl text-center text-[#1A1A1A] mb-8" style={{ fontWeight: 800 }}>Para quién es Arista en Ibiza</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { emoji: "🏨", t: "Hoteles y villas", d: "Fibra dedicada y líneas para el equipo. Facturación a empresa." },
                { emoji: "🍹", t: "Bares y restaurantes", d: "Conectividad estable para TPV, música y reservas online." },
                { emoji: "🏠", t: "Residentes", d: "Fibra rápida para tu casa en Ibiza, Sant Antoni o Santa Eulalia." },
                { emoji: "🌍", t: "Turistas long stay", d: "Sin permanencia para estancias largas. Activa y cancela cuando quieras." },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl bg-white border border-gray-100 p-5 text-center">
                  <span className="text-3xl mb-3 block">{item.emoji}</span>
                  <p className="text-sm text-[#1A1A1A] mb-1.5" style={{ fontWeight: 700 }}>{item.t}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pack */}
        <section className="bg-white px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl text-center text-[#1A1A1A] mb-8" style={{ fontWeight: 800 }}>Pack Fibra + Móvil Ibiza</h2>
            <div className="rounded-3xl border-2 border-[#1648D8] p-8 shadow-xl max-w-md mx-auto">
              <div className="flex items-end gap-1 mb-2">
                <span className="text-5xl text-[#1648D8]" style={{ fontWeight: 900 }}>35</span>
                <span className="text-2xl text-[#1648D8] mb-1" style={{ fontWeight: 700 }}>,90€</span>
                <span className="text-sm text-gray-400 mb-1.5">/mes</span>
              </div>
              <p className="text-sm text-gray-500 mb-5">Fibra 600 Mb + Móvil 80 GB 5G</p>
              {["Fibra 600 Mb simétrica", "Móvil 80 GB + llamadas ilimitadas", "Sin permanencia", "Alta en 24-48h", "Facturación a empresa disponible", "Asistencia prioritaria en temporada alta"].map((f) => (
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

        {/* FAQ */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 800 }}>Preguntas frecuentes — Ibiza</h2>
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
            <h2 className="text-2xl text-white mb-3" style={{ fontWeight: 900 }}>Fibra en Ibiza desde 35,90€/mes</h2>
            <p className="text-sm text-white/60 mb-6">Sin permanencia · Alta en 24-48h · Red MasOrange</p>
            <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
              Contratar en Ibiza →
            </a>
          </div>
        </section>

        <section className="bg-white px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4" style={{ fontWeight: 700 }}>También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/fibra-torrevieja", label: "Fibra en Torrevieja" },
                { href: "/empresas",         label: "Soluciones para empresas" },
                { href: "/fibra-barata-alicante", label: "Fibra barata en Alicante" },
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
