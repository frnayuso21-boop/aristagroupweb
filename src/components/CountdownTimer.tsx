"use client";
import { useState, useEffect } from "react";

interface TimeLeft {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

function calc(): TimeLeft {
  const diff = new Date("2026-06-24T23:59:59").getTime() - Date.now();
  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  return {
    dias:     Math.floor(diff / 86_400_000),
    horas:    Math.floor((diff % 86_400_000) / 3_600_000),
    minutos:  Math.floor((diff % 3_600_000) / 60_000),
    segundos: Math.floor((diff % 60_000) / 1_000),
  };
}

interface Props {
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "orange" | "light";
}

export default function CountdownTimer({ size = "md", variant = "dark" }: Props) {
  const [time, setTime] = useState<TimeLeft>(calc);
  const expired = time.dias === 0 && time.horas === 0 && time.minutos === 0 && time.segundos === 0;

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const sizeMap = {
    sm: { num: "text-2xl", label: "text-[10px]", box: "h-12 w-12 sm:h-14 sm:w-14", gap: "gap-2" },
    md: { num: "text-[28px] sm:text-[36px]", label: "text-[10px]", box: "h-16 w-16 sm:h-20 sm:w-20", gap: "gap-3 sm:gap-4" },
    lg: { num: "text-[36px] sm:text-[48px]", label: "text-xs", box: "h-20 w-20 sm:h-24 sm:w-24", gap: "gap-4 sm:gap-5" },
  }[size];

  const variantMap = {
    dark:   { bg: "rgba(255,69,0,0.18)",  border: "rgba(255,100,0,0.45)", num: "text-white",        label: "text-white/40" },
    orange: { bg: "rgba(255,255,255,0.2)", border: "rgba(255,255,255,0.4)", num: "text-white",       label: "text-white/80" },
    light:  { bg: "rgba(230,81,0,0.1)",   border: "rgba(230,81,0,0.3)",    num: "text-[#E65100]",   label: "text-[#E65100]/60" },
  }[variant];

  if (expired) {
    return (
      <div className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3">
        <span className="text-sm text-white/50 font-semibold">Oferta finalizada</span>
      </div>
    );
  }

  return (
    <div className={`flex ${sizeMap.gap} justify-center`}>
      {[
        { v: time.dias,     l: "días" },
        { v: time.horas,    l: "horas" },
        { v: time.minutos,  l: "min" },
        { v: time.segundos, l: "seg" },
      ].map(({ v, l }) => (
        <div key={l} className="flex flex-col items-center">
          <div className={`flex ${sizeMap.box} items-center justify-center rounded-2xl border`}
            style={{ backgroundColor: variantMap.bg, borderColor: variantMap.border }}>
            <span className={`${sizeMap.num} ${variantMap.num} tabular-nums font-black`}>
              {String(v).padStart(2, "0")}
            </span>
          </div>
          <span className={`mt-1.5 ${sizeMap.label} ${variantMap.label} uppercase tracking-[0.2em] font-semibold`}>
            {l}
          </span>
        </div>
      ))}
    </div>
  );
}
