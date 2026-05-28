import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Cookies | Arista Group",
  alternates: { canonical: "https://aristagroup.es/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="mt-[108px] bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8 prose prose-sm text-gray-500">
          <h1 className="text-2xl text-[#1A1A1A]" style={{ fontWeight: 700 }}>Política de Cookies</h1>
          <p>Esta web utiliza cookies propias y de terceros para mejorar la experiencia de navegación y con fines estadísticos (Google Analytics 4) y de marketing (Google Tag Manager).</p>
          <p>Puedes aceptar o rechazar las cookies no esenciales en el banner que aparece al acceder a la web. Puedes modificar tu preferencia en cualquier momento desde la configuración de tu navegador.</p>
          <p>Para más información: info@aristagroup.es</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
