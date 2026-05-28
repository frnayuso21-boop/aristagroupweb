import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Arista TV | Televisión para el hogar desde 5€/mes",
  description:
    "Arista TV con 190 canales TDT, cine y deportes desde 5€/mes. Combínalo con fibra y móvil. Sin permanencia. Alicante.",
  alternates: { canonical: "https://aristagroup.es/tv" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

const PLANES = [
  {
    id: "deportes",
    nombre: "Arista TV Deportes",
    precio: 5,
    badge: null,
    destacada: false,
    canales: "139",
    desc: "TV Básico + canales de deportes",
    incluye: [
      "139 canales TDT",
      "Canales de deportes incluidos",
      "Guía de programación EPG",
      "Sin permanencia",
    ],
  },
  {
    id: "premium",
    nombre: "Arista TV Premium",
    precio: 6,
    badge: null,
    destacada: false,
    canales: "179",
    desc: "TDT + Cine+ · LALIGA Hypermotion",
    incluye: [
      "179 canales TDT",
      "Cine+ incluido",
      "LALIGA Hypermotion",
      "Guía de programación EPG",
      "Sin permanencia",
    ],
  },
  {
    id: "total",
    nombre: "Arista TV Total",
    precio: 9,
    badge: "Lo más completo",
    destacada: true,
    canales: "190",
    desc: "Todo incluido · Cine · Deportes",
    incluye: [
      "190 canales TDT",
      "Temáticos de cine incluidos",
      "Deportes premium incluidos",
      "Guía de programación EPG",
      "Sin permanencia",
    ],
  },
];

function splitPrice(v: number): [string, string] {
  const [e, d] = v.toFixed(2).replace(".", ",").split(",");
  return [e, d];
}

export default function TVPage() {
  return (
    <>
      <Header />
      <main>

        {/* HERO — card amplia con divisor en S */}
        <section className="mt-[108px] bg-[#F5F6F8] pt-10 pb-8 px-4 lg:px-6">
          <div className="mx-auto max-w-[1700px]">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{ height: "440px", backgroundColor: "#0a1a3a" }}>

              {/* Imagen que ocupa todo el habitáculo derecho */}
              <div className="absolute right-0 top-0 bottom-0" style={{ width: "50%" }}>
                <Image
                  src="/tv-familia.png"
                  alt="Familia viendo Arista TV"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Overlay izquierdo con forma S usando clip-path */}
              <div className="absolute inset-0"
                style={{
                  background: "#1648D8",
                  clipPath: "polygon(0 0, 62% 0, 52% 50%, 62% 100%, 0 100%)",
                }} />

              {/* Contenido texto */}
              <div className="absolute inset-0 flex items-center px-10 lg:px-14" style={{ maxWidth: "55%" }}>
                <div>
                  <span className="inline-flex items-center rounded-full bg-white/20 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white mb-4" style={{ fontWeight: 700 }}>
                    ✦ Arista TV · 2026
                  </span>
                  <h1 className="text-[clamp(24px,3.5vw,48px)] text-white leading-tight tracking-tight" style={{ fontWeight: 900 }}>
                    Televisión de verdad.<br />Desde <span style={{ color: "#FFD700" }}>5€</span>/mes.
                  </h1>
                  <p className="mt-3 text-sm text-white/70 max-w-xs">
                    190 canales · Cine · Deportes · LALIGA.<br />Sin permanencia. Combínalo con fibra.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href="#planes"
                      className="rounded-xl bg-white px-6 py-3 text-sm text-[#1648D8] hover:bg-white/90 transition-colors shadow-lg" style={{ fontWeight: 700 }}>
                      Ver planes ↓
                    </a>
                    <Link href="/combo"
                      className="rounded-xl border border-white/40 px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors">
                      Crear mi combo →
                    </Link>
                  </div>
                  <div className="mt-5 flex gap-4">
                    {["190 canales", "Desde 5€/mes", "Sin permanencia"].map((t) => (
                      <span key={t} className="text-[11px] text-white/60 flex items-center gap-1">
                        <span className="text-[#FFD700]">✓</span> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* PLANES */}
        <section id="planes" className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>Planes 2026</p>
              <h2 className="text-3xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>Elige tu plan de TV</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 items-stretch">
              {PLANES.map((p) => {
                const [ent, dec] = splitPrice(p.precio);
                return (
                  <div key={p.id}
                    className={`rounded-2xl bg-white flex flex-col relative overflow-visible transition-all duration-300
                      ${p.destacada ? "border-2 border-[#0D47A1] shadow-xl" : "border border-gray-200 shadow-sm hover:shadow-md"}`}>

                    {p.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="inline-flex items-center rounded-full px-4 py-1.5 text-[11px] text-black whitespace-nowrap shadow-sm"
                          style={{ backgroundColor: "#FFB800", fontWeight: 700 }}>★ {p.badge}</span>
                      </div>
                    )}

                    {/* Precio */}
                    <div className="flex items-start justify-between px-4 pb-3 pt-6">
                      <div>
                        <div className="relative inline-block">
                          <div className="flex items-end gap-0.5 leading-none">
                            <span className="text-[40px] leading-none tracking-tighter text-[#1648D8]" style={{ fontWeight: 800 }}>{ent}</span>
                            <div className="mb-1">
                              <span className="text-base text-[#1648D8]" style={{ fontWeight: 700 }}>,{dec}€</span>
                              <p className="text-[10px] text-gray-400 leading-none">/mes</p>
                            </div>
                          </div>
                          <div className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#1648D8]" />
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1.5">{p.canales} canales</p>
                      </div>
                    </div>

                    <div className="h-px bg-gray-100 mx-4" />

                    {/* Features */}
                    <div className="px-4 py-3 flex flex-col gap-2 flex-1">
                      <p className="text-[11px] uppercase tracking-[0.15em] text-[#1648D8] mb-0.5" style={{ fontWeight: 700 }}>{p.nombre}</p>
                      {p.incluye.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-gray-600">
                          <svg className="h-4 w-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {f}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="px-4 pb-4 flex flex-col gap-1.5">
                      <a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Quiero contratar ${p.nombre} por ${p.precio}€/mes.`)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="block w-full rounded-xl py-2.5 text-center text-xs text-black transition-colors hover:opacity-90"
                        style={{ backgroundColor: "#00B96B", fontWeight: 600 }}>
                        Lo quiero
                      </a>
                      <Link href="/combo"
                        className="block w-full text-center text-xs text-[#1648D8] hover:text-[#0D47A1] transition-colors py-0.5 underline underline-offset-2">
                        Añadir al combo →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* COMBINAR CTA */}
        <section className="bg-[#F5F7FF] py-14 text-center border-t border-gray-100">
          <div className="mx-auto max-w-xl px-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8] mb-3" style={{ fontWeight: 700 }}>Ahorra más</p>
            <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>
              Combínalo con fibra y móvil
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              La TV de Arista se puede añadir a cualquier pack convergente. Crea tu combo a medida.
            </p>
            <Link href="/combo"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1648D8] px-7 py-3.5 text-sm text-white hover:bg-[#0D47A1] transition-colors"
              style={{ fontWeight: 700 }}>
              Crear mi combo →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
