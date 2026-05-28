import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CoverageChecker from "@/components/CoverageChecker";

export const metadata: Metadata = {
  title: "Comprobar Cobertura Fibra | Arista Group",
  description:
    "Comprueba en segundos si tienes cobertura de fibra óptica Arista en tu dirección. Red MasOrange. Sin permanencia. Alta en 24 horas en Alicante.",
  alternates: { canonical: "https://comprobarcobertura.aristagroup.es" },
  robots: { index: true, follow: true },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

export default function ComprobarCoberturaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FF]">

      {/* ── Barra mínima ──────────────────────────────────── */}
      <header className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <Link href="https://aristagroup.es">
          <Image src="/logo-arista.png" alt="Arista Group" width={320} height={80} className="h-14 w-auto object-contain" priority />
        </Link>
        <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre Arista.")}`}
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-[#00B96B] px-4 py-2 text-sm text-black hover:bg-[#009A59] transition-colors"
          style={{ fontWeight: 600 }}>
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </header>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="bg-[#1648D8] px-6 py-12 sm:py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-white mb-5" style={{ fontWeight: 700 }}>
            <span className="h-1.5 w-1.5 rounded-full bg-[#00B96B] inline-block animate-pulse" />
            Cobertura en tiempo real
          </span>
          <h1 className="text-[clamp(28px,6vw,58px)] text-white leading-tight tracking-tight" style={{ fontWeight: 800 }}>
            ¿Tienes cobertura<br />de fibra Arista?
          </h1>
          <p className="mt-4 text-base text-white/60 max-w-sm mx-auto">
            Compruébalo en segundos. Solo escribe tu dirección.
          </p>

          {/* Chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {["Red MasOrange", "Fibra hasta 1Gb", "Alta en 24h", "Sin permanencia"].map(c => (
              <span key={c} className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/80">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Checker centrado ──────────────────────────────── */}
      <section className="flex-1 px-4 py-10 sm:py-14">
        <CoverageChecker />
      </section>

      {/* ── Ventajas strip ────────────────────────────────── */}
      <section className="bg-white border-t border-gray-100 py-10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-4 text-center">
            {[
              { n: "600Mb",  l: "Velocidad mínima fibra",   icon: "M13 10V3L4 14h7v7l9-11h-7z" },
              { n: "24h",    l: "Tiempo de activación",      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { n: "0€",     l: "Coste de instalación",      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
              { n: "0 meses",l: "Permanencia",               icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" },
            ].map(v => (
              <div key={v.n} className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center bg-[#EEF2FF]">
                  <svg className="h-5 w-5 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                  </svg>
                </div>
                <p className="text-xl text-[#1648D8] tracking-tight" style={{ fontWeight: 800 }}>{v.n}</p>
                <p className="text-xs text-gray-400 leading-snug">{v.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────── */}
      <section className="bg-[#1648D8] py-10 text-center">
        <div className="mx-auto max-w-lg px-6">
          <p className="text-base text-white" style={{ fontWeight: 700 }}>¿Prefieres que te llamemos?</p>
          <p className="text-sm text-white/60 mt-1 mb-5">Un asesor te atiende en menos de 2 horas.</p>
          <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero comprobar mi cobertura y contratar Arista.")}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm text-[#1648D8] hover:bg-white/90 transition-colors"
            style={{ fontWeight: 700 }}>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hablar con un asesor
          </a>
        </div>
      </section>

      {/* ── Footer mínimo ─────────────────────────────────── */}
      <footer className="bg-[#0D1B4B] px-6 py-5 text-center text-xs text-white/40">
        Servicios y Telecomunicaciones Arista S.L. · CIF B55476212 · El Campello, Alicante ·{" "}
        <Link href="https://aristagroup.es/privacidad" className="underline hover:text-white/70 transition-colors">
          Privacidad
        </Link>
      </footer>
    </div>
  );
}
