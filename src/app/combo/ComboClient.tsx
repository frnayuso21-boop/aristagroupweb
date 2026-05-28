"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

/* ── Datos ─────────────────────────────────────────────── */
const FIBRAS = [
  { id: "none",  label: "Sin fibra",   desc: "Solo móvil",                          precio: 0,    velocidad: null,    lineasGratis: 0 },
  { id: "f300",  label: "Fibra 300Mb", desc: "2 líneas 30GB + Fijo incluidos",       precio: 29.9, velocidad: "300Mb", lineasGratis: 2 },
  { id: "f600",  label: "Fibra 600Mb", desc: "Fijo de regalo · red Orange",          precio: 24.9, velocidad: "600Mb", lineasGratis: 0 },
  { id: "f1000", label: "Fibra 1Gb",   desc: "Fijo de regalo · ultrarrápida",        precio: 32.9, velocidad: "1Gb",   lineasGratis: 0 },
];

const LINEAS_OPCIONES = [
  { id: "30gb",  label: "30 GB",     precioLinea: 5.9  },
  { id: "60gb",  label: "60 GB",     precioLinea: 6.5  },
  { id: "80gb",  label: "80 GB",     precioLinea: 7.9  },
  { id: "inf",   label: "Ilimitado", precioLinea: 10.9 },
];

