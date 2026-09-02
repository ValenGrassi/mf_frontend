import { Navbar } from "@/components/navbar"
import { CatalogSection } from "@/components/catalog-section"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Catálogo | MF Logística",
  description:
    "Distribuimos arroz, algas, soja, palillos y todos los ingredientes para tu restaurante de sushi en Buenos Aires. Especias aromáticas y productos frescos.",
  keywords: [
    "catalogo",
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
  const pescaderia = [
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
      category:"Langostinos Pelados Desvenados",
      image:"/langostinopelado.jpeg",
      subtitle:"x KG"
    },
    {
      category:"Mejillón Pelado Chileno IQF",
      image:"/mejillon.jpg",
      subtitle:"x KG"
    }
  ]

  const frescos = [
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
  const almacen = [
    {
      category: "Queso Finlandia Sachet",
      image: "/finlandia.jpg",
      subtitle: "Serenisima x 2 KG c/Manga"
    },
    {
      category: "Mostaza Natura o Savora",
      image: "/mostaza.jpg",
      subtitle: "x 3 KG"
    },
    {
      category: "Ketchup Natura o Hellmann's",
      image: "/ketchup.jpg",
      subtitle: "x 3 KG"
    },
    {
      category: "Mayonesa Natura",
      image: "/mayo.jpg",
      subtitle:"x 3 KG"
    },
    {
      category:"Humo Líquido",
      image:"/humo.jpg",
      subtitle:"San Giorgio x 1lt"
    },
    {
      category:"Aceite Girasol Caracas",
      image:"/aceite-girasol.jpg",
      subtitle:"x 8.8lts"
    },
    {
      category:"Vinagre de Alcohol",
      image:"/vinagre.jpg",
      subtitle:"Los Emprendedores x 5lts"
    },
    {
      category: "Vinagre de Alcohol",
      image: "/vinagre.jpeg",
      subtitle:"Menoyo x 10lts",
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/vinagre-menoyo-caja-por-2-unidades-x-10-lt/up/MLAU4942430101?pdp_filters=item_id:MLA2039127067"
    },
    {
      category:"Azúcar Refinada",
      image:"/azucarrefinada.jpeg",
      subtitle:"Chango x 1 KG",
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/azucar-chango-refinada-bulto-10-unidades-x-1-kilo/up/MLAU4185479763?pdp_filters=item_id:MLA1868881867"
    },
    {
      category:"Azúcar",
      image:"/azucar.jpg",
      subtitle:"x 25 KG",
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/azucar-blanca-chango-sin-tacc-x-25-kg/up/MLAU4253538797?pdp_filters=item_id:MLA3582025958"
    },
    {
      category:"Jarabe de Miel",
      image:"/jarabe.jpg",
      subtitle:"El Talar x 5.5 KG"
    },
    {
      category:"Harina 000",
      image:"/harina.jpg",
      subtitle:`x 25 KG`
    },
    {
      category:"Pan Rallado",
      image:"/pan-rallado.jpg",
      subtitle:"Altos Caldenes x 10 KG"
    },
    {
      category: "Atún al Agua o al Aceite",
      image: "/atun-nuevo.jpg",
      subtitle:"En Pouch/Sobre x 1 KG",
      mlProduct: true,
      mlUrl: "https://www.mercadolibre.com.ar/atun-en-sobre-puntamar-x-1kg-pack-de-3-unidades-total-3kg/up/MLAU4203415422?pdp_filters=item_id%3AMLA1868600705#polycard_client=mshops-appearance-api&component=collection_grid&wid=MLA1868600705&title=Productos+recomendados&tracking_id=ade85f490f8e30a43cbdd33181036429&sid=storefronts&global_position=7"
    },
    {
      category:"Durazno en Mitades",
      image:"/durazno.webp",
      subtitle:"Canale x 820gr"
    },
    {
      category:"Palmitos Enteros",
      image:"/palmitos.jpg",
      subtitle:"Sierra Leona x 800gr"
    }
  ]

  const verduleria = [
    {
      category: "Palta Hass",
      image: "/palta.jpg",
      subtitle: "Calibre 60 x KG"
    },
    {
      category: "Maple de Huevos Nº1",
      image: "/huevos.jpg",
      subtitle: "x 30u"
    },
    {
      category: "Limón",
      image: "/limon.jpg",
      subtitle: "x KG"
    },
    {
      category: "Flores Comestibles",
      image: "/flores.jpg",
      subtitle:"x 18u"
    },
    {
      category:"Papa Lavada",
      image:"/papa.jpg",
      subtitle:"x KG"
    },
    {
      category:"Batata",
      image:"/batata.jpg",
      subtitle:"x KG"
    },
    {
      category:"Morrón Rojo o Verde",
      image:"/morron.jpg",
      subtitle:"x KG"
    },
    {
      category: "Tomate Redondo",
      image: "/tomate.jpg",
      subtitle:"x KG"
    },
    {
      category:"Cebolla Morada",
      image:"/cebolla.jpg",
      subtitle:"x KG"
    },
    {
      category:"Cebollón",
      image:"/cebollon.webp",
      subtitle:"x KG"
    },
    {
      category:"Verdeo",
      image:"/verdeo.jpg",
      subtitle:`x KG`
    },
    {
      category:"Repollo Colorado",
      image:"/repollo.jpg",
      subtitle:"x KG"
    },
    {
      category: "Kale",
      image: "/kale.jpg",
      subtitle:"x Unidad"
    },
    {
      category:"Lechuga Francesa",
      image:"/lechuga.jpg",
      subtitle:"x KG"
    },
    {
      category:"Pepino",
      image:"/pepino.jpg",
      subtitle:"x KG"
    },
    {
      category: "Zanahoria Industrial",
      image: "/zanahoria.jpg",
      subtitle:"x KG"
    },
    {
      category:"Zucchini",
      image:"/calabacin.webp",
      subtitle:"x KG"
    },
    {
      category:"Berenjena",
      image:"/berenjena.jpg",
      subtitle:"x KG"
    },
    {
      category: "Pulpa de Maracuyá",
      image: "/pulpa.jpg",
      subtitle:"Congelada con Semilla x KG"
    },
    {
      category:"Mango Feteado",
      image:"/mango-feteado.jpg",
      subtitle:"Congelado x KG"
    },
    {
      category:"Frutos Rojos",
      image:"/frutos-rojos.jpg",
      subtitle:"Congelado x KG"
    }
  ]
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
          title="Pescadería"
          description="Pescados seleccionados para uso gastronómico profesional. Cortes frescos y congelados ideales para sushi, con calidad constante y abastecimiento mayorista.
          "
          products={pescaderia}
        />
        <CatalogSection
          title="Frescos y Congelados"
          description="Productos refrigerados y congelados pensados para la dinámica diaria de tu cocina. Conservación óptima, rendimiento y disponibilidad asegurada.
          "
          products={frescos}
        />
        <CatalogSection
          title="Productos para Sushi"
          description=" Insumos importados premium para sushi en presentaciones mayoristas. Calidad uniforme y abastecimiento constante para una producción sin interrupciones.  
          "
          products={products}
        />
        <CatalogSection
          title="Almacén"
          description="Insumos mayoristas para cocina profesional. Presentaciones de alto rendimiento pensadas para optimizar costos y stock."
          products={almacen}
        />
        <CatalogSection
          title="Verdulería"
          description="Vegetales frescos seleccionados para gastronomía. Calidad, rotación y abastecimiento continuo para tu producción diaria.
          "
          products={verduleria}
        />
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
      </main>
    </>
  )
}
