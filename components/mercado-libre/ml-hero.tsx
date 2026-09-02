"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, ShieldCheck, Truck, Star } from "lucide-react"
import { ML_STORE_URL } from "@/lib/mercado-libre-data"

export function MLHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-20">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[oklch(0.78_0.15_80)]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            {/* ML channel pill */}
            <div className="inline-flex items-center gap-2 bg-[oklch(0.78_0.15_80)]/10 border border-[oklch(0.78_0.15_80)]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[oklch(0.78_0.15_80)] animate-pulse" />
              <span className="text-xs font-semibold text-[oklch(0.78_0.15_80)] uppercase tracking-widest">Canal oficial — Mercado Libre</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              También vendemos en{" "}
              <span className="text-[oklch(0.78_0.15_80)] font-serif">Mercado Libre</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed max-w-lg">
              Encontrá nuestra selección de insumos gastronómicos en nuestra tienda oficial. Comprá con total seguridad, pagá en cuotas y recibí en todo el país.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: ShieldCheck, label: "Compra protegida" },
                { icon: Truck, label: "Envíos a todo el país" },
                { icon: Star, label: "Vendedor oficial" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-[oklch(0.78_0.15_80)]" />
                  {label}
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-[oklch(0.78_0.15_80)] text-[oklch(0.15_0_0)] hover:bg-[oklch(0.72_0.15_80)] font-semibold px-8 py-6 text-base rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <a href={ML_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Ver tienda en Mercado Libre
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Right — Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/sushi-takeout-containers-and-boxes.jpg"
                alt="Productos MF Logística disponibles en Mercado Libre"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Floating stat cards */}
              <div className="absolute bottom-5 left-5 right-5 flex gap-3">
                <div className="flex-1 bg-background/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-border/50">
                  <p className="text-xs text-muted-foreground mb-0.5">Ventas realizadas</p>
                  <p className="text-xl font-bold text-foreground">+500</p>
                </div>
                <div className="flex-1 bg-background/90 backdrop-blur-sm rounded-xl px-4 py-3 border border-border/50">
                  <p className="text-xs text-muted-foreground mb-0.5">Calificación</p>
                  <div className="flex items-center gap-1">
                    <p className="text-xl font-bold text-foreground">4.9</p>
                    <Star className="h-4 w-4 fill-[oklch(0.78_0.15_80)] text-[oklch(0.78_0.15_80)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
