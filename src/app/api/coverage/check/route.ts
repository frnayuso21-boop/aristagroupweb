import { NextRequest, NextResponse } from "next/server";
import { checkCoverage } from "@/lib/likes-api";

export async function POST(req: NextRequest) {
  const { gescal37, sessionId } = await req.json();
  if (!gescal37 || !sessionId) return NextResponse.json({ valid: false }, { status: 400 });
  try {
    const data = await checkCoverage(gescal37, sessionId);
    // Normalize: la tecnología viene dentro de coverage.technology
    const cov = data.coverage ?? {};
    return NextResponse.json({
      valid: data.valid === true || (Array.isArray(data.products) && data.products.length > 0),
      technology: cov.technology ?? "",
      isNEBA: cov.isNEBA ?? false,
      province: cov.province ?? "",
      city: cov.city ?? "",
      products: data.products ?? [],
    });
  } catch (e) {
    console.error("[api/coverage/check]", e);
    return NextResponse.json({ valid: false, error: String(e) }, { status: 500 });
  }
}
