import Link from "next/link"
import { Instagram, Facebook } from 'lucide-react'
import HeroSection from "@/components/hero-section"
import BrandsSection from "@/components/brands-section"
import ServicesSection from "@/components/services-section"
import PersonalShopperSection from "@/components/personal-shopper-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import AnimatedHeader from "@/components/animated-header"
import AIChatWidget from "@/components/ai-chat-widget"
import SeoFaq from "@/components/seo-faq"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedHeader />
      <main className="flex-1">
        <HeroSection />
        <PersonalShopperSection />
        <ServicesSection />
        <BrandsSection />
        {/* SEO-oriented FAQ section */}
        <SeoFaq />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <footer className="border-t bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/favicon.png" className="h-8 w-8 rounded" alt="Logo Import D'Lujos" />
                <span className="text-lg font-bold">Import D&apos;Lujos</span>
              </div>
              <p className="text-sm text-slate-300">
                Personal Shopper en EE. UU. y compras internacionales con envío seguro a Perú.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Enlaces rápidos</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#inicio" className="text-sm hover:text-blue-400 transition-colors">
                  Inicio
                </Link>
                <Link href="#servicios" className="text-sm hover:text-blue-400 transition-colors">
                  Servicios
                </Link>
                <Link href="#marcas" className="text-sm hover:text-blue-400 transition-colors">
                  Marcas
                </Link>
                <Link href="#personal-shopper" className="text-sm hover:text-blue-400 transition-colors">
                  Personal Shopper
                </Link>
                <Link href="#preguntas-frecuentes" className="text-sm hover:text-blue-400 transition-colors">
                  Preguntas frecuentes
                </Link>
                <Link href="#testimonios" className="text-sm hover:text-blue-400 transition-colors">
                  Testimonios
                </Link>
                <Link href="#contacto" className="text-sm hover:text-blue-400 transition-colors">
                  Contacto
                </Link>
                <Link href="/aviso-de-privacidad" className="text-sm hover:text-blue-400 transition-colors">
                  Aviso de privacidad
                </Link>
                <Link href="/terminos-y-condiciones" className="text-sm hover:text-blue-400 transition-colors">
                  Términos y condiciones
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Síguenos</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-slate-300 hover:text-blue-400 transition-colors transform hover:scale-110"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.tiktok.com/@dlujos.import?_t=ZT-8x7p2AOVbYM&_r=1"
                  className="text-slate-300 hover:text-blue-400 transition-colors transform hover:scale-110"
                  target="_blank"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z" />
                  </svg>
                  <span className="sr-only">TikTok</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Import D&apos;Lujos. Todos los derechos reservados.
          </div>
          <div className="mt-3 text-center text-xs text-slate-400 space-x-4">
            <Link href="/aviso-de-privacidad" className="hover:text-blue-300 transition-colors">Aviso de privacidad</Link>
            <Link href="/terminos-y-condiciones" className="hover:text-blue-300 transition-colors">Términos y condiciones</Link>
          </div>
        </div>
      </footer>

      {/* AI Chat Widget */}
      <AIChatWidget />
    </div>
  )
}
