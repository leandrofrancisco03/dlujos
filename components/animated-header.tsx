"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function AnimatedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 animate-fade-in">
          <video autoPlay loop muted playsInline className="h-10 w-auto">
            <source src="/favicon.mp4" type="video/mp4" />
          </video>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Import D&apos;Lujos
          </span>
        </div>

        <nav className="hidden md:flex gap-6">
          {["Inicio", "Servicios", "Marcas", "Personal Shopper", "Testimonios", "Contacto"].map((item, index) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium hover:text-blue-600 transition-colors relative group animate-slide-down"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <Button
          asChild
          className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all"
        >
          <Link href="#contacto">Contáctanos</Link>
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slide-down">
          <nav className="container py-4 flex flex-col gap-4">
            {["Inicio", "Servicios", "Marcas", "Personal Shopper", "Testimonios", "Contacto"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600">
              <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
                Contáctanos
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
