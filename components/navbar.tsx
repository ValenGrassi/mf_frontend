"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import Logo from "../public/logo.png"
import Image from "next/image"
import { buildWhatsappLink } from "@/lib/phone"

const DEFAULT_LISTA_PHONE = "11 6412-9259"
const DEFAULT_SITE_PHONE = "11 7266-7077"

export function Navbar({
  phone,
}: {
  phone?: string
} = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [catalogDropdownOpen, setCatalogDropdownOpen] = useState(false)
  const pathname = usePathname()

  const isListaDePrecios = pathname.startsWith("/lista-de-precios")
  const contactHref = isListaDePrecios
    ? buildWhatsappLink(
        phone || DEFAULT_LISTA_PHONE,
        "Hola! Vengo de la lista de precios y quiero hacer un pedido."
      )
    : buildWhatsappLink(
        DEFAULT_SITE_PHONE,
        "Hola! Vengo de la página web y me gustaría recibir más información. Gracias!"
      )

  const catalogSections = [
    { name: "Pescadería", href: "/catalogo/pescaderia" },
    { name: "Frescos y Congelados", href: "/catalogo/pescaderia#Frescos y Congelados" },
    { name: "Productos para Sushi", href: "/catalogo/productos-para-sushi" },
    { name: "Almacén", href: "/catalogo/almacen" },
    { name: "Verdulería", href: "/catalogo/almacen#Verdulería" },
    { name: "Papelería", href: "/catalogo/papeleria-y-limpieza" },
    { name: "Limpieza", href: "/catalogo/papeleria-y-limpieza#Limpieza" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:grid md:grid-cols-[auto_1fr_auto] items-center h-20 gap-8">

          {/* Left — Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image className="w-16 h-16" src={Logo} alt="logo" />
            <span className="text-xl font-bold text-foreground transition-colors group-hover:text-red-500 font-serif whitespace-nowrap">
              MF Logística
            </span>
          </Link>

          {/* Center — Nav links */}
          <div className="flex items-center justify-center gap-7">
            <Link
              href="/"
              className={`text-base font-medium transition-colors hover:text-accent whitespace-nowrap ${
                pathname === "/" ? "text-accent" : "text-foreground/80"
              }`}
            >
              Inicio
            </Link>

            <Link
              href="/quienes-somos"
              className={`text-base font-medium transition-colors hover:text-accent whitespace-nowrap ${
                pathname === "/quienes-somos" ? "text-accent" : "text-foreground/80"
              }`}
            >
              Quiénes Somos
            </Link>

            {/* Catalog Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCatalogDropdownOpen(true)}
              onMouseLeave={() => setCatalogDropdownOpen(false)}
            >
              <Link
                href="/catalogo"
                onClick={() => setCatalogDropdownOpen(false)}
                className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-accent cursor-pointer whitespace-nowrap ${
                  pathname.startsWith("/catalogo") ? "text-accent" : "text-foreground/80"
                }`}
              >
                Catálogo
                <ChevronUp
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    catalogDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2 transform transition-all duration-200 ease-out ${
                  catalogDropdownOpen
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-2 invisible"
                }`}
              >
                {catalogSections.map((section) => (
                  <Link
                    key={section.href}
                    href={section.href}
                    onClick={() => setCatalogDropdownOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-accent transition-colors"
                  >
                    {section.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/mercado-libre"
              className={`flex items-center gap-1.5 text-base font-medium transition-colors hover:text-[oklch(0.65_0.15_80)] whitespace-nowrap ${
                pathname === "/mercado-libre" ? "text-[oklch(0.78_0.15_80)]" : "text-foreground/80"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.15_80)] opacity-80 shrink-0" />
              Mercado Libre
            </Link>

            {/* <Link
              href="/lista-de-precios"
              className={`text-base font-medium transition-colors hover:text-accent whitespace-nowrap ${
                isListaDePrecios ? "text-accent" : "text-foreground/80"
              }`}
            >
              Lista de Precios
            </Link> */}
          </div>

          {/* Right — Actions */}
          <div className="flex items-center gap-3 shrink-0">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-base">
              <a href={contactHref} target="_blank" rel="noopener noreferrer">
                Contacto
              </a>
            </Button>
            <Link
              href="/#como-pedir"
              className="text-base font-bold transition-colors hover:text-accent text-foreground/80 whitespace-nowrap"
            >
              Hacer pedido
            </Link>
          </div>
        </div>

        {/* Mobile header row */}
        <div className="flex md:hidden items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Image className="w-14 h-14" src={Logo} alt="logo" />
            <span className="text-lg font-bold text-foreground group-hover:text-red-500 font-serif">
              MF Logística
            </span>
          </Link>
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-base font-medium text-foreground/80 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>

              <Link
                href="/quienes-somos"
                className="text-base font-medium text-foreground/80 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Quiénes Somos
              </Link>

              <div className="flex flex-col gap-2">
                <Link
                  href="/catalogo"
                  className="text-base font-medium text-foreground/80 hover:text-accent transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Catálogo
                </Link>
                <div className="pl-4 flex flex-col gap-2">
                  {catalogSections.map((section) => (
                    <Link
                      key={section.href}
                      href={section.href}
                      className="text-sm font-medium text-foreground/60 hover:text-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {section.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/mercado-libre"
                className="text-base font-medium text-foreground/80 hover:text-[oklch(0.65_0.15_80)] transition-colors flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.15_80)] shrink-0" />
                Mercado Libre
              </Link>

              {/* <Link
                href="/lista-de-precios"
                className="text-base font-medium text-foreground/80 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Lista de Precios
              </Link> */}

              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
                <a href={contactHref} target="_blank" rel="noopener noreferrer">
                  Contacto
                </a>
              </Button>

              <Link
                href="/#como-pedir"
                className="text-base font-bold transition-colors hover:text-accent text-foreground/80"
                onClick={() => setMobileMenuOpen(false)}
              >
                Hacer pedido
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
