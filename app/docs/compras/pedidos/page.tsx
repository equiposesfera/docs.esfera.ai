import Image from "next/image";
import Link from "next/link";

export default function PedidosPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Compras</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Pedidos de compra
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Los pedidos son solicitudes de materiales que necesitas adquirir. Creas un pedido, agregas uno o más
        materiales, y luego lo autorizas para pasar a la etapa de cotización.
      </p>

      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/compras/nuevo pedido.png"
          alt="Formulario de nuevo pedido"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📝 ¿Qué es un pedido?</h4>
        <p className="text-sm text-gray-700">
          Es una solicitud formal de materiales o servicios que el proyecto necesita. Debe incluir descripción,
          cantidades, especificaciones y justificación. Solo pedidos autorizados pasan a cotización.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para crear un pedido
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Accede a Pedidos",
              desc: "En el módulo de Compras, selecciona Pedidos para ver el listado de solicitudes.",
            },
            {
              title: 'Haz click en "Nuevo pedido"',
              desc: "Se abre el formulario para registrar una nueva solicitud de compra.",
            },
            {
              title: "Completa información general",
              desc: "Título del pedido, fecha requerida, proyecto asociado, solicitante y prioridad.",
            },
            {
              title: "Agrega materiales",
              desc: "Haz click en 'Agregar material', ingresa descripción, cantidad, unidad de medida y especificaciones.",
            },
            {
              title: "Revisa el listado de materiales",
              desc: "Verifica que todos los items estén correctos. Puedes editar o eliminar antes de guardar.",
            },
            {
              title: "Guarda el pedido",
              desc: "El pedido queda registrado con estado 'Pendiente' y listo para autorizar.",
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
          Autorizar un pedido
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Una vez creado el pedido, debes autorizarlo para que pueda pasar a cotización:
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/compras/autorizar-pedido.png"
            alt="Autorizar pedido desde el listado"
            width={1200}
            height={700}
            className="w-full"
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
              1
            </span>
            <p className="text-sm text-gray-700">
              <strong>En el listado de pedidos</strong>, localiza el pedido que deseas autorizar (estado "Pendiente")
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
              2
            </span>
            <p className="text-sm text-gray-700">
              <strong>Haz click en el estado del pedido</strong> (columna "Estado")
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
              3
            </span>
            <p className="text-sm text-gray-700">
              <strong>Selecciona "Autorizar"</strong> en el menú que aparece
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
              4
            </span>
            <p className="text-sm text-gray-700">
              El pedido cambia a estado <strong>"Autorizado"</strong> y queda disponible para cotizar
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Listado de pedidos
        </h3>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/compras/listado-pedidos.png"
            alt="Vista del listado de pedidos"
            width={1200}
            height={700}
            className="w-full"
          />
        </div>
        <p className="text-sm text-gray-700">
          El listado muestra todos los pedidos con su estado, materiales solicitados, fecha de creación y acciones disponibles.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Datos en un pedido
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Título del pedido</h4>
            <p className="text-sm text-gray-700">
              Nombre descriptivo de la solicitud (ej: "Materiales para fundación etapa 2").
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Fecha requerida</h4>
            <p className="text-sm text-gray-700">
              Cuándo necesitas los materiales. Afecta prioridad de cotización.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Proyecto asociado</h4>
            <p className="text-sm text-gray-700">
              A qué proyecto se cargarán los costos de esta compra.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Solicitante</h4>
            <p className="text-sm text-gray-700">
              Persona que genera el pedido. Responsable de la solicitud.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Materiales</h4>
            <p className="text-sm text-gray-700">
              Lista de items con descripción, cantidad, unidad y especificaciones técnicas.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Observaciones</h4>
            <p className="text-sm text-gray-700">
              Notas adicionales, restricciones, condiciones especiales o justificación.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Estados de un pedido
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 1
            </div>
            <div className="mb-3 text-2xl">⏳</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Pendiente</h4>
            <p className="text-sm text-gray-700">
              Pedido creado pero no autorizado. No puede cotizarse hasta ser aprobado.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-green-400 bg-green-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-green-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 2
            </div>
            <div className="mb-3 text-2xl">✅</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Autorizado</h4>
            <p className="text-sm text-gray-700">
              Pedido aprobado. Listo para pasar a cotización con proveedores.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-blue-400 bg-blue-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-blue-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 3
            </div>
            <div className="mb-3 text-2xl">🔄</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">En cotización</h4>
            <p className="text-sm text-gray-700">
              Se están solicitando ofertas a proveedores. En proceso de evaluación.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Consideraciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Solo pedidos autorizados pueden cotizarse</li>
          <li>Un pedido puede contener múltiples materiales</li>
          <li>Especifica claramente cantidades y unidades de medida</li>
          <li>Agrega especificaciones técnicas detalladas para evitar errores en cotización</li>
          <li>No puedes editar pedidos una vez que entran en cotización</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Agrupa materiales relacionados en un mismo pedido</li>
          <li>Justifica la necesidad del pedido en observaciones</li>
          <li>Revisa que las cantidades estén alineadas con el presupuesto</li>
          <li>Define fechas realistas considerando tiempos de cotización y entrega</li>
          <li>Asigna prioridades correctamente para facilitar la gestión</li>
        </ul>
      </div>

      <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
          <span className="text-xl">▶️</span>
          Siguiente paso: Cotizaciones
        </h4>
        <p className="mb-4 text-sm text-gray-700">
          Una vez autorizado el pedido, ve a Cotizaciones para solicitar precios a proveedores y
          comparar ofertas.
        </p>
        <Link
          href="/docs/compras/cotizaciones"
          className="inline-block rounded-xl bg-[#4db8a8] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Cotizaciones →
        </Link>
      </div>
    </div>
  );
}
