"use client"

import { usePathname } from "next/navigation"

import { Contact } from "@/components/contact"
import { FloatingWhatsapp } from "@/components/floating-whatsapp"

export function RouteChrome() {
  const pathname = usePathname()

  const isAdmin = pathname?.startsWith("/admin")

  // Las páginas personalizadas de /lista-de-precios/[usuario] arman su
  // propio footer y botón de WhatsApp con el teléfono de ese admin.
  const isPersonalizedPriceList = /^\/lista-de-precios\/[^/]+\/?$/.test(
    pathname ?? ""
  )

  if (isAdmin || isPersonalizedPriceList) return null

  return (
    <>
      <Contact />
      <FloatingWhatsapp />
    </>
  )
}
