import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hazte Distribuidor de Arista | Gana dinero con telecomunicaciones y energía",
  description:
    "Únete a la red de distribuidores de Arista Group en Alicante. Gana 85€ por cada alta de telefonía y comisiones recurrentes en energía. Sin inversión inicial.",
  alternates: { canonical: "https://distribuidores.aristagroup.es" },
};

const WA   = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const MSG  = encodeURIComponent("Hola, me interesa ser distribuidor de Arista Group. ¿Podéis darme más información?");

export default function DistribuidoresPage() {
  return (
    <>
      <Header />
      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="mt-[108px] overflow-hidden" style={{ background: "linear-gradient(135deg, #050d1f 0%, #0a1a3a 45%, #1648D8 100%)" }}>
          <div className="mx-auto max-w-6xl grid lg:grid-cols-2 items-center">
            {/* Texto */}
            <div className="px-8 py-20 lg:px-12 lg:py-24 text-center lg:text-left">
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-white mb-6">
                Programa de distribuidores 2026
              </span>
              <h1 className="text-[clamp(30px,5vw,58px)] text-white leading-tight tracking-tight" style={{ fontWeight: 800 }}>
                ¿Quieres ser<br />distribuidor<br />de Arista?
              </h1>
              <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto lg:mx-0">
                Gana dinero recomendando servicios de telecomunicaciones y energía a familias y empresas. Sin inversión. Sin stock. Solo resultados.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a href={`https://wa.me/${WA}?text=${MSG}`} target="_blank" rel="noopener noreferrer"
                  className="rounded-xl bg-white px-8 py-4 text-base text-[#1648D8] hover:bg-white/90 transition-all hover:scale-105 shadow-lg" style={{ fontWeight: 700 }}>
                  Quiero ser distribuidor →
                </a>
                <a href="#como-funciona"
                  className="rounded-xl border border-white/30 px-8 py-4 text-base text-white/70 hover:border-white hover:text-white transition-colors">
                  Cómo funciona
                </a>
              </div>
            </div>
            {/* Imagen */}
            <div className="relative h-72 lg:h-full min-h-[420px] overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900&h=700&fit=crop"
                alt="Equipo de distribuidores Arista Group"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050d1f]/60 to-transparent lg:bg-gradient-to-l" />
              {/* Badge flotante */}
              <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:max-w-[220px]">
                <div className="rounded-2xl bg-white/95 backdrop-blur-sm p-4 shadow-xl">
                  <p className="text-[11px] uppercase tracking-widest text-[#1648D8] mb-1" style={{ fontWeight: 700 }}>Ingresos medios</p>
                  <p className="text-3xl text-[#1A1A1A]" style={{ fontWeight: 900 }}>3.400€<span className="text-base text-gray-500 ml-1">/mes</span></p>
                  <p className="text-xs text-gray-400 mt-0.5">Ingresos medios de nuestros distribuidores</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── NÚMEROS CLAVE ─────────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100 py-12">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {[
                { v: "85€",     l: "por cada alta de telefonía" },
                { v: "375€",    l: "margen mínimo por alta empresa energía" },
                { v: "0€",      l: "inversión inicial" },
                { v: "24h",     l: "tiempo de activación del alta" },
              ].map((s) => (
                <div key={s.v} className="text-center">
                  <p className="text-[clamp(28px,4vw,48px)] text-[#1648D8] tracking-tight" style={{ fontWeight: 800 }}>{s.v}</p>
                  <p className="mt-1 text-sm text-gray-500">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CÓMO FUNCIONA ─────────────────────────────────────── */}
        <section id="como-funciona" className="bg-[#F0F4FF] py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8] mb-2">Proceso</p>
              <h2 className="text-3xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>
                Tan fácil como 3 pasos
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  num: "01",
                  titulo: "Te registras",
                  desc: "Contáctanos por WhatsApp o rellena el formulario. Te damos acceso a todos los materiales y tarifas.",
                  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                },
                {
                  num: "02",
                  titulo: "Recomiendas",
                  desc: "Presenta Arista a personas de tu entorno: familia, amigos, clientes. Nosotros hacemos el resto.",
                  icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                },
                {
                  num: "03",
                  titulo: "Cobras",
                  desc: "Recibe tu comisión en menos de 30 días desde que el cliente activa el servicio. Sin complicaciones.",
                  icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                },
              ].map((s) => (
                <div key={s.num} className="rounded-2xl bg-white border border-gray-100 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl text-[#E3F2FD]" style={{ fontWeight: 800 }}>{s.num}</span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E3F2FD]">
                      <svg className="h-5 w-5 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg text-[#1A1A1A]" style={{ fontWeight: 700 }}>{s.titulo}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMISIONES ────────────────────────────────────────── */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8] mb-2">Ingresos</p>
              <h2 className="text-3xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>
                ¿Cuánto puedes ganar?
              </h2>
              <p className="mt-3 text-sm text-gray-500">Sin límite de altas. Cuantas más hagas, más ganas.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  categoria: "Telefonía residencial",
                  comision: "85€",
                  desc: "Por cada alta de fibra, móvil o pack convergente",
                  color: "#1648D8",
                  bg: "#EEF2FF",
                },
                {
                  categoria: "Energía residencial",
                  comision: "Variable",
                  desc: "Comisión por diferencial en el precio de la tarifa",
                  color: "#00B96B",
                  bg: "#F0FDF4",
                },
                {
                  categoria: "Empresas energía",
                  comision: "375€+",
                  desc: "Margen mínimo garantizado por cada alta de empresa",
                  color: "#D97706",
                  bg: "#FFFBEB",
                },
              ].map((c) => (
                <div key={c.categoria}
                  className="rounded-2xl border-2 p-7 flex flex-col"
                  style={{ borderColor: c.color + "33", backgroundColor: c.bg }}>
                  <p className="text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: c.color, fontWeight: 700 }}>{c.categoria}</p>
                  <p className="text-[48px] leading-none tracking-tighter mb-2" style={{ fontWeight: 800, color: c.color }}>{c.comision}</p>
                  <p className="text-sm text-gray-600">{c.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[#F0F4FF] border border-[#E3F2FD] p-6">
              <p className="text-sm text-gray-600 text-center">
                <span className="text-[#1A1A1A]" style={{ fontWeight: 700 }}>Ejemplo real:</span>{" "}
                Con 10 altas de telefonía al mes ganas <span className="text-[#1648D8]" style={{ fontWeight: 700 }}>850€ extra</span>.
                Con 5 empresas de energía, <span className="text-[#00B96B]" style={{ fontWeight: 700 }}>+1.875€</span> adicionales.
              </p>
            </div>
          </div>
        </section>

        {/* ── PARA QUIÉN ────────────────────────────────────────── */}
        <section className="bg-[#F0F4FF] py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>
                ¿Para quién es ideal?
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { titulo: "Autónomos",         desc: "Complementa tus ingresos sin cambiar tu actividad principal.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                { titulo: "Comerciales",       desc: "Si ya vendes otros servicios, añade telefonía y energía a tu cartera.", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                { titulo: "Agentes inmob.",    desc: "Ofrece a tus clientes fibra y energía en su nueva vivienda.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                { titulo: "Cualquier persona", desc: "Solo necesitas conocer personas. Sin experiencia previa.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              ].map((item) => (
                <div key={item.titulo} className="rounded-2xl bg-white border border-gray-100 p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E3F2FD] mb-4">
                    <svg className="h-5 w-5 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{item.titulo}</p>
                  <p className="mt-1.5 text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ─────────────────────────────────────────── */}
        <section className="bg-[#1648D8] py-20 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-[clamp(24px,4vw,42px)] text-white leading-tight tracking-tight" style={{ fontWeight: 800 }}>
              Empieza hoy.<br />Sin coste. Sin riesgo.
            </h2>
            <p className="mt-4 text-base text-white/70 max-w-lg mx-auto">
              Únete a la red de distribuidores de Arista Group y empieza a ganar comisiones esta misma semana.
            </p>
            <a href={`https://wa.me/${WA}?text=${MSG}`} target="_blank" rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-base text-[#1648D8] hover:bg-white/90 transition-colors" style={{ fontWeight: 700 }}>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Quiero ser distribuidor
            </a>
            <div className="mt-4">
              <Link href="/empresas" className="text-sm text-white/50 hover:text-white transition-colors underline underline-offset-2">
                Ver más sobre Arista para empresas →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
