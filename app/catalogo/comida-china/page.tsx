import { Navbar } from "@/components/navbar"
import { CatalogSection } from "@/components/catalog-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Catálogo Comida China - Ingredientes Auténticos para Restaurantes | MF Logística",
  description:
    "Distribuimos fideos, salsas asiáticas, vegetales orientales y todos los ingredientes para tu restaurante de comida china en Buenos Aires. Productos auténticos y precios mayoristas.",
  keywords: [
    "insumos comida china",
    "ingredientes chinos",
    "salsa de ostras",
    "fideos chinos",
    "bok choy",
    "hongos shiitake",
    "mayorista comida china",
    "distribución ingredientes asiáticos",
  ],
  openGraph: {
    title: "Catálogo Comida China - MF Logística",
    description: "Ingredientes auténticos para restaurantes de comida china en Buenos Aires",
    type: "website",
  },
}

export default function ComidaChinaPage() {
  const products = [
    {
      category: "Carnes y Proteínas",
      items: ["Cerdo", "Pollo", "Pato laqueado", "Carne de res", "Camarones"],
    },
    {
      category: "Vegetales Asiáticos",
      items: ["Bok choy", "Brotes de bambú", "Hongos shiitake", "Castañas de agua", "Col china"],
    },
    {
      category: "Salsas y Condimentos",
      items: [
        "Salsa de soja oscura y clara",
        "Salsa de ostras",
        "Aceite de sésamo",
        "Salsa hoisin",
        "Pasta de frijol negro",
      ],
    },
    {
      category: "Fideos y Arroz",
      items: ["Fideos de arroz", "Fideos de huevo", "Arroz jazmín", "Papel de arroz", "Wonton wrappers"],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <CatalogSection
          title="Comida China"
          description="Todo lo necesario para tu restaurante de comida china. Ingredientes auténticos y de la más alta calidad."
          products={products}
        />
      </main>
    </>
  )
}
