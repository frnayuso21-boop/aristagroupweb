import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Telecomunicaciones para Autónomos Alicante | Arista Group",
  description:
    "Fibra y móvil para autónomos desde 24,90€/mes. Sin permanencia, factura deducible, alta en 24h. Empresa alicantina con atención real.",
  alternates: { canonical: "https://aristagroup.es/empresas/autonomos" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

const tarifas = [
  {
    nombre: "Solo Móvil Autónomo",
    desc: "Línea móvil profesional",
    precio: "8,90",
    badge: null,
    incluye: ["80 GB datos 5G", "Llamadas ilimitadas", "eSIM compatible", "Sin permanencia", "Factura deducible"],
    waMsg: "Hola, soy autónomo y quiero contratar la línea móvil profesional de 80GB.",
  },
  {
    nombre: "Fibra Autónomo",
    desc: "Fibra 600Mb para tu local u oficina",
    precio: "24,90",
    badge: null,
    incluye: ["Fibra 600Mb simétrica", "Router WiFi incluido", "Sin permanencia", "Alta en 24h", "Factura deducible"],
    waMsg: "Hola, soy autónomo y quiero contratar fibra 600Mb para mi negocio.",
  },
  {
    nombre: "Pack Autónomo Total",
    desc: "Fibra + Móvil para tu negocio",
    precio: "32,90",
    badge: "Más elegido",
    incluye: ["Fibra 600Mb simétrica", "1 línea móvil 80GB 5G", "eSIM compatible", "Sin permanencia", "Factura deducible", "Alta en 24h"],
    waMsg: "Hola, soy autónomo y quiero contratar el Pack Autónomo Total (fibra + móvil).",
  },
];

const faqs = [
  { q: "¿La factura es deducible?", a: "Sí. Al ser un gasto de tu actividad económica, la factura de telefonía y datos es deducible en IRPF e IVA." },
  { q: "¿Puedo contratar solo el móvil?", a: "Sí. Puedes contratar solo línea móvil, solo fibra, o el pack combinado." },
  { q: "¿Hay permanencia?", a: "No. Puedes cancelar cuando quieras sin penalización ni costes adicionales." },
  { q: "¿Cuánto tarda el alta?", a: "24 horas laborables. Si hay portabilidad, gestionamos el cambio sin corte de servicio." },
  { q: "¿Puedo añadir más líneas después?", a: "Sí, en cualquier momento puedes ampliar con más líneas móviles." },
];

export default function AutonomosPage() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="mt-[108px] bg-[#0D47A1] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <nav className="mb-6 flex items-center gap-2 text-xs text-white/40">
              <Link href="/empresas" className="hover:text-white/70 transition-colors">Empresas</Link>
              <span>/</span>
              <span className="text-white/70">Autónomos</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/70" style={{ fontWeight: 700 }}>Para autónomos</span>
                </div>
                <h1 className="text-[clamp(28px,4vw,52px)] text-white leading-tight tracking-tight mb-4" style={{ fontWeight: 900 }}>
                  Fibra y móvil<br />
                  <span style={{ color: "#FFB800" }}>para tu negocio</span>
                </h1>
                <p className="text-base text-white/60 leading-relaxed mb-6 max-w-md">
                  Sin permanencia, factura deducible y alta en 24 horas. Todo lo que necesitas para trabajar sin preocuparte de la conectividad.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Sin permanencia", "Factura deducible", "Alta en 24h", "Sin burocracia"].map((b) => (
                    <span key={b} className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[11px] text-white/80" style={{ fontWeight: 600 }}>
                      ✓ {b}
                    </span>
                  ))}
                </div>
                <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, soy autónomo y quiero información sobre vuestros servicios.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#00B96B] px-7 py-3.5 text-sm text-black hover:opacity-90 transition-opacity"
                  style={{ fontWeight: 700 }}>
                  Hablar con un asesor →
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: "24h", d: "Alta garantizada" },
                  { n: "0€", d: "Coste de instalación" },
                  { n: "100%", d: "Factura deducible" },
                  { n: "5G", d: "Red MasOrange" },
                ].map((s) => (
                  <div key={s.n} className="rounded-2xl bg-white/10 border border-white/15 p-5 text-center">
                    <p className="text-3xl text-white mb-1" style={{ fontWeight: 900 }}>{s.n}</p>
                    <p className="text-xs text-white/50">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TARIFAS */}
        <section className="bg-[#F5F7FF] py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1] mb-2" style={{ fontWeight: 700 }}>Tarifas autónomos</p>
              <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>Elige lo que necesitas</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {tarifas.map((t) => {
                const [ent, dec] = t.precio.split(",");
                return (
                  <div key={t.nombre}
                    className={`rounded-2xl bg-white flex flex-col relative ${t.badge ? "border-2 border-[#0D47A1] shadow-xl -mt-3" : "border border-gray-200 shadow-sm"}`}>
                    {t.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex rounded-full px-4 py-1.5 text-[11px] text-black whitespace-nowrap shadow-sm"
                          style={{ backgroundColor: "#FFB800", fontWeight: 700 }}>★ {t.badge}</span>
                      </div>
                    )}
                    <div className={`h-1 rounded-t-2xl w-full bg-[#0D47A1]`} style={t.badge ? { backgroundColor: "#FFB800" } : {}} />
                    <div className={`px-6 pb-4 ${t.badge ? "pt-8" : "pt-6"}`}>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-1">{t.nombre}</p>
                      <p className="text-xs text-gray-500 mb-3">{t.desc}</p>
                      <div className="flex items-end gap-0.5 leading-none">
                        <span className="text-[52px] leading-none tracking-tighter text-[#1648D8]" style={{ fontWeight: 800 }}>{ent}</span>
                        <div className="mb-1.5">
                          <span className="text-xl text-[#1648D8]" style={{ fontWeight: 700 }}>,{dec}€</span>
                          <p className="text-[11px] text-gray-400 leading-none">/mes</p>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1">IVA incluido · Deducible</p>
                    </div>
                    <div className="h-px bg-gray-100 mx-6" />
                    <ul className="px-6 py-5 flex flex-col gap-2.5 flex-1">
                      {t.incluye.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <svg className="h-4 w-4 flex-shrink-0 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="px-6 pb-6">
                      <a href={`https://wa.me/${WA}?text=${encodeURIComponent(t.waMsg)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="block w-full rounded-xl py-3 text-center text-sm text-black hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: "#00B96B", fontWeight: 600 }}>
                        Lo quiero
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-14">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-2xl text-[#1A1A1A] tracking-tight mb-8 text-center" style={{ fontWeight: 700 }}>Preguntas frecuentes</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 p-6">
                  <div className="flex gap-4">
                    <div className="w-1 rounded-full flex-shrink-0 self-stretch bg-[#0D47A1]" />
                    <div>
                      <p className="text-sm text-[#1A1A1A] mb-2" style={{ fontWeight: 600 }}>{f.q}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0D47A1] py-14 text-center">
          <div className="mx-auto max-w-xl px-6">
            <h2 className="text-2xl text-white mb-3" style={{ fontWeight: 800 }}>¿Hablamos?</h2>
            <p className="text-sm text-white/60 mb-8">Te preparamos la mejor solución para tu negocio en menos de 24h.</p>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, soy autónomo y quiero información sobre vuestros servicios.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00B96B] px-8 py-4 text-sm text-black hover:opacity-90"
              style={{ fontWeight: 700 }}>
              Solicitar propuesta →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
