"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WA  = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";
const PHONE = process.env.NEXT_PUBLIC_PHONE || "+34621192578";

const COMPANIAS = [
  "Digi","Lowi","Finetwork","Avatel","Aire Networks","Telecable","Embou",
  "Llamaya","Hits Mobile","Másmóvil","Pepephone","Otra low-cost",
  "Mi compañía quebró","Otra (escribir abajo)",
];

const TESTIMONIOS = [
  { nombre: "María G.", ciudad: "Alicante", texto: "Llevaba 3 semanas sin línea porque mi operadora entró en concurso de acreedores. Arista me dio alta en 24 horas. No me lo podía creer.", estrellas: 5, servicio: "Rescue · Fibra + Móvil" },
  { nombre: "Tomás R.", ciudad: "San Vicente del Raspeig", texto: "Pagué por adelantado 12 meses y la empresa desapareció. Perdí 340€. En Arista me compensaron con el mes gratis y los 50€. Se portaron genial.", estrellas: 5, servicio: "Rescue · Móvil 5G" },
  { nombre: "Laura P.", ciudad: "Elche", texto: "Mi antigua compañía no contestaba al teléfono desde hacía semanas. No tenía forma de cancelar ni de saber qué pasaba. Arista fue un respiro total.", estrellas: 5, servicio: "Rescue · Fibra 600Mb" },
];