const EXTRAS = [
  { id: "tv_deportes", label: "Arista TV Deportes", desc: "TV Básico · 139 canales deportes",           precio: 5, icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { id: "tv_premium",  label: "Arista TV Premium",  desc: "179 canales · Cine+ · LALIGA Hypermotion",   precio: 6, icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { id: "tv_total",    label: "Arista TV Total",    desc: "190 canales · Cine · Deportes · Todo incluido", precio: 9, icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { id: "luz",         label: "Luz",                desc: "Tarifa de energía",                          precio: 0, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
];

interface Linea {
  id: string;
  tipo: string;
}

/* ── Helpers ───────────────────────────────────────────── */
let _lineaCounter = 0;
function newLinea(): Linea {
  return { id: `l${_lineaCounter++}`, tipo: "30gb" };
}

function calcTotal(fibra: string, lineas: Linea[], extras: string[]): number {
  const fibraData = FIBRAS.find(f => f.id === fibra);
  const pFibra    = fibraData?.precio ?? 0;
  const gratis    = fibraData?.lineasGratis ?? 0;

  let pLineas = 0;
  for (let i = 0; i < lineas.length; i++) {
    if (i < gratis) continue; // línea incluida en el pack
    const opcion = LINEAS_OPCIONES.find(o => o.id === lineas[i].tipo);
    pLineas += opcion ? opcion.precioLinea : 0;
  }

  let pExtras = 0;
  for (const eid of extras) {
    const ex = EXTRAS.find(e => e.id === eid);
    pExtras += ex ? ex.precio : 0;
  }

  return pFibra + pLineas + pExtras;
}

function buildWAMsg(fibra: string, lineas: Linea[], extras: string[], total: number): string {
  const fLabel = FIBRAS.find(f => f.id === fibra)?.label ?? "Sin fibra";
  const lDesc  = lineas.map((l, i) => {
    const t = LINEAS_OPCIONES.find(o => o.id === l.tipo)?.label ?? "";
    return `  · Línea ${i + 1}: ${t}`;
  }).join("\n");
  const eDesc  = extras.map(eid => EXTRAS.find(e => e.id === eid)?.label).join(", ");
  return `Hola, quiero contratar mi combo personalizado:\n\n📶 Fibra: ${fLabel}\n📱 Móviles:\n${lDesc || "  · Ninguna"}\n➕ Extras: ${eDesc || "Ninguno"}\n\n💰 Total estimado: ${total.toFixed(2).replace(".", ",")}€/mes`;
}

/* ── Componente ────────────────────────────────────────── */
export default function ComboClient() {
  const [fibra, setFibra]   = useState("f600");
  const [lineas, setLineas] = useState<Linea[]>([]);
  const [extras, setExtras] = useState<string[]>([]);

  const fibraData = FIBRAS.find(f => f.id === fibra);
  const lineasGratis = fibraData?.lineasGratis ?? 0;
  const total = calcTotal(fibra, lineas, extras);
  const [entero, decimal] = total.toFixed(2).replace(".", ",").split(",");

  function selectFibra(id: string) {
    setFibra(id);
    const gratis = FIBRAS.find(f => f.id === id)?.lineasGratis ?? 0;
    // Asegurar que haya al menos las líneas incluidas (30GB por defecto)
    if (gratis > 0 && lineas.length < gratis) {
      const extra = Array.from({ length: gratis - lineas.length }, () => newLinea());
      setLineas([...lineas, ...extra]);
    }
  }

  function addLinea() {
    if (lineas.length < 6) setLineas([...lineas, newLinea()]);
  }
  function removeLinea(id: string) {
    // No se pueden quitar las líneas incluidas en el pack
    const idx = lineas.findIndex(l => l.id === id);
    if (idx < lineasGratis) return;
    setLineas(lineas.filter(l => l.id !== id));
  }
  function updateLinea(id: string, tipo: string) {
    setLineas(lineas.map(l => l.id === id ? { ...l, tipo } : l));
  }
  function toggleExtra(eid: string) {
    setExtras(prev => prev.includes(eid) ? prev.filter(e => e !== eid) : [...prev, eid]);
  }

  return (
    <>
      <Header />
      <main className="mt-[108px] min-h-screen bg-[#F5F7FF]">

        {/* ── Cabecera ─────────────────────────────────────── */}
        <section className="bg-[#1648D8] px-6 py-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/60 mb-3" style={{ fontWeight: 700 }}>Configurador</p>
          <h1 className="text-[clamp(24px,4vw,44px)] text-white leading-tight tracking-tight" style={{ fontWeight: 800 }}>
            Crea tu combo a tu medida
          </h1>
          <p className="mt-3 text-sm text-white/60 max-w-md mx-auto">
            Elige fibra, añade las líneas que necesitas y los extras que quieras. Sin letra pequeña.
          </p>
        </section>

        {/* ── Configurador + resumen ────────────────────────── */}
        <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start">

            {/* ── Pasos ──────────────────────────────────────── */}
            <div className="flex-1 flex flex-col gap-6">

              {/* PASO 1 — Fibra */}
              <Step num="1" titulo="¿Qué fibra quieres?">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {FIBRAS.map(f => (
                    <button key={f.id} onClick={() => selectFibra(f.id)}
                      className={`relative flex flex-col items-start p-4 border-2 transition-all text-left overflow-visible
                        ${fibra === f.id
                          ? "border-[#1648D8] bg-[#EEF2FF]"
                          : "border-gray-200 bg-white hover:border-[#1648D8]/40"}`}>
                      {f.lineasGratis > 0 && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-2.5 py-0.5 text-[10px] text-black whitespace-nowrap"
                          style={{ backgroundColor: "#FFB800", fontWeight: 700 }}>
                          🎁 {f.lineasGratis} líneas gratis
                        </span>
                      )}
                      {f.velocidad && (
                        <span className={`text-[11px] uppercase tracking-[0.2em] mb-1 ${f.lineasGratis > 0 ? "mt-2" : ""}`}
                          style={{ color: "#1648D8", fontWeight: 700 }}>
                          {f.velocidad}
                        </span>
                      )}
                      <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{f.label}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{f.desc}</p>
                      {f.id !== "none" && (
                        <span className="mt-2 inline-flex items-center gap-1 text-[11px] text-[#00B96B]" style={{ fontWeight: 700 }}>
                          <svg className="h-3 w-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          Fijo gratis
                        </span>
                      )}
                      <p className="mt-1 text-base text-[#1648D8]" style={{ fontWeight: 800 }}>
                        {f.precio > 0 ? `${f.precio.toFixed(2).replace(".", ",")}€` : "Gratis"}
                      </p>
                      {fibra === f.id && (
                        <span className="mt-2 self-end flex h-5 w-5 items-center justify-center rounded-full bg-[#1648D8]">
                          <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </Step>

              {/* Conector */}
              <Conector />

              {/* PASO 2 — Líneas móviles */}
              <Step num="2" titulo="Líneas móviles">
                <div className="flex flex-col gap-3">
                  {lineas.map((l, idx) => {
                    const esIncluida = idx < lineasGratis;
                    return (
                      <div key={l.id}
                        className={`flex items-center gap-3 border p-3
                          ${esIncluida ? "bg-[#F0FDF4] border-[#00B96B]/30" : "bg-white border-gray-200"}`}>
                        <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center
                          ${esIncluida ? "bg-[#DCFCE7] text-[#00B96B]" : "bg-[#EEF2FF] text-[#1648D8]"}`}>
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex flex-col w-20 flex-shrink-0">
                          <span className="text-sm text-gray-500" style={{ fontWeight: 600 }}>Línea {idx + 1}</span>
                          {esIncluida && (
                            <span className="text-[10px] text-[#00B96B]" style={{ fontWeight: 700 }}>🎁 Incluida</span>
                          )}
                        </div>
                        <div className="flex gap-2 flex-1 flex-wrap">
                          {LINEAS_OPCIONES.map(op => (
                            <button key={op.id} onClick={() => updateLinea(l.id, op.id)}
                              className={`px-3 py-1.5 text-xs border-2 transition-all
                                ${l.tipo === op.id
                                  ? esIncluida
                                    ? "border-[#00B96B] bg-[#DCFCE7] text-[#00B96B]"
                                    : "border-[#1648D8] bg-[#EEF2FF] text-[#1648D8]"
                                  : "border-gray-200 bg-white text-gray-500 hover:border-[#1648D8]/40"}`}
                              style={{ fontWeight: 700 }}>
                              {op.label}
                              {!esIncluida && (
                                <span className="ml-1 font-normal text-gray-400">
                                  {op.precioLinea.toFixed(2).replace(".", ",")}€
                                </span>
                              )}
                              {esIncluida && l.tipo === op.id && (
                                <span className="ml-1 font-normal text-[#00B96B]">gratis</span>
                              )}
                            </button>
                          ))}
                        </div>
                        <button onClick={() => removeLinea(l.id)}
                          className={`flex-shrink-0 transition-colors
                            ${esIncluida ? "text-gray-200 cursor-not-allowed" : "text-gray-300 hover:text-red-400"}`}
                          aria-label="Eliminar línea"
                          disabled={esIncluida}>
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    );
                  })}

                  {lineas.length < 6 ? (
                    <button onClick={addLinea}
                      className="flex items-center gap-2 border-2 border-dashed border-[#1648D8]/30 p-3 text-sm text-[#1648D8] hover:border-[#1648D8] hover:bg-[#EEF2FF] transition-all"
                      style={{ fontWeight: 600 }}>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                      Añadir línea móvil
                    </button>
                  ) : (
                    <p className="text-xs text-gray-400 text-center py-1">Máximo 6 líneas</p>
                  )}

                  {lineas.length === 0 && (
                    <p className="text-xs text-gray-400 text-center py-2">Sin líneas móviles</p>
                  )}
                </div>
              </Step>

              {/* Conector */}
              <Conector />

              {/* PASO 3 — Extras */}
              <Step num="3" titulo="Extras opcionales">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {EXTRAS.map(ex => {
                    const activo = extras.includes(ex.id);
                    const isTV = ex.id.startsWith("tv_");
                    const isTop = ex.id === "tv_total";
                    return (
                      <button key={ex.id} onClick={() => {
                        // Las 3 opciones de TV son mutuamente excluyentes
                        if (isTV) {
                          setExtras(prev => {
                            const sinTV = prev.filter(e => !e.startsWith("tv_"));
                            return activo ? sinTV : [...sinTV, ex.id];
                          });
                        } else {
                          toggleExtra(ex.id);
                        }
                      }}
                        className={`relative flex flex-col items-start p-4 border-2 transition-all text-left
                          ${activo
                            ? "border-[#1648D8] bg-[#EEF2FF]"
                            : "border-gray-200 bg-white hover:border-[#1648D8]/40"}`}>
                        {isTop && (
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] text-black whitespace-nowrap"
                            style={{ backgroundColor: "#FFB800", fontWeight: 700 }}>★ Completo</span>
                        )}
                        <div className={`mb-2 flex h-8 w-8 items-center justify-center
                          ${activo ? "bg-[#1648D8] text-white" : "bg-gray-100 text-gray-400"}`}>
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={ex.icon} />
                          </svg>
                        </div>
                        <p className="text-xs text-[#1A1A1A] leading-snug" style={{ fontWeight: 700 }}>{ex.label}</p>
                        <p className="text-[11px] text-gray-400 mt-0.5 leading-snug">{ex.desc}</p>
                        <p className="mt-2 text-sm" style={{ fontWeight: 700,
                          color: ex.id === "fijo" ? "#00B96B" : ex.precio > 0 ? "#1648D8" : "#6B7280" }}>
                          {ex.id === "fijo" ? "¡De regalo!" : ex.precio > 0 ? `+${ex.precio}€/mes` : "A consultar"}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </Step>

            </div>

            {/* ── Resumen pegado ─────────────────────────────── */}
            <div className="w-full lg:w-72 lg:sticky lg:top-[120px]">
              <div className="bg-white border-2 border-[#1648D8] shadow-xl overflow-hidden">

                {/* Cabecera */}
                <div className="bg-[#1648D8] px-5 py-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/60" style={{ fontWeight: 700 }}>Tu combo</p>
                  <p className="text-white text-sm mt-0.5" style={{ fontWeight: 600 }}>Resumen de precio</p>
                </div>

                {/* Líneas del resumen */}
                <div className="px-5 py-4 flex flex-col gap-2.5">
                  {/* Fibra */}
                  <ResumenFila
                    label={FIBRAS.find(f => f.id === fibra)?.label ?? ""}
                    precio={FIBRAS.find(f => f.id === fibra)?.precio ?? 0}
                    activo={fibra !== "none"}
                  />

                  {/* Líneas */}
                  {lineas.map((l, idx) => {
                    const op = LINEAS_OPCIONES.find(o => o.id === l.tipo);
                    const esIncluida = idx < lineasGratis;
                    return (
                      <ResumenFila
                        key={l.id}
                        label={`Línea ${idx + 1} · ${op?.label}`}
                        precio={esIncluida ? 0 : (op?.precioLinea ?? 0)}
                        activo
                        regalo={esIncluida}
                      />
                    );
                  })}

                  {/* Extras */}
                  {extras.map(eid => {
                    const ex = EXTRAS.find(e => e.id === eid);
                    return (
                      <ResumenFila
                        key={eid}
                        label={ex?.label ?? ""}
                        precio={ex?.precio ?? 0}
                        activo
                        consultar={ex?.precio === 0}
                      />
                    );
                  })}

                  {lineas.length === 0 && fibra === "none" && extras.length === 0 && (
                    <p className="text-xs text-gray-400 text-center py-2">Selecciona servicios</p>
                  )}
                </div>

                <div className="h-px bg-gray-100 mx-5" />

                {/* Total */}
                <div className="px-5 py-4">
                  <div className="flex items-end justify-between">
                    <p className="text-sm text-gray-500">Total / mes</p>
                    <div className="flex items-end gap-0.5">
                      <span className="text-[40px] leading-none tracking-tighter text-[#1648D8]" style={{ fontWeight: 800 }}>
                        {entero}
                      </span>
                      <div className="mb-1">
                        <span className="text-base text-[#1648D8]" style={{ fontWeight: 700 }}>,{decimal}€</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-1">Precio estimado · sin letra pequeña</p>
                </div>

                <div className="h-px bg-gray-100 mx-5" />

                {/* CTA */}
                <div className="px-5 py-5">
                  <a
                    href={`https://wa.me/${WA}?text=${encodeURIComponent(buildWAMsg(fibra, lineas, extras, total))}`}
                    target="_blank" rel="noopener noreferrer"
                    className="block w-full py-3.5 text-center text-sm text-black transition-colors hover:opacity-90 bg-[#00B96B]"
                    style={{ fontWeight: 700 }}>
                    Contratar este combo →
                  </a>
                  <Link href="/"
                    className="block w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors py-2 mt-1">
                    ← Volver al inicio
                  </Link>
                </div>

              </div>

              {/* Aviso sin permanencia */}
              <div className="mt-4 border border-amber-200 bg-amber-50 px-4 py-3 text-[12px] text-amber-700 leading-relaxed">
                <span className="text-amber-800" style={{ fontWeight: 700 }}>Sin permanencia.</span>{" "}
                Si causas baja antes de 3 meses se aplican gastos de instalación: <strong>150€ + IVA</strong>.
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

/* ── Sub-componentes ───────────────────────────────────── */
function Step({ num, titulo, children }: { num: string; titulo: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-200 overflow-hidden shadow-sm">
      <div className="flex items-center gap-3 bg-[#F5F7FF] border-b border-gray-100 px-5 py-3">
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center bg-[#1648D8] text-white text-xs"
          style={{ fontWeight: 800 }}>
          {num}
        </span>
        <h2 className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{titulo}</h2>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Conector() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-1">
        <div className="h-3 w-px bg-[#1648D8]/30" />
        <div className="h-2 w-2 rounded-full bg-[#1648D8]/40" />
        <div className="h-3 w-px bg-[#1648D8]/30" />
      </div>
    </div>
  );
}

function ResumenFila({
  label, precio, activo, consultar, regalo,
}: {
  label: string; precio: number; activo: boolean; consultar?: boolean; regalo?: boolean;
}) {
  if (!activo) return null;
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-600 truncate pr-2">{label}</span>
      <span className="flex-shrink-0" style={{ fontWeight: 700,
        color: consultar ? "#6B7280" : (regalo || precio === 0) ? "#00B96B" : "#1648D8" }}>
        {consultar ? "A consultar" : regalo ? "🎁 Gratis" : precio === 0 ? "Gratis" : `${precio.toFixed(2).replace(".", ",")}€`}
      </span>
    </div>
  );
}
