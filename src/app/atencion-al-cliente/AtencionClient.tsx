"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WA    = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const PHONE = process.env.NEXT_PUBLIC_PHONE    || "+34621192578";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL    || "info@aristagroup.es";

/* ─── Canales de contacto ─────────────────────────────────── */
const CANALES = [
  {
    id: "telefono",
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    titulo: "Teléfono",
    valor: PHONE,
    sub: "Lunes a Viernes · 9h–18h",
    color: "#1648D8",
    bg: "#EEF2FF",
    cta: "Llamar ahora",
    href: `tel:${PHONE}`,
    externo: false,
  },
  {
    id: "whatsapp",
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
    titulo: "WhatsApp",
    valor: "+34 621 192 578",
    sub: "Respuesta en menos de 2 horas",
    color: "#25D366",
    bg: "#F0FDF4",
    cta: "Escribir por WhatsApp",
    href: `https://wa.me/${WA}?text=${encodeURIComponent("Hola, necesito ayuda con mi servicio de Arista Group.")}`,
    externo: true,
  },
  {
    id: "email",
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    titulo: "Email",
    valor: EMAIL,
    sub: "Respuesta en menos de 24h laborables",
    color: "#F59E0B",
    bg: "#FEF3C7",
    cta: "Enviar email",
    href: `mailto:${EMAIL}?subject=Consulta%20Arista%20Group`,
    externo: false,
  },
];

/* ─── FAQs ────────────────────────────────────────────────── */
const FAQS = [
  {
    cat: "Contratación",
    emoji: "📋",
    preguntas: [
      {
        q: "¿Cómo contrato una tarifa de fibra o móvil?",
        a: "Puedes contratar directamente por WhatsApp, por teléfono o rellenando el formulario de la web. Un asesor te guía en todo el proceso. El alta se gestiona en menos de 24 horas sin que tengas que hacer nada más.",
      },
      {
        q: "¿Cómo sé si tenéis cobertura en mi dirección?",
        a: "Usa nuestra herramienta de cobertura en aristagroup.es/cobertura. Solo tienes que introducir tu dirección y en segundos te decimos si cubrimos tu zona. Si no estás seguro, escríbenos por WhatsApp y lo comprobamos manualmente.",
      },
      {
        q: "¿Cómo puedo cambiar de compañía sin cortar el servicio?",
        a: "El proceso de portabilidad lo gestionamos nosotros. Nunca perderás la conexión durante el cambio. Solo necesitas darnos tu número de teléfono o número de contrato actual y nosotros hacemos el resto. El cambio suele tardar entre 24 y 48 horas.",
      },
      {
        q: "¿Cómo sé cuánto voy a pagar exactamente?",
        a: "El precio que ves en la web es el que pagas. Sin cargos de alta, sin coste de router, sin subidas en el segundo año. Si tienes dudas, pídenos un presupuesto personalizado por WhatsApp.",
      },
    ],
  },
  {
    cat: "Mi servicio",
    emoji: "📡",
    preguntas: [
      {
        q: "¿Cómo reinicio el router si tengo problemas de conexión?",
        a: "Desenchufa el router de la corriente, espera 30 segundos y vuelve a enchufarlo. Espera 2 minutos a que se reinicie completamente. Si el problema persiste, escríbenos por WhatsApp con una foto de las luces del router y te ayudamos en minutos.",
      },
      {
        q: "¿Cómo contacto con soporte técnico si tengo una avería?",
        a: "Escríbenos por WhatsApp al +34 621 192 578 o llama al mismo número. Atendemos de lunes a viernes de 9h a 18h. Para incidencias urgentes fuera de horario, envía un WhatsApp y lo atendemos a primera hora del siguiente día hábil.",
      },
      {
        q: "¿Cómo puedo ver mi factura?",
        a: "Las facturas se envían automáticamente a tu email cada mes. Si no la encuentras, revisa la carpeta de spam. También puedes pedirla en cualquier momento por WhatsApp o email y te la enviamos al momento.",
      },
      {
        q: "¿Cómo añado una línea móvil adicional a mi contrato?",
        a: "Escríbenos por WhatsApp o llámanos. Las líneas adicionales cuestan desde 9,90€/mes. El alta es inmediata y sin papeleos.",
      },
    ],
  },
  {
    cat: "Facturación",
    emoji: "💳",
    preguntas: [
      {
        q: "¿Cómo domicilio el pago de mi factura?",
        a: "Al contratar, te pedimos el IBAN de tu cuenta bancaria. El cobro se hace automáticamente cada mes entre los días 1 y 5. Si necesitas cambiar la cuenta, escríbenos con el nuevo IBAN.",
      },
      {
        q: "¿Cómo reclamo un cobro que creo que es incorrecto?",
        a: "Escríbenos por WhatsApp o email con el importe y la fecha del cargo. Revisamos tu factura en menos de 24 horas y si hay un error lo corregimos en la siguiente factura o hacemos un abono inmediato.",
      },
      {
        q: "¿Cómo funciona la domiciliación si quiero pagar con otra cuenta?",
        a: "Envíanos el nuevo IBAN por WhatsApp o email. El cambio se aplica en el siguiente ciclo de facturación. No hay ningún coste por cambiar la cuenta de domiciliación.",
      },
    ],
  },
  {
    cat: "Bajas y cambios",
    emoji: "🔄",
    preguntas: [
      {
        q: "¿Cómo doy de baja mi contrato?",
        a: "Llámanos o escríbenos por WhatsApp con 15 días de antelación. No hay permanencia en ninguna tarifa, así que no pagarás ninguna penalización. Gestionamos la baja sin complicaciones.",
      },
      {
        q: "¿Cómo cambio de tarifa si quiero más velocidad o más datos?",
        a: "Escríbenos por WhatsApp y te hacemos el cambio de tarifa en el mismo día, sin interrupciones del servicio y sin coste adicional de gestión.",
      },
      {
        q: "¿Cómo consigo que me devuelvan el router si me voy?",
        a: "Si decides irte, simplemente indícalo al tramitar la baja. Te daremos instrucciones para la devolución del router. Si prefieres quedártelo, el coste es de 29€.",
      },
    ],
  },
];

