"use client"

import { useEffect, useState } from "react"
import { Plus, Pencil, Trash2, X, EyeOff, Eye, ChevronDown, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Category, type ProductStatus } from "@/lib/lista-de-precios-data"
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "@/lib/api"

function StatusBadge({ status }: { status: ProductStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
        status === "publicado"
          ? "bg-green-500/10 text-green-700 dark:text-green-400"
          : "bg-muted text-muted-foreground"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${status === "publicado" ? "bg-green-500" : "bg-muted-foreground"}`} />
      {status === "publicado" ? "Publicada" : "Oculta"}
    </span>
  )
}

interface CategoryPayload {
  name: string
  description: string
  status: ProductStatus
}

interface CategoryModalProps {
  category?: Category | null
  onClose: () => void
  onSave: (payload: CategoryPayload) => Promise<void>
}

function CategoryModal({ category, onClose, onSave }: CategoryModalProps) {
  const isEdit = !!category
  const [form, setForm] = useState({
    name: category?.name ?? "",
    description: category?.description ?? "",
    status: category?.status ?? ("publicado" as ProductStatus),
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  const handleSave = async () => {
    if (!form.name.trim()) return

    try {
      setSaving(true)
      setError("")

      await onSave({
        name: form.name.trim(),
        description: form.description.trim(),
        status: form.status,
      })

      onClose()
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se pudo guardar la categoría."
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
        className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">
            {isEdit ? "Editar categoría" : "Nueva categoría"}
          </h2>
          <button
            onClick={onClose}
            disabled={saving}
            className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors disabled:cursor-not-allowed"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Nombre <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              placeholder="Ej: Salsas y Condimentos"
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Descripción</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              rows={3}
              placeholder="Breve descripción de la categoría..."
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none leading-relaxed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Estado</label>
            <div className="relative">
              <select
                value={form.status}
                onChange={(e) => setForm((f) => ({ ...f, status: e.target.value as ProductStatus }))}
                className="w-full appearance-none px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all pr-9 cursor-pointer"
              >
                <option value="publicado">Publicada</option>
                <option value="oculto">Oculta</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
        </div>

        <div className="flex gap-3 px-6 py-5 border-t border-border bg-muted/20">
          <Button variant="outline" onClick={onClose} disabled={saving} className="flex-1 bg-background disabled:opacity-100">
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            disabled={!form.name.trim() || saving}
            className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-100"
          >
            {saving
              ? "Guardando..."
              : isEdit
              ? "Guardar cambios"
              : "Crear categoría"}
          </Button>
        </div>
      </div>
    </div>
  )
}

function DeleteConfirm({
  name,
  deleting,
  onConfirm,
  onCancel,
}: {
  name: string
  deleting: boolean
  onConfirm: () => void
  onCancel: () => void
}) {
  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 backdrop-blur-sm p-6 animate-in fade-in duration-200"
      onClick={onCancel}
    >
      <div
        className="bg-card border border-border rounded-2xl p-8 shadow-2xl max-w-sm w-full animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
          <Trash2 className="h-6 w-6 text-destructive" />
        </div>
        <h2 className="text-lg font-bold text-foreground mb-2">Eliminar categoría</h2>
        <p className="text-muted-foreground text-sm mb-6 text-pretty">
          ¿Estás seguro que querés eliminar <span className="font-semibold text-foreground">&ldquo;{name}&rdquo;</span>?
        </p>
        <div className="flex gap-3">
          <Button variant="outline" onClick={onCancel} disabled={deleting} className="flex-1">
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

export function AdminCategoriesView() {
  const [categoryList, setCategoryList] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [pageError, setPageError] = useState("")

  const [modalOpen, setModalOpen] = useState(false)
  const [editCategory, setEditCategory] = useState<Category | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<Category | null>(null)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        setPageError("")

        const data = await getCategories()

        setCategoryList(data)
      } catch (error) {
        setPageError(
          error instanceof Error
            ? error.message
            : "No se pudieron cargar las categorías."
        )
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleSave = async (payload: CategoryPayload) => {
    if (editCategory) {
      const updated = await updateCategory(editCategory.id, payload)

      setCategoryList((list) =>
        list.map((c) => (c.id === updated.id ? updated : c))
      )
    } else {
      const created = await createCategory(payload)

      setCategoryList((list) => [...list, created])
    }
  }

  const handleToggle = async (category: Category) => {
    try {
      const newStatus: ProductStatus =
        category.status === "publicado" ? "oculto" : "publicado"

      const updated = await updateCategory(category.id, {
        name: category.name,
        description: category.description,
        status: newStatus,
      })

      setCategoryList((list) =>
        list.map((c) => (c.id === updated.id ? updated : c))
      )
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "No se pudo cambiar el estado."
      )
    }
  }

  const handleDelete = async (id: string) => {
    try {
      setDeleting(true)

      await deleteCategory(id)

      setCategoryList((list) => list.filter((c) => c.id !== id))
      setDeleteTarget(null)
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "No se pudo eliminar la categoría."
      )
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="p-4 md:p-8">
      {pageError && (
        <div className="mb-6 rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-destructive">{pageError}</p>
            <button
              onClick={() => setPageError("")}
              className="cursor-pointer text-destructive hover:opacity-70"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Categorías</h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            {categoryList.length} categorías · {categoryList.filter((c) => c.status === "publicado").length} publicadas
          </p>
        </div>
        <Button
          onClick={() => { setEditCategory(null); setModalOpen(true) }}
          className="bg-accent text-accent-foreground hover:bg-accent/90 self-start sm:self-auto"
        >
          <Plus className="h-4 w-4 mr-2" />
          Nueva categoría
        </Button>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {/* Header */}
        <div className="hidden md:grid grid-cols-[1fr_auto_auto_auto_auto] items-center gap-4 px-6 py-3 bg-muted/50 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <span>Categoría</span>
          <span className="w-40">Descripción</span>
          <span className="w-24 text-center">Productos</span>
          <span className="w-24 text-center">Estado</span>
          <span className="w-24 text-right">Acciones</span>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="w-8 h-8 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-foreground font-medium">Cargando categorías...</p>
          </div>
        ) : categoryList.length === 0 ? (
          <div className="text-center py-16">
            <Search className="h-8 w-8 text-muted-foreground mx-auto mb-3 opacity-40" />
            <p className="text-foreground font-medium">Todavía no hay categorías</p>
            <p className="text-muted-foreground text-sm mt-1">Creá la primera con el botón de arriba</p>
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {categoryList.map((cat) => (
              <li key={cat.id} className={`group transition-colors ${cat.status === "oculto" ? "opacity-60" : ""}`}>
                {/* Desktop */}
                <div className="hidden md:grid grid-cols-[1fr_auto_auto_auto_auto] items-center gap-4 px-6 py-4 hover:bg-muted/20">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{cat.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">/{cat.slug}</p>
                  </div>
                  <p className="w-40 text-xs text-muted-foreground truncate">{cat.description}</p>
                  <div className="w-24 text-center">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted text-sm font-bold text-foreground">
                      {cat.productCount ?? 0}
                    </span>
                  </div>
                  <span className="w-24 flex justify-center"><StatusBadge status={cat.status} /></span>
                  <div className="w-24 flex items-center justify-end gap-1">
                    <button
                      onClick={() => handleToggle(cat)}
                      title={cat.status === "publicado" ? "Ocultar" : "Publicar"}
                      className="cursor-pointer p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
                    >
                      {cat.status === "publicado" ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                    <button
                      onClick={() => { setEditCategory(cat); setModalOpen(true) }}
                      className="cursor-pointer p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-accent transition-all"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setDeleteTarget(cat)}
                      className="cursor-pointer p-2 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Mobile */}
                <div className="md:hidden flex items-center gap-4 px-4 py-4 hover:bg-muted/20">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-semibold text-foreground">{cat.name}</p>
                      <StatusBadge status={cat.status} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">{cat.productCount ?? 0} productos</p>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => { setEditCategory(cat); setModalOpen(true) }}
                      className="cursor-pointer p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-accent transition-all"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setDeleteTarget(cat)}
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

      {modalOpen && (
        <CategoryModal
          category={editCategory}
          onClose={() => { setModalOpen(false); setEditCategory(null) }}
          onSave={handleSave}
        />
      )}
      {deleteTarget && (
        <DeleteConfirm
          name={deleteTarget.name}
          deleting={deleting}
          onConfirm={() => handleDelete(deleteTarget.id)}
          onCancel={() => { if (!deleting) setDeleteTarget(null) }}
        />
      )}
    </div>
  )
}
