import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const DEST = "info@aristamovil.com";

function buildTransport() {
  return nodemailer.createTransport({
    host:   process.env.SMTP_HOST   || "smtp.gmail.com",
    port:   Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function buildHtml(campos: Record<string, string>, titulo: string): string {
  const rows = Object.entries(campos)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;color:#555;white-space:nowrap">${k}</td><td style="padding:6px 12px;color:#1A1A1A">${v || "—"}</td></tr>`)
    .join("");

  return `
  <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;border:1px solid #E5E7EB;border-radius:12px;overflow:hidden">
    <div style="background:#1648D8;padding:20px 24px">
      <p style="margin:0;font-size:11px;text-transform:uppercase;letter-spacing:3px;color:rgba(255,255,255,0.6);font-weight:700">aristagroup.es</p>
      <h1 style="margin:4px 0 0;font-size:20px;color:#fff;font-weight:900">${titulo}</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;background:#fff">
      ${rows}
    </table>
    <div style="background:#F5F6F8;padding:16px 24px;font-size:12px;color:#999">
      Enviado desde aristagroup.es · ${new Date().toLocaleString("es-ES")}
    </div>
  </div>`;
}

const ASUNTOS: Record<string, string> = {
  callback:     "Nueva solicitud de llamada — Te llamamos",
  rescate:      "RESCATE DE CLIENTE — nueva solicitud",
  reto_factura: "Reto factura — nuevo participante",
};

/* ── Petición multipart (con adjunto PDF) ─────────────────────── */
async function handleMultipart(req: NextRequest) {
  const formData = await req.formData();
  const tipo     = formData.get("tipo") as string;
  const file     = formData.get("factura") as File | null;

  const campos: Record<string, string> = {};
  formData.forEach((value, key) => {
    if (key !== "tipo" && key !== "factura" && typeof value === "string") {
      campos[key] = value;
    }
  });

  const titulo  = ASUNTOS[tipo] ?? `Nuevo formulario — ${tipo}`;
  const mailOpts: Parameters<ReturnType<typeof buildTransport>["sendMail"]>[0] = {
    from:    `"Arista Web" <${process.env.SMTP_USER}>`,
    to:      DEST,
    subject: titulo,
    html:    buildHtml(campos, titulo),
    replyTo: campos["Email"] || campos["email"] || undefined,
  };

  if (file && file.size > 0) {
    const buf = Buffer.from(await file.arrayBuffer());
    mailOpts.attachments = [{ filename: file.name, content: buf, contentType: "application/pdf" }];
    campos["Factura adjunta"] = `${file.name} (${(file.size / 1024).toFixed(0)} KB)`;
  }

  // Regenerar HTML con el campo de factura incluido
  mailOpts.html = buildHtml(campos, titulo);

  await buildTransport().sendMail(mailOpts);
  return NextResponse.json({ ok: true });
}

/* ── Petición JSON (formularios sin adjunto) ──────────────────── */
async function handleJson(req: NextRequest) {
  const body = await req.json();
  const { tipo, ...campos } = body as { tipo: string; [k: string]: string };

  if (!tipo || Object.keys(campos).length === 0) {
    return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
  }

  const titulo = ASUNTOS[tipo] ?? `Nuevo formulario — ${tipo}`;
  await buildTransport().sendMail({
    from:    `"Arista Web" <${process.env.SMTP_USER}>`,
    to:      DEST,
    subject: titulo,
    html:    buildHtml(campos, titulo),
    replyTo: campos["Email"] || campos["email"] || undefined,
  });

  return NextResponse.json({ ok: true });
}

export async function POST(req: NextRequest) {
  try {
    const ct = req.headers.get("content-type") || "";
    if (ct.includes("multipart/form-data")) {
      return await handleMultipart(req);
    }
    return await handleJson(req);
  } catch (err) {
    console.error("[contact route]", err);
    return NextResponse.json({ error: "Error al enviar" }, { status: 500 });
  }
}
