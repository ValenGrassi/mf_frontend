import { Navbar } from "@/components/navbar"
import { CatalogSection } from "@/components/catalog-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Catálogo Cocina Coreana - Kimchi, Gochujang y más | MF Logística",
  description:
    "Distribuimos kimchi, gochujang, carnes para bulgogi, pasta de soja y todos los ingredientes para tu restaurante de cocina coreana en Buenos Aires. Productos auténticos a precios mayoristas.",
  keywords: [
    "insumos cocina coreana",
    "kimchi",
    "gochujang",
    "bulgogi",
    "ingredientes coreanos",
    "BBQ coreano",
    "mayorista comida coreana",
    "distribución productos coreanos Buenos Aires",
  ],
  openGraph: {
    title: "Catálogo Cocina Coreana - MF Logística",
    description: "Ingredientes auténticos para restaurantes de cocina coreana en Buenos Aires",
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
          title="Cocina Coreana"
          description="Insumos auténticos para restaurantes de cocina coreana. Desde kimchi hasta ingredientes para BBQ coreano."
          products={products}
        />
        <WhatsAppButton />
      </main>
    </>
  )
}
