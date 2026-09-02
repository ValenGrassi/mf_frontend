import { Navbar } from "@/components/navbar"
import { CatalogSection } from "@/components/catalog-section"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Papelería y Limpieza - Insumos Auténticos para Restaurantes | MF Logística",
  description:
    "Distribuimos insumos para tu restaurante de comida china en Buenos Aires. Productos auténticos y precios mayoristas.",
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
  const products3 = [
    {
      category: "Bandeja de Sushi Grande",
      image: "/bandeja-grande.webp",
      subtitle: `Bandex "Media Costilla" x 200u con tapa`,
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/bandeja-plastica-descartable-sushi-12-costilla-rectangular/up/MLAU4295705164?pdp_filters=item_id:MLA1889132361"
    },
    {
      category: "Bandeja de Sushi Chica",
      image: "/bandeja-chica.jpg",
      subtitle: "Bandex 153 x 200u con tapa",
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/bandeja-sushi-chica-bandex-153-con-tapa-para-sushi/up/MLAU4274446811?pdp_filters=item_id:MLA1889093501",
    },
    {
      category: "Bandeja PP 143 Bisagra",
      image: "/bandeja-bisagra.jpg",
      subtitle: "Bandex Apto Microondas x 200u con tapa",
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/bandeja-estuche-bisagra-143-pp-x-200-uni-microondas/up/MLAU4274216007"
    },
    {
      category: "Bandeja Pet 102",
      image: "/bandeja-pet-2.jpg",
      subtitle:"Cotnyl x 1200u con tapa"
    },
    {
      category:"Ensaladera Cuadrada",
      image:"/ensaladera.jpg",
      subtitle:"Bandex x 150u con tapa"
    },
    {
      category:"Plato Térmico",
      image:"/plato.jpg",
      subtitle:"Isopor x 147u con tapa marmita"
    },
    {
      category:"Pote Salcero 55cc",
      image:"/pote.jpg",
      subtitle:"x 1300u con tapa"
    },
    {
      category:"Botella plastica 40CC",
      image:"/botellitas.jpg",
      subtitle:"x 50u con tapa"
    },
    {
      category: "Rollo Térmico Comandera",
      image: "/rollo.jpg",
      subtitle:"(80x30) x 10u"
    },
    {
      category:"Rollo Térmico PedidosYa",
      image:"/rollo-pedidos.jpg",
      subtitle:"(57x20) x 10u"
    },
    {
      category:"Mangas Descartables",
      image:"/mangas.jpg",
      subtitle:"(Repostería Nº5) x 10u"
    },
    {
      category:"Bolsas Kraft FM8",
      image:"/bolsas-kraft.jpg",
      subtitle:`Papel Madera (27x35x16) x 100u`,
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/bolsas-kraft-papel-madera-fm8-x-100-un-27-x-35-x-16-cm/up/MLAU4420113575?pdp_filters=item_id:MLA3667951280"
    },
    {
      category:"Bolsas de Arranque",
      image:"/arranque.jpg",
      subtitle:"(20x30) x 750gr"
    },
    {
      category: "Bolsas Grandes",
      image: "/bolsas-grandes.jpg",
      subtitle:"Camiseta Cristal (32x45) x 100u"
    },
    {
      category:"Bolsas Chicas",
      image:"/bolsas-chicas.jpg",
      subtitle:"Camiseta Cristal (22x35) x 100u"
    },
    {
      category:"Pro-Film",
      image:"/film.jpg",
      subtitle:"x 600mts"
    },
    {
      category: "Folex Láminas / Separadores",
      image: "/laminas.jpg",
      subtitle:"(20x25) x KG"
    },
    {
      category:"Aluminio Rollo 40cm",
      image:"/aluminio.jpg",
      subtitle:"x KG"
    },
    {
      category:"Bobina de Limpieza ECO",
      image:"/bobina.jpg",
      subtitle:"Doble Hoja x 2u"
    },
    {
      category: "Guantes de Nitrilo",
      image: "/guantes.jpg",
      subtitle:`Talle "M" Negros x 100u`
    },
    {
      category:"Cinta Scotch Transparente",
      image:"/cinta.jpg",
      subtitle:"(25mm x 45mts) x Unidad"
    }
  ]

  const products4 = [
    {
      category: "Lavandina",
      image: "/lavandina.jpg",
      subtitle: "x 10lts"
    },
    {
      category: "Alcohol Etílico 96%",
      image: "/alcohol.jpg",
      subtitle: "x 5lts"
    },
    {
      category: "Bolsas de Residuo",
      image: "/bolsas-residuo.jpg",
      subtitle: "(90x110) Negras x 50u"
    },
    {
      category: "Desodorante de Piso",
      image: "/desodorante.jpg",
      subtitle:"x 10lts"
    },
    {
      category:"Detergente",
      image:"/detergente.jpg",
      subtitle:"x 10lts"
    },
    {
      category:"Desengrasante",
      image:"/desengrasante.jpg",
      subtitle:"x 10lts"
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
      <CatalogSection
          title="Papelería"
          description="Descartables y packaging para delivery y salón. Soluciones prácticas y resistentes para el servicio gastronómico.
          "
          products={products3}
        />
        <CatalogSection
          title="Limpieza"
          description="Productos de higiene y sanitización para uso profesional. Rendimiento, seguridad y formatos mayoristas para tu operación diaria."
          products={products4}
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
          <Link href="../productos-para-sushi" className="flex items-center gap-3">
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
