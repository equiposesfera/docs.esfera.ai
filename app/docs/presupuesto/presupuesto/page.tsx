import Image from "next/image";
import Link from "next/link";

export default function PresupuestoVistaPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Presupuesto</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Visualización del presupuesto
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        La vista de presupuesto te permite revisar de forma consolidada todos los ítems, sus costos totales 
        y el desglose de materiales, mano de obra y equipos, así como los totales por etapa.
      </p>

      {/* ¿Qué ves en la vista de presupuesto? */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📊 ¿Qué ves en esta vista?</h4>
        <p className="text-sm text-gray-700">
          Es un resumen ejecutivo de tu presupuesto que consolida toda la información del cómputo. 
          Aquí puedes tomar decisiones sobre ajustes antes de conceptualizar (consolidar) el presupuesto.
        </p>
      </div>

      {/* Tabla de presupuesto */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/presupuesto/tabla-presupuesto.png"
          alt="Tabla de presupuesto con desglose de costos"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      {/* Componentes de la vista */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Componentes principales de la vista
        </h3>
        <p className="text-base leading-7 text-gray-700">
          La vista de presupuesto presenta varios elementos informativos:
        </p>
        <div className="space-y-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📋</span>
              Relación de ítems
            </h4>
            <p className="mb-3 text-sm text-gray-700">
              Una tabla detallada de cada ítem incluido en el presupuesto con:
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-mono text-[#4db8a8]">•</span>
                <span><strong>Código del ítem:</strong> Identificador único del APU</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono text-[#4db8a8]">•</span>
                <span><strong>Descripción:</strong> Nombre completo del ítem</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono text-[#4db8a8]">•</span>
                <span><strong>Unidad de medida:</strong> m³, m², und, HH, HM, etc.</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono text-[#4db8a8]">•</span>
                <span><strong>Precio unitario:</strong> Costo del ítem en su unidad</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📏</span>
              Cantidades por etapa
            </h4>
            <p className="mb-3 text-sm text-gray-700">
              Columnas separadas para cada etapa del proyecto mostrando:
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-mono text-[#4db8a8]">•</span>
                <span>Cantidad asignada de cada ítem por etapa (Piso 1, Piso 2, Sector A, etc.)</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono text-[#4db8a8]">•</span>
                <span>A la derecha: total por etapa (suma de todos los ítems en esa etapa)</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">💰</span>
              Costo total por ítem
            </h4>
            <p className="mb-3 text-sm text-gray-700">
              La última columna muestra el costo total de cada ítem, calculado como:
            </p>
            <div className="rounded-lg bg-gray-50 p-3 text-sm">
              <div className="font-mono text-center">
                <span className="font-semibold text-[#4db8a8]">Cantidad total × Precio unitario</span>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-700">
              Este es el gasto total proyectado para ese ítem en todo el proyecto.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📊</span>
              Subtotales de componentes
            </h4>
            <p className="mb-3 text-sm text-gray-700">
              Debajo de cada ítem, a veces se muestran las líneas de:
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-mono text-[#4db8a8]">•</span>
                <span><strong>Subtotal Materiales:</strong> Costo total de materiales del ítem</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono text-[#4db8a8]">•</span>
                <span><strong>Subtotal Mano de obra:</strong> Costo total de MO del ítem</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono text-[#4db8a8]">•</span>
                <span><strong>Subtotal Equipos:</strong> Costo total de equipos del ítem</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-green-300 bg-green-50 p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">🎯</span>
              Totales finales
            </h4>
            <p className="mb-3 text-sm text-gray-700">
              Al pie de la tabla, encontrarás:
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="font-mono text-green-600">•</span>
                <span><strong>Total de Materiales:</strong> Suma de todos los subtotales de materiales</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono text-green-600">•</span>
                <span><strong>Total de Mano de obra:</strong> Suma de todos los subtotales de MO</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono text-green-600">•</span>
                <span><strong>Total de Equipos:</strong> Suma de todos los subtotales de equipos</span>
              </div>
              <div className="flex gap-2">
                <span className="font-mono text-green-600">•</span>
                <span><strong>TOTAL DEL PROYECTO:</strong> Suma de materiales + MO + equipos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Totales por etapa */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Totales por etapa
        </h3>
        <p className="text-base leading-7 text-gray-700">
          En la fila de totales al pie de la tabla, verás también un resumen por etapa:
        </p>
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                1
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700"><strong>Subtotal por etapa:</strong> La suma de costos de todos los ítems en esa etapa</p>
                <p className="text-xs text-gray-600 mt-1">Ej: Piso 1 = Bs 150,000 | Piso 2 = Bs 150,000 | Piso 3 = Bs 150,000</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                2
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700"><strong>Porcentaje por etapa:</strong> El % que representa cada etapa sobre el total del proyecto</p>
                <p className="text-xs text-gray-600 mt-1">Ej: Piso 1 = 33.33% | Piso 2 = 33.33% | Piso 3 = 33.34%</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                3
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700"><strong>Total acumulado:</strong> Suma progresiva de etapas (útil para planificación de inversión)</p>
                <p className="text-xs text-gray-600 mt-1">Ej: Hasta Piso 1 = Bs 150,000 | Hasta Piso 2 = Bs 300,000 | Hasta Piso 3 = Bs 450,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Análisis del presupuesto */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Análisis que puedes hacer en esta vista
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">🔍</span>
              Distribución de costos
            </h4>
            <p className="text-sm text-gray-700">
              Identifica qué porcentaje del presupuesto corresponde a materiales, MO y equipos. Útil para análisis de viabilidad.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">⏱️</span>
              Timeline de inversión
            </h4>
            <p className="text-sm text-gray-700">
              Analiza cómo se distribuye la inversión por etapa para planificar flujo de caja y disponibilidad de recursos.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">✓</span>
              Validación de cantidades
            </h4>
            <p className="text-sm text-gray-700">
              Verifica que las cantidades sean coherentes con los planos y especificaciones del proyecto.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">⚖️</span>
              Balance por etapa
            </h4>
            <p className="text-sm text-gray-700">
              Asegura que el costo sea equilibrado entre etapas o justifica desbalances si es necesario.
            </p>
          </div>
        </div>
      </div>

      {/* Consolidación del presupuesto */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Consolidación del presupuesto
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Una vez que has revisado y validado el presupuesto, puedes consolidarlo para:
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/presupuesto/opcion-consolidar-presupuesto.png"
            alt="Opción para consolidar presupuesto"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* ¿Qué significa consolidar? */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          ¿Qué significa consolidar el presupuesto?
        </h3>
        <div className="rounded-2xl border-2 border-green-400 bg-green-50 p-6">
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 font-semibold text-[#2d2d2d]">🔒 Bloqueo para modificación</h4>
              <p className="text-sm text-gray-700">
                Una vez consolidado, el presupuesto se convierte en de solo lectura. No podrás modificar cantidades, 
                precios, ni eliminar ítems sin antes desconsolidarlo.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-[#2d2d2d]">✅ Aprobación de inversión</h4>
              <p className="text-sm text-gray-700">
                La consolidación representa la aprobación del presupuesto como documento de control. Todos pueden ver 
                el monto total a invertir y no hay sorpresas durante la ejecución.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-[#2d2d2d]">📊 Inicio de avances</h4>
              <p className="text-sm text-gray-700">
                Solo un presupuesto consolidado permite registrar avances de obra. Esto asegura que el avance se controle 
                contra un baseline aprobado.
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-[#2d2d2d]">🔄 Opción de desconsolidar</h4>
              <p className="text-sm text-gray-700">
                Si necesitas hacer cambios después, existe la opción de desconsolidar (revertir a edición), 
                pero es recomendable hacerlo solo en casos excepcionales y documentando los motivos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Antes de consolidar */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Checklist antes de consolidar</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Todas las cantidades han sido validadas contra planos y especificaciones</li>
          <li>Los precios unitarios de los ítems son actuales y correctos</li>
          <li>Se han incluido todos los ítems necesarios para la ejecución del proyecto</li>
          <li>Los totales son razonables y coherentes con la envergadura del proyecto</li>
          <li>Las etapas y su distribución de costos son correctas</li>
          <li>El presupuesto ha sido revisado y aprobado por las personas autorizadas</li>
          <li>Se ha documentado cualquier variante o desviación respecto a versiones anteriores</li>
        </ul>
      </div>

      {/* Mejores prácticas */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Revisa el presupuesto completo antes de enviar a aprobación</li>
          <li>Exporta o imprime una copia del presupuesto antes de consolidar</li>
          <li>Comunica a tu equipo cuándo el presupuesto se consolidará</li>
          <li>Mantén un registro de cambios entre versiones de presupuestos</li>
          <li>Usa los totales por etapa para planificar la ejecución y flujo de caja</li>
          <li>Analiza la distribución de costos para identificar riesgos o incoherencias</li>
          <li>Documenta justificaciones si desconsolidas un presupuesto ya aprobado</li>
        </ul>
      </div>

      {/* Navegación */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="/docs/presupuesto/computo"
          className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          ← Volver a Cómputo
        </Link>
        <Link
          href="/docs/presupuesto"
          className="rounded-xl bg-[#4db8a8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Presupuesto general →
        </Link>
      </div>
    </div>
  );
}
