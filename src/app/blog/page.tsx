import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog Arista Group — Consejos de fibra, móvil y energía en Alicante",
  description:
    "Artículos y guías sobre fibra, móvil, energía y ahorro en Alicante. Consejos prácticos del equipo de Arista Group.",
  alternates: { canonical: "https://aristagroup.es/blog" },
};

// Artículos estáticos de respaldo (mientras el CM no ha publicado en Sanity)
const STATIC_POSTS = [
  {
    slug: "como-ahorrar-factura-telefono-alicante",
    titulo: "Cómo ahorrar en tu factura de teléfono en Alicante en 2026",
    resumen: "Guía práctica para reducir tu factura de móvil y fibra en Alicante hasta un 50%. Compara operadoras y ahorra con Arista.",
    categoria: "Consejos",
    publicadoEn: "2026-05-12",
    autor: "Equipo Arista",
  },
  {
    slug: "fibra-optica-alicante-guia-completa",
    titulo: "Fibra óptica en Alicante: Guía completa 2026",
    resumen: "Todo lo que necesitas saber sobre la fibra óptica en Alicante: cobertura, velocidades, operadoras y precios.",
    categoria: "Fibra y Móvil",
    publicadoEn: "2026-04-28",
    autor: "Equipo Arista",
  },
  {
    slug: "mejores-tarifas-movil-alicante-2026",
    titulo: "Las mejores tarifas de móvil en Alicante para 2026",
    resumen: "Comparativa de las mejores tarifas de móvil disponibles en Alicante. Análisis de coberturas, datos y precios.",
    categoria: "Fibra y Móvil",
    publicadoEn: "2026-04-15",
    autor: "Equipo Arista",
  },
];

const CAT_COLORS: Record<string, string> = {
  "fibra-movil":  "#1648D8",
  "Fibra y Móvil": "#1648D8",
  "energia":      "#F59E0B",
  "Energía":      "#F59E0B",
  "consejos":     "#00B96B",
  "Consejos":     "#00B96B",
  "noticias":     "#7C3AED",
  "Noticias":     "#7C3AED",
  "ahorro":       "#E53E3E",
  "Ahorro":       "#E53E3E",
};

interface Post {
  slug: string;
  titulo: string;
  resumen: string;
  categoria?: string;
  publicadoEn?: string;
  autor?: string;
}

export default function BlogPage() {
  const lista: Post[] = STATIC_POSTS;

  function formatFecha(raw?: string) {
    if (!raw) return "";
    try {
      return new Date(raw).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" });
    } catch { return raw; }
  }

  return (
    <>
      <Header />
      <main className="mt-[72px] min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-[#F5F6F8] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8]" style={{ fontWeight: 700 }}>Blog</span>
            </div>
            <h1 className="text-[clamp(26px,4vw,48px)] text-[#1A1A1A] leading-tight tracking-tight mb-3" style={{ fontWeight: 900 }}>
              Consejos, guías y novedades<br />de Arista Group
            </h1>
            <p className="text-base text-gray-400 max-w-xl">
              Artículos sobre fibra, móvil, energía y ahorro para hogares en Alicante y toda España.
            </p>
          </div>
        </section>

        {/* Grid de artículos */}
        <section className="px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lista.map((post) => {
                const color = CAT_COLORS[post.categoria ?? ""] ?? "#1648D8";

                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {/* Placeholder */}
                    <div className="h-40 flex-shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: `${color}10` }}>
                      <svg className="h-10 w-10 opacity-30" style={{ color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>

                    {/* Contenido */}
                    <div className="flex flex-1 flex-col p-5">
                      {post.categoria && (
                        <span className="mb-2 w-fit rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white"
                          style={{ backgroundColor: color, fontWeight: 700 }}>
                          {post.categoria}
                        </span>
                      )}
                      <h2 className="text-sm text-[#1A1A1A] mb-2 leading-snug group-hover:text-[#1648D8] transition-colors"
                        style={{ fontWeight: 700 }}>
                        {post.titulo}
                      </h2>
                      <p className="text-xs text-gray-400 leading-relaxed flex-1">{post.resumen}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[10px] text-gray-300">{formatFecha(post.publicadoEn)}</span>
                        <span className="text-[11px] text-[#1648D8]" style={{ fontWeight: 700 }}>Leer →</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {lista.length === 0 && (
              <div className="text-center py-20 text-gray-300">
                <p className="text-lg">Próximamente nuevos artículos</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
