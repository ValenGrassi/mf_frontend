"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

import {
  Plus,
  Search,
  Pencil,
  Trash2,
  EyeOff,
  Eye,
  X,
  Upload,
  ImageIcon,
  ChevronDown,
  Download,
  FileText,
  Check,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"

import {
  type Category,
  type Product,
  type ProductStatus,
} from "@/lib/lista-de-precios-data"

import {
  getProducts,
  getCategories,
  createProduct,
  updateProduct,
  updateProductStatus,
  deleteProduct,
  uploadImage,
  downloadPriceListPdf,
} from "@/lib/api"

function formatPrice(price: number): string {
  return `$ ${price.toLocaleString("es-AR")}`
}

function StatusBadge({ status }: { status: ProductStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
        status === "publicado"
          ? "bg-green-500/10 text-green-700 dark:text-green-400"
          : "bg-muted text-muted-foreground"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === "publicado"
            ? "bg-green-500"
            : "bg-muted-foreground"
        }`}
      />

      {status === "publicado" ? "Publicado" : "Oculto"}
    </span>
  )
}

/* =========================================================
   PRODUCT MODAL
========================================================= */

interface ProductModalProps {
  product?: Product | null
  categories: Array<{
    id: string
    name: string
    slug: string
  }>
  onClose: () => void
  onSave: (product: Product) => Promise<void>
}

function ProductModal({
  product,
  categories,
  onClose,
  onSave,
}: ProductModalProps) {
  const isEdit = !!product

  const fileRef = useRef<HTMLInputElement>(null)

  const [form, setForm] = useState({
    code: product?.code ?? "",
    name: product?.name ?? "",
    description: product?.description ?? "",
    price: product?.price ?? 0,
    category: product?.category ?? categories[0]?.name ?? "",
    categorySlug:
      product?.categorySlug ?? categories[0]?.slug ?? "",
    categoryId:
      (product as Product & { categoryId?: string })?.categoryId ??
      categories[0]?.id ??
      "",
    unit: product?.unit ?? "",
    image: product?.image ?? "",
    status: product?.status ?? "publicado",
  })

  const [imagePreview, setImagePreview] = useState(
    product?.image ?? ""
  )

  const [dragOver, setDragOver] = useState(false)
  const [saving, setSaving] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [error, setError] = useState("")

  const handleCategoryChange = (slug: string) => {
    const category = categories.find(
      (item) => item.slug === slug
    )

    if (!category) return

    setForm((current) => ({
      ...current,
      category: category.name,
      categorySlug: category.slug,
      categoryId: category.id,
    }))
  }

  const handleImageFile = async (file: File) => {
    setError("")

    if (!file.type.startsWith("image/")) {
      setError("El archivo seleccionado no es una imagen.")
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("La imagen no puede superar los 5 MB.")
      return
    }

    const localPreview = URL.createObjectURL(file)
    setImagePreview(localPreview)

    try {
      setUploadingImage(true)

      const { url } = await uploadImage(file)

      setForm((current) => ({
        ...current,
        image: url,
      }))

      setImagePreview(url)
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "No se pudo subir la imagen."
      )

      setImagePreview(form.image)
    } finally {
      setUploadingImage(false)
      URL.revokeObjectURL(localPreview)
    }
  }

  const handleDrop = async (
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault()

    setDragOver(false)

    const file = event.dataTransfer.files[0]

    if (file) {
      await handleImageFile(file)
    }
  }

  const handleSave = async () => {
    if (!form.name.trim()) return

    if (!form.categoryId) {
      setError("Seleccioná una categoría.")
      return
    }

    if (!form.unit.trim()) {
      setError("Ingresá la unidad o presentación.")
      return
    }

    if (form.price < 0) {
      setError("El precio no puede ser negativo.")
      return
    }

    try {
      setSaving(true)
      setError("")

      const savedProduct = await onSave({
        id: product?.id ?? "",
        code:
          form.code.trim() ||
          `PROD-${Date.now()}`,
        name: form.name.trim(),
        description: form.description.trim(),
        price: Number(form.price),
        category: form.category,
        categorySlug: form.categorySlug,
        unit: form.unit.trim(),
        image: form.image,
        status: form.status,
      })

      void savedProduct

      onClose()
    } catch (error) {
      console.error(error)

      setError(
        error instanceof Error
          ? error.message
          : "No se pudo guardar el producto."
      )
    } finally {
      setSaving(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header */}

        <div className="flex items-center justify-between px-6 py-5 border-b border-border sticky top-0 bg-card z-10">
          <h2 className="text-lg font-bold text-foreground">
            {isEdit
              ? "Editar producto"
              : "Agregar producto"}
          </h2>

          <button
            onClick={onClose}
            disabled={saving}
            className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors disabled:cursor-not-allowed"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Image */}

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Imagen del producto
            </label>

            <div
              onDragOver={(event) => {
                event.preventDefault()
                setDragOver(true)
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileRef.current?.click()}
              className={`relative group cursor-pointer rounded-xl border-2 border-dashed transition-all overflow-hidden ${
                dragOver
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-accent/60 hover:bg-muted/40"
              }`}
            >
              {imagePreview ? (
                <div className="relative aspect-video w-full">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    unoptimized
                    className="object-contain p-2"
                  />

                  <div
                    className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${
                      uploadingImage
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-white text-sm font-medium">
                      {uploadingImage ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Subiendo...
                        </>
                      ) : (
                        <>
                          <Upload className="h-4 w-4" />
                          Cambiar imagen
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 gap-3">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
                    <ImageIcon className="h-6 w-6 text-muted-foreground" />
                  </div>

                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground">
                      Arrastrá una imagen o hacé clic
                    </p>

                    <p className="text-xs text-muted-foreground mt-0.5">
                      PNG, JPG, WEBP — máx. 5 MB
                    </p>
                  </div>
                </div>
              )}
            </div>

            <input
              ref={fileRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="hidden"
              onChange={async (event) => {
                const file = event.target.files?.[0]

                if (file) {
                  await handleImageFile(file)
                }

                event.target.value = ""
              }}
            />

            {error && (
              <p className="text-sm text-destructive mt-2">
                {error}
              </p>
            )}
          </div>

          {/* Code + Name */}

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Código
              </label>

              <input
                type="text"
                value={form.code}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    code: event.target.value,
                  }))
                }
                placeholder="Ej: SC-001"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm font-mono focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Nombre del producto{" "}
                <span className="text-destructive">
                  *
                </span>
              </label>

              <input
                type="text"
                value={form.name}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    name: event.target.value,
                  }))
                }
                placeholder="Ej: Salsa de Soja Fumeiga"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>
          </div>

          {/* Description */}

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Descripción
            </label>

            <textarea
              value={form.description}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  description: event.target.value,
                }))
              }
              rows={3}
              placeholder="Breve descripción del producto..."
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none leading-relaxed"
            />
          </div>

          {/* Price + Unit */}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Precio ($ ARS)
              </label>

              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium">
                  $
                </span>

                <input
                  type="number"
                  min="0"
                  value={form.price || ""}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      price: Number(
                        event.target.value
                      ),
                    }))
                  }
                  placeholder="12500"
                  className="w-full pl-8 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Unidad / Presentación
              </label>

              <input
                type="text"
                value={form.unit}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    unit: event.target.value,
                  }))
                }
                placeholder="Ej: Bidón x 5 lts"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>
          </div>

          {/* Category + Status */}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Categoría
              </label>

              <div className="relative">
                <select
                  value={form.categorySlug}
                  onChange={(event) =>
                    handleCategoryChange(
                      event.target.value
                    )
                  }
                  className="w-full appearance-none px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all pr-9 cursor-pointer"
                >
                  {categories.map((category) => (
                    <option
                      key={category.id}
                      value={category.slug}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>

                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                Estado
              </label>

              <div className="relative">
                <select
                  value={form.status}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      status:
                        event.target.value as ProductStatus,
                    }))
                  }
                  className="w-full appearance-none px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all pr-9 cursor-pointer"
                >
                  <option value="publicado">
                    Publicado
                  </option>

                  <option value="oculto">
                    Oculto
                  </option>
                </select>

                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex gap-3 px-6 py-5 border-t border-border bg-muted/20 sticky bottom-0">
          <Button
            variant="outline"
            onClick={onClose}
            disabled={saving}
            className="flex-1 bg-background disabled:opacity-100"
          >
            Cancelar
          </Button>

          <Button
            onClick={handleSave}
            disabled={
              !form.name.trim() ||
              saving ||
              uploadingImage
            }
            className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-100"
          >
            {uploadingImage
              ? "Subiendo imagen..."
              : saving
              ? "Guardando..."
              : isEdit
              ? "Guardar cambios"
              : "Guardar producto"}
          </Button>
        </div>
      </div>
    </div>
  )
}

/* =========================================================
   DELETE CONFIRM
========================================================= */

function DeleteConfirm({
  productName,
  onConfirm,
  onCancel,
  deleting,
}: {
  productName: string
  onConfirm: () => void
  onCancel: () => void
  deleting: boolean
}) {
  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6 animate-in fade-in duration-200"
      onClick={onCancel}
    >
      <div
        className="bg-card border border-border rounded-2xl p-8 shadow-2xl max-w-sm w-full animate-in zoom-in-95 duration-200"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
          <Trash2 className="h-6 w-6 text-destructive" />
        </div>

        <h2 className="text-lg font-bold text-foreground mb-2">
          Eliminar producto
        </h2>

        <p className="text-muted-foreground text-sm mb-6 text-pretty">
          ¿Estás seguro que querés eliminar{" "}
          <span className="font-semibold text-foreground">
            &ldquo;{productName}&rdquo;
          </span>
          ? Esta acción no se puede deshacer.
        </p>

        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={onCancel}
            disabled={deleting}
            className="flex-1"
          >
            Cancelar
          </Button>

          <Button
            onClick={onConfirm}
            disabled={deleting}
            className="flex-1 bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {deleting ? "Eliminando..." : "Eliminar"}
          </Button>
        </div>
      </div>
    </div>
  )
}

/* =========================================================
   MAIN VIEW
========================================================= */

export function AdminProductsView() {
  const [productList, setProductList] = useState<
    Product[]
  >([])

  const [categoryList, setCategoryList] = useState<
    Category[]
  >([])

  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState("")

  const [filterStatus, setFilterStatus] = useState<
    "all" | ProductStatus
  >("all")

  const [filterCategory, setFilterCategory] =
    useState("all")

  const [modalOpen, setModalOpen] = useState(false)

  const [editProduct, setEditProduct] =
    useState<Product | null>(null)

  const [deleteTarget, setDeleteTarget] =
    useState<Product | null>(null)

  const [deleting, setDeleting] = useState(false)

  const [pageError, setPageError] = useState("")

  const [downloadModal, setDownloadModal] =
    useState(false)

  const [downloadStep, setDownloadStep] =
    useState<"idle" | "loading" | "done" | "error">(
      "idle"
    )

  const handleDownloadPdf = async () => {
    try {
      setDownloadStep("loading")

      await downloadPriceListPdf()

      setDownloadStep("done")
    } catch (error) {
      console.error(error)

      setDownloadStep("error")
    }
  }

  /* =====================================================
     LOAD DATA
  ===================================================== */

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        setPageError("")

        const [products, categories] =
          await Promise.all([
            getProducts(),
            getCategories(),
          ])

        setProductList(products)

        if (categories?.length) {
          setCategoryList(categories)
        }
      } catch (error) {
        console.error(
          "Error cargando productos:",
          error
        )

        setPageError(
          error instanceof Error
            ? error.message
            : "No se pudieron cargar los productos."
        )
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  /* =====================================================
     FILTERS
  ===================================================== */

  const filtered = productList.filter((product) => {
    const searchValue = search.toLowerCase()

    const matchSearch =
      product.name
        .toLowerCase()
        .includes(searchValue) ||
      product.category
        .toLowerCase()
        .includes(searchValue) ||
      product.code
        .toLowerCase()
        .includes(searchValue)

    const matchStatus =
      filterStatus === "all" ||
      product.status === filterStatus

    const matchCategory =
      filterCategory === "all" ||
      product.categorySlug === filterCategory

    return (
      matchSearch &&
      matchStatus &&
      matchCategory
    )
  })

  /* =====================================================
     CREATE / UPDATE
  ===================================================== */

  const handleSave = async (product: Product) => {
    let savedProduct: Product

    const categoryId =
      (
        product as Product & {
          categoryId?: string
        }
      ).categoryId ||
      categoryList.find(
        (category) =>
          category.slug === product.categorySlug
      )?.id

    if (!categoryId) {
      throw new Error(
        "No se encontró la categoría del producto."
      )
    }

    const payload = {
      code: product.code,
      name: product.name,
      description: product.description,
      price: product.price,
      unit: product.unit,
      image: product.image || null,
      status: product.status,
      categoryId,
    }

    if (product.id) {
      savedProduct = await updateProduct(
        product.id,
        payload
      )
    } else {
      savedProduct = await createProduct(
        payload
      )
    }

    setProductList((current) => {
      const exists = current.some(
        (item) => item.id === savedProduct.id
      )

      if (exists) {
        return current.map((item) =>
          item.id === savedProduct.id
            ? savedProduct
            : item
        )
      }

      return [savedProduct, ...current]
    })
  }

  /* =====================================================
     TOGGLE STATUS
  ===================================================== */

  const handleToggleStatus = async (
    product: Product
  ) => {
    try {
      const newStatus =
        product.status === "publicado"
          ? "oculto"
          : "publicado"

      const updatedProduct =
        await updateProductStatus(
          product.id,
          newStatus
        )

      setProductList((current) =>
        current.map((item) =>
          item.id === product.id
            ? updatedProduct
            : item
        )
      )
    } catch (error) {
      console.error(error)

      setPageError(
        error instanceof Error
          ? error.message
          : "No se pudo cambiar el estado."
      )
    }
  }

  /* =====================================================
     DELETE
  ===================================================== */

  const handleDelete = async (id: string) => {
    try {
      setDeleting(true)

      await deleteProduct(id)

      setProductList((current) =>
        current.filter((product) => product.id !== id)
      )

      setDeleteTarget(null)
    } catch (error) {
      console.error(error)

      setPageError(
        error instanceof Error
          ? error.message
          : "No se pudo eliminar el producto."
      )
    } finally {
      setDeleting(false)
    }
  }

  /* =====================================================
     STATS
  ===================================================== */

  const publishedCount = productList.filter(
    (product) => product.status === "publicado"
  ).length

  const hiddenCount = productList.filter(
    (product) => product.status === "oculto"
  ).length

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <div className="p-4 md:p-8">
      {/* Hidden PDF trigger */}

      <button
        id="admin-download-pdf-trigger"
        className="sr-only"
        onClick={() => {
          setDownloadStep("idle")
          setDownloadModal(true)
        }}
        aria-hidden="true"
      />

      {/* Page error */}

      {pageError && (
        <div className="mb-6 rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-destructive">
              {pageError}
            </p>

            <button
              onClick={() => setPageError("")}
              className="cursor-pointer text-destructive hover:opacity-70"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* =================================================
          DOWNLOAD MODAL
      ================================================= */}

      {downloadModal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6 animate-in fade-in duration-200"
          onClick={() => setDownloadModal(false)}
        >
          <div
            className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl max-w-md w-full animate-in zoom-in-95 duration-300"
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              onClick={() =>
                setDownloadModal(false)
              }
              className="cursor-pointer absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {downloadStep === "idle" && (
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-accent" />
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Exportar lista de precios
                </h2>

                <p className="text-muted-foreground mb-8 text-pretty leading-relaxed">
                  Descargá la lista completa de productos publicados en formato PDF.
                </p>

                <div className="bg-muted/60 rounded-xl p-4 mb-6 text-left space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    El PDF incluirá:
                  </p>

                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-3.5 w-3.5 text-accent" />
                      {publishedCount} productos publicados
                    </li>

                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-3.5 w-3.5 text-accent" />
                      Precios actualizados en pesos argentinos
                    </li>

                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-3.5 w-3.5 text-accent" />
                      Organizado por categorías con códigos
                    </li>

                    <li className="flex items-center gap-2">
                      <ChevronRight className="h-3.5 w-3.5 text-accent" />
                      Logo y datos de MF Logística
                    </li>
                  </ul>
                </div>

                <Button
                  onClick={handleDownloadPdf}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-6"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Descargar PDF
                </Button>
              </div>
            )}

            {downloadStep === "loading" && (
              <div className="text-center py-8">
                <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto mb-6" />

                <h2 className="text-xl font-bold text-foreground mb-2">
                  Generando PDF...
                </h2>

                <p className="text-muted-foreground text-sm">
                  Preparando la lista de precios
                </p>
              </div>
            )}

            {downloadStep === "error" && (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <X className="h-8 w-8 text-destructive" />
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-2">
                  No se pudo generar el PDF
                </h2>

                <p className="text-muted-foreground mb-8 text-pretty">
                  Intentá nuevamente en unos segundos.
                </p>

                <Button
                  onClick={() =>
                    setDownloadStep("idle")
                  }
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-6"
                >
                  Reintentar
                </Button>
              </div>
            )}

            {downloadStep === "done" && (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>

                <h2 className="text-2xl font-bold text-foreground mb-2">
                  ¡Lista descargada!
                </h2>

                <p className="text-muted-foreground mb-8 text-pretty">
                  Tu lista de precios fue generada correctamente.
                </p>

                <Button
                  onClick={() =>
                    setDownloadModal(false)
                  }
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-base py-6"
                >
                  Cerrar
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Productos
          </h2>

          <p className="text-sm text-muted-foreground mt-0.5">
            {productList.length} productos en total —{" "}
            {publishedCount} publicados,{" "}
            {hiddenCount} ocultos
          </p>
        </div>

        <Button
          onClick={() => {
            setEditProduct(null)
            setModalOpen(true)
          }}
          disabled={loading}
          className="bg-accent text-accent-foreground hover:bg-accent/90 self-start sm:self-auto disabled:opacity-100"
        >
          <Plus className="h-4 w-4 mr-2" />
          Agregar producto
        </Button>
      </div>

      {/* =================================================
          STATS
      ================================================= */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          {
            label: "Total",
            value: productList.length,
            accent: false,
          },
          {
            label: "Publicados",
            value: publishedCount,
            accent: true,
          },
          {
            label: "Ocultos",
            value: hiddenCount,
            accent: false,
          },
          {
            label: "Categorías",
            value: categoryList.length,
            accent: false,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-xl p-4"
          >
            <p className="text-sm text-muted-foreground">
              {stat.label}
            </p>

            <p
              className={`text-2xl font-bold mt-1 ${
                stat.accent
                  ? "text-accent"
                  : "text-foreground"
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* =================================================
          FILTERS
      ================================================= */}

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
          />
        </div>

        <div className="relative">
          <select
            value={filterStatus}
            onChange={(event) =>
              setFilterStatus(
                event.target.value as
                  | "all"
                  | ProductStatus
              )
            }
            className="appearance-none pl-4 pr-9 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer transition-all"
          >
            <option value="all">
              Todos los estados
            </option>

            <option value="publicado">
              Publicado
            </option>

            <option value="oculto">
              Oculto
            </option>
          </select>

          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        </div>

        <div className="relative">
          <select
            value={filterCategory}
            onChange={(event) =>
              setFilterCategory(event.target.value)
            }
            className="appearance-none pl-4 pr-9 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer transition-all"
          >
            <option value="all">
              Todas las categorías
            </option>

            {categoryList.map((category) => (
              <option
                key={category.id}
                value={category.slug}
              >
                {category.name}
              </option>
            ))}
          </select>

          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        </div>
      </div>

      {/* =================================================
          TABLE
      ================================================= */}

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {/* Table Header */}

        <div className="hidden md:grid grid-cols-[auto_1fr_auto_auto_auto_auto] items-center gap-4 px-4 py-3 bg-muted/50 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <span className="w-12">
            Imagen
          </span>

          <span>Producto</span>

          <span className="w-32">
            Categoría
          </span>

          <span className="w-28 text-right">
            Precio
          </span>

          <span className="w-24 text-center">
            Estado
          </span>

          <span className="w-24 text-right">
            Acciones
          </span>
        </div>

        {/* Loading */}

        {loading ? (
          <div className="text-center py-16">
            <div className="w-8 h-8 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto mb-4" />

            <p className="text-foreground font-medium">
              Cargando productos...
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <Search className="h-8 w-8 text-muted-foreground mx-auto mb-3 opacity-40" />

            <p className="text-foreground font-medium">
              Sin resultados
            </p>

            <p className="text-muted-foreground text-sm mt-1">
              Probá con otros filtros
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {filtered.map((product) => (
              <li
                key={product.id}
                className={`group transition-colors ${
                  product.status === "oculto"
                    ? "opacity-60"
                    : ""
                }`}
              >
                {/* Desktop */}

                <div className="hidden md:grid grid-cols-[auto_1fr_auto_auto_auto_auto] items-center gap-4 px-4 py-3 hover:bg-muted/30">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted shrink-0 relative">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={48}
                        height={48}
                        unoptimized
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon className="h-5 w-5 text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-foreground truncate">
                        {product.name}
                      </p>

                      {product.code && (
                        <span className="text-[10px] font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded shrink-0">
                          {product.code}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground truncate mt-0.5">
                      {product.unit}
                    </p>
                  </div>

                  <span className="w-32 text-xs text-muted-foreground truncate">
                    {product.category}
                  </span>

                  <span className="w-28 text-sm font-bold text-foreground text-right">
                    {formatPrice(product.price)}
                  </span>

                  <span className="w-24 flex justify-center">
                    <StatusBadge
                      status={product.status}
                    />
                  </span>

                  <div className="w-24 flex items-center justify-end gap-1">
                    <button
                      onClick={() =>
                        handleToggleStatus(product)
                      }
                      title={
                        product.status ===
                        "publicado"
                          ? "Ocultar"
                          : "Publicar"
                      }
                      className="cursor-pointer p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
                    >
                      {product.status ===
                      "publicado" ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>

                    <button
                      onClick={() => {
                        setEditProduct(product)
                        setModalOpen(true)
                      }}
                      title="Editar"
                      className="cursor-pointer p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-accent transition-all"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() =>
                        setDeleteTarget(product)
                      }
                      title="Eliminar"
                      className="cursor-pointer p-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Mobile */}

                <div className="md:hidden flex items-center gap-3 px-4 py-3 hover:bg-muted/30">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-muted shrink-0">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={56}
                        height={56}
                        unoptimized
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ImageIcon className="h-5 w-5 text-muted-foreground" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {product.name}
                    </p>

                    <p className="text-xs text-muted-foreground truncate">
                      {product.category}
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-sm font-bold text-foreground">
                        {formatPrice(product.price)}
                      </p>

                      <StatusBadge
                        status={product.status}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => {
                        setEditProduct(product)
                        setModalOpen(true)
                      }}
                      className="cursor-pointer p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-accent transition-all"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() =>
                        handleToggleStatus(product)
                      }
                      className="cursor-pointer p-2 rounded-lg text-muted-foreground hover:bg-muted transition-all"
                    >
                      {product.status ===
                      "publicado" ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>

                    <button
                      onClick={() =>
                        setDeleteTarget(product)
                      }
                      className="cursor-pointer p-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* =================================================
          MODALS
      ================================================= */}

      {modalOpen && (
        <ProductModal
          product={editProduct}
          categories={categoryList}
          onClose={() => {
            if (!loading) {
              setModalOpen(false)
              setEditProduct(null)
            }
          }}
          onSave={handleSave}
        />
      )}

      {deleteTarget && (
        <DeleteConfirm
          productName={deleteTarget.name}
          deleting={deleting}
          onConfirm={() =>
            handleDelete(deleteTarget.id)
          }
          onCancel={() => {
            if (!deleting) {
              setDeleteTarget(null)
            }
          }}
        />
      )}
    </div>
  )
}