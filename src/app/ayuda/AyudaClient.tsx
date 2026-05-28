"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WA    = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const PHONE = process.env.NEXT_PUBLIC_PHONE    || "+34621192578";

/* ─── Base de conocimiento ────────────────────────────────── */
const TEMAS = [
  {
    id: "contratar",
    emoji: "📋",
    titulo: "Contratar",
    color: "#1648D8",
    bg: "#EEF2FF",
    faqs: [
      { q: "¿Cómo contrato la fibra?", a: "Escríbenos por WhatsApp o llámanos. Un asesor te da de alta en menos de 24 horas sin que tengas que hacer nada más. No necesitas ir a ninguna tienda." },
      { q: "¿Cómo sé si tenéis cobertura en mi zona?", a: "Entra en aristagroup.es/cobertura, introduce tu dirección y en segundos te confirmamos si llegamos. Si tienes dudas, pregúntanos por WhatsApp." },
      { q: "¿Cómo contrato si ya tengo fibra con otra empresa?", a: "Sin problema. Gestionamos la portabilidad nosotros. Nunca perderás la conexión. Solo dinos el nombre de tu operadora actual y el número de contrato y nos encargamos de todo." },
      { q: "¿Cómo sé el precio exacto antes de contratar?", a: "El precio que ves en la web es el que pagas, sin cargos ocultos. Si quieres un presupuesto personalizado, pídelo por WhatsApp y te lo hacemos en minutos." },
      { q: "¿Cómo puedo contratar si soy autónomo o empresa?", a: "Tenemos tarifas específicas para autónomos y pymes. Escríbenos por WhatsApp o visita la sección de Empresas en la web para ver las opciones." },
    ],
  },
  {
    id: "fibra",
    emoji: "🌐",
    titulo: "Fibra",
    color: "#7C3AED",
    bg: "#F5F3FF",
    faqs: [
      { q: "¿Cómo reinicio el router si no tengo conexión?", a: "Desenchufa el router de la corriente, espera 30 segundos y vuelve a enchufarlo. Espera 2 minutos. Si no se soluciona, mándanos una foto de las luces del router por WhatsApp." },
      { q: "¿Cómo configuro el Wi-Fi del router?", a: "El router viene preconfigurado. La contraseña Wi-Fi está en la pegatina de la parte inferior del router. Si necesitas cambiarla, accede a 192.168.1.1 desde tu navegador o pídenos ayuda." },
      { q: "¿Cómo mejoro la señal Wi-Fi en casa?", a: "Coloca el router en el centro de la casa, en alto y sin obstáculos metálicos cerca. Para habitaciones alejadas, puedes añadir un repetidor Wi-Fi. Consúltanos y te recomendamos el mejor para tu hogar." },
      { q: "¿Cómo sé la velocidad de mi fibra?", a: "Ve a fast.com o speedtest.net con el ordenador conectado por cable al router para medir la velocidad real. Por Wi-Fi la velocidad puede ser inferior según la distancia al router." },
      { q: "¿Cómo amplío la velocidad de mi fibra?", a: "Escríbenos por WhatsApp y hacemos el cambio de tarifa el mismo día, sin cortes de servicio." },
    ],
  },
  {
    id: "movil",
    emoji: "📱",
    titulo: "Móvil",
    color: "#0891B2",
    bg: "#ECFEFF",
    faqs: [
      { q: "¿Cómo activo mi tarjeta SIM de Arista?", a: "Una vez recibida la SIM, introduce tu número de contrato en el SMS de activación que recibirás o llámanos. En minutos tu línea estará activa." },
      { q: "¿Cómo conservo mi número al venirnos?", a: "La portabilidad es gratuita y la gestionamos nosotros. Solo necesitamos tu número actual y el código de operadora (disponible en tu compañía actual). El cambio se hace sin interrupciones." },
      { q: "¿Cómo sé cuántos datos me quedan?", a: "Envía SALDO al 22123 o llama al 22123 desde tu línea Arista para consultar el consumo. También puedes pedírnoslo por WhatsApp en cualquier momento." },
      { q: "¿Cómo amplío los datos si se me acaban?", a: "Escríbenos por WhatsApp y te añadimos un bono de datos extra al momento. También puedes cambiar a una tarifa con más GB si lo necesitas de forma habitual." },
      { q: "¿Cómo funciona el roaming en el extranjero?", a: "Dentro de la Unión Europea puedes usar tus datos y llamadas igual que en España sin coste adicional. Para otros países consúltanos las tarifas." },
    ],
  },
  {
    id: "factura",
    emoji: "💳",
    titulo: "Facturación",
    color: "#059669",
    bg: "#ECFDF5",
    faqs: [
      { q: "¿Cómo recibo mi factura cada mes?", a: "La factura se envía automáticamente a tu email entre los días 1 y 5 de cada mes. Si no la recibes, revisa spam o escríbenos y te la reenviamos." },
      { q: "¿Cómo cambio la cuenta bancaria de domiciliación?", a: "Envíanos el nuevo IBAN por WhatsApp o email. El cambio se aplica en el siguiente ciclo de facturación sin ningún coste." },
      { q: "¿Cómo reclamo un cobro que creo que es incorrecto?", a: "Escríbenos por WhatsApp o email con el importe y la fecha. Revisamos tu factura en menos de 24 horas y si hay un error lo corregimos con un abono inmediato." },
      { q: "¿Cómo funciona el pago si tengo varios servicios?", a: "Todos tus servicios van en una sola factura mensual. Un único cargo en tu cuenta bancaria el mismo día de cada mes." },
      { q: "¿Cómo consigo una factura para desgravación de autónomos?", a: "Tu factura mensual incluye todos los datos fiscales necesarios. Si necesitas un formato específico o un resumen anual, pídelo por email." },
    ],
  },
  {
    id: "baja",
    emoji: "🔄",
    titulo: "Baja y cambios",
    color: "#E53E3E",
    bg: "#FFF5F5",
    faqs: [
      { q: "¿Cómo doy de baja mi contrato?", a: "Llámanos o escríbenos con 15 días de antelación. No hay permanencia en ninguna tarifa, así que no pagarás ninguna penalización. Lo tramitamos ese mismo día." },
      { q: "¿Cómo cambio de tarifa?", a: "Escríbenos por WhatsApp y hacemos el cambio ese mismo día, sin interrupciones del servicio y sin coste de gestión." },
      { q: "¿Cómo traslado mi contrato si me mudo de casa?", a: "Avísanos con al menos 5 días de antelación. Verificamos cobertura en la nueva dirección y gestionamos el traslado. En la mayoría de casos el servicio se activa el mismo día del traslado." },
      { q: "¿Cómo devuelvo el router si me voy?", a: "Si decides irte, indícalo al tramitar la baja. Te damos instrucciones para la devolución. Si prefieres quedártelo el coste es de 29€." },
      { q: "¿Cómo suspendo el servicio temporalmente?", a: "Ofrecemos suspensión temporal de hasta 3 meses (por ejemplo en segunda residencia o viaje largo). Escríbenos para activar esta opción." },
    ],
  },
  {
    id: "energia",
    emoji: "⚡",
    titulo: "Energía",
    color: "#F59E0B",
    bg: "#FEF3C7",
    faqs: [
      { q: "¿Cómo contrato la luz con Arista Energía?", a: "Escríbenos por WhatsApp o llámanos. Necesitamos tu CUPS (código de punto de suministro, en tu factura actual) y tus datos. El cambio de comercializadora tarda unos 20 días y no hay cortes de suministro." },
      { q: "¿Cómo leo mi factura de la luz?", a: "La factura incluye: consumo en kWh, precio por kWh, potencia contratada y coste de potencia, impuestos y total. Si tienes alguna duda, mándanos la factura por WhatsApp y te la explicamos línea por línea." },
      { q: "¿Cómo bajo la potencia contratada para pagar menos?", a: "Si tu potencia contratada es mayor de lo que necesitas, puedes bajarla y reducir la parte fija de la factura. Consúltanos y hacemos un análisis de tu consumo gratis." },
      { q: "¿Cómo funciona el precio de la energía con Arista?", a: "Ofrecemos tarifas con precio fijo estable, sin las fluctuaciones del mercado spot. Así sabes exactamente cuánto vas a pagar cada mes." },
      { q: "¿Cómo combino la luz con fibra y móvil en la misma factura?", a: "Con nuestro Bundle puedes tener fibra, móvil y energía todo en una sola factura mensual. Visita aristagroup.es/bundle para ver precios y configurar tu paquete." },
    ],
  },
];

