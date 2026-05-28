"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          opts: { pageLanguage: string; includedLanguages: string; autoDisplay: boolean },
          el: string
        ) => void;
      };
    };
    googleTranslateElementInit: () => void;
    aristaSetLang: (lang: string) => void;
  }
}

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

export default function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        { pageLanguage: "es", includedLanguages: "es,en,fr,ru", autoDisplay: false },
        "google_translate_element"
      );

      // Leer locale de la cookie y traducir automáticamente si no es español
      const locale = getCookie("arista_locale");
      if (locale && locale !== "es") {
        applyLang(locale, 30);
      }
    };

    window.aristaSetLang = function (lang: string) {
      if (lang === "es") {
        document.cookie = "arista_locale=es; path=/; max-age=" + 60 * 60 * 24 * 30;
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
        window.location.href = stripLocalePrefix(window.location.pathname);
        return;
      }
      document.cookie = "arista_locale=" + lang + "; path=/; max-age=" + 60 * 60 * 24 * 30;
      applyLang(lang, 20);
      // Actualizar URL al prefijo de idioma
      const current = window.location.pathname;
      const stripped = stripLocalePrefix(current);
      const newPath = "/" + lang + (stripped === "/" ? "" : stripped);
      window.history.replaceState({}, "", newPath);
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google?.translate) {
      // Script ya cargado, relanzar init
      window.googleTranslateElementInit();
    }
  }, []);

  return (
    <>
      <div id="google_translate_element" style={{ display: "none" }} />
      <style>{`
        .skiptranslate,
        #goog-gt-tt,
        .goog-te-banner-frame,
        .goog-te-balloon-frame { display: none !important; }
        body { top: 0 !important; }
        .goog-te-combo { display: none !important; }
        iframe.skiptranslate { display: none !important; }
      `}</style>
    </>
  );
}

function applyLang(lang: string, retries: number) {
  const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  if (select) {
    select.value = lang;
    select.dispatchEvent(new Event("change"));
  } else if (retries > 0) {
    setTimeout(() => applyLang(lang, retries - 1), 300);
  }
}

function stripLocalePrefix(pathname: string): string {
  const LOCALES = ["en", "fr", "ru"];
  for (const l of LOCALES) {
    if (pathname === `/${l}`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname;
}
