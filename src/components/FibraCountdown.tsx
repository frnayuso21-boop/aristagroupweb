"use client";

import { useState, useEffect } from "react";

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

export default function FibraCountdown() {
  const [timeLeft, setTimeLeft] = useState({ d: 7, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const deadline = getDeadline();
    function tick() {
      const diff = Math.max(0, deadline - Date.now());
      setTimeLeft({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    /* Banner ancho pegado bajo el hero — bordes inferiores redondeados */
    <div className="w-full rounded-b-2xl px-6 py-4 flex items-center justify-between gap-6" style={{ backgroundColor: "#FFB800" }}>
      <p className="text-[13px] text-black" style={{ fontWeight: 700 }}>
        Oferta expira en:
      </p>
      <div className="flex items-center gap-3">
        {[
          { v: timeLeft.d, label: "días" },
          { v: timeLeft.h, label: "horas" },
          { v: timeLeft.m, label: "min" },
          { v: timeLeft.s, label: "seg" },
        ].map((u, i) => (
          <div key={u.label} className="flex items-center gap-3">
            <div className="flex flex-col items-center bg-black/10 rounded-xl px-3 py-1.5 min-w-[52px]">
              <span className="text-[26px] leading-none text-black tabular-nums" style={{ fontWeight: 800 }}>
                {pad(u.v)}
              </span>
              <span className="text-[9px] text-black/60 uppercase tracking-widest mt-0.5">{u.label}</span>
            </div>
            {i < 3 && (
              <span className="text-[22px] text-black/40 mb-2" style={{ fontWeight: 700 }}>:</span>
            )}
          </div>
        ))}
      </div>
      <a
        href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || "34621192578"}?text=${encodeURIComponent("Quiero contratar Arista Only 600 — Fibra 600Mb por 24,90€/mes + línea móvil por 2€ más.")}`}
        target="_blank" rel="noopener noreferrer"
        className="flex-shrink-0 rounded-xl bg-black px-5 py-2.5 text-sm text-white hover:bg-gray-900 transition-colors whitespace-nowrap"
        style={{ fontWeight: 700 }}>
        Aprovechar oferta →
      </a>
    </div>
  );
}
