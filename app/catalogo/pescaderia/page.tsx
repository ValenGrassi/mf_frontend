import { Navbar } from "@/components/navbar"
import { CatalogSection } from "@/components/catalog-section"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowBigDown, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Pescadería - Salmón, langostino, mejillón | MF Logística",
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
      image: "/salmon.jpeg",
      subtitle: "Premium Salar x KG"
    },
    {
      category: "Salmón de Penca",
      image: "/salmon-en-penca.jpeg",
      subtitle: "x KG"
    },
    {
      category: "Salmón Ahumado Feteado",
      image: "/salmon-ahumado.jpeg",
      subtitle: "En Penca x KG"
    },
    {
      category: "Cola de Langostino Mix en Plancha o IQF",
      image: "/langostino-plancha.jpg",
      subtitle:"x KG"
    },
    {
      category:"Cola de Langostino N1 y N2 en cajitas",
      image:"/cola-caja.jpg",
      subtitle:"x KG"
    },
    {
      category:"Langostinos Pelados IQF",
      image:"/langostinos-pelados.jpg",
      subtitle:"x KG"
    },
    {
      category:"Mejillón Pelado Chileno IQF",
      image:"/mejillon.jpg",
      subtitle:"x KG"
    }
  ]

  const products2 = [
    {
      category: "Kanikama Largo",
      image: "/kanikama.jpg",
      subtitle: "Santa Elena x 600gr"
    },
    {
      category: "Pulpo Español",
      image: "/pulpo-espanol.jpg",
      subtitle: "(Peso 1 a 2 KG) x KG"
    },
    {
      category: "Atún Rojo en Cubos",
      image: "/atun-cubos.jpeg",
      subtitle: "(Trozos de 500 GR) x KG"
    },
    {
      category: "Filet de Lenguado",
      image: "/filet-de-lenguado.jpeg",
      subtitle:"Congelado x KG"
    },
    {
      category:"Tubo de Calamar",
      image:"/tubo-de-calamar.jpeg",
      subtitle:"Tiernizado x KG"
    },
    {
      category:"Caviar Rojo",
      image:"/caviar-rojo.jpg",
      subtitle:"Boken (Huevas) x 320 GR"
    },
    {
      category:"Caviar Negro",
      image:"/caviar-negro.jpg",
      subtitle:"Boken (Huevas) x 320 GR"
    },
    {
      category: "Empanaditas Chinas Harumakis",
      image: "/empanaditas.jpg",
      subtitle:"De Carne o Verdura x 50u"
    },
    {
      category:"Dumplings",
      image:"/dumplings.jpg",
      subtitle:"De cerdo y Choclo x 24u"
    },
    {
      category:"Pechuga/Suprema de polo",
      image:"/pechuga.jpg",
      subtitle:"Deshuesada y Sin Piel (Presentación x 15 KG)"
    },
    {
      category:"Tequeños de Queso",
      image:"/tequenos.jpg",
      subtitle:`"El Tovareño" x 12u`
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <CatalogSection
          title="Pescadería"
          description="Pescados seleccionados para uso gastronómico profesional. Cortes frescos y congelados ideales para sushi, con calidad constante y abastecimiento mayorista.
          "
          products={products}
        />
        <CatalogSection
          title="Frescos y Congelados"
          description="Productos refrigerados y congelados pensados para la dinámica diaria de tu cocina. Conservación óptima, rendimiento y disponibilidad asegurada.
          "
          products={products2}
        />
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pb-20"> 
        {/* Botón Frescos y Congelados - Estilo Principal Sobrio */}
        <Button 
          size="lg" 
          asChild 
          className="group relative h-auto px-10 py-5 bg-accent text-white text-base font-medium rounded-lg shadow-sm transition-all duration-500 ease-in-out hover:bg-accent hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Link href="./almacen" className="flex items-center gap-3">
            <ChevronLeft 
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" 
            />
            <span className="tracking-tight">Ir a almacén</span>
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
