import { Navbar } from "@/components/navbar"
import { CatalogSection } from "@/components/catalog-section"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Productos para Sushi - Arroz, Algas, Soja, Palillos y Más | MF Logística",
  description:
    "Distribuimos arroz, algas, soja, palillos y todos los ingredientes para tu restaurante de sushi en Buenos Aires. Especias aromáticas y productos frescos.",
  keywords: [
    "arroz",
    "productos para sushi",
    "soja",
    "salsa de soja",
    "algas",
    "palitos chinos",
    "sesamo",
    "jengibre",
  ],
  openGraph: {
    title: "Catálogo de Productos para Sushi - MF Logística",
    description: "Ingredientes frescos y aromáticos para restaurantes de sushi en Buenos Aires",
    type: "website",
  },
}

export default function CocinaTailandesaPage() {
  const products = [
    {
      category: "Arroz Fortuna 00000",
      image: "../arroz-fortuna.jpg",
      subtitle: `Premium Para Sushi x 30 KG "Fumeiga"`
    },
    {
      category: "Arroz Largo Fino",
      image: "../arroz-largo.jpg",
      subtitle: "Para Wok x 30 KG"
    },
    {
      category: `Algas Nori "Yaki"`,
      image: "../algas-yaki.jpg",
      subtitle: "Paquete Blanco x 100 Láminas"
    },
    {
      category: `Algas Nori "Yamagataya"`,
      image: "../algas-2.jpg",
      subtitle:"Paquete Rojo x 100 Láminas"
    },
    {
      category:"Blister de Soja",
      image:"../blister.jpg",
      subtitle:`"Fumeiga" x 180u`
    },
    {
      category:"Salsa de Soja",
      image:"../salsa.jpg",
      subtitle:`"Fumeiga" Tapa Roja x 5lts`
    },
    {
      category:"Salsa de Soja Sachet",
      image:"../sachet.jpg",
      subtitle:`"Fumeiga" x 10g x Caja de 5 KG`
    },
    {
      category: "Salsa Agridulce",
      image: "../agridulce.jpg",
      subtitle:`"Fumeiga" x 2lts`
    },
    {
      category:"Salsa de Ostras",
      image:"../ostras.png",
      subtitle:`"Haday" x 2.27 KG`
    },
    {
      category:"Fideos de Arroz Fino",
      image:"../fideos.jpg",
      subtitle:"X 400gr"
    },
    {
      category:"Palitos Chinos con Funda",
      image:"../palillos.jpg",
      subtitle:`Largos 23cm x 100u`
    },
    {
      category: "Esterillas Gruesas",
      image: "../esterillas.webp",
      subtitle: `(27x27) x 1u`
    },
    {
      category: "Siracha",
      image: "../siracha.png",
      subtitle: `"Toung Ot" x 793gr`
    },
    {
      category: `Mirim Shi Quian`,
      image: "../mirim.jpg",
      subtitle: "x 500ml"
    },
    {
      category: `Aceite de Sésamo`,
      image: "../aceite-sesamo.jpg",
      subtitle:`"Ann" x 1lt`
    },
    {
      category:"Sésamo Negro",
      image:"../sesamo-negro.jpg",
      subtitle:`x KG India`
    },
    {
      category:"Sésamo Blanco",
      image:"../sesamo-blanco.jpg",
      subtitle:`x KG India`
    },
    {
      category:"Sésamo Integral",
      image:"../sesamo-integral.jpg",
      subtitle:`x KG India`
    },
    {
      category: "Jengibre en Hojas",
      image: "../jengibre-natural.jpg",
      subtitle:`Gari Natural x 1 KG`
    },
    {
      category:"Jengibre en Hojas",
      image:"../jengibre-rosado.jpg",
      subtitle:`Gari Rosado x 1 KG`
    },
    {
      category:"Panko Japanese",
      image:"../panko-blanco.jpg",
      subtitle:"Style Blanco x 1 KG"
    },
    {
      category:"Panko Japanese",
      image:"../panko-naranja.jpg",
      subtitle:`Style Naranja x 1 KG`
    },
    {
      category: "Wasabi Powder",
      image: "../wasabi.jpg",
      subtitle:`x 1 KG`
    },
    {
      category:"Ajinomoto",
      image:"../ajinomoto.jpg",
      subtitle:`x 1 KG`
    },
    {
      category:"Hondashi",
      image:"../hondashi.jpg",
      subtitle:"x 500gr"
    },
    {
      category:"Togarashi Shichimi",
      image:"../shichimi.jpg",
      subtitle:`x 300gr`
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <CatalogSection
          title="Productos para Sushi"
          description="Productos para tu restaurante de sushi. Arroz, algas, soja, palillos y mucho más."
          products={products}
        />
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pb-20"> 
        {/* Botón Frescos y Congelados - Estilo Principal Sobrio */}
        <Button 
          size="lg" 
          asChild 
          className="group relative h-auto px-10 py-5 bg-accent text-white text-base font-medium rounded-lg shadow-sm transition-all duration-500 ease-in-out hover:bg-accent hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Link href="./frescos-y-congelados" className="flex items-center gap-3">
            <ChevronLeft
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" 
            />
            <span className="tracking-tight">Ir a frescos y congelados</span>
          </Link>
        </Button>
        {/* Botón Productos para Sushi - Estilo Secundario Sobrio */}
        <Button 
          size="lg" 
          asChild 
          className="group relative h-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 text-base font-medium rounded-lg shadow-sm transition-all duration-500 ease-in-out hover:border-slate-400 hover:bg-slate-20 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Link href="./almacen" className="flex items-center gap-3">
            <span className="tracking-tight">Ir a almacén</span>
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
