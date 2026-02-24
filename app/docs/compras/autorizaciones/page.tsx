import Image from "next/image";
import Link from "next/link";

export default function AutorizacionesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Compras</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Autorización de cotizaciones
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        En autorizaciones revisas y apruebas las cotizaciones completadas. Este paso valida que los
        proveedores seleccionados y precios cumplan con las políticas de compra y presupuesto del proyecto.
      </p>

      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/compras/autorizar-cotizacion.png"
          alt="Autorizar cotización"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">✅ ¿Qué es autorizar una cotización?</h4>
        <p className="text-sm text-gray-700">
          Es el proceso de revisar las ofertas de proveedores y aprobar la compra antes de generar
          la orden. Asegura control de gastos, cumplimiento de políticas y trazabilidad de decisiones.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para autorizar una cotización
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Accede a Autorizaciones",
              desc: "En el módulo de Compras, selecciona Autorizaciones. Aparecen las cotizaciones pendientes de aprobar.",
            },
            {
              title: "Revisa la cotización",
              desc: "Haz click en una cotización para ver el detalle: materiales, proveedores cotizados, precios y condiciones.",
            },
            {
              title: "Evalúa las ofertas",
              desc: "Compara los precios, plazos de entrega y condiciones entre proveedores. Verifica cumplimiento de presupuesto.",
            },
            {
              title: "Verifica disponibilidad presupuestaria",
              desc: "Confirma que el monto total de la cotización esté dentro del presupuesto del proyecto.",
            },
            {
              title: "Selecciona el mejor proveedor",
              desc: "Marca el proveedor elegido para cada material. Puede ser diferente proveedor por cada item.",
            },
            {
              title: "Documenta la decisión",
              desc: "Agrega observaciones justificando la selección (mejor precio, mejor plazo, confiabilidad, etc.).",
            },
            {
              title: 'Click en "Autorizar"',
              desc: "Aprueba la cotización. Queda lista para generar orden de compra.",
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
          Criterios de evaluación
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Al autorizar una cotización, considera estos factores:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-2xl">💵</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Precio competitivo</h4>
            <p className="text-sm text-gray-700">
              El precio debe ser razonable comparado con el mercado y el presupuesto asignado.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">📅</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Plazo de entrega</h4>
            <p className="text-sm text-gray-700">
              El tiempo de entrega debe ajustarse al cronograma del proyecto.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🏆</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Calidad del proveedor</h4>
            <p className="text-sm text-gray-700">
              Historial de cumplimiento, confiabilidad y calidad de productos entregados.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">💳</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Condiciones de pago</h4>
            <p className="text-sm text-gray-700">
              Formas de pago favorables al flujo de caja del proyecto (crédito, contado, anticipo).
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🛡️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Garantía</h4>
            <p className="text-sm text-gray-700">
              Tiempo y condiciones de garantía ofrecida por el proveedor.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">📊</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Cumplimiento presupuestario</h4>
            <p className="text-sm text-gray-700">
              El total de la compra debe estar dentro del presupuesto aprobado.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Estados de autorización
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 1
            </div>
            <div className="mb-3 text-2xl">⏳</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Pendiente</h4>
            <p className="text-sm text-gray-700">
              Cotización completada pero no revisada. Requiere autorización para continuar.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-green-400 bg-green-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-green-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 2
            </div>
            <div className="mb-3 text-2xl">✅</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Autorizada</h4>
            <p className="text-sm text-gray-700">
              Cotización aprobada. Lista para generar orden de compra con proveedores seleccionados.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-red-400 bg-red-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-red-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 3
            </div>
            <div className="mb-3 text-2xl">❌</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Rechazada</h4>
            <p className="text-sm text-gray-700">
              Cotización no aprobada (excede presupuesto, incumple políticas, etc.). Requiere nueva cotización.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Consideraciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Solo puedes autorizar cotizaciones con estado "Pendiente"</li>
          <li>Debes seleccionar un proveedor para cada material antes de autorizar</li>
          <li>Verifica que el total esté dentro del presupuesto del proyecto</li>
          <li>Documenta siempre los criterios de selección en observaciones</li>
          <li>Una vez autorizada, no se puede modificar (solo generar orden o rechazar)</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Revisa todas las ofertas antes de decidir, no solo el precio más bajo</li>
          <li>Considera el costo total: precio + transporte + condiciones de pago</li>
          <li>Verifica antecedentes del proveedor en proyectos anteriores</li>
          <li>Documenta por qué se elige un proveedor más caro si aplica</li>
          <li>Comunica decisiones a los involucrados antes de generar la orden</li>
        </ul>
      </div>

      <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
          <span className="text-xl">▶️</span>
          Siguiente paso: Órdenes de compra
        </h4>
        <p className="mb-4 text-sm text-gray-700">
          Una vez autorizada la cotización, ve a Órdenes de compra para generar la orden con los
          proveedores seleccionados y gestionar el pago.
        </p>
        <Link
          href="/docs/compras/ordenes-de-compra"
          className="inline-block rounded-xl bg-[#4db8a8] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Órdenes de compra →
        </Link>
      </div>
    </div>
  );
}
