import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { PriceListPublic } from "@/components/lista-de-precios/price-list-public"

export const metadata: Metadata = {
  title: "Lista de Precios | MF Logística",
  description:
    "Consultá la lista actualizada de productos y precios mayoristas de MF Logística. Insumos para gastronomía oriental en CABA y AMBA.",
  keywords: ["lista de precios", "precios mayoristas", "insumos gastronomía oriental", "sushi", "Buenos Aires"],
}

export default function ListaDePreciosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <PriceListPublic />
      </main>
    </>
  )
}
