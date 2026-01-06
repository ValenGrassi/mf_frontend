import { Card } from "@/components/ui/card"
import { ChefHat, UtensilsCrossed, Flame, Soup, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export function CatalogPreview() {
  const categories = [
    {
      icon: ChefHat,
      title: "Sushi & Japonés",
      description: "Nori, arroz, wasabi, jengibre, salsa de soja y más",
      href: "/catalogo/sushi-japones",
      image: "/nori-seaweed-sheets-for-sushi.jpg",
    },
    {
      icon: UtensilsCrossed,
      title: "Comida China",
      description: "Fideos, salsas, vegetales, especias asiáticas",
      href: "/catalogo/comida-china",
      image: "/sushi-takeout-containers-and-boxes.jpg",
    },
    {
      icon: Flame,
      title: "Cocina Coreana",
      description: "Gochujang, kimchi, aceite de sésamo, ingredientes coreanos",
      href: "/catalogo/cocina-coreana",
      image: "/soy-sauce-bottles-and-asian-condiments.jpg",
    },
    {
      icon: Soup,
      title: "Cocina Tailandesa",
      description: "Curry, leche de coco, hierba limón, ingredientes tailandeses",
      href: "/catalogo/cocina-tailandesa",
      image: "/frozen-seafood-for-sushi-restaurant.jpg",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestro Catálogo</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Productos premium para todos los tipos de cocina oriental
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link key={index} href={category.href}>
                <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 h-full pt-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm text-pretty leading-relaxed">{category.description}</p>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="text-center bg-muted/50 rounded-2xl p-12">
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
