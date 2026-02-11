import { Navbar } from "@/components/navbar"
import { CatalogSection } from "@/components/catalog-section"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
      image: "../pulpo-español.jpeg",
      subtitle: "(Peso 1 a 2 KG) x KG"
    },
    {
      category: "Atún Rojo en Cubos",
      image: "../atun-cubos.jpeg",
      subtitle: "(Trozos de 500 GR) x KG"
    },
    {
      category: "Filet de Lenguado",
      image: "../filet-de-lenguado.jpeg",
      subtitle:"Congelado x KG"
    },
    {
      category:"Tubo de Calamar",
      image:"../tubo-de-calamar.jpeg",
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
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pb-20"> 
        {/* Botón Frescos y Congelados - Estilo Principal Sobrio */}
        <Button 
          size="lg" 
          asChild 
          className="group relative h-auto px-10 py-5 bg-accent text-white text-base font-medium rounded-lg shadow-sm transition-all duration-500 ease-in-out hover:bg-accent hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Link href="./pescaderia" className="flex items-center gap-3">
            <ChevronLeft
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" 
            />
            <span className="tracking-tight">Ir a pescadería</span>
          </Link>
        </Button>
        {/* Botón Productos para Sushi - Estilo Secundario Sobrio */}
        <Button 
          size="lg" 
          asChild 
          className="group relative h-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 text-base font-medium rounded-lg shadow-sm transition-all duration-500 ease-in-out hover:border-slate-400 hover:bg-slate-20 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Link href="./productos-para-sushi" className="flex items-center gap-3">
            <span className="tracking-tight">Ir a productos para sushi</span>
            <ChevronRight
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" 
            />
          </Link>
        </Button>
      </div>
      </main>
    </>
  )
}
