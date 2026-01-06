"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Hero() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5491123456789", "_blank")
  }

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-neutral-900">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/modern-logistics-warehouse-with-oriental-food-supp.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-neutral-900/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
          Distribución especializada en insumos para gastronomía oriental
        </h1>
        <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto text-pretty">
          Desde 2016 conectamos restaurantes con los mejores productos. Trato directo, logística eficiente, precios
          mayoristas.
        </p>
        <Button
          size="lg"
          onClick={handleWhatsApp}
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-lg"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Contactar por WhatsApp
        </Button>
      </div>
    </section>
  )
}
