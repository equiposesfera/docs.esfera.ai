import Link from "next/link";

export default function ClientesCarteraPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Cartera</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Clientes
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Registra y gestiona a los compradores de las unidades inmobiliarias de tu proyecto. Cada cliente se asocia
        a uno o más contratos de compraventa, con seguimiento de pagos y anticipos en tiempo real.
      </p>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">👥 ¿Qué es un cliente en Cartera?</h4>
        <p className="text-sm text-gray-700">
          Es la persona natural o jurídica que adquiere o está interesada en adquirir uno o más inmuebles del proyecto.
          A diferencia de los comitentes (que contratan la obra), los clientes de Cartera son los compradores finales de las unidades.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para registrar un cliente
        </h3>
        <div className="space-y-4">
          {[
            { title: "Accede al módulo Cartera", desc: "En el menú principal selecciona Cartera y luego la sección Clientes." },
            { title: "Haz clic en \"Nuevo cliente\"", desc: "Se abre el formulario de registro con los campos necesarios para el comprador." },
            { title: "Ingresa los datos del cliente", desc: "Completa nombre, documento de identidad, datos de contacto y tipo (persona natural o jurídica)." },
            { title: "Guarda el registro", desc: "El cliente queda disponible para asociarlo a ventas e inmuebles del proyecto." },
          ].map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="mb-1 font-semibold text-[#2d2d2d]">{step.title}</h4>
                <p className="text-sm text-gray-700">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Datos del formulario
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Datos generales</h4>
            <p className="text-sm text-gray-700">
              Nombre completo o razón social, número de documento de identidad y tipo de cliente (persona natural o jurídica).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Contacto</h4>
            <p className="text-sm text-gray-700">
              Correo electrónico, teléfono principal, dirección y ciudad. Datos usados para notificaciones y contratos.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Representante legal</h4>
            <p className="text-sm text-gray-700">
              Para clientes que son empresas, registra el representante legal con sus datos de contacto y número de documento.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Documentos adjuntos</h4>
            <p className="text-sm text-gray-700">
              Copia del documento de identidad, poderes notariales u otros documentos requeridos para el contrato de compraventa.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Validaciones comunes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>El nombre o razón social es obligatorio</li>
          <li>El número de documento no puede repetirse en el sistema</li>
          <li>El correo electrónico debe tener un formato válido</li>
          <li>Los teléfonos deben ser numéricos con prefijo de país si aplica</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Registra al cliente antes de iniciar cualquier proceso de venta</li>
          <li>Mantén los datos de contacto actualizados para enviar notificaciones de pagos</li>
          <li>Adjunta los documentos escaneados para tener todo centralizado en ESFERA</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/docs/cartera/inmuebles"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
        >
          Ver Inmuebles →
        </Link>
        <Link
          href="/docs/cartera/ventas"
          className="rounded-xl bg-[#4db8a8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Ventas →
        </Link>
      </div>
    </div>
  );
}
