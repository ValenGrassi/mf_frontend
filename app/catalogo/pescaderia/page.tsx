import { Navbar } from "@/components/navbar"
import { CatalogSection } from "@/components/catalog-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Catálogo Pescadería - Salmón, langostino, mejillón | MF Logística",
  description:
    "Distribuimos salmón, langostino, mejillón, atun y todos los ingredientes para tu restaurante de cocina coreana en Buenos Aires. Productos auténticos a precios mayoristas.",
  keywords: [
    "insumos sushi",
    "pescados",
    "salmon",
    "sushi",
    "langostino",
    "mejillon",
    "mayorista pescados",
  ],
  openGraph: {
    title: "Catálogo Pescadería - MF Logística",
    description: "Pescados para restaurantes de sushi en Buenos Aires",
    type: "website",
  },
}

export default function CocinaCoreanaPage() {
  const products = [
    {
      category: "Salmón Entero Fresco",
      image: "../salmon-entero.png",
      subtitle: "Premium Salar x KG"
    },
    {
      category: "Salmón de Penca",
      image: "../salmon-de-penca.webp",
      subtitle: "x KG"
    },
    {
      category: "Salmón Ahumado Feteado",
      image: "../salmon-feteado.webp",
      subtitle: "En Penca x KG"
    },
    {
      category: "Cola de Langostino Mix en Plancha o IQF",
      image: "../cola-langostino.jpg",
      subtitle:"x KG"
    },
    {
      category:"Cola de Langostino N1 y N2 en cajitas",
      image:"../caja-cola.webp",
      subtitle:"x KG"
    },
    {
      category:"Langostinos Pelados",
      image:"../langostinos-pelados.jpg",
      subtitle:"IQF o x KG"
    },
    {
      category:"Mejillón Pelado",
      image:"../mejillon-pelado.webp",
      subtitle:"Chileno IQF o x KG"
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <CatalogSection
          title="Pescadería"
          description="Pescados frescos con precios de mayorista. Desde atún hasta salmón para hacer lo mejor de tu sushi."
          products={products}
        />
      </main>
    </>
  )
}
