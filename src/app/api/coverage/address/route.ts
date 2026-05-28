import { NextRequest, NextResponse } from "next/server";
import { checkAddress } from "@/lib/likes-api";

function transformAddress(data: { sessionId?: string; items?: Array<{ address: string; gescal: string }> }) {
  const sessionId = data.sessionId ?? "";
  const addresses = (data.items ?? []).map((item) => ({
    label: item.address,
    gescal: item.gescal,
    sessionId,
  }));
  return { addresses };
}

export async function POST(req: NextRequest) {
  const { label } = await req.json();
  if (!label || label.length < 3) return NextResponse.json({ addresses: [] });
  try {
    const data = await checkAddress(label);
    return NextResponse.json(transformAddress(data));
  } catch (e) {
    console.error("[api/coverage/address]", e);
    return NextResponse.json({ addresses: [] }, { status: 500 });
  }
}

// Soporte GET también (para el debounce del cliente)
export async function GET(req: NextRequest) {
  const label = req.nextUrl.searchParams.get("q") ?? "";
  if (!label || label.length < 3) return NextResponse.json({ addresses: [] });
  try {
    const data = await checkAddress(label);
    return NextResponse.json(transformAddress(data));
  } catch (e) {
    console.error("[api/coverage/address]", e);
    return NextResponse.json({ addresses: [] }, { status: 500 });
  }
}
