import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

// ── Contenido de cada artículo ────────────────────────────────────
const ARTICULOS: Record<string, {
  titulo: string;
  descripcion: string;
  fecha: string;
  tiempo: string;
  categoria: string;
  contenido: { tipo: "h2" | "h3" | "p" | "ul" | "cta"; texto?: string; items?: string[] }[];
}> = {
  "como-ahorrar-factura-telefono-alicante": {
    titulo: "Cómo ahorrar en tu factura de teléfono en Alicante en 2026",
    descripcion: "Muchos alicantinos pagan más de 80€/mes por sus servicios de telecomunicaciones. Te explicamos cómo reducir tu factura hasta un 50% sin perder cobertura ni calidad.",
    fecha: "12 mayo 2026",
    tiempo: "4 min",
    categoria: "Consejos",
    contenido: [
      { tipo: "p", texto: "La factura media de telecomunicaciones en un hogar español supera los 75€/mes. En Alicante, muchos hogares siguen pagando a Movistar u Orange precios de hace 5 años, simplemente por inercia. En este artículo te explicamos cómo reducirla de forma real." },
      { tipo: "h2", texto: "1. Revisa qué estás pagando realmente" },
      { tipo: "p", texto: "Coge tu última factura y anota cuánto pagas por fibra, por cada línea móvil y si tienes TV o servicios extra que no usas. Muchos clientes descubren que llevan meses pagando servicios que ni utilizan." },
      { tipo: "ul", items: ["Fibra: ¿la velocidad contratada es la que necesitas?", "Móviles: ¿cuántos GB gastas realmente al mes?", "TV: ¿la ves o solo la tienes por el 'pack'?", "Extras: seguros de móvil, servicios de nube, etc."] },
      { tipo: "h2", texto: "2. Compara operadoras locales vs grandes compañías" },
      { tipo: "p", texto: "Las operadoras locales como Arista operan sobre las mismas redes que las grandes (MasOrange, Movistar), pero sin la estructura de costes de las multinacionales. Esto les permite ofrecer precios hasta un 40% más bajos manteniendo la misma cobertura." },
      { tipo: "h2", texto: "3. Consolida servicios en una sola empresa" },
      { tipo: "p", texto: "Tener fibra con Movistar, móvil con Orange y luz con Endesa significa tres facturas, tres contratos y tres call centers. Consolidar todo en Arista puede suponer un ahorro de 20-30€/mes solo en la tarifa, más el ahorro de tiempo." },
      { tipo: "ul", items: ["Fibra 600Mb desde 24,90€/mes", "Pack Fibra + Móvil desde 32,90€/mes", "Fibra + Móvil + Luz desde 26€/mes (oferta Hogueras)", "Sin permanencia en todas las tarifas"] },
      { tipo: "h2", texto: "4. Porta el número sin miedo" },
      { tipo: "p", texto: "La portabilidad en España está muy regulada. El proceso es gratuito, tarda menos de 24 horas laborables y tu número queda activo durante todo el proceso. No hay corte de servicio. Arista lo gestiona todo por ti." },
      { tipo: "h2", texto: "Conclusión" },
      { tipo: "p", texto: "La mayoría de alicantinos podría ahorrar entre 20€ y 40€/mes simplemente revisando su factura y comparando alternativas. El paso más difícil es el primero: hacer el cálculo. A partir de ahí, el cambio es sencillo." },
      { tipo: "cta" },
    ],
  },

  "diferencia-fibra-600mb-fibra-1gb": {
    titulo: "¿Necesitas fibra 1Gb o con 600Mb es suficiente?",
    descripcion: "La mayoría de hogares en España no necesitan más de 600Mb. Analizamos cuándo tiene sentido pagar más por velocidad y cuándo no.",
    fecha: "5 mayo 2026",
    tiempo: "3 min",
    categoria: "Guías",
    contenido: [
      { tipo: "p", texto: "Cuando contratas fibra, lo primero que te ofrecen es 1Gb. Parece lo mejor, pero ¿realmente lo necesitas? La respuesta para la mayoría de hogares es no. Te explicamos por qué." },
      { tipo: "h2", texto: "¿Qué velocidad consume cada actividad?" },
      { tipo: "ul", items: ["Netflix 4K: 25 Mbps por pantalla", "Videollamada HD: 5-10 Mbps", "Gaming online: 10-20 Mbps", "Descarga de archivo pesado: depende de la rapidez que quieras", "Smart home / IoT: menos de 5 Mbps por dispositivo"] },
      { tipo: "p", texto: "Un hogar con 4 personas viendo Netflix, jugando online y con dispositivos conectados necesita unos 150-200 Mbps reales. Con 600Mb simétricos tienes un margen enorme." },
      { tipo: "h2", texto: "¿Cuándo sí tiene sentido 1Gb?" },
      { tipo: "ul", items: ["Trabajas desde casa con videoconferencias simultáneas en múltiples dispositivos", "Descargas archivos muy pesados con frecuencia (edición de vídeo 4K, etc.)", "Tienes más de 8 dispositivos usando internet de forma intensiva a la vez", "Alojas servidores en casa"] },
      { tipo: "h2", texto: "La diferencia de precio en Arista" },
      { tipo: "p", texto: "En Arista, la fibra 600Mb cuesta 24,90€/mes y la fibra 1Gb cuesta 32,90€/mes. Son 8€/mes más, es decir, 96€ al año. Antes de pagar esa diferencia, comprueba si realmente la usas." },
      { tipo: "h2", texto: "Conclusión" },
      { tipo: "p", texto: "Para el 80% de los hogares en Alicante, la fibra 600Mb simétrica es más que suficiente. Si ves streaming, juegas online y tienes varios móviles conectados, no notarás ninguna diferencia con 1Gb. Ahorra esos 8€/mes." },
      { tipo: "cta" },
    ],
  },

  "red-masorange-cobertura-alicante": {
    titulo: "Red MasOrange en Alicante: cobertura, velocidad y comparativa",
    descripcion: "Arista Móvil funciona sobre la red MasOrange (la antigua Orange). Analizamos su cobertura en Alicante, Elche, Benidorm y la Costa Blanca.",
    fecha: "28 abril 2026",
    tiempo: "5 min",
    categoria: "Tecnología",
    contenido: [
      { tipo: "p", texto: "Cuando contratas Arista Móvil, tu tarjeta SIM funciona sobre la red de MasOrange, la operadora resultante de la fusión de Orange y MásMóvil. Esta red es hoy la segunda más grande de España, con cobertura 5G en la mayoría de poblaciones de la provincia de Alicante." },
      { tipo: "h2", texto: "Cobertura en Alicante capital" },
      { tipo: "p", texto: "Alicante ciudad tiene cobertura 5G completa en todas las zonas: centro histórico, Playa de San Juan, Carolinas, Benalúa, Cabo de las Huertas y todos los barrios residenciales. La velocidad media en zonas urbanas supera los 200 Mbps en bajada." },
      { tipo: "h2", texto: "Cobertura en municipios cercanos" },
      { tipo: "ul", items: ["Elche: cobertura 5G en ciudad y pedanías principales", "San Vicente del Raspeig: cobertura 5G completa", "El Campello: 4G+ en toda la costa, 5G en el núcleo urbano", "Mutxamel y Sant Joan: cobertura 4G+ sólida", "Torrevieja: cobertura 4G+ en todo el litoral", "Benidorm: cobertura 5G en zona turística y residencial"] },
      { tipo: "h2", texto: "¿Qué diferencia hay entre 4G+ y 5G en la práctica?" },
      { tipo: "p", texto: "Para llamadas y datos cotidianos (redes sociales, navegación, streaming) no notarás diferencia. El 5G marca la diferencia en descargas masivas, latencia para gaming y en zonas de alta concentración de usuarios (festivales, estadios)." },
      { tipo: "h2", texto: "Comparativa de coberturas en Alicante" },
      { tipo: "ul", items: ["MasOrange (Arista): 98% cobertura 4G, 5G en capitales y costa", "Movistar: 99% cobertura 4G, 5G extendido", "Vodafone: 97% cobertura 4G, 5G en ciudades principales", "Arista ventaja: mismo precio para toda la red, sin coste de 5G"] },
      { tipo: "h2", texto: "Conclusión" },
      { tipo: "p", texto: "Si vives en Alicante o en cualquier municipio de la Costa Blanca, la cobertura de Arista Móvil es equivalente a la de Orange directamente, pero a un precio significativamente menor. Puedes comprobar cobertura en tu dirección exacta desde nuestra página de cobertura." },
      { tipo: "cta" },
    ],
  },

  "bundle-energia-telefonia-ventajas": {
    titulo: "Ventajas de tener energía y telefonía con la misma empresa",
    descripcion: "Centralizar luz, gas, fibra y móviles en un solo proveedor tiene más ventajas de las que parece. Una factura, un contacto, más ahorro.",
    fecha: "20 abril 2026",
    tiempo: "3 min",
    categoria: "Ahorro",
    contenido: [
      { tipo: "p", texto: "Cada vez más hogares en España contratan sus servicios de telecomunicaciones y energía por separado, con empresas distintas, gestionando múltiples facturas y contratos. Existe una alternativa más eficiente: centralizar todo en una sola empresa como Arista." },
      { tipo: "h2", texto: "1. Una sola factura, un solo contacto" },
      { tipo: "p", texto: "Con Arista tienes una factura mensual para fibra, móviles y energía. Un solo cargo en tu cuenta, un solo número de contacto. Cuando hay una incidencia, llamas a un número y la persona que te atiende conoce todos tus servicios." },
      { tipo: "h2", texto: "2. Ahorro económico real" },
      { tipo: "p", texto: "El pack Fibra + Energía de Arista cuesta desde 26€/mes. Por separado, una fibra básica cuesta 24,90€ y una tarifa de luz indexada con cualquier comercializadora parte de 10-15€ de término fijo. Con el pack pagas menos y tienes más." },
      { tipo: "ul", items: ["Fibra 1Gb + Luz eléctrica: desde 26€/mes (vs 30-40€ por separado)", "Sin coste de alta en ninguno de los dos servicios", "Precio garantizado: no hay subidas por 'fin de promoción'", "2 meses gratis en oferta Hogueras"] },
      { tipo: "h2", texto: "3. Mejor atención al cliente" },
      { tipo: "p", texto: "Las grandes compañías tienen departamentos separados para telefonía y energía. Si tienes un problema con la factura de luz, te derivan a un departamento; si es con la fibra, a otro. Con Arista, la misma persona gestiona todo." },
      { tipo: "h2", texto: "4. Sin permanencias cruzadas" },
      { tipo: "p", texto: "Algunos bundles de grandes operadoras incluyen cláusulas de permanencia cruzada: si cancelas la fibra, pierdes el descuento en energía. Con Arista, cada servicio es independiente. Puedes cancelar lo que quieras sin penalización." },
      { tipo: "h2", texto: "Conclusión" },
      { tipo: "p", texto: "La centralización de servicios no es solo cómoda, es rentable. Arista es la única empresa alicantina que integra fibra, móvil y energía en un mismo servicio con atención local." },
      { tipo: "cta" },
    ],
  },

  "portabilidad-como-funciona-2026": {
    titulo: "Cómo funciona la portabilidad en 2026: guía paso a paso",
    descripcion: "Cambiar de operador sin perder tu número es más fácil de lo que crees. Te explicamos el proceso completo y cuánto tarda en 2026.",
    fecha: "15 abril 2026",
    tiempo: "4 min",
    categoria: "Guías",
    contenido: [
      { tipo: "p", texto: "La portabilidad es el proceso legal que te permite cambiar de operador de telefonía conservando tu número actual. En España es completamente gratuita y está regulada por la Comisión Nacional de Mercados y la Competencia (CNMC). En 2026 el proceso es más rápido que nunca." },
      { tipo: "h2", texto: "¿Cuánto tarda una portabilidad?" },
      { tipo: "p", texto: "En España, el plazo máximo legal es de 1 día hábil desde que el nuevo operador acepta la solicitud. En la práctica, con Arista el proceso se completa en menos de 24 horas laborables." },
      { tipo: "h2", texto: "Paso a paso: cómo funciona la portabilidad con Arista" },
      { tipo: "ul", items: ["Paso 1 — Escríbenos por WhatsApp indicando tu número actual y el operador del que vienes", "Paso 2 — Te pedimos el ICC (código de la SIM) que encontrarás en tu factura o llamando a tu operador actual", "Paso 3 — Firmamos el contrato digitalmente (sin papeles)", "Paso 4 — En menos de 24h laborables tu número está activo en la red Arista", "Paso 5 — Tu SIM anterior deja de funcionar automáticamente"] },
      { tipo: "h2", texto: "¿Hay corte de servicio?" },
      { tipo: "p", texto: "El corte es mínimo: unos minutos mientras se activa la nueva SIM. No perderás llamadas ni mensajes pendientes. Si tienes eSIM, el proceso es aún más rápido y sin corte perceptible." },
      { tipo: "h2", texto: "¿Qué pasa si tengo permanencia?" },
      { tipo: "p", texto: "Si tienes permanencia con tu operador actual, podrías tener una penalización de tu compañía anterior. Sin embargo, la portabilidad en sí no tiene coste. Revisa tu contrato o llama a tu operador actual para conocer el importe exacto." },
      { tipo: "h2", texto: "¿Puedo portar también el número fijo?" },
      { tipo: "p", texto: "Sí. La portabilidad de números fijos funciona de forma similar, aunque el plazo puede ser de hasta 5 días hábiles. Consúltanos si necesitas portar un número fijo." },
      { tipo: "h2", texto: "Conclusión" },
      { tipo: "p", texto: "Cambiar de operador en 2026 es tan fácil como escribir un WhatsApp. Arista gestiona todo el proceso sin que tengas que llamar a tu operador actual, sin papeleo y sin corte de servicio apreciable." },
      { tipo: "cta" },
    ],
  },

  "sin-permanencia-ventajas-riesgos": {
    titulo: "Sin permanencia: ventajas, riesgos y qué mirar en la letra pequeña",
    descripcion: "No todas las tarifas 'sin permanencia' son iguales. Te contamos qué cláusulas revisar antes de contratar para no llevarte sorpresas.",
    fecha: "8 abril 2026",
    tiempo: "4 min",
    categoria: "Consejos",
    contenido: [
      { tipo: "p", texto: "Cada vez más operadoras anuncian tarifas 'sin permanencia'. Pero no todas son iguales. Algunas esconden cláusulas que en la práctica actúan como permanencias encubiertas. Te enseñamos qué mirar antes de firmar." },
      { tipo: "h2", texto: "¿Qué significa 'sin permanencia' de verdad?" },
      { tipo: "p", texto: "Una tarifa sin permanencia real significa que puedes darte de baja en cualquier momento, sin pagar ninguna penalización, sin plazos mínimos y sin coste de baja. La baja puede solicitarse con tan solo un aviso previo (generalmente 15 días)." },
      { tipo: "h2", texto: "Cláusulas que debes revisar" },
      { tipo: "ul", items: ["'Descuento de bienvenida': si el precio actual incluye un descuento temporal, al darte de baja podrían reclamarte la diferencia", "Coste de instalación: si el alta fue gratuita condicionada a un mínimo de permanencia, la baja anticipada puede tener coste", "Equipos subvencionados: si te dieron un router de alta gama 'gratis', puede haber un coste de devolución", "Permanencias cruzadas: en packs con descuento, cancelar un servicio puede eliminar el descuento del otro"] },
      { tipo: "h2", texto: "Cómo es la política sin permanencia de Arista" },
      { tipo: "p", texto: "En Arista, sin permanencia significa exactamente eso. No hay descuentos de bienvenida que generen deuda futura, no hay equipos con coste encubierto, no hay cláusulas cruzadas entre servicios. El precio que ves es el precio que pagas, y puedes cancelar cuando quieras." },
      { tipo: "ul", items: ["Baja gratuita en cualquier momento", "Sin coste de devolución de router (se queda el cliente)", "Sin penalización económica por baja anticipada", "Precio plano desde el primer mes: sin promociones que suben al 6° mes"] },
      { tipo: "h2", texto: "¿Cuándo puede convenir una tarifa con permanencia?" },
      { tipo: "p", texto: "Hay casos en que una tarifa con permanencia puede ser beneficiosa: si el descuento es muy significativo y tienes claro que vas a quedarte al menos ese tiempo. En telecomunicaciones, permanencias de 12-24 meses a veces llevan descuentos de 15-25€/mes. Calcula si compensa." },
      { tipo: "h2", texto: "Conclusión" },
      { tipo: "p", texto: "Lee siempre el contrato antes de firmar, especialmente las cláusulas de baja. Con Arista no necesitas preocuparte: nuestra política de sin permanencia es transparente desde el día uno." },
      { tipo: "cta" },
    ],
  },
};

