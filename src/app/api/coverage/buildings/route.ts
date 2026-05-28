import { NextRequest, NextResponse } from "next/server";
import { checkBuildings } from "@/lib/likes-api";

function transformBuildings(data: { sessionId?: string; verticals?: Array<{ label: string; id: string }> }) {
  const buildings = (data.verticals ?? []).map((v) => ({
    label: v.label,
    gescal37: v.id,
  }));
  return { buildings };
}

export async function POST(req: NextRequest) {
  const { gescal, sessionId } = await req.json();
  if (!gescal || !sessionId) return NextResponse.json({ buildings: [] }, { status: 400 });
  try {
    const data = await checkBuildings(gescal, sessionId);
    return NextResponse.json(transformBuildings(data));
  } catch (e) {
    console.error("[api/coverage/buildings]", e);
    return NextResponse.json({ buildings: [] }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const gescal    = req.nextUrl.searchParams.get("gescal")    ?? "";
  const sessionId = req.nextUrl.searchParams.get("sessionId") ?? "";
  if (!gescal || !sessionId) return NextResponse.json({ buildings: [] }, { status: 400 });
  try {
    const data = await checkBuildings(gescal, sessionId);
    return NextResponse.json(transformBuildings(data));
  } catch (e) {
    console.error("[api/coverage/buildings]", e);
    return NextResponse.json({ buildings: [] }, { status: 500 });
  }
}
