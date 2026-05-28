"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

/* ── Types ─────────────────────────────────────────────── */
interface Address {
  label: string;
  gescal: string;
  sessionId: string;
  province?: string;
  city?: string;
}

interface Building {
  label: string;
  gescal37: string;
}

type Step = "search" | "portal" | "checking" | "ok" | "ko";

/* ── GTM helper ────────────────────────────────────────── */
function gtmPush(event: string, payload: Record<string, string>) {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event, ...payload });
  }
}

/* ── Tarifas estrella tras cobertura OK ────────────────── */
const STAR_TARIFAS = [
  { nombre: "Arista Only 600", precio: "24,90", desc: "Fibra 600Mb simétrica",            wa: "Quiero Arista Only 600 — Fibra 600Mb por 24,90€/mes." },
  { nombre: "Pack Pareja 600", precio: "35,90", desc: "Fibra 600Mb + 2 líneas 30GB 5G",   wa: "Quiero Pack Pareja 600 — Fibra 600Mb + 2 líneas 30GB por 35,90€/mes." },
  { nombre: "Arista 600 Infinity", precio: "40,90", desc: "Fibra 600Mb + Móvil ilimitado 5G", wa: "Quiero Arista 600 Infinity — Fibra 600Mb + Móvil ilimitado por 40,90€/mes." },
];

