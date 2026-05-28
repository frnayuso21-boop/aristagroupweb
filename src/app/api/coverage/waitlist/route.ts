import { NextRequest, NextResponse } from "next/server";

// Supabase integration — requiere SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en .env.local
const SUPABASE_URL  = process.env.SUPABASE_URL ?? "";
const SUPABASE_KEY  = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nombre, email, telefono, direccion } = body as {
    nombre: string; email: string; telefono: string; direccion: string;
  };

  if (!nombre || !email || !telefono) {
    return NextResponse.json({ ok: false, error: "Faltan campos" }, { status: 400 });
  }

  // Si Supabase no está configurado, devolvemos ok igualmente
  // (los datos ya llegan por WhatsApp como fallback)
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.warn("[waitlist] Supabase no configurado — entrada no guardada");
    return NextResponse.json({ ok: true, fallback: true });
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/coverage_waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ nombre, email, telefono, direccion, created_at: new Date().toISOString() }),
    });
    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ ok: false, error: err }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
