"use client";

import { useState } from "react";
import Link from "next/link";
import type { Tarifa } from "@/data/tarifas-data";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

interface Props { tarifa: Tarifa }

export default function TarifaHeroCard({ tarifa }: Props) {
  const tieneFibra = tarifa.lineas.some(l => l.tipo === "fibra");
  const tieneMovil = tarifa.lineas.some(l => l.tipo === "movil");
  const tieneFibra1G = tarifa.lineas.some(l => l.texto.includes("1Gb") || l.texto.includes("1000"));

  const [fibra, setFibra] = useState<"600" | "1000">(tieneFibra1G ? "1000" : "600");
  // Si la tarifa base ya es 1Gb no se suma coste extra; solo se suma si se upgradea desde 600Mb
  const extraFibra = fibra === "1000" && !tieneFibra1G ? 8 : 0;

  // Calcular número de líneas móviles en la tarifa base
  const baseMovilLines = tarifa.lineas.filter(l => l.tipo === "movil").reduce((acc, l) => {
    const match = l.texto.match(/^(\d+)/);
    return acc + (match ? parseInt(match[1]) : 1);
  }, 0) || (tieneMovil ? 1 : 0);

  const [extraLines, setExtraLines] = useState(0);
  const extraLinePrice = 9.9;

  const precioBase = tarifa.precioMes + extraFibra + extraLines * extraLinePrice;
  const precioStr  = precioBase.toFixed(2).replace(".", ",");
  const [entero, decimal] = precioStr.split(",");

  const waMsg = encodeURIComponent(
    `Hola, quiero contratar ${tarifa.nombre}${fibra === "1000" ? " con fibra 1Gb" : ""}${extraLines > 0 ? ` + ${extraLines} línea(s) adicional(es)` : ""} — ${precioStr}€/mes.`
  );

  return (
    <div className="rounded-3xl bg-white shadow-2xl border border-gray-100 overflow-hidden">

      {/* Header card */}
      <div className="bg-[#0D47A1] px-6 py-4">
        <p className="text-[11px] uppercase tracking-[0.25em] text-white/60" style={{ fontWeight: 700 }}>
          {tarifa.nombre}
        </p>
      </div>

      <div className="px-6 py-5 flex flex-col gap-5">

        {/* Selector fibra — solo en tarifas que permiten upgrade (600Mb base) */}
        {tieneFibra && !tieneFibra1G && (
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400 mb-2" style={{ fontWeight: 700 }}>Velocidad de fibra</p>
            <div className="flex gap-2">
              {(["600", "1000"] as const).map((v) => (
                <button key={v}
                  onClick={() => setFibra(v)}
                  className={`flex-1 rounded-xl border py-2.5 text-sm transition-all ${fibra === v
                    ? "border-[#1648D8] bg-[#EEF2FF] text-[#1648D8]"
                    : "border-gray-200 text-gray-500 hover:border-gray-300"}`}
                  style={{ fontWeight: fibra === v ? 700 : 500 }}>
                  {v === "600" ? "600 Mb" : "1.000 Mb (1Gb)"}
                  {v === "1000" && <span className="ml-1 text-[10px] text-gray-400">+8€</span>}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Selector líneas móviles */}
        {tieneMovil && (
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400 mb-2" style={{ fontWeight: 700 }}>
              Líneas móviles incluidas
            </p>
            <div className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-2.5">
              <span className="text-sm text-gray-700" style={{ fontWeight: 600 }}>
                {baseMovilLines + extraLines} línea{(baseMovilLines + extraLines) !== 1 ? "s" : ""}
                {extraLines > 0 && <span className="ml-1 text-[11px] text-[#00B96B]">+{(extraLines * extraLinePrice).toFixed(2).replace(".", ",")}€</span>}
              </span>
              <div className="flex items-center gap-2">
                <button onClick={() => setExtraLines(Math.max(0, extraLines - 1))}
                  disabled={extraLines === 0}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-[#1648D8] hover:text-[#1648D8] disabled:opacity-30 transition-all"
                  style={{ fontWeight: 700, fontSize: 18 }}>
                  −
                </button>
                <span className="w-5 text-center text-sm" style={{ fontWeight: 700 }}>{baseMovilLines + extraLines}</span>
                <button onClick={() => setExtraLines(Math.min(5, extraLines + 1))}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-[#1648D8] hover:text-[#1648D8] transition-all"
                  style={{ fontWeight: 700, fontSize: 18 }}>
                  +
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Separador */}
        <div className="h-px bg-gray-100" />

        {/* Precio */}
        <div>
          <div className="flex items-end gap-0.5 leading-none">
            <span className="text-[58px] leading-none tracking-tighter text-[#0D47A1]" style={{ fontWeight: 900 }}>{entero}</span>
            <div className="mb-1.5">
              <span className="text-2xl text-[#0D47A1]" style={{ fontWeight: 700 }}>,{decimal}€</span>
              <p className="text-[10px] text-gray-400 leading-none">/mes · IVA incl.</p>
            </div>
          </div>
        </div>

        {/* Checks */}
        <div className="flex flex-col gap-1.5">
          {["Sin permanencia", "Alta en 24 horas", "Red MasOrange"].map((c) => (
            <div key={c} className="flex items-center gap-2">
              <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#00B96B]">
                <svg className="h-2.5 w-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-[12px] text-gray-600">{c}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a href={`https://wa.me/${WA}?text=${waMsg}`}
          target="_blank" rel="noopener noreferrer"
          className="block w-full rounded-2xl py-3.5 text-center text-base text-black transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
          Lo quiero →
        </a>

        {/* Cobertura */}
        <p className="text-center text-[11px] text-gray-400">
          ¿Tienes cobertura?{" "}
          <Link href="/cobertura" className="text-[#1648D8] underline hover:no-underline">
            Compruébalo aquí
          </Link>
        </p>
      </div>

      {/* Strip IVA */}
      <div className="bg-gray-50 border-t border-gray-100 px-6 py-2 text-center">
        <p className="text-[11px] text-gray-400">Todos los precios incluyen IVA</p>
      </div>
    </div>
  );
}
