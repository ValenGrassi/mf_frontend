import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { AboutPreview } from "@/components/about-preview"
import { CatalogPreview } from "@/components/catalog-preview"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MF Logística - Distribución Mayorista para Restaurantes Orientales | CABA y AMBA",
  description:
    "Distribución mayorista de insumos para restaurantes de sushi, comida china, coreana y tailandesa en Buenos Aires. Más de 8 años de experiencia, entregas puntuales y precios mayoristas competitivos.",
  keywords: [
    "distribución mayorista",
    "insumos para restaurantes",
    "comida oriental",
    "sushi",
    "comida china",
    "cocina coreana",
    "cocina tailandesa",
    "CABA",
    "AMBA",
    "Buenos Aires",
    "logística gastronómica",
  ],
  openGraph: {
    title: "MF Logística - Distribución para Gastronomía Oriental",
    description:
      "Especialistas en distribución mayorista de insumos para restaurantes de cocina oriental en Buenos Aires.",
    type: "website",
    locale: "es_AR",
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <Hero />
        <Services />
        <AboutPreview />
        <CatalogPreview />
        <Contact />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MF Logística",
            description: "Distribución mayorista de insumos para restaurantes de cocina oriental",
            url: "https://mflogistica.com.ar",
            logo: "https://mflogistica.com.ar/logo.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Buenos Aires",
              addressRegion: "CABA",
              addressCountry: "AR",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+54-9-11-2345-6789",
              contactType: "Sales",
              areaServed: "AR",
              availableLanguage: "Spanish",
            },
            sameAs: ["https://wa.me/5491123456789"],
          }),
        }}
      />
    </>
  )
}
