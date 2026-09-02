"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { AdminProductsView } from "@/components/lista-de-precios/admin-products-view"
import { getToken } from "@/lib/auth"

export default function AdminPage() {
  const router = useRouter()

  const [checking, setChecking] =
    useState(true)

  useEffect(() => {
    const token = getToken()

    if (!token) {
      router.replace("/login")
      return
    }

    setChecking(false)
  }, [router])

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Verificando acceso...
        </p>
      </div>
    )
  }

  return <AdminProductsView />
}