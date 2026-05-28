import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fibra para Empresas Barata Alicante | Arista Group",
  description:
    "Fibra para empresas barata en Alicante desde 24,90€/mes. Conectividad, telecomunicaciones y energía para pymes, autónomos y corporaciones. Sin permanencia. Alta en 24h.",
  alternates: { canonical: "https://aristagroup.es/fibraempresabarata" },
  openGraph: {
    title: "Fibra para Empresas Barata Alicante | Arista Group",
    description: "Fibra empresarial barata, móvil y energía. Casos de éxito reales. Asesor dedicado. Sin permanencia.",
    url: "https://aristagroup.es/fibraempresabarata",
  },
};

const WA  = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const MSG = encodeURIComponent("Hola, quiero hablar con un asesor de Arista para empresas.");

// ── Datos ──────────────────────────────────────────────────────────────────
const STATS = [
  { num: "+200",  label: "Empresas atendidas",       sub: "en Alicante y provincia" },
  { num: "8",     label: "Sectores especializados",   sub: "con soluciones a medida" },
  { num: "24h",   label: "Alta media",                sub: "desde firma del contrato" },
  { num: "4.7★",  label: "Valoración empresas",       sub: "en Google Reviews" },
];

const COMO_AYUDAMOS = [
  {
    emoji: "🔍",
    titulo: "Diagnóstico gratuito",
    desc: "Analizamos la situación tecnológica y energética de tu empresa sin compromiso. Te decimos dónde estás gastando de más y cómo optimizarlo.",
  },
  {
    emoji: "🛠️",
    titulo: "Solución a medida",
    desc: "No existe un plan único. Diseñamos la conectividad, las líneas móviles y la energía específicamente para el funcionamiento real de tu negocio.",
  },
  {
    emoji: "👤",
    titulo: "Asesor dedicado",
    desc: "Un responsable de cuenta que conoce tu empresa. Siempre disponible en WhatsApp, sin call centers ni tickets. Responde en minutos.",
  },
  {
    emoji: "📈",
    titulo: "Seguimiento continuo",
    desc: "No desaparecemos al firmar el contrato. Revisamos tu factura, actualizamos tus servicios y resolvemos cualquier incidencia de forma proactiva.",
  },
];

const SECTORES = [
  { href: "/empresas/administradores-de-fincas", emoji: "🏢", titulo: "Administradores de fincas",  desc: "Gestión centralizada de conectividad y energía para múltiples comunidades con una sola factura." },
  { href: "/empresas/constructoras",             emoji: "🏗️", titulo: "Constructoras",              desc: "Conexión en obra desde el día 1, SIMs para equipos y sin permanencias que te aten." },
  { href: "/empresas/hoteles",                   emoji: "🏨", titulo: "Hoteles y alojamientos",     desc: "WiFi 5 estrellas para huéspedes, gestión energética y soporte 24/7." },
  { href: "/empresas/fabricas",                  emoji: "🏭", titulo: "Fábricas e industria",       desc: "Fibra industrial, SIMs IoT para maquinaria y optimización de factura eléctrica." },
  { href: "/empresas/hospitales",                emoji: "🏥", titulo: "Hospitales y clínicas",      desc: "Conectividad crítica redundante con SLA garantizado y redes segmentadas RGPD." },
];

