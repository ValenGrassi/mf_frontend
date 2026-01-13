"use client"

import { Button } from "@/components/ui/button"
import { ArrowBigDown, ChevronDown, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const images = [
    '/hero1.jpg',
    '/hero3.jpg',
    '/hero2.jpg',
    '/modern-logistics-warehouse-with-oriental-food-supp.jpg',
    '/sushi-takeout-containers-and-boxes.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              Distribución especializada en insumos para gastronomía oriental
            </h1>
            <p className="text-lg md:text-xl text-neutral-200 mb-8 text-pretty">
              Desde 2016 conectamos restaurantes con los mejores productos. Trato directo, logística eficiente, precios
              mayoristas.
            </p>
            <Button
  size="lg"
  asChild
  className="
    group relative overflow-hidden 
    bg-accent 
    text-accent-foreground 
    text-lg font-semibold 
    px-8 py-6 rounded-xl cursor-pointer 
    shadow-lg transition-all duration-300 
    hover:scale-105 hover:shadow-xl
  "
>
  <Link href="#nuestros-servicios" className="flex items-center gap-3">
    {/* Icono opcional al inicio */}
    {/* <MessageCircle className="h-6 w-6" /> */}

    <span className="tracking-wide">Nuestros Servicios</span>

    {/* Flecha con animación */}
    <ArrowBigDown
      className="h-8 w-8 transition-transform duration-300 group-hover:translate-y-1 group-hover:text-accent"
    />
  </Link>
</Button>

          </div>

          {/* Right side - Auto-changing image gallery */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'w-8 bg-accent' 
                      : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
