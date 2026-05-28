import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Telecomunicaciones para Hospitales y Clínicas | Arista Group",
  description:
    "Fibra redundante, redes seguras y gestión energética para hospitales, clínicas, centros de salud y residencias en Alicante. Conectividad crítica con SLA garantizado.",
  alternates: { canonical: "https://aristagroup.es/empresas/hospitales" },
  openGraph: {
    title: "Arista para Hospitales | Conectividad crítica y energía sanitaria",
    description: "Conectividad de misión crítica para centros sanitarios. Fibra redundante, SLA garantizado y energía optimizada.",
    url: "https://aristagroup.es/empresas/hospitales",
  },
};

const WA  = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const MSG = encodeURIComponent("Hola, represento a un hospital o clínica y quiero información sobre las soluciones de Arista para el sector sanitario.");

const DOLOR = [
  { emoji: "🏥", titulo: "Conectividad crítica que no puede fallar", desc: "Los sistemas de HIS, PACS, telemedicina y monitorización de pacientes requieren conectividad 24/7 sin interrupciones." },
  { emoji: "🔐", titulo: "Datos sensibles y cumplimiento RGPD", desc: "Los datos clínicos son los más sensibles. La red debe estar segmentada y cumplir con RGPD y los estándares sanitarios." },
  { emoji: "⚡", titulo: "Consumo energético muy elevado", desc: "Quirófanos, UCI, radiología y sistemas de climatización hacen del hospital uno de los mayores consumidores de energía." },
  { emoji: "📡", titulo: "WiFi para pacientes, visitas y personal", desc: "Redes diferenciadas para pacientes, staff clínico y sistemas médicos. Sin interferencias entre ellas." },
];

const SOLUCIONES = [
  { titulo: "Fibra redundante de misión crítica", desc: "Dos líneas independientes con failover automático. Si una cae, la otra activa en milisegundos. Uptime del 99,9% garantizado por SLA." },
  { titulo: "Redes segmentadas para entornos sanitarios", desc: "Red clínica separada de la red de pacientes y visitas. Aislamiento de sistemas médicos para cumplir con normativas sanitarias y RGPD." },
  { titulo: "Gestión energética hospitalaria", desc: "Optimización de la potencia contratada, análisis de curva de carga y tarifa eléctrica adaptada al consumo 24/7 de un centro sanitario." },
  { titulo: "WiFi para todas las áreas del centro", desc: "Cobertura en habitaciones, urgencias, pasillos, laboratorios y quirófanos. Señal estable sin interferencias con equipos médicos." },
];

const TARIFAS = [
  {
    nombre: "Clínica & Consulta",
    precio: "49,90",
    badge: null,
    destacada: false,
    desc: "Para clínicas privadas y centros de salud",
    features: ["Fibra 600Mb simétrica", "WiFi pacientes y personal", "Red clínica segura", "Sin permanencia"],
    wa: "Quiero el plan Clínica de Arista para mi centro sanitario.",
  },
  {
    nombre: "Hospital Pro",
    precio: "99,90",
    badge: "Sector sanitario",
    destacada: true,
    desc: "Para hospitales y grandes centros médicos",
    features: ["Fibra 1Gb con redundancia", "Failover automático", "Redes segmentadas RGPD", "WiFi 6 todo el centro", "Energía hospitalaria incluida", "SLA 99,9% garantizado"],
    wa: "Quiero el plan Hospital Pro de Arista — Fibra redundante + WiFi + Energía para mi centro.",
  },
  {
    nombre: "Red Sanitaria",
    precio: "A medida",
    badge: null,
    destacada: false,
    desc: "Para redes de centros y hospitales públicos",
    features: ["Multi-sede con MPLS privado", "Fibra redundante en cada sede", "Gestión energética centralizada", "Cumplimiento ENS y RGPD", "Soporte técnico especializado 24/7"],
    wa: "Represento una red de centros sanitarios y quiero hablar con Arista sobre conectividad multi-sede.",
  },
];

const CERTIF = [
  { label: "RGPD", desc: "Cumplimiento total de datos de salud" },
  { label: "ENS", desc: "Esquema Nacional de Seguridad" },
  { label: "SLA 99,9%", desc: "Uptime garantizado por contrato" },
  { label: "ISO 27001", desc: "Estándares de seguridad de la información" },
];

