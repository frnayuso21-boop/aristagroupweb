let cachedToken: string | null = null;
let tokenExpiry: number = 0;

async function getLikesToken(): Promise<string> {
  if (cachedToken && Date.now() < tokenExpiry) return cachedToken;
  const res = await fetch(`${process.env.LIKES_API_URL}/token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: process.env.LIKES_EMAIL,
      password: process.env.LIKES_PASSWORD,
    }),
  });
  const data = await res.json();
  cachedToken = data.token;
  tokenExpiry = Date.now() + 55 * 60 * 1000;
  return cachedToken!;
}

export async function likesRequest(method: string, endpoint: string, body?: object) {
  const token = await getLikesToken();
  const res = await fetch(`${process.env.LIKES_API_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return res.json();
}

export const checkAddress = (label: string) =>
  likesRequest("GET", `/coverage/address?label=${encodeURIComponent(label)}`);

export const checkBuildings = (gescal: string, sessionId: string) =>
  likesRequest("GET", `/coverage/buildings?gescal=${gescal}&sessionId=${sessionId}`);

export const checkCoverage = (gescal37: string, sessionId: string) =>
  likesRequest("POST", "/coverage/format-coverage", { gescal37, sessionId });
