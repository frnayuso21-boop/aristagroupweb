import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cómo entender tu factura de la luz | Guía completa 2026 | Arista Energía",
  description:
    "Aprende a leer tu factura de electricidad paso a paso. Qué es el término de potencia, el kWh, el impuesto eléctrico y el IVA. Guía clara de Arista Energía.",
  alternates: { canonical: "https://aristagroup.es/entender-factura" },
};

const WA = process.env.NEXT_PUBLIC_WHATSAPP || "34621192578";

const partesFactura = [
  {
    numero: "1",
    color: "#1648D8",
    bg: "#EEF2FF",
    titulo: "Término de potencia (parte fija)",
    desc: "Es el coste fijo que pagas todos los meses, independientemente de cuánta luz consumas. Se calcula multiplicando los kW contratados por el precio del kW/día. Si tienes contratados 3,45 kW, pagas ese término aunque no enciendas ni una bombilla.",
    consejo: "Ajusta tu potencia a tu consumo real. Muchos hogares tienen más potencia contratada de la que necesitan y pagan de más cada mes.",
    ejemplo: "3,45 kW × 0,121 €/kW/día × 30 días = 12,50 €/mes",
  },
  {
    numero: "2",
    color: "#00B96B",
    bg: "#DCFCE7",
    titulo: "Término de energía (parte variable)",
    desc: "Es lo que pagas por cada kWh que consumes. Es la parte más variable de tu factura y la que más depende de tus hábitos de consumo. Con Arista tienes un precio fijo de 0,119 €/kWh garantizado de por vida, sin importar si el mercado sube.",
    consejo: "Con precio fijo como el de Arista, sabes exactamente cuánto vas a pagar por cada kWh. En el mercado indexado (PVPC), el precio cambia cada hora.",
    ejemplo: "280 kWh × 0,119 €/kWh = 33,32 €/mes",
  },
  {
    numero: "3",
    color: "#F59E0B",
    bg: "#FEF3C7",
    titulo: "Impuesto eléctrico (5,11%)",
    desc: "Es un impuesto obligatorio que aplica sobre la suma del término de potencia y el término de energía. Lo establece el gobierno y ninguna comercializadora puede eliminarlo. Actualmente es del 5,11% aunque puede variar según legislación.",
    consejo: "Este impuesto lo paga todo el mundo. No tiene margen de negociación con la comercializadora.",
    ejemplo: "(12,50 + 33,32) × 5,11% = 2,34 €/mes",
  },
  {
    numero: "4",
    color: "#6B7280",
    bg: "#F3F4F6",
    titulo: "Alquiler del contador",
    desc: "Es el coste mensual por el alquiler del equipo de medida (el contador). Lo cobra la empresa distribuidora (Red Eléctrica, no tu comercializadora) y suele ser entre 0,70 y 0,90 €/mes. Es un coste fijo y obligatorio.",
    consejo: "Si ya tienes el contador en propiedad (contadores antiguos), no pagas este concepto.",
    ejemplo: "Coste fijo: 0,81 €/mes",
  },
  {
    numero: "5",
    color: "#7C3AED",
    bg: "#EDE9FE",
    titulo: "IVA (21%)",
    desc: "El Impuesto sobre el Valor Añadido se aplica sobre todos los conceptos anteriores. En energía eléctrica es del 21%, aunque en ciertos períodos el gobierno puede aplicar reducciones temporales. Es el impuesto más grande de la factura.",
    consejo: "El IVA no lo controla tu comercializadora. Si hay reducciones fiscales, se aplican automáticamente en tu factura.",
    ejemplo: "(12,50 + 33,32 + 2,34 + 0,81) × 21% = 10,28 €",
  },
];

const erroresComunes = [
  {
    error: "Potencia contratada demasiado alta",
    consecuencia: "Pagas el término de potencia por kW que nunca usas.",
    solucion: "Revisa tu consumo máximo en las últimas facturas y ajústalo. Arista te ayuda gratis.",
  },
  {
    error: "No entender el precio del kWh",
    consecuencia: "En PVPC el precio cambia cada hora. Una lavadora a las 21h puede costarte el doble que a las 14h.",
    solucion: "Con Arista tienes precio fijo garantizado. Sin horarios, sin sorpresas.",
  },
  {
    error: "Confundir comercializadora con distribuidora",
    consecuencia: "Muchos llaman al número equivocado cuando hay un corte de luz.",
    solucion: "La distribuidora (Iberdrola, Endesa distribución...) gestiona la red. La comercializadora (Arista) gestiona tu contrato y precio.",
  },
  {
    error: "No comparar cuando llega la renovación",
    consecuencia: "Te mantienen en una tarifa mala por inercia.",
    solucion: "Cada vez que puedas comparar, hazlo. Con Arista el cambio tarda 24h y no hay corte de luz.",
  },
];

