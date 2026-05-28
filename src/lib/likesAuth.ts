/**
 * Autenticación contra Likes Telecom API.
 * Obtiene un Bearer token haciendo login con email/password
 * y lo cachea en memoria durante 50 minutos.
 */

const BASE     = process.env.LIKES_API_URL    ?? "https://api.likestelecom.com";
const EMAIL    = process.env.LIKES_EMAIL      ?? "";
const PASSWORD = process.env.LIKES_PASSWORD   ?? "";

interface TokenCache {
  token: string;
  expiresAt: number;
}

// Cache en módulo (persiste entre requests en el mismo proceso Node)
let cache: TokenCache | null = null;

export async function getLikesToken(): Promise<string> {
  const now = Date.now();

  // Devolver token cacheado si sigue válido (margen de 2 min)
  if (cache && cache.expiresAt - now > 2 * 60 * 1000) {
    return cache.token;
  }

  // Login
  const res = await fetch(`${BASE}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: EMAIL, password: PASSWORD }),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Likes auth failed (${res.status}): ${text}`);
  }

  const data = await res.json();

  // La API puede devolver el token en distintos campos
  const token: string =
    data.token       ??
    data.access_token ??
    data.accessToken  ??
    data.data?.token  ??
    data.data?.access_token ?? "";

  if (!token) throw new Error("Likes auth: no token in response");

  // TTL: usar expires_in si existe, si no asumir 55 minutos
  const ttlMs = (data.expires_in ?? data.expiresIn ?? 3300) * 1000;
  cache = { token, expiresAt: now + ttlMs };

  return token;
}

export function getLikesBase(): string {
  return BASE;
}
