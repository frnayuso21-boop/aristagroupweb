import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TarifaHeroCard from "@/components/TarifaHeroCard";
import TarifaStickyBar from "@/components/TarifaStickyBar";
import { TARIFAS, getTarifaBySlug } from "@/data/tarifas-data";

/* Imagen asignada a cada tarifa */
const SLUG_IMAGE: Record<string, string> = {
  "arista-only-600":       "/chica-arista.png",
  "arista-only-1000":      "/pareja-feliz-fibra.png",
  "fibra-600-movil-60gb":  "/fibra-movil-60gb.png",
  "fibra-600-movil-80gb":  "/pareja-arista.png",
  "pack-pareja-600":       "/pareja-home-hero.png",
  "pack-pareja-1000":      "/pareja-home-hero.png",
  "fibra-600-infinity":    "/movil-chica.png",
  "pack-familiar-30gb":    "/tv-familia.png",
  "pack-familiar-full":    "/tv-familia.png",
  "pack-familiar-1000":    "/tv-familia.png",
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

/* ── SEO ─────────────────────────────────────────────────── */
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const t = getTarifaBySlug(slug);
  if (!t) return {};
  return {
    title: t.seoTitle,
    description: t.seoDesc,
    alternates: { canonical: `https://aristagroup.es/tarifas/${t.slug}` },
  };
}

export function generateStaticParams() {
  return TARIFAS.map(t => ({ slug: t.slug }));
}

/* ── Helpers ────────────────────────────────────────────── */
const ICON_FIBRA = "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6";
const ICON_MOVIL = "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z";
const ICON_TV    = "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 002 2z";

