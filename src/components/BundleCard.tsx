"use client";

import { useState } from "react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

const VELOCIDADES = [
  { label: "300 Mb",    precio: 25.9,  fibra: "300 Mb",    color: "#7C3AED" },
  { label: "600 Mb",    precio: 28.9,  fibra: "600 Mb",    color: "#1648D8" },
  { label: "1.000 Mb",  precio: 30.0,  fibra: "1.000 Mb",  color: "#00B96B" },
];

const CHECK_ITEMS = [
  "Un solo recibo, un solo asesor",
  "70 € de bienvenida (mes 3 + mes 6)",
  "GBs que no gastas no se pierden",
  "Precio garantizado de por vida",
  "Permanencia de 6 meses",
];

const ICON_LUZ   = "M13 10V3L4 14h7v7l9-11h-7z";
const ICON_FIBRA = "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6";
const ICON_MOVIL = "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z";

function formatPrice(p: number) {
  const str = p.toFixed(2).replace(".", ",");
  const comma = str.indexOf(",");
  return { entero: str.slice(0, comma), decimal: str.slice(comma) };
}

export default function BundleCard() {
  const [velIdx, setVelIdx] = useState(1);
  const vel = VELOCIDADES[velIdx];
  const { entero, decimal } = formatPrice(vel.precio);

  const waMsg = encodeURIComponent(
    `Hola, quiero contratar Fibra + Energía de Arista (Luz + Fibra ${vel.fibra} + 2 móviles 5G) por ${vel.precio.toFixed(2).replace(".", ",")} €/mes.`
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="grid lg:grid-cols-2">

        {/* ── Izquierda — configurador ── */}
        <div className="flex flex-col gap-0 border-b border-gray-100 p-6 lg:border-b-0 lg:border-r lg:p-8">
          <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-gray-400" style={{ fontWeight: 700 }}>
            Fibra + Energía
          </p>
          <h3 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>
            Luz · Fibra · Móvil
          </h3>
          <p className="mt-1 text-sm text-gray-400">Todo en un solo recibo, un solo precio.</p>

          {/* Precio */}
          <div className="mt-5 flex items-end gap-0.5 leading-none">
            <span
              className="text-[62px] leading-none tracking-tighter transition-colors duration-200"
              style={{ fontWeight: 900, color: vel.color }}
            >
              {entero}
            </span>
            <span
              className="mb-1.5 text-2xl transition-colors duration-200"
              style={{ fontWeight: 700, color: vel.color }}
            >
              {decimal}
            </span>
            <span className="mb-1.5 ml-0.5 text-sm text-gray-400">€/mes</span>
          </div>
          <p className="mt-1 text-[11px] text-gray-400">2 líneas 5G · 30 GB c/u</p>
          <p className="text-[11px] text-gray-400">+ 70 € de Bienvenida · 1er mes gratis</p>

          {/* Selector */}
          <div className="mt-5">
            <p className="mb-2 text-xs text-gray-400" style={{ fontWeight: 600 }}>Velocidad de fibra</p>
            <div className="grid grid-cols-3 gap-2">
              {VELOCIDADES.map((v, i) => (
                <button
                  key={v.label}
                  onClick={() => setVelIdx(i)}
                  className="rounded-xl py-2.5 text-sm transition-all duration-150"
                  style={{
                    fontWeight: 600,
                    backgroundColor: velIdx === i ? v.color : "#F3F4F6",
                    color:           velIdx === i ? "#fff"   : "#6B7280",
                    border:          velIdx === i ? `1.5px solid ${v.color}` : "1.5px solid transparent",
                  }}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/${WA}?text=${waMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="mt-6 block w-full rounded-2xl py-3.5 text-center text-sm text-black transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#00B96B", fontWeight: 700 }}
          >
            Contratar por {vel.precio.toFixed(2).replace(".", ",")} €/mes →
          </a>
          <p className="mt-2 text-center text-[11px] text-gray-400">
            Precio garantizado para clientes actuales de Arista Energía.
          </p>
        </div>

        {/* ── Derecha — qué incluye ── */}
        <div className="flex flex-col gap-5 p-6 lg:p-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400" style={{ fontWeight: 700 }}>
            Qué incluye
          </p>

          {[
            { icon: ICON_LUZ,   titulo: "Luz",            desc: "Precio fijo garantizado de por vida", color: "#F59E0B", bg: "#FEF3C7" },
            { icon: ICON_FIBRA, titulo: `Fibra ${vel.fibra}`, desc: "1er mes completamente gratis",    color: vel.color, bg: "#EEF2FF" },
            { icon: ICON_MOVIL, titulo: "2 líneas 5G",    desc: "30 GB/mes acumulables por línea",    color: "#00B96B", bg: "#DCFCE7" },
          ].map((item) => (
            <div key={item.titulo} className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: item.bg }}
              >
                <svg style={{ color: item.color, width: 18, height: 18 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <div>
                <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{item.titulo}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}

          <div className="h-px bg-gray-100" />

          <div className="flex flex-col gap-2.5">
            {CHECK_ITEMS.map((v) => (
              <div key={v} className="flex items-center gap-2 text-sm text-gray-600">
                <svg className="h-4 w-4 flex-shrink-0 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
