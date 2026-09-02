// Mock data for Mercado Libre presence — demonstration purposes only

export interface MLProduct {
    id: string
    name: string
    image: string
    catalogHref: string
    mlHref: string
    category: string
  }
  
  export const ML_STORE_URL = "https://www.mercadolibre.com.ar/pagina/mflogistica#from=share_eshop"
  
  export const mlProducts: MLProduct[] = [
    {
        id: "ml-2",
        name: "Algas Nori Yaki — Paquete Blanco x 100 láminas",
        image: "/algas-yaki.jpg",
        catalogHref: "/catalogo/productos-para-sushi",
        mlHref: "https://www.mercadolibre.com.ar/alga-yaki-nori-x100-sushi/up/MLAU4195066690?pdp_filters=item_id:MLA3539229910",
        category: "Productos para Sushi",
    },
    {
      id: "ml-5",
      name: "Arroz Fumeiga Para Sushi 00000 x 30 Kg",
      image: "/arroz-fortuna.jpg",
      catalogHref: "/catalogo/productos-para-sushi",
      mlHref: "https://www.mercadolibre.com.ar/arroz-fumeiga-para-sushi-00000-x-30-kg/up/MLAU4274421722?pdp_filters=item_id:MLA3582039670",
      category: "Productos para Sushi",
    },
    {
      id: "ml-1",
      name: "Salsa de Soja Fumeiga Tapa Roja — Bidón x 5 lts",
      image: "/salsa.jpg",
      catalogHref: "/catalogo/productos-para-sushi",
      mlHref: "https://www.mercadolibre.com.ar/salsa-de-soja-fumeiga-premiun-x-5-l/up/MLAU4203623904?pdp_filters=item_id:MLA3545347846",
      category: "Productos para Sushi",
    },
    {
      id: "ml-3",
      name: "Bandeja Plástica Descartable Sushi 1/2 Costilla Rectangular",
      image: "/bandeja-grande.webp",
      catalogHref: "/catalogo/papeleria",
      mlHref: "https://www.mercadolibre.com.ar/bandeja-plastica-descartable-sushi-12-costilla-rectangular/up/MLAU4295705164?pdp_filters=item_id:MLA1889132361",
      category: "Papelería",
    },
    {
      id: "ml-4",
      name: "Salsa De Soja Biterwan Caja x 169 Uni",
      image: "/salsa-chiquita.webp",
      catalogHref: "/catalogo/productos-para-sushi",
      mlHref: "https://www.mercadolibre.com.ar/salsa-de-soja-biterwan-caja-x-169-uni-45-cc/up/MLAU4311454283?pdp_filters=item_id:MLA3610728778",
      category: "Productos para Sushi",
    },
    {
      id: "ml-6",
      name: "Alga Nori Red Yamagataya x 100 láminas",
      image: "/algas-2.jpg",
      catalogHref: "/catalogo/productos-para-sushi",
      mlHref: "https://www.mercadolibre.com.ar/alga-nori-red-yamagataya-x100/p/MLA2042336556?pdp_filters=item_id%3AMLA1926106973",
      category: "Productos para Sushi",
    },
    {
      id: "ml-7",
      name: "Azucar Blanca Chango Sin Tacc x 25 Kg",
      image: "/azucar.jpg",
      catalogHref: "/catalogo/almacen",
      mlHref: "https://www.mercadolibre.com.ar/azucar-blanca-chango-sin-tacc-x-25-kg/up/MLAU4253538797?pdp_filters=item_id:MLA3582025958",
      category: "Almacén",
    },
    {
      id: "ml-8",
      name: "Bandeja Sushi Chica Bandex 153 Con Tapa",
      image: "/bandeja-chica.jpg",
      catalogHref: "/catalogo/papeleria",
      mlHref: "https://www.mercadolibre.com.ar/bandeja-sushi-chica-bandex-153-con-tapa-para-sushi/up/MLAU4274446811?pdp_filters=item_id:MLA1889093501",
      category: "Papelería",
    },
  ]
  
  // The 4 products shown on the homepage strip (subset of above)
  export const mlFeaturedProducts = mlProducts.slice(0, 4)
  
  // Products that show ML badge in the catalog (by name match)
  export const mlCatalogProducts = new Set([
    "Salmón Entero Fresco",
    "Langostinos Pelados IQF",
    `Algas Nori "Yaki"`,
    "Salsa de Soja",
    "Wasabi Powder",
    "Kanikama Largo",
    "Queso Finlandia Sachet",
    "Vinagre de Alcohol",
  ])
  