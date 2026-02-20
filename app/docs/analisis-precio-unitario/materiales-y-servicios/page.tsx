import Image from "next/image";
import Link from "next/link";

export default function MaterialesServiciosAnalisisPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Materiales y servicios
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Los materiales y servicios son los insumos fundamentales que componen tus análisis de precio unitario. Gestiona tu catálogo de materiales físicos y servicios contratados para usarlos en tus ítems.
      </p>

      {/* ¿Qué son materiales y servicios? */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📋 ¿Qué son materiales y servicios?</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Materiales:</strong> Insumos físicos que se consumen en la ejecución de una actividad (cemento, arena, acero, pintura, etc.)
          </p>
          <p>
            <strong>Servicios:</strong> Actividades o trabajos contratados a terceros (transporte, alquiler de equipos, ensayos, subcontratos, etc.)
          </p>
          <p className="mt-3">
            Ambos son componentes esenciales en el análisis de precio unitario y se utilizan para calcular el costo total de cada ítem de tu presupuesto.
          </p>
        </div>
      </div>

      {/* Dos formas de gestionar */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Dos formas de agregar materiales y servicios
        </h3>
        <p className="text-base leading-7 text-gray-700">
          ESFERA te ofrece dos métodos para agregar materiales y servicios a tu catálogo:
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/apu/materiales-servicios-opciones.png"
            alt="Opciones para crear materiales y servicios"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Opciones de creación */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Opción 1: Crear nuevo */}
        <Link href="/docs/analisis-precio-unitario/materiales-y-servicios/crear-nuevo" className="group">
          <div className="h-full rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-2 inline-block rounded-full bg-[#4db8a8] px-3 py-1 text-xs font-semibold text-white">
              Más usado
            </div>
            <div className="mb-4 text-4xl">✏️</div>
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
              Crear nuevo material o servicio
            </h4>
            <p className="mb-4 text-sm text-gray-700">
              Crea materiales y servicios uno por uno usando el formulario guiado. Ideal para agregar ítems específicos de forma controlada.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Formulario intuitivo
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Validación en tiempo real
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Control preciso
              </div>
            </div>
            <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
              Ver más →
            </div>
          </div>
        </Link>

        {/* Opción 2: Importar CSV */}
        <Link href="/docs/analisis-precio-unitario/materiales-y-servicios/importar-desde-csv" className="group">
          <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
            <div className="mb-4 text-4xl">📊</div>
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
              Importar desde CSV
            </h4>
            <p className="mb-4 text-sm text-gray-700">
              Importa múltiples materiales y servicios simultáneamente usando un archivo CSV. Perfecto para migrar catálogos completos.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Importación masiva
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Plantilla CSV
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Trabajo offline
              </div>
            </div>
            <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
              Ver más →
            </div>
          </div>
        </Link>
      </div>

      {/* Comparación de métodos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          ¿Cuál método elegir?
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Método</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Mejor para</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Ventajas</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Crear nuevo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Agregar ítems específicos, catálogos pequeños</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Precisión, validación inmediata</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">Importar CSV</td>
                <td className="px-4 py-3 text-gray-700">Migración de catálogos, grandes volúmenes</td>
                <td className="px-4 py-3 text-gray-700">Rapidez, trabajo offline</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Uso en APU */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Uso en análisis de precio unitario
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Una vez que hayas creado tus materiales y servicios, podrás:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🔗</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Vincularlos a ítems</h4>
            <p className="text-sm text-gray-700">
              Agrégalos como componentes en tus análisis de precio unitario, definiendo cantidades y rendimientos.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">♻️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Reutilizarlos</h4>
            <p className="text-sm text-gray-700">
              Usa el mismo material o servicio en múltiples ítems sin duplicar información.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">💰</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Actualizar precios</h4>
            <p className="text-sm text-gray-700">
              Modifica el precio y se actualizará automáticamente en todos los ítems que lo usan.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">📦</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Generar compras</h4>
            <p className="text-sm text-gray-700">
              Crea órdenes de compra basadas en las cantidades del presupuesto.
            </p>
          </div>
        </div>
      </div>

      {/* Mejores prácticas */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Usa códigos consistentes y descriptivos para facilitar la búsqueda</li>
          <li>Mantén tu catálogo organizado por categorías</li>
          <li>Actualiza regularmente los precios según el mercado</li>
          <li>Vincula proveedores a tus materiales para agilizar compras</li>
          <li>Incluye especificaciones técnicas en la descripción</li>
        </ul>
      </div>
    </div>
  );
}
