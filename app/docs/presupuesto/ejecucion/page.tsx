import Link from "next/link";

export default function EjecucionPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Presupuesto</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Ejecución
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        El módulo de Ejecución te permite monitorear en tiempo real el avance del proyecto comparado con
        el presupuesto. Visualiza qué se ejecutó, cuánto costó y qué desviaciones existen respecto a lo planificado.
      </p>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📈 ¿Qué es la Ejecución en ESFERA?</h4>
        <p className="mb-3 text-sm text-gray-700">
          La ejecución es el seguimiento en tiempo real del estado del proyecto. Compara lo planificado
          en el presupuesto con lo que realmente se ha ejecutado, mostrando el avance físico y financiero
          de cada partida e ítem del proyecto.
        </p>
        <p className="text-sm text-gray-700">
          Con inteligencia artificial integrada, ESFERA muestra al usuario un panorama completo de la obra
          sin necesidad de estar físicamente en ella. Puedes hacer preguntas en lenguaje natural como:
          ¿Cuánto llevo gastado este mes? ¿Cuáles son los ítems con más desviación?
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Indicadores de ejecución
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-3xl">📊</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Avance físico</h4>
            <p className="text-sm text-gray-700">
              Porcentaje de trabajo completado por partida e ítem respecto a las cantidades presupuestadas.
              Basado en los avances registrados diariamente por el equipo de obra.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-3xl">💰</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Avance financiero</h4>
            <p className="text-sm text-gray-700">
              Costo incurrido vs. costo presupuestado. Muestra si el proyecto está dentro del presupuesto
              o si existen sobrecotos en alguna partida.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-3xl">⚠️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Desviaciones</h4>
            <p className="text-sm text-gray-700">
              Diferencia entre lo planificado y lo ejecutado. ESFERA alerta cuando se generan cotizaciones
              o compras por encima del presupuesto.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-3xl">🔔</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Alertas automáticas</h4>
            <p className="text-sm text-gray-700">
              El sistema envía alertas tempranas: retrasos en entregas, cotizaciones sobre presupuesto,
              material en tránsito pendiente y otras situaciones críticas del proyecto.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Consultas con Inteligencia Artificial
        </h3>
        <p className="text-base leading-7 text-gray-700">
          El módulo de ejecución incluye un asistente con inteligencia artificial que permite hacer preguntas
          en lenguaje natural sobre el estado del proyecto:
        </p>
        <div className="space-y-3">
          {[
            "¿Cuáles son los productos más comprados este mes?",
            "¿Cuáles son los cinco principales proveedores?",
            "¿Cuál es el mes con más compras?",
            "¿Qué partidas tienen mayor desviación respecto al presupuesto?",
            "¿Cuánto material queda pendiente de entrega en almacén?",
          ].map((q) => (
            <div key={q} className="flex items-start gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4db8a8] text-xs font-bold text-white flex-shrink-0 mt-0.5">
                ?
              </span>
              <p className="text-sm text-gray-700 italic">&ldquo;{q}&rdquo;</p>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <h4 className="mb-2 font-semibold text-[#2d2d2d]">Resultados en tablas y gráficos</h4>
          <p className="text-sm text-gray-700">
            Las respuestas se presentan en tablas organizadas y pueden transformarse en gráficos para
            visualizar tendencias y patrones de forma clara. Esto facilita la toma de decisiones gerenciales
            con información actualizada al momento.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Relación con otros módulos
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
            <div className="mb-3 text-3xl">📋</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Avances de Obra</h4>
            <p className="text-sm text-gray-700">Los avances diarios alimentan los indicadores de ejecución.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
            <div className="mb-3 text-3xl">🛒</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Compras</h4>
            <p className="text-sm text-gray-700">Los costos de compras se comparan contra el presupuesto de materiales.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
            <div className="mb-3 text-3xl">🏪</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Almacén</h4>
            <p className="text-sm text-gray-700">El stock y salidas de almacén impactan en el avance físico de cada ítem.</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Registra avances diariamente para mantener los indicadores actualizados</li>
          <li>Revisa las desviaciones semanalmente para tomar acciones correctivas a tiempo</li>
          <li>Usa el asistente de IA para obtener resúmenes rápidos sin necesidad de generar reportes manuales</li>
          <li>Configura alertas para los encargados de área según los umbrales que definas</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/docs/presupuesto/cronograma"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
        >
          ← Ver Cronograma
        </Link>
        <Link
          href="/docs/obra/avances"
          className="rounded-xl bg-[#4db8a8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Avances de Obra →
        </Link>
      </div>
    </div>
  );
}
