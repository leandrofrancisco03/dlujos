import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Import D'Lujos",
  description:
    "Consulta los términos y condiciones de uso del sitio y del servicio de compras internacionales de Import D'Lujos.",
  alternates: { canonical: "/terminos-y-condiciones" },
}

export default function TermsPage() {
  const updatedAt = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  })

  return (
    <main className="min-h-screen bg-white">
      <section className="container px-4 md:px-6 py-12 md:py-16 max-w-3xl">
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">Términos y Condiciones</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Términos y Condiciones
          </h1>
          <p className="text-sm text-gray-500 mt-2">Última actualización: {updatedAt}</p>
        </header>

        <p className="text-gray-700 mb-6">
          Estos Términos y Condiciones regulan el acceso y uso del sitio web de Import D&apos;Lujos y la prestación del
          servicio de compras internacionales por encargo. Al utilizar nuestros servicios aceptas estos términos.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">1. Objeto del servicio</h2>
          <p className="text-gray-700">
            Actuamos como intermediarios para la adquisición y envío de productos desde tiendas internacionales hacia tu
            país. No somos fabricantes ni distribuidores oficiales de las marcas listadas.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">2. Proceso de compra</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Nos envías enlaces y especificaciones de productos.</li>
            <li>Te cotizamos costos estimados (producto, gestión, envío, impuestos si aplican).</li>
            <li>Al aprobar y pagar, realizamos la compra en tu nombre.</li>
            <li>Recibimos, verificamos y gestionamos el envío a tu dirección.</li>
          </ul>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">3. Precios, tarifas y pagos</h2>
          <p className="text-gray-700">
            Los precios pueden variar según la tienda, tipo de cambio, comisiones y costos logísticos. Los pagos deberán
            realizarse por los medios informados y confirmados por Import D&apos;Lujos antes de la compra.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">4. Envíos, aduanas y tiempos</h2>
          <p className="text-gray-700">
            Los tiempos de entrega son estimados. Los trámites y cargos aduaneros pueden variar por país y son ajenos a
            nuestro control. Te guiaremos con la información disponible.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">5. Devoluciones y reembolsos</h2>
          <p className="text-gray-700">
            Las políticas de devolución dependen de la tienda de origen y del estado del producto. Te asistiremos en la
            gestión cuando sea posible, según las condiciones aplicables.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">6. Uso permitido del sitio</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>No realizar actividades ilícitas o que afecten el funcionamiento del sitio.</li>
            <li>No infringir derechos de propiedad intelectual de terceros.</li>
            <li>No introducir software malicioso o intentar acceder a áreas restringidas.</li>
          </ul>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">7. Limitación de responsabilidad</h2>
          <p className="text-gray-700">
            Haremos esfuerzos razonables para prestar el servicio con diligencia. Sin embargo, no seremos responsables por
            retrasos, daños o pérdidas derivadas de causas de fuerza mayor, decisiones aduaneras o actos de terceros.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">8. Propiedad intelectual</h2>
          <p className="text-gray-700">
            El contenido del sitio (textos, diseño y recursos) pertenece a Import D&apos;Lujos o a sus respectivos
            titulares y se encuentra protegido por las leyes aplicables.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">9. Privacidad</h2>
          <p className="text-gray-700">
            El tratamiento de tus datos personales se rige por nuestro{" "}
            <Link href="/aviso-de-privacidad" className="text-blue-600 hover:underline">
              Aviso de Privacidad
            </Link>.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">10. Modificaciones</h2>
          <p className="text-gray-700">
            Podemos actualizar estos términos para reflejar cambios en nuestros servicios o requisitos legales. La
            versión vigente será la publicada en esta página.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">11. Ley aplicable</h2>
          <p className="text-gray-700">
            Estos términos se interpretarán conforme a las leyes aplicables en tu jurisdicción de consumo y/o la
            jurisdicción donde se preste el servicio.
          </p>
        </section>

        <div className="mt-10">
          <Link href="/aviso-de-privacidad" className="text-blue-600 hover:underline">
            Ver Aviso de Privacidad
          </Link>
        </div>
      </section>
    </main>
  )
}
