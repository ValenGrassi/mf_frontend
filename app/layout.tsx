import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Contact } from "@/components/contact"
import { FloatingWhatsapp } from "@/components/floating-whatsapp"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MF Logística - Distribución para Gastronomía Oriental",
  description:
    "Especialistas en distribución de insumos para restaurantes de cocina oriental en CABA y AMBA. Trato directo, logística eficiente y precios mayoristas desde 2016.",
  generator: "v0.app",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <Contact/>
      <FloatingWhatsapp />
      </body>
    </html>
  )
}
