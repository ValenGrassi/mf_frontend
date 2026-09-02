import type { Metadata } from "next"
import { AdminShell } from "@/components/lista-de-precios/admin-shell"

export const metadata: Metadata = {
  title: "Panel de Administración | MF Logística",
  description: "Panel privado de administración de lista de precios.",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AdminShell>{children}</AdminShell>
}
