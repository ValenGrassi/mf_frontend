"use client"
import React, { useState, useEffect, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

interface Product {
  category: string
  subtitle: string
  image: string
}

interface CatalogSectionProps {
  title: string
  description: string
  products: Product[]
}

export function CatalogSection({ title, description, products }: CatalogSectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % products.length)
    }
  }, [selectedIndex, products.length])

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + products.length) % products.length)
    }
  }, [selectedIndex, products.length])

  const closeOverlay = () => setSelectedIndex(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return
      if (e.key === "Escape") closeOverlay()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "ArrowLeft") handlePrev()
    }
    window.addEventListener("keydown", handleKeyDown)
    if (selectedIndex !== null) document.body.style.overflow = "hidden"
    else document.body.style.overflow = "unset"
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex, handleNext, handlePrev])

  return (
    <section className="py-20 bg-background" id={title}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Original */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
          <div className="w-24 h-1 bg-accent mx-auto " />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">{description}</p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => setSelectedIndex(index)}>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted mb-4 shadow-sm border border-border/40">
                <Image src={product.image} fill alt={product.category} className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors text-center">{product.category}</h3>
              <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed text-center">{product.subtitle}</p>
            </div>
          ))}
        </div>

        {/* MODAL COMPACTO AJUSTADO */}
        {selectedIndex !== null && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6 animate-in fade-in duration-200"
            onClick={closeOverlay}
          >
            {/* Contenedor del Modal - Más estrecho (max-w-md) */}
            <div 
              className="relative bg-card rounded-4xl p-8 shadow-2xl max-w-md w-full flex flex-col items-center animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Cerrar - Pequeño y pegado al borde del modal */}
              <button 
                className="absolute top-2 right-2 text-foreground rounded-full p-1.5 transition-all z-120"
                onClick={closeOverlay}
              >
                <X className="h-4 w-4 hover:cursor-pointer hover:text-accent" />
              </button>

              {/* Imagen Cuadrada con Flechas */}
              <div className="relative w-full aspect-square rounded-xl bg-muted group/nav shadow-inner">
                <Image 
                  src={products[selectedIndex].image} 
                  fill 
                  alt={products[selectedIndex].category} 
                  className="object-cover"
                  priority
                />

                {/* Flechas de Navegación pegadas a los bordes de la imagen */}
                <button 
                  className="absolute cursor-pointer -left-8 md:-left-20 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white text-black p-1.5 rounded-full shadow-lg transition-all"
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                >
                  <ChevronLeft className="h-5 w-5 m-auto" />
                </button>

                <button 
                  className="absolute cursor-pointer -right-8 md:-right-20 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white text-black p-1.5 rounded-full shadow-lg transition-all"
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Título debajo de la imagen con espaciado prolijo */}
              <div className="pt-6 pb-2 text-center">
                <h2 className="text-2xl font-bold text-foreground tracking-tight">
                  {products[selectedIndex].category}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed text-center">{products[selectedIndex].subtitle}</p>
                <div className="mt-2 inline-block px-3 py-1 bg-accent/10 rounded-full">
                  <p className="text-[10px] text-accent uppercase tracking-[0.2em] font-bold">
                    Producto {selectedIndex + 1} de {products.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}