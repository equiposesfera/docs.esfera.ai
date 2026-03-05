import React from "react";

export default function IAChatPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                <span>Guía de uso</span>
                <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
                <span>Asistente IA</span>
            </div>

            <div className="space-y-6">
                <h1 className="text-4xl font-semibold text-[#2d2d2d] md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                    Asistente de IA (Chat)
                </h1>

                <p className="text-lg text-gray-700">
                    Esta ventana es una <strong>AI-powered chat application with training capabilities</strong>. A través de este chat, puedes interactuar directamente con la información de tus proyectos usando lenguaje natural. La plataforma cuenta con múltiples herramientas integradas (tools) que la IA utiliza para consultar datos, reportes y métricas en tiempo real.
                </p>

                <hr className="border-gray-200" />

                <h2 className="text-2xl font-semibold text-[#2d2d2d] mt-8">Tools Actualmente Implementados — esfera-ai-api</h2>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6 text-sm text-gray-600">
                    <p><strong>Última actualización:</strong> 26 Febrero 2026</p>
                    <p><strong>Archivo de registro central:</strong> <code>routers/gemini_utils.py</code> → <code>_TOOL_DECLARATIONS</code> / <code>_TOOL_FUNCTIONS</code></p>
                </div>

                <h3 className="text-xl font-semibold text-[#2d2d2d] mt-8">Catálogo Completo de Tools</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border rounded-lg">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre de la Función</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Archivo</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-sm">
                            <tr><td className="px-4 py-3">1</td><td className="px-4 py-3 font-mono text-xs text-[#4db8a8]">get_avance_resumen</td><td className="px-4 py-3 text-gray-500">avanceTool.py</td><td className="px-4 py-3 text-gray-700">Estado de avance vs presupuesto cruzado por etapas.</td></tr>
                            <tr><td className="px-4 py-3">2</td><td className="px-4 py-3 font-mono text-xs text-[#4db8a8]">get_inventario_stock</td><td className="px-4 py-3 text-gray-500">inventarioTool.py</td><td className="px-4 py-3 text-gray-700">Stock consolidado por material (entradas - salidas).</td></tr>
                            <tr><td className="px-4 py-3">3</td><td className="px-4 py-3 font-mono text-xs text-[#4db8a8]">get_almacen_movimientos</td><td className="px-4 py-3 text-gray-500">inventarioTool.py</td><td className="px-4 py-3 text-gray-700">Historial detallado de ingresos y salidas físicas.</td></tr>
                            <tr><td className="px-4 py-3">4</td><td className="px-4 py-3 font-mono text-xs text-[#4db8a8]">get_item_components</td><td className="px-4 py-3 text-gray-500">itemsTool.py</td><td className="px-4 py-3 text-gray-700">Detalle técnico (APU) de un ítem específico.</td></tr>
                            <tr><td className="px-4 py-3">5</td><td className="px-4 py-3 font-mono text-xs text-[#4db8a8]">get_items_list</td><td className="px-4 py-3 text-gray-500">itemsTool.py</td><td className="px-4 py-3 text-gray-700">Buscador y listado de ítems por nombre o grupo.</td></tr>
                            <tr><td className="px-4 py-3">6</td><td className="px-4 py-3 font-mono text-xs text-[#4db8a8]">get_ordenes_compra</td><td className="px-4 py-3 text-gray-500">comprasTool.py</td><td className="px-4 py-3 text-gray-700">Listado de OCs y detalle de materiales pedidos.</td></tr>
                            <tr><td className="px-4 py-3">7</td><td className="px-4 py-3 font-mono text-xs text-[#4db8a8]">get_planillas_pago</td><td className="px-4 py-3 text-gray-500">planillasTool.py</td><td className="px-4 py-3 text-gray-700">Pagos realizados a mano de obra / contratistas.</td></tr>
                            <tr><td className="px-4 py-3">8</td><td className="px-4 py-3 font-mono text-xs text-[#4db8a8]">get_personas_contacto</td><td className="px-4 py-3 text-gray-500">personasTool.py</td><td className="px-4 py-3 text-gray-700">Directorio de proveedores y contratistas.</td></tr>
                            <tr><td className="px-4 py-3">9</td><td className="px-4 py-3 font-mono text-xs text-[#4db8a8]">get_presupuesto_resumen</td><td className="px-4 py-3 text-gray-500">presupuestoTool.py</td><td className="px-4 py-3 text-gray-700">Consolidado totalizada o detalle por ítem/etapa.</td></tr>
                            <tr><td className="px-4 py-3">10</td><td className="px-4 py-3 font-mono text-xs text-[#4db8a8]">get_cronograma_fechas</td><td className="px-4 py-3 text-gray-500">cronogramaTool.py</td><td className="px-4 py-3 text-gray-700">Calendario de obra, fechas y dependencias.</td></tr>
                            <tr><td className="px-4 py-3">11</td><td className="px-4 py-3 font-mono text-xs text-[#4db8a8]">get_proyectos_detalles</td><td className="px-4 py-3 text-gray-500">proyectosTool.py</td><td className="px-4 py-3 text-gray-700">Configuración de proyectos (áreas, indirectos, etapas).</td></tr>
                            <tr><td className="px-4 py-3">12</td><td className="px-4 py-3 font-mono text-xs text-[#4db8a8]">get_help_from_kb</td><td className="px-4 py-3 text-gray-500">helpTool.py</td><td className="px-4 py-3 text-gray-700">Búsqueda en base de conocimiento de la plataforma.</td></tr>
                            <tr><td className="px-4 py-3">13</td><td className="px-4 py-3 font-mono text-xs text-[#4db8a8]">manage_ai_training_data</td><td className="px-4 py-3 text-gray-500">trainingTool.py</td><td className="px-4 py-3 text-gray-700">Gestión de reglas de comportamiento o preferencias del usuario.</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-xl font-semibold text-[#2d2d2d] mt-8">Detalles Técnicos por Área</h3>
                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-[#4db8a8] mb-3 flex items-center gap-2">🏗️ Gestión de Obra</h4>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                            <li><strong>get_avance_resumen:</strong> Cruza pagos y almacén vs presupuesto. Genera columnas dinámicas por etapa.</li>
                            <li><strong>get_cronograma_fechas:</strong> Extrae la jerarquía de fechas y precedencias del Gantt.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-[#4db8a8] mb-3 flex items-center gap-2">💰 Costos y Finanzas</h4>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                            <li><strong>get_presupuesto_resumen:</strong> Muestra totales de Material, MO, HE, GG, Impuestos y Utilidad.</li>
                            <li><strong>get_planillas_pago:</strong> Detalla qué avance se pagó a qué contratista y en qué planilla.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-[#4db8a8] mb-3 flex items-center gap-2">📦 Abastecimiento y Almacén</h4>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                            <li><strong>get_ordenes_compra:</strong> Permite ver saldos pendientes de entrega de cada proveedor.</li>
                            <li><strong>get_inventario_stock:</strong> Muestra existencias actuales.</li>
                            <li><strong>get_almacen_movimientos:</strong> Auditoría de quién y cuándo movió materiales.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-[#4db8a8] mb-3 flex items-center gap-2">📄 Catálogo Técnico</h4>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                            <li><strong>get_items_list:</strong> Lista todas las actividades/partidas del proyecto.</li>
                            <li><strong>get_item_components:</strong> Explota un ítem para ver sus rendimientos y precios unitarios.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-[#4db8a8] mb-3 flex items-center gap-2">👥 Directorio</h4>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                            <li><strong>get_personas_contacto:</strong> Obtiene Teléfonos/Emails de Proveedores y Contratistas activos.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-[#4db8a8] mb-3 flex items-center gap-2">⚙️ Preferencias y Entrenamiento</h4>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                            <li><strong>manage_ai_training_data:</strong> Permite añadir, listar, modificar, habilitar o deshabilitar preferencias y reglas de comportamiento (training) del usuario.</li>
                        </ul>
                    </div>
                </div>

                <hr className="border-gray-200 my-8" />

                <h2 className="text-2xl font-semibold text-[#2d2d2d] mt-8 mb-4">Ejemplos Prácticos y Banco de Preguntas</h2>
                <p className="text-gray-700 mb-6">
                    A continuación, se presentan ejemplos de cómo utilizar el chat de la IA. Estas preguntas forzarán al asistente a consultar información valiosa de diversas áreas.
                </p>

                <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                        <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 font-semibold text-[#2d2d2d]">Preguntas por Herramienta Básica</div>
                        <div className="p-5 space-y-4 text-sm text-gray-700">
                            <div>
                                <strong className="text-[#4db8a8]">Consultar Avance y Presupuesto:</strong>
                                <ul className="list-disc pl-5 mt-1">
                                    <li>"¿Cuál es el resumen de avance general del proyecto hasta hoy?"</li>
                                    <li>"Muéstrame el resumen de avance físico frente al presupuesto de todas las tareas en la etapa de 'Obra Gruesa'."</li>
                                    <li>"¿Cuánto saldo económico nos queda por ejecutar respecto del presupuesto total aprobado?"</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-[#4db8a8]">Consultar Inventario y Almacén:</strong>
                                <ul className="list-disc pl-5 mt-1">
                                    <li>"¿Cuántas bolsas de cemento tenemos actualmente en el stock del almacén?"</li>
                                    <li>"Genera un reporte completo de todos los materiales e insumos que tenemos disponibles en almacén."</li>
                                    <li>"¿Cuál es el saldo actual de 'Pintura Blanca' cruzando cuánto entró frente a cuánto ha salido?"</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-[#4db8a8]">Consultar Catálogo y APUs:</strong>
                                <ul className="list-disc pl-5 mt-1">
                                    <li>"¿Qué componentes (material, equipos, mano de obra) y con qué rendimientos incluye el ítem 'Elevadores de carga'?"</li>
                                    <li>"Extrae el Análisis de Precio Unitario (APU) completo para la partida 'Muro de Ladrillo'."</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                        <div className="bg-gray-50 px-5 py-3 border-b border-gray-200 font-semibold text-[#2d2d2d]">Escenarios de Razonamiento Combinado Funcional</div>
                        <div className="p-5 bg-[#fafcfb] space-y-4 text-sm text-gray-700">
                            <p>Puedes requerir peticiones complejas donde el asistente orquesta varias herramientas a la vez:</p>
                            <ul className="list-decimal pl-5 space-y-3">
                                <li><strong>Auditoría de Compras vs Almacén:</strong> "Para la Orden de Compra OC-001, ¿cuánto de cemento se pidió originalmente al proveedor y compáramelo contra lo que falta que entre de manera física por portería según almacén?"</li>
                                <li><strong>Productividad de Contratistas:</strong> "El albañil Juan Pérez ha avanzado arduos metros en 'Muros de Ladrillo'. Verifica cuánto se le honró financieramente en planillas de avance anteriores por este exacto ítem y dinos de cuánto es la brecha respecto del techo presupuestal."</li>
                                <li><strong>Viabilidad Logística por APU:</strong> "Necesitamos empezar con la 'Pintura Interior' ya mismo. Mira el recetario del APU de esta actividad, entérate de qué insumos nos exige la norma y ve en tiempo real al Inventario para validar que nos sobran litros para repintar 100m2."</li>
                                <li><strong>Logística Reactiva Just-In-Time:</strong> "Observa el APU de 'Zapatas Aisladas' y detecta su requerimiento estelar: Cemento. ¿Puedes cerciorarte en Compras si hoy, ahora mismo, contamos con una OC trancada en fase 'Aprobado' o en tránsito que venga llena de cemento?"</li>
                                <li><strong>Terminación de Familias de Partidas:</strong> "Reúne sin falta todos los ítems clasificados al rubro de los 'CIMIENTOS'. Cruza cada uno de ellos a la página de avances logrados en el tiempo, a fin de asentar y certificar oficialmente que yacen terminados al 100%."</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
