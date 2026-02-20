import Image from "next/image";

export default function ImportarDesdeCsvPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Análisis de precio unitario</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Importar desde CSV
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Importa múltiples materiales y servicios simultáneamente usando un archivo CSV. Ideal para migrar catálogos completos o cargar grandes volúmenes de datos de forma eficiente.
      </p>

      {/* Visualización de la opción */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Acceder a la opción
        </h3>
        <p className="text-base leading-7 text-gray-700">
          En el módulo de Análisis de Precio Unitario, accede a Materiales y Servicios y selecciona la opción de importar desde CSV.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/apu/opcion-importar-materiales-servicios-csv.png"
            alt="Opción de importar materiales y servicios desde CSV"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Ventajas */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">✨ Ventajas de importar desde CSV</h4>
        <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
          <li><strong>Importación masiva:</strong> Carga cientos o miles de registros en segundos</li>
          <li><strong>Formato universal:</strong> CSV es compatible con Excel, Google Sheets y otras herramientas</li>
          <li><strong>Migración fácil:</strong> Trae tus catálogos de otros sistemas</li>
          <li><strong>Trabajo offline:</strong> Prepara tu archivo sin necesidad de estar conectado</li>
          <li><strong>Revisión previa:</strong> Valida datos antes de la importación definitiva</li>
          <li><strong>Actualización masiva:</strong> Modifica precios de múltiples ítems a la vez</li>
        </ul>
      </div>

      {/* Proceso de importación */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Proceso de importación
        </h3>
        <div className="space-y-3">
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">1</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Descarga la plantilla CSV</h4>
              <p className="text-sm text-gray-700">Obtén la plantilla desde el módulo de Materiales y Servicios</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">2</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Completa los datos</h4>
              <p className="text-sm text-gray-700">Llena la plantilla con tu información siguiendo el formato establecido</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">3</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Guarda como CSV</h4>
              <p className="text-sm text-gray-700">Asegúrate de guardar el archivo en formato .csv (UTF-8)</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">4</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Sube el archivo</h4>
              <p className="text-sm text-gray-700">Selecciona "Importar CSV" y carga tu archivo</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-sm font-bold text-white">5</span>
            <div>
              <h4 className="font-semibold text-[#2d2d2d]">Revisa y confirma</h4>
              <p className="text-sm text-gray-700">Verifica los datos importados y confirma la operación</p>
            </div>
          </div>
        </div>
      </div>

      {/* Estructura de la plantilla */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Estructura de la plantilla CSV
        </h3>
        <p className="text-base leading-7 text-gray-700">
          ESFERA proporciona una plantilla CSV con el formato correcto. Descárgala y complétala con tu información.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/apu/plantilla-importar-materiales-servicios-csv.png"
            alt="Plantilla CSV para importar materiales y servicios"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
        <p className="text-base leading-7 text-gray-700">
          La plantilla contiene las siguientes columnas:
        </p>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Columna</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Descripción</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Obligatorio</th>
                <th className="border-b border-gray-200 px-4 py-3 text-left font-semibold text-[#2d2d2d]">Ejemplo</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Código</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Identificador único</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">CEM-001</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Descripción</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Nombre del material/servicio</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Cemento Portland Tipo I</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Tipo</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Material o Servicio</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Material</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Unidad</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Unidad de medida</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Bolsa</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Precio Unitario</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Costo por unidad</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Sí</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">25.50</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Categoría</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Agrupación</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">No</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Cementicios</td>
              </tr>
              <tr>
                <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">Proveedor</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Empresa suministradora</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">No</td>
                <td className="border-b border-gray-100 px-4 py-3 text-gray-700">Distribuidora ABC</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-700">Observaciones</td>
                <td className="px-4 py-3 text-gray-700">Notas adicionales</td>
                <td className="px-4 py-3 text-gray-700">No</td>
                <td className="px-4 py-3 text-gray-700">Bolsa de 42.5 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Formato del archivo */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Formato del archivo CSV
        </h3>
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h4 className="mb-3 font-semibold text-[#2d2d2d]">Consideraciones importantes:</h4>
          <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
            <li><strong>Separador:</strong> Usa coma (,) como separador de columnas</li>
            <li><strong>Codificación:</strong> Guarda el archivo en UTF-8 para evitar problemas con caracteres especiales</li>
            <li><strong>Decimales:</strong> Usa punto (.) para separar decimales, no coma</li>
            <li><strong>Texto con comas:</strong> Encierra entre comillas ("") si el texto contiene comas</li>
            <li><strong>Primera fila:</strong> Debe contener los nombres de las columnas (encabezados)</li>
            <li><strong>Códigos únicos:</strong> No repitas códigos, cada uno debe ser único</li>
          </ul>
        </div>
      </div>

      {/* Ejemplo de contenido */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Ejemplo de contenido CSV
        </h3>
        <div className="rounded-2xl border border-gray-200 bg-gray-900 p-4">
          <pre className="overflow-x-auto text-xs text-green-400">
{`Código,Descripción,Tipo,Unidad,Precio Unitario,Categoría,Proveedor,Observaciones
CEM-001,Cemento Portland Tipo I,Material,Bolsa,25.50,Cementicios,Distribuidora ABC,Bolsa de 42.5 kg
ARE-001,Arena gruesa,Material,m³,35.00,Agregados,Cantera XYZ,Libre de impurezas
ACE-001,Acero corrugado fy=4200,Material,kg,3.80,Aceros,Siderúrgica DEF,Varilla de 3/8"
TRA-001,Transporte de materiales,Servicio,Viaje,120.00,Transportes,Transportes GHI,Camión 10 m³
LAB-001,Ensayo de compresión,Servicio,Unidad,45.00,Laboratorio,Lab JKL,Rotura a 28 días`}
          </pre>
        </div>
      </div>

      {/* Validaciones */}
      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">⚠️ Validaciones del sistema</h4>
        <p className="mb-2 text-sm text-gray-700">
          ESFERA validará tu archivo antes de importar. El sistema verificará:
        </p>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Que todos los códigos sean únicos (no duplicados)</li>
          <li>Que las columnas obligatorias no estén vacías</li>
          <li>Que el tipo sea "Material" o "Servicio"</li>
          <li>Que las unidades de medida existan en el sistema</li>
          <li>Que los precios sean valores numéricos válidos</li>
          <li>Que el formato del archivo sea correcto</li>
        </ul>
        <p className="mt-3 text-sm text-gray-700">
          Si hay errores, el sistema te mostrará un reporte detallado para que puedas corregirlos antes de volver a intentar.
        </p>
      </div>

      {/* Consejos */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Consejos útiles</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Empieza con un archivo pequeño (10-20 registros) para familiarizarte con el proceso</li>
          <li>Mantén una copia de seguridad de tu archivo CSV antes de subirlo</li>
          <li>Usa Excel o Google Sheets para preparar el archivo y luego expórtalo como CSV</li>
          <li>Verifica que no haya espacios en blanco al inicio o final de los códigos</li>
          <li>Si tienes muchos datos, considera dividirlos en varios archivos por categoría</li>
          <li>Revisa el archivo de ejemplo que proporciona ESFERA como referencia</li>
        </ul>
      </div>
    </div>
  );
}
