import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Telecomunicaciones para Grandes Empresas | Arista Group Alicante",
  description:
    "Soluciones de telecomunicaciones y energía a medida para hoteles, clínicas, cadenas de restauración y grandes corporaciones. Acuerdos personalizados, SLA garantizado.",
  alternates: { canonical: "https://aristagroup.es/empresas/corporaciones" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "info@aristamovil.com";

const sectores = [
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    titulo: "Hoteles y alojamientos",
    desc: "Conectividad WiFi para huéspedes, líneas para staff y gestión energética de instalaciones. Multi-sede.",
  },
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    titulo: "Clínicas y centros médicos",
    desc: "Fibra de alta disponibilidad, líneas móviles para médicos y enfermería, y optimización del gasto energético.",
  },
  {
    icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
    titulo: "Cadenas de restauración",
    desc: "Fibra en cada local, TPV siempre conectado, líneas para el equipo y tarifa energética negociada por volumen.",
  },
  {
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    titulo: "Centros comerciales y retail",
    desc: "Conectividad para tiendas, gestión centralizada de líneas móviles y contrato energético único para toda la cadena.",
  },
  {
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    titulo: "Industria y logística",
    desc: "Conectividad para almacenes y naves industriales. Fibra robusta, líneas para operarios y gestión de suministro eléctrico.",
  },
  {
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    titulo: "Colegios y centros formativos",
    desc: "Fibra de alta capacidad para aulas y administración, líneas para el claustro y gestión eficiente del consumo energético.",
  },
];

const proceso = [
  { n: "1", t: "Análisis gratuito",    d: "Auditamos tu consumo actual de telecomunicaciones y energía. Sin compromiso." },
  { n: "2", t: "Propuesta a medida",   d: "En 48h recibes una propuesta detallada con ahorro estimado y condiciones." },
  { n: "3", t: "Contrato y migración", d: "Nos encargamos de toda la transición. Sin cortes ni interrupciones." },
  { n: "4", t: "Asesor permanente",    d: "Tendrás un Account Manager dedicado para cualquier cambio o incidencia." },
];

export default function CorporacionesPage() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="mt-[108px] px-6 py-20 lg:px-8 text-center"
          style={{ background: "linear-gradient(135deg, #0a1628 0%, #0D47A1 60%, #1648D8 100%)" }}>
          <div className="mx-auto max-w-4xl">
            <nav className="mb-6 flex items-center justify-center gap-2 text-xs text-white/40">
              <Link href="/empresas" className="hover:text-white/70 transition-colors">Empresas</Link>
              <span>/</span>
              <span className="text-white/70">Grandes Corporaciones</span>
            </nav>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFB800]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/70" style={{ fontWeight: 700 }}>+20 empleados · Multi-sede</span>
            </div>
            <h1 className="text-[clamp(28px,5vw,64px)] text-white leading-tight tracking-tight mb-5" style={{ fontWeight: 900 }}>
              Acuerdos corporativos<br />
              <span style={{ color: "#FFB800" }}>a tu medida</span>
            </h1>
            <p className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
              Telefonía, fibra y energía para grandes organizaciones. Precios negociados por volumen, SLA garantizado, account manager dedicado y migración sin interrupciones.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${EMAIL}?subject=Propuesta corporativa Arista Group`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#FFB800] px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
                style={{ fontWeight: 700 }}>
                Solicitar propuesta corporativa →
              </a>
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, representamos una empresa de más de 20 empleados y queremos una propuesta corporativa.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-sm text-white/80 hover:border-white hover:text-white transition-colors"
                style={{ fontWeight: 600 }}>
                WhatsApp directo
              </a>
            </div>
          </div>
        </section>

        {/* SECTORES */}
        <section className="bg-[#F5F7FF] py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1] mb-2" style={{ fontWeight: 700 }}>Sectores</p>
              <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>¿En qué sector opera tu empresa?</h2>
              <p className="mt-2 text-sm text-gray-400">Soluciones específicas para cada industria.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sectores.map((s) => (
                <div key={s.titulo} className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#0D47A1] hover:shadow-md transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF2FF] mb-4">
                    <svg className="h-6 w-6 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                    </svg>
                  </div>
                  <h3 className="text-[15px] text-[#1A1A1A] mb-2 group-hover:text-[#1648D8] transition-colors" style={{ fontWeight: 700 }}>{s.titulo}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1] mb-2" style={{ fontWeight: 700 }}>Proceso</p>
              <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>¿Cómo funciona?</h2>
            </div>
            <div className="flex flex-col gap-0">
              {proceso.map((s, i) => (
                <div key={s.n} className="flex gap-5 pb-8 last:pb-0">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0D47A1] text-white text-sm" style={{ fontWeight: 800 }}>
                      {s.n}
                    </div>
                    {i < proceso.length - 1 && <div className="mt-2 flex-1 w-px bg-[#0D47A1]/20 min-h-[24px]" />}
                  </div>
                  <div className="pt-1.5 pb-2">
                    <p className="text-[15px] text-[#1A1A1A] mb-1" style={{ fontWeight: 700 }}>{s.t}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTÍAS */}
        <section className="bg-[#F5F7FF] py-14">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { t: "SLA garantizado",     d: "Tiempo de respuesta ante incidencias acordado por contrato." },
                { t: "Account Manager",     d: "Un responsable de cuenta exclusivo para tu organización." },
                { t: "Tarifas por volumen", d: "Mejores precios cuantas más líneas y sedes gestionemos." },
                { t: "Migración sin cortes",d: "Nos encargamos de todo el proceso de portabilidad." },
              ].map((g) => (
                <div key={g.t} className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                  <p className="text-sm text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{g.t}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{g.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0D47A1] py-16 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-3xl text-white mb-3" style={{ fontWeight: 900 }}>¿Listo para negociar?</h2>
            <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
              Envíanos un email con los datos básicos de tu empresa (número de empleados, sedes, servicios actuales) y te respondemos en menos de 24h con una propuesta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`mailto:${EMAIL}?subject=Propuesta corporativa - [nombre de empresa]&body=Nombre empresa:%0ANúmero de empleados:%0ANúmero de sedes:%0AServicios actuales:%0APresupuesto aproximado:`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
                style={{ fontWeight: 700 }}>
                Enviar solicitud corporativa →
              </a>
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, somos una gran empresa y queremos hablar sobre un acuerdo corporativo.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-sm text-white/80 hover:bg-white/10 transition-colors"
                style={{ fontWeight: 600 }}>
                WhatsApp corporativo
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
