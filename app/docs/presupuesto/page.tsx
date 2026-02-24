import Image from "next/image";
import Link from "next/link";

export default function PresupuestoPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Presupuesto</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Presupuesto
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Crea y gestiona presupuestos para tus proyectos. Asigna ítems a etapas, calcula costos totales y consolida cuando estés listo para comenzar el avance.
      </p>

      {/* ¿Qué es un presupuesto? */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💰 ¿Qué es un presupuesto en ESFERA?</h4>
        <p className="mb-3 text-sm text-gray-700">
          Un presupuesto es la propuesta económica del proyecto que detalla todos los ítems de trabajo, 
          sus cantidades por etapa (piso, sector, etc.), y los costos totales en materiales, mano de obra y equipos.
        </p>
        <p className="text-sm text-gray-700">
          El presupuesto es el punto de partida para la ejecución del proyecto, ya que define 
          qué se construirá, cuánto costará y cómo se distribuye el trabajo por etapas.
        </p>
      </div>

      {/* Fases del presupuesto */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Fases de un presupuesto
        </h3>
        <p className="text-base leading-7 text-gray-700">
          En ESFERA, un presupuesto pasa por dos fases principales:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Fase 1: Cómputo */}
          <Link href="/docs/presupuesto/computo" className="group">
            <div className="h-full rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-2 inline-block rounded-full bg-[#4db8a8] px-3 py-1 text-xs font-semibold text-white">
                Fase 1
              </div>
              <div className="mb-4 text-4xl">📊</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
                Cómputo
              </h4>
              <p className="mb-4 text-sm text-gray-700">
                Asigna los ítems creados a etapas específicas (pisos, sectores) y define las cantidades de trabajo para cada uno.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Asignar ítems a etapas
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Definir cantidades de trabajo
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Calcular costos por etapa
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
                Ver más →
              </div>
            </div>
          </Link>

          {/* Fase 2: Presupuesto */}
          <Link href="/docs/presupuesto/presupuesto" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-2 inline-block rounded-full bg-gray-300 px-3 py-1 text-xs font-semibold text-gray-700">
                Fase 2
              </div>
              <div className="mb-4 text-4xl">📈</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
                Presupuesto
              </h4>
              <p className="mb-4 text-sm text-gray-700">
                Visualiza el resumen completo del presupuesto con todos los ítems, totales de costos y desglose por etapas.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Ver todos los ítems
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Revisar costos totales
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Consolidar para ejecutar
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
                Ver más →
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Flujo del presupuesto */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Flujo de trabajo
        </h3>
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
                1
              </div>
              <div className="flex-1">
                <h4 className="mb-1 font-semibold text-[#2d2d2d]">Crear APUs</h4>
                <p className="text-sm text-gray-700">
                  Primero debes crear tus ítems (análisis de precio unitario) con todos los componentes (materiales, mano de obra, equipos).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
                2
              </div>
              <div className="flex-1">
                <h4 className="mb-1 font-semibold text-[#2d2d2d]">Definir etapas</h4>
                <p className="text-sm text-gray-700">
                  Configura las etapas del proyecto (pisos, sectores, módulos) que servirán para distribuir el trabajo.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
                3
              </div>
              <div className="flex-1">
                <h4 className="mb-1 font-semibold text-[#2d2d2d]">Hacer cómputo</h4>
                <p className="text-sm text-gray-700">
                  Asigna cada ítem a sus etapas correspondientes y especifica la cantidad de trabajo para cada uno.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
                4
              </div>
              <div className="flex-1">
                <h4 className="mb-1 font-semibold text-[#2d2d2d]">Revisar presupuesto</h4>
                <p className="text-sm text-gray-700">
                  Verifica que todos los costos sean correctos, analiza totales por etapa y ajusta si es necesario.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
                5
              </div>
              <div className="flex-1">
                <h4 className="mb-1 font-semibold text-[#2d2d2d]">Consolidar</h4>
                <p className="text-sm text-gray-700">
                  Una vez aprobado, consolida el presupuesto para que quede de solo lectura y puedas comenzar a registrar avances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estados del presupuesto */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Estados del presupuesto
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Un presupuesto puede estar en dos estados:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-orange-400 bg-orange-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-orange-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 1
            </div>
            <div className="mb-3 text-2xl">✏️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">En edición</h4>
            <p className="mb-3 text-sm text-gray-700">
              El presupuesto está abierto para cambios. Puedes agregar, modificar o eliminar ítems, cambiar cantidades, ajustar costos, etc.
            </p>
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                Malleable y modificable
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                No se pueden registrar avances
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400"></span>
                Acceso total a cómputo
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-green-400 bg-green-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-green-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 2
            </div>
            <div className="mb-3 text-2xl">🔒</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Consolidado</h4>
            <p className="mb-3 text-sm text-gray-700">
              El presupuesto está bloqueado para cambios. Solo puedes ver, pero no modificar. Ahora sí puedes registrar avances de obra.
            </p>
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400"></span>
                Solo lectura
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400"></span>
                Se pueden registrar avances
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400"></span>
                Opción de desconsolidar
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Información importante */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">ℹ️ Información importante</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            <strong>Antes de crear un presupuesto:</strong> Asegúrate de tener tus APUs (ítems) listos con todos los componentes correctamente definidos.
          </p>
          <p>
            <strong>Una vez consolidado:</strong> No podrás modificar el presupuesto a menos que lo desconsolides (lo cual es recomendable solo en casos excepcionales).
          </p>
          <p>
            <strong>Los costos se calculan automáticamente</strong> basándose en: cantidad de ítem × precio unitario del ítem × cantidad por etapa.
          </p>
        </div>
      </div>

      {/* Mejores prácticas */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Revisa cuidadosamente el presupuesto antes de consolidar</li>
          <li>Verifica que todos los ítems tengan las cantidades correctas por etapa</li>
          <li>Calcula subtotales antes de consolidar para validar razonabilidad</li>
          <li>Asegúrate de que tus precios unitarios sean actuales antes de consolidar</li>
          <li>Documenta cambios importantes en el presupuesto durante la ejecución</li>
          <li>Mantén un control de versiones si necesitas modificar presupuestos existentes</li>
        </ul>
      </div>
    </div>
  );
}
