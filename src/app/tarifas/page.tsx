import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tarifas Fibra, Móvil y Energía Alicante 2026 | Arista Group",
  description:
    "Todas las tarifas de fibra, móvil y energía en Alicante 2026. Sin permanencia. Red MasOrange. Desde 24,90€/mes. Compara y elige la mejor tarifa.",
  alternates: { canonical: "https://aristagroup.es/tarifas" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

/* ── ICONOS ─────────────────────────────────────────────── */
const IconRouter = () => (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
const IconMobile = () => (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);
const IconTV = () => (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconLock = () => (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
  </svg>
);
const IconBolt = () => (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const IconUser = () => (
  <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);
const IconWifi = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);
const IconStar = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

/* ── DATOS ──────────────────────────────────────────────── */

/* TELEFONÍA */
const telefonia = [
  {
    id: "fibra",
    nombre: "Solo Fibra",
    desc: "Fibra pura sin líneas móviles",
    precioEntero: "24",
    precioDecimal: ",90",
    color: "#1648D8",
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
      { icon: <IconRouter />, texto: "Router WiFi incluido" },
    ],
    waMsg: "Quiero Solo Fibra 600Mb por 24,90€/mes.",
  },
  {
    id: "pareja",
    nombre: "Pack Pareja",
    desc: "Fibra + 2 móviles 30GB 5G",
    precioEntero: "35",
    precioDecimal: ",90",
    color: "#1648D8",
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "2 móviles 30GB 5G" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: "Quiero el Pack Pareja — Fibra 600Mb + 2 móviles 30GB 5G por 35,90€/mes.",
  },
  {
    id: "infinity",
    nombre: "Arista Infinity",
    desc: "Fibra + móvil ilimitado",
    precioEntero: "40",
    precioDecimal: ",90",
    color: "#1648D8",
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "1 móvil ilimitado 5G" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: "Quiero Arista Infinity — Fibra 600Mb + Móvil ilimitado por 40,90€/mes.",
  },
  {
    id: "familiar",
    nombre: "Pack Familiar",
    desc: "Fibra + 3 móviles ilimitados + TV",
    precioEntero: "60",
    precioDecimal: ",00",
    color: "#1648D8",
    badge: "⭐ La más elegida",
    badgeColor: "#FFB800",
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "3 móviles ilimitados 5G" },
      { icon: <IconTV />,     texto: "TV incluida" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: "Quiero el Pack Familiar — Fibra 600Mb + 3 móviles ilimitados + TV por 60€/mes.",
  },
];

/* ENERGÍA */
const energia = [
  {
    id: "base",
    nombre: "ARS Base",
    desc: "Para hogares con bajo consumo",
    precioEntero: "0",
    precioDecimal: ",119",
    unidad: "€/kWh",
    cuota: "Sin cuota mensual",
    color: "#00B96B",
    lineas: [
      { icon: <IconBolt />, texto: "Sin cuota fija" },
      { icon: <IconBolt />, texto: "Precio real por consumo" },
      { icon: <IconLock />, texto: "Sin permanencia" },
    ],
    waMsg: "Quiero información sobre la tarifa ARS Base de Arista Energía.",
  },
  {
    id: "secured",
    nombre: "ARS Secured",
    desc: "Con asesor personal",
    precioEntero: "6",
    precioDecimal: ",90",
    unidad: "€/mes + 0,119€/kWh",
    cuota: "6,90€/mes",
    color: "#00B96B",
    badge: "Más contratada",
    badgeColor: "#00B96B",
    lineas: [
      { icon: <IconBolt />, texto: "0,119€/kWh consumo" },
      { icon: <IconUser />, texto: "Asesor personal incluido" },
      { icon: <IconLock />, texto: "Sin permanencia" },
    ],
    waMsg: "Quiero información sobre la tarifa ARS Secured de Arista Energía.",
  },
  {
    id: "prisma",
    nombre: "ARS Prisma",
    desc: "Mantenimiento premium incluido",
    precioEntero: "9",
    precioDecimal: ",90",
    unidad: "€/mes + 0,119€/kWh",
    cuota: "9,90€/mes",
    color: "#00B96B",
    lineas: [
      { icon: <IconBolt />, texto: "0,119€/kWh consumo" },
      { icon: <IconUser />, texto: "Asesor personal" },
      { icon: <IconStar />, texto: "Mantenimiento premium" },
      { icon: <IconLock />, texto: "Sin permanencia" },
    ],
    waMsg: "Quiero información sobre la tarifa ARS Prisma de Arista Energía.",
  },
];

/* BUNDLE = Telefonía + Energía */
const bundles = [
  {
    id: "bundle-starter",
    nombre: "Arista Starter Total",
    desc: "Fibra + 1 móvil + Luz",
    precioEntero: "47",
    precioDecimal: ",80",
    ahorro: "Ahorras ~15€/mes vs contratos separados",
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "1 móvil ilimitado 5G" },
      { icon: <IconBolt />,   texto: "Luz — ARS Base" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: "Quiero el bundle Arista Starter Total — Fibra + Móvil + Luz por 47,80€/mes.",
  },
  {
    id: "bundle-family",
    nombre: "Arista Family Total",
    desc: "Pack Familiar + Luz + Gas",
    precioEntero: "66",
    precioDecimal: ",90",
    badge: "Bundle recomendado",
    badgeColor: "#FFB800",
    ahorro: "Ahorras ~20€/mes vs contratos separados",
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb simétrica" },
      { icon: <IconMobile />, texto: "3 móviles ilimitados 5G" },
      { icon: <IconTV />,     texto: "TV incluida" },
      { icon: <IconBolt />,   texto: "Luz y Gas — ARS Secured" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: "Quiero el bundle Arista Family Total — Pack Familiar + Luz y Gas por 66,90€/mes.",
  },
  {
    id: "bundle-empresa",
    nombre: "Arista Empresa Total",
    desc: "Fibra empresa + móviles + energía",
    precioEntero: "89",
    precioDecimal: ",90",
    ahorro: "Gestión centralizada — una sola factura",
    lineas: [
      { icon: <IconRouter />, texto: "Fibra 600Mb empresa" },
      { icon: <IconMobile />, texto: "Hasta 5 móviles empresa" },
      { icon: <IconBolt />,   texto: "Energía — ARS Prisma" },
      { icon: <IconUser />,   texto: "Asesor dedicado" },
      { icon: <IconLock />,   texto: "Sin permanencia" },
    ],
    waMsg: "Quiero información sobre el bundle Arista Empresa Total.",
  },
];

/* ── COMPONENTE CARD ────────────────────────────────────── */
function TarifaCard({
  nombre, desc, precioEntero, precioDecimal, unidad, cuota, badge, badgeColor,
  lineas, waMsg, color, ahorro, destacada,
}: {
  nombre: string; desc: string; precioEntero: string; precioDecimal: string;
  unidad?: string; cuota?: string; badge?: string; badgeColor?: string;
  lineas: { icon: React.ReactNode; texto: string }[]; waMsg: string;
  color: string; ahorro?: string; destacada?: boolean;
}) {
  return (
    <div className={`relative flex flex-col rounded-2xl bg-white overflow-visible ${destacada ? "border-2 shadow-xl -mt-3" : "border border-gray-200"}`}
      style={{ borderColor: destacada ? color : undefined }}>

      {/* Badge */}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-[11px] text-black whitespace-nowrap shadow"
            style={{ backgroundColor: badgeColor, fontWeight: 700 }}>
            {badge}
          </span>
        </div>
      )}

      {/* Cabecera precio + red */}
      <div className="flex items-start justify-between px-6 pt-7 pb-4">
        <div>
          <div className="flex items-end gap-0.5 leading-none">
            <span className="text-[52px] leading-none tracking-tighter text-[#1A1A1A]" style={{ fontWeight: 800 }}>
              {precioEntero}
            </span>
            <div className="mb-1.5">
              <span className="text-xl text-[#1A1A1A]" style={{ fontWeight: 700 }}>{precioDecimal}€</span>
              <p className="text-[11px] text-gray-400 leading-none">{unidad ? unidad.split("+")[0].trim() : "/mes"}</p>
            </div>
          </div>
          {cuota && <p className="text-[11px] text-gray-400 mt-0.5">{cuota}</p>}
          {!cuota && <p className="text-[11px] text-gray-400 mt-0.5">Precio final</p>}
        </div>
        <div className="flex items-center gap-1.5 mt-1">
          <span style={{ color }}>
            {color === "#00B96B" ? <IconBolt /> : <IconWifi />}
          </span>
          <span className="text-xs" style={{ color, fontWeight: 600 }}>
            {color === "#00B96B" ? "Arista Energía" : "Red MasOrange"}
          </span>
        </div>
      </div>

      {/* Nombre y desc */}
      <div className="px-6 pb-3">
        <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{nombre}</p>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>

      {/* Separador */}
      <div className="h-px bg-gray-100 mx-6" />

      {/* Líneas */}
      <div className="flex-1 px-6 py-4 space-y-2.5">
        {lineas.map((l, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
            <span className="text-gray-400">{l.icon}</span>
            {l.texto}
          </div>
        ))}
        {ahorro && (
          <p className="mt-2 text-xs text-[#00B96B]" style={{ fontWeight: 600 }}>💰 {ahorro}</p>
        )}
      </div>

      {/* CTA */}
      <div className="px-6 pb-6 flex flex-col gap-2">
        <a href={`https://wa.me/${WA}?text=${encodeURIComponent(waMsg)}`}
          target="_blank" rel="noopener noreferrer"
          className="block w-full rounded-xl py-3 text-center text-sm text-black transition-colors"
          style={{ backgroundColor: "#00B96B", fontWeight: 600 }}>
          Lo quiero
        </a>
        <button className="block w-full text-center text-xs text-gray-400 hover:text-gray-600 py-1 transition-colors">
          Más información
        </button>
      </div>
    </div>
  );
}

/* ── SECCIÓN HEADER ─────────────────────────────────────── */
function SeccionHeader({ titulo, sub, color }: { titulo: string; sub: string; color: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-px w-8 rounded" style={{ backgroundColor: color }} />
        <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color }}>{sub}</span>
      </div>
      <h2 className="text-2xl text-[#1A1A1A] tracking-tight lg:text-3xl" style={{ fontWeight: 700 }}>{titulo}</h2>
    </div>
  );
}

