"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { login } from "@/services/authService"
import { saveToken } from "@/lib/auth"

export default function LoginPage() {
  const router = useRouter()

  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault()

    try {
      setLoading(true)
      setError("")

      const data = await login(
        user,
        password
      )

      saveToken(data.token)

      router.replace("/admin")
    } catch (err) {
      setError(
        "Usuario o contraseña incorrectos"
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">

      <header className="w-full border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-5xl items-center px-4 md:px-6">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <Link href="/">
              <ArrowLeft className="size-4" />
              <span>Volver</span>
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">

          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="relative h-16 w-64">
              <Image
                src="/logo.png"
                alt="Lubricentro Duarte"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <Card className="border-border shadow-md">

            <CardHeader className="space-y-1 border-b border-border pb-6 text-center">
              <CardTitle className="text-2xl font-bold text-foreground">
                Acceso al sistema
              </CardTitle>

              <p className="text-sm text-muted-foreground">
                Solo para personal autorizado de MF Logística
              </p>
            </CardHeader>

            <CardContent className="p-6">

              <form
                onSubmit={handleLogin}
                className="space-y-5"
              >

                <div className="space-y-2">
                  <Label htmlFor="user">
                    Usuario
                  </Label>

                  <Input
                    id="user"
                    type="text"
                    className="h-12 text-base"
                    value={user}
                    onChange={(e) =>
                      setUser(e.target.value)
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">
                    Contraseña
                  </Label>

                  <Input
                    id="password"
                    type="password"
                    className="h-12 text-base"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    required
                  />
                </div>

                {error && (
                  <div className="rounded-md border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-500">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full text-base font-semibold"
                  disabled={loading}
                >
                  {loading
                    ? "Ingresando..."
                    : "Ingresar"}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  ¿Problemas para acceder?
                  Contactá al administrador.
                </p>

              </form>

            </CardContent>
          </Card>

        </div>
      </main>

      <footer className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MF Logística.
        Todos los derechos reservados.
      </footer>

    </div>
  )
}