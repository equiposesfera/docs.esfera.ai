import Image from "next/image";
import Link from "next/link";

export default function PlanillasPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Obra</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Planillas de pago
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Las planillas agrupan avances por contratista para generar un detalle de pago. Consolida los trabajos ejecutados,
        calcula totales y aplica retenciones si corresponden.
      </p>

      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/obra/planilla-pago.png"
          alt="Planilla de pago"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💰 ¿Qué es una planilla?</h4>
        <p className="text-sm text-gray-700">
          Es un documento que consolida todos los avances de un contratista en un período determinado.
          Detalla los items ejecutados, cantidades, valores unitarios, subtotales y el monto total a pagar.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para generar una planilla
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Accede a Planillas",
              desc: "En la sección de Obra, selecciona Planillas para ver listado de existentes.",
            },
            {
              title: "Haz clic en \"Nueva planilla\"",
              desc: "Se abre el formulario para generar una nueva planilla de pago.",
            },
            {
              title: "Selecciona el contratista",
              desc: "Elige el contratista cuyos avances deseas agrupar en esta planilla.",
            },
            {
              title: "Define el período",
              desc: "Especifica la fecha de inicio y fin del período que cubre la planilla.",
            },
            {
              title: "Selecciona los avances",
              desc: "Se muestran todos los avances del contratista en el período. Revisa y selecciona cuáles incluir.",
            },
            {
              title: "Revisa el desglose",
              desc: "El sistema calcula automáticamente el total por item y el monto global a pagar.",
            },
            {
              title: "Aplica retenciones (si aplica)",
              desc: "Si corresponden retenciones (impuestos, garantía, etc.), el sistema las calcula automáticamente.",
            },
            {
              title: "Guarda la planilla",
              desc: "La planilla queda registrada y lista para revisar, modificar (si no está confirmada) o pagar.",
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
          Estructura de una planilla
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Una planilla contiene los siguientes elementos:
        </p>
        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
          <Image
            src="/obra/planilla-a-pagar.png"
            alt="Estructura de planilla a pagar"
            width={1200}
            height={600}
            className="w-full"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Información general</h4>
            <p className="text-sm text-gray-700">
              Número de planilla, contratista, período cubierto, fecha de generación.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Desglose de ítems</h4>
            <p className="text-sm text-gray-700">
              Tabla con cada item ejecutado: código, descripción, cantidad, precio unitario, subtotal.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Subtotales</h4>
            <p className="text-sm text-gray-700">
              Suma de todos los items. Base para el cálculo de retenciones.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Retenciones</h4>
            <p className="text-sm text-gray-700">
              Descuentos aplicables (impuestos, garantía, etc.) y monto neto a pagar.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Operaciones sobre planillas
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-2xl">👁️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Ver planilla</h4>
            <p className="text-sm text-gray-700">
              Visualiza el desglose completo, incluyendo ítems, cantidades, precios y retenciones.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">✏️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Editar planilla</h4>
            <p className="text-sm text-gray-700">
              Modifica la planilla antes de confirmarla. Una vez confirmada, no se puede editar.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">💵</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Procesar pago</h4>
            <p className="text-sm text-gray-700">
              Marca la planilla como pagada (total o parcialmente) y registra la transacción.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Consideraciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Solo puedes incluir avances no confirmados en la planilla</li>
          <li>Una vez confirmada, la planilla no se puede modificar (solo eliminar si aún no está pagada)</li>
          <li>Las retenciones se calculan automáticamente según configuración</li>
          <li>El monto a pagar es: subtotal - retenciones</li>
          <li>El pago puede ser total o parcialmente registrado</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Revisa los avances antes de generar la planilla</li>
          <li>Verifica que todos los ítems tengan precios actualizado</li>
          <li>Genera planillas regularmente (semanal, quincenal, mensual) según política</li>
          <li>Guarda copia de la planilla antes de confirmarla</li>
          <li>Comunica retenciones al contratista con anticipación</li>
        </ul>
      </div>

      <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
          <span className="text-xl">▶️</span>
          Siguiente paso: Gestionar retenciones
        </h4>
        <p className="mb-4 text-sm text-gray-700">
          Si la planilla genera retenciones, ve a la sección de Retenciones para visualizarlas, hacer seguimiento
          y procesarlas (pago total o parcial).
        </p>
        <Link
          href="/docs/obra/retenciones"
          className="inline-block rounded-xl bg-[#4db8a8] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Retenciones →
        </Link>
      </div>
    </div>
  );
}
