"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
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

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "María González",
      location: "Bogotá, Colombia",
      text: "Increíble servicio. Pude comprar mi iPhone 14 Pro que no estaba disponible en mi país. Llegó en perfecto estado y en el tiempo prometido. ¡Totalmente recomendado!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      product: "iPhone 14 Pro",
      gradient: "from-pink-400 to-rose-500",
    },
    {
      name: "Carlos Rodríguez",
      location: "Lima, Perú",
      text: "He utilizado Import D'Lujos varias veces para comprar productos de Amazon que no envían a Perú. El servicio es excelente, muy confiable y con precios justos.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      product: "Productos Amazon",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      name: "Ana Martínez",
      location: "Santiago, Chile",
      text: "Compré unos zapatos Nike exclusivos que no se vendían en mi país. El proceso fue muy sencillo, el equipo muy profesional y la entrega súper rápida.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
      product: "Nike Air Jordan",
      gradient: "from-purple-400 to-indigo-500",
    },
  ]

  return (
    <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div id="testimonials-section" className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Lo que dicen nuestros clientes
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Miles de clientes satisfechos confían en nosotros para sus compras internacionales.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 relative">
                <div
                  className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-br ${testimonial.gradient} rounded-full flex items-center justify-center`}
                >
                  <Quote className="h-4 w-4 text-white" />
                </div>

                <div className="flex items-center gap-2 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.text}"</p>

                <div
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${testimonial.gradient} text-white`}
                >
                  {testimonial.product}
                </div>
              </CardContent>

              <CardFooter className="border-t bg-gray-50/50 p-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
