import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileBar from "@/components/MobileBar";
import IarisChat from "@/components/IarisChat";
import GTMScript from "@/components/GTMScript";
import GoogleTranslate from "@/components/GoogleTranslate";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aristagroup.es"),
  title: {
    default: "Arista Móvil ® | Internet, Energía, Móvil, TV y Empresas",
    template: "%s | Arista Móvil",
  },
  description:
    "Arista Móvil — Internet, Energía, Móvil, TV y soluciones para Empresas en Alicante. Red Orange sin permanencia. Alta en 24 horas. Empresa local.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://aristagroup.es",
    siteName: "Arista Group",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://aristagroup.es" },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-32.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: "#1648D8",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Arista Group",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aristagroup.es/#organization",
      name: "Arista Group",
      legalName: "Servicios y Telecomunicaciones Arista S.L.",
      taxID: "B55476212",
      url: "https://aristagroup.es",
      logo: "https://aristagroup.es/logo-arista.png",
      telephone: "+34621192578",
      email: "info@aristagroup.es",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Avenida de la Marina, 12",
        addressLocality: "El Campello",
        addressRegion: "Alicante",
        postalCode: "03560",
        addressCountry: "ES",
      },
      areaServed: ["Alicante", "Torrevieja", "Ibiza", "Valencia", "Murcia"],
      sameAs: [
        "https://www.instagram.com/arista_es",
        "https://www.facebook.com/arista_es",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://aristagroup.es/#website",
      url: "https://aristagroup.es",
      name: "Arista Group",
      publisher: { "@id": "https://aristagroup.es/#organization" },
    },
    {
      "@type": "TelecommunicationsService",
      "@id": "https://aristagroup.es/#service",
      name: "Arista Móvil — Fibra, Móvil y Energía",
      provider: { "@id": "https://aristagroup.es/#organization" },
      areaServed: ["Alicante", "Torrevieja", "Ibiza", "Valencia", "Murcia"],
      offers: [
        { "@type": "Offer", name: "Fibra 600Mb", price: "24.90", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Fibra 1Gb",   price: "32.90", priceCurrency: "EUR" },
        { "@type": "Offer", name: "Móvil 80GB",  price: "8.90",  priceCurrency: "EUR" },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* 1. Cookiebot — PRIMERO: banner RGPD con bloqueo automático */}
        <Script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="8e4767d8-29ea-4a69-aef7-ae9a410f1dce"
          data-blockingmode="auto"
          data-framework="TCFv2.2"
          strategy="beforeInteractive"
        />

        {/* 2. Consent Mode v2 — SEGUNDO: defaults denegados hasta aceptación */}
        <Script
          id="consent-mode"
          data-cookieconsent="ignore"
          strategy="beforeInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_personalization': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
              'personalization_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 500
            });
            gtag('set', 'ads_data_redaction', true);
            gtag('set', 'url_passthrough', false);
          `}
        </Script>

        {/* 3. GTM — TERCERO: carga después del consentimiento */}
        <GTMScript />

        {/* 4. Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${process.env.NEXT_PUBLIC_CLARITY_ID}");`}
          </Script>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
            height="0" width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <WhatsAppButton />
        <MobileBar />
        <IarisChat />
        <GoogleTranslate />
      </body>
    </html>
  );
}
