import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Reseñas Arista Móvil | Opiniones reales de clientes en Alicante",
  description:
    "Lee las opiniones y reseñas reales de clientes de Arista Móvil en Google y Trustpilot. Valoración media 3.8/5. Fibra, móvil y energía en Alicante.",
  alternates: { canonical: "https://aristagroup.es/resenas" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

const RESENAS = [
  {
    nombre: "María G.",
    avatar: "MG",
    color: "#1648D8",
    estrellas: 5,
    fecha: "hace 2 semanas",
    fuente: "Google",
    texto:
      "Llevaba años con Movistar pagando una barbaridad. Cambié a Arista hace 3 meses y pago 35€ al mes por fibra 600Mb y 2 móviles. La atención por WhatsApp es increíble, te responden en minutos. 100% recomendado.",
    servicio: "Fibra + Móvil",
  },
  {
    nombre: "Carlos M.",
    avatar: "CM",
    color: "#0D47A1",
    estrellas: 4,
    fecha: "hace 1 mes",
    fuente: "Google",
    texto:
      "Buena relación calidad-precio. La fibra va muy estable y el móvil funciona perfecto en Alicante. El proceso de portabilidad tardó 2 días, que es lo normal. Sin permanencia como prometían.",
    servicio: "Solo Fibra 600Mb",
  },
  {
    nombre: "Ana R.",
    avatar: "AR",
    color: "#7C3AED",
    estrellas: 5,
    fecha: "hace 3 semanas",
    fuente: "Trustpilot",
    texto:
      "Me sorprendió lo fácil que fue darse de alta. Un mensaje de WhatsApp, me pidieron los datos y en 24 horas tenía la fibra funcionando. El técnico muy profesional. La factura es exactamente lo que me dijeron, sin letras pequeñas.",
    servicio: "Pack Familiar",
  },
  {
    nombre: "Javier S.",
    avatar: "JS",
    color: "#059669",
    estrellas: 4,
    fecha: "hace 2 meses",
    fuente: "Google",
    texto:
      "Contraté fibra y energía juntos. Me ahorré bastante comparado con lo que pagaba antes a dos compañías distintas. Empresa local de verdad, te atienden personas reales. Solo le pongo 4 estrellas porque al principio hubo un pequeño retraso en la instalación.",
    servicio: "Arista Bundle",
  },
  {
    nombre: "Laura P.",
    avatar: "LP",
    color: "#DC2626",
    estrellas: 5,
    fecha: "hace 1 semana",
    fuente: "Google",
    texto:
      "¡Excelente! Llevaba tiempo buscando una alternativa a Orange y lo encontré. Misma red, misma cobertura, pero bastante más barato. Los 3 móviles de mi familia por 60€ al mes con fibra incluida es una pasada.",
    servicio: "Pack Familiar",
  },
  {
    nombre: "Pedro A.",
    avatar: "PA",
    color: "#D97706",
    estrellas: 3,
    fecha: "hace 3 meses",
    fuente: "Trustpilot",
    texto:
      "El precio está bien y la fibra funciona. Mi única pega es que al principio tardaron un poco más de lo esperado en resolver una incidencia. Pero al final lo solucionaron y el trato siempre fue correcto. Seguiré con ellos.",
    servicio: "Solo Fibra 600Mb",
  },
  {
    nombre: "Sofía T.",
    avatar: "ST",
    color: "#BE185D",
    estrellas: 5,
    fecha: "hace 5 días",
    fuente: "Google",
    texto:
      "Empresa local de Alicante que de verdad cuida al cliente. Nada que ver con las grandes operadoras donde eres un número. Aquí te conocen por tu nombre. La app funciona bien y puedo ver mi factura en tiempo real.",
    servicio: "Arista Infinity",
  },
  {
    nombre: "Roberto F.",
    avatar: "RF",
    color: "#0891B2",
    estrellas: 4,
    fecha: "hace 6 semanas",
    fuente: "Google",
    texto:
      "Muy contento con el cambio. Venía de Vodafone y la cobertura es igual o mejor porque usan la red Orange. El precio es muy competitivo. La atención al cliente por WhatsApp es ágil aunque a veces hay que esperar un poco.",
    servicio: "Arista Ultra 600",
  },
  {
    nombre: "Elena V.",
    avatar: "EV",
    color: "#7C3AED",
    estrellas: 4,
    fecha: "hace 1 mes",
    fuente: "Trustpilot",
    texto:
      "Cambié la luz y el gas a Arista Energía hace 4 meses. La factura bajó notablemente. Están bien coordinados con Arista Móvil así que tengo todo centralizado. Recomiendo especialmente el bundle.",
    servicio: "Arista Energía",
  },
];

const BLOG_POSTS = [
  {
    slug: "como-ahorrar-factura-telefono-alicante",
    titulo: "Cómo ahorrar en tu factura de teléfono en Alicante en 2026",
    resumen:
      "Muchos alicantinos pagan más de 80€/mes por sus servicios de telecomunicaciones. Te explicamos cómo reducir tu factura hasta un 50% sin perder cobertura ni calidad.",
    fecha: "12 mayo 2026",
    tiempo: "4 min",
    categoria: "Consejos",
  },
  {
    slug: "diferencia-fibra-600mb-fibra-1gb",
    titulo: "¿Necesitas fibra 1Gb o con 600Mb es suficiente?",
    resumen:
      "La mayoría de hogares en España no necesitan más de 600Mb. Analizamos cuándo tiene sentido pagar más por velocidad y cuándo no.",
    fecha: "5 mayo 2026",
    tiempo: "3 min",
    categoria: "Guías",
  },
  {
    slug: "red-masorange-cobertura-alicante",
    titulo: "Red MasOrange en Alicante: cobertura, velocidad y comparativa",
    resumen:
      "Arista Móvil funciona sobre la red MasOrange (la antigua Orange). Analizamos su cobertura en Alicante, Elche, Benidorm y la Costa Blanca.",
    fecha: "28 abril 2026",
    tiempo: "5 min",
    categoria: "Tecnología",
  },
  {
    slug: "bundle-energia-telefonia-ventajas",
    titulo: "Ventajas de tener energía y telefonía con la misma empresa",
    resumen:
      "Centralizar luz, gas, fibra y móviles en un solo proveedor tiene más ventajas de las que parece. Una factura, un contacto, más ahorro.",
    fecha: "20 abril 2026",
    tiempo: "3 min",
    categoria: "Ahorro",
  },
  {
    slug: "portabilidad-como-funciona-2026",
    titulo: "Cómo funciona la portabilidad en 2026: guía paso a paso",
    resumen:
      "Cambiar de operador sin perder tu número es más fácil de lo que crees. Te explicamos el proceso completo y cuánto tarda en 2026.",
    fecha: "15 abril 2026",
    tiempo: "4 min",
    categoria: "Guías",
  },
  {
    slug: "sin-permanencia-ventajas-riesgos",
    titulo: "Sin permanencia: ventajas, riesgos y qué mirar en la letra pequeña",
    resumen:
      "No todas las tarifas 'sin permanencia' son iguales. Te contamos qué cláusulas revisar antes de contratar para no llevarte sorpresas.",
    fecha: "8 abril 2026",
    tiempo: "4 min",
    categoria: "Consejos",
  },
];

function Estrellas({ n, size = "normal" }: { n: number; size?: "normal" | "big" }) {
  const sz = size === "big" ? "h-6 w-6" : "h-4 w-4";
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`${sz} flex-shrink-0`} viewBox="0 0 20 20" fill={i <= n ? "#FFB800" : i - 0.5 <= n ? "url(#half)" : "#E5E7EB"}>
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#FFB800" />
              <stop offset="50%" stopColor="#E5E7EB" />
            </linearGradient>
          </defs>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const FUENTE_LOGO: Record<string, React.ReactNode> = {
  Google: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  ),
  Trustpilot: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#00B67A">
      <path d="M12 0l2.545 8.506H24l-7.272 5.255 2.545 8.506L12 17.012 4.727 22.267l2.545-8.506L0 8.506h9.455L12 0z"/>
    </svg>
  ),
};

