"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const WA    = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const PHONE = process.env.NEXT_PUBLIC_PHONE    || "+34621192578";

export default function MobileBar() {
  const pathname = usePathname();

  const isEmpresasPage =
    pathname.startsWith("/empresas") || pathname.startsWith("/fibraempresabarata");

  const waMsg = isEmpresasPage
    ? encodeURIComponent("Hola, quiero hablar con un asesor de Arista para empresas.")
    : encodeURIComponent("Hola, quiero información sobre Arista Group.");

  const midLink = isEmpresasPage
    ? { href: "/fibraempresabarata", label: "Empresas", icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )}
    : { href: "/tarifas", label: "Tarifas", icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )};

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 md:hidden"
      style={{
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="flex items-stretch h-[60px]">

        {/* Llamar */}
        <a
          href={`tel:${PHONE}`}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 text-gray-500 active:bg-gray-50 transition-colors"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[10px]" style={{ fontWeight: 600 }}>Llamar</span>
        </a>

        {/* Divisor */}
        <div className="w-px bg-gray-100 my-2" />

        {/* Tarifas / Empresas — botón central destacado */}
        <Link
          href={midLink.href}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 active:opacity-80 transition-opacity"
          style={{
            background: "linear-gradient(135deg,#1648D8,#2563EB)",
            color: "white",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {midLink.icon}
          <span className="text-[10px]" style={{ fontWeight: 700 }}>{midLink.label}</span>
        </Link>

        {/* Divisor */}
        <div className="w-px bg-gray-100 my-2" />

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WA}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 active:opacity-80 transition-opacity"
          style={{
            background: "linear-gradient(135deg,#25D366,#1DA851)",
            color: "white",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="text-[10px]" style={{ fontWeight: 700 }}>WhatsApp</span>
        </a>

      </div>
    </div>
  );
}