const CASOS = [
  {
    sector: "Hostelería",
    empresa: "Hotel 4★ · Costa Blanca",
    reto: "Los huéspedes se quejaban del WiFi lento en temporada alta, con 120 dispositivos conectados a la vez. Estaban perdiendo reseñas de 5 estrellas por culpa de la conectividad.",
    solucion: "Instalamos fibra 1Gb con redundancia y WiFi 6 gestionado por zonas. Red de huéspedes completamente separada de la red interna del hotel.",
    resultado: "Las quejas sobre WiFi desaparecieron en 2 semanas. La puntuación en Booking subió de 7.8 a 8.6 en su primer trimestre completo.",
    ahorro: "−38% en factura eléctrica",
    color: "#7c3aed",
    bg: "#F3E8FF",
  },
  {
    sector: "Administración de fincas",
    empresa: "Administración de fincas · Alicante",
    reto: "Gestionaban 18 comunidades de propietarios con 18 contratos distintos de diferentes operadores. La burocracia y las incidencias consumían horas cada semana.",
    solucion: "Unificamos todos los servicios bajo un único contrato multi-finca. Panel de gestión centralizado, asesor único y factura consolidada cada mes.",
    resultado: "De 18 facturas y 18 contratos a 1 de cada. 6 horas semanales liberadas. Todas las comunidades con WiFi en zonas comunes.",
    ahorro: "−41% en costes de telecomunicaciones",
    color: "#1648D8",
    bg: "#EEF2FF",
  },
  {
    sector: "Construcción",
    empresa: "Constructora mediana · Alicante",
    reto: "Tres obras activas simultáneamente en distintas ubicaciones. Los jefes de obra no podían compartir planos ni hacer videollamadas con arquitectos. Se perdían horas esperando conexión.",
    solucion: "Router 4G/5G industrial en cada obra, 8 SIMs ilimitadas para el equipo y fibra en la oficina central. Sin permanencias, alta en 24 horas.",
    resultado: "Coordinación en tiempo real entre las tres obras. La empresa estima un ahorro de 3 horas diarias en tiempo de coordinación por obra.",
    ahorro: "0 interrupciones en 8 meses",
    color: "#0f3460",
    bg: "#E8EDF5",
  },
  {
    sector: "Industria",
    empresa: "Empresa industrial · Elche",
    reto: "Fábrica con 40 trabajadores y maquinaria CNC que requería conexión constante para telemetría. La factura eléctrica superaba los 4.200€/mes con picos innecesarios.",
    solucion: "Fibra 1Gb con redundancia, 15 SIMs M2M para las máquinas y optimización de la potencia contratada con análisis de curva de carga.",
    resultado: "Conectividad industrial sin cortes. La factura eléctrica bajó a 2.900€/mes en el primer trimestre.",
    ahorro: "−31% en consumo eléctrico",
    color: "#166534",
    bg: "#DCFCE7",
  },
];

const RESENAS = [
  {
    nombre: "J. N.", avatar: "JN", color: "#1648D8", estrellas: 5, sector: "Pyme · 3 locales",
    texto: "Tengo 3 locales y Arista me gestiona fibra, móviles y energía en todos. Un contrato, una factura, un asesor. Me han ahorrado tiempo y dinero desde el primer día.",
  },
  {
    nombre: "C. A.", avatar: "CA", color: "#00B96B", estrellas: 5, sector: "Autónoma · Consultoría",
    texto: "Contraté la línea empresa y la factura llega perfecta para deducir. El asesor me resuelve cualquier duda en minutos. No he necesitado llamar a ningún call center en 2 años.",
  },
  {
    nombre: "M. L.", avatar: "ML", color: "#F59E0B", estrellas: 5, sector: "Empresa familiar · 12 empleados",
    texto: "Veníamos de Orange Business y pagábamos el doble. El cambio tardó 48h sin perder ninguna línea. Llevamos ya un año y no hemos tenido una sola incidencia.",
  },
  {
    nombre: "Dra. M.", avatar: "DM", color: "#7c3aed", estrellas: 5, sector: "Clínica dental · Alicante",
    texto: "En una clínica no puedes permitirte que el internet falle cuando estás viendo un historial digital. Arista nos puso fibra redundante y desde entonces no hemos tenido ni un corte.",
  },
  {
    nombre: "R. P.", avatar: "RP", color: "#166534", estrellas: 5, sector: "Constructora · Benidorm",
    texto: "Necesitaba internet en una obra que empieza el lunes. Llamé el jueves, el viernes ya tenía el router. Eso no lo hace ningún operador grande.",
  },
  {
    nombre: "P. V.", avatar: "PV", color: "#0f3460", estrellas: 4, sector: "Inmobiliaria · 8 oficinas",
    texto: "Gestionan fibra y móviles de nuestras 8 oficinas como si fuéramos su único cliente. Factura única, trato personalizado. Lo recomiendo a cualquier empresa.",
  },
];

