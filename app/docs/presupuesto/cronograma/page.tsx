import Link from "next/link";

export default function CronogramaPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Presupuesto</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Cronograma
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        El cronograma organiza en el tiempo la ejecución de cada etapa del presupuesto. ESFERA genera y exporta
        el cronograma físico-financiero a MS Project para obtener el diagrama de Gantt y la ruta crítica del proyecto.
      </p>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📅 ¿Qué es el Cronograma en ESFERA?</h4>
        <p className="mb-3 text-sm text-gray-700">
          El cronograma es la planificación temporal del proyecto: cuándo empieza y cuándo termina cada etapa
          o partida de trabajo. Se construye a partir del presupuesto elaborado y los avances registrados en obra.
        </p>
        <p className="text-sm text-gray-700">
          Con el presupuesto y cronograma elaborados, ESFERA exporta toda la información a MS Project donde
          se procesa el diagrama de Gantt, se genera la ruta crítica del proyecto y se obtienen los
          cronogramas físicos y financieros.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Cómo se genera el cronograma
        </h3>
        <div className="space-y-4">
          {[
            { title: "Completa el cómputo y presupuesto", desc: "El cronograma se basa en los ítems, etapas y cantidades ya definidos en el presupuesto." },
            { title: "Define duraciones por etapa", desc: "Asigna la duración estimada (días, semanas) de cada partida o etapa del presupuesto." },
            { title: "Establece dependencias", desc: "Define qué etapas deben completarse antes de que otras puedan comenzar (precedencias)." },
            { title: "Revisa el cronograma generado", desc: "ESFERA muestra la distribución temporal de las etapas según las duraciones y dependencias ingresadas." },
            { title: "Exporta a MS Project", desc: "Con un clic exporta el presupuesto completo con avances y cronograma a MS Project para el análisis de Gantt y ruta crítica." },
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
          Exportación a MS Project
        </h3>
        <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
          <h4 className="mb-3 font-semibold text-[#2d2d2d]">📊 ¿Qué incluye la exportación?</h4>
          <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
            <li>Todas las partidas y etapas del presupuesto con sus duraciones</li>
            <li>Los avances registrados por planilla para mostrar el progreso real vs. planificado</li>
            <li>Datos necesarios para generar el diagrama de Gantt automáticamente</li>
            <li>Información para calcular la ruta crítica del proyecto</li>
            <li>Base para elaborar cronogramas físicos y financieros</li>
          </ul>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
            <div className="mb-3 text-4xl">📊</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Diagrama de Gantt</h4>
            <p className="text-sm text-gray-700">Visualización temporal de todas las tareas del proyecto en barras horizontales.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
            <div className="mb-3 text-4xl">🔗</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Ruta crítica</h4>
            <p className="text-sm text-gray-700">Identificación de las tareas que determinan la duración mínima del proyecto.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5 text-center">
            <div className="mb-3 text-4xl">💰</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Cronograma financiero</h4>
            <p className="text-sm text-gray-700">Distribución de los costos en el tiempo para la planificación del flujo de caja.</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Requisitos previos</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>El presupuesto debe estar consolidado antes de definir el cronograma</li>
          <li>Necesitas MS Project instalado para abrir el archivo exportado</li>
          <li>Los avances registrados en planillas se incluyen automáticamente en la exportación</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Define duraciones realistas basadas en la experiencia del equipo y el rendimiento de cada partida</li>
          <li>Establece correctamente las dependencias para que la ruta crítica sea confiable</li>
          <li>Actualiza el cronograma cuando haya cambios significativos en el alcance del proyecto</li>
          <li>Compara el avance real vs. el planificado periódicamente para detectar retrasos a tiempo</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/docs/presupuesto/presupuesto"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
        >
          ← Ver Presupuesto
        </Link>
        <Link
          href="/docs/presupuesto/ejecucion"
          className="rounded-xl bg-[#4db8a8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Ejecución →
        </Link>
      </div>
    </div>
  );
}
