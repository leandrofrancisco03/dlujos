"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function BrandsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("brands-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const brands = [
    {
      name: "Amazon",
      logo: "/brands/amazon.jpg",
      bgColor: "bg-white hover:bg-orange-50",
      borderColor: "border-orange-100 hover:border-orange-200",
      url: "https://www.amazon.com/",
    },
    {
      name: "Apple",
      logo: "/brands/apple.png",
      bgColor: "bg-white hover:bg-gray-50",
      borderColor: "border-gray-100 hover:border-gray-200",
      url: "https://www.apple.com/",
    },
    {
      name: "Nike",
      logo: "/brands/nike.png",
      bgColor: "bg-white hover:bg-orange-50",
      borderColor: "border-orange-100 hover:border-orange-200",
      url: "https://www.nike.com/",
    },
    {
      name: "Microsoft",
      logo: "/brands/microsoft.jpg",
      bgColor: "bg-white hover:bg-blue-50",
      borderColor: "border-blue-100 hover:border-blue-200",
      url: "https://www.microsoft.com/en-us/store/b/sale",
    },
    {
      name: "Samsung",
      logo: "/brands/samsung.png",
      bgColor: "bg-white hover:bg-blue-50",
      borderColor: "border-blue-100 hover:border-blue-200",
      url: "https://www.samsung.com/us/",
    },
    {
      name: "Adidas",
      logo: "/brands/adidas.png",
      bgColor: "bg-white hover:bg-gray-50",
      borderColor: "border-gray-100 hover:border-gray-200",
      url: "https://www.adidas.com/us",
    },
    {
      name: "Best Buy",
      logo: "/brands/bestbuy.png",
      bgColor: "bg-white hover:bg-yellow-50",
      borderColor: "border-yellow-100 hover:border-yellow-200",
      url: "https://www.bestbuy.com/",
    },
    {
      name: "Target",
      logo: "/brands/target.png",
      bgColor: "bg-white hover:bg-red-50",
      borderColor: "border-red-100 hover:border-red-200",
      url: "https://www.target.com/",
    },
    {
      name: "Walmart",
      logo: "/brands/walmart.png",
      bgColor: "bg-white hover:bg-blue-50",
      borderColor: "border-blue-100 hover:border-blue-200",
      url: "https://www.walmart.com/",
    },
    {
      name: "Shein",
      logo: "/brands/shein.jpg",
      bgColor: "bg-white hover:bg-gray-50",
      borderColor: "border-gray-100 hover:border-gray-200",
      url: "https://us.shein.com/",
    },
  ]

  return (
    <section id="marcas" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div id="brands-section" className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Marcas con las que trabajamos
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Accede a productos de las mejores marcas internacionales a través de nuestro servicio premium.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 py-12 md:grid-cols-4 lg:grid-cols-5">
          {brands.map((brand, index) => (
            <Link
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center p-6 rounded-xl shadow-sm border-2 transition-all duration-500 transform hover:scale-105 hover:shadow-lg cursor-pointer ${brand.bgColor} ${brand.borderColor} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={`Visitar sitio oficial de ${brand.name}`}
                  fill
                  className="object-contain filter transition-all duration-300 hover:brightness-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
            </Link>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-gray-500 text-sm">
            Y muchas más marcas disponibles. ¿No encuentras la que buscas? ¡Contáctanos!
          </p>
        </div>
      </div>
    </section>
  )
}
