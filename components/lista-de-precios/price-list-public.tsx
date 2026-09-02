"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Search, Download, FileText, Check, ChevronRight, X, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product, Category } from "@/lib/lista-de-precios-data"
import { getProducts, getCategories, downloadPriceListPdf } from "@/lib/api"
import { Contact } from "@/components/contact"
import { FloatingWhatsapp } from "@/components/floating-whatsapp"
import { buildWhatsappLink } from "@/lib/phone"

const DEFAULT_PHONE = "11 6412-9259"

function formatPrice(price: number): string {
  return `$ ${price.toLocaleString("es-AR")}`
}

function DownloadModal({
  onClose,
  adminUsername,
}: {
  onClose: () => void
  adminUsername?: string
}) {
  const [step, setStep] = useState<"idle" | "loading" | "done" | "error">("idle")

  const handleDownload = async () => {
    try {
      setStep("loading")
      await downloadPriceListPdf(adminUsername)
      setStep("done")
    } catch (error) {
      console.error(error)
      setStep("error")
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-card rounded-2xl p-8 shadow-2xl max-w-md w-full animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {step === "idle" && (
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-accent" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Exportar lista de precios</h2>
            <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">
              Descargá la lista completa de productos y precios en formato PDF, lista para compartir o imprimir.
            </p>
            <div className="bg-muted/60 rounded-xl p-4 mb-6 text-left space-y-2">
              <p className="text-sm font-medium text-foreground">El PDF incluirá:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2"><ChevronRight className="h-3.5 w-3.5 text-accent" /> Todos los productos publicados</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3.5 w-3.5 text-accent" /> Precios actualizados en pesos argentinos</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3.5 w-3.5 text-accent" /> Organizado por categorías</li>
                <li className="flex items-center gap-2"><ChevronRight className="h-3.5 w-3.5 text-accent" /> Logo y datos de MF Logística</li>
              </ul>
            </div>
            <Button
              onClick={handleDownload}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-6"
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar PDF
            </Button>
          </div>
        )}

        {step === "loading" && (
          <div className="text-center py-8">
            <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto mb-6" />
            <h2 className="text-xl font-bold text-foreground mb-2">Generando PDF...</h2>
            <p className="text-muted-foreground text-sm">Preparando tu lista de precios</p>
          </div>
        )}

        {step === "error" && (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <X className="h-8 w-8 text-destructive" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">No se pudo generar el PDF</h2>
            <p className="text-muted-foreground mb-8 text-pretty">Intentá nuevamente en unos segundos.</p>
            <Button onClick={() => setStep("idle")} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-6">
              Reintentar
            </Button>
          </div>
        )}

        {step === "done" && (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">¡Lista descargada!</h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Tu lista de precios fue generada correctamente.
            </p>
            <Button onClick={onClose} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-6">
              Cerrar
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export function PriceListPublic({
  adminUsername,
  phone,
}: {
  adminUsername?: string
  phone?: string
} = {}) {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState("")

  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [search, setSearch] = useState("")
  const [showDownloadModal, setShowDownloadModal] = useState(false)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        setLoadError("")

        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ])

        setProducts(productsData)
        setCategories(categoriesData)
      } catch (error) {
        setLoadError(
          error instanceof Error
            ? error.message
            : "No se pudo cargar la lista de precios."
        )
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const displayPhone = phone || DEFAULT_PHONE
  const heroWhatsappLink = buildWhatsappLink(
    displayPhone,
    "Hola! Vengo de la lista de precios y quiero hacer un pedido."
  )
  const ctaWhatsappLink = buildWhatsappLink(
    displayPhone,
    "Hola! Vengo de la lista de precios y tengo una consulta."
  )

  const publishedProducts = products.filter((p) => p.status === "publicado")
  const publishedCategories = categories.filter((c) => c.status === "publicado")

  const filteredProducts = publishedProducts.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.categorySlug === selectedCategory
    const matchesSearch =
      search.trim() === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="bg-foreground text-background py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">MF Logística</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-4">Lista de precios</h1>
              <p className="text-background/70 text-lg max-w-xl text-pretty leading-relaxed">
                Consultá nuestro catálogo actualizado de insumos para gastronomía oriental. Precios mayoristas directos al restaurante.
              </p>
              <a
                href={heroWhatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 mt-4 text-background/90 hover:text-background transition-colors group"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#25D366] shrink-0" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-base font-semibold group-hover:underline underline-offset-2">{displayPhone}</span>
              </a>
            </div>
            <Button
              onClick={() => setShowDownloadModal(true)}
              className="self-start md:self-auto bg-accent text-accent-foreground hover:bg-accent/90 text-base px-6 py-6 rounded-xl shrink-0"
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Search — always on top */}
          <div className="relative mb-3">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar producto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            />
          </div>

          {/* Category pills — scrollable */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`cursor-pointer shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-accent text-accent-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground"
              }`}
            >
              Todos
            </button>
            {publishedCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`cursor-pointer shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat.slug
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {loading ? (
          <div className="text-center py-24">
            <div className="w-10 h-10 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-foreground font-medium">Cargando lista de precios...</p>
          </div>
        ) : loadError ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="h-8 w-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No pudimos cargar la lista</h3>
            <p className="text-muted-foreground">{loadError}</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Sin resultados</h3>
            <p className="text-muted-foreground">No encontramos productos con ese criterio.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground mb-8">
              {filteredProducts.length} {filteredProducts.length === 1 ? "producto" : "productos"}
              {selectedCategory !== "all" && (
                <span> en <span className="text-foreground font-medium">{publishedCategories.find(c => c.slug === selectedCategory)?.name}</span></span>
              )}
            </p>

            {/* Group by category when showing all */}
            {selectedCategory === "all" && search === "" ? (
              <div className="space-y-16">
                {publishedCategories.map((cat) => {
                  const catProducts = filteredProducts.filter((p) => p.categorySlug === cat.slug)
                  if (catProducts.length === 0) return null
                  return (
                    <div key={cat.id}>
                      <div className="flex items-center gap-3 mb-8">
                        <div className="flex items-center gap-2">
                          <Tag className="h-4 w-4 text-accent" />
                          <h2 className="text-2xl font-bold text-foreground">{cat.name}</h2>
                        </div>
                        <div className="flex-1 h-px bg-border" />
                        <span className="text-sm text-muted-foreground shrink-0">{catProducts.length} productos</span>
                      </div>
                      <ProductGrid products={catProducts} />
                    </div>
                  )
                })}
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-muted/40 border-t border-border py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-semibold text-foreground mb-2">¿Buscás un producto que no está en la lista?</p>
          <p className="text-muted-foreground mb-6">Contactanos directamente y te informamos disponibilidad y precios especiales.</p>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base">
            <a href={ctaWhatsappLink} target="_blank" rel="noopener noreferrer">
              Consultar por WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {showDownloadModal && (
        <DownloadModal
          onClose={() => setShowDownloadModal(false)}
          adminUsername={adminUsername}
        />
      )}

      {adminUsername && (
        <>
          <Contact phone={displayPhone} />
          <FloatingWhatsapp phone={displayPhone} />
        </>
      )}
    </section>
  )
}

function ProductGrid({ products: list }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {list.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-muted shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-1.5 min-w-0">
          <p className="text-xs text-accent font-semibold uppercase tracking-wider truncate">{product.category}</p>
          <span className="text-[10px] text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded shrink-0 whitespace-nowrap">{product.code}</span>
        </div>
        <h3 className="text-sm font-bold text-foreground leading-snug mb-1 line-clamp-2">{product.name}</h3>
        {product.unit && (
          <p className="text-xs font-medium text-foreground/80 mb-1 leading-relaxed line-clamp-3">{product.unit}</p>
        )}
        {product.description && (
          <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-6">{product.description}</p>
        )}
        <p className="text-lg font-bold text-foreground mt-auto pt-1">{formatPrice(product.price)}</p>
      </div>
    </div>
  )
}
