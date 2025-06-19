import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Import D'Lujos - Compras Internacionales Sin Fronteras | Intermediario de Confianza",
  description:
    "Servicio de importación y compras internacionales. Compramos productos de Amazon, Apple, Nike y más marcas que no envían a tu país. Envío seguro a toda Latinoamérica.",
  keywords:
    "importación, compras internacionales, Amazon, Apple, Nike, envío internacional, intermediario, courier, productos exclusivos, Latinoamérica",
  authors: [{ name: "Import D'Lujos" }],
  creator: "Import D'Lujos",
  publisher: "Import D'Lujos",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://importdlujos.com",
    siteName: "Import D'Lujos",
    title: "Import D'Lujos - Tu Intermediario de Confianza para Compras Internacionales",
    description:
      "Accede a productos exclusivos de Amazon, Apple, Nike y más. Compramos y enviamos a tu puerta productos que no están disponibles en tu país.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Import D'Lujos - Compras Internacionales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Import D'Lujos - Compras Internacionales Sin Fronteras",
    description: "Tu intermediario de confianza para productos exclusivos de todo el mundo.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://importdlujos.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.mp4" type="video/mp4" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Import D'Lujos",
              description: "Servicio de importación y compras internacionales",
              url: "https://importdlujos.com",
              logo: "https://importdlujos.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-346-453-0962",
                contactType: "customer service",
                availableLanguage: "Spanish",
              },
              sameAs: [
                "https://www.instagram.com/importdlujos",
                "https://www.facebook.com/importdlujos",
                "https://www.tiktok.com/@importdlujos",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
