"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

type Msg = { from: "bot" | "user"; text: string };

// ── Modo del chat ─────────────────────────────────────────────────────────────
type CovStep =
  | "idle"               // chat normal
  | "awaiting_address"   // esperando que el usuario escriba su dirección
  | "awaiting_building"; // esperando que el usuario elija portal/número

interface CovData {
  addresses: { label: string; gescal: string; sessionId: string }[];
  selectedAddress: { label: string; gescal: string; sessionId: string } | null;
  buildings: { label: string; gescal37: string }[];
}

// ── FAQ básica (sin cobertura, que se gestiona aparte) ────────────────────────
const FAQ: { keywords: string[]; answer: string; waText?: string }[] = [
  {
    keywords: ["precio", "cuánto", "cuanto", "coste", "tarifa", "tarifas"],
    answer: "Nuestros packs van desde **24,90€/mes** (fibra 600Mb) hasta **60€/mes** (Pack Familiar). ¿Cuál te interesa más?",
  },
  {
    keywords: ["pack familiar", "familiar", "3 moviles", "tv"],
    answer: "**Pack Familiar** — Fibra 600Mb + 3 móviles ilimitados 5G + TV por **60€/mes**, sin permanencia.",
    waText: "Quiero información sobre el Pack Familiar — Fibra + 3 móviles + TV por 60€/mes.",
  },
  {
    keywords: ["pack pareja", "pareja", "2 moviles", "30gb"],
    answer: "**Pack Pareja** — Fibra 600Mb + 2 móviles 30GB 5G por **35,90€/mes**, sin permanencia.",
    waText: "Quiero el Pack Pareja — Fibra + 2 móviles 30GB por 35,90€/mes.",
  },
  {
    keywords: ["infinity", "ilimitado", "1 movil", "un movil"],
    answer: "**Arista Infinity** — Fibra 600Mb + 1 móvil ilimitado 5G por **40,90€/mes**, sin permanencia.",
    waText: "Quiero Arista Infinity — Fibra + Móvil ilimitado por 40,90€/mes.",
  },
  {
    keywords: ["solo fibra", "fibra sola", "solo internet", "fibra 600"],
    answer: "**Solo Fibra** — 600Mb simétrica por **24,90€/mes**, sin permanencia, router WiFi incluido.",
    waText: "Quiero Solo Fibra 600Mb por 24,90€/mes.",
  },
  {
    keywords: ["permanencia", "contrato", "compromiso", "penalización"],
    answer: "**Ninguna tarifa tiene permanencia.** Puedes darte de baja cuando quieras, sin ningún coste.",
  },
  {
    keywords: ["cobertura", "llega", "zona", "mi barrio", "hay cobertura", "teneis cobertura", "tienes cobertura", "dirección", "direccion"],
    answer: "Claro, puedo comprobarlo ahora mismo. **¿Cuál es tu dirección completa?**\n(Ej: Calle Mayor 12, Alicante)",
    _triggerCov: true,
  } as { keywords: string[]; answer: string; waText?: string; _triggerCov?: boolean },
  {
    keywords: ["alta", "cuánto tarda", "cuanto tarda", "tiempo", "instalación"],
    answer: "El alta tarda **24-48 horas laborables**. La instalación de fibra es completamente gratuita.",
  },
  {
    keywords: ["número", "numero", "portabilidad", "conservar"],
    answer: "Sí, **conservas tu número sin problema**. La portabilidad es gratuita y la gestionamos nosotros.",
  },
  {
    keywords: ["contratar", "quiero", "me interesa", "empezar"],
    answer: "¡Perfecto! Te paso ahora con el equipo por WhatsApp y te damos de alta en minutos 🚀",
    waText: "Hola, quiero contratar una tarifa con Arista Group.",
  },
  {
    keywords: ["energía", "energia", "luz", "gas"],
    answer: "También ofrecemos **Arista Energía** — luz y gas a precio justo para hogares en Alicante.",
    waText: "Quiero información sobre Arista Energía.",
  },
  {
    keywords: ["hola", "buenas", "hey", "ola"],
    answer: "¡Hola! 😊 Soy **IARIS**, la asistente de Arista Group. ¿Buscas fibra, móvil o energía?",
  },
];

