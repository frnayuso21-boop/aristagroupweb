export interface TarifaLine {
  tipo: "fibra" | "movil" | "tv" | "fijo";
  texto: string;
}

export interface Tarifa {
  slug: string;
  nombre: string;
  tagline: string;
  precioMes: number;
  badge: string | null;
  destacada: boolean;
  categoria: "solo-fibra" | "fibra-movil" | "pack-familiar";
  lineas: TarifaLine[];
  features: string[];
  seoTitle: string;
  seoDesc: string;
  preguntasFAQ: { q: string; a: string }[];
}

export const TARIFAS: Tarifa[] = [
  {
    slug: "arista-only-600",
    nombre: "Arista Only 600",
    tagline: "Fibra 600Mb simétrica. Sin más, sin menos.",
    precioMes: 24.9,
    badge: null,
    destacada: false,
    categoria: "solo-fibra",
    lineas: [
      { tipo: "fibra",  texto: "Fibra 600Mb simétrica" },
      { tipo: "fijo",   texto: "Sin permanencia" },
      { tipo: "fijo",   texto: "Alta en 24h" },
    ],
    features: [
      "600 Mb simétricos reales",
      "Router incluido sin coste",
      "Sin permanencia ni penalización",
      "Alta en menos de 24 horas",
      "Red Orange — cobertura nacional",
      "Soporte directo por WhatsApp",
    ],
    seoTitle: "Fibra 600Mb sin permanencia | Arista Only 600 — 24,90€/mes",
    seoDesc: "Fibra 600Mb simétrica por 24,90€/mes. Sin permanencia, alta en 24h, red Orange. La fibra más rápida de Alicante sin letra pequeña.",
    preguntasFAQ: [
      { q: "¿Cuánto tarda el alta?", a: "Menos de 24 horas. Nuestro técnico lo programa y al día siguiente tienes conexión." },
      { q: "¿Hay permanencia?", a: "No. Puedes darte de baja cuando quieras sin ninguna penalización." },
      { q: "¿El router está incluido?", a: "Sí, el router es tuyo desde el día 1 sin coste adicional." },
      { q: "¿Es simétrica la velocidad?", a: "Sí. 600Mb de bajada y 600Mb de subida. Lo que ves es lo que tienes." },
    ],
  },
  {
    slug: "arista-only-1000",
    nombre: "Arista Only 1000",
    tagline: "1 Gigabyte de fibra pura. Para los que no quieren límites.",
    precioMes: 32.9,
    badge: null,
    destacada: false,
    categoria: "solo-fibra",
    lineas: [
      { tipo: "fibra",  texto: "Fibra 1Gb simétrica" },
      { tipo: "fijo",   texto: "Sin permanencia" },
      { tipo: "fijo",   texto: "Alta en 24h" },
    ],
    features: [
      "1.000 Mb (1Gb) simétricos reales",
      "Router de alta gama incluido",
      "Sin permanencia ni penalización",
      "Alta en menos de 24 horas",
      "Red Orange — la mejor cobertura",
      "Ideal para teletrabajo y streaming 4K",
    ],
    seoTitle: "Fibra 1Gb sin permanencia | Arista Only 1000 — 32,90€/mes",
    seoDesc: "Fibra 1Gb simétrica por 32,90€/mes. Sin permanencia, alta en 24h, red Orange. La fibra gigabit más rápida de Alicante.",
    preguntasFAQ: [
      { q: "¿Cuánto tarda el alta?", a: "Menos de 24 horas desde la firma del contrato." },
      { q: "¿Es 1Gb real?", a: "Sí, 1.000Mb simétricos. Tanto de bajada como de subida." },
      { q: "¿Hay permanencia?", a: "No. Sin penalización por cancelación." },
      { q: "¿Para qué sirve 1Gb?", a: "Para teletrabajo intensivo, videollamadas simultáneas, gaming y streaming en 4K sin cortes." },
    ],
  },
  {
    slug: "fibra-600-movil-60gb",
    nombre: "Fibra 600Mb + Móvil 60GB",
    tagline: "Tu fibra y tu móvil en una sola factura. 60GB 5G para lo que necesites.",
    precioMes: 32.9,
    badge: null,
    destacada: false,
    categoria: "fibra-movil",
    lineas: [
      { tipo: "fibra",  texto: "Fibra 600Mb simétrica" },
      { tipo: "movil",  texto: "1 línea móvil 60GB 5G" },
      { tipo: "fijo",   texto: "Sin permanencia" },
    ],
    features: [
      "Fibra 600Mb simétrica en casa",
      "1 línea móvil 60GB en 5G",
      "GBs acumulables mes a mes",
      "Red Orange — cobertura nacional",
      "Sin permanencia en ninguno de los dos",
      "Una sola factura para todo",
    ],
    seoTitle: "Fibra 600Mb + Móvil 60GB 5G | Arista — 32,90€/mes",
    seoDesc: "Fibra 600Mb + 1 línea móvil 60GB 5G por 32,90€/mes. Red Orange. Sin permanencia. Una sola factura. Alicante y resto de España.",
    preguntasFAQ: [
      { q: "¿Los GB del móvil son acumulables?", a: "Sí. Los gigas que no uses este mes pasan al siguiente. No se pierden." },
      { q: "¿Qué velocidad tiene el 5G?", a: "La red 5G de Orange ofrece velocidades de hasta 1Gb en zonas con cobertura 5G." },
      { q: "¿Puedo separar el contrato de fibra y móvil?", a: "No, este pack es conjunto. Si quieres por separado, contrata los productos individuales." },
      { q: "¿Hay permanencia?", a: "No. Ni en la fibra ni en el móvil. Total libertad." },
    ],
  },
  {
    slug: "fibra-600-movil-80gb",
    nombre: "Fibra 600Mb + Móvil 80GB",
    tagline: "600Mb en casa y 80GB 5G en el bolsillo. El pack para los que siempre están conectados.",
    precioMes: 33.9,
    badge: null,
    destacada: false,
    categoria: "fibra-movil",
    lineas: [
      { tipo: "fibra",  texto: "Fibra 600Mb simétrica" },
      { tipo: "movil",  texto: "1 línea móvil 80GB 5G" },
      { tipo: "fijo",   texto: "Sin permanencia" },
    ],
    features: [
      "Fibra 600Mb simétrica en casa",
      "1 línea móvil 80GB en red 5G Orange",
      "GBs que no gastas no se pierden",
      "Roaming incluido en UE",
      "Sin permanencia en fibra ni móvil",
      "Una sola factura mensual",
    ],
    seoTitle: "Fibra 600Mb + Móvil 80GB 5G | Arista — 33,90€/mes",
    seoDesc: "Fibra 600Mb en casa + 80GB 5G en el móvil por solo 33,90€/mes. Sin permanencia, GBs acumulables, red Orange. Alicante.",
    preguntasFAQ: [
      { q: "¿80GB es suficiente para Netflix y redes?", a: "Con 80GB tienes de sobra para streaming en móvil, redes sociales y trabajo diario." },
      { q: "¿Los GB se acumulan?", a: "Sí. Los gigas que sobren al final de mes pasan al siguiente." },
      { q: "¿Funciona en toda España?", a: "Sí, red Orange con cobertura en más del 99% del territorio nacional." },
      { q: "¿Hay permanencia?", a: "No. Cero permanencia. Te puedes ir cuando quieras." },
    ],
  },
  {
    slug: "pack-pareja-600",
    nombre: "Pack Pareja 600",
    tagline: "Fibra en casa y 2 móviles para dos. Todo por menos de lo que pagáis ahora.",
    precioMes: 35.9,
    badge: null,
    destacada: false,
    categoria: "fibra-movil",
    lineas: [
      { tipo: "fibra",  texto: "Fibra 600Mb simétrica" },
      { tipo: "movil",  texto: "2 líneas 30GB 5G" },
      { tipo: "fijo",   texto: "Sin permanencia" },
    ],
    features: [
      "Fibra 600Mb simétrica",
      "2 líneas móviles con 30GB 5G cada una",
      "GBs acumulables en cada línea",
      "Sin permanencia en ninguno",
      "Red Orange — la mejor cobertura",
      "Ideal para parejas y compañeros de piso",
    ],
    seoTitle: "Fibra 600Mb + 2 Móviles 30GB 5G | Pack Pareja — 35,90€/mes",
    seoDesc: "Pack Pareja: Fibra 600Mb + 2 líneas móviles 30GB 5G por 35,90€/mes. Sin permanencia. Red Orange. El mejor pack para parejas en Alicante.",
    preguntasFAQ: [
      { q: "¿Las dos líneas son independientes?", a: "Sí, cada línea tiene su propio número y sus 30GB. Son independientes entre sí." },
      { q: "¿Podemos ser de domicilios distintos?", a: "La fibra se instala en un domicilio. Las líneas móviles se pueden usar desde cualquier lugar." },
      { q: "¿Hay permanencia?", a: "No. Ninguna de las tres partes tiene permanencia." },
      { q: "¿Los GB se comparten o son por línea?", a: "Son individuales: 30GB por cada línea. No se comparten." },
    ],
  },
  {
    slug: "fibra-600-infinity",
    nombre: "Arista 600 Infinity",
    tagline: "Fibra 600Mb y móvil ilimitado. Sin contar gigas. Sin preocupaciones.",
    precioMes: 40.9,
    badge: "Más popular",
    destacada: true,
    categoria: "fibra-movil",
    lineas: [
      { tipo: "fibra",  texto: "Fibra 600Mb simétrica" },
      { tipo: "movil",  texto: "1 móvil ilimitado 5G" },
      { tipo: "fijo",   texto: "Sin permanencia" },
    ],
    features: [
      "Fibra 600Mb simétrica en casa",
      "1 línea móvil con datos ILIMITADOS en 5G",
      "Sin contar gigas nunca más",
      "Red Orange — cobertura nacional completa",
      "Sin permanencia",
      "Una sola factura, un solo contacto",
    ],
    seoTitle: "Fibra 600Mb + Móvil Ilimitado 5G | Arista Infinity — 40,90€/mes",
    seoDesc: "Fibra 600Mb + datos ilimitados en 5G por 40,90€/mes. Sin permanencia. Sin contar gigas. Red Orange. La tarifa todo ilimitado de Alicante.",
    preguntasFAQ: [
      { q: "¿Ilimitado de verdad?", a: "Sí. Datos ilimitados en 5G sin cortes de velocidad ni límite oculto de consumo." },
      { q: "¿Hay permanencia?", a: "No. Total libertad para darte de baja cuando quieras." },
      { q: "¿Funciona en el extranjero?", a: "Sí, roaming en la UE incluido con los GB del plan." },
      { q: "¿Puedo añadir más líneas?", a: "Sí, puedes añadir líneas adicionales. Consúltanos por WhatsApp." },
    ],
  },
  {
    slug: "pack-pareja-1000",
    nombre: "Pack Pareja 1000",
    tagline: "1Gb de fibra y 2 móviles 5G. El pack para parejas que no quieren limitaciones.",
    precioMes: 37.95,
    badge: null,
    destacada: false,
    categoria: "fibra-movil",
    lineas: [
      { tipo: "fibra",  texto: "Fibra 1Gb simétrica" },
      { tipo: "movil",  texto: "2 líneas 30GB 5G" },
      { tipo: "fijo",   texto: "Sin permanencia" },
    ],
    features: [
      "Fibra 1Gb (1.000Mb) simétrica",
      "2 líneas móviles con 30GB 5G cada una",
      "Router gigabit incluido",
      "GBs acumulables por línea",
      "Sin permanencia",
      "Red Orange — mejor cobertura de España",
    ],
    seoTitle: "Fibra 1Gb + 2 Móviles 30GB 5G | Pack Pareja 1000 — 37,95€/mes",
    seoDesc: "Fibra 1Gb + 2 líneas 30GB 5G por 37,95€/mes. Sin permanencia. Red Orange. El pack para parejas con máxima velocidad en Alicante.",
    preguntasFAQ: [
      { q: "¿Por qué elegir 1Gb si ya tengo 600?", a: "Con 1Gb trabajas, haces streaming en 4K y videollamadas simultáneas sin que nada vaya lento." },
      { q: "¿Las líneas son independientes?", a: "Sí, cada una tiene sus 30GB. No comparten datos." },
      { q: "¿Hay permanencia?", a: "No. Ni en la fibra ni en los móviles." },
    ],
  },
  {
    slug: "pack-familiar-30gb",
    nombre: "Pack Familiar 30GB",
    tagline: "Fibra + 3 móviles + TV. Todo para la familia en una sola factura.",
    precioMes: 45,
    badge: null,
    destacada: false,
    categoria: "pack-familiar",
    lineas: [
      { tipo: "fibra",  texto: "Fibra 600Mb simétrica" },
      { tipo: "movil",  texto: "3 líneas 30GB 5G" },
      { tipo: "tv",     texto: "TV + Fijo regalo" },
    ],
    features: [
      "Fibra 600Mb simétrica",
      "3 líneas móviles con 30GB 5G cada una",
      "TV incluida con canales básicos",
      "Fijo del hogar incluido",
      "GBs acumulables en cada línea",
      "Sin permanencia en toda la familia",
    ],
    seoTitle: "Pack Familiar: Fibra + 3 Móviles + TV | Arista — 45€/mes",
    seoDesc: "Pack Familiar: Fibra 600Mb + 3 líneas 30GB 5G + TV por 45€/mes. Sin permanencia. Red Orange. El pack completo para familias en Alicante.",
    preguntasFAQ: [
      { q: "¿La TV qué canales incluye?", a: "Incluye los canales básicos en HD. Puedes ampliar con packs adicionales." },
      { q: "¿El fijo está incluido?", a: "Sí, el número fijo del hogar está incluido sin coste extra." },
      { q: "¿Pueden ser de distintas edades los titulares de las líneas?", a: "Sí, las líneas se asignan a quien quieras del núcleo familiar." },
      { q: "¿Hay permanencia?", a: "No. Ni en la fibra, ni en los móviles, ni en la TV." },
    ],
  },
  {
    slug: "pack-familiar-full",
    nombre: "Pack Familiar Full",
    tagline: "Lo más completo de Arista. Fibra + 3 ilimitados + TV. Para familias sin límites.",
    precioMes: 60,
    badge: "Lo más completo",
    destacada: true,
    categoria: "pack-familiar",
    lineas: [
      { tipo: "fibra",  texto: "Fibra 600Mb simétrica" },
      { tipo: "movil",  texto: "3 móviles ilimitados 5G" },
      { tipo: "tv",     texto: "TV + Fijo regalo" },
    ],
    features: [
      "Fibra 600Mb simétrica",
      "3 líneas móviles con datos ILIMITADOS en 5G",
      "TV incluida con canales básicos",
      "Fijo del hogar incluido",
      "Sin contar gigas en ningún móvil",
      "Sin permanencia absoluta",
    ],
    seoTitle: "Pack Familiar Full: Fibra + 3 Ilimitados + TV | Arista — 60€/mes",
    seoDesc: "Pack Familiar Full: Fibra 600Mb + 3 líneas ilimitadas 5G + TV por 60€/mes. Sin permanencia. El pack más completo para familias en Alicante.",
    preguntasFAQ: [
      { q: "¿Los 3 móviles son ilimitados de verdad?", a: "Sí. Las 3 líneas tienen datos ilimitados en 5G sin corte de velocidad." },
      { q: "¿La TV qué incluye?", a: "TV básica en HD. Se pueden añadir packs deportivos y de cine." },
      { q: "¿Hay permanencia?", a: "No. Zero permanencia en todo el pack." },
      { q: "¿Puedo cambiar a un pack inferior después?", a: "Sí, sin penalización. Llámanos o escríbenos por WhatsApp." },
    ],
  },
  {
    slug: "pack-familiar-1000",
    nombre: "Pack Familiar 1000",
    tagline: "1Gb + 3 ilimitados + TV. La familia entera a máxima velocidad.",
    precioMes: 65,
    badge: null,
    destacada: false,
    categoria: "pack-familiar",
    lineas: [
      { tipo: "fibra",  texto: "Fibra 1Gb simétrica" },
      { tipo: "movil",  texto: "3 móviles ilimitados 5G" },
      { tipo: "tv",     texto: "TV + Fijo regalo" },
    ],
    features: [
      "Fibra 1Gb (1.000Mb) simétrica",
      "3 líneas móviles con datos ILIMITADOS en 5G",
      "TV incluida con canales básicos",
      "Fijo del hogar incluido",
      "Router gigabit de alta gama",
      "Sin permanencia en nada",
    ],
    seoTitle: "Pack Familiar 1Gb + 3 Ilimitados + TV | Arista — 65€/mes",
    seoDesc: "Pack Familiar 1000: Fibra 1Gb + 3 móviles ilimitados 5G + TV por 65€/mes. Sin permanencia. Red Orange. El pack más potente de Alicante.",
    preguntasFAQ: [
      { q: "¿Merece la pena el 1Gb para familia?", a: "Con varios dispositivos conectados a la vez, el 1Gb asegura que nadie sufra lag ni lentitud." },
      { q: "¿Los 3 móviles son ilimitados?", a: "Sí. Los 3 con datos ilimitados en 5G." },
      { q: "¿Hay permanencia?", a: "No. Ni fibra, ni móviles, ni TV." },
    ],
  },
];

export function getTarifaBySlug(slug: string): Tarifa | undefined {
  return TARIFAS.find(t => t.slug === slug);
}
