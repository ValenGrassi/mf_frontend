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
      image: "/arroz-fortuna.jpg",
      subtitle: `Premium Para Sushi x 30 KG "Fumeiga"`,
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/arroz-fumeiga-para-sushi-00000-x-30-kg/up/MLAU4274421722?pdp_filters=item_id:MLA3582039670" // Link directo a esta publicación
    },
    {
      category: "Arroz Largo Fino",
      image: "/arroz-largo.jpg",
      subtitle: "Para Wok x 30 KG"
    },
    {
      category: `Algas Nori "Yaki"`,
      image: "/algas-yaki.jpg",
      subtitle: "Paquete Blanco x 100 Láminas",
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/alga-yaki-nori-x100-sushi/up/MLAU4195066690?pdp_filters=item_id:MLA3539229910"
    },
    {
      category: `Algas Nori "Yamagataya"`,
      image: "/algas-2.jpg",
      subtitle:"Paquete Rojo x 100 Láminas",
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/algas-nori-sushi-yamagataya-100-laminas-tostadas-importadas/p/MLA2042336556?pdp_filters=item_id:MLA1926106973"
    },
    {
      category:"Blister de Soja",
      image:"/blister.jpg",
      subtitle:`"Fumeiga" x 180u`
    },
    {
      category:"Salsa de Soja 45cc",
      image:"/bitarwan.jpeg",
      subtitle:`"Bitarwan" x 169u`,
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/salsa-de-soja-biterwan-caja-x-169-uni-45-cc/up/MLAU4311454283?pdp_filters=item_id:MLA3610728778"
    },
    {
      category:"Salsa de Soja",
      image:"/salsa.jpg",
      subtitle:`"Fumeiga" Tapa Roja x 5lts`,
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/salsa-de-soja-fumeiga-premiun-x-5-l/up/MLAU4203623904?pdp_filters=item_id:MLA3545347846"
    },
    {
      category:"Salsa de Soja Sachet",
      image:"/sachet.jpg",
      subtitle:`"Fumeiga" x 10g x Caja de 5 KG`,
    },
    {
      category: "Salsa Agridulce",
      image: "/agridulce.jpg",
      subtitle:`"Fumeiga" x 2lts`
    },
    {
      category:"Salsa de Ostras",
      image:"/ostras.png",
      subtitle:`"Haday" x 2.27 KG`
    },
    {
      category:"Fideos de Arroz Fino",
      image:"/fideos.jpg",
      subtitle:"X 400gr"
    },
    {
      category:"Palitos Chinos con Funda",
      image:"/palillos.jpg",
      subtitle:`Largos 23cm x 100u`,
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/pack-x-5-palitos-de-sushi-waribashi-bambu-500-uni/up/MLAU4333667160?pdp_filters=item_id:MLA1897268151"
    },
    {
      category: "Esterillas Gruesas",
      image: "/esterillas.webp",
      subtitle: `(27x27) x 1u`
    },
    {
      category: "Siracha",
      image: "/siracha.png",
      subtitle: `"Toung Ot" x 793gr`
    },
    {
      category: `Mirim Shi Quian`,
      image: "/mirim.jpg",
      subtitle: "x 500ml"
    },
    {
      category: `Aceite de Sésamo`,
      image: "/aceite-sesamo.jpg",
      subtitle:`"Ann" x 1lt`
    },
    {
      category:"Sésamo Negro",
      image:"/sesamo-negro.jpg",
      subtitle:`x KG India`
    },
    {
      category:"Sésamo Blanco",
      image:"/sesamo-blanco.jpg",
      subtitle:`x KG India`
    },
    {
      category:"Sésamo Integral",
      image:"/sesamo-integral.jpg",
      subtitle:`x KG India`
    },
    {
      category: "Jengibre en Hojas",
      image: "/jengibre-natural.jpg",
      subtitle:`Gari Natural x 1 KG`,
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/jengibre-gari-natural-para-sushi-en-laminas-x-1-kilo/up/MLAU4203517264?pdp_filters=item_id:MLA1868728907"
    },
    {
      category:"Jengibre en Hojas",
      image:"/jengibre-rosado.jpg",
      subtitle:`Gari Rosado x 1 KG`
    },
    {
      category:"Panko Japanese",
      image:"/panko-blanco.jpg",
      subtitle:"Style Blanco x 1 KG"
    },
    {
      category:"Panko Japanese",
      image:"/panko-naranja.jpg",
      subtitle:`Style Naranja x 1 KG`
    },
    {
      category: "Wasabi Powder",
      image: "/wasabi.jpg",
      subtitle:`x 1 KG`,
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/wasabi--en-polvo-x-1-kg/up/MLAU4203689612?pdp_filters=item_id:MLA3545196604"
    },
    {
      category:"Ajinomoto",
      image:"/ajinomoto.jpg",
      subtitle:`x 1 KG`
    },
    {
      category:"Hondashi",
      image:"/hondashi.jpg",
      subtitle:"x 500gr"
    },
    {
      category:"Togarashi Shichimi",
      image:"/shichimi.jpg",
      subtitle:`x 300gr`
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <CatalogSection
          title="Productos para Sushi"
          description=" Insumos importados premium para sushi en presentaciones mayoristas. Calidad uniforme y abastecimiento constante para una producción sin interrupciones.  "
          products={products}
        />
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pb-20"> 
        {/* Botón Frescos y Congelados - Estilo Principal Sobrio */}
        <Button 
          size="lg" 
          asChild 
          className="group relative h-auto px-10 py-5 bg-accent text-white text-base font-medium rounded-lg shadow-sm transition-all duration-500 ease-in-out hover:bg-accent hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Link href="../pescaderia" className="flex items-center gap-3">
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
          <Link href="../almacen" className="flex items-center gap-3">
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
