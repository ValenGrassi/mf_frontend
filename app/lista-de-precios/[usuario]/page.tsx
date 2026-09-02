import type { Metadata } from "next"
import { PersonalizedPriceListPage } from "@/components/lista-de-precios/personalized-price-list-page"
import { getPublicAdmins } from "@/lib/api"

// Si el backend está dormido (ej. Render free tier) o hay un corte
// momentáneo justo en el momento del build, no queremos que todo el
// deploy falle: reintentamos una vez y, si igual no responde, se
// usa esta lista de respaldo con los admins conocidos hasta ahora.
// Un admin nuevo que se agregue después va a necesitar un rebuild
// para tener su propio link, pero el build nunca debería romperse
// por esto.
const FALLBACK_ADMINS = ["Federico", "Martin"]

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function generateStaticParams() {
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const admins = await getPublicAdmins()

      return admins.map((admin) => ({
        usuario: admin.username,
      }))
    } catch (error) {
      console.error(
        `No se pudieron obtener los usuarios para generar /lista-de-precios/[usuario] (intento ${attempt}):`,
        error
      )

      if (attempt < 2) {
        await sleep(5000)
      }
    }
  }

  console.error(
    "Usando lista de admins de respaldo para /lista-de-precios/[usuario]:",
    FALLBACK_ADMINS
  )

  return FALLBACK_ADMINS.map((usuario) => ({ usuario }))
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
