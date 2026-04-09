import Image from "next/image";
import Link from "next/link";

export default function EntradasAlmacenPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Almacén</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Entradas de almacén
      </h2>
       <p className="text-base leading-7 text-gray-700 md:text-lg">
         Las entradas registran los materiales que ingresan al almacén desde órdenes de compra pagadas.
         Cada entrada aumenta la cantidad disponible de ese material en el inventario.
       </p>

       {/* Video Container */}
       <div className="space-y-4">
         <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial: Entrada de almacén</h2>
           <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
             <iframe
               width="100%"
               height="100%"
               src="https://www.youtube.com/embed/AsP7iaLiPRM"
               title="ENTRADA DE ALMACEN"
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
          src="/almacen/entradas-almacen.png"
          alt="Registro de entradas de almacén"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📦 ¿Qué es una entrada?</h4>
        <p className="text-sm text-gray-700">
          Es el registro del ingreso de materiales al almacén. Vinculado a una orden de compra pagada,
          indica qué material llegó, en qué cantidad, de qué proveedor y cuándo ingresó.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para registrar una entrada
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Accede a Entradas",
              desc: "En la sección de Almacén, selecciona Entradas para ver el registro de materiales ingresados.",
            },
            {
              title: "Haz click en \"Nueva entrada\"",
              desc: "Se abre el formulario para registrar un nuevo ingreso de materiales.",
            },
            {
              title: "Selecciona la orden de compra",
              desc: "Busca y selecciona la orden de compra pagada cuyos materiales están llegando.",
            },
            {
              title: "Ingresa el material y cantidad",
              desc: "Del formulario de la orden, selecciona cuál de los materiales está ingresando y en qué cantidad.",
            },
            {
              title: "Verifica cantidad y calidad",
              desc: "Confirma que la cantidad recibida coincide con lo ordenado y revisa estado del material.",
            },
            {
              title: "Registra observaciones (opcional)",
              desc: "Añade notas sobre daños, variantes o condiciones especiales del material recibido.",
            },
            {
              title: "Guarda la entrada",
              desc: "El material se registra en almacén y se suma al stock disponible de ese material.",
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
          Datos en una entrada
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Orden de compra</h4>
            <p className="text-sm text-gray-700">
              La orden pagada cuya entrega está ingresando. Se vincula automáticamente.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Material</h4>
            <p className="text-sm text-gray-700">
              Qué material está ingresando (cemento, acero, arena, etc.).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Cantidad ingresada</h4>
            <p className="text-sm text-gray-700">
              Número de unidades recibidas (en la unidad de medida del material).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Proveedor</h4>
            <p className="text-sm text-gray-700">
              Quién entrega el material (se hereda de la orden de compra).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Fecha de ingreso</h4>
            <p className="text-sm text-gray-700">
              Cuándo llegó el material al almacén.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Observaciones</h4>
            <p className="text-sm text-gray-700">
              Notas sobre daños, variantes o condiciones especiales.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Operaciones sobre entradas
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-2xl">👁️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Ver entradas</h4>
            <p className="text-sm text-gray-700">
              Visualiza el listado de todas las entradas registradas, filtradas por material, proveedor o fecha.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🗑️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Anular entrada</h4>
            <p className="text-sm text-gray-700">
              Suprime un registro de entrada (ej: si se ingresó incorrectamente o hubo devolución).
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">💵</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Rastrear material</h4>
            <p className="text-sm text-gray-700">
              Sigue el historial de cuándo ingresó, de qué orden y destinado a qué proyecto.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Consideraciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Solo puedes registrar entradas de órdenes de compra con estado "Pagada"</li>
          <li>La cantidad ingresada no puede exceder la cantidad ordenada</li>
          <li>Registra entradas inmediatamente al recibir los materiales</li>
          <li>Verifica calidad y cantidad antes de confirmar la entrada</li>
          <li>Documenta cualquier anomalía en observaciones</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Inspecciona los materiales al recibirlos</li>
          <li>Compara cantidad recibida vs. remisión del proveedor</li>
          <li>Toma fotografías de daños si aplica</li>
          <li>Almacena materiales en lugar apropiado inmediatamente</li>
          <li>Comunica variantes al proveedor y al comprador del proyecto</li>
        </ul>
      </div>

      <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
          <span className="text-xl">▶️</span>
          Siguiente paso: Salidas
        </h4>
        <p className="mb-4 text-sm text-gray-700">
          Una vez en almacén, los materiales deben asignarse a Ítems y etapas de la obra. Ve a Salidas
          para registrar el envío de materiales desde el almacén.
        </p>
        <Link
          href="/almacen/salidas"
          className="inline-block rounded-xl bg-[#4db8a8] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Salidas →
        </Link>
      </div>
    </div>
  );
}

