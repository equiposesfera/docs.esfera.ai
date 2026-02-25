import Link from "next/link";

export default function IntroduccionPage() {
  return (
    <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Guía de inicio</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Versión 1.0 · Actualizado Feb 2026</span>
        </div>

        <div className="space-y-6">
        <h1 className="text-4xl font-semibold text-[#2d2d2d] md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            Bienvenido a Esfera.AI
        </h1>

        <div className="space-y-4 text-base leading-8 text-gray-700">
            <p>
            <span className="font-semibold text-[#4db8a8]">Esfera.AI</span> es una plataforma online totalmente integrada con Inteligencia Artificial diseñada para la gestión completa de tus proyectos de construcción.
            </p>

            <div className="space-y-3 rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <p className="font-semibold text-[#2d2d2d]">Controla cada etapa de tu proyecto:</p>
            <ul className="space-y-2 pl-6">
                <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#4db8a8] flex-shrink-0"></span>
                <span><span className="font-medium">Planificación:</span> Presupuestos detallados, análisis de precios unitarios y gestión integral de proveedores</span>
                </li>
                <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#4db8a8] flex-shrink-0"></span>
                <span><span className="font-medium">Ejecución:</span> Seguimiento de avances, planillas de personal, control de compras y gestión de almacén</span>
                </li>
                <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#4db8a8] flex-shrink-0"></span>
                <span><span className="font-medium">Gestión comercial:</span> Administración completa de clientes, contratos, pagos e inventario de inmuebles</span>
                </li>
            </ul>
            </div>

            <p>
            <span className="font-semibold text-[#4db8a8]">Tu asistente inteligente:</span> Nuestro potente motor de IA te ayudará a obtener resúmenes instantáneos, datos específicos y reportes de avance en cualquier momento, optimizando tu toma de decisiones.
            </p>

            <p className="pt-2">
            En esta guía te mostraremos cómo aprovechar al máximo todas las capacidades de Esfera.AI para obtener un control completo y eficiente de tus proyectos.
            </p>
        </div>
        </div>

        <div className="space-y-4">
        <p className="text-lg font-semibold text-[#2d2d2d]">Comencemos a construir con Esfera.AI</p>
        <div className="grid gap-6 md:grid-cols-3">
            {/* Opción 1: Crear cuenta */}
            <Link href="/primeros-pasos/registro">
            <div className="h-full rounded-2xl border border-gray-200 bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-8 cursor-pointer hover:shadow-lg transition flex flex-col justify-between">
                <div className="mb-6 flex items-center justify-center">
                <div className="rounded-full bg-[#4db8a8] p-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                </div>
                </div>
                <div>
                <p className="font-semibold text-[#2d2d2d] text-center">Crea tu cuenta</p>
                <p className="mt-3 text-sm text-gray-600 text-center">Configura tu perfil y comienza a usar Esfera.AI</p>
                </div>
            </div>
            </Link>

            {/* Opción 2: Video Tutorial */}
            <Link href="/flujo-trabajo">
            <div className="relative h-full rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#4db8a8] to-[#3a9688] p-8 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col justify-between shadow-lg">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2d2d2d] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                Recomendado
                </div>
                <div className="mb-6 flex items-center justify-center">
                <div className="rounded-full bg-white p-4 hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-[#4db8a8]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                    </svg>
                </div>
                </div>
                <div>
                <p className="font-semibold text-white text-center text-lg">Flujo de trabajo</p>
                <p className="mt-3 text-sm text-white/90 text-center">Aprende a usar Esfera.AI en 7 minutos</p>
                </div>
            </div>
            </Link>

            {/* Opción 3: FAQ */}
            <Link href="/faq">
            <div className="h-full rounded-2xl border border-gray-200 bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-8 cursor-pointer hover:shadow-lg transition flex flex-col justify-between">
                <div className="mb-6 flex items-center justify-center">
                <div className="rounded-full bg-[#4db8a8] p-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                </div>
                <div>
                <p className="font-semibold text-[#2d2d2d] text-center">Preguntas frecuentes</p>
                <p className="mt-3 text-sm text-gray-600 text-center">Resuelve tus dudas sobre la plataforma</p>
                </div>
            </div>
            </Link>
        </div>
        </div>
        {/* Nota importante */}
        <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">⚠️ Nota importante</h4>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                <li>Como el sistema de Esfera.AI está en actualización continua, algunos contenidos pueden tener alguna variación.</li>
                <li>Estamos trabajando constantemente para mantener la información actualizada.</li>
                <li>Si tienes alguna dudas, no dudes en contactar al <a href="https://wa.me/15557021023?text=Ayuda" target="_blank" rel="noopener noreferrer" className="font-bold">soporte</a> para poder ayudarte.</li>
            </ul>
        </div>
    </div>
    );
}
