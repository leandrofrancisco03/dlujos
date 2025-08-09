import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Import D'Lujos - Personal Shopper EE. UU. a Perú | Compras Internacionales Seguras",
  description:
    "Personal Shopper especializado para comprar en EE. UU. (Amazon, Apple, Nike, Best Buy) y enviar a Perú. Compras por encargo, asesoría, verificación y envío seguro puerta a puerta.",
  keywords:
    "personal shopper, personal shopper peru, personal shopper ee.uu. a peru, compras por encargo, compras en usa, importar de usa, envío a perú, comprador personal, courier, amazon peru, apple peru, nike peru",
  authors: [{ name: "Import D'Lujos" }],
  creator: "Import D'Lujos",
  publisher: "Import D'Lujos",
  robots: "index, follow",
  alternates: { canonical: "https://importdlujos.com" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://importdlujos.com",
    siteName: "Import D'Lujos",
    title: "Personal Shopper EE. UU. a Perú | Import D'Lujos",
    description:
      "Compras por encargo en EE. UU. con envío seguro a Perú. Servicio premium, asesoría y seguimiento.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Import D'Lujos - Personal Shopper y Compras Internacionales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Import D'Lujos - Personal Shopper EE. UU. a Perú",
    description: "Compras por encargo desde Estados Unidos con envío seguro a Perú.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Favicon + Apple icon */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />

        {/* Schema.org Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Import D'Lujos",
              description: "Servicio de importación y compras internacionales",
              url: "https://importdlujos.com",
              logo: "https://importdlujos.com/favicon.png",
              sameAs: [
                "https://www.instagram.com/importdlujos",
                "https://www.facebook.com/importdlujos",
                "https://www.tiktok.com/@importdlujos",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-346-453-0962",
                contactType: "customer service",
                availableLanguage: ["Spanish"],
              },
            }),
          }}
        />

        {/* Service schema to target Personal Shopper queries */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Personal Shopper EE. UU. a Perú",
              serviceType: "Compras por Encargo y Envío Internacional",
              provider: {
                "@type": "Organization",
                name: "Import D'Lujos",
                url: "https://importdlujos.com"
              },
              areaServed: { "@type": "Country", name: "Perú" },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Compras Internacionales",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Personal Shopper Especializado" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Compras en Amazon, Apple, Nike, Best Buy" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Verificación y Reempaque" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Envío Internacional puerta a puerta" } }
                ]
              }
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
