"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

declare global {
  interface Window {
    aristaSetLang: (lang: string) => void;
  }
}

const LOCALE_PREFIXES = ["en", "fr", "ru"];

function stripLocale(pathname: string): string {
  for (const l of LOCALE_PREFIXES) {
    if (pathname === `/${l}`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname;
}

const navLinks = [
  { href: "/tarifas",  label: "Tarifas" },
];

const topLinks = [
  { href: "/", label: "Particulares" },
];

const WA    = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const PHONE = process.env.NEXT_PUBLIC_PHONE    || "+34621192578";

const IDIOMAS = [
  { code: "es", flag: "🇪🇸", label: "ES" },
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
  { code: "ru", flag: "🇷🇺", label: "RU" },
];

interface CallbackForm {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  direccion: string;
}

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  // Detectar idioma activo desde la URL
  const detectedLang = IDIOMAS.find(l => pathname === `/${l.code}` || pathname.startsWith(`/${l.code}/`)) ?? IDIOMAS[0];
  const [activeLang, setActiveLang] = useState(detectedLang);
  const [empresasOpen, setEmpresasOpen] = useState(false);
  const [hoguerasBanner, setHoguerasBanner] = useState(true);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);
  const [giftTooltip, setGiftTooltip] = useState(true);
  const [form, setForm] = useState<CallbackForm>({ nombre: "", apellidos: "", email: "", telefono: "", direccion: "" });
  const [enviado, setEnviado] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const empresasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
      if (empresasRef.current && !empresasRef.current.contains(e.target as Node)) {
        setEmpresasOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (callbackOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => { setEnviado(false); setForm({ nombre: "", apellidos: "", email: "", telefono: "", direccion: "" }); }, 300);
    }
    return () => { document.body.style.overflow = ""; };
  }, [callbackOpen]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Enviar email a info@aristamovil.com
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "callback",
          "Nombre":    `${form.nombre} ${form.apellidos}`,
          "Email":     form.email,
          "Telefono":  form.telefono,
          "Direccion": form.direccion || "—",
        }),
      });
    } catch (_) { /* fallback silencioso */ }
    setEnviado(true);
  }

  const isEmpresasPage =
    pathname.startsWith("/empresas") || pathname.startsWith("/fibraempresabarata");

  return (
    <>
      {/* ── Tira superior fina ─────────────────────────────── */}
      <div className="fixed inset-x-0 top-0 z-[60] h-9 bg-[#1648D8]">
        <div className="flex h-full w-full items-center justify-between px-6 lg:px-10">

          {/* Móvil: teléfono centrado */}
          <a href={`tel:${PHONE}`}
            className="flex items-center gap-1.5 text-[11px] font-bold text-white sm:hidden">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {PHONE}
          </a>

          {/* Izquierda — Particulares + Empresas (solo desktop) */}
          <div className="hidden items-center gap-4 sm:flex">
            {/* Particulares */}
            <Link href="/"
              className="text-[11px] font-bold tracking-wide text-white transition-colors hover:text-white/70">
              Particulares
            </Link>

            <span className="text-white/30">|</span>

            {/* Distribuidores */}
            <Link href="/distribuidores"
              className="text-[11px] font-bold tracking-wide text-white transition-colors hover:text-white/70">
              Distribuidores
            </Link>

            <span className="text-white/30">|</span>

            {/* Empresas — link directo */}
            <Link
              href="/fibraempresabarata"
              className="text-[11px] font-bold tracking-wide text-white transition-colors hover:text-white/70"
            >
              Empresas
            </Link>
          </div>

          {/* Derecha — idioma · teléfono · ayuda · atención (solo desktop) */}
          <div className="hidden items-center gap-3 sm:flex">

            {/* Selector de idioma */}
            <div className="relative" ref={langRef}>
              <button onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-[11px] font-bold text-white transition-colors hover:text-white/70">
                <span>{activeLang.label}</span>
                <svg className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-20 rounded-lg border border-white/10 bg-[#0D47A1] py-1 shadow-xl z-[70]">
                  {IDIOMAS.map((l) => (
                    <button key={l.code} onClick={() => {
                      setActiveLang(l);
                      setLangOpen(false);
                      // Navegar a la URL con prefijo de idioma
                      const base = stripLocale(pathname);
                      const target = l.code === "es" ? base : `/${l.code}${base === "/" ? "" : base}`;
                      router.push(target);
                      // También llamar a aristaSetLang para que Google Translate traduzca
                      if (typeof window !== "undefined" && window.aristaSetLang) {
                        window.aristaSetLang(l.code);
                      }
                    }}
                      className={`flex w-full items-center justify-between px-3 py-1.5 text-[11px] transition-colors hover:bg-white/10 ${activeLang.code === l.code ? "text-white font-bold" : "text-white/55"}`}>
                      <span>{l.label}</span>
                      {activeLang.code === l.code && (
                        <svg className="h-2.5 w-2.5 text-[#00B96B]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <span className="text-white/30">|</span>

            <a href={`tel:${PHONE}`} className="flex items-center gap-1.5 text-[11px] font-bold text-white transition-colors hover:text-white/70">
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {PHONE}
            </a>

            <span className="text-white/30">|</span>

            <Link href="/ayuda" className="flex items-center gap-1 text-[11px] font-bold text-white transition-colors hover:text-white/70">
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ayuda
            </Link>

            <span className="text-white/30">|</span>

            <Link href="/atencion-al-cliente"
              className="rounded-md border border-white/40 px-3 py-0.5 text-[11px] font-bold text-white transition-colors hover:border-white hover:bg-white/10">
              Atención al cliente
            </Link>
          </div>

        </div>
      </div>

      {/* ── Banner Hogueras de Alicante ────────────────────── */}
      {hoguerasBanner && new Date() < new Date("2026-06-25T00:00:00") && (
        <div className="fixed inset-x-0 top-9 z-[55] bg-[#F59E0B] border-b border-[#D97706]"
          style={{ marginTop: "72px" }}>
          {/* Desktop */}
          <div className="hidden sm:flex mx-auto max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
            <div className="flex flex-1 items-center justify-center gap-3 text-center">
              <p className="text-[13px] text-black tracking-[0.2em] uppercase" style={{ fontWeight: 700 }}>
                🔥 Oferta Hogueras — Primer mes gratis
                <span className="mx-3 text-black/30">·</span>
                <span className="text-black" style={{ fontWeight: 500 }}>Solo del 19 al 24 de junio</span>
                <span className="mx-3 text-black/30">·</span>
                <Link href="/hogueras" className="underline underline-offset-2 text-black hover:text-black/70 transition-colors" style={{ fontWeight: 600 }}>
                  Ver oferta →
                </Link>
              </p>
            </div>
            <button onClick={() => setHoguerasBanner(false)} aria-label="Cerrar banner"
              className="ml-4 flex-shrink-0 text-black/50 hover:text-black transition-colors">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Móvil — versión compacta */}
          <div className="flex sm:hidden items-center justify-between px-3 py-1">
            <Link href="/hogueras" className="text-[11px] text-black" style={{ fontWeight: 700 }}>
              🔥 Hogueras — Primer mes GRATIS →
            </Link>
            <button onClick={() => setHoguerasBanner(false)} aria-label="Cerrar banner"
              className="ml-2 flex-shrink-0 text-black/50"
              style={{ WebkitTapHighlightColor: "transparent" }}>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Banner principal ───────────────────────────────── */}
      <header className="fixed inset-x-0 top-9 z-50 h-[72px] border-b border-gray-100 bg-white overflow-visible">


        {/* ══ LAYOUT MÓVIL (< md) ══════════════════════════════ */}
        <div className="flex h-full w-full items-center justify-between px-4 md:hidden">

          {/* Izquierda — Burger AZUL */}
          <button onClick={() => setOpen(!open)} aria-label="Abrir menú"
            className="flex flex-col gap-[5px] p-2 touch-manipulation"
            style={{ WebkitTapHighlightColor: "transparent" }}>
            <span className={`block h-[2px] w-[22px] rounded-full bg-[#1648D8] transition-all duration-200 origin-center ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-[22px] rounded-full bg-[#1648D8] transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[2px] w-[22px] rounded-full bg-[#1648D8] transition-all duration-200 origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>

          {/* Izquierda-centro — Logo más grande */}
          <Link href="/" aria-label="Arista Group" className="ml-1 flex-1">
            {(pathname.startsWith("/empresas") || pathname.startsWith("/fibraempresabarata")) ? (
              <Image
                src="/logo-arista-empresas-v2.png"
                alt="Arista Empresas"
                width={480}
                height={160}
                className="h-[52px] w-auto object-contain"
                priority
              />
            ) : (
              <Image
                src="/logo-arista.png"
                alt="Arista Group"
                width={320}
                height={110}
                className="h-[110px] w-auto object-contain"
                priority
              />
            )}
          </Link>

          {/* Derecha — Regalo + ¿Te llamamos? compacto */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => { setGiftOpen(true); setGiftTooltip(false); }}
              className="relative flex items-center justify-center rounded-xl px-2.5 py-2 text-white active:scale-95 transition-transform shadow-md"
              style={{ background: "linear-gradient(135deg,#FF6B35,#FF3D71)", WebkitTapHighlightColor: "transparent" }}
              aria-label="Ver regalo">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
              </svg>
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] text-[#FF3D71]"
                style={{ fontWeight: 900 }}>1</span>
            </button>
            <button
              onClick={() => setCallbackOpen(true)}
              className="flex items-center gap-1.5 rounded-xl bg-[#00B96B] px-3 py-2 text-xs text-black active:opacity-80"
              style={{ fontWeight: 700, WebkitTapHighlightColor: "transparent" }}>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              ¿Te llamamos?
            </button>
          </div>
        </div>

        {/* ══ LAYOUT DESKTOP (≥ md) ════════════════════════════ */}
        <div className="mx-auto hidden h-full w-full items-center gap-8 px-6 md:flex lg:px-10">

          {/* Logo */}
          <Link href="/" aria-label="Arista Group — inicio" className="relative flex-shrink-0 z-10">
            {(pathname.startsWith("/empresas") || pathname.startsWith("/fibraempresabarata")) ? (
              <Image
                src="/logo-arista-empresas-v2.png"
                alt="Arista Empresas"
                width={480}
                height={160}
                className="h-[52px] w-auto object-contain"
                priority
              />
            ) : (
              <Image
                src="/logo-arista.png"
                alt="Arista Group"
                width={480}
                height={160}
                className="h-[160px] w-auto object-contain"
                priority
              />
            )}
          </Link>

          {/* Nav — centrado */}
          <nav className="flex flex-1 items-center justify-center gap-7">
            {isEmpresasPage ? (
              <>
                <Link href="/fibraempresabarata" className="text-[15px] text-[#1648D8] transition-colors hover:text-[#0D47A1]" style={{ fontWeight: 700 }}>
                  Soluciones globales
                </Link>
                <Link href="/fibraempresabarata#soluciones" className="text-[15px] text-[#1648D8] transition-colors hover:text-[#0D47A1]" style={{ fontWeight: 700 }}>
                  Fibra + Móvil empresa
                </Link>
                <Link href="/fibraempresabarata#sectores" className="text-[15px] text-[#1648D8] transition-colors hover:text-[#0D47A1]" style={{ fontWeight: 700 }}>
                  Sectores
                </Link>
                <Link href="/fibraempresabarata#casos" className="text-[15px] text-[#1648D8] transition-colors hover:text-[#0D47A1]" style={{ fontWeight: 700 }}>
                  Casos de éxito
                </Link>
                <Link href="/ayuda" className="relative inline-flex items-center gap-1.5 text-[15px] text-[#1648D8] transition-colors hover:text-[#0D47A1]" style={{ fontWeight: 700 }}>
                  Ayuda
                </Link>
              </>
            ) : (
              <>
                <Link href="/tarifas/fibra" className="text-[15px] text-[#1648D8] transition-colors hover:text-[#0D47A1]" style={{ fontWeight: 700 }}>
                  Fibra
                </Link>
                <Link href="/fibra-y-movil" className="text-[15px] text-[#1648D8] transition-colors hover:text-[#0D47A1]" style={{ fontWeight: 700 }}>
                  Fibra + Móvil
                </Link>
                <Link href="/fibra-energia" className="relative inline-flex items-center gap-1.5 text-[15px] text-[#1648D8] transition-colors hover:text-[#0D47A1]" style={{ fontWeight: 700 }}>
                  Fibra + Energía
                  <span className="inline-flex items-center rounded-full px-1.5 py-0.5 text-[9px] text-white leading-none" style={{ backgroundColor: "#FF6B1A", fontWeight: 800, letterSpacing: "0.05em" }}>TOP</span>
                </Link>
                <Link href="/movil" className="text-[15px] text-[#1648D8] transition-colors hover:text-[#0D47A1]" style={{ fontWeight: 700 }}>
                  Móvil
                </Link>
                <Link href="/tv" className="text-[15px] text-[#1648D8] transition-colors hover:text-[#0D47A1]" style={{ fontWeight: 700 }}>
                  TV
                </Link>
              </>
            )}
          </nav>

          {/* CTAs desktop */}
          <div className="flex flex-shrink-0 items-center gap-2">

            {/* Botón regalo */}
            <div className="relative">
              {giftTooltip && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 animate-bounce pointer-events-none">
                  <div className="rounded-xl bg-[#FF3D71] px-3 py-1.5 text-[11px] text-white whitespace-nowrap shadow-lg"
                    style={{ fontWeight: 700 }}>
                    🎁 ¡Tienes un regalo aquí!
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 border-4 border-transparent border-t-[#FF3D71]" />
                  </div>
                </div>
              )}
              <button
                onClick={() => { setGiftOpen(true); setGiftTooltip(false); }}
                className="relative flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-white text-[13px] transition-all hover:scale-105 active:scale-95 shadow-md"
                style={{ background: "linear-gradient(135deg,#FF6B35,#FF3D71)", fontWeight: 700, WebkitTapHighlightColor: "transparent" }}
                aria-label="Ver regalo">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
                </svg>
                Regalo
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] text-[#FF3D71]"
                  style={{ fontWeight: 900 }}>1</span>
              </button>
            </div>

            <button
              onClick={() => setCallbackOpen(true)}
              className="flex items-center gap-2 rounded-xl bg-[#00B96B] px-5 py-2.5 text-[15px] text-black transition-colors hover:bg-[#009A59]"
              style={{ fontWeight: 700 }}>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              ¿Te llamamos?
            </button>
          </div>
        </div>

        {/* ══ Menú móvil desplegable ══════════════════════════ */}
        {open && (
          <div className="absolute inset-x-0 top-full z-40 border-t border-gray-100 bg-white shadow-2xl md:hidden"
            style={{ maxHeight: "calc(100dvh - 108px)", overflowY: "auto", WebkitOverflowScrolling: "touch" }}>

            {/* Sección Particulares */}
            <div className="px-5 pt-4 pb-1">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-1" style={{ fontWeight: 700 }}>Particulares</p>
            </div>
            <nav className="px-5">
              {[
                { href: "/tarifas/fibra",  label: "Fibra" },
                { href: "/fibra-y-movil",  label: "Fibra y Móvil" },
                { href: "/fibra-energia",  label: "Fibra y Energía" },
                { href: "/movil",          label: "Solo Móvil" },
                { href: "/tv",             label: "TV" },
                { href: "/energia",        label: "Energía" },
              ].map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-gray-50 py-3.5 active:bg-gray-50"
                  style={{ WebkitTapHighlightColor: "transparent" }}>
                  <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 600 }}>{l.label}</p>
                  <svg className="h-4 w-4 flex-shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>

            {/* Sección Empresas */}
            <div className="px-5 pt-4 pb-1">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-1" style={{ fontWeight: 700 }}>Empresas</p>
            </div>
            <nav className="px-5">
              {[
                { href: "/fibraempresabarata",            label: "Soluciones para empresas" },
                { href: "/fibraempresabarata#sectores",   label: "Sectores donde destacamos" },
                { href: "/fibraempresabarata#casos",      label: "Casos de exito" },
                { href: "/distribuidores",                label: "Distribuidores" },
              ].map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-gray-50 py-3.5 active:bg-gray-50"
                  style={{ WebkitTapHighlightColor: "transparent" }}>
                  <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 600 }}>{l.label}</p>
                  <svg className="h-4 w-4 flex-shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>

            {/* Sección Ayuda */}
            <div className="px-5 pt-4 pb-1">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-1" style={{ fontWeight: 700 }}>Ayuda</p>
            </div>
            <nav className="px-5">
              {[
                { href: "/cobertura",         label: "Comprobar cobertura" },
                { href: "/ayuda",             label: "Preguntas frecuentes" },
                { href: "/atencion-al-cliente",label: "Atencion al cliente" },
                { href: "/reto-factura",       label: "Reto de la Factura" },
              ].map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-gray-50 py-3.5 active:bg-gray-50"
                  style={{ WebkitTapHighlightColor: "transparent" }}>
                  <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 600 }}>{l.label}</p>
                  <svg className="h-4 w-4 flex-shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-5 py-5">
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero información sobre Arista.")}`}
                target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-3.5 text-sm text-white active:opacity-80"
                style={{ fontWeight: 700, WebkitTapHighlightColor: "transparent" }}>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── Drawer Regalo (desliza desde la izquierda) ─────── */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${giftOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setGiftOpen(false)}
      />
      {/* Panel */}
      <div
        className={`fixed top-0 right-0 z-[201] h-full w-full max-w-[360px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${giftOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Cabecera del drawer */}
        <div className="relative flex flex-col items-center px-6 pt-10 pb-7 text-center"
          style={{ background: "linear-gradient(135deg,#FF6B35 0%,#FF3D71 100%)" }}>
          <button onClick={() => setGiftOpen(false)}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Cerrar">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
            <svg className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" />
            </svg>
          </div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/70 mb-1" style={{ fontWeight: 700 }}>Tu pedido especial</p>
          <h2 className="text-3xl text-white leading-tight" style={{ fontWeight: 900 }}>1 mes GRATIS</h2>
          <p className="mt-1 text-white/75 text-sm">Pack Pareja · Solo hasta julio</p>
        </div>

        {/* Contenido scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5">

          {/* Línea de pedido */}
          <div className="rounded-2xl border border-gray-100 bg-[#FFF5F7] p-4">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] uppercase tracking-widest text-[#FF3D71]" style={{ fontWeight: 700 }}>Pack Pareja 600Mb</p>
              <span className="rounded-full bg-[#FF3D71]/10 px-2 py-0.5 text-[11px] text-[#FF3D71]" style={{ fontWeight: 700 }}>×1</span>
            </div>
            {[
              { icon: "🌐", txt: "Fibra 600Mb simétrica" },
              { icon: "📱", txt: "2 móviles 30GB 5G incluidos" },
              { icon: "🔓", txt: "Sin permanencia" },
              { icon: "⚡", txt: "Alta en 24 horas" },
            ].map((f) => (
              <div key={f.txt} className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                <span>{f.icon}</span>{f.txt}
              </div>
            ))}
          </div>

          {/* Resumen precio */}
          <div className="rounded-2xl border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Precio normal</span>
              <span className="text-sm text-gray-400 line-through">35,90€/mes</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Descuento 1er mes</span>
              <span className="text-sm text-[#FF3D71]" style={{ fontWeight: 700 }}>−35,90€</span>
            </div>
            <div className="h-px bg-gray-100 my-2" />
            <div className="flex items-center justify-between">
              <span className="text-base text-[#1A1A1A]" style={{ fontWeight: 800 }}>Total primer mes</span>
              <span className="text-2xl text-[#FF3D71]" style={{ fontWeight: 900 }}>0,00€</span>
            </div>
            <p className="mt-1 text-[11px] text-gray-400">Desde el 2º mes: 35,90€/mes · Sin compromiso</p>
          </div>

          {/* Urgencia */}
          <div className="rounded-xl bg-[#FFF9E6] border border-[#F59E0B]/30 px-4 py-3 flex items-center gap-2">
            <span className="text-lg">⏰</span>
            <p className="text-xs text-[#92400E]" style={{ fontWeight: 600 }}>Oferta válida hasta el 31 de julio de 2026</p>
          </div>
        </div>

        {/* Footer fijo con CTA */}
        <div className="border-t border-gray-100 px-6 py-5 bg-white">
          <a
            href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola quiero mi regalo")}`}
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-2xl py-4 text-white text-base shadow-lg transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg,#FF6B35,#FF3D71)", fontWeight: 700 }}>
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hola quiero mi regalo
          </a>
          <p className="mt-2.5 text-center text-[11px] text-gray-400">Sin letra pequeña · Sin permanencia</p>
        </div>
      </div>

      {/* ── Modal ¿Te llamamos? ────────────────────────────── */}
      {callbackOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setCallbackOpen(false); }}
        >
          <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden">

            {/* Cabecera del modal */}
            <div className="bg-[#1648D8] px-6 py-5">
              <button
                onClick={() => setCallbackOpen(false)}
                aria-label="Cerrar"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-xl text-white" style={{ fontWeight: 700 }}>¿Te llamamos?</h2>
              <p className="mt-1 text-sm text-white/70">Déjanos tus datos y te contactamos en menos de 2 horas.</p>
            </div>

            {enviado ? (
              <div className="px-6 py-10 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#DCFCE7]">
                  <svg className="h-7 w-7 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-[#1A1A1A]" style={{ fontWeight: 700 }}>¡Solicitud enviada!</p>
                <p className="mt-2 text-sm text-gray-500">Te hemos abierto WhatsApp con tus datos. Nos ponemos en contacto contigo enseguida.</p>
                <button
                  onClick={() => setCallbackOpen(false)}
                  className="mt-6 rounded-xl bg-[#1648D8] px-6 py-2.5 text-sm text-white hover:bg-[#0D47A1] transition-colors"
                  style={{ fontWeight: 600 }}>
                  Cerrar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>Nombre *</label>
                    <input
                      required
                      type="text"
                      placeholder="Juan"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#1648D8] focus:ring-2 focus:ring-[#1648D8]/20 placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>Apellidos *</label>
                    <input
                      required
                      type="text"
                      placeholder="García López"
                      value={form.apellidos}
                      onChange={(e) => setForm({ ...form, apellidos: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#1648D8] focus:ring-2 focus:ring-[#1648D8]/20 placeholder:text-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="juan@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#1648D8] focus:ring-2 focus:ring-[#1648D8]/20 placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>Teléfono *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#1648D8] focus:ring-2 focus:ring-[#1648D8]/20 placeholder:text-gray-300"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>Dirección</label>
                  <input
                    type="text"
                    placeholder="Calle Mayor 12, Alicante"
                    value={form.direccion}
                    onChange={(e) => setForm({ ...form, direccion: e.target.value })}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm text-[#1A1A1A] outline-none transition-colors focus:border-[#1648D8] focus:ring-2 focus:ring-[#1648D8]/20 placeholder:text-gray-300"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-1 w-full rounded-xl bg-[#00B96B] py-3 text-sm text-black transition-colors hover:bg-[#009A59]"
                  style={{ fontWeight: 700 }}>
                  Solicitar llamada →
                </button>
                <p className="text-center text-[11px] text-gray-400">
                  Al enviar, se abrirá WhatsApp con tus datos para que podamos contactarte.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
