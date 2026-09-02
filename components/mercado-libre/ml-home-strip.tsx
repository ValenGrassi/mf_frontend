import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Store } from "lucide-react"
import Link from "next/link"
import { mlFeaturedProducts, ML_STORE_URL } from "@/lib/mercado-libre-data"

export function MLHomeStrip() {
  return (
    <section className="py-20 bg-muted/30 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[oklch(0.78_0.15_80)]/10 border border-[oklch(0.78_0.15_80)]/20 rounded-full px-3 py-1 mb-3">
              <Store className="h-3 w-3 text-[oklch(0.78_0.15_80)]" />
              <span className="text-[10px] font-bold text-[oklch(0.78_0.15_80)] uppercase tracking-widest">
                También en Mercado Libre
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance">
              Comprá nuestros productos con envío a todo el país
            </h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-lg text-pretty">
              Selección de insumos disponibles en nuestra tienda oficial. Pagá en cuotas con total seguridad.
            </p>
          </div>
          <Button
            asChild
            className="bg-[oklch(0.78_0.15_80)] text-[oklch(0.15_0_0)] hover:bg-[oklch(0.68_0.15_80)] whitespace-nowrap shrink-0 transition-all font-semibold"
          >
            <Link href="/mercado-libre" className="flex items-center gap-2">
              Ver página de Mercado Libre
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {mlFeaturedProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-border/40 hover:border-[oklch(0.78_0.15_80)]/40 hover:shadow-xl transition-all duration-300 pt-0 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-36 sm:h-44 overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="inline-block bg-[oklch(0.78_0.15_80)] text-[oklch(0.15_0_0)] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    ML
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <h3 className="text-xs sm:text-sm font-semibold text-foreground leading-snug mb-3 line-clamp-2 flex-1">
                  {product.name}
                </h3>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-[oklch(0.78_0.15_80)] text-[oklch(0.15_0_0)] hover:bg-[oklch(0.68_0.15_80)] font-semibold text-[11px] sm:text-xs h-8"
                >
                  <a
                    href={product.mlHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1"
                  >
                    Ver publicación
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
