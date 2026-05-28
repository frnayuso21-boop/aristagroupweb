"use client";

import { useState, useEffect } from "react";

const WA  = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const MSG = encodeURIComponent(
  "Hola! He visto la promoción del Pack Pareja y quiero el 1er mes GRATIS — Fibra 600Mb + 2 móviles 30GB."
);

export default function PromoGift() {
  const [open, setOpen]       = useState(false);
  const [visible, setVisible] = useState(false);

  // Aparece tras 4 segundos
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Botón flotante — cesta de regalo */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Promoción 1 mes gratis Pack Pareja"
        className="fixed bottom-[88px] right-4 z-40 flex flex-col items-center gap-1 group md:bottom-6"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        {/* Burbuja animada */}
        <div className="relative flex h-[58px] w-[58px] items-center justify-center rounded-full shadow-xl transition-transform duration-200 group-hover:scale-110 group-active:scale-95"
          style={{ background: "linear-gradient(135deg, #FF6B35 0%, #FF3D71 100%)" }}>
          {/* Ping de atención */}
          <span className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ background: "linear-gradient(135deg, #FF6B35, #FF3D71)" }} />
          {/* Icono cesta regalo */}
          <svg className="h-7 w-7 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
              d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
          </svg>
          {/* Badge rojo */}
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] text-[#FF3D71] shadow"
            style={{ fontWeight: 900 }}>
            1
          </span>
        </div>
        <span className="rounded-full bg-white px-2 py-0.5 text-[10px] shadow text-gray-700 whitespace-nowrap"
          style={{ fontWeight: 700 }}>
          Regalo 🎁
        </span>
      </button>

      {/* Overlay + Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
          onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <div
            className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cabecera degradado */}
            <div className="relative px-6 pt-8 pb-6 text-center"
              style={{ background: "linear-gradient(135deg, #FF6B35 0%, #FF3D71 100%)" }}>
              {/* Botón cerrar */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                aria-label="Cerrar">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Icono grande */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                <svg className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
                </svg>
              </div>

              <p className="text-[11px] uppercase tracking-[0.3em] text-white/70 mb-1" style={{ fontWeight: 700 }}>
                Promoción exclusiva
              </p>
              <h2 className="text-3xl text-white leading-tight" style={{ fontWeight: 900 }}>
                1 mes GRATIS
              </h2>
              <p className="mt-1 text-white/80 text-sm">Solo por contratar hoy</p>
            </div>

            {/* Cuerpo */}
            <div className="bg-white px-6 pt-5 pb-6">
              {/* Oferta */}
              <div className="rounded-2xl border-2 border-[#FF3D71]/20 bg-[#FFF5F7] p-4 mb-5">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#FF3D71] mb-2" style={{ fontWeight: 700 }}>
                  Pack Pareja — lo que recibes GRATIS
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { icon: "🌐", txt: "Fibra 600Mb simétrica" },
                    { icon: "📱", txt: "2 móviles 30GB 5G" },
                    { icon: "🔓", txt: "Sin permanencia" },
                    { icon: "⚡", txt: "Alta en 24 horas" },
                  ].map((f) => (
                    <div key={f.txt} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-base">{f.icon}</span>
                      {f.txt}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl text-[#FF3D71]" style={{ fontWeight: 900 }}>0€</span>
                  <span className="text-sm text-gray-400 mb-1">primer mes <span className="line-through">35,90€</span></span>
                </div>
              </div>

              {/* CTA WhatsApp */}
              <a
                href={`https://wa.me/${WA}?text=${MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full rounded-2xl py-4 text-white text-base shadow-lg transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, #FF6B35 0%, #FF3D71 100%)", fontWeight: 700 }}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Quiero mi mes gratis
              </a>

              <p className="mt-3 text-center text-[11px] text-gray-400">
                Oferta válida hoy · Sin letra pequeña · Sin permanencia
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
