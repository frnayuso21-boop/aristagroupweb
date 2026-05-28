import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tarifas Móvil Alicante 2026 | Red Orange sin permanencia | Arista",
  description:
    "Las mejores tarifas de móvil en Alicante 2026. Red MasOrange desde 35,90€/mes con fibra. Sin permanencia. Alta en 24h. Empresa local.",
  alternates: { canonical: "https://aristagroup.es/tarifas/movil" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

const tarifas = [
  {
    nombre: "Pack Pareja",
    desc: "Fibra 600Mb + 2 líneas 30GB",
    precio: "35,90",
    incluye: ["Fibra 600Mb simétrica", "2 líneas móviles 30GB", "Red MasOrange", "Sin permanencia", "Alta en 24h", "Portabilidad gratuita"],
    waMsg: "Quiero el Pack Pareja — Fibra 600Mb + 2 móviles 30GB por 35,90€/mes.",
  },
  {
    nombre: "Pack Familiar",
    desc: "Fibra 600Mb + 3 móviles ilimitados + TV",
    precio: "60,00",
    destacada: true,
    badge: "⭐ La más elegida",
    incluye: ["Fibra 600Mb simétrica", "3 líneas móviles ilimitadas", "TV incluida", "Red MasOrange", "Sin permanencia", "Alta en 24h", "Portabilidad gratuita"],
    waMsg: "Quiero el Pack Familiar — Fibra 600Mb + 3 móviles ilimitados + TV por 60€/mes.",
  },
  {
    nombre: "Arista Infinity",
    desc: "Fibra 600Mb + Móvil Ilimitado",
    precio: "40,90",
    incluye: ["Fibra 600Mb simétrica", "1 línea móvil ilimitada", "Red MasOrange", "Sin permanencia", "Alta en 24h", "Portabilidad gratuita"],
    waMsg: "Quiero Arista Infinity — Fibra 600Mb + Móvil Ilimitado por 40,90€/mes.",
  },
  {
    nombre: "Solo Fibra",
    desc: "Fibra 600Mb sin línea móvil",
    precio: "24,90",
    incluye: ["Fibra 600Mb simétrica", "Router WiFi incluido", "Red MasOrange", "Sin permanencia", "Alta en 24h"],
    waMsg: "Quiero Solo Fibra — 600Mb por 24,90€/mes.",
  },
];

export default function TarifasMovilPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="mt-[108px] bg-[#0D47A1] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <nav className="mb-6 text-xs text-white/40">
              <Link href="/tarifas" className="hover:text-white transition-colors">Tarifas</Link>
              <span className="mx-2">/</span>
              <span className="text-white/70">Móvil</span>
            </nav>
            <h1 className="text-[clamp(24px,4vw,48px)] text-white leading-tight tracking-tight" style={{ fontWeight: 800 }}>
              Tarifas móvil Alicante 2026<br />
              <span className="text-white/60" style={{ fontWeight: 400 }}>Red Orange desde 35,90€/mes</span>
            </h1>
            <p className="mt-4 text-sm text-white/60 max-w-lg">
              Misma cobertura que Orange. Sin permanencia. Alta en 24 horas. Empresa local alicantina — atención por WhatsApp.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge-red">Sin permanencia</span>
              <span className="badge-green">Alta en 24h</span>
              <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-0.5 text-[11px] text-white">Red MasOrange</span>
            </div>
          </div>
        </section>

        {/* TARJETAS */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
              {tarifas.map((t) => (
                <div key={t.nombre}
                  className={`rounded-2xl bg-white p-6 flex flex-col relative ${t.destacada ? "border-2 border-[#0D47A1] shadow-lg -mt-3" : "border border-gray-200"}`}>
                  {t.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex rounded-full bg-[#0D47A1] px-3 py-1 text-[11px] text-white whitespace-nowrap" style={{ fontWeight: 600 }}>{t.badge}</span>
                    </div>
                  )}
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-1">{t.nombre}</p>
                  <p className="text-xs text-gray-500 mb-4 mt-1">{t.desc}</p>
                  <div className="flex items-end gap-0.5 leading-none mb-5">
                    <span className={`text-[46px] leading-none tracking-tighter ${t.destacada ? "text-[#0D47A1]" : "text-[#1A1A1A]"}`} style={{ fontWeight: 700 }}>
                      {t.precio.split(",")[0]}
                    </span>
                    <div className="mb-1">
                      <span className={`text-lg ${t.destacada ? "text-[#0D47A1]" : "text-[#1A1A1A]"}`} style={{ fontWeight: 600 }}>,{t.precio.split(",")[1]}€</span>
                      <p className="text-[10px] text-gray-400">/mes</p>
                    </div>
                  </div>
                  <ul className="mb-6 space-y-1.5 border-t border-gray-100 pt-4 flex-1">
                    {t.incluye.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
                        <svg className="h-3.5 w-3.5 flex-shrink-0 text-[#00B96B]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/${WA}?text=${encodeURIComponent(t.waMsg)}`}
                    target="_blank" rel="noopener noreferrer" className="btn-cta">
                    Contratar ahora
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TABLA COMPARATIVA */}
        <section className="bg-[#F0F4FF] py-14">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-xl text-[#1A1A1A] mb-6 text-center" style={{ fontWeight: 700 }}>¿Por qué Arista frente a Orange, Movistar o Vodafone?</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-4 py-3 text-left text-xs text-gray-400">Concepto</th>
                    <th className="px-4 py-3 text-center bg-[#0D47A1] text-white text-xs" style={{ fontWeight: 700 }}>Arista</th>
                    <th className="px-4 py-3 text-center text-xs text-gray-400">Movistar</th>
                    <th className="px-4 py-3 text-center text-xs text-gray-400">Orange</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { c: "Pack pareja", a: "35,90€",   m: "59,90€",  o: "54,90€" },
                    { c: "Red",         a: "MasOrange", m: "Movistar", o: "Orange" },
                    { c: "Permanencia", a: "❌ No",     m: "✅ Sí",    o: "✅ Sí" },
                    { c: "Atención",    a: "WhatsApp",  m: "Bot",      o: "Bot" },
                    { c: "Local",       a: "✅ Alicante",m: "❌",      o: "❌" },
                  ].map((r, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0">
                      <td className="px-4 py-3 text-gray-500">{r.c}</td>
                      <td className="px-4 py-3 text-center bg-[#E3F2FD] text-[#0D47A1]" style={{ fontWeight: 600 }}>{r.a}</td>
                      <td className="px-4 py-3 text-center text-gray-400">{r.m}</td>
                      <td className="px-4 py-3 text-center text-gray-400">{r.o}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* LINKS INTERNOS SEO */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/tarifas/fibra",       label: "Solo Fibra 600Mb" },
                { href: "/fibra-y-movil",        label: "Fibra y Móvil" },
                { href: "/cambia-de-compania",   label: "Cambia de compañía" },
                { href: "/cobertura",            label: "Cobertura en Alicante" },
                { href: "/alicante",             label: "Arista en Alicante" },
              ].map((l) => (
                <Link key={l.href} href={l.href}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:border-[#0D47A1] hover:text-[#0D47A1] transition-colors">
                  {l.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0D47A1] py-14 text-center">
          <div className="mx-auto max-w-xl px-6">
            <h2 className="text-xl text-white" style={{ fontWeight: 700 }}>¿Tienes dudas? Te llamamos en 5 minutos</h2>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre las tarifas de móvil de Arista.")}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#00B96B] px-7 py-3.5 text-sm text-black hover:bg-[#009A59] transition-colors" style={{ fontWeight: 600 }}>
              WhatsApp directo →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
