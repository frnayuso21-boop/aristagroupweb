import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TarifasToggle from "@/components/TarifasToggle";

export const metadata: Metadata = {
  title: "Fibra y Móvil Alicante 2026 | Pack convergente desde 35,90€ | Arista",
  description:
    "Pack fibra y móvil en Alicante desde 35,90€/mes. Fibra 600Mb + líneas móviles en red MasOrange. Sin permanencia. Alta en 24h. Empresa local.",
  alternates: { canonical: "https://aristagroup.es/fibra-y-movil" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

export default function FibraYMovilPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO — card full-width extendida */}
        <section className="mt-[108px] bg-[#F5F6F8] pt-10 pb-0 px-2 lg:px-3">
          <div className="w-full max-w-[2200px] mx-auto">
            <div className="relative overflow-hidden rounded-t-3xl shadow-2xl" style={{ height: "440px", backgroundColor: "#0a1a3a" }}>

              {/* Imagen — ocupa el lado derecho (55%) */}
              <div className="absolute right-0 top-0 bottom-0" style={{ width: "55%" }}>
                <Image
                  src="/pareja-feliz-fibra.png"
                  alt="Pareja feliz con fibra Arista en Alicante"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Overlay azul forma S */}
              <div className="absolute inset-0"
                style={{
                  background: "#1648D8",
                  clipPath: "polygon(0 0, 58% 0, 48% 50%, 58% 100%, 0 100%)",
                }} />

              {/* Contenido texto */}
              <div className="absolute inset-0 flex items-center px-12 lg:px-20" style={{ maxWidth: "52%" }}>
                <div>
                  <h1 className="text-[clamp(26px,4vw,58px)] text-white leading-tight tracking-tight" style={{ fontWeight: 900 }}>
                    Fibra y Móvil.<br />Desde <span style={{ color: "#FFD700" }}>35,90€</span>/mes.
                  </h1>
                  <p className="mt-4 text-base text-white/70 max-w-sm leading-relaxed">
                    Pack convergente: fibra 600Mb + líneas móviles en red MasOrange. Sin permanencia. Alta en 24h.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href="#tarifas"
                      className="rounded-xl bg-white px-7 py-3.5 text-sm text-[#1648D8] hover:bg-white/90 transition-colors shadow-lg" style={{ fontWeight: 700 }}>
                      Ver tarifas ↓
                    </a>
                    <Link href="/combo"
                      className="rounded-xl border border-white/40 px-7 py-3.5 text-sm text-white hover:bg-white/10 transition-colors">
                      Crear mi combo →
                    </Link>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-5">
                    {["Fibra 600Mb", "Desde 35,90€/mes", "Sin permanencia", "Alta 24h"].map((t) => (
                      <span key={t} className="text-[12px] text-white/60 flex items-center gap-1.5">
                        <span className="text-[#FFD700]">✓</span> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Franja azul inferior — separada de la card */}
        <div className="bg-[#F5F6F8] px-2 lg:px-3 pb-8">
          <div className="w-full max-w-[2200px] mx-auto">
            <div className="rounded-b-3xl px-12 lg:px-20 py-3 flex flex-wrap items-center gap-6" style={{ backgroundColor: "#FFB800" }}>
              <span className="text-xs text-black/60" style={{ fontWeight: 600 }}>Todos los precios incluyen IVA</span>
              <span className="text-black/20">·</span>
              <Link href="/cobertura" className="text-xs text-black/70 hover:text-black transition-colors" style={{ fontWeight: 700 }}>
                Comprobar cobertura →
              </Link>
              <span className="text-black/20">·</span>
              <span className="text-xs text-black/60" style={{ fontWeight: 600 }}>Red MasOrange · Cobertura nacional 5G</span>
            </div>
          </div>
        </div>

        {/* PACKS — idénticas al home */}
        <div id="tarifas">
          <TarifasToggle />
        </div>

        {/* POR QUÉ */}
        <section className="bg-[#F0F4FF] py-14">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 700 }}>¿Por qué contratar fibra y móvil juntos con Arista?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { t: "Un solo contrato", d: "Fibra y móvil en una sola factura. Menos papeleo, más claridad." },
                { t: "Precio justo", d: "Sin precios de lanzamiento que suben a los 6 meses. Lo que ves es lo que pagas." },
                { t: "Sin permanencia", d: "Puedes cambiar o darte de baja cuando quieras, sin coste." },
                { t: "Atención humana", d: "WhatsApp directo con personas reales. Sin bots, sin colas." },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl bg-white border border-gray-100 p-6">
                  <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 600 }}>{item.t}</p>
                  <p className="mt-1.5 text-sm text-gray-500">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LINKS SEO */}
        <section className="bg-white py-10">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/tarifas/movil",      label: "Tarifas móvil detalle" },
                { href: "/tarifas/fibra",      label: "Solo fibra 600Mb" },
                { href: "/cambia-de-compania", label: "Cambia de compañía" },
                { href: "/cobertura",          label: "Cobertura en Alicante" },
                { href: "/alicante",           label: "Arista en Alicante" },
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
            <h2 className="text-xl text-white" style={{ fontWeight: 700 }}>¿Hablamos? Te asesoramos sin compromiso</h2>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre los packs de fibra y móvil de Arista.")}`}
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