export default function HospitalesPage() {
  return (
    <>
      <Header />
      <main className="mt-[72px] font-sans">

        <section style={{ background: "linear-gradient(135deg, #0c2340 0%, #1e3a5f 50%, #1648D8 100%)" }}
          className="px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white/80 mb-6" style={{ fontWeight: 700 }}>
              🏥 Soluciones para Hospitales y Clínicas
            </span>
            <h1 className="text-3xl lg:text-5xl text-white mb-6 leading-tight" style={{ fontWeight: 900 }}>
              Conectividad crítica y energía para el sector sanitario
            </h1>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              En un hospital, la conectividad no puede fallar. Arista ofrece fibra redundante con SLA garantizado, redes segmentadas y gestión energética especializada para centros sanitarios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`https://wa.me/${WA}?text=${MSG}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-8 py-4 text-white text-base shadow-lg hover:bg-[#1da852] transition-all hover:scale-105"
                style={{ fontWeight: 700 }}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Hablar con un especialista
              </a>
              <Link href="/empresas"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-white text-base hover:bg-white/20 transition-all"
                style={{ fontWeight: 600 }}>
                Ver todas las soluciones empresa →
              </Link>
            </div>
          </div>
        </section>

        {/* Certificaciones */}
        <section className="bg-white border-b border-gray-100 px-6 py-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {CERTIF.map((c) => (
                <div key={c.label} className="text-center">
                  <div className="inline-flex items-center justify-center rounded-xl bg-[#EEF2FF] px-4 py-2 mb-2">
                    <span className="text-sm text-[#1648D8]" style={{ fontWeight: 800 }}>{c.label}</span>
                  </div>
                  <p className="text-xs text-gray-500">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FF] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl lg:text-3xl text-[#1A1A1A] mb-3" style={{ fontWeight: 800 }}>Los retos de conectividad en sanidad</h2>
            <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">Donde la conectividad es una cuestión crítica, no solo operativa.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DOLOR.map((d) => (
                <div key={d.titulo} className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm">
                  <span className="text-3xl mb-3 block">{d.emoji}</span>
                  <h3 className="text-sm text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{d.titulo}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl lg:text-3xl text-[#1A1A1A] mb-12" style={{ fontWeight: 800 }}>Infraestructura Arista para el sector sanitario</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {SOLUCIONES.map((s) => (
                <div key={s.titulo} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF]">
                    <svg className="h-5 w-5 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base text-[#1A1A1A] mb-1" style={{ fontWeight: 700 }}>{s.titulo}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7F9FF] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl lg:text-3xl text-[#1A1A1A] mb-3" style={{ fontWeight: 800 }}>Planes para el sector sanitario</h2>
            <p className="text-center text-gray-500 mb-12">SLA garantizado · Cumplimiento RGPD · IVA incluido</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {TARIFAS.map((t) => (
                <div key={t.nombre} className={`relative rounded-2xl p-6 flex flex-col ${t.destacada ? "bg-[#1648D8] text-white shadow-xl scale-105" : "bg-white border border-gray-100 shadow-sm text-[#1A1A1A]"}`}>
                  {t.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#00B96B] px-4 py-1 text-xs text-white" style={{ fontWeight: 700 }}>{t.badge}</span>
                  )}
                  <h3 className="text-lg mb-1" style={{ fontWeight: 800 }}>{t.nombre}</h3>
                  <p className={`text-xs mb-4 ${t.destacada ? "text-white/60" : "text-gray-400"}`}>{t.desc}</p>
                  <div className="mb-4">
                    <span className="text-3xl" style={{ fontWeight: 900 }}>{t.precio}</span>
                    {t.precio !== "A medida" && <span className={`text-sm ml-1 ${t.destacada ? "text-white/70" : "text-gray-400"}`}>/mes</span>}
                  </div>
                  <ul className="flex-1 space-y-2 mb-6">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs">
                        <svg className={`h-4 w-4 flex-shrink-0 ${t.destacada ? "text-white/80" : "text-[#00B96B]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={`https://wa.me/${WA}?text=${encodeURIComponent(t.wa)}`} target="_blank" rel="noopener noreferrer"
                    className={`block w-full rounded-xl py-3 text-center text-sm transition-all hover:scale-105 ${t.destacada ? "bg-white text-[#1648D8]" : "bg-[#1648D8] text-white"}`}
                    style={{ fontWeight: 700 }}>
                    Solicitar información
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1648D8] px-6 py-16 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl text-white mb-4" style={{ fontWeight: 800 }}>¿Tu centro sanitario no puede permitirse una caída?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Hablemos con tu responsable de IT y diseñamos una infraestructura a medida con SLA garantizado.</p>
          <a href={`https://wa.me/${WA}?text=${MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-[#1648D8] text-base shadow-lg hover:bg-gray-50 transition-all hover:scale-105"
            style={{ fontWeight: 700 }}>
            Diseñar solución a medida →
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