const QUICK = [
  { label: "📋 Ver tarifas",    q: "¿Cuáles son las tarifas?" },
  { label: "📍 Cobertura",      q: "¿Tenéis cobertura en mi zona?" },
  { label: "🔒 ¿Permanencia?",  q: "¿Hay permanencia?" },
  { label: "⚡ Contratar ya",   q: "Quiero contratar" },
];

function findAnswer(input: string): { answer: string; waText?: string; _triggerCov?: boolean } | null {
  const low = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (const faq of FAQ) {
    if (faq.keywords.some((k) => low.includes(k.normalize("NFD").replace(/[\u0300-\u036f]/g, "")))) {
      return faq as { answer: string; waText?: string; _triggerCov?: boolean };
    }
  }
  return null;
}

function renderText(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br/>");
}

export default function IarisChat() {
  const [open, setOpen]       = useState(false);
  const [msgs, setMsgs]       = useState<Msg[]>([
    { from: "bot", text: "¡Hola! 👋 Soy **IARIS**, tu asistente de Arista Group. ¿En qué puedo ayudarte hoy?" },
  ]);
  const [input, setInput]     = useState("");
  const [typing, setTyping]   = useState(false);
  const [isNew, setIsNew]     = useState(true);
  const [covStep, setCovStep] = useState<CovStep>("idle");
  const [covData, setCovData] = useState<CovData>({
    addresses: [], selectedAddress: null, buildings: [],
  });
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing, open]);

  useEffect(() => {
    if (open) setIsNew(false);
  }, [open]);

  // ── Helpers para añadir mensajes ─────────────────────────────────────────────
  function addBot(text: string) {
    setMsgs((p) => [...p, { from: "bot", text }]);
  }
  function addUser(text: string) {
    setMsgs((p) => [...p, { from: "user", text }]);
  }

  // ── Flujo de cobertura ────────────────────────────────────────────────────────
  const checkCovFlow = useCallback(async (userText: string) => {
    setTyping(true);

    // PASO 1: buscar dirección
    if (covStep === "awaiting_address") {
      try {
        const res  = await fetch(`/api/coverage/address?q=${encodeURIComponent(userText)}`);
        const data = await res.json() as { addresses: { label: string; gescal: string; sessionId: string }[] };
        const addrs = data.addresses ?? [];

        if (addrs.length === 0) {
          setTyping(false);
          addBot("No encontré esa dirección. Prueba con el formato **Calle Nombre Número, Ciudad** o escríbenos por WhatsApp 👇");
          setTimeout(() => addBot(`__wa__Hola, quiero comprobar cobertura en: ${userText}`), 400);
          setCovStep("idle");
          return;
        }

        // Tomar la primera coincidencia
        const addr = addrs[0];
        setCovData((p) => ({ ...p, addresses: addrs, selectedAddress: addr }));

        // Paso 2: obtener portales/edificios
        const res2  = await fetch(`/api/coverage/buildings?gescal=${encodeURIComponent(addr.gescal)}&sessionId=${encodeURIComponent(addr.sessionId)}`);
        const data2 = await res2.json() as { buildings: { label: string; gescal37: string }[] };
        const buildings = data2.buildings ?? [];

        if (buildings.length === 0) {
          // Sin portales diferenciados → comprobar directamente con gescal17
          const res3  = await fetch("/api/coverage/check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ gescal37: addr.gescal, sessionId: addr.sessionId }),
          });
          const cov = await res3.json() as { valid: boolean; technology?: string; city?: string };
          setTyping(false);
          showCovResult(cov, addr.label);
          setCovStep("idle");
          return;
        }

        if (buildings.length === 1) {
          // Solo un portal → comprobar directamente
          const b = buildings[0];
          const res3  = await fetch("/api/coverage/check", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ gescal37: b.gescal37, sessionId: addr.sessionId }),
          });
          const cov = await res3.json() as { valid: boolean; technology?: string; city?: string };
          setTyping(false);
          showCovResult(cov, `${addr.label} ${b.label}`);
          setCovStep("idle");
          return;
        }

        // Varios portales → preguntar cuál
        setCovData((p) => ({ ...p, buildings }));
        setTyping(false);
        const opciones = buildings.slice(0, 6).map((b, i) => `**${i + 1}.** ${b.label}`).join("\n");
        addBot(`Encontré **${addr.label}**. ¿Cuál es tu portal o número de escalera?\n\n${opciones}`);
        addBot("__BUILDING_BUTTONS__");
        setCovStep("awaiting_building");

      } catch {
        setTyping(false);
        addBot("Hubo un error al consultar la cobertura. Por favor, inténtalo de nuevo o contáctanos por WhatsApp 👇");
        setTimeout(() => addBot(`__wa__Hola, quiero comprobar cobertura en: ${userText}`), 400);
        setCovStep("idle");
      }
      return;
    }

    // PASO 2: elegir edificio (el usuario escribe número o texto)
    if (covStep === "awaiting_building") {
      const { buildings, selectedAddress } = covData;
      if (!selectedAddress) { setTyping(false); setCovStep("idle"); return; }

      // Intentar match por número o texto
      const num = parseInt(userText, 10);
      let building = isNaN(num) ? null : buildings[num - 1];
      if (!building) {
        const low = userText.toLowerCase();
        building = buildings.find((b) => b.label.toLowerCase().includes(low)) ?? buildings[0];
      }

      try {
        const res  = await fetch("/api/coverage/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ gescal37: building.gescal37, sessionId: selectedAddress.sessionId }),
        });
        const cov = await res.json() as { valid: boolean; technology?: string; city?: string };
        setTyping(false);
        showCovResult(cov, `${selectedAddress.label} ${building.label}`);
      } catch {
        setTyping(false);
        addBot("Hubo un error al comprobar la cobertura. Contáctanos por WhatsApp 👇");
        setTimeout(() => addBot(`__wa__Hola, quiero comprobar cobertura en: ${selectedAddress.label}`), 400);
      }
      setCovStep("idle");
    }
  }, [covStep, covData]);

  function showCovResult(cov: { valid: boolean; technology?: string; city?: string }, label: string) {
    if (cov.valid) {
      addBot(`✅ **¡Tenemos cobertura en ${label}!**\n\nTecnología: **${cov.technology || "Fibra FTTH"}** — hasta 1Gb simétrico.\n\n¿Quieres que te llamemos para darte de alta hoy?`);
      setTimeout(() => addBot("__wa__Hola, he comprobado la cobertura en mi dirección y está disponible. Quiero contratar."), 500);
    } else {
      addBot(`😔 Lo sentimos, de momento **no tenemos cobertura** en **${label}**.\n\nPuedes dejarnos tu contacto y te avisamos en cuanto llegue a tu zona.`);
      setTimeout(() => addBot(`__wa__Hola, no hay cobertura en ${label}. Quiero que me aviseis cuando llegue.`), 500);
    }
  }

  // ── Enviar mensaje ────────────────────────────────────────────────────────────
  const send = useCallback((text: string) => {
    if (!text.trim()) return;
    addUser(text);
    setInput("");

    // Si estamos en flujo de cobertura, procesar
    if (covStep === "awaiting_address" || covStep === "awaiting_building") {
      checkCovFlow(text);
      return;
    }

    // Chat normal con keyword matching
    setTyping(true);
    setTimeout(() => {
      const found = findAnswer(text) as { answer: string; waText?: string; _triggerCov?: boolean } | null;

      if (found?._triggerCov) {
        setTyping(false);
        addBot(found.answer);
        setCovStep("awaiting_address");
        return;
      }

      const reply = found?.answer ?? "No tengo esa información exacta, pero el equipo te ayuda ahora mismo 😊";
      addBot(reply);
      if (found?.waText) {
        setTimeout(() => addBot(`__wa__${found.waText}`), 400);
      } else if (!found) {
        setTimeout(() => addBot(`__wa__Hola, necesito ayuda con Arista Group.`), 400);
      }
      setTyping(false);
    }, 700);
  }, [covStep, checkCovFlow]);

  // ── Botones de portal (cuando hay varios edificios) ───────────────────────────
  function BuildingButtons() {
    const { buildings } = covData;
    if (!buildings.length) return null;
    return (
      <div className="flex flex-wrap gap-1.5 mt-1 pl-7">
        {buildings.slice(0, 6).map((b, i) => (
          <button key={b.gescal37}
            onClick={() => send(`${i + 1}`)}
            className="rounded-full border border-[#1648D8]/20 bg-[#EEF2FF] px-2.5 py-1 text-[11px] text-[#1648D8] hover:bg-[#1648D8] hover:text-white transition-all"
            style={{ fontWeight: 600 }}>
            {b.label}
          </button>
        ))}
      </div>
    );
  }

  // ── Renderizado ───────────────────────────────────────────────────────────────
  return (
    <div className="fixed z-50 flex flex-col items-start gap-2 bottom-[72px] left-4 w-[calc(100vw-32px)] max-w-[320px] md:bottom-6 md:left-6 md:w-[320px]">

      {open && (
        <div className="w-full flex flex-col rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-gray-100 bg-white"
          style={{ height: "min(480px, calc(100dvh - 160px))" }}>

          {/* Header */}
          <div className="relative flex items-end gap-3 px-4 pt-4 pb-3 flex-shrink-0 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1648D8 0%, #0f3ab0 100%)" }}>
            <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="pointer-events-none absolute right-8 bottom-0 h-16 w-16 rounded-full bg-white/5 translate-y-1/2" />
            <div className="relative flex-shrink-0">
              <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-white/40 shadow-lg">
                <Image src="/iaris-avatar.png" alt="IARIS" width={48} height={48} className="object-cover object-top w-full h-full" />
              </div>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#00B96B] ring-2 ring-[#1648D8]" />
            </div>
            <div className="flex-1 min-w-0 pb-0.5">
              <div className="flex items-center gap-1.5">
                <p className="text-sm text-white leading-none" style={{ fontWeight: 800 }}>IARIS</p>
                <span className="rounded-full bg-white/15 px-1.5 py-0.5 text-[9px] text-white/80 uppercase tracking-wider" style={{ fontWeight: 700 }}>IA</span>
              </div>
              <p className="mt-0.5 text-[10px] text-white/60">
                {covStep === "awaiting_address"  ? "Comprobando cobertura…" :
                 covStep === "awaiting_building" ? "Selecciona tu portal" :
                 "Asistente Arista · En línea ahora"}
              </p>
            </div>
            <button onClick={() => setOpen(false)}
              className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-white/20 hover:text-white transition-all"
              aria-label="Cerrar">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-[#F7F9FF]" style={{ minHeight: 0 }}>
            {msgs.map((m, i) => {
              // Botón WhatsApp
              if (m.from === "bot" && m.text.startsWith("__wa__")) {
                const waText = m.text.replace("__wa__", "");
                return (
                  <div key={i} className="flex justify-start">
                    <a href={`https://wa.me/${WA}?text=${encodeURIComponent(waText)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-2xl bg-[#25D366] px-3.5 py-2.5 text-xs text-white hover:bg-[#1da852] transition-colors shadow-sm"
                      style={{ fontWeight: 700 }}>
                      <svg className="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Continuar en WhatsApp →
                    </a>
                  </div>
                );
              }

              // Botones de portal/edificio
              if (m.from === "bot" && m.text === "__BUILDING_BUTTONS__") {
                return <BuildingButtons key={i} />;
              }

              return (
                <div key={i} className={`flex items-end gap-1.5 ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  {m.from === "bot" && (
                    <div className="h-6 w-6 flex-shrink-0 rounded-full overflow-hidden ring-1 ring-[#1648D8]/20 mb-0.5">
                      <Image src="/iaris-avatar.png" alt="IARIS" width={24} height={24} className="object-cover object-top" />
                    </div>
                  )}
                  <div className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    m.from === "user"
                      ? "bg-[#1648D8] text-white rounded-br-sm"
                      : "bg-white text-gray-700 border border-gray-100 rounded-bl-sm shadow-sm"
                  }`}
                    dangerouslySetInnerHTML={{ __html: renderText(m.text) }}
                  />
                </div>
              );
            })}

            {typing && (
              <div className="flex items-end gap-1.5 justify-start">
                <div className="h-6 w-6 flex-shrink-0 rounded-full overflow-hidden ring-1 ring-[#1648D8]/20">
                  <Image src="/iaris-avatar.png" alt="IARIS" width={24} height={24} className="object-cover object-top" />
                </div>
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-gray-100 bg-white px-3.5 py-3 shadow-sm">
                  {[0, 150, 300].map((d) => (
                    <span key={d} className="h-1.5 w-1.5 rounded-full bg-[#1648D8]/40 animate-bounce"
                      style={{ animationDelay: `${d}ms` }} />
                  ))}
                </div>
              </div>
            )}

            {/* Hint contextual durante flujo de cobertura */}
            {covStep === "awaiting_address" && !typing && (
              <div className="mx-auto rounded-xl bg-[#EEF2FF] border border-[#1648D8]/10 px-3 py-2 text-[10px] text-[#1648D8] text-center max-w-[220px]"
                style={{ fontWeight: 600 }}>
                📍 Ej: Calle Mayor 12, Alicante
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          {msgs.length <= 2 && covStep === "idle" && (
            <div className="border-t border-gray-100 bg-white px-3 pt-2.5 pb-2 flex-shrink-0">
              <p className="text-[10px] text-gray-400 mb-1.5 uppercase tracking-wider" style={{ fontWeight: 600 }}>Preguntas rápidas</p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK.map((qr) => (
                  <button key={qr.q} onClick={() => send(qr.q)}
                    className="rounded-full border border-[#1648D8]/20 bg-[#EEF2FF] px-2.5 py-1 text-[11px] text-[#1648D8] hover:bg-[#1648D8] hover:text-white transition-all"
                    style={{ fontWeight: 600 }}>
                    {qr.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="flex items-center gap-2 border-t border-gray-100 bg-white px-3 py-2.5 flex-shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                covStep === "awaiting_address"  ? "Tu dirección completa…" :
                covStep === "awaiting_building" ? "Escribe tu portal o número…" :
                "Escribe tu pregunta…"
              }
              className="flex-1 rounded-xl border border-gray-200 bg-[#F7F9FF] px-3 py-2 text-xs text-gray-700 outline-none focus:border-[#1648D8] focus:ring-1 focus:ring-[#1648D8]/20 transition-colors"
            />
            <button type="submit"
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl transition-all hover:brightness-110 active:scale-95"
              style={{ backgroundColor: "#1648D8" }}>
              <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Botón flotante */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="group flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl transition-all hover:shadow-3xl hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(135deg, #1648D8 0%, #0f3ab0 100%)" }}
          aria-label="Abrir IARIS">
          <div className="relative flex-shrink-0">
            <div className="h-9 w-9 rounded-full overflow-hidden ring-2 ring-white/30">
              <Image src="/iaris-avatar.png" alt="IARIS" width={36} height={36} className="object-cover object-top w-full h-full" />
            </div>
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#00B96B] ring-2 ring-[#1648D8]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-white leading-none" style={{ fontWeight: 700 }}>IARIS</span>
            <span className="text-[10px] text-white/60 leading-none mt-0.5">¿En qué puedo ayudarte?</span>
          </div>
          {isNew && (
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#E53E3E] text-[10px] text-white ml-auto"
              style={{ fontWeight: 800 }}>
              1
            </span>
          )}
        </button>
      )}
    </div>
  );
}
