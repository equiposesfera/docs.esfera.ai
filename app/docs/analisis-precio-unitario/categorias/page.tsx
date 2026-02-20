export default function CategoriasPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Categorías
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Crea y gestiona categorías para clasificar tus insumos. Las categorías son la primera jerarquía de clasificación y permiten una mejor organización de materials, mano de obra y equipos.
      </p>

      {/* ¿Qué son las categorías? */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📂 ¿Qué son las categorías?</h4>
        <p className="mb-3 text-sm text-gray-700">
          Las categorías son agrupaciones de primer nivel que clasifican todos tus insumos. Cada categoría contiene grupos relacionados y, a su vez, esos grupos contienen los insumos específicos (materiales, mano de obra, equipos).
        </p>
        <p className="text-sm text-gray-700">
          Por ejemplo: "Materiales de construcción" es una categoría, que contiene grupos como "Cemento", "Agregados", "Acero", etc.
        </p>
      </div>

      {/* Operaciones disponibles */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Operaciones disponibles
        </h3>
        <p className="text-base leading-7 text-gray-700">
          En la sección de categorías puedes realizar tres operaciones principales:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-2xl">➕</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Crear</h4>
            <p className="text-sm text-gray-700">
              Define nuevas categorías principales para organizar tu catálogo de insumos.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">✏️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Modificar</h4>
            <p className="text-sm text-gray-700">
              Edita el nombre, descripción e ícono de categorías existentes.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🗑️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Eliminar</h4>
            <p className="text-sm text-gray-700">
              Suprime categorías que ya no uses (solo si no tienen grupos asignados).
            </p>
          </div>
        </div>
      </div>

      {/* Categorías estándar */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Categorías estándar
        </h3>
        <p className="text-base leading-7 text-gray-700">
          ESFERA incluye tres categorías principales según el tipo de insumo:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-3xl">📦</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Materiales y servicios</h4>
            <p className="text-sm text-gray-700">
              Insumos consumibles y servicios contratados necesarios para la construcción.
            </p>
            <div className="mt-3 space-y-1 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Cemento y cal
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Agregados
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Tuberías y cables
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-3xl">👷</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Mano de obra</h4>
            <p className="text-sm text-gray-700">
              Personal especializado en diferentes oficios y disciplinas de construcción.
            </p>
            <div className="mt-3 space-y-1 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Albañilería
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Electricidad
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Plomería
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-3xl">🚜</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Equipos y maquinaria</h4>
            <p className="text-sm text-gray-700">
              Maquinaria pesada, equipos especializados y herramientas de trabajo.
            </p>
            <div className="mt-3 space-y-1 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Maquinaria pesada
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Equipos especializados
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Herramientas
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estructura jerárquica */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Estructura completa de clasificación
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Las categorías forman parte de una estructura jerárquica de tres niveles:
        </p>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <div className="space-y-4">
            {/* Nivel 1 */}
            <div className="rounded-lg border-l-4 border-[#4db8a8] bg-white p-4">
              <div className="mb-1 text-xs font-semibold text-[#4db8a8]">NIVEL 1: CATEGORÍA (Principal)</div>
              <div className="text-lg font-bold text-[#2d2d2d]">Materiales de construcción</div>
              <p className="mt-1 text-xs text-gray-600">Agrupa todos los insumos físicos consumibles</p>
            </div>

            {/* Flecha */}
            <div className="flex justify-center">
              <div className="text-gray-400">▼</div>
            </div>

            {/* Nivel 2 */}
            <div className="space-y-2">
              <div className="doc-pad rounded-lg border-l-4 border-[#a0d5ce] bg-white p-4">
                <div className="mb-1 text-xs font-semibold text-gray-500">NIVEL 2: GRUPO</div>
                <div className="font-medium text-gray-700">Cemento y cal</div>
              </div>
              <div className="rounded-lg border-l-4 border-[#a0d5ce] bg-white p-4">
                <div className="mb-1 text-xs font-semibold text-gray-500">NIVEL 2: GRUPO</div>
                <div className="font-medium text-gray-700">Agregados (arena, grava)</div>
              </div>
              <div className="rounded-lg border-l-4 border-[#a0d5ce] bg-white p-4">
                <div className="mb-1 text-xs font-semibold text-gray-500">NIVEL 2: GRUPO</div>
                <div className="font-medium text-gray-700">Acero y armaduras</div>
              </div>
            </div>

            {/* Flecha */}
            <div className="flex justify-center">
              <div className="text-gray-400">▼</div>
            </div>

            {/* Nivel 3 */}
            <div className="space-y-2">
              <div className="rounded-lg border-l-4 border-green-300 bg-green-50 p-4">
                <div className="mb-1 text-xs font-semibold text-green-600">NIVEL 3: INSUMO</div>
                <div className="text-sm font-medium text-gray-700">Cemento Portland tipo I</div>
                <div className="text-xs text-gray-600">Código: MAT-001 | Bolsa de 50kg | Bs 85.50</div>
              </div>
              <div className="rounded-lg border-l-4 border-green-300 bg-green-50 p-4">
                <div className="mb-1 text-xs font-semibold text-green-600">NIVEL 3: INSUMO</div>
                <div className="text-sm font-medium text-gray-700">Cal hidratada</div>
                <div className="text-xs text-gray-600">Código: MAT-002 | Bolsa de 25kg | Bs 12.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crear categorías */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Crear nuevas categorías
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Pasos para crear una categoría personalizada:
        </p>
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                1
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Accede a "Categorías"</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                2
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Haz clic en "Crear nueva categoría"</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                3
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Ingresa el nombre de la categoría (ej: "Acabados")</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                4
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Añade una descripción clara (recomendado)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                5
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Selecciona un ícono o color para identificarla (opcional)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                6
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Guarda y comienza a crear grupos dentro de ella</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Información de categorías */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Información de cada categoría
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Al crear o modificar una categoría, considera estos datos:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">📝 Nombre</h4>
            <p className="text-sm text-gray-700">
              Nombre descriptivo y único (ej: "Materiales de construcción", "Mano de obra especializada")
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">📋 Descripción</h4>
            <p className="text-sm text-gray-700">
              Texto breve explicando qué insumos incluye la categoría
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">🎨 Color/Ícono</h4>
            <p className="text-sm text-gray-700">
              Identificador visual para reconocer la categoría rápidamente
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">📊 Tipo</h4>
            <p className="text-sm text-gray-700">
              Especifica si es para materiales, mano de obra o equipos
            </p>
          </div>
        </div>
      </div>

      {/* Mejores prácticas */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Crea categorías amplias para no fragmentar demasiado el catálogo</li>
          <li>Usa entre 5-10 categorías máximo para cada tipo de insumo</li>
          <li>Mantén una estructura consistente y fácil de entender</li>
          <li>Documenta la estructura de categorías para tu equipo</li>
          <li>Revisa regularmente y consolida categorías con pocos elementos</li>
          <li>Usa la nomenclatura estándar de tu región o industria si es posible</li>
          <li>Asigna colores e íconos distintivos para identificación visual rápida</li>
        </ul>
      </div>

      {/* Restricciones */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Restricciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>No puedes eliminar una categoría que contenga grupos</li>
          <li>Las tres categorías predeterminadas (Materiales, Mano de obra, Equipos) son obligatorias</li>
          <li>Los nombres de categorías deben ser únicos en el sistema</li>
          <li>No puedes cambiar el tipo de insumo de una categoría después de crearla</li>
          <li>Si necesitas reorganizar, crea una nueva categoría y migra los grupos manualmente</li>
        </ul>
      </div>

      {/* Relación con búsquedas */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
          <span className="text-xl">🔍</span>
          Impacto en búsquedas y reportes
        </h4>
        <p className="mb-3 text-sm text-gray-700">
          Una buena estructura de categorías y grupos afecta directamente tu productividad:
        </p>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
            <span>Los filtros por categoría/grupo aceleran las búsquedas de insumos</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
            <span>Los reportes pueden agruparse por categoría para análisis</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
            <span>Facilita la gestión de precios por categoría</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
            <span>Mejora la experiencia de usuario al navegar catálogos grandes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
