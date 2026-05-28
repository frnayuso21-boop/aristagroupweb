"use client";

import type { Tarifa } from "@/data/tarifas-data";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

const ICON_FIBRA = "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6";
const ICON_MOVIL = "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z";
const ICON_TV    = "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z";

export default function TarifaStickyBar({ tarifa }: { tarifa: Tarifa }) {
  const precio = tarifa.precioMes.toFixed(2).replace(".", ",");
  const waMsg = encodeURIComponent(`Hola, quiero contratar ${tarifa.nombre} — ${precio}€/mes.`);

  const pills = tarifa.lineas
    .filter(l => l.tipo !== "fijo")
    .map(l => ({ tipo: l.tipo, texto: l.texto }));

  const iconPath = (tipo: string) => tipo === "fibra" ? ICON_FIBRA : tipo === "movil" ? ICON_MOVIL : ICON_TV;

  return (
    <div className="sticky z-40 bg-[#0D47A1] shadow-lg" style={{ top: "108px" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 lg:px-8">

        {/* Pills de componentes */}
        <div className="hidden items-center gap-3 sm:flex flex-wrap">
          {pills.map((p, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPath(p.tipo)} />
              </svg>
              <span className="text-[12px] text-white/90" style={{ fontWeight: 600 }}>{p.texto}</span>
              {i < pills.length - 1 && <span className="text-white/30 ml-1">+</span>}
            </div>
          ))}
        </div>

        {/* Nombre en móvil */}
        <span className="text-sm text-white sm:hidden" style={{ fontWeight: 700 }}>{tarifa.nombre}</span>

        {/* Precio + CTA */}
        <div className="flex flex-shrink-0 items-center gap-3">
          <span className="text-xl text-white" style={{ fontWeight: 900 }}>{precio}€<span className="text-sm text-white/60 ml-0.5">/mes</span></span>
          <a href={`https://wa.me/${WA}?text=${waMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="rounded-xl bg-[#00B96B] px-4 py-2 text-sm text-black hover:bg-[#009A59] transition-colors whitespace-nowrap"
            style={{ fontWeight: 700 }}>
            Lo quiero
          </a>
        </div>
      </div>
    </div>
  );
}
