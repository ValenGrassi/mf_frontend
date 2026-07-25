"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import Logo from "../public/logo.png"
import Image from "next/image"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [catalogDropdownOpen, setCatalogDropdownOpen] = useState(false)
  const pathname = usePathname()

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
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image className="w-20 h-20" src={Logo} alt="logo" />
            <span className="text-2xl font-bold text-foreground transition-colors group-hover:text-red-500 font-serif">
            MF Logística
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-base font-medium transition-colors hover:text-accent ${
                pathname === "/" ? "text-accent" : "text-foreground/80"
              }`}
            >
              Inicio
            </Link>

            <Link
              href="/quienes-somos"
              className={`text-base font-medium transition-colors hover:text-accent ${
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
              {/* Cambiado de button a Link */}
              <Link
                href="/catalogo"
                onClick={() => setCatalogDropdownOpen(false)}
                className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-accent cursor-pointer ${
                  pathname === "/catalogo" ? "text-accent" : "text-foreground/80"
                }`}
              >
                Catálogo
                <ChevronUp
                  className={`h-4 w-4 transition-transform duration-200 ${
                    catalogDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* Dropdown con animación */}
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

            <div className="flex justify-center items-center gap-4"><Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="https://wa.me/5491172667077?text=Hola!%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.%20Gracias!" target="_blank" rel="noopener noreferrer">
                Contacto
              </a>
            </Button>

              <Link
                href="/#como-pedir"
                className={`text-base font-bold transition-colors hover:text-accent text-foreground/80`}
              >
                Hacer pedido
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
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
                {/* Cambiado de span a Link en la versión móvil */}
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

              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
              <a href="https://wa.me/5491172667077?text=Hola!%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.%20Gracias!" target="_blank" rel="noopener noreferrer">
                  Contacto
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}