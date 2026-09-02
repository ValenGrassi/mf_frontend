"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import {
  LayoutGrid,
  Tag,
  LogOut,
  Menu,
  X,
  ChevronRight,
  ChevronsUpDown,
  ExternalLink,
  Download,
  Settings,
} from "lucide-react"
import Logo from "@/public/logo.png"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getMe } from "@/lib/api"
import { removeToken } from "@/lib/auth"

const navItems = [
  {
    section: "Lista de precios",
    items: [
      { label: "Productos", href: "/admin", icon: LayoutGrid },
      { label: "Categorías", href: "/admin/categorias", icon: Tag },
    ],
  },
]

const PAGE_TITLES: Record<string, string> = {
  "/admin": "Productos",
  "/admin/categorias": "Categorías",
  "/admin/configuracion": "Configuración",
}

function UserMenu({ username }: { username: string }) {
  const router = useRouter()

  const handleLogout = () => {
    removeToken()
    router.replace("/login")
  }

  const initial = username
    ? username.charAt(0).toUpperCase()
    : "?"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left hover:bg-muted transition-all">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
            {initial}
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-foreground truncate">
              {username || "Cuenta"}
            </span>
            <span className="block text-xs text-muted-foreground">
              Administrador
            </span>
          </span>

          <ChevronsUpDown className="h-4 w-4 shrink-0 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" side="top">
        <DropdownMenuItem
          onClick={() =>
            router.push("/admin/configuracion")
          }
          className="gap-2"
        >
          <Settings className="h-4 w-4" />
          Configuración
        </DropdownMenuItem>

        <DropdownMenuItem
          variant="destructive"
          onClick={handleLogout}
          className="gap-2"
        >
          <LogOut className="h-4 w-4" />
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function SidebarContent({
  onClose,
  username,
}: {
  onClose?: () => void
  username: string
}) {
  const pathname = usePathname()

  const isConfigActive = pathname === "/admin/configuracion"

  return (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-border">
        <Image src={Logo} alt="MF Logística" className="w-10 h-10 object-contain" />
        <div className="min-w-0">
          <p className="font-bold text-foreground text-base leading-tight">MF Logística</p>
          <p className="text-xs text-muted-foreground truncate">Panel de administración</p>
        </div>
        {onClose && (
          <button onClick={onClose} className="cursor-pointer ml-auto text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {navItems.map((group) => (
          <div key={group.section}>
            <p className="px-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">
              {group.section}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {item.label}
                      {isActive && <ChevronRight className="h-3.5 w-3.5 ml-auto opacity-60" />}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-border space-y-1">
        <Link
          href="/admin/configuracion"
          onClick={onClose}
          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
            isConfigActive
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          <Settings className="h-4 w-4 shrink-0" />
          Configuración
        </Link>
        <button
          onClick={() => {
            const el = document.getElementById("admin-download-pdf-trigger")
            if (el) el.click()
          }}
          className="cursor-pointer w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent/10 hover:text-accent transition-all"
        >
          <Download className="h-4 w-4 shrink-0" />
          Descargar PDF
        </button>
        <Link
          href={`/lista-de-precios/${username}`}
          target="_blank"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
        >
          <ExternalLink className="h-4 w-4 shrink-0" />
          Ver página pública
        </Link>

        <div className="pt-2 mt-2 border-t border-border">
          <UserMenu username={username} />
        </div>
      </div>
    </div>
  )
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [username, setUsername] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    getMe()
      .then((me) => setUsername(me.username))
      .catch(() => {})
  }, [])

  const currentLabel = PAGE_TITLES[pathname ?? ""] ?? "Panel"

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-60 shrink-0 border-r border-border bg-background">
        <SidebarContent username={username} />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[200] md:hidden flex">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative z-10 w-72 bg-background border-r border-border flex flex-col animate-in slide-in-from-left duration-300">
            <SidebarContent onClose={() => setMobileOpen(false)} username={username} />
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center gap-4 h-16 px-4 md:px-6 border-b border-border bg-background shrink-0">
          <button
            className="cursor-pointer md:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-base font-semibold text-foreground">{currentLabel}</h1>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
