"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Package, Truck, CreditCard, ArrowRight } from "lucide-react"

export default function ServicesSection() {
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

    const element = document.getElementById("services-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: ShoppingCart,
      title: "1. Selecciona tus productos",
      description: "Encuentra los productos que deseas de tiendas internacionales",
      content:
        "Envíanos los enlaces de los productos que deseas comprar de Amazon, Apple, Nike u otras tiendas internacionales que no envían a tu país.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: CreditCard,
      title: "2. Realizamos la compra",
      description: "Nosotros compramos los productos por ti",
      content:
        "Una vez confirmado el pedido y realizado el pago, nosotros compramos los productos directamente de la tienda oficial.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Package,
      title: "3. Recibimos y verificamos",
      description: "Comprobamos que todo esté en perfecto estado",
      content:
        "Recibimos los productos en nuestras instalaciones, verificamos su estado y los preparamos para el envío internacional.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Truck,
      title: "4. Enviamos a tu puerta",
      description: "Entrega segura hasta tu domicilio",
      content:
        "Enviamos los productos directamente a tu domicilio con seguimiento en tiempo real para que puedas monitorear tu paquete en todo momento.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div id="services-section" className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Cómo funciona nuestro servicio
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Hacemos que comprar productos internacionales sea simple, seguro y confiable.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg ${service.bgColor} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-gray-800 group-hover:text-gray-900 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{service.content}</p>
                <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                  Saber más
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
