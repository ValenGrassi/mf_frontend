"use client"

import { useEffect, useState } from "react"
import { X, User, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getMe, updateMyPhone } from "@/lib/api"

export function AdminSettingsView() {
  const [username, setUsername] = useState("")
  const [phone, setPhone] = useState("")

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const [pageError, setPageError] = useState("")
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        setPageError("")

        const me = await getMe()

        setUsername(me.username)
        setPhone(me.phone ?? "")
      } catch (error) {
        setPageError(
          error instanceof Error
            ? error.message
            : "No se pudo cargar la configuración."
        )
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const handleSave = async (
    event: React.FormEvent
  ) => {
    event.preventDefault()

    try {
      setSaving(true)
      setPageError("")
      setSaved(false)

      const updated = await updateMyPhone(
        phone.trim()
      )

      setPhone(updated.phone ?? "")
      setSaved(true)
    } catch (error) {
      setPageError(
        error instanceof Error
          ? error.message
          : "No se pudo guardar el cambio."
      )
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="p-4 md:p-8">
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

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground">
          Configuración
        </h2>

        <p className="text-sm text-muted-foreground mt-0.5">
          Datos de tu cuenta y de contacto usados en la lista de
          precios.
        </p>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 max-w-lg">
        {loading ? (
          <div className="text-center py-10">
            <div className="w-8 h-8 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto mb-4" />

            <p className="text-foreground font-medium">
              Cargando configuración...
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSave}
            className="space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="username">
                Usuario
              </Label>

              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                <Input
                  id="username"
                  value={username}
                  disabled
                  className="pl-9 bg-muted/40"
                />
              </div>

              <p className="text-xs text-muted-foreground">
                El nombre de usuario no se puede
                cambiar desde acá.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Teléfono de contacto
              </Label>

              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />

                <Input
                  id="phone"
                  value={phone}
                  onChange={(event) => {
                    setPhone(event.target.value)
                    setSaved(false)
                  }}
                  placeholder="Ej: 11 6412-9259"
                  className="pl-9"
                />
              </div>

              <p className="text-xs text-muted-foreground">
                Se muestra en la portada del PDF de
                la lista de precios.
              </p>
            </div>

            {saved && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Cambios guardados correctamente.
              </p>
            )}

            <Button
              type="submit"
              disabled={saving}
              className="bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-100"
            >
              {saving
                ? "Guardando..."
                : "Guardar cambios"}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
