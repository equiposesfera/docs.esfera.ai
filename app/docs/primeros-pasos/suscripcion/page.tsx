import Image from "next/image";

export default function SuscripcionPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Primeros pasos</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Suscripción
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Conoce los planes de suscripción disponibles y cómo aprovechar tu prueba gratuita de 60 días en ESFERA.
      </p>

      {/* Prueba gratuita */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Prueba gratuita de 60 días
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Al registrarte y crear tu primer proyecto, automáticamente obtienes acceso a una prueba gratuita de 60 días con todas las funcionalidades de la plataforma. Este período de prueba es exclusivo para tu primer proyecto.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/recuadro_60d_gratis.png"
            alt="Promoción de 60 días gratis"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
        <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
          <p className="text-sm text-gray-700">
            <strong>⏰ Importante:</strong> Los 60 días gratis aplican únicamente a tu primer proyecto. Cuando este período venza o si deseas crear nuevos proyectos antes de que expire, deberás elegir uno de nuestros planes de suscripción.
          </p>
        </div>
      </div>

      {/* Información sobre planes */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Planes de suscripción disponibles
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Una vez que se venza tu período de prueba de 60 días o si deseas crear proyectos adicionales antes de que termine, deberás elegir uno de nuestros tres planes de suscripción. <strong>Cada plan está vinculado a un proyecto específico</strong>, por lo que si gestionas múltiples proyectos, necesitarás adquirir un plan para cada uno.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/registro-creacion_usuario_empresa_proyecto/planes_disponibles.png"
            alt="Planes de suscripción disponibles"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Detalles de los planes */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Características de cada plan
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d]">Plan Emprendedor</h4>
            <p className="mb-4 text-xs font-semibold text-[#4db8a8] uppercase">Para empezar</p>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              <li>Gestión de proyectos</li>
              <li>Control de almacén</li>
              <li>Módulo de compras</li>
              <li>Reportes básicos</li>
              <li>Soporte estándar</li>
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-6 shadow-sm">
            <div className="mb-2 inline-block rounded-full bg-[#4db8a8] px-3 py-1 text-xs font-semibold text-white">
              Más popular
            </div>
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d]">Plan Constructor</h4>
            <p className="mb-4 text-xs font-semibold text-[#4db8a8] uppercase">Recomendado</p>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              <li>Todas las del Plan Básico</li>
              <li>Análisis de precios unitarios</li>
              <li>Gestión de cartera</li>
              <li>Reportes avanzados</li>
              <li>Integración de APIs</li>
              <li>Soporte prioritario</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d]">Plan Empresarial</h4>
            <p className="mb-4 text-xs font-semibold text-[#4db8a8] uppercase">Para grandes proyectos</p>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              <li>Todas las funcionalidades</li>
              <li>Análisis avanzado de datos</li>
              <li>Usuarios ilimitados</li>
              <li>Reportes personalizados</li>
              <li>Sincronización en tiempo real</li>
              <li>Soporte dedicado 24/7</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modelo de planes por proyecto */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Un plan por proyecto
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Es importante entender que el modelo de suscripción de ESFERA es <strong>por proyecto</strong>. Esto significa que:
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="mb-3 text-2xl">✅</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Ventajas</h4>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              <li>Flexibilidad para elegir diferentes planes según cada proyecto</li>
              <li>Solo pagas por lo que necesitas en cada proyecto</li>
              <li>Puedes cambiar de plan entre proyectos</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-orange-50 p-6">
            <div className="mb-3 text-2xl">⚠️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Importante</h4>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              <li>Cada proyecto requiere su propio plan activo</li>
              <li>Con 3 proyectos necesitarás 3 planes diferentes</li>
              <li>El plan vence por proyecto, no globalmente</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ejemplo de múltiples proyectos */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">📋 Ejemplo práctico</h4>
        <p className="mb-3 text-sm text-gray-700">
          Si tienes una empresa constructora con 3 proyectos:
        </p>
        <div className="space-y-2 text-sm text-gray-700">
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#4db8a8]"></span>
            <strong>Proyecto 1 (Casa):</strong> Plan Profesional
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#4db8a8]"></span>
            <strong>Proyecto 2 (Edificio):</strong> Plan Empresarial
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[#4db8a8]"></span>
            <strong>Proyecto 3 (Reforma):</strong> Plan Básico
          </p>
        </div>
        <p className="mt-3 text-sm text-gray-700">
          Pagarías 3 planes diferentes, uno para cada proyecto, según las necesidades de cada uno.
        </p>
      </div>
    </div>
  );
}
