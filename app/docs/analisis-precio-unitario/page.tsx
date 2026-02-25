import Link from "next/link";

export default function AnalisisPrecioUnitarioPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Módulo</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Análisis de Precio Unitario
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        El módulo APU es el corazón de ESFERA. Aquí defines todos los ítems de trabajo con sus insumos, rendimientos y
        costos. Más de 400 ítems listos para usar, o crea los tuyos propios.
      </p>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">🧱 ¿Qué es el APU?</h4>
        <p className="mb-3 text-sm text-gray-700">
          El Análisis de Precio Unitario (APU) es el desglose detallado del costo de una unidad de trabajo. Por ejemplo,
          el costo de construir 1 m² de pared de ladrillo incluye materiales, mano de obra y equipos necesarios.
        </p>
        <p className="text-sm text-gray-700">
          En ESFERA puedes trabajar con los más de 400 ítems predefinidos del catálogo o crear tus propios ítems
          personalizados con los insumos que tú definas.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Componentes del módulo APU
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/docs/analisis-precio-unitario/items" className="group">
            <div className="h-full rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 text-4xl">📋</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">Ítems</h4>
              <p className="mb-4 text-sm text-gray-700">
                Partidas de trabajo que componen el presupuesto. Cada ítem tiene sus propios insumos, rendimientos y costo unitario.
              </p>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">Ver más →</div>
            </div>
          </Link>

          <Link href="/docs/analisis-precio-unitario/materiales-y-servicios" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">🪵</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">Materiales y Servicios</h4>
              <p className="mb-4 text-sm text-gray-700">
                Catálogo de materiales e insumos con sus precios. Úsalos en los ítems para calcular costos de forma automática.
              </p>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">Ver más →</div>
            </div>
          </Link>

          <Link href="/docs/analisis-precio-unitario/mano-de-obra" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">👷</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">Mano de Obra</h4>
              <p className="mb-4 text-sm text-gray-700">
                Registro de cuadrillas y trabajadores con sus tarifas. Calcula el costo de la mano de obra por ítem automáticamente.
              </p>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">Ver más →</div>
            </div>
          </Link>

          <Link href="/docs/analisis-precio-unitario/equipos-maquinarias-herramientas" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">🏗️</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">Equipos, Maquinarias y Herramientas</h4>
              <p className="mb-4 text-sm text-gray-700">
                Catálogo de equipos y maquinaria con sus costos de uso. Incorpóralos en los ítems para presupuestos más precisos.
              </p>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">Ver más →</div>
            </div>
          </Link>

          <Link href="/docs/analisis-precio-unitario/categorias" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">🗂️</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">Categorías</h4>
              <p className="mb-4 text-sm text-gray-700">
                Organiza tus ítems en categorías para facilitar la búsqueda y la generación de reportes por tipo de trabajo.
              </p>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">Ver más →</div>
            </div>
          </Link>

          <Link href="/docs/analisis-precio-unitario/unidades-de-medida" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">📐</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">Unidades de Medida</h4>
              <p className="mb-4 text-sm text-gray-700">
                Define las unidades de medida que usarás en tus ítems y materiales (m², m³, kg, gl, etc.).
              </p>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">Ver más →</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Flujo de trabajo recomendado
        </h3>
        <div className="space-y-4">
          {[
            { title: "Configura tus insumos", desc: "Crea o importa materiales, mano de obra y equipos con sus precios actualizados." },
            { title: "Crea o importa ítems", desc: "Usa el catálogo de 400+ ítems predefinidos o crea los tuyos con sus insumos y rendimientos." },
            { title: "Organiza por categorías", desc: "Agrupa los ítems en categorías para mantener el orden y facilitar la búsqueda." },
            { title: "Usa los ítems en el cómputo", desc: "Una vez listos, ve al módulo de Presupuesto para asignar los ítems a etapas y cantidades." },
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

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Consejos</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Actualiza los precios de materiales antes de iniciar un nuevo presupuesto</li>
          <li>Aprovecha los ítems predefinidos y ajusta los rendimientos a tu realidad local</li>
          <li>Importa materiales desde CSV para ahorrar tiempo al cargar grandes catálogos</li>
          <li>Usa los grupos para organizar ítems y obtener reportes más claros por tipo de trabajo</li>
        </ul>
      </div>
    </div>
  );
}