/* ─── Accesos rápidos populares ───────────────────────────── */
const POPULARES = [
  { emoji: "🔌", titulo: "Reiniciar router",          href: "#fibra",      q: "¿Cómo reinicio el router si no tengo conexión?" },
  { emoji: "📱", titulo: "Conservar mi número",       href: "#movil",      q: "¿Cómo conservo mi número al venirnos?" },
  { emoji: "💸", titulo: "Ver mi factura",             href: "#factura",    q: "¿Cómo recibo mi factura cada mes?" },
  { emoji: "🚪", titulo: "Dar de baja el contrato",   href: "#baja",       q: "¿Cómo doy de baja mi contrato?" },
  { emoji: "📡", titulo: "Comprobar cobertura",        href: "/cobertura",  q: "" },
  { emoji: "💡", titulo: "Contratar la luz",           href: "#energia",    q: "¿Cómo contrato la luz con Arista Energía?" },
];

/* ─── Acordeón ────────────────────────────────────────────── */
function FaqItem({ q, a, color }: { q: string; a: string; color: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all ${open ? "border-gray-300 shadow-sm" : "border-gray-200"} bg-white`}>
      <button onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}>
        <span className="text-sm text-[#1A1A1A] leading-snug" style={{ fontWeight: open ? 700 : 500 }}>
          {q}
        </span>
        <div className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-all ${open ? "rotate-45" : ""}`}
          style={{ backgroundColor: open ? color : "#F3F4F6", color: open ? "#fff" : "#9CA3AF" }}>
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="border-t border-gray-100 px-5 pb-4 pt-3">
          <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
          <a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Tengo una duda: ${q}`)}`}
            target="_blank" rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#25D366] hover:underline"
            style={{ fontWeight: 600 }}>
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Preguntar sobre esto por WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

