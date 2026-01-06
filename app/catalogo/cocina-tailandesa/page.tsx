import { Navbar } from "@/components/navbar"
import { CatalogSection } from "@/components/catalog-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Catálogo Cocina Tailandesa - Curry, Lemongrass y Especias | MF Logística",
  description:
    "Distribuimos pasta de curry, leche de coco, lemongrass, salsa de pescado y todos los ingredientes para tu restaurante de cocina tailandesa en Buenos Aires. Especias aromáticas y productos frescos.",
  keywords: [
    "insumos cocina tailandesa",
    "curry tailandés",
    "lemongrass",
    "leche de coco",
    "ingredientes tailandeses",
    "pad thai",
    "mayorista comida tailandesa",
    "distribución productos tailandeses Buenos Aires",
  ],
  openGraph: {
    title: "Catálogo Cocina Tailandesa - MF Logística",
    description: "Ingredientes frescos y aromáticos para restaurantes de cocina tailandesa en Buenos Aires",
    type: "website",
  },
}

export default function CocinaTailandesaPage() {
  const products = [
    {
      category: "Especias y Hierbas",
      items: ["Lemongrass (hierba limón)", "Hojas de lima kaffir", "Galanga", "Cilantro", "Albahaca tailandesa"],
    },
    {
      category: "Pastas y Salsas",
      items: ["Pasta de curry rojo, verde y amarillo", "Salsa de pescado", "Salsa de tamarindo", "Leche de coco"],
    },
    {
      category: "Fideos y Arroz",
      items: [
        "Fideos de arroz pad thai",
        "Fideos de huevo",
        "Arroz jazmín tailandés",
        "Papel de arroz para spring rolls",
      ],
    },
    {
      category: "Otros Ingredientes",
      items: ["Camarones secos", "Cacahuates", "Chiles tailandeses", "Palmitos", "Brotes de soja"],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <CatalogSection
          title="Cocina Tailandesa"
          description="Ingredientes frescos y auténticos para tu restaurante de cocina tailandesa. Especias aromáticas y condimentos tradicionales."
          products={products}
        />
      </main>
    </>
  )
}
