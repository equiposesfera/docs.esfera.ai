import Image from "next/image";
import Link from "next/link";

export default function ObraPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Obra</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Gestión de obra
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        En la sección de Obra registras el avance de los trabajos, generas planillas de pago para contratistas,
        y gestionas las retenciones que derivan de los pagos.
      </p>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Flujo de trabajo en obra
        </h3>
        <p className="text-base leading-7 text-gray-700">
          El proceso de ejecución y pago sigue estos pasos:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              1
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Registrar avances</h4>
              <p className="text-sm text-gray-700">
                En Avances registras el progreso de cada item. Especificas qué item se ejecutó, cuántas unidades se completaron,
                qué contratista realizó el trabajo y en qué etapa se ejecutó.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              2
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Generar planillas de pago</h4>
              <p className="text-sm text-gray-700">
                En Planillas agrupar los avances por contratista para generar una planilla de pago que detalla
                qué items ejecutó, cantidades, valores unitarios y totales a pagar.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
              3
            </div>
            <div className="flex-1">
              <h4 className="mb-1 font-semibold text-[#2d2d2d]">Gestionar retenciones</h4>
              <p className="text-sm text-gray-700">
                Si la planilla genera retenciones (impuestos, garantías, etc.), éstas se registran automáticamente.
                En Retenciones puedes visualizar, hacer seguimiento y pagar total o parcialmente cada retención.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Secciones de obra
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          <Link href="/docs/obra/avances" className="group">
            <div className="h-full rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 text-4xl">📊</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
                Avances
              </h4>
              <p className="mb-4 text-sm text-gray-700">
                Registra el progreso de items ejecutados. Asigna contratista, cantidad de trabajo realizado y etapa.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Crear nuevo avance
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Asignar contratista
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Definir cantidades
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
                Ver más →
              </div>
            </div>
          </Link>

          <Link href="/docs/obra/planillas" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">💰</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
                Planillas de pago
              </h4>
              <p className="mb-4 text-sm text-gray-700">
                Agrupa avances por contratista para generar una planilla de pago con desglose de items y montos.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Generar planilla
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Ver desglose de items
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Aplicar retenciones
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
                Ver más →
              </div>
            </div>
          </Link>

          <Link href="/docs/obra/retenciones" className="group">
            <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
              <div className="mb-4 text-4xl">🔒</div>
              <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
                Retenciones
              </h4>
              <p className="mb-4 text-sm text-gray-700">
                Gestiona las retenciones generadas en planillas. Visualiza, busca y paga total o parcialmente cada una.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Ver retenciones pendientes
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Pagar total o parcialmente
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                  Registrar pagos
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
                Ver más →
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">ℹ️ Relación con presupuesto</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            Para registrar avances, el presupuesto del proyecto debe estar <strong>consolidado</strong>.
            Esto asegura que los avances se controlen contra cantidades y costos predefinidos.
          </p>
          <p>
            Cada avance se vincula a un item específico del presupuesto, por lo que solo puedes avanzar ítems
            que estén en el presupuesto del proyecto.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Registra avances al finalizar cada fase de trabajo</li>
          <li>Verifica que las cantidades avanzadas coincidan con el trabajo ejecutado</li>
          <li>Genera planillas regularmente para mantener actualizado el control de pagos</li>
          <li>Revisa retenciones antes de efectuar pagos</li>
          <li>Documenta observaciones o variantes en cada avance</li>
        </ul>
      </div>
    </div>
  );
}
