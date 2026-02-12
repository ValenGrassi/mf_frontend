"use client"

import { Button } from "@/components/ui/button"
import { ArrowBigDown } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Array de imágenes
  const images = [
    '/sushi-takeout-containers-and-boxes.jpg',
    // Descomenta las siguientes líneas para probar el carrusel:
    // '/hero1.jpg',
    // '/hero3.jpg',
  ]

  useEffect(() => {
    // Si hay 1 o menos imágenes, no ejecutamos el intervalo
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length]) // Añadimos la dependencia

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance ">
              Distribución especializada en insumos <span className="text-accent font-serif">gastronómicos</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
              Desde 2016 conectamos restaurantes con los mejores productos. Trato directo, logística eficiente, precios
              mayoristas.
            </p>
            <div className="flex flex-col gap-4">
              <Button size="lg" asChild className="group relative overflow-hidden bg-accent text-white text-lg font-semibold px-8 py-6 rounded-xl cursor-pointer shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white hover:text-foreground">
                <Link href="#catalogo" className="flex items-center gap-3">
                  <span className="tracking-wide">Catálogo</span>
                </Link>
              </Button>
              <Button size="lg" asChild className="group relative overflow-hidden bg-white text-foreground text-lg font-semibold px-8 py-6 rounded-xl cursor-pointer shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-accent hover:text-white">
                <Link href="#nuestros-servicios" className="flex items-center gap-3">
                  <span className="tracking-wide">Ver Servicios</span>
                  <ArrowBigDown
                    className="h-8 w-8 transition-transform duration-300 group-hover:translate-y-1 group-hover:text-white"
                  />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side - Image Display */}
          <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Mapeamos siempre las imágenes. 
               Si solo hay 1, index siempre será 0 y currentImageIndex será 0, 
               por lo que siempre tendrá opacity-100.
            */}
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

            {/* Dots indicator - Solo se muestra si hay más de 1 imagen */}
            {images.length > 1 && (
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
            )}
          </div>
        </div>
      </div>
    </section>
  )
}