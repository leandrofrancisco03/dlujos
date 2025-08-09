import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿Ofrecen Personal Shopper desde EE. UU. a Perú?",
    a: "Sí. Compramos en tiendas de EE. UU. (Amazon, Apple, Nike, Best Buy, etc.) y enviamos a todo el Perú con seguimiento y verificación.",
  },
  {
    q: "¿Hacen envíos a todo el Perú?",
    a: "Sí, enviamos a todas las regiones del Perú. Te indicamos tiempos estimados y costos según tu ubicación.",
  },
  {
    q: "¿Cómo funciona el servicio de compras por encargo?",
    a: "Nos envías enlaces o especificaciones, cotizamos, realizas el pago, verificamos el producto y lo despachamos a tu dirección en Perú.",
  },
  {
    q: "¿Cuánto tarda el envío desde EE. UU. a Perú?",
    a: "Depende de la tienda y del destino en Perú. Te brindamos un rango estimado y seguimiento hasta la entrega.",
  },
  {
    q: "¿Es seguro comprar con Import D'Lujos?",
    a: "Sí. Verificamos productos, usamos métodos de pago confiables y ofrecemos seguimiento durante todo el proceso.",
  },
]

export default function SeoFaq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  }

  return (
    <section id="preguntas-frecuentes" className="w-full py-12 md:py-16 bg-white">
      <div className="container px-4 md:px-6 max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Preguntas frecuentes
        </h2>
        <p className="text-gray-600 mb-6">
          Respuestas rápidas sobre nuestro Personal Shopper y compras internacionales hacia Perú.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg mb-2">
              <AccordionTrigger className="px-4">
                <span className="text-left">{f.q}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-700">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {/* FAQ JSON-LD for rich results */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  )
}
