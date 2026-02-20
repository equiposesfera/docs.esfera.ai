import Image from "next/image";
import Link from "next/link";

export default function CrearNuevoEquiposMaqsHtasPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Crear nuevo equipo, maquinaria o herramienta
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Crea registros de equipos, maquinarias y herramientas individuales usando el formulario guiado. Define costos horarios, depreciación y gastos operativos de forma precisa.
      </p>

      {/* Imagen principal */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/apu/opcion-crear-nuevo-equipos-maquinarias-herramientas.png"
          alt="Crear nuevo equipo, maquinaria o herramienta"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      {/* Proceso paso a paso */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Proceso de creación
        </h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              1
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Accede al módulo de equipos</h4>
              <p className="text-sm text-gray-700">
                Desde el menú de Análisis de Precio Unitario, selecciona "Equipos, maquinarias y herramientas" y haz clic en "Crear nuevo".
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              2
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Completa los datos básicos</h4>
              <p className="text-sm text-gray-700">
                Ingresa código, descripción, tipo (equipo/maquinaria/herramienta), marca, modelo y unidad de medida (generalmente HM - Horas Máquina).
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              3
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Define los costos</h4>
              <p className="text-sm text-gray-700">
                Especifica costo por hora, que incluye depreciación, mantenimiento, combustible, operador y seguro.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              4
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Agrega información técnica</h4>
              <p className="text-sm text-gray-700">
                Incluye especificaciones técnicas, capacidad, potencia, rendimiento esperado y cualquier dato relevante para su uso.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tipos de recursos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Tipos de recursos
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-2xl">🚜</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Maquinaria pesada</h4>
            <p className="mb-3 text-sm text-gray-700">
              Equipo de gran tamaño para movimiento de tierras, pavimentación, etc. (excavadoras, motoniveladoras, compactadoras).
            </p>
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Alto costo horario
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Incluye operador
              </div>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🔧</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Equipos medianos</h4>
            <p className="mb-3 text-sm text-gray-700">
              Equipos especializados de tamaño medio (mezcladoras, vibradores, compresores, soldadoras).
            </p>
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Costo moderado
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Uso frecuente
              </div>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🔨</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Herramientas</h4>
            <p className="mb-3 text-sm text-gray-700">
              Herramientas manuales o eléctricas de menor envergadura (taladros, sierras, niveles, andamios).
            </p>
            <div className="space-y-1 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Bajo costo
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Desgaste rápido
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Datos requeridos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Datos requeridos
        </h3>
        <div className="space-y-4">
          {/* Información básica */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📝</span>
              Información básica
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-medium">Código:</span>
                <span>Identificador único (ej: EQ-001, MAQ-EXC-01)</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Descripción:</span>
                <span>Nombre del equipo con especificaciones principales</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Tipo:</span>
                <span>Categoría (maquinaria pesada, equipo, herramienta)</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Marca/Modelo:</span>
                <span>Fabricante y modelo específico</span>
              </div>
            </div>
          </div>

          {/* Costos */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">💰</span>
              Costos
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-medium">Costo por hora:</span>
                <span>Tarifa horaria total (depreciación + operación + mantenimiento)</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Depreciación:</span>
                <span>Costo de desgaste por hora de uso</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Mantenimiento:</span>
                <span>Costo de mantenimiento preventivo y correctivo</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Combustible:</span>
                <span>Consumo horario de combustible o energía</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Operador:</span>
                <span>Costo del operador si aplica</span>
              </div>
            </div>
          </div>

          {/* Especificaciones técnicas */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">⚙️</span>
              Especificaciones técnicas
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-medium">Capacidad:</span>
                <span>Capacidad de trabajo (m³, ton, etc.)</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Potencia:</span>
                <span>Potencia del motor (HP, kW)</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Rendimiento:</span>
                <span>Productividad esperada por hora</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Peso:</span>
                <span>Peso operativo del equipo</span>
              </div>
            </div>
          </div>

          {/* Información adicional */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">ℹ️</span>
              Información adicional
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-medium">Año:</span>
                <span>Año de fabricación o adquisición</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Condición:</span>
                <span>Estado actual (nuevo, usado, reacondicionado)</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Disponibilidad:</span>
                <span>Propio, alquilado, en préstamo</span>
              </div>
              <div className="flex gap-2">
                <span className="font-medium">Unidad:</span>
                <span>Generalmente HM (Horas Máquina)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cálculo de costo horario */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📊 Cálculo del costo horario</h4>
        <p className="mb-3 text-sm text-gray-700">
          El costo horario de un equipo se compone de varios elementos:
        </p>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex items-start gap-2">
            <span className="font-mono text-[#4db8a8]">+</span>
            <span><strong>Depreciación:</strong> (Valor compra - Valor residual) / Vida útil en horas</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-[#4db8a8]">+</span>
            <span><strong>Mantenimiento:</strong> Estimado según fabricante (% del costo de compra)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-[#4db8a8]">+</span>
            <span><strong>Combustible:</strong> Consumo horario × Precio combustible</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-[#4db8a8]">+</span>
            <span><strong>Operador:</strong> Si el equipo requiere operador especializado</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-[#4db8a8]">+</span>
            <span><strong>Seguro:</strong> Prima anual / Horas trabajadas por año</span>
          </div>
        </div>
      </div>

      {/* Uso en ítems */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">🔗 Uso en ítems de APU</h4>
        <p className="text-sm text-gray-700">
          Una vez creado el equipo, podrás agregarlo como componente en tus análisis de precio unitario, 
          especificando el rendimiento (cuántas HM se necesitan por unidad de ítem). El costo se calculará 
          automáticamente multiplicando el costo por hora por el rendimiento.
        </p>
      </div>

      {/* Mejores prácticas */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Calcula el costo horario incluyendo todos los componentes (no solo alquiler)</li>
          <li>Actualiza regularmente los costos de combustible y mantenimiento</li>
          <li>Define vida útil realista basada en condiciones de trabajo locales</li>
          <li>Usa códigos que identifiquen tipo y capacidad (ej: MAQ-EXC-320)</li>
          <li>Documenta especificaciones técnicas para planificación de actividades</li>
          <li>Distingue entre equipo propio (depreciación) y alquilado (tarifa directa)</li>
          <li>Mantén registro de disponibilidad para evitar sobreprogramación</li>
        </ul>
      </div>

      {/* Navegación */}
      <div className="flex flex-wrap gap-4">
        <Link 
          href="/docs/analisis-precio-unitario/equipos-maquinarias-herramientas"
          className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          ← Volver a equipos
        </Link>
        <Link 
          href="/docs/analisis-precio-unitario/equipos-maquinarias-herramientas/importar-desde-csv"
          className="rounded-xl bg-[#4db8a8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver importación desde CSV →
        </Link>
      </div>
    </div>
  );
}
