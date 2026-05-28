"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const WA    = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const PHONE = process.env.NEXT_PUBLIC_PHONE    || "+34621192578";
const EMAIL = process.env.NEXT_PUBLIC_EMAIL    || "info@aristamovil.com";

type Col = { titulo: string; links: { href: string; label: string }[] };

const COLS: Col[] = [
  {
    titulo: "Fibra",
    links: [
      { href: "/tarifas/fibra",           label: "Arista Only 600" },
      { href: "/tarifas/fibra",           label: "Arista Only 1000" },
      { href: "/fibra-barata-alicante",   label: "Fibra barata Alicante" },
      { href: "/tarifas/fibra",           label: "Ver todas las fibras" },
    ],
  },
  {
    titulo: "Fibra + Móvil",
    links: [
      { href: "/fibra-y-movil", label: "600 Infinity — 60GB · 32,90€" },
      { href: "/fibra-y-movil", label: "600 Infinity — 80GB · 33,90€" },
      { href: "/fibra-y-movil", label: "600 Infinity — 2×30GB · 35,90€" },
      { href: "/fibra-y-movil", label: "1000 Ultra — 2×30GB · 37,95€" },
      { href: "/fibra-y-movil", label: "1000 Ultra — 80GB · 38,90€" },
      { href: "/fibra-y-movil", label: "1000 Ultra — Ilimitado · 40,90€" },
    ],
  },
  {
    titulo: "Móvil · Energía · TV",
    links: [
      { href: "/movil",         label: "Móvil desde 9,90€/mes" },
      { href: "/movil",         label: "Móvil 5G ilimitado" },
      { href: "/energia",       label: "Luz — Tarifa plana" },
      { href: "/fibra-energia", label: "Fibra + Energía · desde 25€" },
      { href: "/tv",            label: "TV" },
    ],
  },
  {
    titulo: "Empresas",
    links: [
      { href: "/fibraempresabarata",                  label: "Fibra para empresas" },
      { href: "/empresas/administradores-de-fincas",  label: "Administradores de fincas" },
      { href: "/empresas/hoteles",                    label: "Hoteles" },
      { href: "/empresas/constructoras",              label: "Constructoras" },
      { href: "/empresas/fabricas",                   label: "Fábricas" },
      { href: "/empresas/hospitales",                 label: "Hospitales" },
      { href: "/distribuidores",                      label: "Distribuidores" },
    ],
  },
  {
    titulo: "Ayuda · Arista",
    links: [
      { href: "/atencion-al-cliente", label: "Atención al cliente" },
      { href: "/ayuda",               label: "Preguntas frecuentes" },
      { href: "/cobertura",           label: "Comprobar cobertura" },
      { href: "/cambia-de-compania",  label: "Cambia de compañía" },
      { href: "/rescate",             label: "Rescate de clientes" },
      { href: "/reto-factura",        label: "Reto de la Factura 🏆" },
      { href: "/resenas",             label: "Reseñas y opiniones" },
      { href: "/alicante",            label: "Empresa alicantina" },
    ],
  },
];

const DESTACADOS = [
  { href: "/hogueras",    label: "🔥 Oferta Hogueras 2026" },
  { href: "/reto-factura",label: "🏆 Reto de la Factura" },
  { href: "/rescate",     label: "🆘 Rescate Clientes" },
  { href: "/fibra-energia",label: "⚡ Fibra + Energía" },
  { href: "/mejor-compania-fibra-movil-luz", label: "🥇 Mejor compañía" },
];

const LEGAL = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies",    label: "Cookies" },
  { href: "/tarifas",    label: "Tarifario completo" },
];

function AccordionCol({ col }: { col: Col }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3.5 text-left"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <span className="text-[11px] uppercase tracking-[0.2em] text-white/50" style={{ fontWeight: 700 }}>
          {col.titulo}
        </span>
        <svg
          className={`h-4 w-4 text-white/30 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <nav className="flex flex-col gap-2 pb-4 pl-1">
          {col.links.map((l) => (
            <Link key={l.label + l.href} href={l.href}
              className="text-sm text-white/50 hover:text-white transition-colors leading-snug">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0D1B4B] pb-[72px] md:pb-0">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">

        {/* ── Logo + contacto (siempre visible) ── */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <Link href="/">
            <Image src="/logo-arista.png" alt="Arista Group" width={140} height={42}
              className="h-9 w-auto object-contain brightness-0 invert" />
          </Link>
          <div className="flex items-center gap-3">
            <a href={`tel:${PHONE}`}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ── Móvil: acordeón de columnas ── */}
        <div className="md:hidden mb-4">
          {COLS.map((col) => (
            <AccordionCol key={col.titulo} col={col} />
          ))}
        </div>

        {/* ── Desktop: grid completo ── */}
        <div className="hidden md:grid gap-10 grid-cols-3 lg:grid-cols-[200px_1fr_1fr_1fr_1fr_1fr]">

          {/* Logo + contacto */}
          <div className="col-span-1">
            <Link href="/">
              <Image src="/logo-arista.png" alt="Arista Group" width={180} height={54}
                className="h-12 w-auto object-contain brightness-0 invert mb-4" />
            </Link>
            <p className="text-xs text-white/50 leading-relaxed mb-5 max-w-[200px]">
              Telecomunicaciones y energía para familias del Levante. Empresa alicantina.
            </p>
            <div className="flex flex-col gap-2">
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-xs text-white/55 hover:text-white transition-colors">
                <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-xs text-white/55 hover:text-white transition-colors">
                <svg className="h-3.5 w-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {EMAIL}
              </a>
              <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#25D366] hover:text-white transition-colors" style={{ fontWeight: 600 }}>
                <svg className="h-3.5 w-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp →
              </a>
            </div>
          </div>

          {/* 5 columnas de navegación */}
          {COLS.map((col) => (
            <div key={col.titulo}>
              <p className="mb-4 text-[10px] uppercase tracking-[0.25em] text-white/35" style={{ fontWeight: 700 }}>
                {col.titulo}
              </p>
              <nav className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <Link key={l.label + l.href} href={l.href}
                    className="text-sm text-white/55 hover:text-white transition-colors leading-snug">
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* ── Divisor ── */}
        <div className="mt-8 border-t border-white/10" />

        {/* ── Banda destacados ── */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/25 mr-1 hidden sm:inline" style={{ fontWeight: 700 }}>Destacado</span>
          {DESTACADOS.map((l) => (
            <Link key={l.href} href={l.href}
              className="inline-flex items-center rounded-full border border-white/10 px-3 py-1 text-xs text-white/45 hover:border-white/30 hover:text-white/80 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* ── Línea inferior ── */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/25">
          <span className="text-center sm:text-left">Servicios y Telecomunicaciones Arista S.L. · CIF B55476212 · El Campello, Alicante 03560</span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white/50 transition-colors">{l.label}</Link>
            ))}
            <span>© {new Date().getFullYear()} Arista Group</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
