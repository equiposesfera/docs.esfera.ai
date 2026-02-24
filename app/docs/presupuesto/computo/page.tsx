import Image from "next/image";
import Link from "next/link";

export default function ComputoPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Presupuesto</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Cómputo
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        El cómputo es donde asignas ítems específicos a cada etapa del proyecto y defines las cantidades de trabajo. 
        Es el desglose detallado que transforma los precios unitarios en cantidades reales para cada fase.
      </p>

      {/* ¿Qué es el cómputo? */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📊 ¿Qué es el cómputo?</h4>
        <p className="mb-3 text-sm text-gray-700">
          El cómputo es un tabla que relaciona cada ítem (partida de trabajo) con su cantidad de ejecución por etapa. 
          Es decir: qué ítem se ejecutará en cada etapa (piso, sector, módulo) y en qué cantidad.
        </p>
        <p className="text-sm text-gray-700">
          Por ejemplo, si tienes un ítem "Vaciado de concreto en pisos", en el cómputo especificarías: 
          Piso 1 → 150 m³, Piso 2 → 150 m³, Piso 3 → 150 m³, etc.
        </p>
      </div>

      {/* Imagen del formulario */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/presupuesto/formulario-computo.png"
          alt="Formulario de cómputo"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      {/* Proceso de crear cómputo */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Proceso de crear un cómputo
        </h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              1
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Accede al módulo de Cómputo</h4>
              <p className="text-sm text-gray-700">
                En la sección de Presupuesto de tu proyecto, selecciona "Cómputo" para comenzar.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              2
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Selecciona un ítem</h4>
              <p className="text-sm text-gray-700">
                Elige de tu catálogo de APUs el ítem que deseas agregar al cómputo. Puedes buscar por nombre, código o categoría.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              3
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Asigna a etapas y cantidades</h4>
              <p className="text-sm text-gray-700">
                Para cada ítem, ingresa la cantidad que se ejecutará en cada etapa. La unidad de medida viene del ítem.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              4
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Revisa cálculos automáticos</h4>
              <p className="text-sm text-gray-700">
                ESFERA calcula automáticamente: cantidad × precio unitario = costo por ítem y etapa.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              5
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Continúa agregando ítems</h4>
              <p className="text-sm text-gray-700">
                Repite este proceso para todos los ítems que requiera tu proyecto. Una vez completado, ve a "Presupuesto" para revisar totales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Estructura de etapas */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Configurar etapas del proyecto
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Antes de hacer el cómputo, debes haber definido las etapas en tu proyecto. Las etapas pueden ser:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🏢</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Por pisos</h4>
            <p className="text-sm text-gray-700">
              Proyectos verticales donde la división es por niveles (Piso 1, Piso 2, Piso 3, Azotea, etc.)
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">📍</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Por sectores</h4>
            <p className="text-sm text-gray-700">
              Proyectos de mayor envergadura con división espacial (Sector A, Sector B, Zona norte, Zona sur, etc.)
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🔲</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Por módulos</h4>
            <p className="text-sm text-gray-700">
              Proyectos con unidades repetitivas (Módulo A, Módulo B, Bloque 1, Bloque 2, etc.)
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">⏱️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Por fases temporales</h4>
            <p className="text-sm text-gray-700">
              Proyectos por etapas de obra (Cimentación, Estructura, Acabados, etc.)
            </p>
          </div>
        </div>
      </div>

      {/* Información para cada asignación */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Datos necesarios para cada asignación
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Cuando asignas un ítem a una etapa, debes proporcionar:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📋</span>
              Ítem
            </h4>
            <p className="text-sm text-gray-700">
              El APU (análisis de precio unitario) que vas a ejecutar. Debe estar previamente creado con todos sus componentes.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📍</span>
              Etapa
            </h4>
            <p className="text-sm text-gray-700">
              La etapa específica donde se ejecutará este ítem (Piso 1, Sector A, Módulo B, etc.)
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📏</span>
              Cantidad
            </h4>
            <p className="text-sm text-gray-700">
              Número de unidades a ejecutar (en la unidad de medida del ítem). Ej: 150 m³, 2000 m², 100 und, etc.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">💰</span>
              Costo unitario (opcional)
            </h4>
            <p className="text-sm text-gray-700">
              Si deseas ajustar el precio unitario para esta etapa específica (descuentos, variaciones, etc.)
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📝</span>
              Descripción (opcional)
            </h4>
            <p className="text-sm text-gray-700">
              Notas adicionales o especificaciones particulares para esta asignación
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📊</span>
              Costo total (automático)
            </h4>
            <p className="text-sm text-gray-700">
              Se calcula automáticamente: cantidad × costo unitario = costo total del ítem en esta etapa
            </p>
          </div>
        </div>
      </div>

      {/* Operaciones disponibles */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Operaciones en el cómputo
        </h3>
        <p className="text-base leading-7 text-gray-700">
          En cualquier momento antes de consolidar, puedes:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-2xl">➕</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Agregar ítems</h4>
            <p className="text-sm text-gray-700">
              Incluye nuevos ítems al cómputo. Puedes agregar el mismo ítem varias veces en diferentes etapas.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">✏️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Editar asignaciones</h4>
            <p className="text-sm text-gray-700">
              Modifica cantidades, etapas o precios de cualquier asignación hasta que consolides el presupuesto.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🗑️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Eliminar asignaciones</h4>
            <p className="text-sm text-gray-700">
              Suprime líneas del cómputo. Debes confirmar la eliminación para evitar cambios accidentales.
            </p>
          </div>
        </div>
      </div>

      {/* Validaciones y restricciones */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Validaciones y restricciones</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Todas las cantidades deben ser números positivos</li>
          <li>Los ítems utilizados deben estar activos en tu catálogo</li>
          <li>Las etapas deben estar previamente configuradas en el proyecto</li>
          <li>No puedes asignar la misma combinación ítem-etapa dos veces</li>
          <li>Los precios unitarios negativos o cero no son permitidos</li>
          <li>Una vez consolidado, no puedes modificar el cómputo sin desconsolidar</li>
        </ul>
      </div>

      {/* Mejores prácticas */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Planifica las etapas del proyecto antes de comenzar el cómputo</li>
          <li>Verifica cantidades con los planos y especificaciones técnicas</li>
          <li>Agrupa ítems similares para facilitar la visualización y edición</li>
          <li>Revisa cuidadosamente los cálculos antes de pasar a la siguiente etapa</li>
          <li>Documenta cambios importantes en el cómputo durante la ejecución</li>
          <li>Realiza auditorías periódicas de cantidades vs. avance ejecutado</li>
          <li>Usa descripciones claras para identificar variaciones o especificidades</li>
        </ul>
      </div>

      {/* Siguiente paso */}
      <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
          <span className="text-xl">▶️</span>
          Siguiente paso: Presupuesto
        </h4>
        <p className="mb-4 text-sm text-gray-700">
          Una vez que hayas completado el cómputo con todos los ítems y etapas, ve a la sección de Presupuesto 
          para visualizar los totales, desglose de costos y consolidar cuando esté listo.
        </p>
        <Link
          href="/docs/presupuesto/presupuesto"
          className="inline-block rounded-xl bg-[#4db8a8] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Presupuesto →
        </Link>
      </div>
    </div>
  );
}
