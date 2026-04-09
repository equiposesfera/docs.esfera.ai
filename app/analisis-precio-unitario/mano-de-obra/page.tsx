import Image from "next/image";
import Link from "next/link";

export default function ManoDeObraAnalisisPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Mano de obra
      </h2>
       <p className="text-base leading-7 text-gray-700 md:text-lg">
         Gestiona tu catálogo de mano de obra, desde trabajadores individuales hasta cuadrillas completas. Define costos, especialidades y rendimientos para usar en tus análisis de precio unitario.
       </p>

       {/* Video Container */}
       <div className="space-y-4">
         <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial: Mano de obra</h2>
           <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
             <iframe
               width="100%"
               height="100%"
               src="https://www.youtube.com/embed/JiF_20kk2eQ"
               title="MANO DE OBRA"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="w-full h-full"
             ></iframe>
           </div>
         </div>
       </div>

       {/* ¿Qué es mano de obra? */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">👷 ¿Qué es la mano de obra en APU?</h4>
        <p className="text-sm text-gray-700">
          La mano de obra representa el costo del personal necesario para ejecutar una actividad constructiva. 
          Puede ser un trabajador individual (oficial, peón, especialista) o una cuadrilla completa. 
          En el análisis de precio unitario, la mano de obra se mide generalmente en <strong>Horas Hombre (HH)</strong> 
          y se relaciona con el rendimiento de cada actividad.
        </p>
      </div>

      {/* Dos formas de gestionar */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Dos formas de agregar mano de obra
        </h3>
        <p className="text-base leading-7 text-gray-700">
          ESFERA te ofrece dos métodos para agregar registros de mano de obra a tu catálogo:
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/apu/mano-obra-opciones.png"
            alt="Opciones para crear mano de obra"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Opciones de creación */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Opción 1: Crear nuevo */}
        <Link href="/analisis-precio-unitario/mano-de-obra/crear-nuevo" className="group">
          <div className="h-full rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-2 inline-block rounded-full bg-[#4db8a8] px-3 py-1 text-xs font-semibold text-white">
              Más usado
            </div>
            <div className="mb-4 text-4xl">✏️</div>
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
              Crear nueva mano de obra
            </h4>
            <p className="mb-4 text-sm text-gray-700">
              Crea registros de mano de obra uno por uno usando el formulario guiado. Define especialidades, costos y cuadrillas.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Formulario intuitivo
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Definición de cuadrillas
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Control preciso de costos
              </div>
            </div>
            <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
              Ver más →
            </div>
          </div>
        </Link>

        {/* Opción 2: Importar CSV */}
        <Link href="/analisis-precio-unitario/mano-de-obra/importar-desde-csv" className="group">
          <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
            <div className="mb-4 text-4xl">📊</div>
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
              Importar desde CSV
            </h4>
            <p className="mb-4 text-sm text-gray-700">
              Importa múltiples registros de mano de obra simultáneamente. Perfecto para migrar catálogos o actualizar costos.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Importación masiva
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Plantilla CSV incluida
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Trabajo offline
              </div>
            </div>
            <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
              Ver más →
            </div>
          </div>
        </Link>
      </div>

      {/* Comparación de métodos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          ¿Cuál método elegir?
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Método</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Mejor para</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Ventajas</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Crear nuevo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Especialidades específicas, cuadrillas</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Definición detallada, validación inmediata</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">Importar CSV</td>
                <td className="px-4 py-3 text-gray-700">Migración de catálogos, actualización de costos</td>
                <td className="px-4 py-3 text-gray-700">Rapidez, procesamiento masivo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Componentes de mano de obra */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Componentes de mano de obra
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">👤</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Individual</h4>
            <p className="text-sm text-gray-700">
              Un solo tipo de trabajador con costo por hora (oficial, peón, especialista).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">👥</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Cuadrilla</h4>
            <p className="text-sm text-gray-700">
              Grupo de trabajadores que laboran juntos en una actividad específica.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">⚡</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Rendimiento</h4>
            <p className="text-sm text-gray-700">
              Factor que indica cuántas HH se requieren por unidad de ítem ejecutado.
            </p>
          </div>
        </div>
      </div>

      {/* Uso en APU */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Uso en análisis de precio unitario
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Una vez que hayas creado tus registros de mano de obra, podrás:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🔗</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Vincularlos a ítems</h4>
            <p className="text-sm text-gray-700">
              Agrégalos como componentes en tus ítems, especificando el rendimiento (HH por unidad).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">💰</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Calcular costos</h4>
            <p className="text-sm text-gray-700">
              El costo se calcula automáticamente: costo_hora × rendimiento.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">♻️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Reutilizar</h4>
            <p className="text-sm text-gray-700">
              Usa la misma mano de obra en múltiples ítems sin duplicar información.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">📊</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Analizar productividad</h4>
            <p className="text-sm text-gray-700">
              Compara rendimientos planificados vs. ejecutados en tus proyectos.
            </p>
          </div>
        </div>
      </div>

      {/* Mejores prácticas */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Incluye todas las cargas sociales y beneficios en el costo por hora</li>
          <li>Usa códigos consistentes que identifiquen especialidad y nivel</li>
          <li>Actualiza regularmente según convenios laborales vigentes</li>
          <li>Define cuadrillas para actividades que requieren trabajo en equipo</li>
          <li>Documenta los factores de rendimiento según tu experiencia</li>
          <li>Mantén categorías claras (oficial, peón, especializado, supervisor)</li>
        </ul>
      </div>
    </div>
  );
}

