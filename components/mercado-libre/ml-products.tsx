import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { mlProducts, ML_STORE_URL } from "@/lib/mercado-libre-data"

export function MLProducts() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Productos disponibles en Mercado Libre</h2>
          <div className="w-20 h-1 bg-[oklch(0.78_0.15_80)] mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            Una selección de nuestros productos publicados en la plataforma. Comprá con seguridad y pagá en cuotas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mlProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border/50 hover:border-[oklch(0.78_0.15_80)]/40 hover:shadow-xl transition-all duration-300 pt-0 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 left-3">
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <p className="text-[10px] text-[oklch(0.78_0.15_80)] font-semibold uppercase tracking-wider mb-1">
                  {product.category}
                </p>
                <h3 className="text-sm font-semibold text-foreground leading-snug mb-4 line-clamp-2 flex-1">
                  {product.name}
                </h3>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-[oklch(0.78_0.15_80)] text-[oklch(0.15_0_0)] hover:bg-[oklch(0.68_0.15_80)] font-semibold text-xs"
                >
                  <a
                    href={product.mlHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    Ver publicación
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[oklch(0.78_0.15_80)] text-[oklch(0.15_0_0)] hover:bg-[oklch(0.68_0.15_80)] px-8 py-5 transition-all font-semibold"
          >
            <a href={ML_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Ver todos los productos en la tienda
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