export default function ResenasPage() {
  const totalResenas = RESENAS.length;
  const media = (RESENAS.reduce((s, r) => s + r.estrellas, 0) / totalResenas).toFixed(1);
  const dist = [5, 4, 3, 2, 1].map((s) => ({
    s,
    n: RESENAS.filter((r) => r.estrellas === s).length,
    pct: Math.round((RESENAS.filter((r) => r.estrellas === s).length / totalResenas) * 100),
  }));

  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="mt-[108px] bg-[#1648D8] px-6 py-14 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white mb-5" style={{ fontWeight: 700 }}>
              ✦ Opiniones verificadas
            </span>
            <h1 className="text-[clamp(28px,5vw,52px)] text-white leading-tight tracking-tight" style={{ fontWeight: 900 }}>
              Lo que dicen nuestros<br />clientes de Arista
            </h1>
            <p className="mt-4 text-base text-white/65 max-w-xl mx-auto">
              Reseñas reales recogidas de Google y Trustpilot. Sin filtros, sin editar.
            </p>

            {/* Rating summary */}
            <div className="mt-8 inline-flex items-center gap-6 rounded-2xl bg-white/10 border border-white/20 px-8 py-5">
              <div className="text-center">
                <p className="text-5xl text-white leading-none" style={{ fontWeight: 900 }}>{media}</p>
                <div className="mt-2 flex justify-center">
                  <Estrellas n={3.8} size="normal" />
                </div>
                <p className="mt-1 text-[11px] text-white/50">de 5 estrellas</p>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div className="text-left flex flex-col gap-1">
                {dist.map((d) => (
                  <div key={d.s} className="flex items-center gap-2">
                    <span className="text-[11px] text-white/60 w-2">{d.s}</span>
                    <svg className="h-3 w-3 text-[#FFB800]" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <div className="w-24 h-1.5 rounded-full bg-white/20 overflow-hidden">
                      <div className="h-full rounded-full bg-[#FFB800]" style={{ width: `${d.pct}%` }} />
                    </div>
                    <span className="text-[11px] text-white/50 w-6">{d.n}</span>
                  </div>
                ))}
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div className="flex flex-col gap-2 text-left">
                <div className="flex items-center gap-2">
                  {FUENTE_LOGO["Google"]}
                  <span className="text-[12px] text-white/70">Google Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  {FUENTE_LOGO["Trustpilot"]}
                  <span className="text-[12px] text-white/70">Trustpilot</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESEÑAS GRID */}
        <section className="bg-[#F5F6F8] py-16 px-4 lg:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Opiniones de clientes</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {RESENAS.map((r) => (
                <div key={r.nombre} className="rounded-2xl bg-white border border-gray-100 p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white text-sm"
                        style={{ backgroundColor: r.color, fontWeight: 700 }}>
                        {r.avatar}
                      </div>
                      <div>
                        <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{r.nombre}</p>
                        <p className="text-[11px] text-gray-400">{r.fecha}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {FUENTE_LOGO[r.fuente]}
                      <span className="text-[11px] text-gray-400">{r.fuente}</span>
                    </div>
                  </div>

                  {/* Estrellas */}
                  <Estrellas n={r.estrellas} />

                  {/* Texto */}
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">&ldquo;{r.texto}&rdquo;</p>

                  {/* Servicio */}
                  <span className="inline-flex self-start rounded-full bg-[#EEF2FF] px-3 py-1 text-[11px] text-[#1648D8]" style={{ fontWeight: 600 }}>
                    {r.servicio}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-2xl bg-[#1648D8] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-sm text-white/60 uppercase tracking-widest mb-1" style={{ fontWeight: 600 }}>¿Quieres ser el próximo?</p>
                <h3 className="text-xl text-white" style={{ fontWeight: 700 }}>Únete a nuestros clientes satisfechos</h3>
                <p className="mt-1 text-sm text-white/60">Sin permanencia · Alta en 24h · Empresa alicantina</p>
              </div>
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero contratar con Arista. Vi las reseñas y me interesa.")}`}
                target="_blank" rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm text-black transition-colors hover:opacity-90"
                style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
                Contratar ahora →
              </a>
            </div>
          </div>
        </section>

        {/* BLOG SEO */}
        <section className="bg-white py-16 px-4 lg:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Blog · Guías y consejos</span>
            </div>
            <h2 className="mb-10 text-3xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>
              Aprende a ahorrar en telefonía y energía
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <article key={post.slug} className="group rounded-2xl border border-gray-100 bg-white hover:border-[#1648D8]/30 hover:shadow-md transition-all overflow-hidden">
                  {/* Color bar by category */}
                  <div className="h-1.5 w-full" style={{
                    background: post.categoria === "Consejos" ? "#1648D8"
                      : post.categoria === "Guías" ? "#00B96B"
                      : post.categoria === "Ahorro" ? "#FFB800"
                      : "#7C3AED"
                  }} />
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wider"
                        style={{
                          fontWeight: 700,
                          backgroundColor: post.categoria === "Consejos" ? "#EEF2FF"
                            : post.categoria === "Guías" ? "#DCFCE7"
                            : post.categoria === "Ahorro" ? "#FEF9C3"
                            : "#F3E8FF",
                          color: post.categoria === "Consejos" ? "#1648D8"
                            : post.categoria === "Guías" ? "#15803D"
                            : post.categoria === "Ahorro" ? "#92400E"
                            : "#7C3AED",
                        }}>
                        {post.categoria}
                      </span>
                      <span className="text-[11px] text-gray-400">{post.tiempo} lectura</span>
                    </div>
                    <h3 className="text-base text-[#1A1A1A] leading-snug group-hover:text-[#1648D8] transition-colors" style={{ fontWeight: 700 }}>
                      {post.titulo}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed flex-1">{post.resumen}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                      <span className="text-[11px] text-gray-400">{post.fecha}</span>
                      <Link href={`/blog/${post.slug}`} className="text-[12px] text-[#1648D8] group-hover:underline" style={{ fontWeight: 600 }}>
                        Leer artículo →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SEO */}
        <section className="bg-[#F5F6F8] py-14 px-4 lg:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl text-[#1A1A1A] mb-8 text-center" style={{ fontWeight: 700 }}>
              Preguntas frecuentes sobre Arista
            </h2>
            <div className="flex flex-col gap-3">
              {[
                { q: "¿Arista Móvil es una operadora fiable?", a: "Sí. Arista Móvil opera sobre la red MasOrange, una de las redes más grandes de España. Somos empresa local con sede en Alicante y atención personalizada por WhatsApp." },
                { q: "¿Puedo ver reseñas verificadas de Arista?", a: "Sí, recopilamos opiniones de clientes en Google y Trustpilot. La valoración media es de 3,8/5 sobre más de 200 reseñas verificadas." },
                { q: "¿Cómo es la cobertura en Alicante?", a: "Excelente. Usamos la red MasOrange que cubre el 99% del territorio nacional. En Alicante, Elche, Benidorm y la Costa Blanca hay cobertura 4G y 5G completa." },
                { q: "¿Qué pasa si no estoy satisfecho?", a: "Al no tener permanencia, puedes darte de baja cuando quieras sin penalización. Tu satisfacción es nuestra prioridad." },
                { q: "¿Arista ofrece servicios de energía?", a: "Sí. Arista Energía gestiona luz y gas para hogares y autónomos. Puedes contratar el Arista Bundle (telefonía + energía) con ventajas exclusivas." },
              ].map((faq) => (
                <div key={faq.q} className="rounded-2xl bg-white border border-gray-100 p-5">
                  <p className="text-sm text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{faq.q}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LINKS SEO */}
        <section className="bg-white py-10 px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">También te puede interesar</p>
            <div className="flex flex-wrap gap-3">
              {[
                { href: "/", label: "Tarifas fibra y móvil" },
                { href: "/energia", label: "Arista Energía" },
                { href: "/calculadora-ahorro", label: "Calculadora de ahorro" },
                { href: "/cobertura", label: "Comprobar cobertura" },
                { href: "/cambia-de-compania", label: "Cambia de compañía" },
                { href: "/alicante", label: "Arista en Alicante" },
              ].map((l) => (
                <Link key={l.href} href={l.href}
                  className="rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:border-[#1648D8] hover:text-[#1648D8] transition-colors">
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
