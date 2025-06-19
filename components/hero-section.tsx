"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Shield, Zap } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="inicio"
      className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div
            className={`flex flex-col justify-center space-y-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-blue-50 text-blue-700 border-blue-200 animate-pulse">
                <Zap className="mr-2 h-4 w-4" />
                Servicio Premium de Importación
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Tus compras internacionales sin fronteras
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                Accede a productos exclusivos de <span className="font-semibold text-blue-600">Amazon</span>,{" "}
                <span className="font-semibold text-gray-800">Apple</span>,{" "}
                <span className="font-semibold text-orange-500">Nike</span> y más. Nosotros compramos y enviamos
                directamente a tu puerta con total seguridad.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-500" />
                <span>Envío mundial</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                <span>Entrega rápida</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all group"
              >
                <Link href="#contacto">
                  Solicitar servicio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-blue-200 hover:bg-blue-50 transform hover:scale-105 transition-all"
              >
                <Link href="#servicios">Conocer más</Link>
              </Button>
            </div>
          </div>

          <div
            className={`mx-auto aspect-video overflow-hidden rounded-xl relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <img
              src="/hero-shopping.png"
              alt="Persona comprando productos internacionales en centro comercial"
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-bold text-lg mb-1">Compras sin límites</h3>
              <p className="text-sm opacity-90">Productos exclusivos de todo el mundo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