/* ─── Datos de la empresa ─────────────────────────────────── */
const EMPRESA = {
  nombre:       "Arista Group S.L.",
  cif:          "B-XXXXXXXX",
  direccion:    "Avenida de la Marina, 12",
  cp:           "03560",
  ciudad:       "El Campello, Alicante",
  horario:      "Lunes a Viernes · 9:00h – 18:00h",
  horario_wa:   "7 días · Respuesta en 2h",
  registro:     "Registro Mercantil de Alicante",
};

/* ─── Componente acordeón FAQ ─────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all ${open ? "border-[#1648D8]/30 bg-[#F7F9FF]" : "border-gray-200 bg-white"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
        aria-expanded={open}>
        <span className="text-sm text-[#1A1A1A] pr-4 leading-snug" style={{ fontWeight: open ? 700 : 600 }}>
          {q}
        </span>
        <div className={`flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full transition-all ${
          open ? "bg-[#1648D8] text-white" : "bg-gray-100 text-gray-400"
        }`}>
          <svg className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="border-t border-[#1648D8]/10 px-5 pb-4 pt-3">
          <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

/* ─── Página principal ────────────────────────────────────── */
export default function AtencionClient() {
  const [catActiva, setCatActiva] = useState<string>("Contratación");

  const catActual = FAQS.find(f => f.cat === catActiva) ?? FAQS[0];

  return (
    <>
      <Header />
      <div className="mt-[72px] min-h-screen bg-white font-sans">

        {/* ══ HERO ════════════════════════════════════════════ */}
        <section className="bg-[#F5F6F8] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8]" style={{ fontWeight: 700 }}>Atención al cliente</span>
            </div>
            <h1 className="text-[clamp(26px,4.5vw,54px)] text-[#1A1A1A] leading-tight tracking-tight mb-4" style={{ fontWeight: 900 }}>
              Estamos aquí para ayudarte.<br />
              <span style={{ color: "#1648D8" }}>Personas reales, no bots.</span>
            </h1>
            <p className="text-base text-gray-400 max-w-xl leading-relaxed">
              Elige cómo prefieres contactarnos. Atendemos por teléfono, WhatsApp y email.
              Si tienes una avería, una duda o quieres cambiar algo — estamos a un mensaje de distancia.
            </p>
          </div>
        </section>

        {/* ══ CANALES DE CONTACTO ═════════════════════════════ */}
        <section className="bg-white px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-5 sm:grid-cols-3">
              {CANALES.map((c) => (
                <div key={c.id}
                  className="flex flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">

                  {/* Icono */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: c.bg }}>
                    <svg className="h-6 w-6" style={{ color: c.color }} fill={c.id === "whatsapp" ? "currentColor" : "none"} stroke={c.id === "whatsapp" ? "none" : "currentColor"} viewBox="0 0 24 24">
                      <path strokeLinecap={c.id !== "whatsapp" ? "round" : undefined} strokeLinejoin={c.id !== "whatsapp" ? "round" : undefined} strokeWidth={c.id !== "whatsapp" ? 1.5 : undefined} d={c.icon} />
                    </svg>
                  </div>

                  <p className="text-xs uppercase tracking-wider text-gray-400 mb-1" style={{ fontWeight: 700 }}>{c.titulo}</p>
                  <p className="text-lg text-[#1A1A1A] leading-tight mb-1" style={{ fontWeight: 800 }}>{c.valor}</p>
                  <p className="text-xs text-gray-400 mb-5 flex-1">{c.sub}</p>

                  {c.externo ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-2xl py-3 text-sm text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: c.color, fontWeight: 700 }}>
                      {c.cta} →
                    </a>
                  ) : (
                    <a href={c.href}
                      className="flex items-center justify-center gap-2 rounded-2xl py-3 text-sm transition-all hover:opacity-90"
                      style={{ backgroundColor: c.color, color: c.id === "email" ? "#000" : "#fff", fontWeight: 700 }}>
                      {c.cta} →
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Horario destacado */}
            <div className="mt-6 rounded-2xl border border-[#1648D8]/15 bg-[#EEF2FF] px-6 py-4 flex flex-wrap items-center gap-4 justify-between">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#00B96B] flex-shrink-0" />
                <p className="text-sm text-[#1A1A1A]">
                  <strong>Horario de atención telefónica:</strong> {EMPRESA.horario}
                </p>
              </div>
              <p className="text-sm text-gray-400">
                WhatsApp disponible {EMPRESA.horario_wa}
              </p>
            </div>
          </div>
        </section>

        {/* ══ AYUDA — PREGUNTAS FRECUENTES ════════════════════ */}
        <section className="bg-[#F5F6F8] px-6 py-16 lg:px-8" id="ayuda">
          <div className="mx-auto max-w-5xl">

            {/* Cabecera */}
            <div className="mb-10 text-center">
              <div className="mb-3 flex items-center justify-center gap-3">
                <div className="h-px w-6 bg-[#1648D8]" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8]" style={{ fontWeight: 700 }}>Centro de ayuda</span>
                <div className="h-px w-6 bg-[#1648D8]" />
              </div>
              <h2 className="text-[clamp(20px,3.5vw,36px)] text-[#1A1A1A] tracking-tight mb-2" style={{ fontWeight: 800 }}>
                Preguntas frecuentes
              </h2>
              <p className="text-sm text-gray-400 max-w-md mx-auto">
                Las dudas más habituales resueltas en segundos. Si no encuentras tu respuesta, escríbenos.
              </p>
            </div>

            <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-8">

              {/* Categorías lateral */}
              <div className="mb-6 lg:mb-0">
                <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
                  {FAQS.map((f) => (
                    <button key={f.cat}
                      onClick={() => setCatActiva(f.cat)}
                      className={`flex-shrink-0 flex items-center gap-2.5 rounded-2xl px-4 py-3 text-sm text-left transition-all lg:w-full ${
                        catActiva === f.cat
                          ? "bg-[#1648D8] text-white shadow-md"
                          : "bg-white border border-gray-200 text-gray-600 hover:border-[#1648D8]/30 hover:text-[#1648D8]"
                      }`}
                      style={{ fontWeight: catActiva === f.cat ? 700 : 500 }}>
                      <span className="text-base">{f.emoji}</span>
                      {f.cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preguntas de la categoría activa */}
              <div className="flex flex-col gap-2.5">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-1" style={{ fontWeight: 700 }}>
                  {catActual.emoji} {catActual.cat} — {catActual.preguntas.length} preguntas
                </p>
                {catActual.preguntas.map((faq) => (
                  <FaqItem key={faq.q} q={faq.q} a={faq.a} />
                ))}

                {/* CTA al final de las FAQs */}
                <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>¿No has encontrado tu respuesta?</p>
                    <p className="text-xs text-gray-400 mt-0.5">Un asesor real te responde en menos de 2 horas</p>
                  </div>
                  <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, tengo una duda que no encuentro en las preguntas frecuentes.")}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex-shrink-0 flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: "#25D366", fontWeight: 700 }}>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Preguntar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ DATOS DE LA EMPRESA ═════════════════════════════ */}
        <section className="bg-white px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 lg:grid-cols-2 items-start">

              {/* Info empresa */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px w-6 bg-[#F59E0B]" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[#F59E0B]" style={{ fontWeight: 700 }}>Datos de la empresa</span>
                </div>
                <h2 className="text-2xl text-[#1A1A1A] mb-6 tracking-tight" style={{ fontWeight: 800 }}>
                  Arista Group — empresa local en Alicante
                </h2>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", label: "Razón social",   val: EMPRESA.nombre },
                    { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", label: "CIF",              val: EMPRESA.cif },
                    { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Dirección",       val: `${EMPRESA.direccion}, ${EMPRESA.cp} ${EMPRESA.ciudad}` },
                    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Horario oficina",  val: EMPRESA.horario },
                    { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email",            val: EMAIL },
                  ].map((d) => (
                    <div key={d.label} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-[#FAFAFA] px-4 py-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] mt-0.5">
                        <svg className="h-4 w-4 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-gray-400" style={{ fontWeight: 700 }}>{d.label}</p>
                        <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 600 }}>{d.val}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mapa / bloque de acceso rápido */}
              <div className="flex flex-col gap-4">
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px w-6 bg-[#1648D8]" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8]" style={{ fontWeight: 700 }}>Acceso rápido</span>
                </div>

                {[
                  { emoji: "📋", titulo: "Comprobar cobertura",     desc: "Ver si llegamos a tu dirección en segundos",     href: "/cobertura",           externo: false },
                  { emoji: "💰", titulo: "Calcular tu ahorro",      desc: "Descubre cuánto ahorras al mes con Arista",      href: "/reto-factura#calculadora", externo: false },
                  { emoji: "🚨", titulo: "Rescate de clientes",     desc: "¿Tu operadora te ha dejado sin servicio?",       href: "/rescate",             externo: false },
                  { emoji: "📄", titulo: "Ver tarifas",             desc: "Todos los precios y packs disponibles",          href: "/tarifas",             externo: false },
                  { emoji: "⚖️", titulo: "Política de privacidad",  desc: "Información sobre tratamiento de datos",         href: "/privacidad",          externo: false },
                ].map((l) => (
                  <Link key={l.href} href={l.href}
                    className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 hover:border-[#1648D8]/30 hover:bg-[#F7F9FF] transition-all group">
                    <span className="text-2xl flex-shrink-0">{l.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{l.titulo}</p>
                      <p className="text-xs text-gray-400 truncate">{l.desc}</p>
                    </div>
                    <svg className="h-4 w-4 text-gray-300 group-hover:text-[#1648D8] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CTA FINAL ═══════════════════════════════════════ */}
        <section className="bg-[#F5F6F8] px-6 py-14 lg:px-8 text-center">
          <div className="mx-auto max-w-xl">
            <p className="text-3xl mb-3">👋</p>
            <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontWeight: 800 }}>
              ¿Prefieres que te llamemos nosotros?
            </h2>
            <p className="text-sm text-gray-400 mb-6 max-w-sm mx-auto">
              Deja tu número y te llamamos en menos de 1 hora en horario de atención.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero que me llamen para resolver una duda.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-sm text-white transition-all hover:opacity-90"
                style={{ backgroundColor: "#1648D8", fontWeight: 700 }}>
                Solicitar llamada →
              </a>
              <a href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 px-7 py-3.5 text-sm text-gray-600 hover:border-[#1648D8] hover:text-[#1648D8] transition-all"
                style={{ fontWeight: 600 }}>
                {PHONE}
              </a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
