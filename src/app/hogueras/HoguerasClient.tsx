"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const WA_MSG = encodeURIComponent(
  "Hola, he visto la oferta Hogueras y quiero el primer mes gratis."
);
const WA_URL = `https://wa.me/${WA}?text=${WA_MSG}`;

// ── Tracking helpers ────────────────────────────────────────────────
function track(event: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && (window as Window & { gtag?: Function }).gtag) {
    (window as Window & { gtag?: Function }).gtag!("event", event, params ?? {});
  }
}

// ── Datos ────────────────────────────────────────────────────────────
const TARIFAS = [
  {
    badge: "🔥 1er mes GRATIS",
    nombre: "Pack Pareja",
    desc: "Fibra 600Mb + 2 móviles 30GB",
    precioTachado: "35,90",
    precio: "35,90",
    destacado: false,
  },
  {
    badge: "⭐ Más elegida · 1er mes GRATIS",
    nombre: "Arista Infinity",
    desc: "Fibra 600Mb + Móvil Ilimitado",
    precioTachado: "40,90",
    precio: "40,90",
    destacado: true,
  },
  {
    badge: "🔥 1er mes GRATIS",
    nombre: "Pack Familiar",
    desc: "Fibra 600Mb + 3 móviles ilimitados + TV",
    precioTachado: "60,00",
    precio: "60,00",
    destacado: false,
  },
];

const POR_QUE = [
  { emoji: "🏠", titulo: "Somos de aquí", desc: "Empresa alicantina. No un call center en Madrid." },
  { emoji: "📱", titulo: "Red MasOrange", desc: "Misma cobertura que Orange. Sin el precio de Orange." },
  { emoji: "🤝", titulo: "Atención humana", desc: "Cuando llamas te coge una persona real." },
  { emoji: "🔓", titulo: "Sin permanencia", desc: "Si no estás contento en 30 días te ayudamos a volver." },
];

const FAQS = [
  {
    q: "¿El primer mes gratis es de verdad?",
    a: "Sí. No pagas nada el primer mes. A partir del mes 2 pagas el precio normal de tu tarifa. Sin trampa, sin asterisco.",
  },
  {
    q: "¿Tengo que dar mi número de tarjeta?",
    a: "No. El alta es completamente gratuita. El cobro empieza el mes 2 por domiciliación bancaria.",
  },
  {
    q: "¿Puedo conservar mi número actual?",
    a: "Sí. Gestionamos la portabilidad nosotros, sin cortes de servicio y sin que tengas que hacer nada.",
  },
  {
    q: "¿Cuánto tarda el alta?",
    a: "Menos de 24 horas desde que nos escribes. Lo gestionamos todo nosotros.",
  },
  {
    q: "¿Qué pasa si no me gusta el servicio?",
    a: "Sin permanencia — si en 30 días no estás contento te ayudamos a volver sin ningún coste.",
  },
];