/* ══════════════════════════════════════════════════════════
   COMPONENTE PRINCIPAL
══════════════════════════════════════════════════════════ */
export default function CoverageChecker({ compact = false }: { compact?: boolean }) {
  const [step,        setStep]        = useState<Step>("search");
  const [query,       setQuery]       = useState("");
  const [addresses,   setAddresses]   = useState<Address[]>([]);
  const [selected,    setSelected]    = useState<Address | null>(null);
  const [buildings,   setBuildings]   = useState<Building[]>([]);
  const [portal,      setPortal]      = useState<Building | null>(null);
  const [loading,     setLoading]     = useState(false);
  const [dropOpen,    setDropOpen]    = useState(false);
  const [tecnologia,  setTecnologia]  = useState("");
  const [waitlist,    setWaitlist]    = useState({ nombre: "", email: "", telefono: "" });
  const [wlSent,      setWlSent]      = useState(false);
  const [wlLoading,   setWlLoading]   = useState(false);

  const debounceRef  = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropRef      = useRef<HTMLDivElement>(null);

  /* Cerrar dropdown al clic fuera */
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── Búsqueda de direcciones con debounce ── */
  const searchAddresses = useCallback((text: string) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (text.length < 3) { setAddresses([]); setDropOpen(false); return; }
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res  = await fetch(`/api/coverage/address?q=${encodeURIComponent(text)}`);
        const data = await res.json();
        const list: Address[] = data.addresses ?? data ?? [];
        setAddresses(list);
        setDropOpen(list.length > 0);
      } catch { setAddresses([]); }
      finally  { setLoading(false); }
    }, 350);
  }, []);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    setQuery(v);
    setSelected(null);
    searchAddresses(v);
  }

  /* ── Selección de dirección → buscar portales ── */
  async function handleSelectAddress(addr: Address) {
    setQuery(addr.label);
    setSelected(addr);
    setDropOpen(false);
    setLoading(true);
    setStep("search");
    try {
      const res  = await fetch(`/api/coverage/buildings?gescal=${encodeURIComponent(addr.gescal)}&sessionId=${encodeURIComponent(addr.sessionId)}`);
      const data = await res.json();
      const list: Building[] = data.buildings ?? data ?? [];
      if (list.length === 1) {
        setPortal(list[0]);
        await checkCoverage(list[0].gescal37, addr.sessionId, addr);
      } else if (list.length > 1) {
        setBuildings(list);
        setStep("portal");
      } else {
        // Sin portales → verificar directamente con gescal como gescal37
        await checkCoverage(addr.gescal, addr.sessionId, addr);
      }
    } catch { setStep("ko"); }
    finally  { setLoading(false); }
  }

  /* ── Confirmar portal ── */
  async function handleSelectPortal(b: Building) {
    setPortal(b);
    setLoading(true);
    await checkCoverage(b.gescal37, selected!.sessionId, selected!);
    setLoading(false);
  }

  /* ── Consulta cobertura ── */
  async function checkCoverage(gescal37: string, sessionId: string, addr: Address) {
    setStep("checking");
    setLoading(true);
    try {
      const res  = await fetch("/api/coverage/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gescal37, sessionId }),
      });
      const data = await res.json();

      const valid = data.valid === true || (Array.isArray(data.products) && data.products.length > 0);
      const tech  = data.technology ?? data.tecnologia ?? data.products?.[0]?.technology ?? "";

      if (valid) {
        setTecnologia(tech);
        setStep("ok");
        gtmPush("cobertura_confirmada", {
          provincia:  addr.province ?? "",
          ciudad:     addr.city     ?? "",
          tecnologia: tech,
        });
      } else {
        setStep("ko");
        gtmPush("cobertura_no_disponible", {
          provincia: addr.province ?? "",
          ciudad:    addr.city     ?? "",
        });
      }
    } catch {
      setStep("ko");
    } finally {
      setLoading(false);
    }
  }

  /* ── Enviar lista de espera ── */
  async function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    setWlLoading(true);
    try {
      await fetch("/api/coverage/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...waitlist, direccion: query }),
      });
      setWlSent(true);
    } catch { setWlSent(true); }
    finally  { setWlLoading(false); }
  }

  function reset() {
    setStep("search"); setQuery(""); setSelected(null);
    setAddresses([]); setBuildings([]); setPortal(null);
    setTecnologia(""); setWlSent(false);
    setWaitlist({ nombre: "", email: "", telefono: "" });
  }

  /* ════════════════════════════════════════════════════════
     RENDER
  ════════════════════════════════════════════════════════ */
  return (
    <div className={`w-full ${compact ? "max-w-xl mx-auto" : "max-w-2xl mx-auto"}`}>
      <div className="bg-[#EEF2FF] border border-[#C7D2FE] p-6 sm:p-8">

        {/* ── Cabecera ── */}
        {step !== "ok" && step !== "ko" && (
          <>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8] mb-2" style={{ fontWeight: 700 }}>
              Red MasOrange
            </p>
            <h2 className={`text-[#1A1A1A] tracking-tight mb-5 ${compact ? "text-xl" : "text-2xl"}`} style={{ fontWeight: 700 }}>
              ¿Tienes cobertura en tu dirección?
            </h2>
          </>
        )}

        {/* ══ PASO 1 — Búsqueda ══ */}
        {(step === "search" || step === "checking") && (
          <div ref={dropRef} className="relative">
            <div className="relative flex items-center">
              {/* Lupa */}
              <svg className="absolute left-4 h-5 w-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>

              <input
                type="text"
                value={query}
                onChange={handleInput}
                placeholder="Escribe tu dirección..."
                autoComplete="off"
                disabled={step === "checking"}
                className="w-full rounded-none border-2 border-[#1648D8]/30 bg-white py-3.5 pl-12 pr-12 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#1648D8] focus:ring-2 focus:ring-[#1648D8]/20 disabled:opacity-50 placeholder:text-gray-300"
              />

              {/* Spinner */}
              {loading && (
                <div className="absolute right-4">
                  <svg className="h-5 w-5 animate-spin text-[#1648D8]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                </div>
              )}
            </div>

            {/* Desplegable direcciones */}
            {dropOpen && addresses.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-50 border-2 border-t-0 border-[#1648D8]/30 bg-white shadow-xl max-h-60 overflow-y-auto">
                {addresses.map((a, i) => (
                  <button key={i} onClick={() => handleSelectAddress(a)}
                    className="flex w-full items-start gap-3 px-4 py-3 text-left text-sm text-gray-700 transition-colors hover:bg-[#EEF2FF]">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1648D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="leading-snug">{a.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Checking */}
            {step === "checking" && (
              <div className="mt-4 flex items-center gap-3 text-sm text-[#1648D8]">
                <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span style={{ fontWeight: 600 }}>Comprobando cobertura en tu dirección…</span>
              </div>
            )}
          </div>
        )}

        {/* ══ PASO 2 — Selector de portal ══ */}
        {step === "portal" && (
          <div>
            <p className="mb-3 text-sm text-gray-600">Hemos encontrado varios portales. Selecciona el tuyo:</p>
            <div className="flex flex-col gap-2 max-h-56 overflow-y-auto pr-1">
              {buildings.map((b, i) => (
                <button key={i} onClick={() => handleSelectPortal(b)}
                  className="flex items-center justify-between border-2 border-[#1648D8]/20 bg-white px-4 py-3 text-sm text-[#1A1A1A] transition-all hover:border-[#1648D8] hover:bg-[#EEF2FF]"
                  style={{ fontWeight: 600 }}>
                  <span>{b.label}</span>
                  {loading && portal?.gescal37 === b.gescal37
                    ? <svg className="h-4 w-4 animate-spin text-[#1648D8]" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                    : <svg className="h-4 w-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  }
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ══ RESULTADO OK ══ */}
        {step === "ok" && (
          <div>
            {/* Animación check */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center bg-[#DCFCE7]"
                style={{ animation: "fadeUp 0.4s ease both" }}>
                <svg className="h-8 w-8 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl text-[#1A1A1A]" style={{ fontWeight: 700 }}>¡Perfecto! Tenemos cobertura en tu dirección.</h3>
              {tecnologia && (
                <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#EEF2FF] px-3 py-1 text-xs text-[#1648D8]" style={{ fontWeight: 700 }}>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1648D8] inline-block" />
                  Tecnología: {tecnologia}
                </span>
              )}
              <p className="mt-2 text-sm text-gray-400">{query}</p>
            </div>

            {/* Cards tarifas estrella */}
            <div className="grid gap-4 sm:grid-cols-3 mb-6">
              {STAR_TARIFAS.map((t) => {
                const [ent, dec] = t.precio.split(",");
                return (
                  <div key={t.nombre} className="border border-gray-200 bg-white p-4 flex flex-col">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#1648D8] mb-1" style={{ fontWeight: 700 }}>{t.nombre}</p>
                    <div className="flex items-end gap-0.5 leading-none my-2">
                      <span className="text-[36px] leading-none tracking-tighter text-[#1648D8]" style={{ fontWeight: 800 }}>{ent}</span>
                      <span className="mb-1 text-base text-[#1648D8]" style={{ fontWeight: 700 }}>,{dec}€</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-3 flex-1">{t.desc}</p>
                    <a href={`https://wa.me/${WA}?text=${encodeURIComponent(t.wa)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="block w-full py-2 text-center text-xs text-black hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#00B96B", fontWeight: 600 }}>
                      Contratar →
                    </a>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent(`Hola, he comprobado que tengo cobertura en mi dirección (${query}) y quiero contratar.`)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 text-sm text-black bg-[#00B96B] hover:bg-[#009A59] transition-colors"
                style={{ fontWeight: 700 }}>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Hablar por WhatsApp
              </a>
              <button onClick={reset}
                className="px-5 py-3 text-sm text-gray-500 border border-gray-200 hover:border-gray-400 transition-colors">
                Buscar otra dirección
              </button>
            </div>
          </div>
        )}

        {/* ══ RESULTADO KO ══ */}
        {step === "ko" && (
          <div>
            {/* Animación reloj naranja */}
            <div className="flex flex-col items-center text-center mb-6">
              <div className="mb-4 flex h-16 w-16 items-center justify-center bg-orange-100"
                style={{ animation: "fadeUp 0.4s ease both" }}>
                <svg className="h-8 w-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl text-[#1A1A1A]" style={{ fontWeight: 700 }}>Aún no llegamos a tu zona, pero estamos expandiéndonos.</h3>
              <p className="mt-2 text-sm text-gray-400 max-w-sm">Déjanos tus datos y te avisamos en cuanto tengamos cobertura en tu dirección.</p>
            </div>

            {wlSent ? (
              <div className="bg-orange-50 border border-orange-200 px-5 py-4 text-center">
                <p className="text-sm text-orange-700" style={{ fontWeight: 600 }}>
                  ✓ ¡Apuntado! Te avisamos en cuanto tengamos cobertura en tu dirección.
                </p>
              </div>
            ) : (
              <form onSubmit={handleWaitlist} className="flex flex-col gap-3">
                <div className="grid grid-cols-2 gap-3">
                  <input required type="text" placeholder="Nombre" value={waitlist.nombre}
                    onChange={e => setWaitlist({ ...waitlist, nombre: e.target.value })}
                    className="border-2 border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#1648D8] transition-colors placeholder:text-gray-300" />
                  <input required type="email" placeholder="Email" value={waitlist.email}
                    onChange={e => setWaitlist({ ...waitlist, email: e.target.value })}
                    className="border-2 border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#1648D8] transition-colors placeholder:text-gray-300" />
                </div>
                <input required type="tel" placeholder="Teléfono" value={waitlist.telefono}
                  onChange={e => setWaitlist({ ...waitlist, telefono: e.target.value })}
                  className="border-2 border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-[#1648D8] transition-colors placeholder:text-gray-300" />
                <button type="submit" disabled={wlLoading}
                  className="py-3 text-sm text-white transition-opacity hover:opacity-90 disabled:opacity-60"
                  style={{ backgroundColor: "#F59E0B", fontWeight: 700 }}>
                  {wlLoading
                    ? "Enviando…"
                    : "Avísame cuando llegue →"}
                </button>
              </form>
            )}

            <button onClick={reset}
              className="mt-3 w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors py-1 underline underline-offset-2">
              Probar con otra dirección
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
