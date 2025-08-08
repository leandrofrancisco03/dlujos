import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Import D'Lujos",
  description:
    "Conoce cómo recopilamos, utilizamos y protegemos tu información personal en Import D'Lujos.",
  alternates: { canonical: "/aviso-de-privacidad" },
}

export default function PrivacyPolicyPage() {
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
          <span className="text-gray-700">Aviso de Privacidad</span>
        </nav>

        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Aviso de Privacidad
          </h1>
          <p className="text-sm text-gray-500 mt-2">Última actualización: {updatedAt}</p>
        </header>

        <p className="text-gray-700 mb-6">
          En Import D&apos;Lujos nos tomamos muy en serio la protección de tus datos personales. Este Aviso de Privacidad
          describe qué información recopilamos, cómo la usamos y los derechos que te asisten como titular de los datos.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">1. Responsable del tratamiento</h2>
          <p className="text-gray-700">
            Import D&apos;Lujos (en adelante, “nosotros”) es responsable del tratamiento de tus datos. Si deseas ejercer
            tus derechos o realizar consultas, contáctanos en:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Email: <a href="mailto:Cindyvento1@gmail.com" className="text-blue-600 hover:underline">Cindyvento1@gmail.com</a></li>
            <li>WhatsApp: <a href="https://wa.me/13464530962" target="_blank" className="text-blue-600 hover:underline" rel="noopener noreferrer">+1 346 453 0962</a></li>
          </ul>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">2. Información que recopilamos</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Datos de contacto: nombre, apellido, email, teléfono/WhatsApp.</li>
            <li>Información de pedidos: enlaces de productos, preferencias, notas.</li>
            <li>Datos de envío y facturación: dirección, país, y detalles necesarios para la entrega.</li>
            <li>Comunicación: mensajes enviados por formularios, WhatsApp o chat del sitio.</li>
            <li>Datos técnicos: dirección IP, dispositivo, navegador y analítica básica de uso del sitio.</li>
          </ul>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">3. Finalidades del tratamiento</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Gestionar solicitudes, cotizaciones y compras por encargo.</li>
            <li>Procesar pagos y coordinar envíos internacionales.</li>
            <li>Atención al cliente y soporte postventa.</li>
            <li>Mejorar nuestros servicios, seguridad y experiencia del sitio.</li>
            <li>Comunicar actualizaciones y ofertas relacionadas con nuestros servicios (puedes darte de baja en cualquier momento).</li>
          </ul>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">4. Base legal</h2>
          <p className="text-gray-700">
            Tratamos tus datos con base en tu consentimiento, la ejecución de un contrato (cuando solicitas una compra o
            servicio) y legítimo interés para mejorar la seguridad y la experiencia del usuario.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">5. Conservación de datos</h2>
          <p className="text-gray-700">
            Conservamos tu información el tiempo necesario para cumplir con las finalidades descritas y las obligaciones
            legales aplicables. Posteriormente, se eliminará o anonimizará de forma segura.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">6. Destinatarios y transferencias</h2>
          <p className="text-gray-700">
            Podemos compartir datos con proveedores necesarios para prestar el servicio (operadores logísticos, pasarelas de
            pago, herramientas de mensajería y atención al cliente), bajo acuerdos de confidencialidad y seguridad adecuados.
            No vendemos tus datos personales.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">7. Derechos de los usuarios</h2>
          <p className="text-gray-700">
            Puedes ejercer tus derechos de acceso, rectificación, cancelación, oposición, portabilidad y limitación del
            tratamiento. Para hacerlo, escríbenos al correo indicado arriba y atenderemos tu solicitud a la brevedad.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">8. Seguridad</h2>
          <p className="text-gray-700">
            Implementamos medidas técnicas y organizativas razonables para proteger tu información contra accesos no
            autorizados, pérdida o alteración.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">9. Cookies y tecnologías similares</h2>
          <p className="text-gray-700">
            Utilizamos cookies esenciales y de rendimiento para mejorar el funcionamiento del sitio. Puedes gestionar las
            cookies desde la configuración de tu navegador. Si implementamos cookies adicionales, te informaremos y
            solicitaremos consentimiento cuando corresponda.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">10. Menores de edad</h2>
          <p className="text-gray-700">
            Nuestros servicios están dirigidos a mayores de 18 años. Si detectamos datos de menores sin autorización,
            procederemos a su eliminación.
          </p>
        </section>

        <section className="space-y-3 mt-8">
          <h2 className="text-xl font-semibold text-gray-900">11. Cambios al Aviso</h2>
          <p className="text-gray-700">
            Podemos actualizar este Aviso de Privacidad para reflejar cambios legales o de servicio. Publicaremos la fecha
            de actualización en esta misma página.
          </p>
        </section>

        <div className="mt-10">
          <Link href="/terminos-y-condiciones" className="text-blue-600 hover:underline">
            Ver Términos y Condiciones
          </Link>
        </div>
      </section>
    </main>
  )
}
