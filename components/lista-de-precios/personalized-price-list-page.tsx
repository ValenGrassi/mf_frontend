"use client"

import { useEffect, useState } from "react"

import { Navbar } from "@/components/navbar"
import { PriceListPublic } from "@/components/lista-de-precios/price-list-public"
import { getPublicAdmin } from "@/lib/api"

export function PersonalizedPriceListPage({
  usuario,
}: {
  usuario: string
}) {
  const [phone, setPhone] = useState<string | undefined>(
    undefined
  )

  useEffect(() => {
    getPublicAdmin(usuario)
      .then((admin) =>
        setPhone(admin.phone ?? undefined)
      )
      .catch(() => {
        // Si el usuario no existe o falla, se usan los
        // números por defecto de la lista de precios.
      })
  }, [usuario])

  return (
    <>
      <Navbar phone={phone} />
      <main className="min-h-screen pt-20">
        <PriceListPublic
          adminUsername={usuario}
          phone={phone}
        />
      </main>
    </>
  )
}
