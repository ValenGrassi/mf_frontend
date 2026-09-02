"use client"
import React, { useState, useEffect, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronLeft, ChevronRight, X, ArrowUpRight, Store } from "lucide-react"
import Image from "next/image"
import { ML_STORE_URL } from "@/lib/mercado-libre-data"

interface Product {
  category: string
  subtitle: string
  image: string
  /** Indica si este producto específico está disponible en Mercado Libre */
  mlProduct?: boolean
  /** Opcional: si la publicación tiene una URL específica (si no existe, usa ML_STORE_URL) */
  mlUrl?: string
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
    <section className="my-10 py-10 bg-background border-b" id={title}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Original */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h1>
          <div className="w-24 h-1 bg-accent mx-auto " />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">{description}</p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product, index) => {
            const isOnML = Boolean(product.mlProduct)
            const targetUrl = product.mlUrl || ML_STORE_URL

            return (
              <div key={index} className="group flex flex-col">
                <div
                  className="relative aspect-square overflow-hidden rounded-2xl bg-muted mb-4 shadow-sm border border-border/40 cursor-pointer"
                  onClick={() => setSelectedIndex(index)}
                >
                  <Image src={product.image} fill alt={product.category} className="transition-transform duration-700 group-hover:scale-105" />
                  {/* ML badge on image */}
                  {isOnML && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="inline-flex items-center gap-1 bg-[oklch(0.78_0.15_80)] text-[oklch(0.15_0_0)] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-sm">
                        <Store className="h-2.5 w-2.5" />
                        Mercado Libre
                      </span>
                    </div>
                  )}
                </div>
                <h3
                  className="text-xl font-bold text-foreground group-hover:text-accent transition-colors text-center cursor-pointer"
                  onClick={() => setSelectedIndex(index)}
                >
                  {product.category}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed text-center">{product.subtitle}</p>
                {/* ML "Ver publicación" button */}
                {isOnML && (
                  <div className="mt-3 flex justify-center">
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[oklch(0.78_0.15_80)] border border-[oklch(0.78_0.15_80)]/30 rounded-full px-3 py-1 hover:bg-[oklch(0.78_0.15_80)]/10 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Ver publicación
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* MODAL COMPACTO AJUSTADO */}
        {selectedIndex !== null && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6 animate-in fade-in duration-200"
            onClick={closeOverlay}
          >
            {/* Contenedor del Modal */}
            <div 
              className="relative bg-card rounded-4xl p-8 shadow-2xl max-w-md w-full flex flex-col items-center animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón Cerrar */}
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

                {/* Flechas de Navegación */}
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

              {/* Título y detalles */}
              <div className="pt-6 pb-2 text-center w-full">
                <h2 className="text-2xl font-bold text-foreground tracking-tight">
                  {products[selectedIndex].category}
                </h2>
                <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed text-center">{products[selectedIndex].subtitle}</p>
                <div className="mt-2 inline-block px-3 py-1 bg-accent/10 rounded-full">
                  <p className="text-[10px] text-accent uppercase tracking-[0.2em] font-bold">
                    Producto {selectedIndex + 1} de {products.length}
                  </p>
                </div>

                {/* ML callout */}
                {products[selectedIndex].mlProduct && (
                  <div className="mt-5 rounded-xl border border-[oklch(0.78_0.15_80)]/25 bg-[oklch(0.78_0.15_80)]/5 p-4 text-left">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Store className="h-4 w-4 text-[oklch(0.78_0.15_80)] shrink-0" />
                      <p className="text-sm font-bold text-foreground">También disponible en Mercado Libre</p>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                      Este producto puede adquirirse desde nuestra tienda oficial con envío a todo el país y compra protegida.
                    </p>
                    <a
                      href={products[selectedIndex].mlUrl || ML_STORE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[oklch(0.78_0.15_80)] text-[oklch(0.15_0_0)] text-xs font-bold px-4 py-2 rounded-lg hover:bg-[oklch(0.72_0.15_80)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Ver publicación
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}