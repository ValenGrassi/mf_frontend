import { Navbar } from "@/components/navbar"
import { CatalogSection } from "@/components/catalog-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Catálogo Sushi & Japonés - Insumos Premium para Restaurantes | MF Logística",
  description:
    "Distribuimos pescados frescos, arroz premium, nori, wasabi, salsa de soja y todos los insumos para tu restaurante de sushi y cocina japonesa en Buenos Aires. Calidad garantizada y precios mayoristas.",
  keywords: [
    "insumos sushi",
    "pescados para sushi",
    "arroz para sushi",
    "nori",
    "wasabi",
    "ingredientes japoneses",
    "mayorista sushi Buenos Aires",
    "salmón para sushi",
    "atún para sushi",
  ],
  openGraph: {
    title: "Catálogo Sushi & Japonés - MF Logística",
    description: "Insumos premium para restaurantes de sushi y cocina japonesa en Buenos Aires",
    type: "website",
  },
}

export default function SushiJaponesPage() {
  const products = [
    {
      category: "Pescados y Mariscos",
      items: [
        "Salmón rosado y atlántico",
        "Atún rojo y blanco",
        "Langostinos",
        "Pulpo",
        "Kanikama (palitos de cangrejo)",
      ],
    },
    {
      category: "Arroz y Nori",
      items: ["Arroz para sushi premium", "Algas nori en láminas", "Vinagre de arroz", "Mirin (sake dulce)"],
    },
    {
      category: "Salsas y Condimentos",
      items: ["Salsa de soja", "Wasabi en pasta y polvo", "Jengibre encurtido (gari)", "Salsa ponzu", "Salsa teriyaki"],
    },
    {
      category: "Productos Especiales",
      items: ["Sésamo negro y blanco", "Tobiko (huevas de pescado)", "Masago", "Alga wakame", "Fideos ramen y udon"],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <CatalogSection
          title="Sushi & Japonés"
          description="Insumos de primera calidad para restaurantes de sushi y cocina japonesa. Desde pescados frescos hasta condimentos tradicionales."
          products={products}
        />
      </main>
    </>
  )
}
