import { Navbar } from "@/components/navbar"
import { CatalogSection } from "@/components/catalog-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frescos y Congelados - Ingredientes Auténticos para Restaurantes | MF Logística",
  description:
    "Distribuimos frescos y congelados para tu restaurante de comida china en Buenos Aires. Productos auténticos y precios mayoristas.",
  keywords: [
    "frescos",
    "congelados",
    "frescos y congelados",
    "comida china",
    "sushi",
    "pescado",
    "atun",
    "caviar",
  ],
  openGraph: {
    title: "Frescos y Congelados - MF Logística",
    description: "Ingredientes auténticos para restaurantes de comida china en Buenos Aires",
    type: "website",
  },
}

export default function ComidaChinaPage() {
  const products = [
    {
      category: "Kanikama Largo",
      image: "../kanikama.jpg",
      subtitle: "Santa Elena x 600gr"
    },
    {
      category: "Pulpo Español",
      image: "../pulpo-español.jpg",
      subtitle: "(Peso 1 a 2 KG) x KG"
    },
    {
      category: "Atún Rojo en Cubos",
      image: "../atun-cubos.jpg",
      subtitle: "(Trozos de 500 GR) x KG"
    },
    {
      category: "Filet de Lenguado",
      image: "../filet-de-lenguado.jpg",
      subtitle:"Congelado x KG"
    },
    {
      category:"Tubo de Calamar",
      image:"../tubo-calamar.jpg",
      subtitle:"Tiernizado x KG"
    },
    {
      category:"Caviar Rojo",
      image:"../caviar-rojo.jpg",
      subtitle:"Boken (Huevas) x 320 GR"
    },
    {
      category:"Caviar Negro",
      image:"../caviar-negro.jpg",
      subtitle:"Boken (Huevas) x 320 GR"
    },
    {
      category: "Empanaditas Chinas Harumakis",
      image: "../empanaditas.jpg",
      subtitle:"De Carne o Verdura x 50u"
    },
    {
      category:"Dumplings",
      image:"../dumplings.jpg",
      subtitle:"De cerdo y Choclo x 24u"
    },
    {
      category:"Pechuga/Suprema de polo",
      image:"../pechuga.jpg",
      subtitle:"Deshuesada y Sin Piel (Presentación x 15 KG)"
    },
    {
      category:"Tequeños de Queso",
      image:"../tequeños.jpg",
      subtitle:`"El Tovareño" x 12u`
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <CatalogSection
          title="Frescos y Congelados"
          description="Todo lo necesario para tu restaurante de sushi. Ingredientes auténticos y de la más alta calidad."
          products={products}
        />
      </main>
    </>
  )
}
