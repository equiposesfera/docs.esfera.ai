import Link from "next/link";

export default function VentasCarteraPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Cartera</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Ventas
      </h2>
       <p className="text-base leading-7 text-gray-700 md:text-lg">
         Registra y da seguimiento a los contratos de compraventa de inmuebles. Controla anticipos, cuotas
         y el cronograma de pagos de cada operación en tiempo real.
       </p>

       {/* Video Container */}
       <div className="space-y-4">
         <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial: Venta de inmuebles</h2>
           <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
             <iframe
               width="100%"
               height="100%"
               src="https://www.youtube.com/embed/L4PTFrbCg74"
               title="VENTA DE INMUEBLES"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="w-full h-full"
             ></iframe>
           </div>
         </div>
       </div>

       <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📑 ¿Qué es una venta en ESFERA?</h4>
        <p className="text-sm text-gray-700">
          Es el registro del proceso comercial que vincula a un cliente con un inmueble. Incluye el precio pactado,
          los anticipos recibidos, el cronograma de pagos acordado y el estado actual de la operación. Permite
          saber en todo momento cuánto se cobró y cuánto falta por cobrar de cada unidad.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para registrar una venta
        </h3>
        <div className="space-y-4">
          {[
            { title: "Accede a Ventas", desc: "En el módulo Cartera selecciona la sección Ventas para ver el listado de operaciones." },
            { title: "Haz clic en \"Nueva venta\"", desc: "Se abre el formulario para crear un nuevo contrato de compraventa." },
            { title: "Selecciona el cliente", desc: "Elige al comprador del listado de clientes registrados. Si no existe, créalo primero." },
            { title: "Elige el inmueble", desc: "Selecciona la unidad que se venderá. Solo aparecen inmuebles con estado Disponible." },
            { title: "Ingresa las condiciones de venta", desc: "Precio final acordado, monto del anticipo, forma de pago y fecha de inicio del contrato." },
            { title: "Define el cronograma de pagos", desc: "Establece las cuotas, sus montos y fechas de vencimiento para el seguimiento de cobros." },
            { title: "Guarda la venta", desc: "El inmueble cambia a estado Reservado o Vendido y el contrato queda registrado en el sistema." },
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
          Datos del contrato de venta
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Cliente</h4>
            <p className="text-sm text-gray-700">Comprador asociado a este contrato. Debe estar registrado previamente en la sección Clientes.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Inmueble</h4>
            <p className="text-sm text-gray-700">Unidad adquirida. Al crear la venta, el inmueble cambia de estado automáticamente.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Precio de venta</h4>
            <p className="text-sm text-gray-700">Precio final acordado con el cliente. Puede diferir del precio de lista del inmueble.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Anticipo</h4>
            <p className="text-sm text-gray-700">Monto pagado al momento de separar o firmar el contrato. Se descuenta del saldo pendiente.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Cronograma de pagos</h4>
            <p className="text-sm text-gray-700">Lista de cuotas con fechas y montos. El sistema hace seguimiento del estado de cada cuota.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Observaciones</h4>
            <p className="text-sm text-gray-700">Condiciones especiales, descuentos acordados, cláusulas adicionales o notas internas del contrato.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Estados de una venta
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-yellow-400 bg-yellow-50 p-5">
            <div className="mb-3 text-2xl">📋</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Reserva</h4>
            <p className="text-sm text-gray-700">Anticipo recibido. El inmueble está apartado pero el contrato aún no está firmado.</p>
          </div>
          <div className="rounded-2xl border-2 border-blue-400 bg-blue-50 p-5">
            <div className="mb-3 text-2xl">✍️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Contrato firmado</h4>
            <p className="text-sm text-gray-700">Contrato de compraventa suscrito. Se inicia el seguimiento de pagos según el cronograma.</p>
          </div>
          <div className="rounded-2xl border-2 border-green-400 bg-green-50 p-5">
            <div className="mb-3 text-2xl">✅</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Liquidado</h4>
            <p className="text-sm text-gray-700">Todas las cuotas fueron pagadas. La operación está completamente cerrada.</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Consideraciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Solo se pueden vender inmuebles con estado Disponible</li>
          <li>El cliente debe existir en el sistema antes de crear la venta</li>
          <li>Al guardar la venta el inmueble cambia de estado automáticamente</li>
          <li>Los anticipos registrados reducen el saldo pendiente del cronograma de pagos</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/cartera/clientes"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
        >
          Ver Clientes →
        </Link>
        <Link
          href="/cartera/inmuebles"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
        >
          Ver Inmuebles →
        </Link>
      </div>
    </div>
  );
}

