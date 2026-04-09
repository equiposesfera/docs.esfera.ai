import Image from "next/image";
import Link from "next/link";

export default function StockAlmacenPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Almacén</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Stock de almacén
      </h2>
       <p className="text-base leading-7 text-gray-700 md:text-lg">
         El stock muestra en tiempo real qué materiales tiene disponibles el almacén.
         Se actualiza automáticamente con cada entrada y salida registrada.
       </p>

       {/* Video Container */}
       <div className="space-y-4">
         <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial: Stock de almacén</h2>
           <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
             <iframe
               width="100%"
               height="100%"
               src="https://www.youtube.com/embed/fvMnDykjyHI"
               title="STOCK DE ALMACEN"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="w-full h-full"
             ></iframe>
           </div>
         </div>
       </div>

       <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/almacen/stock-almacen.png"
          alt="Visualización del stock de almacén"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📊 ¿Qué es el stock?</h4>
        <p className="text-sm text-gray-700">
          Es la vista del inventario disponible en el almacén. Muestra cada material, su cantidad actual,
          unidad de medida y estado. Se calcula como: Stock = Entradas - Salidas.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Cómo consultar el stock
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Accede a Stock",
              desc: "En la sección de Almacén, selecciona Stock para ver el inventario disponible.",
            },
            {
              title: "Visualiza la lista de materiales",
              desc: "Aparecen todos los materiales que hay en el almacén con su cantidad disponible.",
            },
            {
              title: "Busca o filtra por material",
              desc: "Usa la búsqueda para encontrar un material específ�fico o filtra por tipo (cemento, acero, etc.).",
            },
            {
              title: "Revisa los detalles",
              desc: "Haz click en un material para ver su historial de entradas, salidas y disponibilidad.",
            },
            {
              title: "Consulta alertas (si aplica)",
              desc: "Si hay materiales con stock bajo, se muestran alertas para evitar ruptura de inventario.",
            },
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
          Información en el stock
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Material</h4>
            <p className="text-sm text-gray-700">
              Nombre del material (cemento, acero, arena, tubería, etc.).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Cantidad disponible</h4>
            <p className="text-sm text-gray-700">
              Cuántas unidades hay en el almacén ahora.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Unidad de medida</h4>
            <p className="text-sm text-gray-700">
              Métrica utilizada (m³, m², kg, und, litros, HH, etc.).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Total entradas</h4>
            <p className="text-sm text-gray-700">
              Cantidad acumulada que ha ingresado al almacén.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Total salidas</h4>
            <p className="text-sm text-gray-700">
              Cantidad acumulada que ha salido asignada a obra.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Estado</h4>
            <p className="text-sm text-gray-700">
              Normal, Bajo stock o Crítico (sin stock).
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Estados de stock
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-green-400 bg-green-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-green-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 1
            </div>
            <div className="mb-3 text-2xl">✅</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Stock Normal</h4>
            <p className="text-sm text-gray-700">
              Material disponible en cantidad suficiente. No hay problema de abastecimiento.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 2
            </div>
            <div className="mb-3 text-2xl">⚠️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Bajo stock</h4>
            <p className="text-sm text-gray-700">
              Cantidad baja del material. Requiere reorden para evitar ruptura.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-red-400 bg-red-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-red-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 3
            </div>
            <div className="mb-3 text-2xl">❌</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Sin stock</h4>
            <p className="text-sm text-gray-700">
              Material agotado en almacén. Es crítico, requiere orden de compra inmediata.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Operaciones sobre stock
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-2xl">👁️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Ver detalle de material</h4>
            <p className="text-sm text-gray-700">
              Visualiza historial de entradas, salidas y saldo actual de cada material.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">📊</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Exportar reporte</h4>
            <p className="text-sm text-gray-700">
              Descarga el listado completo de stock en Excel o PDF para auditoría.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Cálculo del stock
        </h3>
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="mb-4 text-sm font-semibold text-[#2d2d2d]">
            La fórmula del stock es simple:
          </p>
          <div className="flex items-center justify-center gap-3 mb-6 text-lg">
            <span className="rounded-lg bg-green-100 px-4 py-2 font-semibold text-green-700">Entradas</span>
            <span className="text-2xl font-bold text-gray-400">−</span>
            <span className="rounded-lg bg-red-100 px-4 py-2 font-semibold text-red-700">Salidas</span>
            <span className="text-2xl font-bold text-gray-400">=</span>
            <span className="rounded-lg bg-blue-100 px-4 py-2 font-semibold text-blue-700">Stock</span>
          </div>
          <p className="text-sm text-gray-700">
            <strong>Ejemplo:</strong> Si entraron 100 m³ de cemento y salieron 65 m³ a obra, el stock disponible es 35 m³.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Consideraciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>El stock se actualiza automáticamente con cada entrada y salida</li>
          <li>No es posible hacer salidas si no hay stock disponible</li>
          <li>El stock nunca puede ser negativo (indica inconsistencia)</li>
          <li>Cada material tiene su propio saldo independiente</li>
          <li>El stock es por material, no por orden de compra origin�aria</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Revisa el stock diariamente para evitar sorpresas</li>
          <li>Actúa en cuanto veas stock bajo en materiales críticos</li>
          <li>Mantén niveles mínimos de seguridad para cada material</li>
          <li>Coordina con compras para generar nuevas órdenes a tiempo</li>
          <li>Exporta reportes semanales para seguimiento gerencial</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/almacen/salidas"
          className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          ← Volver a Salidas
        </Link>
        <Link
          href="/almacen"
          className="rounded-xl bg-[#4db8a8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Almacén general →
        </Link>
      </div>
    </div>
  );
}

