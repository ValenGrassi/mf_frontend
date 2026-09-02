import type { Metadata } from "next"
import { PersonalizedPriceListPage } from "@/components/lista-de-precios/personalized-price-list-page"
import { getPublicAdmins } from "@/lib/api"

export async function generateStaticParams() {
  try {
    const admins = await getPublicAdmins()

    return admins.map((admin) => ({
      usuario: admin.username,
    }))
  } catch (error) {
    console.error(
      "No se pudieron obtener los usuarios para generar /lista-de-precios/[usuario]:",
      error
    )

    return []
  }
}

export const metadata: Metadata = {
  title: "Lista de Precios | MF Logística",
  description:
    "Consultá la lista actualizada de productos y precios mayoristas de MF Logística. Insumos para gastronomía oriental en CABA y AMBA.",
  keywords: ["lista de precios", "precios mayoristas", "insumos gastronomía oriental", "sushi", "Buenos Aires"],
}

export default async function ListaDePreciosPersonalPage({
  params,
}: {
  params: Promise<{ usuario: string }>
}) {
  const { usuario } = await params

  return <PersonalizedPriceListPage usuario={usuario} />
}
