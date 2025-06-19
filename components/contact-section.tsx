"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Mail, Instagram, Facebook, Send, Phone } from "lucide-react"

export default function ContactSection() {
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

    const element = document.getElementById("contact-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contacto"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
    >
      <div id="contact-section" className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contáctanos
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Estamos aquí para ayudarte con tus compras internacionales. Ponte en contacto con nosotros.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <Card
            className={`shadow-xl border-0 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-blue-600" />
                Envíanos un mensaje
              </CardTitle>
              <CardDescription>Completa el formulario y te responderemos a la brevedad.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <Input id="first-name" placeholder="Juan" className="border-gray-200 focus:border-blue-500" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                      Apellido
                    </label>
                    <Input id="last-name" placeholder="Pérez" className="border-gray-200 focus:border-blue-500" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    placeholder="ejemplo@correo.com"
                    type="email"
                    className="border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Escribe tu mensaje aquí..."
                    className="border-gray-200 focus:border-blue-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all"
                >
                  Enviar mensaje
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card
              className={`shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "300ms" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Contáctanos directamente por WhatsApp para una respuesta rápida y personalizada.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-green-200 hover:bg-green-50 text-green-700 hover:text-green-800"
                >
                  <Link href="https://wa.me/13464530962" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Chatear por WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card
              className={`shadow-lg border-0 bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "400ms" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-blue-600" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">Envíanos un correo electrónico y te responderemos a la brevedad.</p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-blue-200 hover:bg-blue-50 text-blue-700 hover:text-blue-800"
                >
                  <Link href="mailto:Cindyvento1@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Cindyvento1@gmail.com
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card
              className={`shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: "500ms" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-purple-600" />
                  Redes Sociales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Síguenos en nuestras redes sociales para estar al tanto de novedades y ofertas especiales.
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-pink-200 hover:bg-pink-50 text-pink-600 hover:text-pink-700 transform hover:scale-110 transition-all"
                  >
                    <Link href="#" aria-label="Instagram">
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-blue-200 hover:bg-blue-50 text-blue-600 hover:text-blue-700 transform hover:scale-110 transition-all"
                  >
                    <Link href="#" aria-label="Facebook">
                      <Facebook className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="border-pink-200 hover:bg-pink-50 text-pink-600 hover:text-pink-700 transform hover:scale-110 transition-all"
                  >
                    <Link href="#" aria-label="TikTok">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
