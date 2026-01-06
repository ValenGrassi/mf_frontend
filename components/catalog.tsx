"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Catalog() {
  const categories = [
    {
      name: "Nori y Algas",
      image: "/nori-seaweed-sheets-for-sushi.jpg",
    },
    {
      name: "Arroz y Granos",
      image: "/premium-sushi-rice-in-bags.jpg",
    },
    {
      name: "Salsas y Condimentos",
      image: "/soy-sauce-bottles-and-asian-condiments.jpg",
    },
    {
      name: "Utensilios",
      image: "/sushi-making-tools-and-bamboo-mats.jpg",
    },
    {
      name: "Envases y Packaging",
      image: "/sushi-takeout-containers-and-boxes.jpg",
    },
    {
      name: "Productos Congelados",
      image: "/frozen-seafood-for-sushi-restaurant.jpg",
    },
  ]

  const handleWhatsApp = () => {
    window.open("https://wa.me/5491123456789", "_blank")
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestro Catálogo</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Amplia variedad de productos especializados para tu restaurante. Consultá disponibilidad y precios por
            WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-card">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground text-center">{category.name}</h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center bg-muted/50 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Necesitás más información sobre nuestros productos?
          </h3>
          <p className="text-muted-foreground mb-6 text-lg text-pretty">
            Contactanos por WhatsApp para recibir nuestro catálogo completo con precios actualizados
          </p>
          <Button size="lg" onClick={handleWhatsApp} className="bg-accent text-accent-foreground hover:bg-accent/90">
            <MessageCircle className="mr-2 h-5 w-5" />
            Solicitar Catálogo
          </Button>
        </div>
      </div>
    </section>
  )
}
