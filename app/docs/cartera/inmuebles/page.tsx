import Link from "next/link";

export default function InmueblesCarteraPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Cartera</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Inmuebles
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        El catálogo de inmuebles lista todas las unidades del proyecto (departamentos, oficinas, locales, estacionamientos)
        con su estado de disponibilidad, precio de venta y características principales.
      </p>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">🏗️ ¿Qué es un inmueble en ESFERA?</h4>
        <p className="text-sm text-gray-700">
          Es cada unidad comercializable de tu proyecto inmobiliario. Un edificio puede tener múltiples inmuebles:
          departamentos por piso, estacionamientos, bodegas, locales comerciales, etc. Cada uno tiene su propio
          precio, características y estado de venta.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para registrar un inmueble
        </h3>
        <div className="space-y-4">
          {[
            { title: "Accede a Inmuebles", desc: "En el módulo Cartera selecciona la sección Inmuebles para ver el catálogo del proyecto." },
            { title: "Haz clic en \"Nuevo inmueble\"", desc: "Se abre el formulario con los campos de descripción, área, precio y características." },
            { title: "Completa los datos de la unidad", desc: "Ingresa el código de la unidad, tipo, área en m², piso o ubicación y precio de venta." },
            { title: "Define el estado inicial", desc: "Establece si la unidad está Disponible, en Reserva o ya Vendida al momento del registro." },
            { title: "Guarda el inmueble", desc: "La unidad queda en el catálogo lista para ser asociada a un contrato de venta." },
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
          Estados de un inmueble
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-green-400 bg-green-50 p-5">
            <div className="mb-3 text-2xl">🟢</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Disponible</h4>
            <p className="text-sm text-gray-700">
              La unidad está libre para ser ofrecida y vendida a un cliente.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-5">
            <div className="mb-3 text-2xl">🟡</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Reservado</h4>
            <p className="text-sm text-gray-700">
              La unidad está apartada para un cliente con un anticipo o reserva pagada.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-gray-400 bg-gray-50 p-5">
            <div className="mb-3 text-2xl">🔴</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Vendido</h4>
            <p className="text-sm text-gray-700">
              La unidad tiene contrato firmado y está fuera del catálogo de disponibles.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Datos del formulario
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Código de unidad</h4>
            <p className="text-sm text-gray-700">Identificador único de la unidad (ej: Dpto. 301, Local C-5, Estac. B-12).</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Tipo de unidad</h4>
            <p className="text-sm text-gray-700">Clasificación: departamento, local comercial, estacionamiento, bodega, oficina, etc.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Área</h4>
            <p className="text-sm text-gray-700">Superficie en m² de la unidad. Puede incluir área techada y área libre.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Precio de venta</h4>
            <p className="text-sm text-gray-700">Precio de lista de la unidad en la moneda del proyecto. Puede actualizarse antes de la venta.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Piso / Ubicación</h4>
            <p className="text-sm text-gray-700">En qué piso o sector del edificio se encuentra la unidad para facilitar su localización.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Características adicionales</h4>
            <p className="text-sm text-gray-700">Dormitorios, baños, orientación, vista, acabados u otras características relevantes para la venta.</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Usa códigos de unidad consistentes y fáciles de recordar para el equipo de ventas</li>
          <li>Mantén el estado actualizado para reflejar la disponibilidad real en tiempo real</li>
          <li>Sube los planos de cada unidad en la sección Galería para apoyo al equipo comercial</li>
          <li>Revisa los precios antes de iniciar la campaña de ventas</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/docs/cartera/ventas"
          className="rounded-xl bg-[#4db8a8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Ventas →
        </Link>
        <Link
          href="/docs/cartera/galeria"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
        >
          Ver Galería →
        </Link>
      </div>
    </div>
  );
}
