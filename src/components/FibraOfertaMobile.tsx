"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

// Cuenta atrás desde 7 días desde la primera visita (guardado en sessionStorage)
function getDeadline(): number {
  if (typeof window === "undefined") return Date.now() + 7 * 24 * 60 * 60 * 1000;
  const key = "arista_fibra_deadline";
  const stored = sessionStorage.getItem(key);
  if (stored) return parseInt(stored, 10);
  const deadline = Date.now() + 7 * 24 * 60 * 60 * 1000;
  sessionStorage.setItem(key, String(deadline));
  return deadline;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function FibraOfertaMobile() {
  const [timeLeft, setTimeLeft] = useState({ d: 7, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const deadline = getDeadline();

    function tick() {
      const diff = Math.max(0, deadline - Date.now());
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ d, h, m, s });
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mt-[136px] bg-[#F5F6F8] px-4 pt-5 pb-6 block md:hidden">


      {/* Badge oferta */}
      <div className="flex justify-center mb-3">
        <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] text-black shadow-md whitespace-nowrap"
          style={{ backgroundColor: "#FFB800", fontWeight: 700 }}>
          ★ Oferta limitada · Solo esta semana
        </span>
      </div>

      {/* Card */}
      <div className="rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-visible">

        {/* Precio principal */}
        <div className="px-5 pt-5 pb-3">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>Arista Only 600</p>
          <div className="flex items-end gap-0.5 leading-none">
            <div className="relative inline-block">
              {/* Subrayado bolígrafo */}
              <svg viewBox="0 0 80 10" className="absolute pointer-events-none" fill="none"
                style={{ bottom: "-6px", left: "-8px", width: "130%", height: "14px" }}>
                <path d="M 2 6 C 15 4, 30 8, 46 5 C 58 3, 68 7, 78 5"
                  stroke="#FFB800" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <path d="M 4 7.5 C 18 6, 34 9, 50 7 C 62 5, 70 8, 79 6.5"
                  stroke="#FFB800" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.35" />
              </svg>
              <span className="relative text-[46px] leading-none tracking-tighter text-[#1648D8]" style={{ fontWeight: 800 }}>24</span>
            </div>
            <div className="mb-1">
              <span className="text-xl text-[#1648D8]" style={{ fontWeight: 700 }}>,90€</span>
              <p className="text-[10px] text-gray-400 leading-none">/mes</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-100 mx-4" />

        {/* Nombre tarifa */}
        <div className="px-5 pt-3 pb-0">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#1648D8]" style={{ fontWeight: 700 }}>Arista Only 600</p>
        </div>

        {/* Features */}
        <div className="px-5 pt-2 pb-3 flex flex-col gap-2">
          {[
            { d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", t: "Fibra 600Mb simétrica" },
            { d: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0", t: "Red MasOrange" },
            { d: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z", t: "Sin permanencia" },
            { d: "M13 10V3L4 14h7v7l9-11h-7z", t: "Router WiFi incluido" },
          ].map((l) => (
            <div key={l.t} className="flex items-center gap-2 text-[12px] text-gray-600">
              <svg className="h-4 w-4 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={l.d} />
              </svg>
              {l.t}
            </div>
          ))}
        </div>

        {/* Regalo — línea de móvil */}
        <div className="mx-4 mb-3 rounded-xl bg-[#F0FFF8] border border-[#00B96B]/30 px-4 py-3 flex items-center gap-3">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#00B96B]/15">
            <svg className="h-4 w-4 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-[11px] text-[#1A1A1A]" style={{ fontWeight: 700 }}>
              + Línea móvil de regalo
            </p>
            <p className="text-[11px] text-gray-500">
              Añade una línea 5G por solo <span className="text-[#00B96B]" style={{ fontWeight: 700 }}>+2€/mes</span>
            </p>
          </div>
        </div>

        {/* Contador */}
        <div className="mx-4 mb-4 rounded-xl bg-[#1648D8]/6 border border-[#1648D8]/15 px-4 py-2.5">
          <p className="text-center text-[10px] uppercase tracking-[0.15em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>
            Oferta expira en
          </p>
          <div className="flex items-center justify-center gap-2">
            {[
              { v: timeLeft.d, label: "días" },
              { v: timeLeft.h, label: "horas" },
              { v: timeLeft.m, label: "min" },
              { v: timeLeft.s, label: "seg" },
            ].map((u, i) => (
              <div key={u.label} className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <span className="text-[22px] leading-none text-[#1648D8] tabular-nums" style={{ fontWeight: 800 }}>
                    {pad(u.v)}
                  </span>
                  <span className="text-[9px] text-[#1648D8]/60 uppercase tracking-wide">{u.label}</span>
                </div>
                {i < 3 && (
                  <span className="text-[18px] text-[#1648D8]/40 mb-3" style={{ fontWeight: 700 }}>:</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="px-5 pb-5 pt-1">
          <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Quiero contratar Arista Only 600 — Fibra 600Mb por 24,90€/mes + línea móvil por 2€ más.")}`}
            target="_blank" rel="noopener noreferrer"
            className="block w-full rounded-xl py-2.5 text-center text-sm text-black transition-colors hover:opacity-90"
            style={{ backgroundColor: "#00B96B", fontWeight: 600, WebkitTapHighlightColor: "transparent" as string }}>
            Lo quiero
          </a>
          <Link href="/fibra-y-movil" className="block text-center text-[11px] text-gray-400 hover:text-gray-600 transition-colors pt-2">
            Ver todos los packs →
          </Link>
        </div>
      </div>
    </section>
  );
}
