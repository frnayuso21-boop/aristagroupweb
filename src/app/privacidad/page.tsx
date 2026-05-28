import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Arista Group",
  alternates: { canonical: "https://aristagroup.es/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="mt-[108px] bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 prose prose-sm text-gray-500">
          <h1 className="text-2xl text-[#1A1A1A]" style={{ fontWeight: 700 }}>Política de Privacidad</h1>
          <p>Responsable: Servicios y Telecomunicaciones Arista S.L. · CIF B55476212 · El Campello, Alicante.</p>
          <p>Contacto: info@aristagroup.es · +34 621 192 578</p>
          <p>Los datos recogidos a través de los formularios y canales de contacto serán utilizados exclusivamente para atender tu consulta y no serán cedidos a terceros sin tu consentimiento.</p>
          <p>Puedes ejercer tus derechos de acceso, rectificación, supresión y portabilidad escribiendo a info@aristagroup.es.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
