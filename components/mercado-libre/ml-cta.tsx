import { Button } from "@/components/ui/button"
import { ArrowUpRight, Store } from "lucide-react"
import { ML_STORE_URL } from "@/lib/mercado-libre-data"

export function MLCTA() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-[oklch(0.78_0.15_80)]/10 border border-[oklch(0.78_0.15_80)]/20 flex items-center justify-center mx-auto mb-8">
          <Store className="h-8 w-8 text-[oklch(0.78_0.15_80)]" />
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
          Encontrá nuestros productos en{" "}
          <span className="text-[oklch(0.78_0.15_80)] font-serif">Mercado Libre</span>
        </h2>

        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto text-pretty leading-relaxed">
          Comprá de forma simple, segura y con envío a todo el país. Todos los productos con garantía y compra protegida.
        </p>

        <Button
          asChild
          size="lg"
          className="bg-[oklch(0.78_0.15_80)] text-[oklch(0.15_0_0)] hover:bg-[oklch(0.72_0.15_80)] font-bold px-10 py-7 text-base rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
        >
          <a href={ML_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5">
            Ir a Mercado Libre
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </Button>

        <p className="text-xs text-muted-foreground mt-6">
          Serás redirigido a la tienda oficial de MF Logística en Mercado Libre
        </p>
      </div>
    </section>
  )
}
