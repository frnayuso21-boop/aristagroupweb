import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["en", "fr", "ru"] as const;
type Locale = (typeof LOCALES)[number];

// Rutas que nunca deben procesarse por el middleware
const SKIP = /^\/(_next|api|favicon|logo|icons|images|public|.*\.\w+)/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (SKIP.test(pathname)) return NextResponse.next();

  // ¿Empieza la ruta con un locale?  /en, /en/, /en/fibra-y-movil …
  const locale = LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (locale) {
    // Reescribe internamente hacia la ruta real (sin el prefijo de idioma)
    const stripped = pathname.replace(`/${locale}`, "") || "/";
    const url = request.nextUrl.clone();
    url.pathname = stripped;
    const response = NextResponse.rewrite(url);
    // Guardamos el locale en una cookie para que el cliente lo lea
    response.cookies.set("arista_locale", locale, { path: "/", maxAge: 60 * 60 * 24 * 30 });
    return response;
  }

  // Sin prefijo → español, limpiamos la cookie de traducción
  const response = NextResponse.next();
  response.cookies.set("arista_locale", "es", { path: "/", maxAge: 60 * 60 * 24 * 30 });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
