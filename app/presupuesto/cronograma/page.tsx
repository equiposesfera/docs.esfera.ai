import Link from "next/link";

export default function CronogramaPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Presupuesto</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Oct 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Cronograma
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        El cronograma organiza en el tiempo la ejecución de cada etapa del presupuesto. ESFERA incluye un módulo
        propio con diagrama de Gantt, ruta crítica, línea base, valor ganado y simulación de recursos, y exporta el
        cronograma a Excel, PDF, Gantt A2 y MS Project.
      </p>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📅 ¿Qué es el Cronograma en ESFERA?</h4>
        <p className="mb-3 text-sm text-gray-700">
          El cronograma es la planificación temporal del proyecto: cuándo empieza y cuándo termina cada etapa
          o partida de trabajo. Se construye a partir del presupuesto elaborado y los avances registrados en obra.
        </p>
        <p className="text-sm text-gray-700">
          Con el presupuesto y el cronograma elaborados, ESFERA calcula el Gantt y la ruta crítica dentro del
          propio módulo, y permite exportar la información a otros formatos para compartirla o seguir
          trabajándola en MS Project.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Vistas del módulo
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: "Cronograma", desc: "Tabla jerárquica con diagrama de Gantt propio: barras, flechas de dependencia, ruta crítica y fecha de corte." },
            { title: "Financiero", desc: "Horas y costo de mano de obra y de materiales distribuidos por día, semana o mes, con resumen de valor ganado. También puede superponerse al Gantt." },
            { title: "Valor ganado", desc: "Curvas PV, EV y AC e índices SPI y CPI a lo largo del tiempo, además del gráfico de índice de variación." },
            { title: "Recursos y Tareas", desc: "Requerimientos de materiales, mano de obra y maquinarias por período, con disponibilidad planificada, y listado de tareas con sus componentes." },
          ].map((v) => (
            <div key={v.title} className="rounded-2xl border border-gray-200 bg-white p-5">
              <h4 className="mb-2 font-semibold text-[#2d2d2d]">{v.title}</h4>
              <p className="text-sm text-gray-700">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Planificación automática y manual
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Modo automático</h4>
            <p className="text-sm text-gray-700">
              ESFERA calcula las fechas con el método de la ruta crítica (CPM) a partir de la mano de obra, las
              cuadrillas y las predecesoras. Las barras no se arrastran: si cambias la duración de un ítem,
              ESFERA ajusta la cuadrilla y reprograma el resto.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Modo manual</h4>
            <p className="text-sm text-gray-700">
              Puedes editar duración, inicio y fin, o arrastrar las barras. Los cambios sobre una etapa se guardan
              en esa etapa, y las predecesoras empujan la fecha de inicio para respetar la restricción.
            </p>
          </div>
        </div>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li><strong>Calendario laboral:</strong> configura semanas de 5 o 6 días, feriados, horas por día y duración en días hábiles o calendario.</li>
          <li><strong>Cuadrilla por defecto y tope de duración:</strong> define la cuadrilla para mano de obra sin asignación explícita y, opcionalmente, un máximo de días por tarea.</li>
          <li><strong>Calcular duraciones:</strong> recalcula las duraciones según los recursos asignados.</li>
          <li><strong>Resetear a cero:</strong> limpia fechas, duraciones y predecesoras para empezar de nuevo.</li>
          <li><strong>Deshacer y rehacer</strong> sobre las ediciones del cronograma.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Duración y dependencias
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Duración por etapas</h4>
            <p className="text-sm text-gray-700">
              La duración sale de la mano de obra del ítem: dentro de una etapa los recursos trabajan en
              simultáneo (manda el que más horas necesita) y las etapas se suman. Un ítem repartido en varias
              etapas se dibuja como una barra segmentada; doble clic en la duración muestra el detalle por componente.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Dependencias estructuradas</h4>
            <p className="text-sm text-gray-700">
              Cada ítem o etapa admite una o varias predecesoras con relaciones fin-inicio (FS), inicio-inicio (SS),
              fin-fin (FF) o inicio-fin (SF) y un desfase en días o en porcentaje. Se editan escribiendo en la celda
              o con doble clic en el editor; la columna Sucesor se completa sola.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
          <p className="text-sm text-gray-700">
            ESFERA rechaza dependencias circulares y un ítem no puede ser su propia predecesora. Al editar en lote,
            revisa las predecesoras antes de guardar: una referencia incompleta impide calcular fechas coherentes.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Agrupaciones y orden
        </h3>
        <p className="text-sm text-gray-700">
          Organiza las filas por Categoría, Etapas o Grupos, o combina dos niveles: Etapa &amp; Categoría,
          Etapas &amp; Grupos, Grupos &amp; Etapas y Categoría &amp; Etapa. Puedes reordenar grupos e ítems arrastrándolos,
          definir el orden maestro desde <strong>Ordenar</strong>, ordenar por fecha de inicio y colapsar grupos.
          La agrupación, el orden y las columnas visibles (con sus anchos y filtros) se guardan como preferencias del usuario y del proyecto.
        </p>
        <p className="text-sm text-gray-700">
          Las columnas disponibles son Item, Grupo, Etapa, Categoría, Duración, Inicio, Final, Cantidad, Costo, Estado,
          MO, Predecesor, Sucesor, Esp. %, Holgura y Delta.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Ruta crítica, línea base y fecha de corte
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Ruta crítica</h4>
            <p className="text-sm text-gray-700">
              Resalta en rojo las tareas críticas y muestra la holgura. Se calcula para todo el proyecto o por etapa,
              por categoría o por etapa y categoría.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Línea base</h4>
            <p className="text-sm text-gray-700">
              Guarda una foto del plan para restaurarla o compararla. La columna Delta muestra la desviación de
              cada tarea respecto de la línea base.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Fecha de corte</h4>
            <p className="text-sm text-gray-700">
              Marca una línea en el Gantt y calcula el avance esperado (Esp. %), la salud del cronograma y el valor ganado a esa fecha.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Recursos y escenarios
        </h3>
        <p className="text-sm text-gray-700">
          Desde la columna MO asignas cuadrillas por ítem, componente y etapa. Los recursos tienen disponibilidad
          mensual configurable, y ESFERA avisa cuando la mano de obra está sobreasignada. Antes de decidir, puedes
          simular tres escenarios sin guardar cambios:
        </p>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li><strong>Actual:</strong> las cuadrillas asignadas hoy.</li>
          <li><strong>Recursos disponibles:</strong> limita las cuadrillas a la disponibilidad configurada.</li>
          <li><strong>Recursos ideales:</strong> aumenta cuadrillas donde eso acorta el proyecto; puedes aplicar las recomendaciones para guardarlas.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Asistente de IA
        </h3>
        <p className="text-sm text-gray-700">
          El asistente lee el cronograma y propone predecesoras, duraciones, recursos, fechas y cambios de orden.
          Cada propuesta se valida (ítems existentes, sin ciclos, fechas válidas) y no se aplica hasta que la
          confirmes. También puedes usar <strong>Proponer predecesoras</strong> para que ESFERA sugiera la secuencia
          constructiva sin tocar las existentes.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Cómo se genera el cronograma
        </h3>
        <div className="space-y-4">
          {[
            { title: "Completa el cómputo y presupuesto", desc: "El cronograma se basa en los ítems, etapas, cantidades y mano de obra ya definidos en el presupuesto." },
            { title: "Configura el proyecto", desc: "Define la fecha de inicio, las horas por día, el calendario laboral y el modo de planificación." },
            { title: "Establece dependencias", desc: "Define qué ítems o etapas deben completarse antes de que otros puedan comenzar, o pide propuestas al asistente." },
            { title: "Revisa y ajusta", desc: "Analiza la ruta crítica, asigna recursos, prueba escenarios y reordena las agrupaciones." },
            { title: "Guarda la línea base y da seguimiento", desc: "Fija una fecha de corte y compara el avance real con el planificado." },
            { title: "Exporta", desc: "Descarga el cronograma a Excel, PDF, Gantt A2 o MS Project." },
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
          Exportación y versiones
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">📗 Exportar a Excel</h4>
            <p className="text-sm text-gray-700">Planilla con el cronograma del proyecto.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">📄 Exportar a PDF</h4>
            <p className="text-sm text-gray-700">Reporte del cronograma listo para compartir.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">🗺️ Gantt A2 (PDF)</h4>
            <p className="text-sm text-gray-700">
              Dibuja en vectorial la tabla de tareas y etapas junto con las barras del Gantt (avance, ruta crítica,
              dependencias y fecha de corte) en hojas A2 apaisadas, paginadas por filas, para imprimir en plotter.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">📊 Exportar a MS Project</h4>
            <p className="text-sm text-gray-700">Archivo con partidas, etapas, duraciones, dependencias y avances para el análisis de Gantt y ruta crítica en MS Project.</p>
          </div>
        </div>
        <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
          <h4 className="mb-2 font-semibold text-[#2d2d2d]">💾 Versiones del plan</h4>
          <p className="text-sm text-gray-700">
            <strong>Exportar versión</strong> descarga el plan actual como archivo JSON y <strong>Cargar versión</strong> lo
            vuelve a aplicar al proyecto, reemplazando la planificación actual. Sirve para probar alternativas y volver atrás.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Requisitos previos</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>El presupuesto debe estar consolidado antes de definir el cronograma</li>
          <li>Necesitas MS Project instalado solo si vas a abrir el archivo exportado a ese formato</li>
          <li>Los avances registrados en planillas se incluyen automáticamente en la exportación</li>
          <li>Si el módulo no recibe los datos del proyecto, muestra un aviso de error de carga; usa <strong>Actualizar</strong> para reintentar</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Define duraciones realistas basadas en la experiencia del equipo y el rendimiento de cada partida</li>
          <li>Establece correctamente las dependencias para que la ruta crítica sea confiable</li>
          <li>Guarda una línea base al aprobar el plan y compárala periódicamente</li>
          <li>Prueba los escenarios de recursos antes de cambiar cuadrillas</li>
          <li>Actualiza el cronograma cuando haya cambios significativos en el alcance del proyecto</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/presupuesto/presupuesto"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
        >
          ← Ver Presupuesto
        </Link>
        <Link
          href="/presupuesto/ejecucion"
          className="rounded-xl bg-[#4db8a8] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#3da799]"
        >
          Ver Ejecución →
        </Link>
      </div>
    </div>
  );
}
