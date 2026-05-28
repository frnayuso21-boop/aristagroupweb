import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Operadora de fibra y móvil en Alicante | Empresa local | Arista Group",
  description:
    "Arista Group — la operadora local de Alicante. Fibra 600Mb y móvil en red MasOrange desde 35,90€/mes. Sin permanencia. Atención por WhatsApp. El Campello, Alicante.",
  alternates: { canonical: "https://aristagroup.es/alicante" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

const zonas = [
  { ciudad: "Alicante ciudad",       slug: "alicante" },
  { ciudad: "El Campello",           slug: "el-campello" },
  { ciudad: "Torrevieja",            slug: "torrevieja" },
  { ciudad: "Benidorm",              slug: "benidorm" },
  { ciudad: "Elche",                 slug: "elche" },
  { ciudad: "San Juan de Alicante",  slug: "san-juan" },
  { ciudad: "Mutxamel",              slug: "mutxamel" },
  { ciudad: "Santa Pola",            slug: "santa-pola" },
  { ciudad: "Guardamar del Segura",  slug: "guardamar" },
  { ciudad: "Villajoyosa",           slug: "villajoyosa" },
];

export default function AlicantePagePage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section className="mt-[108px] bg-[#0D47A1] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-3">Empresa local · El Campello, Alicante</p>
            <h1 className="text-[clamp(24px,4vw,52px)] text-white leading-tight tracking-tight" style={{ fontWeight: 800 }}>
              La operadora de fibra y móvil<br />de Alicante
            </h1>
            <p className="mt-4 text-sm text-white/60 max-w-lg">
              Somos Arista Group, una empresa de El Campello (Alicante). Ofrecemos fibra y móvil en red MasOrange con atención real por WhatsApp — sin bots, sin call centers en otro país.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge-green">Empresa local alicantina</span>
              <span className="badge-red">Sin permanencia</span>
              <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-0.5 text-[11px] text-white">Red MasOrange</span>
            </div>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre los servicios de Arista Group en Alicante.")}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#00B96B] px-7 py-3.5 text-sm text-black hover:bg-[#009A59] transition-colors" style={{ fontWeight: 600 }}>
              Hablar con nosotros →
            </a>
          </div>
        </section>

        {/* QUIÉNES SOMOS */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <h2 className="text-2xl text-[#1A1A1A]" style={{ fontWeight: 700 }}>Una empresa alicantina de verdad</h2>
                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                  Fundada en El Campello, Alicante, Arista Group nace con un objetivo claro: ofrecer a las familias del Levante telecomunicaciones de calidad con el precio y el trato que merecen.
                </p>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  Somos distribuidores oficiales de la red MasOrange, lo que nos permite darte la misma cobertura que Orange en toda España — con el precio de una operadora local y la atención de un vecino.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    { l: "Razón social", v: "Servicios y Telecomunicaciones Arista S.L." },
                    { l: "CIF",          v: "B55476212" },
                    { l: "Sede",         v: "El Campello, Alicante 03560" },
                    { l: "Teléfono",     v: "+34 621 192 578" },
                    { l: "Email",        v: "info@aristagroup.es" },
                  ].map((item) => (
                    <div key={item.l} className="flex gap-3 text-sm">
                      <span className="text-gray-400 min-w-[100px]">{item.l}</span>
                      <span className="text-[#1A1A1A]" style={{ fontWeight: 500 }}>{item.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg text-[#1A1A1A] mb-5" style={{ fontWeight: 700 }}>Por qué elegirnos frente a las grandes</h3>
                <div className="space-y-4">
                  {[
                    { t: "Precio sin letra pequeña", d: "El precio que ves es el que pagas. Sin subidas a los 6 meses." },
                    { t: "Atención humana real", d: "WhatsApp directo a personas reales, no a bots." },
                    { t: "Sin permanencia", d: "Libre desde el primer día. Sin penalizaciones." },
                    { t: "Cobertura Orange", d: "Red MasOrange — la misma que Orange en toda España." },
                    { t: "Alta en 24 horas", d: "Empezamos a gestionar tu alta el mismo día." },
                  ].map((item) => (
                    <div key={item.t} className="flex gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#E3F2FD]">
                        <svg className="h-3 w-3 text-[#0D47A1]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 600 }}>{item.t}</p>
                        <p className="text-sm text-gray-500">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ZONAS */}
        <section className="bg-[#F0F4FF] py-14">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-xl text-[#1A1A1A] mb-6" style={{ fontWeight: 700 }}>Servimos a toda la provincia de Alicante</h2>
            <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {zonas.map((z) => (
                <div key={z.ciudad} className="rounded-xl border border-gray-100 bg-white px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#00B96B]" />
                    <span className="text-sm text-gray-600">{z.ciudad}</span>
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-dashed border-gray-200 bg-white px-4 py-3">
                <span className="text-sm text-gray-400">Y muchas más…</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-400">¿No ves tu ciudad? Consúltanos — tenemos cobertura en toda la red MasOrange.</p>
          </div>
        </section>

        {/* TARIFAS RESUMEN */}
        <section className="bg-white py-14">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-xl text-[#1A1A1A] mb-6 text-center" style={{ fontWeight: 700 }}>Nuestras tarifas en Alicante</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { t: "Solo Fibra",      p: "24,90€", d: "Fibra 600Mb",                    href: "/tarifas/fibra" },
                { t: "Pack Pareja",     p: "35,90€", d: "Fibra + 2 móviles 30GB",         href: "/tarifas/movil" },
                { t: "Arista Infinity", p: "40,90€", d: "Fibra + Móvil Ilimitado",        href: "/tarifas/movil" },
                { t: "Pack Familiar",   p: "60,00€", d: "Fibra + 3 móviles + TV",         href: "/tarifas/movil" },
              ].map((t) => (
                <Link key={t.t} href={t.href}
                  className="rounded-2xl border border-gray-200 p-5 hover:border-[#0D47A1] transition-colors group">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">{t.t}</p>
                  <p className="text-2xl text-[#0D47A1] mt-2 tracking-tight" style={{ fontWeight: 700 }}>{t.p}<span className="text-sm text-gray-400">/mes</span></p>
                  <p className="text-xs text-gray-500 mt-1">{t.d}</p>
                  <p className="mt-3 text-xs text-[#0D47A1] group-hover:underline">Ver detalle →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* LINKS SEO */}
        <section className="bg-white pb-10">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">Páginas relacionadas</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/tarifas",            label: "Todas las tarifas" },
                { href: "/fibra-y-movil",      label: "Fibra y Móvil" },
                { href: "/cambia-de-compania", label: "Cambia de compañía" },
                { href: "/cobertura",          label: "Cobertura" },
                { href: "/empresas",           label: "Para empresas" },
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
            <h2 className="text-xl text-white" style={{ fontWeight: 700 }}>Empresa alicantina · Atención real · Sin letra pequeña</h2>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, soy de Alicante y quiero información sobre Arista Group.")}`}
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
