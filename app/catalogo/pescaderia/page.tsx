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
      category: "Kimchi y Fermentados",
      items: ["Kimchi de repollo", "Kimchi de rábano", "Pasta de pimiento gochugaru", "Pasta de pimiento gochujang"],
    },
    {
      category: "Carnes y BBQ",
      items: ["Carne de res para bulgogi", "Costillas para galbi", "Panceta de cerdo", "Marinadas tradicionales"],
    },
    {
      category: "Condimentos Coreanos",
      items: ["Aceite de sésamo tostado", "Pasta de soja doenjang", "Vinagre de arroz", "Semillas de sésamo"],
    },
    {
      category: "Fideos y Otros",
      items: [
        "Fideos de trigo coreanos",
        "Fideos de cristal (dangmyeon)",
        "Papel de algas para gimbap",
        "Harina de arroz",
      ],
    },
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
