"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WA    = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const PHONE = process.env.NEXT_PUBLIC_PHONE    || "+34621192578";

const GANADORES = [
  { nombre: "Sofía M.",   ciudad: "Alicante",    antes: 89,  despues: 35.90, ahorro: 53.10, servicio: "Fibra + Móvil" },
  { nombre: "Carlos D.",  ciudad: "Torrevieja",  antes: 120, despues: 60.00, ahorro: 60.00, servicio: "Pack Familiar" },
  { nombre: "Ana R.",     ciudad: "Elche",       antes: 75,  despues: 35.90, ahorro: 39.10, servicio: "Fibra + Móvil" },
  { nombre: "Javier P.",  ciudad: "Benidorm",    antes: 95,  despues: 45.90, ahorro: 49.10, servicio: "Pack Pareja"   },
  { nombre: "Lucía F.",   ciudad: "El Campello", antes: 68,  despues: 24.90, ahorro: 43.10, servicio: "Solo Fibra"    },
  { nombre: "Marcos T.",  ciudad: "San Vicente", antes: 110, despues: 60.00, ahorro: 50.00, servicio: "Pack Familiar" },
];

interface FormData {
  nombre:    string;
  apellidos: string;
  telefono:  string;
  email:     string;
  direccion: string;
}

export default function RetoFacturaClient() {
  const [form, setForm]       = useState<FormData>({ nombre: "", apellidos: "", telefono: "", email: "", direccion: "" });
  const [file, setFile]       = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError]     = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (f: File) => {
    if (f.type !== "application/pdf") {
      setError("Solo se admiten archivos PDF.");
      return;
    }
    if (f.size > 10 * 1024 * 1024) {
      setError("El archivo no puede superar 10 MB.");
      return;
    }
    setError("");
    setFile(f);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, []);

  const onDragOver = (e: React.DragEvent) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = () => setDragging(false);

  const handleChange = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.nombre || !form.telefono) { setError("Nombre y teléfono son obligatorios."); return; }
    setSending(true);
    try {
      const fd = new FormData();
      fd.append("tipo",        "reto_factura");
      fd.append("Nombre",      form.nombre);
      fd.append("Apellidos",   form.apellidos);
      fd.append("Teléfono",    form.telefono);
      fd.append("Email",       form.email || "—");
      fd.append("Dirección",   form.direccion || "—");
      if (file) fd.append("factura", file, file.name);

      await fetch("/api/contact", { method: "POST", body: fd });
    } catch (_) { /* fallback silencioso */ }

    setSending(false);
    setEnviado(true);
  }

  return (
    <>
      <Header />
      <div className="mt-[72px] min-h-screen bg-white font-sans">

        {/* ══ HERO ════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden px-6 pt-14 pb-0 lg:px-8"
          style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1200 50%, #0a1a0a 100%)" }}>
          <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full blur-[140px]"
            style={{ backgroundColor: "rgba(245,158,11,0.2)" }} />
          <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-64 w-64 rounded-full blur-[100px]"
            style={{ backgroundColor: "rgba(0,185,107,0.15)" }} />

          <div className="relative z-10 mx-auto max-w-4xl text-center pb-16 pt-4">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-5 py-2">
              <span className="text-lg">🏆</span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#F59E0B]" style={{ fontWeight: 700 }}>El Reto de la Factura</span>
            </div>
            <h1 className="text-[clamp(34px,6vw,72px)] leading-[1.0] tracking-tight text-white mb-5" style={{ fontWeight: 900 }}>
              Mándanos tu factura.<br />
              <span style={{ background: "linear-gradient(90deg,#F59E0B,#00B96B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                El mayor ahorro gana.
              </span>
            </h1>
            <p className="text-[clamp(15px,2vw,19px)] text-white/55 leading-relaxed max-w-xl mx-auto mb-4">
              Sube tu factura actual en PDF. El participante con mayor ahorro al pasarse a Arista gana
              <strong className="text-[#F59E0B]"> 1 año de fibra + móvil GRATIS.</strong>
            </p>
            <p className="text-sm text-white/40 mb-8">El 94% de participantes ahorra más de 20€/mes · Ganador anunciado cada mes</p>
            <div className="inline-flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 backdrop-blur-sm mb-10">
              {[
                { v: "2.847", u: "retos aceptados" },
                { v: "34€",   u: "ahorro medio/mes" },
                { v: "94%",   u: "con más de 20€ ahorro" },
              ].map((s, i) => (
                <div key={s.u} className={`text-center ${i > 0 ? "border-l border-white/10 pl-6" : ""}`}>
                  <p className="text-2xl text-[#F59E0B] leading-none" style={{ fontWeight: 900 }}>{s.v}</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/35 mt-0.5">{s.u}</p>
                </div>
              ))}
            </div>
            <div>
              <a href="#formulario"
                className="group inline-flex items-center gap-2.5 rounded-2xl px-8 py-4 text-base text-black transition-all hover:brightness-110"
                style={{ background: "linear-gradient(135deg,#F59E0B,#D97706)", fontWeight: 800 }}>
                Acepta el reto →
              </a>
            </div>
          </div>
          <div className="relative h-12 overflow-hidden">
            <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="absolute bottom-0 w-full h-12" fill="white">
              <path d="M0,48 L0,24 Q360,0 720,24 Q1080,48 1440,24 L1440,48 Z" />
            </svg>
          </div>
        </section>

        {/* ══ REGLAS DEL JUEGO ════════════════════════════════════ */}
        <section className="bg-[#FFFBEB] border-y border-[#F59E0B]/20 px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-5 py-2 mb-4 shadow-md">
                <span className="text-white text-sm" style={{ fontWeight: 900 }}>🏆 REGLAS DEL JUEGO</span>
              </div>
              <h2 className="text-3xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 900 }}>
                El Gran Premio: 1 año de fibra + móvil <span className="text-[#D97706]">GRATIS</span>
              </h2>
              <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
                Manda tu factura actual. El participante que más pague en su compañía y que mayor ahorro tendría con Arista, <strong className="text-[#1A1A1A]">gana un año entero de fibra y móvil sin pagar nada.</strong>
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-3 mb-8">
              {[
                {
                  num: "01",
                  emoji: "📋",
                  titulo: "Sube tu factura",
                  desc: "Arrastra tu factura en PDF y rellena tus datos. Solo tardas 1 minuto.",
                },
                {
                  num: "02",
                  emoji: "🧮",
                  titulo: "Analizamos tu ahorro",
                  desc: "Calculamos exactamente cuánto pagas ahora y cuánto ahorrarías con Arista.",
                },
                {
                  num: "03",
                  emoji: "🏆",
                  titulo: "El mayor ahorro gana",
                  desc: "Quien más pague y más ahorre con Arista gana 12 meses de fibra + móvil GRATIS.",
                },
              ].map((paso) => (
                <div key={paso.num} className="relative rounded-2xl border border-[#F59E0B]/30 bg-white p-6 shadow-sm text-center">
                  <span className="absolute right-4 top-4 text-[40px] leading-none text-[#FEF3C7]" style={{ fontWeight: 900 }}>{paso.num}</span>
                  <div className="mb-3 text-3xl">{paso.emoji}</div>
                  <p className="mb-1.5 text-base text-[#1A1A1A]" style={{ fontWeight: 800 }}>{paso.titulo}</p>
                  <p className="text-xs leading-relaxed text-gray-400">{paso.desc}</p>
                </div>
              ))}
            </div>

            {/* Premio destacado */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-[#F59E0B]/40">
              <div className="px-8 py-6 text-center" style={{ background: "linear-gradient(135deg,#F59E0B 0%,#D97706 100%)" }}>
                <p className="text-[11px] uppercase tracking-[0.3em] text-black/60 mb-1" style={{ fontWeight: 700 }}>Gran Premio</p>
                <h3 className="text-3xl text-black leading-tight" style={{ fontWeight: 900 }}>
                  12 meses de Fibra + Móvil
                </h3>
                <p className="text-xl text-black/70 mt-1" style={{ fontWeight: 700 }}>valorado en más de 430€</p>
              </div>
              <div className="bg-white px-8 py-5">
                <div className="grid sm:grid-cols-3 gap-4 text-center">
                  {[
                    { emoji: "🌐", txt: "Fibra 600Mb durante 12 meses" },
                    { emoji: "📱", txt: "Móvil 30GB 5G durante 12 meses" },
                    { emoji: "🔓", txt: "Sin permanencia posterior" },
                  ].map((f) => (
                    <div key={f.txt} className="flex flex-col items-center gap-1.5">
                      <span className="text-2xl">{f.emoji}</span>
                      <p className="text-xs text-gray-600" style={{ fontWeight: 600 }}>{f.txt}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-[#FFFBEB] border border-[#F59E0B]/30 px-5 py-4">
                  <p className="text-sm text-[#92400E] text-center leading-relaxed">
                    <strong>¿Cómo se decide el ganador?</strong> Comparamos todas las facturas recibidas. El participante con mayor diferencia entre lo que paga ahora y lo que pagaría con Arista gana el premio. <strong>Anunciamos el ganador cada mes.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ FORMULARIO ══════════════════════════════════════════ */}
        <section id="formulario" className="bg-white px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-xl">

            {!enviado ? (
              <form onSubmit={handleSubmit} className="rounded-3xl border border-gray-200 bg-white p-7 shadow-lg lg:p-10">
                <div className="mb-8 text-center">
                  <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FEF3C7] text-3xl">📋</div>
                  <h2 className="text-2xl text-[#1A1A1A]" style={{ fontWeight: 800 }}>Participa en el reto</h2>
                  <p className="mt-1.5 text-sm text-gray-400">Sube tu factura · El mayor ahorro gana 1 año GRATIS</p>
                </div>

                {/* Zona de subida PDF */}
                <div
                  onClick={() => inputRef.current?.click()}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  className={`mb-6 flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed cursor-pointer transition-all p-8 ${
                    dragging
                      ? "border-[#F59E0B] bg-[#FEF3C7]/60 scale-[1.01]"
                      : file
                      ? "border-[#00B96B] bg-[#F0FDF4]"
                      : "border-gray-200 bg-[#FAFAFA] hover:border-[#F59E0B]/50 hover:bg-[#FFFBEB]"
                  }`}
                >
                  {file ? (
                    <>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#00B96B]/10">
                        <svg className="h-7 w-7 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-[#00B96B]" style={{ fontWeight: 700 }}>✓ {file.name}</p>
                      <p className="text-xs text-gray-400">({(file.size / 1024).toFixed(0)} KB) — Pulsa para cambiar</p>
                    </>
                  ) : (
                    <>
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${dragging ? "bg-[#F59E0B]/20" : "bg-gray-100"}`}>
                        <svg className={`h-7 w-7 ${dragging ? "text-[#F59E0B]" : "text-gray-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600" style={{ fontWeight: 700 }}>Arrastra tu factura aquí</p>
                        <p className="text-xs text-gray-400 mt-0.5">o pulsa para seleccionar el archivo PDF</p>
                      </div>
                      <span className="rounded-full border border-gray-200 px-4 py-1.5 text-xs text-gray-500" style={{ fontWeight: 600 }}>
                        Seleccionar PDF
                      </span>
                      <p className="text-[10px] text-gray-300">Solo PDF · Máx. 10 MB</p>
                    </>
                  )}
                  <input
                    ref={inputRef}
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
                  />
                </div>

                {/* Datos personales */}
                <div className="grid gap-4 sm:grid-cols-2 mb-4">
                  <div>
                    <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>Nombre *</label>
                    <input
                      required type="text" placeholder="Tu nombre"
                      value={form.nombre} onChange={handleChange("nombre")}
                      className="w-full rounded-xl border border-gray-200 bg-[#FAFAFA] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>Apellidos</label>
                    <input
                      type="text" placeholder="Tus apellidos"
                      value={form.apellidos} onChange={handleChange("apellidos")}
                      className="w-full rounded-xl border border-gray-200 bg-[#FAFAFA] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 transition-all"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 mb-4">
                  <div>
                    <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>Teléfono *</label>
                    <input
                      required type="tel" placeholder="600 000 000"
                      value={form.telefono} onChange={handleChange("telefono")}
                      className="w-full rounded-xl border border-gray-200 bg-[#FAFAFA] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>Email</label>
                    <input
                      type="email" placeholder="tu@email.com"
                      value={form.email} onChange={handleChange("email")}
                      className="w-full rounded-xl border border-gray-200 bg-[#FAFAFA] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 transition-all"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>Dirección</label>
                  <input
                    type="text" placeholder="Tu dirección completa"
                    value={form.direccion} onChange={handleChange("direccion")}
                    className="w-full rounded-xl border border-gray-200 bg-[#FAFAFA] px-4 py-3 text-sm text-[#1A1A1A] outline-none focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/20 transition-all"
                  />
                </div>

                {error && (
                  <p className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-2.5 text-sm text-red-600" style={{ fontWeight: 600 }}>
                    {error}
                  </p>
                )}

                <button
                  type="submit" disabled={sending}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-base text-black transition-all hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: "linear-gradient(135deg,#F59E0B,#D97706)", fontWeight: 800 }}>
                  {sending ? (
                    <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : null}
                  {sending ? "Enviando..." : "Enviar mi factura →"}
                </button>
                <p className="mt-3 text-center text-[11px] text-gray-400">
                  Tus datos están protegidos · Solo los usamos para analizarte el ahorro
                </p>
              </form>
            ) : (
              /* ── Confirmación ── */
              <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-lg lg:p-10 text-center">
                <div className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-3xl text-5xl"
                  style={{ background: "linear-gradient(135deg,#F59E0B20,#00B96B20)" }}>🏆</div>
                <h2 className="text-2xl text-[#1A1A1A] mb-3" style={{ fontWeight: 900 }}>¡Reto aceptado!</h2>
                <p className="text-base text-gray-400 mb-6 max-w-md mx-auto leading-relaxed">
                  Hemos recibido tu factura. Un asesor de Arista te llamará en <strong className="text-[#D97706]">menos de 2 horas</strong> para explicarte tu ahorro real.
                </p>
                <div className="flex flex-col gap-3">
                  <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm text-black"
                    style={{ background: "linear-gradient(135deg,#F59E0B,#D97706)", fontWeight: 800 }}>
                    Seguir por WhatsApp →
                  </a>
                  <a href={`tel:${PHONE}`}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 py-3.5 text-sm text-gray-600 hover:border-gray-400 transition-colors"
                    style={{ fontWeight: 600 }}>
                    O llamar ahora: {PHONE}
                  </a>
                  <button
                    onClick={() => { setEnviado(false); setFile(null); setForm({ nombre:"", apellidos:"", telefono:"", email:"", direccion:"" }); }}
                    className="text-xs text-gray-300 hover:text-gray-500 transition-colors mt-2">
                    Enviar otra factura
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ══ GANADORES DEL RETO ══════════════════════════════════ */}
        <section className="bg-[#F5F6F8] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <div className="mb-3 flex items-center justify-center gap-3">
                <div className="h-px w-6 bg-[#F59E0B]" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#F59E0B]" style={{ fontWeight: 700 }}>Ganadores recientes</span>
                <div className="h-px w-6 bg-[#F59E0B]" />
              </div>
              <h2 className="text-[clamp(20px,3vw,34px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>
                Personas que ya ganaron el reto
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GANADORES.map((g) => (
                <div key={g.nombre} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{g.nombre}</p>
                      <p className="text-xs text-gray-400">📍 {g.ciudad}</p>
                    </div>
                    <span className="rounded-full bg-[#EEF2FF] px-2.5 py-1 text-[10px] text-[#1648D8]" style={{ fontWeight: 700 }}>{g.servicio}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 rounded-xl bg-[#FFF5F5] p-3 text-center">
                      <p className="text-xs text-gray-400 mb-0.5">Antes</p>
                      <p className="text-lg text-[#E53E3E] leading-none" style={{ fontWeight: 800 }}>{g.antes}€</p>
                    </div>
                    <svg className="h-5 w-5 text-[#F59E0B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="flex-1 rounded-xl bg-[#F0FDF4] p-3 text-center">
                      <p className="text-xs text-gray-400 mb-0.5">Ahora</p>
                      <p className="text-lg text-[#00B96B] leading-none" style={{ fontWeight: 800 }}>{g.despues}€</p>
                    </div>
                  </div>
                  <div className="mt-3 rounded-xl bg-[#FEF3C7] px-3 py-2 text-center">
                    <p className="text-sm text-[#92400E]" style={{ fontWeight: 800 }}>
                      💰 Ahorra {g.ahorro.toFixed(2)}€/mes · {(g.ahorro * 12).toFixed(0)}€/año
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ CTA FINAL ═══════════════════════════════════════════ */}
        <section className="px-6 py-20 lg:px-8 text-center"
          style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a1200 100%)" }}>
          <div className="mx-auto max-w-xl">
            <p className="text-4xl mb-4">🏆</p>
            <h2 className="text-[clamp(24px,4vw,46px)] text-white leading-tight mb-4" style={{ fontWeight: 900 }}>¿Te atreves a participar?</h2>
            <p className="text-base text-white/50 mb-8">El ganador se lleva 12 meses de fibra + móvil sin pagar nada. Anunciamos ganador cada mes.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#formulario"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base text-black transition-all hover:brightness-110"
                style={{ background: "linear-gradient(135deg,#F59E0B,#D97706)", fontWeight: 800 }}>
                🏆 Participar en el reto →
              </a>
              <Link href="/tarifas"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-8 py-4 text-base text-white/70 hover:border-white/40 hover:text-white transition-all"
                style={{ fontWeight: 600 }}>
                Ver tarifas →
              </Link>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
