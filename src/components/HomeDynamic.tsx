"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const WA_MSG = encodeURIComponent("Hola, he visto la web de Arista y quiero información sobre las tarifas.");

const ARISTA_PRICES: Record<string, number> = {
  Movistar: 40.9,
  Orange: 40.9,
  Vodafone: 40.9,
  Otro: 35.9,
};

// ── CALCULADORA ────────────────────────────────────────────────────────────────
export function SavingsCalculator() {
  const [operadora, setOperadora] = useState("Movistar");
  const [precioActual, setPrecioActual] = useState(65);

  const aristaPrice = ARISTA_PRICES[operadora] ?? 40.9;
  const ahorro = Math.max(0, precioActual - aristaPrice);
  const ahorroAnual = ahorro * 12;

  return (
    <section id="calculadora" className="py-16 px-4 lg:px-6" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <div className="h-px w-6 bg-[#1648D8]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>Sin compromiso</span>
          <div className="h-px w-6 bg-[#1648D8]" />
        </div>
        <h2 className="text-3xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>¿Cuánto estás pagando de más?</h2>
        <p className="mt-2 text-base text-gray-500">Dinos cuánto pagas ahora y te decimos cuánto ahorras con Arista</p>

        <div className="mt-10 rounded-3xl bg-white shadow-xl border border-gray-100 p-8">
          {/* Selector operadora */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-3" style={{ fontWeight: 600 }}>¿Con quién estás ahora?</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["Movistar", "Orange", "Vodafone", "Otro"].map((op) => (
                <button key={op} onClick={() => setOperadora(op)}
                  className="rounded-xl px-5 py-2.5 text-sm transition-all"
                  style={{
                    fontWeight: 600,
                    backgroundColor: operadora === op ? "#1648D8" : "#F0F4FF",
                    color: operadora === op ? "#fff" : "#1648D8",
                    border: operadora === op ? "2px solid #1648D8" : "2px solid transparent",
                  }}>
                  {op}
                </button>
              ))}
            </div>
          </div>

          {/* Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-500" style={{ fontWeight: 600 }}>Tu factura actual</p>
              <span className="text-2xl text-[#1A1A1A]" style={{ fontWeight: 800 }}>{precioActual}€/mes</span>
            </div>
            <input type="range" min={20} max={150} step={1} value={precioActual}
              onChange={(e) => setPrecioActual(Number(e.target.value))}
              className="w-full accent-[#1648D8] cursor-pointer"
              style={{ height: "6px" }} />
            <div className="flex justify-between text-[11px] text-gray-400 mt-1">
              <span>20€</span><span>150€</span>
            </div>
          </div>

          {/* Resultado */}
          <div className="rounded-2xl p-6 mb-6" style={{ backgroundColor: "#F0F4FF" }}>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1" style={{ fontWeight: 600 }}>Con Arista pagarías</p>
                <p className="text-2xl text-[#1648D8]" style={{ fontWeight: 900 }}>{aristaPrice}€<span className="text-sm text-gray-400">/mes</span></p>
              </div>
              <div className="border-l border-r border-[#1648D8]/15">
                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1" style={{ fontWeight: 600 }}>Ahorro al mes</p>
                <p className="text-2xl text-[#1A1A1A]" style={{ fontWeight: 900, color: ahorro > 0 ? "#00B96B" : "#9CA3AF" }}>
                  {ahorro > 0 ? `+${ahorro.toFixed(0)}€` : "—"}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-1" style={{ fontWeight: 600 }}>Ahorro al año</p>
                <p className="text-[32px] leading-none" style={{ fontWeight: 900, color: ahorroAnual > 0 ? "#00B96B" : "#9CA3AF" }}>
                  {ahorroAnual > 0 ? `${ahorroAnual.toFixed(0)}€` : "—"}
                </p>
              </div>
            </div>
          </div>

          {/* CTA dinámico */}
          <a href={`https://wa.me/${WA}?text=${encodeURIComponent(
              ahorroAnual > 0
                ? `Hola, acabo de calcular que puedo ahorrar ${ahorroAnual.toFixed(0)}€ al año cambiándome a Arista desde ${operadora}. Quiero más información.`
                : "Hola, quiero información sobre las tarifas de Arista."
            )}`}
            target="_blank" rel="noopener noreferrer"
            className="block w-full rounded-2xl py-4 text-center text-base text-black transition-all hover:opacity-90 shadow-lg"
            style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
            {ahorroAnual > 0
              ? `Quiero ahorrar ${ahorroAnual.toFixed(0)}€ este año →`
              : "Ver mis opciones con Arista →"}
          </a>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ACCORDION ──────────────────────────────────────────────────────────────
