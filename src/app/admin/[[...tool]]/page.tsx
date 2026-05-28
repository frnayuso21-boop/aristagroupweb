/**
 * Panel de administración — Sanity Studio embebido
 * Acceso: aristagroup.es/admin
 * Solo para el equipo de Arista — no indexado por Google
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-dynamic";

export { metadata, viewport } from "next-sanity/studio";

export default function AdminPage() {
  return <NextStudio config={config} />;
}
