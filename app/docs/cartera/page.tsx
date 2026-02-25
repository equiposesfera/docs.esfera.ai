import Link from "next/link";

export default function CarteraPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Módulo</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Cartera
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        El módulo de Cartera está diseñado para empresas constructoras que también son desarrolladoras inmobiliarias.
        Administra la venta de unidades, contratos, anticipos y la galería multimedia de tus proyectos.
      </p>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">🏢 ¿Para qué sirve el módulo Cartera?</h4>
        <p className="mb-3 text-sm text-gray-700">
          Si eres empresa constructora y al mismo tiempo desarrollador inmobiliario, este módulo es para ti.
          Te permite gestionar la venta de inmuebles de tu edificio o proyecto, registrar los contratos y
          anticipos de cada venta en tiempo real, y acceder a los planos y publicidad generada por tu equipo de marketing.
        </p>
        <p className="text-sm text-gray-700">
          Con Cartera tienes una visión completa del estado comercial de tu proyecto: qué unidades están
          disponibles, reservadas o vendidas, y el flujo de cobros de cada cliente.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Secciones del módulo
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/docs/cartera/clientes" className="group">
            <div className="h-full rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 text-4xl">👥</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">Clientes</h4>
              <p className="mb-4 text-sm text-gray-700">
                Registro de compradores con sus datos de contacto, documentos y estado de sus operaciones de compra.
              </p>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">Ver más →</div>
            </div>
          </Link>

          <Link href="/docs/cartera/inmuebles" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">🏗️</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">Inmuebles</h4>
              <p className="mb-4 text-sm text-gray-700">
                Catálogo de unidades del proyecto (departamentos, oficinas, locales) con su estado de disponibilidad y precio.
              </p>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">Ver más →</div>
            </div>
          </Link>

          <Link href="/docs/cartera/ventas" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">📑</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">Ventas</h4>
              <p className="mb-4 text-sm text-gray-700">
                Gestión de contratos de compraventa, anticipos y cronograma de pagos. Seguimiento del proceso de venta completo.
              </p>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">Ver más →</div>
            </div>
          </Link>

          <Link href="/docs/cartera/galeria" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">🖼️</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">Galería</h4>
              <p className="mb-4 text-sm text-gray-700">
                Álbum multimedia del proyecto con planos, renders y material publicitario generado por el equipo de marketing.
              </p>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">Ver más →</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Flujo comercial típico
        </h3>
        <div className="space-y-4">
          {[
            { title: "Registra las unidades disponibles", desc: "Carga los inmuebles del proyecto con sus características, precio y estado inicial (disponible)." },
            { title: "Registra a tus clientes", desc: "Agrega los datos del comprador interesado antes de iniciar el proceso de venta." },
            { title: "Crea la venta y el contrato", desc: "Asocia el cliente con el inmueble, registra el precio acordado, anticipos y el cronograma de pagos." },
            { title: "Actualiza el estado de la unidad", desc: "El inmueble pasa a 'Reservado' o 'Vendido' según el avance del proceso comercial." },
            { title: "Sube planos y material de marketing", desc: "Mantén la galería actualizada para que el equipo comercial disponga del material actualizado." },
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

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Requisito previo</h4>
        <p className="text-sm text-gray-700">
          Este módulo está disponible para empresas que además de construir también comercializan inmuebles.
          Si solo gestionas obra, el módulo de Obra cubre tus necesidades de seguimiento de avances y pagos.
        </p>
      </div>
    </div>
  );
}
