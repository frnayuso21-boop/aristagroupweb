import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Telecomunicaciones para Pymes Alicante | Arista Group",
  description:
    "Fibra, móvil y energía para pymes en Alicante. Gestión centralizada, asesor dedicado, hasta 20 líneas, sin permanencia. Alta en 24h.",
  alternates: { canonical: "https://aristagroup.es/empresas/pymes" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

const paquetes = [
  {
    nombre: "Pyme Básica",
    desc: "Hasta 5 empleados",
    precio: "49,90",
    badge: null,
    incluye: ["Fibra 600Mb empresa", "Hasta 3 líneas móviles 80GB", "5G MasOrange", "Sin permanencia", "Asesor asignado", "Factura unificada"],
    waMsg: "Hola, tengo una pyme de hasta 5 empleados y quiero contratar el paquete Pyme Básica.",
  },
  {
    nombre: "Pyme Pro",
    desc: "Hasta 10 empleados",
    precio: "89,90",
    badge: "Más popular",
    incluye: ["Fibra 1Gb empresa", "Hasta 8 líneas móviles 80GB", "5G MasOrange", "Sin permanencia", "Asesor dedicado", "Energía optimizada", "Factura unificada"],
    waMsg: "Hola, tengo una pyme de hasta 10 empleados y quiero contratar el paquete Pyme Pro.",
  },
  {
    nombre: "Pyme Total",
    desc: "Hasta 20 empleados",
    precio: "149,90",
    badge: null,
    incluye: ["Fibra 1Gb empresa", "Hasta 20 líneas móviles", "5G MasOrange", "Sin permanencia", "Asesor dedicado VIP", "Energía + luz", "Soporte prioritario", "Factura unificada"],
    waMsg: "Hola, tengo una pyme de hasta 20 empleados y quiero contratar el paquete Pyme Total.",
  },
];

const ventajas = [
  { t: "Un solo proveedor", d: "Móvil, fibra y energía en una sola factura mensual. Menos gestión, más tiempo para tu negocio." },
  { t: "Asesor dedicado", d: "Tendrás una persona de contacto directa que conoce tu cuenta. Respuesta en menos de 2 horas." },
  { t: "Sin permanencia", d: "Si tu empresa crece o cambia, puedes modificar o cancelar el servicio sin penalización." },
  { t: "Gestión centralizada", d: "Administra todas las líneas desde un panel. Añade o quita empleados cuando necesites." },
  { t: "Ahorro garantizado", d: "Analizamos tu consumo actual y te garantizamos ahorro respecto a tu proveedor actual." },
  { t: "Empresa local", d: "Somos de Alicante. Entendemos las necesidades reales de los negocios locales." },
];

export default function PymesPage() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="mt-[108px] bg-[#0D47A1] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <nav className="mb-6 flex items-center gap-2 text-xs text-white/40">
              <Link href="/empresas" className="hover:text-white/70 transition-colors">Empresas</Link>
              <span>/</span>
              <span className="text-white/70">Pymes</span>
            </nav>
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/70" style={{ fontWeight: 700 }}>Hasta 20 empleados</span>
              </div>
              <h1 className="text-[clamp(28px,4vw,56px)] text-white leading-tight tracking-tight mb-4" style={{ fontWeight: 900 }}>
                Todo en uno para<br />
                <span style={{ color: "#00B96B" }}>tu pyme</span>
              </h1>
              <p className="text-base text-white/60 leading-relaxed mb-6 max-w-xl">
                Fibra, móvil y energía para toda tu empresa. Una sola factura, un asesor dedicado, sin permanencia. Nos encargamos de todo.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, tengo una pyme y quiero información sobre vuestros servicios.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#00B96B] px-7 py-3.5 text-sm text-black hover:opacity-90 transition-opacity"
                  style={{ fontWeight: 700 }}>
                  Hablar con un asesor →
                </a>
                <a href="#paquetes"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm text-white/80 hover:border-white hover:text-white transition-colors">
                  Ver paquetes ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PAQUETES */}
        <section id="paquetes" className="bg-[#F5F7FF] py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1] mb-2" style={{ fontWeight: 700 }}>Paquetes pyme</p>
              <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>Elige según tu tamaño</h2>
              <p className="mt-2 text-sm text-gray-400">¿Necesitas algo a medida? Hablamos y lo configuramos.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {paquetes.map((p) => {
                const [ent, dec] = p.precio.split(",");
                return (
                  <div key={p.nombre}
                    className={`rounded-2xl bg-white flex flex-col relative ${p.badge ? "border-2 border-[#00B96B] shadow-2xl -mt-3" : "border border-gray-200 shadow-sm"}`}>
                    {p.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex rounded-full bg-[#00B96B] px-4 py-1.5 text-[11px] text-black whitespace-nowrap shadow-sm" style={{ fontWeight: 700 }}>★ {p.badge}</span>
                      </div>
                    )}
                    <div className="h-1 rounded-t-2xl w-full" style={{ backgroundColor: p.badge ? "#00B96B" : "#0D47A1" }} />
                    <div className={`px-6 pb-4 ${p.badge ? "pt-8" : "pt-6"}`}>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-0.5">{p.nombre}</p>
                      <p className="text-xs text-gray-500 mb-3">{p.desc}</p>
                      <div className="flex items-end gap-0.5 leading-none">
                        <span className="text-[50px] leading-none tracking-tighter text-[#1648D8]" style={{ fontWeight: 800 }}>{ent}</span>
                        <div className="mb-1.5">
                          <span className="text-xl text-[#1648D8]" style={{ fontWeight: 700 }}>,{dec}€</span>
                          <p className="text-[11px] text-gray-400 leading-none">/mes</p>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-1">IVA incluido · Precio orientativo</p>
                    </div>
                    <div className="h-px bg-gray-100 mx-6" />
                    <ul className="px-6 py-5 flex flex-col gap-2.5 flex-1">
                      {p.incluye.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                          <svg className="h-4 w-4 flex-shrink-0 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="px-6 pb-6">
                      <a href={`https://wa.me/${WA}?text=${encodeURIComponent(p.waMsg)}`}
                        target="_blank" rel="noopener noreferrer"
                        className="block w-full rounded-xl py-3 text-center text-sm text-black hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: "#00B96B", fontWeight: 600 }}>
                        Solicitar este plan
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* VENTAJAS */}
        <section className="bg-white py-14">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mb-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1] mb-2" style={{ fontWeight: 700 }}>Por qué elegirnos</p>
              <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>La diferencia Arista para pymes</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ventajas.map((v) => (
                <div key={v.t} className="rounded-2xl border border-gray-100 p-6 bg-[#F9FAFB]">
                  <p className="text-sm text-[#1A1A1A] mb-2" style={{ fontWeight: 700 }}>{v.t}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0D47A1] py-14 text-center">
          <div className="mx-auto max-w-xl px-6">
            <h2 className="text-2xl text-white mb-3" style={{ fontWeight: 800 }}>¿Necesitas algo a medida?</h2>
            <p className="text-sm text-white/60 mb-8">Cuéntanos el tamaño de tu equipo y te preparamos una propuesta personalizada.</p>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, tengo una pyme y quiero una propuesta a medida para mi empresa.")}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00B96B] px-8 py-4 text-sm text-black hover:opacity-90"
              style={{ fontWeight: 700 }}>
              Pedir propuesta a medida →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
