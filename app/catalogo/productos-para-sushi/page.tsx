import { Navbar } from "@/components/navbar"
import { CatalogSection } from "@/components/catalog-section"
import type { Metadata } from "next"

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
      image:"../ostras.jpg",
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
      </main>
    </>
  )
}