const SOLUCIONES_TECH = [
  { titulo: "Conectividad empresarial",  desc: "Fibra simétrica de 600Mb a 10Gb según tus necesidades, con redundancia opcional y SLA garantizado para entornos críticos.", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { titulo: "Telefonía móvil empresa",   desc: "Líneas ilimitadas 5G en red MasOrange para toda la plantilla. SIMs M2M/IoT para maquinaria, vehículos y dispositivos conectados.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
  { titulo: "Gestión energética",        desc: "Optimización de potencia contratada, análisis de curva de carga y tarifa eléctrica adaptada a tu perfil de consumo empresarial.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { titulo: "WiFi gestionado",           desc: "Diseño e instalación de redes WiFi para oficinas, naves, hoteles y espacios complejos. Gestión remota y monitorización continua.", icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" },
  { titulo: "Multi-sede y VPN",          desc: "Interconexión segura entre sedes, delegaciones o almacenes. Red privada con cifrado, gestión centralizada y un solo punto de contacto.", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" },
  { titulo: "Factura empresa deducible", desc: "Toda la facturación correctamente emitida a nombre de tu empresa o autónomo, deducible en IRPF e IVA desde el primer mes.", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill={i < n ? "#FFB800" : "#E5E7EB"}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function EmpresasPage() {
  return (
    <>
      <Header />
      <main className="font-sans">

        {/* ══ HERO ══════════════════════════════════════════════════════ */}
        <section className="mt-[108px] px-6 py-20 lg:px-8 lg:py-28"
          style={{ background: "linear-gradient(135deg, #0a1228 0%, #0f2057 40%, #1648D8 100%)" }}>
          <div className="mx-auto max-w-5xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white/80 mb-6" style={{ fontWeight: 700 }}>
                  🏆 +200 empresas en Alicante confían en Arista
                </span>
                <h1 className="text-[clamp(28px,4vw,52px)] text-white leading-tight mb-5" style={{ fontWeight: 900 }}>
                  Tecnología y conectividad que hace crecer tu empresa
                </h1>
                <p className="text-lg text-white/70 leading-relaxed mb-8">
                  No somos un operador más. Somos el socio tecnológico de empresas alicantinas que necesitan conectividad fiable, energía optimizada y alguien de confianza al teléfono cuando algo falla.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`https://wa.me/${WA}?text=${MSG}`} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-7 py-4 text-white text-base shadow-lg hover:bg-[#1da852] transition-all hover:scale-105"
                    style={{ fontWeight: 700 }}>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    Hablar con un asesor
                  </a>
                  <a href="#casos"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-white text-base hover:bg-white/20 transition-all"
                    style={{ fontWeight: 600 }}>
                    Ver casos de éxito →
                  </a>
                </div>
              </div>
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {STATS.map((s) => (
                  <div key={s.num} className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center">
                    <p className="text-4xl text-white mb-1" style={{ fontWeight: 900 }}>{s.num}</p>
                    <p className="text-sm text-white mb-0.5" style={{ fontWeight: 700 }}>{s.label}</p>
                    <p className="text-xs text-white/50">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CÓMO AYUDAMOS ══════════════════════════════════════════════ */}
        <section className="bg-white px-6 py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Nuestro método</span>
            </div>
            <h2 className="mb-3 text-3xl text-[#1A1A1A]" style={{ fontWeight: 800 }}>
              Así trabajamos con las empresas
            </h2>
            <p className="mb-12 text-gray-500 max-w-2xl">No vendemos tarifas. Resolvemos problemas tecnológicos reales de empresas reales.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMO_AYUDAMOS.map((c, i) => (
                <div key={c.titulo} className="relative rounded-2xl border border-gray-100 bg-[#F7F9FF] p-6 hover:border-[#1648D8]/20 hover:shadow-md transition-all">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-2xl">{c.emoji}</span>
                    <span className="text-[11px] text-[#1648D8] bg-[#EEF2FF] rounded-full px-2 py-0.5" style={{ fontWeight: 700 }}>Paso {i + 1}</span>
                  </div>
                  <h3 className="text-sm text-[#1A1A1A] mb-2" style={{ fontWeight: 800 }}>{c.titulo}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SOLUCIONES TECNOLÓGICAS ════════════════════════════════════ */}
        <section id="soluciones" className="bg-[#F7F9FF] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Soluciones tecnología y empresas</span>
            </div>
            <h2 className="mb-3 text-3xl text-[#1A1A1A]" style={{ fontWeight: 800 }}>Todo lo que necesita tu empresa</h2>
            <p className="mb-12 text-gray-500 max-w-2xl">Desde una sola línea para un autónomo hasta la infraestructura completa de una corporación multi-sede.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SOLUCIONES_TECH.map((s) => (
                <div key={s.titulo} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#1648D8]/20 transition-all">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2FF]">
                    <svg className="h-5 w-5 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                    </svg>
                  </div>
                  <h3 className="text-sm text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{s.titulo}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SECTORES ══════════════════════════════════════════════════ */}
        <section id="sectores" className="bg-white px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Por sector</span>
            </div>
            <h2 className="mb-3 text-3xl text-[#1A1A1A]" style={{ fontWeight: 800 }}>Soluciones para tu sector</h2>
            <p className="mb-10 text-gray-500 max-w-2xl">Cada sector tiene retos únicos. Hemos desarrollado soluciones específicas para cada uno.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {SECTORES.map((s) => (
                <Link key={s.href} href={s.href}
                  className="group rounded-2xl border border-gray-100 bg-[#F7F9FF] p-5 hover:border-[#1648D8]/30 hover:bg-[#EEF2FF] hover:shadow-md transition-all">
                  <span className="text-3xl mb-3 block">{s.emoji}</span>
                  <p className="text-sm text-[#1A1A1A] mb-2 group-hover:text-[#1648D8] transition-colors leading-tight" style={{ fontWeight: 800 }}>{s.titulo}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{s.desc}</p>
                  <p className="text-xs text-[#1648D8]" style={{ fontWeight: 700 }}>Ver solución →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CASOS DE ÉXITO ════════════════════════════════════════════ */}
        <section id="casos" className="bg-[#F7F9FF] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Casos ganadores</span>
            </div>
            <h2 className="mb-3 text-3xl text-[#1A1A1A]" style={{ fontWeight: 800 }}>Cómo hemos ayudado a empresas reales</h2>
            <p className="mb-12 text-gray-500 max-w-2xl">Resultados concretos de empresas alicantinas que confiaron en Arista para transformar su tecnología.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {CASOS.map((c) => (
                <div key={c.empresa} className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all">
                  {/* Header del caso */}
                  <div className="px-6 py-4 flex items-center justify-between" style={{ backgroundColor: c.bg }}>
                    <div>
                      <span className="text-xs rounded-full px-2.5 py-0.5 text-white" style={{ backgroundColor: c.color, fontWeight: 700 }}>{c.sector}</span>
                      <p className="mt-1.5 text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{c.empresa}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-0.5">Resultado</p>
                      <p className="text-sm" style={{ fontWeight: 800, color: c.color }}>{c.ahorro}</p>
                    </div>
                  </div>
                  {/* Contenido */}
                  <div className="px-6 py-5 flex flex-col gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1" style={{ fontWeight: 700 }}>El reto</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{c.reto}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1" style={{ fontWeight: 700 }}>La solución Arista</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{c.solucion}</p>
                    </div>
                    <div className="rounded-xl p-3" style={{ backgroundColor: c.bg }}>
                      <p className="text-[10px] uppercase tracking-wider mb-1" style={{ fontWeight: 700, color: c.color }}>Resultado</p>
                      <p className="text-sm leading-relaxed" style={{ color: c.color, fontWeight: 500 }}>{c.resultado}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero saber cómo Arista puede ayudar a mi empresa. ¿Podemos hablar?")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#1648D8] px-8 py-4 text-white text-base hover:bg-[#0f3ab0] transition-all hover:scale-105"
                style={{ fontWeight: 700 }}>
                Quiero un caso de éxito para mi empresa →
              </a>
            </div>
          </div>
        </section>

        {/* ══ EXPERIENCIA DE CLIENTES ════════════════════════════════════ */}
        <section className="bg-white px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-px w-6 bg-[#1648D8]" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Experiencia de nuestros clientes</span>
                </div>
                <h2 className="text-3xl text-[#1A1A1A]" style={{ fontWeight: 800 }}>Lo que dicen las empresas</h2>
              </div>
              <div className="flex items-center gap-3 bg-[#F7F9FF] rounded-2xl border border-gray-100 px-5 py-3 flex-shrink-0">
                <div className="text-center">
                  <p className="text-3xl text-[#1A1A1A] leading-none" style={{ fontWeight: 900 }}>4.7</p>
                  <Stars n={5} />
                  <p className="text-[10px] text-gray-400 mt-0.5">+200 empresas</p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {RESENAS.map((r) => (
                <div key={r.nombre} className="rounded-2xl bg-[#F7F9FF] border border-gray-100 p-5 flex flex-col gap-3 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white text-xs"
                      style={{ backgroundColor: r.color, fontWeight: 700 }}>{r.avatar}</div>
                    <div>
                      <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{r.nombre}</p>
                      <p className="text-[10px] text-gray-400">{r.sector}</p>
                    </div>
                  </div>
                  <Stars n={r.estrellas} />
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">&ldquo;{r.texto}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA FINAL ══════════════════════════════════════════════════ */}
        <section className="px-6 py-20 lg:px-8"
          style={{ background: "linear-gradient(135deg, #0a1228 0%, #1648D8 60%, #0D47A1 100%)" }}>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 mb-3" style={{ fontWeight: 700 }}>Empresa alicantina</p>
            <h2 className="text-[clamp(24px,4vw,44px)] text-white mb-4" style={{ fontWeight: 900 }}>
              ¿Cómo podemos ayudar a tu empresa?
            </h2>
            <p className="text-base text-white/60 mb-8 max-w-xl mx-auto">
              Cuéntanos el reto tecnológico o energético de tu empresa. Te respondemos en menos de 2 horas con una propuesta sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${WA}?text=${MSG}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-8 py-4 text-white text-base shadow-lg hover:bg-[#1da852] transition-all hover:scale-105"
                style={{ fontWeight: 700 }}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Hablar ahora por WhatsApp
              </a>
              <Link href="/cobertura"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-white text-base hover:bg-white/20 transition-all"
                style={{ fontWeight: 600 }}>
                Comprobar cobertura →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
