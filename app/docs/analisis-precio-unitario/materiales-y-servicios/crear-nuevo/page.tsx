import Image from "next/image";

export default function CrearNuevoMaterialServicioPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Crear nuevo material o servicio
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Crea materiales y servicios personalizados para usar en tus análisis de precio unitario. Define sus características, precios y proveedores de forma individual.
      </p>

      {/* Visualización de la opción */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Acceder a la opción
        </h3>
        <p className="text-base leading-7 text-gray-700">
          En el módulo de Análisis de Precio Unitario, accede a la sección de Materiales y Servicios y selecciona la opción de crear un nuevo registro.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/apu/opcion-crear-nuevo-material-servicio.png"
            alt="Opción de crear nuevo material o servicio"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Ventajas */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">✨ Ventajas de crear desde el formulario</h4>
        <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
          <li><strong>Control preciso:</strong> Define cada detalle del material o servicio</li>
          <li><strong>Validación inmediata:</strong> El sistema valida los datos en tiempo real</li>
          <li><strong>Interfaz intuitiva:</strong> Formulario guiado paso a paso</li>
          <li><strong>Gestión de proveedores:</strong> Vincula proveedores directamente</li>
          <li><strong>Actualización ágil:</strong> Modifica precios y datos fácilmente</li>
        </ul>
      </div>

      {/* Diferencia entre material y servicio */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Materiales vs Servicios
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
            <h4 className="mb-3 flex items-center gap-2 text-xl font-semibold text-[#2d2d2d]">
              <span className="text-2xl">📦</span>
              Materiales
            </h4>
            <p className="mb-4 text-sm text-gray-700">
              Insumos físicos que se consumen en la ejecución de una actividad.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="font-semibold">Ejemplos:</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Cemento (bolsa)</li>
                <li>Arena (m³)</li>
                <li>Acero de refuerzo (kg)</li>
                <li>Ladrillo (unidad)</li>
                <li>Pintura (galón)</li>
                <li>Tubería PVC (m)</li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-white p-6">
            <h4 className="mb-3 flex items-center gap-2 text-xl font-semibold text-[#2d2d2d]">
              <span className="text-2xl">🔧</span>
              Servicios
            </h4>
            <p className="mb-4 text-sm text-gray-700">
              Actividades o trabajos contratados a terceros.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="font-semibold">Ejemplos:</p>
              <ul className="list-inside list-disc space-y-1">
                <li>Transporte de materiales</li>
                <li>Alquiler de equipos</li>
                <li>Ensayos de laboratorio</li>
                <li>Topografía</li>
                <li>Subcontratos</li>
                <li>Servicios profesionales</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Datos requeridos */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Información requerida
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Para crear un material o servicio, necesitas proporcionar los siguientes datos:
        </p>
        
        <div className="space-y-3">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <h4 className="mb-3 font-semibold text-[#2d2d2d]">1️⃣ Información básica</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li><strong>Código:</strong> Identificador único (ej: MAT-001, SERV-001)</li>
              <li><strong>Descripción:</strong> Nombre detallado del material o servicio</li>
              <li><strong>Tipo:</strong> Material o Servicio</li>
              <li><strong>Categoría:</strong> Agrupación (Cementicios, Agregados, Transportes, etc.)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <h4 className="mb-3 font-semibold text-[#2d2d2d]">2️⃣ Unidad de medida</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li><strong>Unidad:</strong> kg, m³, m², unidad, hora, servicio, etc.</li>
              <li>Debe ser consistente con el uso en los ítems</li>
              <li>Selecciona de las unidades predefinidas en el sistema</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <h4 className="mb-3 font-semibold text-[#2d2d2d]">3️⃣ Precio</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li><strong>Precio unitario:</strong> Costo por unidad de medida</li>
              <li><strong>Moneda:</strong> La moneda de tu proyecto</li>
              <li>Puede incluir o excluir impuestos según configuración</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <h4 className="mb-3 font-semibold text-[#2d2d2d]">4️⃣ Información adicional (opcional)</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li><strong>Proveedor:</strong> Empresa o persona que suministra</li>
              <li><strong>Marca/Especificación:</strong> Detalles técnicos</li>
              <li><strong>Observaciones:</strong> Notas adicionales</li>
              <li><strong>Precio de referencia:</strong> Para comparación</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Proceso de creación */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Proceso de creación
        </h3>
        <div className="space-y-3">
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">1</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Accede al formulario</h4>
              <p className="text-sm text-gray-700">Haz clic en "Crear nuevo" en la sección de Materiales y Servicios</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">2</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Selecciona el tipo</h4>
              <p className="text-sm text-gray-700">Elige si es un Material o un Servicio</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">3</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Completa los datos</h4>
              <p className="text-sm text-gray-700">Llena todos los campos obligatorios del formulario</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">4</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Guarda el registro</h4>
              <p className="text-sm text-gray-700">El material o servicio estará disponible para usar en tus ítems</p>
            </div>
          </div>
        </div>
      </div>

      {/* Buenas prácticas */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Usa códigos consistentes y descriptivos (ej: CEM-001 para cementos, ARE-001 para arenas)</li>
          <li>Describe claramente las especificaciones técnicas en la descripción</li>
          <li>Mantén los precios actualizados según el mercado</li>
          <li>Vincula proveedores para facilitar las compras futuras</li>
          <li>Agrupa materiales similares en las mismas categorías</li>
          <li>Verifica que la unidad de medida sea la correcta antes de guardar</li>
        </ul>
      </div>

      {/* Uso en ítems */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">🔗 Uso en ítems</h4>
        <p className="mb-2 text-sm text-gray-700">
          Una vez creado, el material o servicio estará disponible para:
        </p>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Agregarlo como componente en tus análisis de precio unitario</li>
          <li>Usarlo en múltiples ítems sin duplicar la información</li>
          <li>Actualizar su precio y que se refleje automáticamente en todos los ítems que lo usan</li>
          <li>Generar solicitudes de compra basadas en las cantidades del presupuesto</li>
        </ul>
      </div>
    </div>
  );
}
