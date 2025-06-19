"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Search, Heart, ShoppingBag, Star, CheckCircle } from "lucide-react"

export default function PersonalShopperSection() {
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

    const element = document.getElementById("personal-shopper-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Search,
      title: "Búsqueda Especializada",
      description: "Encontramos productos específicos que no puedes localizar",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Heart,
      title: "Recomendaciones Personalizadas",
      description: "Sugerimos productos basados en tus gustos y necesidades",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: ShoppingBag,
      title: "Compras por Encargo",
      description: "Realizamos compras específicas siguiendo tus instrucciones exactas",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Star,
      title: "Asesoría de Productos",
      description: "Te ayudamos a elegir la mejor opción entre diferentes alternativas",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
    },
  ]

  const benefits = [
    "Ahorra tiempo en búsquedas complejas",
    "Acceso a productos exclusivos y limitados",
    "Comparación de precios entre diferentes tiendas",
    "Verificación de autenticidad de productos",
    "Seguimiento personalizado de tu pedido",
    "Atención 24/7 durante todo el proceso",
  ]

  return (
    <section
      id="personal-shopper"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div id="personal-shopper-section" className="container px-4 md:px-6 relative">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-indigo-50 text-indigo-700 border-indigo-200">
              <User className="mr-2 h-4 w-4" />
              Servicio Premium
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Personal Shopper Especializado
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl leading-relaxed">
              Nuestro equipo de expertos te ayuda a encontrar exactamente lo que buscas. Desde productos exclusivos
              hasta artículos difíciles de conseguir.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 py-12 lg:grid-cols-2">
          {/* Features Cards */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg ${feature.bgColor} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${feature.color} shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-gray-800 group-hover:text-gray-900 transition-colors">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  ¿Por qué elegir nuestro Personal Shopper?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-gradient-to-br from-indigo-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-indigo-800">¿Cómo funciona?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Cuéntanos qué necesitas</h4>
                    <p className="text-sm text-gray-600">Describe el producto, marca, características específicas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Investigamos y cotizamos</h4>
                    <p className="text-sm text-gray-600">Buscamos las mejores opciones y precios</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Compramos y enviamos</h4>
                    <p className="text-sm text-gray-600">Realizamos la compra y te mantenemos informado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 transform hover:scale-105 transition-all group"
              >
                <Link href="#contacto">
                  Solicitar Personal Shopper
                  <User className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
              <p className="text-center text-sm text-gray-500">Consulta gratuita • Sin compromiso • Respuesta en 24h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
