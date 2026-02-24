import Image from "next/image";
import Link from "next/link";

export default function RetencionesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Obra</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Gestión de retenciones
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Las retenciones son descuentos aplicados en planillas de pago (impuestos, garantía, etc.).
        Aquí visualizas, haces seguimiento y procesas el pago total o parcial de cada una.
      </p>

      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/obra/pago-retenciones.png"
          alt="Pago de retenciones"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">🔒 ¿Qué es una retención?</h4>
        <p className="text-sm text-gray-700">
          Es un descuento aplicado al pago de una planilla por concepto de impuestos, garantía, caución u otro.
          Se calcula automáticamente en la planilla y queda pendiente de pago hasta que se procese en esta ventana.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para pagar una retención
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Accede a Retenciones",
              desc: "En la sección de Obra, selecciona Retenciones para ver todas las retenciones pendientes.",
            },
            {
              title: "Busca la retención",
              desc: "Usa filtros por contratista, planilla, monto, o estado. Puedes buscar la retención específica.",
            },
            {
              title: "Revisa los detalles",
              desc: "Verifica la planilla asociada, contratista, concepto de retención, monto y fecha de generación.",
            },
            {
              title: "Decide el tipo de pago",
              desc: "Elige pagar la retención total o parcialmente. Si es parcial, ingresa el monto a pagar.",
            },
            {
              title: "Ingresa medio de pago",
              desc: "Selecciona método (efectivo, transferencia, cheque) y referencia de transacción.",
            },
            {
              title: "Procesa el pago",
              desc: "Confirma el pago. La retención se marca como pagada (total) u se actualiza el saldo (parcial).",
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
          Estados de una retención
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-orange-400 bg-orange-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-orange-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 1
            </div>
            <div className="mb-3 text-2xl">⏳</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Pendiente</h4>
            <p className="text-sm text-gray-700">
              La retención está generada pero no ha sido pagada. Aguarda procesamiento.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 2
            </div>
            <div className="mb-3 text-2xl">⚠️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Parcialmente pagada</h4>
            <p className="text-sm text-gray-700">
              Se ha pagado parte del monto. Queda un saldo pendiente.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-green-400 bg-green-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-green-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 3
            </div>
            <div className="mb-3 text-2xl">✅</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Pagada</h4>
            <p className="text-sm text-gray-700">
              La retención ha sido completamente pagada. Sin saldo pendiente.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Información en una retención
        </h3>
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                1
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700"><strong>Planilla vinculada:</strong> La planilla que generó la retención</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                2
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700"><strong>Contratista:</strong> A quién se le retiene el monto</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                3
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700"><strong>Concepto:</strong> Por qué se retiene (IVA, impuesto, garantía, etc.)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                4
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700"><strong>Monto original:</strong> El total a retener</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                5
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700"><strong>Saldo pendiente:</strong> Lo que falta pagar</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                6
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700"><strong>Fecha de generación:</strong> Cuándo se creó la retención</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Operaciones sobre retenciones
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-2xl">💰</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Pago total</h4>
            <p className="text-sm text-gray-700">
              Procesa el pago de toda la retención. El estado cambia a "Pagada" y queda registrado el comprobante.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">💵</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Pago parcial</h4>
            <p className="text-sm text-gray-700">
              Paga parte del monto. La retención queda "Parcialmente pagada" con nuevo saldo a pagar.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Consideraciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Las retenciones se generan automáticamente en las planillas</li>
          <li>No puedes editar el monto de una retención, solo procesarla</li>
          <li>El pago puede ser total o parcial, sin limitación</li>
          <li>Se requiere comprobante de pago (referencia de transferencia, cheque, etc.)</li>
          <li>El historial de pagos queda registrado para auditoría</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Revisa regularmente las retenciones pendientes</li>
          <li>Procesa pagos dentro de los plazos legales requeridos</li>
          <li>Guarda comprobantes de pago para auditoría</li>
          <li>Comunica con contratistas sobre retenciones por aplicarse</li>
          <li>Mantén registro de cambios en políticas de retención</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/docs/obra/planillas"
          className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          ← Volver a Planillas
        </Link>
        <Link
          href="/docs/obra"
          className="rounded-xl bg-[#4db8a8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Obra general →
        </Link>
      </div>
    </div>
  );
}