export default function HoguerasClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const tarifasRef = useRef<HTMLElement>(null);
  const tarifasTracked = useRef(false);

  // Pageview tracking
  useEffect(() => {
    track("hogueras_pageview");
  }, []);

  // Scroll to tarifas tracking
  useEffect(() => {
    if (!tarifasRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tarifasTracked.current) {
          tarifasTracked.current = true;
          track("hogueras_scroll_tarifas");
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(tarifasRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTarifas = () => {
    tarifasRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWaClick = () => {
    track("hogueras_whatsapp_click");
    window.open(WA_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Header />
      <main className="mt-[108px]">

        {/* ══════════════════════════════════════════════════════════
            1 — HERO
        ══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32 text-center">
          {/* Imagen de fondo — hogueras */}
          <Image
            src="https://images.pexels.com/photos/1309644/pexels-photo-1309644.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
            alt="Hogueras de San Juan"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Overlay oscuro para legibilidad */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(74,18,0,0.82) 0%, rgba(183,28,28,0.70) 40%, rgba(230,81,0,0.65) 100%)" }} />
          {/* Glow decorativo */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full opacity-30"
              style={{ background: "radial-gradient(ellipse, #FF6D00, transparent)", filter: "blur(80px)" }} />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            {/* Badge animado con pulso */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 animate-pulse"
              style={{ backgroundColor: "rgba(255,109,0,0.2)", borderColor: "rgba(255,109,0,0.5)" }}>
              <span className="text-lg">🔥</span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#FFCCBC]" style={{ fontWeight: 700 }}>
                Oferta exclusiva Hogueras 2026
              </span>
              <span className="text-lg">🔥</span>
            </div>

            <h1 className="text-[clamp(36px,6.5vw,72px)] leading-[1.0] tracking-tight text-white mb-4" style={{ fontWeight: 900 }}>
              Primer mes gratis<br />
              <span style={{ color: "#FFD180" }}>por las Hogueras</span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
              Contrata del 19 al 24 de junio y no pagas el primer mes.<br />
              <strong className="text-white">Sin trampa. Sin letra pequeña.</strong>
            </p>

            {/* Countdown */}
            <div className="mb-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/40 mb-4" style={{ fontWeight: 700 }}>
                La oferta caduca el 24 de junio
              </p>
              <CountdownTimer size="md" variant="orange" />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWaClick}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-9 py-4 text-base text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#E65100", fontWeight: 800, boxShadow: "0 0 40px rgba(230,81,0,0.5)", border: "2px solid rgba(255,255,255,0.3)" }}
              >
                🔥 Quiero el primer mes gratis →
              </button>
              <button
                onClick={scrollToTarifas}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/40 px-9 py-4 text-base text-white hover:border-white hover:bg-white/10 transition-all"
                style={{ fontWeight: 600 }}
              >
                Ver tarifas ↓
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            2 — STRIP URGENCIA
        ══════════════════════════════════════════════════════════ */}
        <div className="bg-[#1A1A1A] py-3 px-4 text-center">
          <p className="text-sm text-white" style={{ fontWeight: 600 }}>
            🔥 Oferta válida del <strong>19 al 24 de junio de 2026</strong>
            <span className="mx-2 text-white/30">·</span>
            Solo para nuevos clientes
            <span className="mx-2 text-white/30">·</span>
            Primer mes bonificado al activar la línea
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════
            CARD HOGUERAS — FOTOS + TÍTULO (arriba)
        ══════════════════════════════════════════════════════════ */}
        <section className="bg-white px-4 py-8 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="rounded-3xl overflow-hidden border border-[#E0E0E0] shadow-xl bg-white">
              {/* Header de la card */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#F0F0F0]">
                <div className="flex items-center gap-2.5">
                  <Image src="/logo-arista.png" alt="Arista" width={90} height={30} className="object-contain" />
                  <span className="text-[12px] text-[#555]" style={{ fontWeight: 600 }}>× Hogueras de Alicante 2026</span>
                </div>
                <span className="rounded-full px-3 py-1 text-[11px] text-black" style={{ backgroundColor: "#FFB800", fontWeight: 800 }}>
                  🔥 19–24 jun
                </span>
              </div>

              {/* Título dentro de la card */}
              <div className="px-5 pt-4 pb-3">
                <h2 className="text-lg text-[#1A1A1A] leading-snug" style={{ fontWeight: 900 }}>
                  Las Hogueras de Alicante 2026 🔥
                </h2>
                <p className="text-xs text-[#888] mt-1">Celebra las fiestas ahorrando en luz y fibra</p>
              </div>

              {/* Imagen principal — Plaza Luceros con Arista */}
              <div className="relative w-full" style={{ height: "240px" }}>
                <Image
                  src="/hogueras-arista-luceros.jpg"
                  alt="Plaza de los Luceros — Arista en Alicante"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, 800px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="rounded-full bg-black/50 px-3 py-1 text-xs text-white/85 backdrop-blur-sm" style={{ fontWeight: 600 }}>
                    🏙️ Plaza de los Luceros · Alicante
                  </span>
                </div>
              </div>

              {/* Fila de 3 miniaturas */}
              <div className="grid grid-cols-3 gap-0.5">
                {[
                  { src: "/hogueras-fuego.jpg",  alt: "La quema · 24 junio",           label: "🔥 La quema" },
                  { src: "/alicante-fuegos.jpg", alt: "Fuegos Castillo Santa Bárbara", label: "🎆 Castillo" },
                  { src: "/hogueras-ninots.jpg", alt: "Ninots Hogueras de Alicante",   label: "🎭 Ninots" },
                ].map((img) => (
                  <div key={img.src} className="relative overflow-hidden" style={{ height: "100px" }}>
                    <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="200px" />
                    <div className="absolute inset-0 bg-black/25" />
                    <div className="absolute bottom-2 left-2">
                      <span className="text-[11px] text-white/90" style={{ fontWeight: 700 }}>{img.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-3.5 flex items-center justify-between bg-[#FAFAFA]">
                <p className="text-xs text-[#888]">Empresa alicantina 🧡 · Desde Alicante para Alicante</p>
                <button
                  onClick={handleWaClick}
                  className="rounded-xl px-4 py-2 text-xs text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#E65100", fontWeight: 700 }}
                >
                  Primer mes gratis →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            3 — CÓMO FUNCIONA
        ══════════════════════════════════════════════════════════ */}
        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-14">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#E65100] mb-2" style={{ fontWeight: 700 }}>
                3 pasos
              </p>
              <h2 className="text-[clamp(24px,4vw,40px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 900 }}>
                ¿Cómo consigo el primer mes gratis?
              </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-3 mb-12">
              {[
                {
                  num: "01",
                  emoji: "💬",
                  titulo: "Escríbenos por WhatsApp",
                  desc: "Dinos que vienes de la oferta Hogueras. Solo con eso ya tienes reservado tu primer mes gratis.",
                },
                {
                  num: "02",
                  emoji: "👤",
                  titulo: "Elegimos tu tarifa juntos",
                  desc: "Te hacemos una propuesta personalizada según lo que pagas ahora. Sin compromiso.",
                },
                {
                  num: "03",
                  emoji: "✅",
                  titulo: "Alta en 24 horas",
                  desc: "Gestionamos todo nosotros. En menos de 24 horas estás activo — y el primer mes no lo pagas.",
                },
              ].map((paso) => (
                <div key={paso.num} className="text-center">
                  <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: "#FFF3E0" }}>
                    <span className="text-3xl">{paso.emoji}</span>
                    <span className="absolute -top-2.5 -right-2.5 flex h-6 w-6 items-center justify-center rounded-full text-[11px] text-white"
                      style={{ backgroundColor: "#E65100", fontWeight: 800 }}>
                      {paso.num.replace("0", "")}
                    </span>
                  </div>
                  <h3 className="text-base text-[#1A1A1A] mb-2" style={{ fontWeight: 800 }}>{paso.titulo}</h3>
                  <p className="text-sm text-[#666] leading-relaxed">{paso.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={handleWaClick}
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-10 py-4 text-base text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#2E7D32", fontWeight: 800, boxShadow: "0 4px 24px rgba(46,125,50,0.35)" }}
              >
                💬 Empezar ahora →
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            4 — TARIFAS
        ══════════════════════════════════════════════════════════ */}
        <section
          ref={tarifasRef}
          id="tarifas"
          className="px-6 py-20 lg:px-8"
          style={{ backgroundColor: "#0D47A1" }}
        >
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#90CAF9] mb-2" style={{ fontWeight: 700 }}>
                Todas incluyen
              </p>
              <h2 className="text-[clamp(22px,4vw,40px)] text-white tracking-tight" style={{ fontWeight: 900 }}>
                Elige tu tarifa — El primer mes es gratis en todas
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              {TARIFAS.map((t) => (
                <div
                  key={t.nombre}
                  className={`relative rounded-3xl bg-white p-6 flex flex-col gap-4 transition-transform hover:-translate-y-1 ${t.destacado ? "ring-4 ring-[#E65100] shadow-2xl" : ""}`}
                >
                  {/* Badge */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span
                      className="rounded-full px-3 py-1 text-[11px]"
                      style={{
                        backgroundColor: t.destacado ? "#E65100" : "#1A1A1A",
                        color: "#fff",
                        fontWeight: 800,
                      }}
                    >
                      {t.badge}
                    </span>
                  </div>

                  <div className="mt-3">
                    <p className="text-[11px] text-[#999] uppercase tracking-widest" style={{ fontWeight: 700 }}>
                      {t.desc}
                    </p>
                    <h3 className="text-xl text-[#1A1A1A] mt-1" style={{ fontWeight: 900 }}>{t.nombre}</h3>
                  </div>

                  {/* Precio */}
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-base text-[#999] line-through">{t.precioTachado}€</span>
                    </div>
                    <div className="flex items-baseline gap-1 leading-none mt-1">
                      <span className="text-[48px] text-[#E65100]" style={{ fontWeight: 900 }}>0€</span>
                      <span className="text-sm text-[#999] mb-1">el primer mes</span>
                    </div>
                    <p className="text-xs text-[#666] mt-1">Luego <strong className="text-[#1A1A1A]">{t.precio}€/mes</strong> desde el mes 2</p>
                  </div>

                  {/* Checks */}
                  <div className="flex flex-col gap-2 pt-1 border-t border-[#F0F0F0]">
                    {["Red MasOrange", "Sin permanencia", "Alta en 24h"].map((c) => (
                      <div key={c} className="flex items-center gap-2">
                        <svg className="h-4 w-4 flex-shrink-0" style={{ color: "#2E7D32" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs text-[#555]" style={{ fontWeight: 600 }}>{c}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleWaClick}
                    className="mt-auto block w-full rounded-2xl py-3.5 text-center text-sm text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#E65100", fontWeight: 800 }}
                  >
                    Lo quiero →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            5 — POR QUÉ ARISTA
        ══════════════════════════════════════════════════════════ */}
        <section className="bg-[#F5F5F5] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#E65100] mb-2" style={{ fontWeight: 700 }}>
                Por qué Arista
              </p>
              <h2 className="text-[clamp(22px,4vw,40px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 900 }}>
                La operadora local de Alicante
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {POR_QUE.map((item) => (
                <div key={item.titulo}
                  className="rounded-2xl bg-white p-5 flex flex-col items-center text-center gap-3 shadow-sm border border-[#E0E0E0]">
                  <span className="text-4xl">{item.emoji}</span>
                  <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 800 }}>{item.titulo}</p>
                  <p className="text-xs text-[#666] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            6 — URGENCIA NARANJA
        ══════════════════════════════════════════════════════════ */}
        <section
          className="px-6 py-20 lg:px-8 text-center"
          style={{ backgroundColor: "#E65100" }}
        >
          <div className="mx-auto max-w-2xl">
            <h2 className="text-[clamp(26px,5vw,48px)] text-white tracking-tight mb-3" style={{ fontWeight: 900 }}>
              La oferta termina el 24 de junio
            </h2>
            <p className="text-base text-white/70 mb-10">
              Cuando acaben las Hogueras, el primer mes gratis desaparece.
            </p>

            <CountdownTimer size="md" variant="orange" />

            <div className="mt-10">
              <button
                onClick={handleWaClick}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white px-10 py-4 text-base hover:bg-white/10 transition-colors"
                style={{ color: "#fff", fontWeight: 800 }}
              >
                Aprovechar antes de que termine →
              </button>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            7 — FAQ
        ══════════════════════════════════════════════════════════ */}
        <section className="bg-white px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#E65100] mb-2" style={{ fontWeight: 700 }}>FAQ</p>
              <h2 className="text-[clamp(22px,3.5vw,36px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 900 }}>
                Preguntas frecuentes
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border overflow-hidden"
                  style={{
                    borderColor: openFaq === i ? "#E65100" : "#E0E0E0",
                    backgroundColor: openFaq === i ? "#FFF3E0" : "#FAFAFA",
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-sm text-[#1A1A1A] leading-snug" style={{ fontWeight: 700 }}>{faq.q}</span>
                    <svg
                      className="h-4 w-4 flex-shrink-0 transition-transform"
                      style={{ color: "#E65100", transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-[#444] leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            8 — CTA FINAL
        ══════════════════════════════════════════════════════════ */}
        <section
          className="relative overflow-hidden px-6 py-24 lg:px-8 text-center"
          style={{ background: "linear-gradient(160deg, #4a1200 0%, #B71C1C 40%, #E65100 100%)" }}
        >
          <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] rounded-full opacity-30"
            style={{ background: "radial-gradient(ellipse, #FF6D00, transparent)", filter: "blur(80px)" }} />

          <div className="relative z-10 mx-auto max-w-xl">
            <span className="text-6xl mb-4 block">🔥</span>
            <h2 className="text-[clamp(32px,6vw,64px)] text-white tracking-tight mb-3" style={{ fontWeight: 900 }}>
              ¿A qué esperas?
            </h2>
            <p className="text-base text-white/70 mb-10">
              El primer mes gratis solo dura hasta el 24 de junio.
            </p>

            {/* Countdown grande */}
            <div className="mb-10">
              <CountdownTimer size="lg" variant="orange" />
            </div>

            <button
              onClick={handleWaClick}
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-12 py-5 text-lg hover:bg-white/90 transition-colors"
              style={{ color: "#E65100", fontWeight: 900, boxShadow: "0 0 60px rgba(255,255,255,0.25)" }}
            >
              QUIERO EL PRIMER MES GRATIS
            </button>

            <p className="mt-5 text-xs text-white/40">
              Sin permanencia · Sin trampa · Alta en 24h · Empresa alicantina
            </p>
          </div>
        </section>

      </main>

      {/* ══════════════════════════════════════════════════════════
          BARRA FIJA MÓVIL
      ══════════════════════════════════════════════════════════ */}
      <div
        className="fixed bottom-0 inset-x-0 z-50 flex sm:hidden items-center justify-between gap-3 px-4 py-3 border-t"
        style={{ backgroundColor: "#E65100", borderColor: "rgba(255,255,255,0.2)" }}
      >
        <p className="text-xs text-white leading-tight" style={{ fontWeight: 700 }}>
          🔥 1er mes GRATIS<br />
          <span style={{ fontWeight: 500 }}>Solo hasta el 24 jun</span>
        </p>
        <button
          onClick={handleWaClick}
          className="flex-shrink-0 rounded-xl bg-white px-5 py-2.5 text-sm"
          style={{ color: "#E65100", fontWeight: 800 }}
        >
          Lo quiero →
        </button>
      </div>

      {/* Padding para que la barra fija no tape el footer en móvil */}
      <div className="sm:hidden h-16" />

      <Footer />
    </>
  );
}