/* ─── Página ──────────────────────────────────────────────── */
export default function AyudaClient() {
  const [busqueda, setBusqueda] = useState("");
  const [temaActivo, setTemaActivo] = useState<string | null>(null);

  // Búsqueda en tiempo real
  const resultados = useMemo(() => {
    if (!busqueda.trim()) return [];
    const q = busqueda.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const res: { tema: typeof TEMAS[0]; faq: { q: string; a: string } }[] = [];
    for (const tema of TEMAS) {
      for (const faq of tema.faqs) {
        const haystack = (faq.q + " " + faq.a).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        if (haystack.includes(q)) res.push({ tema, faq });
      }
    }
    return res;
  }, [busqueda]);

  const temaSeleccionado = temaActivo ? TEMAS.find(t => t.id === temaActivo) : null;

  return (
    <>
      <Header />
      <div className="mt-[72px] min-h-screen bg-white font-sans">

        {/* ══ HERO CON BUSCADOR ═══════════════════════════════ */}
        <section className="relative overflow-hidden px-6 pt-14 pb-16 lg:px-8 text-center"
          style={{ background: "linear-gradient(135deg, #0D47A1 0%, #1648D8 60%, #1e40af 100%)" }}>

          <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="pointer-events-none absolute right-1/4 bottom-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
              <svg className="h-4 w-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/70" style={{ fontWeight: 700 }}>Centro de ayuda</span>
            </div>

            <h1 className="text-[clamp(28px,5vw,56px)] text-white leading-tight tracking-tight mb-3" style={{ fontWeight: 900 }}>
              ¿En qué podemos<br />ayudarte?
            </h1>
            <p className="text-base text-white/55 mb-8">
              Busca tu duda o elige una categoría. Si no encuentras respuesta, un asesor real te atiende en minutos.
            </p>

            {/* Buscador */}
            <div className="relative mx-auto max-w-xl">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Ej: cómo reinicio el router, conservar mi número…"
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                className="w-full rounded-2xl bg-white pl-12 pr-4 py-4 text-sm text-[#1A1A1A] outline-none shadow-xl placeholder-gray-400 focus:ring-2 focus:ring-white/50"
                style={{ fontWeight: 500 }}
              />
              {busqueda && (
                <button onClick={() => setBusqueda("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Resultados de búsqueda */}
            {busqueda && (
              <div className="mt-3 mx-auto max-w-xl rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden text-left">
                {resultados.length > 0 ? (
                  <>
                    <p className="px-4 pt-3 pb-1 text-[10px] uppercase tracking-widest text-gray-400" style={{ fontWeight: 700 }}>
                      {resultados.length} resultado{resultados.length > 1 ? "s" : ""}
                    </p>
                    {resultados.slice(0, 5).map(({ tema, faq }, i) => (
                      <button key={i}
                        onClick={() => { setTemaActivo(tema.id); setBusqueda(""); const el = document.getElementById("temas"); el?.scrollIntoView({ behavior: "smooth" }); }}
                        className="flex w-full items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-t border-gray-50 first:border-0 text-left">
                        <span className="text-xl flex-shrink-0 mt-0.5">{tema.emoji}</span>
                        <div className="min-w-0">
                          <p className="text-sm text-[#1A1A1A] truncate" style={{ fontWeight: 600 }}>{faq.q}</p>
                          <p className="text-xs text-gray-400 truncate mt-0.5">{tema.titulo}</p>
                        </div>
                      </button>
                    ))}
                    {resultados.length > 5 && (
                      <p className="px-4 py-2 text-xs text-gray-400 border-t border-gray-50">
                        +{resultados.length - 5} resultados más — refina la búsqueda
                      </p>
                    )}
                  </>
                ) : (
                  <div className="px-5 py-5 text-center">
                    <p className="text-sm text-gray-400 mb-3">No encontramos respuesta para eso</p>
                    <a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hola, tengo una duda: ${busqueda}`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs text-white"
                      style={{ backgroundColor: "#25D366", fontWeight: 700 }}>
                      Preguntar por WhatsApp →
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ══ ACCESOS RÁPIDOS ═════════════════════════════════ */}
        <section className="bg-[#F5F6F8] px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 text-xs uppercase tracking-widest text-gray-400" style={{ fontWeight: 700 }}>
              Lo más consultado
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {POPULARES.map((p) => (
                p.q ? (
                  <button key={p.titulo}
                    onClick={() => {
                      const tema = TEMAS.find(t => t.faqs.some(f => f.q === p.q));
                      if (tema) { setTemaActivo(tema.id); document.getElementById("temas")?.scrollIntoView({ behavior: "smooth" }); }
                    }}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-4 text-center hover:border-[#1648D8]/30 hover:shadow-sm transition-all group">
                    <span className="text-2xl">{p.emoji}</span>
                    <span className="text-xs text-gray-600 group-hover:text-[#1648D8] transition-colors leading-tight" style={{ fontWeight: 600 }}>
                      {p.titulo}
                    </span>
                  </button>
                ) : (
                  <Link key={p.titulo} href={p.href}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-white px-3 py-4 text-center hover:border-[#1648D8]/30 hover:shadow-sm transition-all group">
                    <span className="text-2xl">{p.emoji}</span>
                    <span className="text-xs text-gray-600 group-hover:text-[#1648D8] transition-colors leading-tight" style={{ fontWeight: 600 }}>
                      {p.titulo}
                    </span>
                  </Link>
                )
              ))}
            </div>
          </div>
        </section>

        {/* ══ TEMAS / FAQs ════════════════════════════════════ */}
        <section id="temas" className="bg-white px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-5xl">

            {/* Filtros de categoría */}
            <div className="mb-8 flex flex-wrap gap-2">
              <button
                onClick={() => setTemaActivo(null)}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  !temaActivo ? "bg-[#1648D8] text-white shadow-md" : "border border-gray-200 bg-white text-gray-500 hover:border-[#1648D8]/30"
                }`}
                style={{ fontWeight: !temaActivo ? 700 : 500 }}>
                Todos los temas
              </button>
              {TEMAS.map(t => (
                <button key={t.id}
                  onClick={() => setTemaActivo(t.id === temaActivo ? null : t.id)}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-all ${
                    temaActivo === t.id ? "text-white shadow-md" : "border border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                  }`}
                  style={{
                    fontWeight: temaActivo === t.id ? 700 : 500,
                    backgroundColor: temaActivo === t.id ? t.color : undefined,
                  }}>
                  {t.emoji} {t.titulo}
                </button>
              ))}
            </div>

            {/* Temas filtrados */}
            {(temaSeleccionado ? [temaSeleccionado] : TEMAS).map(tema => (
              <div key={tema.id} id={tema.id} className="mb-10 last:mb-0">
                {/* Cabecera del tema */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl text-xl"
                    style={{ backgroundColor: tema.bg }}>
                    {tema.emoji}
                  </div>
                  <div>
                    <h2 className="text-base text-[#1A1A1A]" style={{ fontWeight: 800 }}>{tema.titulo}</h2>
                    <p className="text-xs text-gray-400">{tema.faqs.length} preguntas</p>
                  </div>
                </div>

                {/* FAQs del tema */}
                <div className="flex flex-col gap-2">
                  {tema.faqs.map(faq => (
                    <FaqItem key={faq.q} q={faq.q} a={faq.a} color={tema.color} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ ¿NO ENCONTRASTE RESPUESTA? ══════════════════════ */}
        <section className="bg-[#F5F6F8] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-3">

              {[
                {
                  emoji: "💬",
                  titulo: "WhatsApp",
                  desc: "Respuesta en menos de 2 horas, 7 días a la semana",
                  cta: "Escribir ahora",
                  color: "#25D366",
                  href: `https://wa.me/${WA}?text=${encodeURIComponent("Hola, tengo una duda que no encuentro en la ayuda.")}`,
                  externo: true,
                },
                {
                  emoji: "📞",
                  titulo: "Teléfono",
                  desc: `Llama al ${PHONE} · Lunes a Viernes 9h–18h`,
                  cta: "Llamar ahora",
                  color: "#1648D8",
                  href: `tel:${PHONE}`,
                  externo: false,
                },
                {
                  emoji: "📋",
                  titulo: "Atención al cliente",
                  desc: "Horarios, datos de empresa, más preguntas frecuentes",
                  cta: "Ver más",
                  color: "#7C3AED",
                  href: "/atencion-al-cliente",
                  externo: false,
                },
              ].map(c => (
                <div key={c.titulo} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="mb-3 text-3xl">{c.emoji}</span>
                  <p className="text-sm text-[#1A1A1A] mb-1" style={{ fontWeight: 700 }}>{c.titulo}</p>
                  <p className="text-xs text-gray-400 mb-4 flex-1">{c.desc}</p>
                  {c.externo ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-xl py-2.5 text-sm text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: c.color, fontWeight: 700 }}>
                      {c.cta} →
                    </a>
                  ) : (
                    <Link href={c.href}
                      className="flex items-center justify-center rounded-xl py-2.5 text-sm text-white transition-all hover:opacity-90"
                      style={{ backgroundColor: c.color, fontWeight: 700 }}>
                      {c.cta} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