/* ── PAGE ───────────────────────────────────────────────── */
export default function TarifasPage() {
  return (
    <>
      <Header />
      <main className="mt-[108px]">

        {/* HERO */}
        <section className="bg-[#1648D8] px-6 py-14 lg:px-8 text-center">
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/50 mb-2">Tarifas 2026</p>
            <h1 className="text-[clamp(24px,4vw,44px)] text-white leading-tight tracking-tight" style={{ fontWeight: 800 }}>
              Todas las tarifas de Arista
            </h1>
            <p className="mt-3 text-sm text-white/60">Telefonía · Energía · Bundles · Sin permanencia · Alta en 24h</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#telefonia" className="rounded-xl bg-white px-5 py-2.5 text-sm text-[#1648D8] hover:bg-blue-50 transition-colors" style={{ fontWeight: 600 }}>
                Telefonía ↓
              </a>
              <a href="#energia" className="rounded-xl bg-white px-5 py-2.5 text-sm text-[#00B96B] hover:bg-green-50 transition-colors" style={{ fontWeight: 600 }}>
                Energía ↓
              </a>
              <a href="#bundles" className="rounded-xl border border-white/30 px-5 py-2.5 text-sm text-white/70 hover:border-white hover:text-white transition-colors">
                Bundles ↓
              </a>
            </div>
          </div>
        </section>

        {/* ── TELEFONÍA ───────────────────────────────────── */}
        <section id="telefonia" className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SeccionHeader titulo="Fibra y Móvil" sub="Telefonía · Red MasOrange" color="#1648D8" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-start">
              {telefonia.map((t) => (
                <TarifaCard key={t.id} {...t} color={t.color}
                  destacada={t.id === "familiar"} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/tarifas/movil" className="rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-500 hover:border-[#1648D8] hover:text-[#1648D8] transition-colors">
                Ver detalle tarifas móvil →
              </Link>
              <Link href="/tarifas/fibra" className="rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-500 hover:border-[#1648D8] hover:text-[#1648D8] transition-colors">
                Solo Fibra 600Mb →
              </Link>
              <Link href="/cobertura" className="rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-500 hover:border-[#1648D8] hover:text-[#1648D8] transition-colors">
                Comprobar cobertura →
              </Link>
            </div>
          </div>
        </section>

        {/* ── ENERGÍA ─────────────────────────────────────── */}
        <section id="energia" className="bg-[#F0FDF4] py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SeccionHeader titulo="Luz y Gas" sub="Energía · Arista Energía" color="#00B96B" />
            <div className="grid gap-6 sm:grid-cols-3 items-start">
              {energia.map((e) => (
                <TarifaCard key={e.id} {...e} color={e.color}
                  destacada={e.id === "secured"} />
              ))}
            </div>
            <div className="mt-8">
              <Link href="/energia" className="rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-500 hover:border-[#00B96B] hover:text-[#00B96B] transition-colors">
                Ver más sobre Arista Energía →
              </Link>
            </div>
          </div>
        </section>

        {/* ── BUNDLES ─────────────────────────────────────── */}
        <section id="bundles" className="bg-[#F0F4FF] py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SeccionHeader titulo="Telefonía + Energía" sub="Bundles · Todo en uno" color="#7C3AED" />
            <p className="text-sm text-gray-500 -mt-6 mb-10 max-w-xl">
              La única empresa local en Alicante que gestiona tu móvil y tu luz. Una sola factura. Un solo equipo.
            </p>
            <div className="grid gap-6 sm:grid-cols-3 items-start">
              {bundles.map((b) => (
                <TarifaCard key={b.id} {...b} color="#7C3AED"
                  destacada={b.id === "bundle-family"} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA FINAL ───────────────────────────────────── */}
        <section className="bg-[#1648D8] py-14 text-center">
          <div className="mx-auto max-w-xl px-6">
            <h2 className="text-xl text-white" style={{ fontWeight: 700 }}>¿No encuentras lo que buscas?</h2>
            <p className="mt-2 text-sm text-white/60">Cuéntanos qué necesitas y te hacemos un pack a medida.</p>
            <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero un pack a medida de Arista Group.")}`}
              target="_blank" rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#00B96B] px-7 py-3.5 text-sm text-black hover:bg-[#009A59] transition-colors" style={{ fontWeight: 600 }}>
              WhatsApp directo →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
