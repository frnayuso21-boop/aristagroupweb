import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoverageChecker from "@/components/CoverageChecker";

export const metadata: Metadata = {
  title: "Comprueba tu cobertura | Arista Group Alicante",
  description:
    "Comprueba si tienes cobertura de fibra óptica Arista en tu dirección. Red MasOrange. Sin permanencia. Alta en 24h.",
  alternates: { canonical: "https://aristagroup.es/cobertura" },
};

export default function CoberturaPage() {
  return (
    <>
      <Header />
      <main className="mt-[108px] min-h-screen bg-[#F5F7FF]">

        {/* ── Hero ── */}
        <section className="bg-[#1648D8] px-6 py-14 text-center">
          <div className="mx-auto max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white mb-5" style={{ fontWeight: 700 }}>
              Cobertura Red MasOrange
            </span>
            <h1 className="text-[clamp(26px,5vw,52px)] text-white leading-tight tracking-tight" style={{ fontWeight: 800 }}>
              Comprueba si llegamos<br />a tu dirección
            </h1>
            <p className="mt-4 text-base text-white/60 max-w-md mx-auto">
              Introduce tu dirección y en segundos sabrás si tienes cobertura de fibra óptica Arista.
            </p>
          </div>
        </section>

        {/* ── Checker ── */}
        <section className="px-4 py-12 lg:py-16">
          <CoverageChecker />
        </section>

        {/* ── Por qué Arista ── */}
        <section className="bg-white py-14 border-t border-gray-100">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-3 text-center">
              {[
                { titulo: "Red MasOrange",    desc: "Misma cobertura que Orange. Sin el precio.",       icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" },
                { titulo: "Alta en 24 horas", desc: "Activación rápida sin esperas interminables.",     icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                { titulo: "Sin permanencia",  desc: "Te vas cuando quieras. Sin penalización.",          icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" },
              ].map((v) => (
                <div key={v.titulo} className="flex flex-col items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center bg-[#EEF2FF]">
                    <svg className="h-6 w-6 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                    </svg>
                  </div>
                  <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{v.titulo}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal linking */}
        <section className="bg-white px-6 py-10 lg:px-8 border-t border-gray-100">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4" style={{ fontWeight: 700 }}>También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/fibra-barata-alicante",     label: "Fibra barata en Alicante" },
                { href: "/operadora-local-alicante",  label: "Operadora local Alicante" },
                { href: "/cambia-de-compania",         label: "Cambia de operadora" },
                { href: "/fibra-orange-alicante",      label: "Fibra red Orange" },
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
