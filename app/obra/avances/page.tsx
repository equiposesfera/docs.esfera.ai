import Image from "next/image";
import Link from "next/link";

export default function AvancesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Obra</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Avances de obra
      </h2>
       <p className="text-base leading-7 text-gray-700 md:text-lg">
         En avances registras el progreso de cada item del presupuesto. Defines qué se ejecutó, cuántas unidades
         se completaron, qué contratista realizó el trabajo y en qué fase se ejecutó.
       </p>

       {/* Video Container */}
       <div className="space-y-4">
         <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial: Avances</h2>
           <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
             <iframe
               width="100%"
               height="100%"
               src="https://www.youtube.com/embed/1GHdjH325PE"
               title="AVANCES"
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
          src="/obra/formulario-avance.png"
          alt="Formulario de registro de avances"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📊 ¿Qué es un avance?</h4>
        <p className="text-sm text-gray-700">
          Es el registro del progreso en la ejecución de un item. Vincula la cantidad de trabajo realizado con el
          contratista que lo ejecutó, permitiendo controlar avance vs. presupuesto.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para registrar un avance
        </h3>
        <div className="space-y-4">
          {[
            {
              title: "Accede a Avances",
              desc: "En la sección de Obra, selecciona Avances para ver el listado de registros.",
            },
            {
              title: "Haz clic en \"Nuevo avance\"",
              desc: "Se abre el formulario para registrar un nuevo progreso de trabajo.",
            },
            {
              title: "Selecciona el item a avanzar",
              desc: "Elige el item del presupuesto que deseas reportar. Solo aparecen ítems disponibles.",
            },
            {
              title: "Asigna el contratista",
              desc: "Selecciona quién ejecutó el trabajo. Puede ser el mismo contratista de varias partidas.",
            },
            {
              title: "Ingresa la cantidad ejecutada",
              desc: "Especifica cuántas unidades se completaron (en la unidad de medida del item).",
            },
            {
              title: "Define la etapa (opcional)",
              desc: "Si aplica, indica en qué fase del proyecto se ejecutó el trabajo.",
            },
            {
              title: "Agrega observaciones (opcional)",
              desc: "Notas sobre variantes, problemas o comentarios relevantes del trabajo.",
            },
            {
              title: "Guarda el avance",
              desc: "El avance queda registrado y listo para incluirlo en una planilla de pago.",
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
          Datos necesarios para un avance
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Item</h4>
            <p className="text-sm text-gray-700">
              El item del presupuesto que se está ejecutando. Solo puedes seleccionar ítems cons cantidades pendientes.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Contratista</h4>
            <p className="text-sm text-gray-700">
              Quién realiza el trabajo. Debe estar registrado en la base de datos de personas.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Cantidad ejecutada</h4>
            <p className="text-sm text-gray-700">
              Número de unidades completadas (m³, m², und, HH, etc., según el item).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Fecha de ejecución</h4>
            <p className="text-sm text-gray-700">
              Cuándo se realizó el trabajo (para auditoría y cronograma).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Etapa (opcional)</h4>
            <p className="text-sm text-gray-700">
              En qué piso o sector se ejecutó el trabajo, si es relevante.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Observaciones</h4>
            <p className="text-sm text-gray-700">
              Notas sobre variantes, asuntos especiales o comentarios del supervisor.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Operaciones sobre avances
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-2xl">👁️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Ver avances</h4>
            <p className="text-sm text-gray-700">
              Visualiza el listado de todos los avances registrados, filtrados por item, contratista o fecha.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">✏️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Editar avance</h4>
            <p className="text-sm text-gray-700">
              Modifica el avance antes de incluirlo en una planilla. Una vez en planilla, no se puede editar.
            </p>
          </div>

          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🗑️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Eliminar avance</h4>
            <p className="text-sm text-gray-700">
              Suprime un avance no planeado. Solo es posible si no está incluido en una planilla.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Consideraciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Solo puedes avanzar items del presupuesto consolidado</li>
          <li>La cantidad no puede exceder la cantidad restante del item</li>
          <li>El contratista debe estar registrado en la base de datos</li>
          <li>Los avances no se pueden editar una vez incluidos en una planilla</li>
          <li>Cada avance genera un costo calculado automáticamente: cantidad × precio unitario</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Registra avances regularmente, no esperes al final del proyecto</li>
          <li>Verifica cantidades contra evidencia fotográfica o reportes del supervisor</li>
          <li>Usa observaciones para documentar variantes o cambios</li>
          <li>Revisa periódicamente el avance vs. presupuesto para detectar desviaciones</li>
        </ul>
      </div>

      <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
        <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
          <span className="text-xl">▶️</span>
          Siguiente paso: Planillas de pago
        </h4>
        <p className="mb-4 text-sm text-gray-700">
          Una vez registrados los avances, agrúpalos en planillas de pago para generar detalles de
          compensación y aplicar retenciones si corresponden.
        </p>
        <Link
          href="/obra/planillas"
          className="inline-block rounded-xl bg-[#4db8a8] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Planillas →
        </Link>
      </div>
    </div>
  );
}