/* ── Página ─────────────────────────────────────────────── */
export default async function TarifaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tarifa = getTarifaBySlug(slug);
  if (!tarifa) notFound();

  const precio = tarifa.precioMes.toFixed(2).replace(".", ",");
  const [entero, decimal] = precio.split(",");
  const waMsg = encodeURIComponent(`Hola, quiero contratar ${tarifa.nombre} — ${precio}€/mes.`);

  const tieneFibra = tarifa.lineas.some(l => l.tipo === "fibra");
  const tieneMovil = tarifa.lineas.some(l => l.tipo === "movil");
  const tieneTV    = tarifa.lineas.some(l => l.tipo === "tv");
  const imagen     = SLUG_IMAGE[tarifa.slug] ?? "/pareja-feliz-fibra.png";

  const relacionadas = TARIFAS
    .filter(t => t.categoria === tarifa.categoria && t.slug !== tarifa.slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="mt-[108px]">

        {/* ══ COMPONENTE 1 — Barra sticky ══════════════════════════════ */}
        <TarifaStickyBar tarifa={tarifa} />

        {/* ══ COMPONENTE 2 — Hero con imagen ══════════════════════════ */}
        <section className="bg-[#F5F6F8] px-2 pt-8 pb-0 lg:px-3">
          <div className="mx-auto w-full max-w-[1600px]">
            <div className="relative">

              {/* Tarjeta visual — imagen izquierda, overlay azul, texto encima */}
              <div className="relative overflow-hidden rounded-t-2xl shadow-xl" style={{ minHeight: "420px", backgroundColor: "#0D47A1" }}>

                {/* Imagen de fondo — lado izquierdo */}
                <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[60%]">
                  <Image
                    src={imagen}
                    alt={tarifa.nombre}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Gradiente que mezcla imagen con azul */}
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to right, rgba(13,71,161,0.15) 0%, rgba(13,71,161,0.55) 70%, rgba(13,71,161,1) 100%)" }} />
                </div>

                {/* Contenido sobre la imagen */}
                <div className="relative z-10 flex h-full items-center px-8 py-12 lg:px-12" style={{ minHeight: "420px" }}>
                  <div className="max-w-[52%]">
                    <nav className="mb-4 flex items-center gap-2 text-xs text-white/40">
                      <Link href="/tarifas" className="hover:text-white/70 transition-colors">Tarifas</Link>
                      <span>/</span>
                      <span className="text-white/60">{tarifa.nombre}</span>
                    </nav>
                    {tarifa.badge && (
                      <span className="mb-4 inline-flex items-center rounded-full bg-[#FFB800] px-3 py-1 text-[11px] text-black" style={{ fontWeight: 700 }}>
                        ★ {tarifa.badge}
                      </span>
                    )}
                    <h1 className="text-[clamp(28px,3.8vw,54px)] text-white leading-tight tracking-tight mb-3" style={{ fontWeight: 900 }}>
                      {tarifa.nombre}
                    </h1>
                    <p className="text-sm text-white/70 leading-relaxed max-w-sm mb-6">
                      {tarifa.tagline}
                    </p>
                    {/* Líneas del pack */}
                    <div className="flex flex-col gap-2 mb-6">
                      {tarifa.lineas.filter(l => l.tipo !== "fijo").map((l, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white/15">
                            <svg className="h-3.5 w-3.5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                                d={l.tipo === "fibra" ? ICON_FIBRA : l.tipo === "movil" ? ICON_MOVIL : ICON_TV} />
                            </svg>
                          </div>
                          <span className="text-sm text-white/85" style={{ fontWeight: 600 }}>{l.texto}</span>
                        </div>
                      ))}
                    </div>
                    {/* Garantías */}
                    <div className="flex flex-wrap gap-2">
                      {["Sin permanencia", "Alta en 24h", "Red MasOrange"].map((g) => (
                        <span key={g} className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[11px] text-white/80 backdrop-blur-sm" style={{ fontWeight: 600 }}>
                          <span className="text-[#00B96B]">✓</span> {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card interactiva — flotando sobre la imagen a la derecha */}
              <div className="hidden lg:block absolute top-6 right-6 w-[340px] z-20">
                <TarifaHeroCard tarifa={tarifa} />
              </div>

            </div>

            {/* Banner cobertura + IVA — pegado abajo */}
            <div className="rounded-b-2xl bg-[#0D47A1] px-6 py-2.5 flex items-center justify-center gap-3">
              <svg className="h-4 w-4 flex-shrink-0 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              <p className="text-[12px] text-white/70">
                ¿Tienes cobertura en tu zona?{" "}
                <Link href="/cobertura" className="text-white underline underline-offset-2 hover:no-underline" style={{ fontWeight: 700 }}>
                  Comprobar cobertura →
                </Link>
                <span className="mx-3 text-white/20">·</span>
                <span className="text-white/40">Todos los precios incluyen IVA</span>
              </p>
            </div>

            {/* Card en móvil — debajo del hero */}
            <div className="lg:hidden px-4 py-4 bg-[#F5F6F8]">
              <TarifaHeroCard tarifa={tarifa} />
            </div>
          </div>
        </section>

        {/* ══ COMPONENTE 3 — Detalle de componentes ════════════════════ */}
        <section className="bg-white px-5 py-16 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1] mb-2" style={{ fontWeight: 700 }}>Qué incluye</p>
            <h2 className="text-[clamp(22px,3vw,36px)] text-[#1A1A1A] tracking-tight mb-10" style={{ fontWeight: 800 }}>
              Todo lo que obtienes con {tarifa.nombre}
            </h2>

            <div className={`grid gap-5 ${tieneTV ? "md:grid-cols-3" : tieneMovil ? "md:grid-cols-2" : "md:grid-cols-1 max-w-lg"}`}>

              {/* Card Fibra */}
              {tieneFibra && (
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEF2FF] mb-5">
                    <svg className="h-7 w-7 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICON_FIBRA} />
                    </svg>
                  </div>
                  <h3 className="text-base text-[#1A1A1A] mb-4" style={{ fontWeight: 700 }}>
                    {tarifa.lineas.find(l => l.tipo === "fibra")?.texto || "Fibra"}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Velocidad simétrica subida y bajada",
                      "Sin permanencia — si te vas no pagas nada",
                      "Router WiFi incluido en cesión",
                      "Si hay incidencia seguirás conectado",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-gray-500">
                        <span className="mt-0.5 flex-shrink-0 text-[#1648D8]">·</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Card Móvil */}
              {tieneMovil && (
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DCFCE7] mb-5">
                    <svg className="h-7 w-7 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICON_MOVIL} />
                    </svg>
                  </div>
                  <h3 className="text-base text-[#1A1A1A] mb-4" style={{ fontWeight: 700 }}>
                    {tarifa.lineas.filter(l => l.tipo === "movil").map(l => l.texto).join(" · ") || "Móvil 5G"}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "Datos en red MasOrange 5G",
                      "Llamadas ilimitadas nacionales",
                      "Compatible eSIM",
                      "Puedes añadir líneas adicionales",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-gray-500">
                        <span className="mt-0.5 flex-shrink-0 text-[#00B96B]">·</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Card TV */}
              {tieneTV && (
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDE9FE] mb-5">
                    <svg className="h-7 w-7 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ICON_TV} />
                    </svg>
                  </div>
                  <h3 className="text-base text-[#1A1A1A] mb-4" style={{ fontWeight: 700 }}>TV incluida</h3>
                  <ul className="flex flex-col gap-2.5">
                    {[
                      "150 canales TDT en HD",
                      "Acceso desde smart TV y móvil",
                      "Fijo del hogar incluido",
                      "Sin coste adicional",
                    ].map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[13px] text-gray-500">
                        <span className="mt-0.5 flex-shrink-0 text-[#7C3AED]">·</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ══ COMPONENTE 4 — Qué pasa después ═════════════════════════ */}
        <section className="bg-[#F5F6F8] px-5 py-16 lg:px-10">
          <div className="mx-auto max-w-4xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1] mb-2" style={{ fontWeight: 700 }}>Proceso</p>
            <h2 className="text-[clamp(22px,3vw,34px)] text-[#1A1A1A] tracking-tight mb-10" style={{ fontWeight: 800 }}>
              ¿Qué pasa después de contratar?
            </h2>
            <div className="flex flex-col gap-0">
              {[
                { n: "1", t: "Confirmación",     d: "Te enviamos un email con todos los detalles de tu contrato." },
                { n: "2", t: "Portabilidad",      d: "Gestionamos el cambio de número en 24-48h sin que pierdas cobertura." },
                { n: "3", t: "Activación",        d: "En menos de 24 horas estás activo. Técnico a domicilio si es necesario." },
                { n: "4", t: "Primera factura",   d: "Prorrateada desde el día de activación. Sin sorpresas." },
                { n: "5", t: "Atención directa",  d: "Cualquier duda llámanos directamente. Una persona real te atiende." },
              ].map((step, i) => (
                <div key={step.n} className="flex gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D47A1] text-white text-sm" style={{ fontWeight: 800 }}>
                      {step.n}
                    </div>
                    {i < 4 && <div className="mt-2 flex-1 w-px bg-[#0D47A1]/20 min-h-[24px]" />}
                  </div>
                  <div className="pt-1.5 pb-2">
                    <p className="text-[15px] text-[#1A1A1A] mb-1" style={{ fontWeight: 700 }}>{step.t}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COMPONENTE 5 — Ventajas adicionales ══════════════════════ */}
        <section className="bg-white px-5 py-14 lg:px-10">
          <div className="mx-auto max-w-5xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1] mb-2" style={{ fontWeight: 700 }}>Por qué Arista</p>
            <h2 className="text-[clamp(20px,3vw,32px)] text-[#1A1A1A] tracking-tight mb-8" style={{ fontWeight: 800 }}>
              Ventajas que no encontrarás en las grandes operadoras
            </h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                {
                  icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
                  color: "#1648D8", bg: "#EEF2FF",
                  t: "Sin permanencia",
                  d: "Si no estás contento, te ayudamos a irte. Sin penalización, sin excusas.",
                },
                {
                  icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
                  color: "#00B96B", bg: "#DCFCE7",
                  t: "Atención real",
                  d: "Hablas con una persona de Alicante que conoce tu caso. No con un bot ni con un call center.",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  color: "#F59E0B", bg: "#FEF3C7",
                  t: "Empresa local",
                  d: "Somos de Alicante. Conocemos tu zona, tu cobertura y tus necesidades reales.",
                },
              ].map((v) => (
                <div key={v.t} className="rounded-2xl border border-gray-100 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl mb-4" style={{ backgroundColor: v.bg }}>
                    <svg className="h-6 w-6" style={{ color: v.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                    </svg>
                  </div>
                  <p className="text-[15px] text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{v.t}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════════════════ */}
        <section className="bg-[#F5F6F8] px-5 py-14 lg:px-10">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-[clamp(20px,3vw,30px)] text-[#1A1A1A] tracking-tight mb-8 text-center" style={{ fontWeight: 800 }}>
              Preguntas frecuentes
            </h2>
            <div className="flex flex-col gap-3">
              {tarifa.preguntasFAQ.map((item, i) => (
                <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5">
                  <p className="text-sm text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{item.q}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COMPONENTE 6 — CTA final ═════════════════════════════════ */}
        <section className="bg-[#0D47A1] px-5 py-16 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 mb-3" style={{ fontWeight: 700 }}>¿Lo tienes claro?</p>
            <h2 className="text-[clamp(24px,4vw,44px)] text-white tracking-tight mb-2" style={{ fontWeight: 900 }}>
              {tarifa.nombre}
            </h2>
            <div className="flex items-end justify-center gap-0.5 leading-none mb-2">
              <span className="text-[64px] leading-none tracking-tighter text-white" style={{ fontWeight: 900 }}>{entero}</span>
              <div className="mb-3">
                <span className="text-2xl text-white" style={{ fontWeight: 700 }}>,{decimal}€</span>
                <p className="text-[11px] text-white/50">/mes · IVA incl.</p>
              </div>
            </div>
            <p className="text-sm text-white/50 mb-8">Sin permanencia · Alta en 24h · Red MasOrange · Empresa alicantina</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`https://wa.me/${WA}?text=${waMsg}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-4 text-base text-black transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
                Contratar ahora →
              </a>
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hola, quiero más información sobre ${tarifa.nombre}.`)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-10 py-4 text-base text-white/80 hover:bg-white/10 transition-colors"
                style={{ fontWeight: 600 }}>
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ══ RELACIONADAS ════════════════════════════════════════════ */}
        {relacionadas.length > 0 && (
          <section className="bg-[#F5F6F8] px-5 py-14 lg:px-10">
            <div className="mx-auto max-w-5xl">
              <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>
                También te puede interesar
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relacionadas.map((r) => (
                  <Link key={r.slug} href={`/tarifas/${r.slug}`}
                    className="group rounded-2xl bg-white border border-gray-100 p-5 hover:border-[#1648D8] hover:shadow-md transition-all">
                    <p className="text-sm text-[#1A1A1A] mb-1 group-hover:text-[#1648D8] transition-colors" style={{ fontWeight: 700 }}>
                      {r.nombre}
                    </p>
                    <p className="text-xs text-gray-400 mb-3 leading-snug">{r.tagline}</p>
                    <div className="flex items-end gap-0.5">
                      <span className="text-2xl text-[#1648D8] leading-none" style={{ fontWeight: 900 }}>
                        {r.precioMes.toFixed(2).replace(".", ",")}
                      </span>
                      <span className="text-xs text-gray-400 mb-0.5 ml-0.5">€/mes</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
