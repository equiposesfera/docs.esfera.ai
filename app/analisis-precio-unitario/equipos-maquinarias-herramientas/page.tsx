import Image from "next/image";
import Link from "next/link";

export default function EquiposMaquinariasHerramientasPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Equipos, maquinarias y herramientas
      </h2>
       <p className="text-base leading-7 text-gray-700 md:text-lg">
         Gestiona tu catálogo de equipos, maquinarias y herramientas necesarios para ejecutar tus proyectos. Define costos horarios, especificaciones técnicas y disponibilidad para usar en tus análisis de precio unitario.
       </p>

       {/* Video Container */}
       <div className="space-y-4">
         <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial: Equipos, maquinarias y herramientas</h2>
           <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
             <iframe
               width="100%"
               height="100%"
               src="https://www.youtube.com/embed/kQwHqxePNIY"
               title="EQUIPOS, MAQUINARIAS Y HERRAMIENTAS"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="w-full h-full"
             ></iframe>
           </div>
         </div>
       </div>

       {/* ¿Qué son equipos, maquinarias y herramientas? */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">🚜 ¿Qué son equipos, maquinarias y herramientas en APU?</h4>
        <div className="space-y-2 text-sm text-gray-700">
          <p>
            Son los recursos físicos no consumibles necesarios para ejecutar actividades constructivas:
          </p>
          <p>
            <strong>Maquinaria pesada:</strong> Equipos de gran tamaño (excavadoras, motoniveladoras, grúas, compactadoras)
          </p>
          <p>
            <strong>Equipos:</strong> Recursos especializados de tamaño medio (mezcladoras, vibradores, compresores, soldadoras)
          </p>
          <p>
            <strong>Herramientas:</strong> Herramientas manuales o eléctricas menores (taladros, sierras, andamios)
          </p>
          <p className="mt-3">
            En el análisis de precio unitario, se miden generalmente en <strong>Horas Máquina (HM)</strong> y su costo incluye depreciación, mantenimiento, combustible y operador.
          </p>
        </div>
      </div>

      {/* Dos formas de gestionar */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Dos formas de agregar equipos
        </h3>
        <p className="text-base leading-7 text-gray-700">
          ESFERA te ofrece dos métodos para agregar equipos, maquinarias y herramientas a tu catálogo:
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/apu/equipos-maquinarias-herramientas-opciones.png"
            alt="Opciones para crear equipos, maquinarias y herramientas"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Opciones de creación */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Opción 1: Crear nuevo */}
        <Link href="/analisis-precio-unitario/equipos-maquinarias-herramientas/crear-nuevo" className="group">
          <div className="h-full rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-6 shadow-sm transition-all hover:shadow-md">
            <div className="mb-2 inline-block rounded-full bg-[#4db8a8] px-3 py-1 text-xs font-semibold text-white">
              Más usado
            </div>
            <div className="mb-4 text-4xl">✏️</div>
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
              Crear nuevo equipo
            </h4>
            <p className="mb-4 text-sm text-gray-700">
              Crea equipos uno por uno usando el formulario guiado. Define especificaciones técnicas, costos y disponibilidad.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Formulario detallado
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Cálculo de costos
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8]"></span>
                Especificaciones técnicas
              </div>
            </div>
            <div className="mt-4 text-sm font-semibold text-[#4db8a8] group-hover:underline">
              Ver más →
            </div>
          </div>
        </Link>

        {/* Opción 2: Importar CSV */}
        <Link href="/analisis-precio-unitario/equipos-maquinarias-herramientas/importar-desde-csv" className="group">
          <div className="h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#4db8a8] hover:shadow-md">
            <div className="mb-4 text-4xl">📊</div>
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]">
              Importar desde CSV
            </h4>
            <p className="mb-4 text-sm text-gray-700">
              Importa múltiples equipos simultáneamente. Perfecto para migrar el catálogo completo de tu parque de equipos.
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
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Equipos específicos, catálogos pequeños</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Desglose de costos, validación inmediata</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">Importar CSV</td>
                <td className="px-4 py-3 text-gray-700">Parque completo de equipos, actualización masiva</td>
                <td className="px-4 py-3 text-gray-700">Rapidez, procesamiento de muchos equipos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Tipos de recursos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Tipos de recursos
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🚜</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Maquinaria pesada</h4>
            <p className="mb-2 text-sm text-gray-700">
              Equipos de gran tamaño para movimiento de tierras, pavimentación y operaciones mayores.
            </p>
            <div className="text-xs text-gray-600">
              Ej: Excavadoras, motoniveladoras, rodillos compactadores, grúas
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🔧</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Equipos especializados</h4>
            <p className="mb-2 text-sm text-gray-700">
              Equipos de tamaño medio para operaciones específicas de construcción.
            </p>
            <div className="text-xs text-gray-600">
              Ej: Mezcladoras, vibradores, compresores, soldadoras, bombas
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🔨</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Herramientas</h4>
            <p className="mb-2 text-sm text-gray-700">
              Herramientas manuales o eléctricas menores de uso frecuente.
            </p>
            <div className="text-xs text-gray-600">
              Ej: Taladros, sierras, andamios, niveles, martillos neumáticos
            </div>
          </div>
        </div>
      </div>

      {/* Uso en APU */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Uso en análisis de precio unitario
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Una vez que hayas creado tus equipos, maquinarias y herramientas, podrás:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🔗</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Vincularlos a ítems</h4>
            <p className="text-sm text-gray-700">
              Agrégalos como componentes en tus ítems, especificando el rendimiento (HM por unidad).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">💰</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Calcular costos</h4>
            <p className="text-sm text-gray-700">
              El costo se calcula automáticamente: costo_hora × rendimiento en HM.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">📅</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Gestionar disponibilidad</h4>
            <p className="text-sm text-gray-700">
              Controla qué equipos están disponibles, propios o alquilados para cada proyecto.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">♻️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Reutilizar</h4>
            <p className="text-sm text-gray-700">
              Usa el mismo equipo en múltiples ítems sin duplicar información.
            </p>
          </div>
        </div>
      </div>

      {/* Componentes del costo */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Componentes del costo horario
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center">
            <div className="mb-2 text-2xl">📉</div>
            <h5 className="mb-1 text-xs font-semibold text-gray-500">DEPRECIACIÓN</h5>
            <p className="text-xs text-gray-700">Desgaste por uso</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center">
            <div className="mb-2 text-2xl">🔧</div>
            <h5 className="mb-1 text-xs font-semibold text-gray-500">MANTENIMIENTO</h5>
            <p className="text-xs text-gray-700">Preventivo + Correctivo</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center">
            <div className="mb-2 text-2xl">⛽</div>
            <h5 className="mb-1 text-xs font-semibold text-gray-500">COMBUSTIBLE</h5>
            <p className="text-xs text-gray-700">Consumo horario</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center">
            <div className="mb-2 text-2xl">👷</div>
            <h5 className="mb-1 text-xs font-semibold text-gray-500">OPERADOR</h5>
            <p className="text-xs text-gray-700">Si requiere operador</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center">
            <div className="mb-2 text-2xl">🛡️</div>
            <h5 className="mb-1 text-xs font-semibold text-gray-500">SEGURO</h5>
            <p className="text-xs text-gray-700">Póliza + Riesgos</p>
          </div>
        </div>
      </div>

      {/* Mejores prácticas */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Calcula el costo horario completo incluyendo todos los componentes (depreciación, mantenimiento, combustible, operador, seguro)</li>
          <li>Distingue entre equipos propios (con depreciación) y alquilados (tarifa de alquiler directa)</li>
          <li>Actualiza regularmente los costos de combustible y mantenimiento según mercado</li>
          <li>Documenta especificaciones técnicas para seleccionar el equipo adecuado por actividad</li>
          <li>Usa códigos que identifiquen tipo y capacidad para búsquedas rápidas</li>
          <li>Mantén registro de disponibilidad para evitar conflictos en programación</li>
          <li>Considera factores de rendimiento según condiciones de trabajo (altitud, clima, terreno)</li>
        </ul>
      </div>
    </div>
  );
}

