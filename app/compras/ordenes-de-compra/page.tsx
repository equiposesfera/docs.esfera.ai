import Image from "next/image";
import Link from "next/link";

export default function OrdenesDeCompraPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Compras</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Órdenes de compra
      </h2>
       <p className="text-base leading-7 text-gray-700 md:text-lg">
         Las órdenes de compra son documentos formales que emites al proveedor seleccionado. Generadas
         a partir de cotizaciones autorizadas, formalizan el compromiso de compra y permiten gestionar pagos.
       </p>

       {/* Video Container */}
       <div className="space-y-4">
         <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial: Orden de compra</h2>
           <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
             <iframe
               width="100%"
               height="100%"
               src="https://www.youtube.com/embed/Mx1v1Z-KTFk"
               title="ORDEN DE COMPRA"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="w-full h-full"
             ></iframe>
           </div>
         </div>
       </div>

       <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/compras/generar-orden-de-compra.png"
          alt="Generar orden de compra desde cotización autorizada"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📋 ¿Qué es una orden de compra?</h4>
        <p className="text-sm text-gray-700">
          Es el documento que formaliza la compra con el proveedor seleccionado. Especifica materiales,
          cantidades, precios, condiciones y datos del proveedor. Sirve como contrato y comprobante.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para generar una orden de compra
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Accede a Órdenes de compra",
              desc: "En el módulo de Compras, selecciona Órdenes de compra. Aparecen cotizaciones autorizadas listas para orden.",
            },
            {
              title: "Selecciona una cotización autorizada",
              desc: "Haz click en una cotización con estado 'Autorizada' para ver los proveedores seleccionados.",
            },
            {
              title: 'Click en "Generar orden"',
              desc: "El sistema crea automáticamente la orden con los datos del proveedor y materiales.",
            },
            {
              title: "Revisa los datos de la orden",
              desc: "Verifica proveedor, materiales, cantidades, precios, totales y condiciones de pago.",
            },
            {
              title: "Agrega información adicional (opcional)",
              desc: "Dirección de entrega, persona de contacto, observaciones especiales, etc.",
            },
            {
              title: "Guarda y emite la orden",
              desc: "La orden queda registrada con estado 'Emitida' y lista para enviar al proveedor.",
            },
            {
              title: "Envía la orden al proveedor",
              desc: "Exporta la orden en PDF o imprímela para enviar al proveedor (email, WhatsApp, físico).",
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
          Pagar una orden de compra
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Una vez emitida la orden, puedes registrar el pago desde el listado:
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/compras/opcines-orden-de-compra.png"
            alt="Opciones de estado para pagar orden de compra"
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
              <strong>En el listado de órdenes</strong>, localiza la orden que deseas pagar (estado "Emitida" o "Parcialmente pagada")
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
              2
            </span>
            <p className="text-sm text-gray-700">
              <strong>Haz click en el estado de la orden</strong> (columna "Estado")
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
              3
            </span>
            <p className="text-sm text-gray-700">
              <strong>Selecciona "Pagar"</strong> en el menú que aparece
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
              4
            </span>
            <p className="text-sm text-gray-700">
              <strong>Ingresa el monto a pagar</strong> (total o parcial), método de pago y referencia de transacción
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
              5
            </span>
            <p className="text-sm text-gray-700">
              Confirma el pago. La orden cambia a <strong>"Pagada"</strong> (total) o <strong>"Parcialmente pagada"</strong> (parcial)
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Datos en una orden de compra
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Número de orden</h4>
            <p className="text-sm text-gray-700">
              Identificador único de la orden. Generado automáticamente por el sistema.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Proveedor</h4>
            <p className="text-sm text-gray-700">
              Datos del proveedor seleccionado: nombre, RUC/NIT, dirección, contacto.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Materiales</h4>
            <p className="text-sm text-gray-700">
              Detalle de items: descripción, cantidad, unidad, precio unitario, subtotal.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Total a pagar</h4>
            <p className="text-sm text-gray-700">
              Suma de todos los items + impuestos (si aplica). Monto final de la orden.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Condiciones de pago</h4>
            <p className="text-sm text-gray-700">
              Forma de pago acordada (contado, crédito 30/60/90 días, anticipo, etc.).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Plazo de entrega</h4>
            <p className="text-sm text-gray-700">
              Días hábiles desde emisión de orden hasta entrega en sitio.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Estados de una orden de compra
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-blue-400 bg-blue-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-blue-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 1
            </div>
            <div className="mb-3 text-2xl">📤</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Emitida</h4>
            <p className="text-sm text-gray-700">
              Orden generada y enviada al proveedor. Pendiente de pago y entrega.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 2
            </div>
            <div className="mb-3 text-2xl">💵</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Parcialmente pagada</h4>
            <p className="text-sm text-gray-700">
              Se ha pagado parte del monto total. Pendiente de completar el saldo.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-green-400 bg-green-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-green-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 3
            </div>
            <div className="mb-3 text-2xl">✅</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Pagada</h4>
            <p className="text-sm text-gray-700">
              Monto total pagado al proveedor. Pendiente de recepción de materiales.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-teal-400 bg-teal-50 p-5">
            <div className="mb-2 inline-block rounded-full bg-teal-400 px-3 py-1 text-xs font-semibold text-white">
              Estado 4
            </div>
            <div className="mb-3 text-2xl">📦</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Completada</h4>
            <p className="text-sm text-gray-700">
              Materiales entregados y recibidos conforme. Orden cerrada exitosamente.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Consideraciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Solo puedes generar órdenes desde cotizaciones autorizadas</li>
          <li>Una vez emitida, la orden no se puede modificar (solo cancelar)</li>
          <li>Puedes pagar total o parcialmente según condiciones acordadas</li>
          <li>Registra comprobantes de pago para auditoría y seguimiento</li>
          <li>Verifica recepción de materiales antes de cerrar la orden</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Envía la orden al proveedor inmediatamente después de generarla</li>
          <li>Confirma recepción de la orden con el proveedor (llamada o email)</li>
          <li>Registra pagos con comprobantes de transferencia o recibos</li>
          <li>Haz seguimiento del plazo de entrega para evitar retrasos</li>
          <li>Verifica calidad y cantidad de materiales al recibirlos</li>
          <li>Cierra la orden solo cuando todo esté conforme</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/compras/autorizaciones"
          className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          ← Volver a Autorizaciones
        </Link>
        <Link
          href="/compras"
          className="rounded-xl bg-[#4db8a8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Compras general →
        </Link>
      </div>
    </div>
  );
}

