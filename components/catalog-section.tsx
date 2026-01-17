import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

interface Product {
  category: string
  items: string[]
  image: string
}

interface CatalogSectionProps {
  title: string
  description: string
  products: Product[]
}

export function CatalogSection({ title, description, products }: CatalogSectionProps) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">{description}</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6" />
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-foreground mb-6 border-b border-border pb-3">
                {product.category}
              </h3>
              {/* <ul className="space-y-3">
                {product.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul> */}
              <div className="m-auto">
                <Image src={product.image} width={300} height={300} alt="imagen" className="w-72 h-72" />
                
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="p-12 bg-muted/30 border-2 border-border">
            <h2 className="text-3xl font-bold text-foreground mb-4">¿Necesitas más información?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contáctanos por WhatsApp para consultar disponibilidad, precios mayoristas y condiciones especiales para
              tu restaurante.
            </p>
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Consultar por WhatsApp
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