const FAQS = [
  { q: "¿Tengo que cambiar de número?", a: "No. Portamos tu número en 24-48h laborables de forma totalmente gratuita. Tú no haces nada, lo gestionamos nosotros." },
  { q: "¿Cuánto tarda el alta?", a: "Menos de 24 horas en la mayoría de los casos. Una vez confirmada la solicitud, en 24h estás activo." },
  { q: "¿Hay permanencia?", a: "No hay permanencia. Puedes darte de baja cuando quieras. Sin embargo, si causas baja antes de los 3 primeros meses, se aplica un cargo por instalación de 150€ + IVA para cubrir los costes del alta y puesta en marcha del servicio." },
  { q: "¿Qué pasa si quiero darme de baja?", a: "Puedes darte de baja en cualquier momento. Si han pasado más de 3 meses desde el alta, no pagas nada. Si la baja se produce antes de ese plazo, se cobra el coste de instalación: 150€ + IVA." },
  { q: "¿Sois una empresa de fiar?", a: "Llevamos operando desde 2023 con clientes en Alicante, Torrevieja e Ibiza. Somos empresa local con NIF y sede física en Alicante." },
  { q: "¿Tenéis cobertura en mi zona?", a: "Operamos sobre la red MasOrange — una de las mejores redes de España con cobertura en todo el territorio nacional, incluyendo toda la provincia de Alicante." },
  { q: "¿Cómo funciona Arista Total?", a: "Gestionamos tu móvil, tu fibra y tu luz con un solo contacto. Una factura, un asesor personal, máximo ahorro por contratar ambos servicios." },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 lg:px-6" style={{ backgroundColor: "#F5F6F8" }}>
      <div className="mx-auto max-w-3xl">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-px w-6 bg-[#1648D8]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1]" style={{ fontWeight: 700 }}>FAQ</span>
        </div>
        <h2 className="text-3xl text-[#1A1A1A] tracking-tight mb-8" style={{ fontWeight: 800 }}>Resolvemos tus dudas</h2>

        <div className="flex flex-col gap-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl bg-white border border-gray-100 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors">
                <span className="text-sm text-[#1A1A1A] pr-4" style={{ fontWeight: 700 }}>{faq.q}</span>
                <svg className={`h-5 w-5 flex-shrink-0 text-[#1648D8] transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-[#1648D8]/30 px-6 py-3 text-sm text-[#1648D8] hover:bg-[#EEF2FF] transition-colors"
            style={{ fontWeight: 600 }}>
            ¿Más dudas? Escríbenos ahora →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── PRUEBA SOCIAL CON CONTADOR ANIMADO ─────────────────────────────────────────
export function SocialProof() {
  const [count, setCount] = useState(73);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 lg:px-6" style={{ backgroundColor: "#0a1a3a" }}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl text-white tracking-tight" style={{ fontWeight: 800 }}>Lo que dicen nuestros clientes</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 mb-10">
          {[
            { texto: "Llevaba 8 años con Movistar. En 24 horas cambié y ahorro 35€ al mes. No sé por qué no lo hice antes.", nombre: "María G.", barrio: "Benalúa", estrellas: 5 },
            { texto: "Me lo gestionaron todo ellos. No tuve que hacer nada.", nombre: "Carlos M.", barrio: "San Antón", estrellas: 5 },
            { texto: "Por fin una operadora que coge el teléfono cuando llamas.", nombre: "Ana P.", barrio: "Torrevieja", estrellas: 4 },
          ].map((t) => (
            <div key={t.nombre} className="rounded-2xl bg-white/10 border border-white/15 p-6 flex flex-col gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill={i < t.estrellas ? "#FFB800" : "#ffffff30"}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm text-white/80 leading-relaxed flex-1">&ldquo;{t.texto}&rdquo;</p>
              <div>
                <p className="text-sm text-white" style={{ fontWeight: 700 }}>{t.nombre}</p>
                <p className="text-[11px] text-white/50">{t.barrio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contador animado */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white/10 border border-white/20 px-8 py-4">
            <span className="text-4xl text-[#00B96B]" style={{ fontWeight: 900 }}>{count}+</span>
            <div className="text-left">
              <p className="text-sm text-white" style={{ fontWeight: 700 }}>familias confían en Arista</p>
              <p className="text-[11px] text-white/50">Creciendo cada mes · Alicante</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href={`https://wa.me/${WA}?text=${WA_MSG}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm text-[#0a1a3a] hover:bg-white/90 transition-colors"
            style={{ fontWeight: 700 }}>
            Únete a ellos →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── EXIT INTENT POPUP ──────────────────────────────────────────────────────────
export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !triggered.current) {
        triggered.current = true;
        setVisible(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={() => setVisible(false)}>
      <div className="relative rounded-3xl bg-white shadow-2xl p-8 max-w-md w-full"
        onClick={(e) => e.stopPropagation()}>
        <button onClick={() => setVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1648D8] mx-auto mb-4">
            <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl text-[#1A1A1A] mb-2" style={{ fontWeight: 800 }}>¿Te vas sin ahorrar dinero?</h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Escríbenos y te hacemos una propuesta personalizada en <strong>5 minutos</strong>. Sin compromiso.
          </p>
          <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, estaba en la web de Arista y quiero una propuesta personalizada.")}`}
            target="_blank" rel="noopener noreferrer"
            className="block w-full rounded-xl py-3.5 text-center text-sm text-black transition-colors hover:opacity-90 mb-3"
            style={{ backgroundColor: "#00B96B", fontWeight: 700 }}
            onClick={() => setVisible(false)}>
            Quiero mi propuesta personalizada →
          </a>
          <button onClick={() => setVisible(false)}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            No, prefiero seguir pagando de más
          </button>
        </div>
      </div>
    </div>
  );
}
