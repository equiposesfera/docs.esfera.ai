import Image from "next/image";
import Link from "next/link";

export default function CotizacionesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Compras</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Cotizaciones
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        En cotizaciones solicitas precios a proveedores para cada material del pedido autorizado.
        Puedes agregar uno o más proveedores por material para comparar ofertas.
      </p>

      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/compras/pedidos-para-cotizar.png"
          alt="Pedidos autorizados listos para cotizar"
          width={1200}
          height={700}
          className="w-full"
        />
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💰 ¿Qué es una cotización?</h4>
        <p className="text-sm text-gray-700">
          Es el proceso de solicitar precios y condiciones a proveedores para cada material del pedido.
          Permite comparar ofertas y seleccionar la mejor opción antes de generar la orden de compra.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para cotizar materiales
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Accede a Cotizaciones",
              desc: "En el módulo de Compras, selecciona Cotizaciones. Aparecen los pedidos autorizados.",
            },
            {
              title: "Selecciona un pedido autorizado",
              desc: "Haz click en un pedido con estado 'Autorizado' para ver sus materiales.",
            },
            {
              title: 'Click en "Cotizar" para un material',
              desc: "Se abre el formulario para agregar proveedores y precios a ese material específico.",
            },
            {
              title: "Agrega proveedores",
              desc: "Selecciona uno o más proveedores que ofrecen el material. Ingresa precio, plazo de entrega y condiciones.",
            },
            {
              title: "Compara ofertas",
              desc: "Revisa los precios, plazos y condiciones de cada proveedor para el mismo material.",
            },
            {
              title: "Repite para cada material",
              desc: "Cotiza todos los materiales del pedido. Cada uno puede tener diferentes proveedores.",
            },
            {
              title: "Guarda la cotización",
              desc: "Una vez completadas todas las cotizaciones, guarda para pasar a autorización.",
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
          Cotizar un material
        </h3>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/compras/cotizar-material.png"
            alt="Formulario para agregar proveedores a un material"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
        <p className="text-sm text-gray-700">
          Para cada material puedes agregar múltiples proveedores con sus respectivos precios, plazos de entrega
          y condiciones comerciales.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Datos en una cotización
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Proveedor</h4>
            <p className="text-sm text-gray-700">
              Quién ofrece el material. Debe estar registrado en la base de datos de proveedores.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Precio unitario</h4>
            <p className="text-sm text-gray-700">
              Costo por unidad que ofrece el proveedor. Incluye o no IVA según configuración.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Plazo de entrega</h4>
            <p className="text-sm text-gray-700">
              Días hábiles desde la orden hasta la entrega del material.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Condiciones de pago</h4>
            <p className="text-sm text-gray-700">
              Forma de pago ofrecida (contado, 30/60/90 días, anticipo, etc.).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Garantía</h4>
            <p className="text-sm text-gray-700">
              Tiempo de garantía del producto ofrecido por el proveedor.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Observaciones</h4>
            <p className="text-sm text-gray-700">
              Notas sobre condiciones especiales, descuentos, limitaciones, etc.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Comparación de ofertas
        </h3>
        <p className="text-base leading-7 text-gray-700">
          El sistema te permite visualizar todas las ofertas para un mismo material en una tabla comparativa:
        </p>
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-200">
                <tr>
                  <th className="pb-3 text-left font-semibold text-[#2d2d2d]">Proveedor</th>
                  <th className="pb-3 text-left font-semibold text-[#2d2d2d]">Precio</th>
                  <th className="pb-3 text-left font-semibold text-[#2d2d2d]">Plazo</th>
                  <th className="pb-3 text-left font-semibold text-[#2d2d2d]">Condiciones</th>
                  <th className="pb-3 text-left font-semibold text-[#2d2d2d]">Total</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-3">Proveedor A</td>
                  <td className="py-3">$150/m³</td>
                  <td className="py-3">7 días</td>
                  <td className="py-3">30 días</td>
                  <td className="py-3 font-semibold">$15,000</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3">Proveedor B</td>
                  <td className="py-3">$145/m³</td>
                  <td className="py-3">10 días</td>
                  <td className="py-3">Contado</td>
                  <td className="py-3 font-semibold">$14,500</td>
                </tr>
                <tr>
                  <td className="py-3">Proveedor C</td>
                  <td className="py-3">$155/m³</td>
                  <td className="py-3">5 días</td>
                  <td className="py-3">60 días</td>
                  <td className="py-3 font-semibold">$15,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          <em>Ejemplo de tabla comparativa de ofertas para un material específico.</em>
        </p>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Consideraciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Solo puedes cotizar pedidos con estado "Autorizado"</li>
          <li>Cada material puede tener múltiples proveedores</li>
          <li>Verifica que los precios incluyan o excluyan IVA según configuración</li>
          <li>Considera no solo precio, sino plazo de entrega y condiciones de pago</li>
          <li>Documenta cualquier condición especial en observaciones</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Solicita al menos 3 cotizaciones por material para comparar</li>
          <li>Verifica disponibilidad de stock antes de cotizar</li>
          <li>Considera el historial de cumplimiento del proveedor</li>
          <li>Evalúa el costo total: precio + transporte + condiciones de pago</li>
          <li>Documenta criterios de selección para auditoría</li>
        </ul>
      </div>

      <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
          <span className="text-xl">▶️</span>
          Siguiente paso: Autorizaciones
        </h4>
        <p className="mb-4 text-sm text-gray-700">
          Una vez completada la cotización con todos los proveedores, ve a Autorizaciones para aprobar
          la compra antes de generar la orden.
        </p>
        <Link
          href="/docs/compras/autorizaciones"
          className="inline-block rounded-xl bg-[#4db8a8] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Autorizaciones →
        </Link>
      </div>
    </div>
  );
}
