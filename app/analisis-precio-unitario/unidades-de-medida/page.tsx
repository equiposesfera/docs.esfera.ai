import Image from "next/image";

export default function UnidadesDeMedidaPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Unidades de medida
      </h2>
       <p className="text-base leading-7 text-gray-700 md:text-lg">
         Gestiona las unidades de medida para ítems, materiales, mano de obra y equipos. Define y personaliza las unidades que corresponden a tu metodología de trabajo.
       </p>

       {/* Video Container */}
       <div className="space-y-4">
         <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial: Unidades de medida</h2>
           <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
             <iframe
               width="100%"
               height="100%"
               src="https://www.youtube.com/embed/TrJwHe5rDso"
               title="UNIDADES DE MEDIDA"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="w-full h-full"
             ></iframe>
           </div>
         </div>
       </div>

       {/* ¿Qué son unidades de medida? */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📏 ¿Qué son las unidades de medida?</h4>
        <p className="text-sm text-gray-700">
          Las unidades de medida son los estándares utilizados para cuantificar y facturar el trabajo en construcción. 
          Cada ítem debe tener una unidad de medida específica que determine cómo se mide y se paga el trabajo realizado.
        </p>
      </div>

      {/* Imagen principal */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/apu/unidades-medida.png"
          alt="Gestión de unidades de medida"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      {/* Operaciones disponibles */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Operaciones disponibles
        </h3>
        <p className="text-base leading-7 text-gray-700">
          En la sección de unidades de medida puedes realizar tres operaciones principales:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-5">
            <div className="mb-3 text-2xl">➕</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Crear</h4>
            <p className="text-sm text-gray-700">
              Crea nuevas unidades de medida personalizadas según tus necesidades específicas del proyecto.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">✏️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Modificar</h4>
            <p className="text-sm text-gray-700">
              Edita unidades existentes para ajustar su descripción, símbolo o equivalencias con otras unidades.
            </p>
          </div>
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-5">
            <div className="mb-3 text-2xl">🗑️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Eliminar</h4>
            <p className="text-sm text-gray-700">
              Suprime unidades que ya no uses (solo si no están vinculadas a ítems o insumos).
            </p>
          </div>
        </div>
      </div>

      {/* Unidades estándar */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Unidades estándar en construcción
        </h3>
        <p className="text-base leading-7 text-gray-700">
          ESFERA incluye un conjunto de unidades estándar predefinidas. Aquí están las más comunes:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Unidad</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Símbolo</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Tipo</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Uso común</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Metro</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">m</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Longitud</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Muros, tuberías, cables</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Metro cuadrado</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">m²</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Área</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Enlucido, pintura, pisos</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Metro cúbico</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">m³</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Volumen</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Concreto, excavación, relleno</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Kilogramo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">kg</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Peso</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Acero, materiales diversos</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Tonelada</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">ton</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Peso</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Agregados, equipos pesados</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Unidad</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">und</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Cantidad</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Puertas, ventanas, elementos</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Horas Hombre</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">HH</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Mano de obra</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Todas las actividades</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Horas Máquina</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">HM</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Maquinaria</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Equipos y maquinaria</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Global</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">glb</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Lump sum</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Servicios, suministros completos</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">Juego</td>
                <td className="px-4 py-3 text-gray-700">jgo</td>
                <td className="px-4 py-3 text-gray-700">Cantidad</td>
                <td className="px-4 py-3 text-gray-700">Cerrajería, sets completos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Unidades por categoría de insumo */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Unidades según categoría de insumo
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Diferentes tipos de insumos utilizan unidades específicas:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📦</span>
              Materiales y servicios
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Cemento, cal, yeso:</strong> bolsa, kg, ton</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Agregados:</strong> m³, ton</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Acero:</strong> kg, ton</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Tuberías, cables:</strong> m, und</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Pinturas, adhesivos:</strong> gal, litro</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Servicios:</strong> glb, und, día</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">👷</span>
              Mano de obra
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Todas las especialidades:</strong> HH (Horas Hombre)</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span>Se mide en horas de trabajo de una persona</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span>El rendimiento define cuántas HH se necesitan por unidad de ítem</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">🚜</span>
              Equipos y maquinarias
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Todos los equipos:</strong> HM (Horas Máquina)</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span>Se mide en horas de operación del equipo</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span>El rendimiento define cuántas HM por unidad de íitem</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-3 flex items-center gap-2 font-semibold text-[#2d2d2d]">
              <span className="text-xl">📏</span>
              Ítems
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Vaciados, excavación:</strong> m³</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Estructuras, acabados:</strong> m²</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Puertas, elementos:</strong> und</span>
              </div>
              <div className="flex gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#4db8a8] flex-shrink-0 mt-1.5"></span>
                <span><strong>Trabajos diversos:</strong> glb</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crear unidades personalizadas */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Crear unidades personalizadas
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Si tus proyectos requieren unidades especiales, puedes crear unidades personalizadas en ESFERA:
        </p>
        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <h4 className="mb-3 font-semibold text-[#2d2d2d]">Pasos para crear una unidad personalizada</h4>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                1
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Accede a "Unidades de medida"</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                2
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Haz clic en "Crear nueva unidad"</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                3
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Completa el nombre (ej: "Pie lineal")</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                4
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Define el símbolo (ej: "pl")</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                5
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Especifica equivalencias con otras unidades (opcional)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white flex-shrink-0">
                6
              </span>
              <div>
                <p className="text-sm font-medium text-gray-700">Guarda y la unidad estará disponible inmediatamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Información de unidades */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Información de cada unidad
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Al crear o modificar una unidad, debes considerar:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">📝 Nombre</h4>
            <p className="text-sm text-gray-700">
              Nombre descriptivo de la unidad (ej: "Metro cúbico", "Hora Hombre", "Galón")
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">🔤 Símbolo</h4>
            <p className="text-sm text-gray-700">
              Abreviatura estándar (ej: "m³", "HH", "gal") - esto aparecerá en documentos
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">🔄 Equivalencias</h4>
            <p className="text-sm text-gray-700">
              Relaciones con otras unidades (ej: 1 ton = 1000 kg) para conversiones automáticas
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">📊 Categoría</h4>
            <p className="text-sm text-gray-700">
              Tipo de medida (longitud, área, volumen, peso, cantidad, tiempo)
            </p>
          </div>
        </div>
      </div>

      {/* Restricciones */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Restricciones importantes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>No puedes eliminar unidades que estén siendo usadas en ítems o insumos activos</li>
          <li>Las unidades estándar (m, m², m³, kg, HH, HM, etc.) no se pueden eliminar</li>
          <li>Los símbolos deben ser únicos dentro del sistema</li>
          <li>Si necesitas cambiar una unidad en uso, debes crear una nueva y migrar los ítems manualmente</li>
          <li>Las equivalencias deben ser precisas para evitar errores en cálculos</li>
        </ul>
      </div>

      {/* Mejores prácticas */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Mejores prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Usa unidades estándar cuando sea posible para evitar confusiones</li>
          <li>Crea unidades personalizadas solo cuando sea realmente necesario</li>
          <li>Documenta las equivalencias de tus unidades personalizadas</li>
          <li>Mantén consistencia: si usas "m" no uses "metro" en otros lugares</li>
          <li>Revisa regularmente tu catálogo de unidades y elimina las que no uses</li>
          <li>Comunica a tu equipo qué unidades están disponibles para cada tipo de ítem</li>
          <li>Considera los estándares de tu región o industria al crear unidades nuevas</li>
        </ul>
      </div>

      {/* Conversiones comunes */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Tabla de conversiones comunes
        </h3>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">De</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">A</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Factor</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Kilogramo (kg)</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Tonelada (ton)</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-gray-700">÷ 1000</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Metro (m)</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Metro cuadrado (m²)</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-gray-700">× ancho</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Metro (m)</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Metro cúbico (m³)</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-gray-700">× ancho × alto</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Galón</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Litro</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-gray-700">× 3.785</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Libra (lb)</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Kilogramo (kg)</td>
                <td className="border-b border-gray-100 px-4 py-3 font-mono text-gray-700">× 0.454</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700">Pie cúbico (ft³)</td>
                <td className="px-4 py-3 text-gray-700">Metro cúbico (m³)</td>
                <td className="px-4 py-3 font-mono text-gray-700">× 0.0283</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
