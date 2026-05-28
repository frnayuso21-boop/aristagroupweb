import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cambia de Movistar a Arista | Sin cortes · Conservas tu número",
  description:
    "Cambia de Movistar, Orange o Vodafone a Arista sin complicaciones. Conservas tu número. Sin corte de servicio. Alta en 24h. Sin permanencia.",
  alternates: { canonical: "https://aristagroup.es/cambia-de-compania" },
  openGraph: {
    title: "Cambia de Movistar a Arista | Sin cortes",
    description: "Conservas tu número. Sin corte. Alta en 24h.",
    url: "https://aristagroup.es/cambia-de-compania",
    siteName: "Arista Group",
    images: [{ url: "https://aristagroup.es/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambia de Movistar a Arista",
    description: "Conservas tu número. Sin corte. Alta en 24h.",
  },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const CHECK = "M5 13l4 4L19 7";

const PASOS = [
  { n: "1", t: "Nos dices que quieres cambiar", d: "Escríbenos por WhatsApp o llámanos. Te preguntamos qué tienes contratado ahora y qué necesitas." },
  { n: "2", t: "Nosotros gestionamos todo", d: "Solicitamos la portabilidad en tu nombre. No tienes que llamar a tu operadora actual. No hay papeleo." },
  { n: "3", t: "Alta en 24 horas", d: "El técnico va a tu casa para la fibra. La SIM o eSIM del móvil llega activada. Sin interrupción de servicio." },
];

const FAQS = [
  { q: "¿Pierdo el número si cambio de Movistar a Arista?", a: "No. La portabilidad es un derecho reconocido por ley. Conservas exactamente el mismo número, tanto fijo como móvil." },
  { q: "¿Cuánto tiempo lleva el cambio?", a: "Para la fibra, el técnico viene en 24-48 horas. Para el móvil, la portabilidad se completa en 24 horas hábiles sin que tengas que hacer nada." },
  { q: "¿Tengo que pagar permanencia con mi operadora actual?", a: "Depende de tu contrato. Si tienes permanencia activa, tu operadora puede cobrarte una penalización. Te ayudamos a revisar tu contrato antes de cambiar para evitar sorpresas." },
  { q: "¿Qué pasa si me cortan el servicio durante el cambio?", a: "La portabilidad de fibra se realiza sin corte. Se instala la nueva línea antes de dar de baja la antigua. En móvil, el corte máximo es de unos minutos a medianoche." },
];

export default function CambiaDeCompania() {
  const waMsg = encodeURIComponent("Hola, quiero cambiar de operadora a Arista. ¿Me podéis ayudar con la portabilidad?");
  return (
    <>
      <Header />
      <main className="mt-[108px]">

        {/* Hero */}
        <section className="bg-[#0D1F5C] px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-white/70" style={{ fontWeight: 700 }}>Portabilidad gratuita · Sin cortes · 24h</span>
            </div>
            <h1 className="text-[clamp(26px,4.5vw,54px)] text-white leading-tight tracking-tight mb-5" style={{ fontWeight: 900 }}>
              Cambia de Movistar, Orange o Vodafone a Arista —{" "}
              <span style={{ color: "#00E58A" }}>Sin complicaciones</span>
            </h1>
            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Conservas tu número. Nosotros gestionamos toda la portabilidad. Sin llamadas a tu operadora actual. Sin corte de servicio. Alta en 24 horas.
            </p>
            <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
              Cambiar de operadora →
            </a>
          </div>
        </section>

        {/* 3 pasos */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl text-center text-[#1A1A1A] mb-10" style={{ fontWeight: 800 }}>Cómo es el proceso en 3 pasos</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {PASOS.map((p) => (
                <div key={p.n} className="rounded-2xl bg-white border border-gray-100 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1648D8] mb-4">
                    <span className="text-lg text-white" style={{ fontWeight: 900 }}>{p.n}</span>
                  </div>
                  <p className="text-sm text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{p.t}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Garantías */}
        <section className="bg-white px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 800 }}>Garantías al cambiar a Arista</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { t: "Conservas tu número",      d: "La portabilidad es un derecho. Tu número sigue siendo tuyo sin coste." },
                { t: "Sin corte de servicio",     d: "Instalamos la nueva línea antes de dar de baja la antigua. Sin días sin conexión." },
                { t: "Lo gestionamos nosotros",   d: "No tienes que llamar a Movistar ni a Orange. Nosotros hacemos todos los trámites." },
                { t: "Precio garantizado",        d: "Lo que pagas el primer mes es lo que pagas siempre. Sin subidas anuales." },
                { t: "Sin permanencia nueva",     d: "Al contratar con Arista no adquieres permanencia. Puedes irte cuando quieras." },
                { t: "Asesor personal",           d: "Una persona te acompaña durante todo el proceso y resuelve cualquier incidencia." },
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
            <h2 className="text-2xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 800 }}>Dudas sobre el cambio de operadora</h2>
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
            <h2 className="text-2xl text-white mb-3" style={{ fontWeight: 900 }}>¿Listo para cambiar?</h2>
            <p className="text-sm text-white/60 mb-6">Portabilidad gratuita · Sin cortes · Alta en 24h · Sin permanencia</p>
            <a href={`https://wa.me/${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
              Empezar el cambio ahora →
            </a>
          </div>
        </section>

        <section className="bg-white px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4" style={{ fontWeight: 700 }}>También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/fibra-barata-alicante", label: "Fibra barata en Alicante" },
                { href: "/movil",                  label: "Tarifas de móvil" },
                { href: "/cobertura",              label: "Comprobar cobertura" },
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