// ── generateStaticParams ─────────────────────────────────────────
export function generateStaticParams() {
  return Object.keys(ARTICULOS).map((slug) => ({ slug }));
}

// ── generateMetadata ─────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const art = ARTICULOS[slug];
  if (!art) return { title: "Artículo no encontrado" };
  return {
    title: `${art.titulo} | Arista`,
    description: art.descripcion,
    alternates: { canonical: `https://aristagroup.es/blog/${slug}` },
    openGraph: {
      title: art.titulo,
      description: art.descripcion,
      url: `https://aristagroup.es/blog/${slug}`,
      siteName: "Arista Group",
      locale: "es_ES",
      type: "article",
    },
  };
}

const CATEGORIA_COLOR: Record<string, { bg: string; text: string; bar: string }> = {
  Consejos:   { bg: "#EEF2FF", text: "#1648D8", bar: "#1648D8" },
  Guías:      { bg: "#DCFCE7", text: "#15803D", bar: "#00B96B" },
  Ahorro:     { bg: "#FEF9C3", text: "#92400E", bar: "#FFB800" },
  Tecnología: { bg: "#F3E8FF", text: "#7C3AED", bar: "#7C3AED" },
};

// ── Page ─────────────────────────────────────────────────────────
export default async function BlogArticuloPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const art = ARTICULOS[slug];
  if (!art) notFound();

  const colores = CATEGORIA_COLOR[art.categoria] ?? CATEGORIA_COLOR["Consejos"];
  const waMsg = encodeURIComponent(`Hola, he leído el artículo "${art.titulo}" y quiero información sobre las tarifas de Arista.`);

  const otros = Object.entries(ARTICULOS)
    .filter(([s]) => s !== slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="mt-[108px]">

        {/* ── HERO ── */}
        <section className="bg-[#F5F6F8] px-6 py-12 lg:px-8 lg:py-16 border-b border-gray-100">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <Link href="/resenas" className="text-sm text-[#1648D8] hover:underline">← Volver a reseñas</Link>
              <span className="text-gray-300">/</span>
              <span className="rounded-full px-3 py-1 text-[11px]"
                style={{ backgroundColor: colores.bg, color: colores.text, fontWeight: 700 }}>
                {art.categoria}
              </span>
            </div>
            <h1 className="text-[clamp(24px,4vw,44px)] text-[#1A1A1A] leading-tight tracking-tight mb-4" style={{ fontWeight: 900 }}>
              {art.titulo}
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mb-6">{art.descripcion}</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>📅 {art.fecha}</span>
              <span className="text-gray-200">|</span>
              <span>⏱ {art.tiempo} de lectura</span>
            </div>
            <div className="mt-6 h-1 w-full rounded-full" style={{ backgroundColor: colores.bar }} />
          </div>
        </section>

        {/* ── CONTENIDO ── */}
        <section className="bg-white px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none">
              {art.contenido.map((bloque, i) => {
                if (bloque.tipo === "h2") return (
                  <h2 key={i} className="text-xl text-[#1A1A1A] mt-10 mb-3" style={{ fontWeight: 800 }}>
                    {bloque.texto}
                  </h2>
                );
                if (bloque.tipo === "h3") return (
                  <h3 key={i} className="text-base text-[#1A1A1A] mt-6 mb-2" style={{ fontWeight: 700 }}>
                    {bloque.texto}
                  </h3>
                );
                if (bloque.tipo === "p") return (
                  <p key={i} className="text-base text-[#444] leading-relaxed mb-4">
                    {bloque.texto}
                  </p>
                );
                if (bloque.tipo === "ul") return (
                  <ul key={i} className="my-4 flex flex-col gap-2 pl-0">
                    {bloque.items?.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#444] leading-relaxed">
                        <svg className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: colores.bar }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                );
                if (bloque.tipo === "cta") return (
                  <div key={i} className="mt-10 rounded-2xl bg-[#EEF2FF] border border-[#1648D8]/20 p-6 flex flex-col sm:flex-row items-center gap-4">
                    <div className="flex-1">
                      <p className="text-base text-[#1A1A1A] mb-1" style={{ fontWeight: 800 }}>¿Quieres cambiar a Arista?</p>
                      <p className="text-sm text-gray-500">Sin permanencia · Alta en 24h · Empresa alicantina</p>
                    </div>
                    <a href={`https://wa.me/${WA}?text=${waMsg}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm text-black hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#00B96B", fontWeight: 700 }}>
                      Consultar tarifas →
                    </a>
                  </div>
                );
                return null;
              })}
            </div>
          </div>
        </section>

        {/* ── OTROS ARTÍCULOS ── */}
        {otros.length > 0 && (
          <section className="bg-[#F5F6F8] px-6 py-14 lg:px-8 border-t border-gray-100">
            <div className="mx-auto max-w-3xl">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1] mb-6" style={{ fontWeight: 700 }}>
                Más artículos
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {otros.map(([s, a]) => {
                  const c = CATEGORIA_COLOR[a.categoria] ?? CATEGORIA_COLOR["Consejos"];
                  return (
                    <Link key={s} href={`/blog/${s}`}
                      className="group rounded-2xl bg-white border border-gray-100 hover:border-[#1648D8]/30 hover:shadow-md transition-all overflow-hidden">
                      <div className="h-1" style={{ backgroundColor: c.bar }} />
                      <div className="p-4 flex flex-col gap-2">
                        <span className="rounded-full px-2 py-0.5 text-[10px] self-start"
                          style={{ backgroundColor: c.bg, color: c.text, fontWeight: 700 }}>
                          {a.categoria}
                        </span>
                        <p className="text-sm text-[#1A1A1A] leading-snug group-hover:text-[#1648D8] transition-colors" style={{ fontWeight: 700 }}>
                          {a.titulo}
                        </p>
                        <p className="text-[11px] text-gray-400">{a.tiempo} lectura</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6 text-center">
                <Link href="/resenas" className="text-sm text-[#1648D8] hover:underline" style={{ fontWeight: 600 }}>
                  ← Volver a reseñas y blog
                </Link>
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
