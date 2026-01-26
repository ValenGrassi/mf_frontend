import { Card } from "@/components/ui/card"
import { UtensilsCrossed, Flame, Soup, MessageCircle, Sparkles, FishSymbol, Refrigerator, Store } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import React from "react"

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${className}`}>
      {children}
    </span>
  )
}

export function CatalogPreview() {
  const categories = [
    { icon: FishSymbol, title: "Pescadería", description: "Salmón, langostino, mejillón.", href: "/catalogo/pescaderia", image: "/pescaderia-catalogo.png" },
    { icon: Refrigerator, title: "Frescos y Congelados", description: "Caviar, kanikama, pulpo, atún.", href: "/catalogo/frescos-y-congelados", image: "/frozen-seafood-for-sushi-restaurant.jpg" },
    { icon: Flame, title: "Productos para Sushi", description: "Arroz, algas, soja, salsas.", href: "/catalogo/productos-para-sushi", image: "/nori-seaweed-sheets-for-sushi.jpg" },
    { icon: Store, title: "Almacén", description: "Condimentos, verdulería, papelera, limpieza.", href: "/catalogo/almacen", image: "/almacen.png" },
  ]

  const featuredProducts = [
    { name: "Salmón", description: "Ideal para rolls y ensaladas", image: "/salmon.jpg", badge: "Popular", href:"/catalogo/pescaderia" },
    { name: "Sachet Finlandia", description: "Certificación premium", image: "/finlandia.jpg", badge: "Popular", href:"/catalogo/almacen" },
    { name: "Alga Yaki", description: "Corte fresco de máxima calidad", image: "/algas-yaki.jpg", badge: "Destacado", href:"/catalogo/productos-para-sushi" },
    { name: "Alga Yamagataya", description: "Todo lo que necesitás", image: "/algas-2.jpg", badge: "Destacado", href:"/catalogo/productos-para-sushi" },
  ]

  return (
    <section className="py-24 bg-muted/30" id="catalogo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestro Catálogo</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Productos <b>premium</b> para todos los tipos de cocina oriental
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={index} href={category.href}>
                <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 h-full pt-0">
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <img src={category.image} alt={category.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{category.title}</h4>
                    <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed">{category.description}</p>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        {/* Productos Destacados */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="h-6 w-6 text-accent" />
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">Productos Destacados</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 mx-8 md:mx-0">
          {featuredProducts.map((product, index) => (
          <Link key={index} href={product.href}>
            <Card key={index} className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 pt-0">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">{product.badge}</Badge>
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

        {/* CTA final */}
        {/* Additional Info */}
        <div className="text-center rounded-2xl pt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Necesitás más información sobre nuestros productos?
          </h3>
          <p className="text-muted-foreground mb-6 text-lg text-pretty">
            Contactanos por WhatsApp para recibir nuestro catálogo completo con precios actualizados
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <MessageCircle className="mr-2 h-5 w-5" />
            Solicitar Catálogo
          </Button>
        </div>
      </div>
    </section>
  )
}
   