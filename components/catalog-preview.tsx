"use client"

import { Card } from "@/components/ui/card"
import { UtensilsCrossed, Flame, MessageCircle, Sparkles, FishSymbol, Refrigerator, Store, ChevronLeft, ChevronRight, Droplets, PackageOpen } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import React, { useRef } from "react"

export function CatalogPreview() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const categories = [
    { icon: FishSymbol, title: "Pescadería", description: "Salmón, langostino, mejillón...", href: "/catalogo/pescaderia", image: "/pescaderia-catalogo.png" },
    { icon: Refrigerator, title: "Frescos y Congelados", description: "Caviar, kanikama, pulpo, atún...", href: "/catalogo/pescaderia#Frescos y Congelados", image: "/frozen-seafood-for-sushi-restaurant.jpg" },
    { icon: Flame, title: "Productos para Sushi", description: "Arroz, algas, soja, salsas...", href: "/catalogo/productos-para-sushi", image: "/productos-sushi.jpeg" },
    { icon: Store, title: "Almacén", description: "Condimentos, verdulería.", href: "/catalogo/almacen", image: "/almacen.jpeg" },
    { icon: PackageOpen, title: "Papelería", description: "Bandejas, bolsas, rollos…", href: "/catalogo/papeleria-y-limpieza", image: "/papeleria.jpeg" },
    { icon: Droplets, title: "Limpieza", description: "Detergente, lavandina, desengrasante…", href: "/catalogo/papeleria-y-limpieza#Limpieza", image: "/limpieza.jpeg" },
  ]

  const featuredProducts = [
    { name: "Salmón", description: "Premium Salar x KG", image: "/salmon.jpg", badge: "Popular", href:"/catalogo/pescaderia" },
    { name: "Sachet Finlandia", description: "Serenísima x 2KG c/ Manga", image: "/finlandia.jpg", badge: "Popular", href:"/catalogo/almacen" },
    { name: "Alga Yaki", description: "Paquete Blanco x 100 Láminas", image: "/algas-yaki.jpg", badge: "Destacado", href:"/catalogo/productos-para-sushi" },
    { name: "Vinagre de Alcohol", description: "Menoyo x 10lts", image: "/vinagre.jpeg", badge: "Destacado", href:"/catalogo/almacen" },
  ]
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      // Calculamos el desplazamiento basado en el ancho visible del contenedor
      const scrollAmount = current.clientWidth * 0.8 
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-24 bg-muted/30 overflow-hidden" id="catalogo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestro Catálogo</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Productos <b>premium</b> para todos los tipos de cocina oriental
          </p>
        </div>

        {/* === CARRUSEL DE CATEGORÍAS === */}
        <div className="relative mb-20">
          
          {/* Botón Izquierda (Visible siempre en PC) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-10 hidden lg:flex">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-12 w-12 bg-background border-accent/20 hover:bg-accent hover:text-accent-foreground shadow-xl transition-all"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>

          {/* Contenedor Scrollable */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scroll-smooth 
                       [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                       px-0 md:px-2"
          >
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link 
                  key={index} 
                  href={category.href} 
                  // Ajuste UX Mobile: w-[75vw] permite ver un 25% de la siguiente tarjeta
                  className="flex-none w-[75vw] sm:w-[300px] lg:w-[350px] snap-start first:ml-0 last:mr-8"
                >
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 h-full pt-0 border-transparent hover:border-accent/20">
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img src={category.image} alt={category.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                      
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-lg">
                          <Icon className="h-5 w-5 text-accent-foreground" />
                        </div>
                        <h4 className="text-lg font-bold text-white">{category.title}</h4>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-muted-foreground line-clamp-2">{category.description}</p>
                      <div className="mt-4 text-xs font-semibold text-accent uppercase tracking-wide opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                        Ver productos &rarr;
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>

          {/* Botón Derecha (Visible siempre en PC) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 z-10 hidden lg:flex">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-12 w-12 bg-background border-accent/20 hover:bg-accent hover:text-accent-foreground shadow-xl transition-all"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Productos Destacados */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="h-6 w-6 text-accent" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">Productos Destacados</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 mx-8 md:mx-0">
          {featuredProducts.map((product, index) => (
            <Link key={index} href={product.href}>
              <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 pt-0">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="p-4">
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">{product.name}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground text-pretty">{product.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA final
        <div className="text-center rounded-2xl pt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Necesitás más información?
          </h3>
          <p className="text-muted-foreground mb-6 text-lg text-pretty">
            Contactanos por WhatsApp para recibir la lista de precios.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <MessageCircle className="mr-2 h-5 w-5" />
            Solicitar Listado
          </Button>
        </div> */}
      </div>
    </section>
  )
}