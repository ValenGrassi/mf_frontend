import { Navbar } from "@/components/navbar"
import { CatalogSection } from "@/components/catalog-section"
import type { Metadata } from "next"
import { MasInfo } from "@/components/mas-info"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Almacén - Insumos Premium para Restaurantes de Sushi | MF Logística",
  description:
    "Distribuimos productos de almacén para tu restaurante de sushi en Buenos Aires. Calidad garantizada y precios mayoristas.",
  keywords: [
    "almacen",
    "papeleria",
    "verduleria",
    "limpieza",
    "sushi",
    "almacen para sushi",
    "mayorista sushi Buenos Aires",
    "productos para sushi",
    "verduras para sushi",
  ],
  openGraph: {
    title: "Catálogo Almacén - MF Logística",
    description: "Insumos premium para restaurantes de sushi en Buenos Aires",
    type: "website",
  },
}

export default function SushiJaponesPage() {
  const products = [
    {
      category: "Queso Finlandia Sachet",
      image: "../finlandia.jpg",
      subtitle: "Serenisima x 2 KG c/Manga"
    },
    {
      category: "Mostaza Natura o Savora",
      image: "../mostaza.jpg",
      subtitle: "x 3 KG"
    },
    {
      category: "Ketchup Natura o Hellmann's",
      image: "../ketchup.jpg",
      subtitle: "x 3 KG"
    },
    {
      category: "Mayonesa Natura",
      image: "../mayo.jpg",
      subtitle:"x 3 KG"
    },
    {
      category:"Humo Líquido",
      image:"../humo.jpg",
      subtitle:"San Giorgio x 1lt"
    },
    {
      category:"Aceite Girasol Caracas",
      image:"../aceite-girasol.jpg",
      subtitle:"x 8.8lts"
    },
    {
      category:"Vinagre de Alcohol",
      image:"../vinagre.jpg",
      subtitle:"Los Emprendedores x 5lts"
    },
    {
      category: "Vinagre de Alcohol",
      image: "../vinagre-menoyo.jpg",
      subtitle:"Menoyo x 5lts"
    },
    {
      category:"Azúcar",
      image:"../azucar.jpg",
      subtitle:"x 25 KG"
    },
    {
      category:"Jarabe de Miel",
      image:"../jarabe.jpg",
      subtitle:"El Talar x 5.5 KG"
    },
    {
      category:"Harina 000",
      image:"../harina.jpg",
      subtitle:`x 25 KG`
    },
    {
      category:"Pan Rallado",
      image:"../pan-rallado.jpg",
      subtitle:"Altos Caldenes x 10 KG"
    },
    {
      category: "Atún al Agua o al Aceite",
      image: "../atun.jpg",
      subtitle:"En Pouch/Sobre x 1 KG"
    },
    {
      category:"Durazno en Mitades",
      image:"../durazno.webp",
      subtitle:"Canale x 820gr"
    },
    {
      category:"Palmitos Enteros",
      image:"../palmitos.jpg",
      subtitle:"Sierra Leona x 800gr"
    }
  ]

  const products2 = [
    {
      category: "Palta Hass",
      image: "../palta.jpg",
      subtitle: "Calibre 60 x KG"
    },
    {
      category: "Maple de Huevos Nº1",
      image: "../huevos.jpg",
      subtitle: "x 30u"
    },
    {
      category: "Limón",
      image: "../limon.jpg",
      subtitle: "x KG"
    },
    {
      category: "Flores Comestibles",
      image: "../flores.jpg",
      subtitle:"x 18u"
    },
    {
      category:"Papa Lavada",
      image:"../papa.jpg",
      subtitle:"x KG"
    },
    {
      category:"Batata",
      image:"../batata.jpg",
      subtitle:"x KG"
    },
    {
      category:"Morrón Rojo o Verde",
      image:"../morron.jpg",
      subtitle:"x KG"
    },
    {
      category: "Tomate Redondo",
      image: "../tomate.jpg",
      subtitle:"x KG"
    },
    {
      category:"Cebolla Morada",
      image:"../cebolla.jpg",
      subtitle:"x KG"
    },
    {
      category:"Cebollón",
      image:"../cebollon.webp",
      subtitle:"x KG"
    },
    {
      category:"Verdeo",
      image:"../verdeo.jpg",
      subtitle:`x KG`
    },
    {
      category:"Repollo Colorado",
      image:"../repollo.jpg",
      subtitle:"x KG"
    },
    {
      category: "Kale",
      image: "../kale.jpg",
      subtitle:"x Unidad"
    },
    {
      category:"Lechuga Francesa",
      image:"../lechuga.jpg",
      subtitle:"x KG"
    },
    {
      category:"Pepino",
      image:"../pepino.jpg",
      subtitle:"x KG"
    },
    {
      category: "Zanahoria Industrial",
      image: "../zanahoria.jpg",
      subtitle:"x KG"
    },
    {
      category:"Zucchini",
      image:"../calabacin.webp",
      subtitle:"x KG"
    },
    {
      category:"Berenjena",
      image:"../berenjena.jpg",
      subtitle:"x KG"
    },
    {
      category: "Pulpa de Maracuyá",
      image: "../pulpa.jpg",
      subtitle:"Congelada con Semilla x KG"
    },
    {
      category:"Mango Feteado",
      image:"../mango-feteado.jpg",
      subtitle:"Congelado x KG"
    },
    {
      category:"Frutos Rojos",
      image:"../frutos-rojos.jpg",
      subtitle:"Congelado x KG"
    }
  ]
  const products3 = [
    {
      category: "Bandeja de Sushi Grande",
      image: "../bandeja-grande.webp",
      subtitle: `Bandex "Media Costilla" x 200u con tapa`
    },
    {
      category: "Bandeja de Sushi Chica",
      image: "../bandeja-chica.jpg",
      subtitle: "Bandex 153 x 200u con tapa"
    },
    {
      category: "Bandeja PP 143 Bisagra",
      image: "../bandeja-bisagra.jpg",
      subtitle: "Bandex Apto Microondas x 200u con tapa"
    },
    {
      category: "Bandeja Pet 102",
      image: "../bandeja-pet-2.jpg",
      subtitle:"Cotnyl x 1200u con tapa"
    },
    {
      category:"Ensaladera Cuadrada",
      image:"../ensaladera.jpg",
      subtitle:"Bandex x 150u con tapa"
    },
    {
      category:"Plato Térmico",
      image:"../plato.jpg",
      subtitle:"Isopor x 147u con tapa marmita"
    },
    {
      category:"Pote Salcero 55cc",
      image:"../pote.jpg",
      subtitle:"x 1300u con tapa"
    },
    {
      category: "Rollo Térmico Comandera",
      image: "../rollo.jpg",
      subtitle:"(80x30) x 10u"
    },
    {
      category:"Rollo Térmico PedidosYa",
      image:"../rollo-pedidos.jpg",
      subtitle:"(57x20) x 10u"
    },
    {
      category:"Mangas Descartables",
      image:"../mangas.jpg",
      subtitle:"(Repostería Nº5) x 10u"
    },
    {
      category:"Bolsas Kraft FM8",
      image:"../bolsas-kraft.jpg",
      subtitle:`Papel Madera (27x35x16) x 100u`
    },
    {
      category:"Bolsas de Arranque",
      image:"../arranque.jpg",
      subtitle:"(20x30) x 750gr"
    },
    {
      category: "Bolsas Grandes",
      image: "../bolsas-grandes.jpg",
      subtitle:"Camiseta Cristal (32x45) x 100u"
    },
    {
      category:"Bolsas Chicas",
      image:"../bolsas-chicas.jpg",
      subtitle:"Camiseta Cristal (22x35) x 100u"
    },
    {
      category:"Pro-Film",
      image:"../film.jpg",
      subtitle:"x 600mts"
    },
    {
      category: "Folex Láminas / Separadores",
      image: "../laminas.jpg",
      subtitle:"(20x25) x KG"
    },
    {
      category:"Aluminio Rollo 40cm",
      image:"../aluminio.jpg",
      subtitle:"x KG"
    },
    {
      category:"Bobina de Limpieza ECO",
      image:"../bobina.jpg",
      subtitle:"Doble Hoja x 2u"
    },
    {
      category: "Guantes de Nitrilo",
      image: "../guantes.jpg",
      subtitle:`Talle "M" Negros x 100u`
    },
    {
      category:"Cinta Scotch Transparente",
      image:"../cinta.jpg",
      subtitle:"(25mm x 45mts) x Unidad"
    }
  ]

  const products4 = [
    {
      category: "Lavandina",
      image: "../lavandina.jpg",
      subtitle: "x 10lts"
    },
    {
      category: "Alcohol Etílico 96%",
      image: "../alcohol.jpg",
      subtitle: "x 5lts"
    },
    {
      category: "Bolsas de Residuo",
      image: "../bolsas-residuo.jpg",
      subtitle: "(90x110) Negras x 50u"
    },
    {
      category: "Desodorante de Piso",
      image: "../desodorante.jpg",
      subtitle:"x 10lts"
    },
    {
      category:"Detergente",
      image:"../detergente.jpg",
      subtitle:"x 10lts"
    },
    {
      category:"Desengrasante",
      image:"../desengrasante.jpg",
      subtitle:"x 10lts"
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <CatalogSection
          title="Almacén"
          description="Insumos mayoristas para cocina profesional. Presentaciones de alto rendimiento pensadas para optimizar costos y stock."
          products={products}
        />
        <CatalogSection
          title="Verdulería"
          description="Vegetales frescos seleccionados para gastronomía. Calidad, rotación y abastecimiento continuo para tu producción diaria.
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
          <Link href="./papeleria-y-limpieza" className="flex items-center gap-3">
            <ChevronLeft
              className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" 
            />
            <span className="tracking-tight">Ir a papelería y limpieza</span>
          </Link>
        </Button>
        {/* Botón Productos para Sushi - Estilo Secundario Sobrio */}
        <Button 
          size="lg" 
          asChild 
          className="group relative h-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 text-base font-medium rounded-lg shadow-sm transition-all duration-500 ease-in-out hover:border-slate-400 hover:bg-slate-20 hover:shadow-lg hover:-translate-y-0.5"
        >
          <Link href="./pescaderia" className="flex items-center gap-3">
            <span className="tracking-tight">Ir a pescadería</span>
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
