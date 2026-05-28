import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fibra Red Orange Alicante | Más barato que Orange · Arista",
  description:
    "Fibra en red Orange en Alicante más barata que Orange directo. Misma cobertura. Desde 24,90€/mes sin permanencia. Empresa local alicantina.",
  alternates: { canonical: "https://aristagroup.es/fibra-orange-alicante" },
  openGraph: {
    title: "Fibra Red Orange Alicante | Más barato que Orange",
    description: "Misma red. Mejor precio. Desde 24,90€/mes.",
    url: "https://aristagroup.es/fibra-orange-alicante",
    siteName: "Arista Group",
    images: [{ url: "https://aristagroup.es/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fibra Red Orange Alicante",
    description: "Misma red. Mejor precio. Desde 24,90€/mes.",
  },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const CHECK = "M5 13l4 4L19 7";

const FAQS = [
  { q: "¿La fibra de Arista usa la misma red que Orange?", a: "Sí. Arista opera sobre la red MasOrange (antes MásMóvil + Orange), exactamente la misma infraestructura física de fibra óptica que Orange directo. La diferencia está en el precio y en el servicio." },
  { q: "¿Por qué Arista es más barato si usa la misma red?", a: "Porque somos una operadora local sin los gastos de una multinacional: sin call center externo, sin publicidad masiva, sin cargos de marca. Ese ahorro te lo pasamos a ti." },
  { q: "¿La cobertura es idéntica a Orange en Alicante?", a: "La cobertura de red es la misma. Si Orange tiene fibra en tu dirección, Arista también. Puedes comprobarlo en nuestro verificador." },
  { q: "¿Puedo pasar de Orange a Arista sin corte de fibra?", a: "Sí. La portabilidad de fibra se realiza con solapamiento: instalamos la nueva línea antes de dar de baja la antigua. Sin días sin internet." },
];

export default function FibraOrangeAlicante() {
  const waMsg = encodeURIComponent("Hola, quiero contratar fibra en red Orange en Alicante con Arista. ¿Más barato que Orange directo?");
  return (
    <>
      <Header />
      <main className="mt-[108px]">

        {/* Hero */}
        <section className="bg-[#0D1F5C] px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/70" style={{ fontWeight: 700 }}>Red MasOrange · Alicante · Misma red. Mejor precio.</span>
            </div>
            <h1 className="text-[clamp(26px,4.5vw,56px)] text-white leading-tight tracking-tight mb-5" style={{ fontWeight: 900 }}>
              Fibra en red Orange en Alicante —{" "}
              <span style={{ color: "#00E58A" }}>Más barato que Orange directo</span>
            </h1>
            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Misma cobertura de fibra óptica que Orange. Misma velocidad. Pero con el precio de una operadora local. Desde 24,90€/mes. Sin permanencia. Empresa de Alicante.
            </p>
            <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
              Contratar fibra red Orange →
            </a>
          </div>
        </section>

        {/* Comparativa directa */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl text-center text-[#1A1A1A] mb-8" style={{ fontWeight: 800 }}>Arista vs Orange — misma red, diferente precio</h2>
            <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 border-b border-gray-100 bg-gray-50 px-4 py-3">
                {["", "Arista (red Orange)", "Orange directo"].map((h) => (
                  <div key={h} className="text-center text-xs text-gray-500" style={{ fontWeight: 700 }}>{h}</div>
                ))}
              </div>
              {[
                { c: "Red de fibra",          a: "MasOrange",  o: "Orange" },
                { c: "Fibra 600 Mb",          a: "24,90€/mes", o: "34,99€/mes" },
                { c: "Fibra 1 Gb",            a: "32,90€/mes", o: "44,99€/mes" },
                { c: "Sin permanencia",       a: "✓ Sí",        o: "✗ No" },
                { c: "Alta en 24h",           a: "✓ Sí",        o: "✗ No" },
                { c: "Asesor personal",       a: "✓ Sí",        o: "✗ No" },
                { c: "Empresa local Alicante", a: "✓ Sí",        o: "✗ No" },
              ].map((row, i) => (
                <div key={row.c} className={`grid grid-cols-3 items-center px-4 py-3 border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}>
                  <span className="text-sm text-gray-600">{row.c}</span>
                  <span className="text-center text-sm text-[#1648D8]" style={{ fontWeight: 700 }}>{row.a}</span>
                  <span className="text-center text-sm text-gray-400">{row.o}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué */}
        <section className="bg-white px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 800 }}>¿Por qué elegir Arista sobre Orange en Alicante?</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "Hasta 120€ menos al año", d: "La diferencia de precio entre Arista y Orange en fibra 600 Mb supone hasta 120€ al año en tu bolsillo." },
                { t: "Misma cobertura",           d: "Usamos la red MasOrange. Si hay fibra de Orange en tu calle, la hay de Arista también." },
                { t: "Sin permanencia",            d: "Orange te exige permanencia. Arista no. Puedes cancelar cuando quieras." },
                { t: "Asesor local",               d: "Una persona en Alicante asignada a tu cuenta. No un call center en otro país." },
                { t: "Alta más rápida",             d: "En 24h tienes el técnico. Orange puede tardar más de una semana en muchos casos." },
                { t: "Precio garantizado",         d: "Tu tarifa no sube. Orange puede subir sus precios anualmente sin que puedas hacer nada." },
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

        {/* CTA */}
        <section className="bg-[#1648D8] px-6 py-14 lg:px-8 text-center">
          <div className="mx-auto max-w-xl">
            <h2 className="text-2xl text-white mb-3" style={{ fontWeight: 900 }}>Fibra red Orange desde 24,90€/mes</h2>
            <p className="text-sm text-white/60 mb-6">Misma red · Mejor precio · Sin permanencia · Alta en 24h</p>
            <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
              Contratar fibra red Orange →
            </a>
          </div>
        </section>

        <section className="bg-white px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4" style={{ fontWeight: 700 }}>También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/movil-barato-alicante", label: "Móvil barato en Alicante" },
                { href: "/tarifas/fibra",          label: "Ver todas las tarifas" },
                { href: "/cambia-de-compania",      label: "Cambia de Orange a Arista" },
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