const glosario = [
  { termino: "kW (kilovatio)", def: "Unidad de potencia eléctrica. Indica la máxima potencia que puedes usar a la vez." },
  { termino: "kWh (kilovatio hora)", def: "Unidad de energía consumida. Es lo que mide tu contador. Un kWh es usar 1.000 W durante 1 hora (ej: 10 bombillas de 100W encendidas 1 hora)." },
  { termino: "PVPC", def: "Precio Voluntario al Pequeño Consumidor. Tarifa regulada cuyo precio varía cada hora según el mercado eléctrico." },
  { termino: "Tarifa fija", def: "Precio del kWh fijo pactado con la comercializadora. No varía aunque suba el mercado." },
  { termino: "Distribuidora", def: "Empresa que gestiona la red eléctrica física (cables, transformadores). No es tu comercializadora." },
  { termino: "Comercializadora", def: "Empresa que te vende la electricidad y gestiona tu contrato (como Arista Energía)." },
  { termino: "Potencia contratada", def: "Máxima potencia que puedes usar simultáneamente. Si la superas, salta el diferencial." },
  { termino: "Impuesto eléctrico", def: "Impuesto del 5,11% sobre el consumo y la potencia. Lo establece el Estado." },
];

export default function EntenderFacturaPage() {
  return (
    <>
      <Header />
      <main>

        {/* HERO */}
        <section className="mt-[108px] bg-[#0D47A1] px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/70" style={{ fontWeight: 700 }}>Guía práctica 2026</span>
            </div>
            <h1 className="text-[clamp(28px,5vw,56px)] text-white leading-tight tracking-tight mb-5" style={{ fontWeight: 900 }}>
              Cómo entender<br />
              <span style={{ color: "#FFB800" }}>tu factura de la luz</span>
            </h1>
            <p className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed mb-8">
              La factura eléctrica tiene 5 partes principales. En esta guía te explicamos cada una con un ejemplo real para que no vuelvas a pagar sin entender qué estás pagando.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="#partes" className="inline-flex items-center gap-2 rounded-xl bg-[#FFB800] px-7 py-3.5 text-sm text-black hover:opacity-90 transition-opacity" style={{ fontWeight: 700 }}>
                Ver la guía ↓
              </a>
              <Link href="/fibra-energia" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm text-white/80 hover:border-white hover:text-white transition-colors">
                Ver tarifas Arista →
              </Link>
            </div>
          </div>
        </section>

        {/* FACTURA VISUAL SIMPLIFICADA */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1] mb-2" style={{ fontWeight: 700 }}>Ejemplo real</p>
              <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>Una factura de 280 kWh</h2>
            </div>

            {/* Barra visual de la factura */}
            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden mb-8">
              <div className="bg-[#0D47A1] px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/60" style={{ fontWeight: 700 }}>Arista Energía · Ejemplo</p>
                  <p className="text-base text-white" style={{ fontWeight: 800 }}>Factura mensual — Hogar tipo</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl text-white" style={{ fontWeight: 900 }}>59,25 €</p>
                  <p className="text-[11px] text-white/50">Total con IVA</p>
                </div>
              </div>

              {/* Barra proporcional */}
              <div className="px-6 pt-5 pb-3">
                <p className="text-[11px] text-gray-400 mb-2" style={{ fontWeight: 600 }}>Distribución del gasto</p>
                <div className="flex h-8 w-full overflow-hidden rounded-xl">
                  <div className="flex items-center justify-center text-[10px] text-white" style={{ width: "21%", backgroundColor: "#1648D8", fontWeight: 700 }}>21%</div>
                  <div className="flex items-center justify-center text-[10px] text-white" style={{ width: "56%", backgroundColor: "#00B96B", fontWeight: 700 }}>56%</div>
                  <div className="flex items-center justify-center text-[10px] text-black" style={{ width: "4%",  backgroundColor: "#F59E0B", fontWeight: 700 }}></div>
                  <div className="flex items-center justify-center text-[10px] text-white" style={{ width: "2%",  backgroundColor: "#6B7280" }}></div>
                  <div className="flex items-center justify-center text-[10px] text-white" style={{ width: "17%", backgroundColor: "#7C3AED", fontWeight: 700 }}>17%</div>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
                  {[
                    { color: "#1648D8", label: "Potencia — 12,50€" },
                    { color: "#00B96B", label: "Energía — 33,32€" },
                    { color: "#F59E0B", label: "Imp. eléctrico — 2,34€" },
                    { color: "#6B7280", label: "Contador — 0,81€" },
                    { color: "#7C3AED", label: "IVA — 10,28€" },
                  ].map((l) => (
                    <div key={l.label} className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: l.color }} />
                      <span className="text-xs text-gray-500">{l.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 PARTES */}
        <section id="partes" className="bg-white px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1] mb-2" style={{ fontWeight: 700 }}>Explicación completa</p>
              <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>Las 5 partes de tu factura</h2>
            </div>
            <div className="flex flex-col gap-6">
              {partesFactura.map((p) => (
                <div key={p.numero} className="rounded-2xl border border-gray-200 overflow-hidden">
                  <div className="flex items-center gap-4 px-6 py-4" style={{ backgroundColor: p.bg }}>
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white text-sm" style={{ backgroundColor: p.color, fontWeight: 800 }}>
                      {p.numero}
                    </div>
                    <h3 className="text-base text-[#1A1A1A]" style={{ fontWeight: 800 }}>{p.titulo}</h3>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.desc}</p>
                    <div className="rounded-xl bg-[#F9FAFB] border border-gray-100 px-4 py-3 mb-3">
                      <p className="text-[11px] uppercase tracking-[0.15em] text-gray-400 mb-1" style={{ fontWeight: 700 }}>Ejemplo de cálculo</p>
                      <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 600 }}>{p.ejemplo}</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-1 rounded-full flex-shrink-0 self-stretch" style={{ backgroundColor: p.color }} />
                      <p className="text-sm text-gray-500 leading-relaxed"><strong>Consejo Arista:</strong> {p.consejo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ERRORES COMUNES */}
        <section className="bg-[#F5F7FF] px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1] mb-2" style={{ fontWeight: 700 }}>Errores frecuentes</p>
              <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>Lo que más confunde a los clientes</h2>
            </div>
            <div className="flex flex-col gap-4">
              {erroresComunes.map((e, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs" style={{ fontWeight: 800 }}>✗</span>
                    <p className="text-sm text-[#1A1A1A]" style={{ fontWeight: 700 }}>{e.error}</p>
                  </div>
                  <p className="text-sm text-gray-500 mb-3 ml-9 leading-relaxed">{e.consecuencia}</p>
                  <div className="flex items-start gap-3 ml-0">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 text-xs" style={{ fontWeight: 800 }}>✓</span>
                    <p className="text-sm text-[#00B96B] leading-relaxed" style={{ fontWeight: 600 }}>{e.solucion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GLOSARIO */}
        <section className="bg-white px-6 py-14 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#0D47A1] mb-2" style={{ fontWeight: 700 }}>Vocabulario</p>
              <h2 className="text-2xl text-[#1A1A1A] tracking-tight" style={{ fontWeight: 700 }}>Glosario eléctrico</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {glosario.map((g) => (
                <div key={g.termino} className="rounded-2xl border border-gray-100 bg-[#F9FAFB] p-5">
                  <p className="text-sm text-[#1648D8] mb-1" style={{ fontWeight: 700 }}>{g.termino}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{g.def}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0D47A1] px-6 py-14 lg:px-8 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl text-white mb-3" style={{ fontWeight: 800 }}>¿Quieres que revisemos tu factura juntos?</h2>
            <p className="text-sm text-white/60 mb-8 max-w-md mx-auto">
              Envíanos tu última factura por WhatsApp y te decimos si puedes pagar menos. Sin compromiso. En menos de 24h tienes nuestra respuesta.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola, quiero que reviséis mi factura de la luz para ver si puedo ahorrar.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00B96B] px-8 py-4 text-sm text-black hover:opacity-90 transition-opacity"
                style={{ fontWeight: 700 }}>
                Enviar mi factura por WhatsApp →
              </a>
              <Link href="/fibra-energia"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-4 text-sm text-white/80 hover:border-white hover:text-white transition-colors"
                style={{ fontWeight: 600 }}>
                Ver tarifas Arista Energía →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
