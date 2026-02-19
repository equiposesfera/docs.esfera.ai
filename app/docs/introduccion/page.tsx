import { url } from "node:inspector";

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
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Crea tu cuenta", desc: "Configura tu perfil", url: "./primeros-pasos/registro" },
            { title: "Preguntas frecuentes", desc: "Resuelve tus dudas", url: "./faq" },
            { title: "Ve nuestro videotutorial", desc: "Aprende a usar Esfera.AI", url: "https://www.youtube.com/watch?v=mZIimzmA8Pc" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6">
              <p className="font-semibold text-[#2d2d2d]"><a href={item.url || "#"} target={item.url?.startsWith("http") ? "_blank" : "_self"} rel={item.url?.startsWith("http") ? "noopener noreferrer" : undefined}>{item.title}</a></p>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