function useCount(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

interface FormData { nombre: string; telefono: string; email: string; compania: string; problema: string; }
const EMPTY: FormData = { nombre: "", telefono: "", email: "", compania: "", problema: "" };

export default function RescateClient() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [enviado, setEnviado] = useState(false);
  const [sending, setSending] = useState(false);
  const clientes = useCount(127);
  const horas    = useCount(24);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    // Enviar email a info@aristamovil.com
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "rescate",
          "Nombre":    form.nombre,
          "Telefono":  form.telefono,
          "Email":     form.email,
          "Compania":  form.compania,
          "Situacion": form.problema,
          "Regalo":    "1er mes gratis + 50 euros en 2a factura",
        }),
      });
    } catch (_) { /* fallback silencioso */ }
    // Mantener también apertura de WhatsApp como respaldo
    const msg =
      `RESCATE DE CLIENTE - aristagroup.es\n\n` +
      `Nombre: ${form.nombre}\nTelefono: ${form.telefono}\nEmail: ${form.email}\n` +
      `Compania problematica: ${form.compania}\n\nSituacion:\n${form.problema}\n\n` +
      `Regalo: 1er mes gratis + 50 euros en 2a factura`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
    setTimeout(() => { setSending(false); setEnviado(true); }, 800);
  }

  return (
    <>
      <Header />
      <div className="mt-[72px] min-h-screen bg-white font-sans">

        {/* ══════════════════════════════════════════════════════
            HERO FULL — IMPACTO MÁXIMO · HOGARES PRIMERO
        ══════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden min-h-[92vh] flex flex-col"
          style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0505 50%, #0f0f1a 100%)" }}>

          {/* Imagen de fondo desaturada */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/rescate-hero.png"
              alt=""
              fill
              className="object-cover object-center opacity-20"
              priority
              sizes="100vw"
            />
            {/* Overlay dramático */}
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to right, rgba(10,10,10,0.97) 45%, rgba(10,10,10,0.5) 75%, rgba(10,10,10,0.85) 100%)" }} />
          </div>

          {/* Halo rojo ambiental */}
          <div className="pointer-events-none absolute left-[15%] top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[160px]"
            style={{ backgroundColor: "rgba(229,62,62,0.18)" }} />

          {/* Contenido */}
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-20 lg:px-14 xl:px-20">
            <div className="max-w-2xl">

              {/* Badge pulsante */}
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#E53E3E]/40 bg-[#E53E3E]/10 px-5 py-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E53E3E] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E53E3E]" />
                </span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#E53E3E]" style={{ fontWeight: 700 }}>
                  Rescate activo · Hogares · España
                </span>
              </div>

              {/* Título masivo */}
              <h1 className="text-[clamp(38px,6.5vw,80px)] leading-[1.0] tracking-tight text-white mb-6" style={{ fontWeight: 900 }}>
                Tu hogar merece<br />
                <span style={{
                  background: "linear-gradient(90deg, #ff4444 0%, #ff8800 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  tener internet.
                </span>
              </h1>

              {/* Subtítulo potente */}
              <p className="text-[clamp(16px,2vw,20px)] text-white/60 leading-relaxed mb-4 max-w-xl">
                ¿Tu operadora ha quebrado o te ha cortado la línea?<br />
                <strong className="text-white/90">En tu casa no puede faltar la conexión.</strong>{" "}
                Te damos alta en 24 horas — con el primer mes completamente gratis.
              </p>

              {/* Dolores específicos de hogares */}
              <div className="mb-8 flex flex-col gap-2">
                {[
                  "Los niños no pueden hacer los deberes sin internet",
                  "No puedes trabajar desde casa ni hacer videollamadas",
                  "Tu familia lleva días incomunicada",
                ].map((d) => (
                  <div key={d} className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#E53E3E]" />
                    <span className="text-sm text-white/55">{d}</span>
                  </div>
                ))}
              </div>

              {/* CTAs grandes */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#formulario"
                  className="group flex items-center justify-center gap-3 rounded-2xl px-8 py-4 text-base text-white transition-all hover:brightness-110 active:scale-[0.98]"
                  style={{ background: "linear-gradient(135deg, #E53E3E 0%, #C53030 100%)", fontWeight: 800 }}>
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                  Rescatar mi hogar ahora
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
                <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, mi operadora me ha dejado sin servicio en casa. Necesito ayuda urgente.")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-base text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                  style={{ fontWeight: 700 }}>
                  <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp urgente
                </a>
              </div>

              {/* Garantía visual */}
              <div className="mt-8 flex flex-wrap gap-4">
                {[
                  { v: "1er mes", u: "GRATIS",   c: "#00B96B" },
                  { v: "50€",     u: "en 2ª fact.", c: "#F59E0B" },
                  { v: "Alta",    u: "en 24h",    c: "#1648D8" },
                  { v: "0€",      u: "sin perm.", c: "#7C3AED" },
                ].map((b) => (
                  <div key={b.u} className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
                    <span className="text-lg leading-none" style={{ color: b.c, fontWeight: 900 }}>{b.v}</span>
                    <span className="mt-0.5 text-[10px] uppercase tracking-wider text-white/40">{b.u}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Foto lado derecho — visible en desktop */}
            <div className="relative ml-auto hidden xl:block flex-shrink-0">
              <div className="w-[380px] rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
                <Image
                  src="/rescate-hero.png"
                  alt="Familia en hogar sin servicio de internet"
                  width={380}
                  height={460}
                  className="object-cover object-top"
                  priority
                  sizes="380px"
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 40%)" }} />
              </div>
              {/* Chips sobre la foto */}
              <div className="absolute -left-6 top-8 rounded-2xl bg-white px-4 py-3 shadow-2xl">
                <p className="text-[10px] uppercase tracking-wider text-gray-400" style={{ fontWeight: 700 }}>Sin internet en casa</p>
                <p className="text-lg text-[#E53E3E] leading-none" style={{ fontWeight: 900 }}>127 hogares</p>
                <p className="text-[10px] text-gray-400">rescatados este mes</p>
              </div>
              <div className="absolute -right-6 bottom-16 rounded-2xl bg-[#00B96B] px-4 py-3 shadow-2xl">
                <p className="text-[10px] uppercase tracking-wider text-white/80 mb-0.5" style={{ fontWeight: 700 }}>Alta garantizada</p>
                <p className="text-2xl text-white leading-none" style={{ fontWeight: 900 }}>24h</p>
              </div>
            </div>
          </div>

          {/* Flecha scroll */}
          <div className="relative z-10 flex justify-center pb-8">
            <a href="#problema" className="flex flex-col items-center gap-1 text-white/25 hover:text-white/50 transition-colors">
              <span className="text-[10px] uppercase tracking-[0.3em]">Descubre más</span>
              <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/>
              </svg>
            </a>
          </div>
        </section>

        {/* FRANJA URGENCIA — transición al contenido */}
        <div className="bg-[#E53E3E] px-6 py-4">
          <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-between gap-4">
            <p className="text-white text-sm" style={{ fontWeight: 700 }}>
              🚨 Si tu hogar lleva más de 24h sin internet — <span className="underline">tienes derecho a que te lo resolvamos hoy</span>
            </p>
            <a href="#formulario"
              className="flex-shrink-0 rounded-xl bg-white px-5 py-2 text-sm text-[#E53E3E] hover:bg-red-50 transition-colors"
              style={{ fontWeight: 800 }}>
              Quiero solución ahora →
            </a>
          </div>
        </div>

      {/* EL PROBLEMA */}
      <section id="problema" className="bg-[#F5F6F8] px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <div className="h-px w-6 bg-[#E53E3E]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#E53E3E]" style={{ fontWeight: 700 }}>Lo que está pasando</span>
              <div className="h-px w-6 bg-[#E53E3E]" />
            </div>
            <h2 className="text-[clamp(22px,3.5vw,38px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>Algunas operadoras low-cost<br />están dejando a sus clientes en la calle</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16", titulo: "Empresa que quiebra", desc: "Operadoras low-cost que cierran de la noche a la mañana dejando a miles de clientes sin línea y sin devolución.", color: "#E53E3E" },
              { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", titulo: "Pagos anuales que desaparecen", desc: "Te hacen pagar 12 meses por adelantado con un descuento trampa. Luego la empresa cierra y pierdes todo.", color: "#F59E0B" },
              { icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636", titulo: "Sin soporte, sin respuesta", desc: "Llamadas que no se responden, tickets que desaparecen, chatbots inútiles. Pagan lo mínimo en atención.", color: "#7C3AED" },
              { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", titulo: "Facturas con cargos imposibles", desc: "Cargos aleatorios, conceptos inexplicables, subidas de precio sin aviso. El desorden como estrategia.", color: "#1648D8" },
              { icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", titulo: "Portabilidades bloqueadas", desc: "No te dejan salir. Bloquean la portabilidad, piden papeles imposibles, alargan el proceso eternamente.", color: "#E53E3E" },
              { icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", titulo: "Contratos con letra pequeña", desc: "Permanencias ocultas, penalizaciones abusivas, cláusulas diseñadas para atraparte y no dejarte ir.", color: "#059669" },
            ].map((item) => (
              <div key={item.titulo} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl" style={{ backgroundColor: `${item.color}12` }}>
                  <svg style={{ color: item.color, width: 20, height: 20 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                </div>
                <p className="mb-1.5 text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{item.titulo}</p>
                <p className="text-xs leading-relaxed text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LA OFERTA */}
      <section className="bg-white px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <div className="h-px w-6 bg-[#1648D8]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#1648D8]" style={{ fontWeight: 700 }}>Solo para rescatados</span>
              <div className="h-px w-6 bg-[#1648D8]" />
            </div>
            <h2 className="text-[clamp(22px,3.5vw,38px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>Tu compensación por lo que has sufrido</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-gray-400">Para clientes que vienen de compañías que han quebrado, cobrado pagos anuales o aplicado prácticas abusivas.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { num: "01", titulo: "1er mes completamente gratis", desc: "Tu primera factura con Arista es 0€. Sin truchos, sin letra pequeña. Gratis de verdad.", icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4H5z", color: "#00B96B" },
              { num: "02", titulo: "50€ en tu segunda factura", desc: "El mes 2 recibes un crédito de 50€ en tu cuenta. Una compensación real por lo que perdiste.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "#F59E0B" },
              { num: "03", titulo: "Alta en menos de 24 horas", desc: "Sin formularios kafkianos. Nosotros nos encargamos de la portabilidad. Tú solo tienes que decirnos sí.", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "#1648D8" },
            ].map((item) => (
              <div key={item.num} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <span className="absolute right-5 top-5 text-[48px] leading-none text-gray-50" style={{ fontWeight: 900 }}>{item.num}</span>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: `${item.color}15` }}>
                  <svg style={{ color: item.color, width: 22, height: 22 }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                </div>
                <p className="mb-2 text-base text-[#1A1A1A]" style={{ fontWeight: 800 }}>{item.titulo}</p>
                <p className="text-xs leading-relaxed text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-300">* Válido para clientes que acrediten venir de una compañía low-cost o con prácticas de cobro anual/dudosas.</p>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-[#F5F6F8] px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-px w-6 bg-[#00B96B]" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#00B96B]" style={{ fontWeight: 700 }}>Ya rescatados</p>
            <div className="h-px w-6 bg-[#00B96B]" />
          </div>
          <h2 className="mb-10 text-center text-[clamp(22px,3.5vw,36px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>Lo que nos cuentan</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {TESTIMONIOS.map((t) => (
              <div key={t.nombre} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.estrellas }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-500">&ldquo;{t.texto}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{t.nombre}</p>
                    <p className="text-xs text-gray-400">{t.ciudad}</p>
                  </div>
                  <span className="rounded-full bg-[#EEF2FF] px-2.5 py-1 text-[10px] text-[#1648D8]" style={{ fontWeight: 600 }}>{t.servicio}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="formulario" className="bg-white px-5 py-16 lg:px-10">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-lg lg:p-10">
            {!enviado ? (
              <>
                <div className="mb-8 text-center">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF5F5]">
                    <svg className="h-7 w-7 text-[#E53E3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                  </div>
                  <h2 className="text-2xl text-[#1A1A1A]" style={{ fontWeight: 800 }}>Solicita tu rescate</h2>
                  <p className="mt-2 text-sm text-gray-400">Cuéntanos tu situación y te llamamos hoy mismo. Primer mes gratis + 50€ garantizados.</p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>Nombre completo *</label>
                      <input name="nombre" value={form.nombre} onChange={handleChange} required placeholder="Tu nombre" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-300 outline-none transition focus:border-[#1648D8] focus:ring-1 focus:ring-[#1648D8]" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>Teléfono *</label>
                      <input name="telefono" value={form.telefono} onChange={handleChange} required type="tel" placeholder="600 000 000" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-300 outline-none transition focus:border-[#1648D8] focus:ring-1 focus:ring-[#1648D8]" />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>Email</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="tucorreo@email.com" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-300 outline-none transition focus:border-[#1648D8] focus:ring-1 focus:ring-[#1648D8]" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>¿De qué compañía vienes? *</label>
                    <select name="compania" value={form.compania} onChange={handleChange} required className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A1A] outline-none transition focus:border-[#1648D8] focus:ring-1 focus:ring-[#1648D8]">
                      <option value="" disabled>Selecciona tu operadora...</option>
                      {COMPANIAS.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-gray-500" style={{ fontWeight: 600 }}>¿Qué te ha pasado? Cuéntanoslo *</label>
                    <textarea name="problema" value={form.problema} onChange={handleChange} required rows={4} placeholder="Ej: Mi operadora quebró hace 2 semanas y llevo sin línea desde entonces..." className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#1A1A1A] placeholder-gray-300 outline-none transition focus:border-[#1648D8] focus:ring-1 focus:ring-[#1648D8]" />
                  </div>
                  <div className="rounded-xl border border-[#00B96B]/20 bg-[#F0FDF4] px-4 py-3">
                    <div className="flex items-start gap-2">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                      <p className="text-xs leading-relaxed text-green-700"><strong>Te confirmamos en menos de 2 horas.</strong> Si acreditas venir de una compañía con prácticas abusivas o que ha quebrado, recibirás el <strong>1er mes gratis + 50€ en tu 2ª factura</strong>.</p>
                    </div>
                  </div>
                  <button type="submit" disabled={sending} className="flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-base text-white transition-all hover:opacity-90 disabled:opacity-60" style={{ backgroundColor: "#E53E3E", fontWeight: 700 }}>
                    {sending ? (
                      <><svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Enviando...</>
                    ) : (
                      <>Solicitar mi rescate ahora →</>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-gray-300">Al enviar aceptas que Arista Group te contacte para gestionar tu solicitud de rescate.</p>
                </form>
              </>
            ) : (
              <div className="py-8 text-center">
                <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F0FDF4]">
                  <svg className="h-8 w-8 text-[#00B96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="text-2xl text-[#1A1A1A]" style={{ fontWeight: 800 }}>¡Rescate solicitado!</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">Hemos recibido tu solicitud vía WhatsApp. Un asesor de Arista te llamará <strong className="text-[#1A1A1A]">hoy mismo</strong> para confirmar tu alta y aplicarte el <strong className="text-[#1A1A1A]">1er mes gratis + 50€</strong>.</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm text-black" style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>Seguir en WhatsApp →</a>
                  <button onClick={() => setEnviado(false)} className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-3 text-sm text-gray-500 hover:border-gray-400 hover:text-gray-700">Enviar otra solicitud</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* POR QUÉ ARISTA */}
      <section className="bg-[#F5F6F8] px-5 py-14 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-[clamp(20px,3vw,32px)] text-[#1A1A1A] tracking-tight" style={{ fontWeight: 800 }}>Lo que Arista garantiza desde el día 1</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { t: "Sin permanencia",     d: "Libre para irte cuando quieras. Sin cláusulas de fidelización.",  color: "#00B96B" },
              { t: "Precio transparente", d: "El precio que ves en la web es el que pagas. Sin asteriscos.",    color: "#1648D8" },
              { t: "Asesor personal",     d: "Una persona real asignada a tu contrato. No un bot.",             color: "#7C3AED" },
              { t: "Empresa española",    d: "Equipo local. Una llamada y te resolvemos cualquier problema.",    color: "#F59E0B" },
            ].map((g) => (
              <div key={g.t} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="mb-2 h-1 w-10 rounded-full" style={{ backgroundColor: g.color }} />
                <p className="mb-1.5 text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{g.t}</p>
                <p className="text-xs leading-relaxed text-gray-400">{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-white px-5 py-20 text-center lg:px-10">
        <div className="mx-auto max-w-xl">
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-px w-6 bg-[#E53E3E]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#E53E3E]" style={{ fontWeight: 700 }}>No esperes más</span>
            <div className="h-px w-6 bg-[#E53E3E]" />
          </div>
          <h2 className="text-[clamp(26px,4vw,48px)] text-[#1A1A1A] leading-tight" style={{ fontWeight: 900 }}>Sal de esa situación<br />hoy mismo</h2>
          <p className="mx-auto mt-4 max-w-md text-base text-gray-400">Cada día sin línea es un día que pierdes trabajo, relaciones, tranquilidad. Llámanos ahora.</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href={`tel:${PHONE}`} className="flex w-full items-center justify-center gap-2 rounded-2xl px-8 py-4 text-base text-white transition-all hover:opacity-90 sm:w-auto" style={{ backgroundColor: "#E53E3E", fontWeight: 800 }}>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"/></svg>
              Llamar ahora
            </a>
            <a href="#formulario" className="flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 px-8 py-4 text-base text-gray-600 hover:border-[#1648D8] hover:text-[#1648D8] sm:w-auto" style={{ fontWeight: 700 }}>Volver al formulario</a>
          </div>
        </div>
      </section>

      </div>
      <Footer />
    </>
  );
}
