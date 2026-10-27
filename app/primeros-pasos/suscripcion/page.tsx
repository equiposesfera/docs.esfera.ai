const h3Class = "text-2xl font-semibold text-[#2d2d2d]";
const pClass = "text-base leading-7 text-gray-700";

const freeFeatures = [
  "1 empresa por usuario",
  "1 proyecto por usuario",
  "Presupuestos ilimitados",
  "100 MB de almacenamiento",
  "Usuarios secundarios ilimitados",
  "Acceso a empresa y proyecto demo",
];

const plusFeatures = [
  "Múltiples empresas y proyectos",
  "10 GB de almacenamiento",
  "Proyectos activos mientras el addon esté pagado",
  "Sin expiración por inactividad",
];

const implementationFeatures = [
  "Diagnóstico operativo",
  "Setup y configuración inicial",
  "Carga o migración de datos",
  "Capacitación al equipo",
  "Acompañamiento y soporte",
  "Integraciones bajo cotización",
];

export default function SuscripcionPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Primeros pasos</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Oct 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Suscripción y planes
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        ESFERA se puede usar gratis y de forma autoasistida. Cuando necesites más capacidad o ayuda para adoptar la plataforma en tu empresa, puedes sumar el addon Esfera Plus o contratar una implementación profesional.
      </p>

      <div className="space-y-4">
        <h3 className={h3Class} style={{ fontFamily: "var(--font-display)" }}>
          Tres formas de usar ESFERA
        </h3>
        <p className={pClass}>
          El software es el mismo en todos los casos y no requiere tarjeta para empezar. Lo que cambia es la capacidad y el nivel de acompañamiento.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-semibold uppercase text-[#4db8a8]">Gratis</p>
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d]">Uso autoasistido</h4>
            <p className="text-3xl font-bold text-[#2d2d2d]">USD 0</p>
            <p className="mb-4 text-xs text-gray-600">para siempre</p>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              {freeFeatures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-[#4db8a8] bg-[#d4f1eb] p-6 shadow-sm">
            <div className="mb-2 inline-block rounded-full bg-[#4db8a8] px-3 py-1 text-xs font-semibold text-white">
              Addon
            </div>
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d]">Esfera Plus</h4>
            <p className="text-3xl font-bold text-[#2d2d2d]">USD 30 / mes</p>
            <p className="mb-4 text-xs text-gray-600">o USD 300 / año</p>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              {plusFeatures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="mb-2 text-xs font-semibold uppercase text-[#4db8a8]">Servicio B2B</p>
            <h4 className="mb-3 text-lg font-semibold text-[#2d2d2d]">Implementación profesional</h4>
            <p className="text-3xl font-bold text-[#2d2d2d]">Desde USD 2.500</p>
            <p className="mb-4 text-xs text-gray-600">cotización por alcance</p>
            <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
              {implementationFeatures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm text-gray-600">
          Precios en dólares estadounidenses (USD). Consulta siempre los valores vigentes en{" "}
          <a href="https://esfera.ai/precios/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4db8a8] underline">
            esfera.ai/precios
          </a>
          .
        </p>
      </div>

      <div className="space-y-4">
        <h3 className={h3Class} style={{ fontFamily: "var(--font-display)" }}>
          Uso gratuito
        </h3>
        <p className={pClass}>
          Al registrarte puedes crear tu cuenta, tu empresa y tu primer proyecto sin costo. Cada usuario cuenta con 1 empresa y 1 proyecto, presupuestos y usuarios secundarios ilimitados, 100 MB de almacenamiento y acceso a una empresa y proyecto demo para explorar la plataforma.
        </p>
        <p className={pClass}>
          El acceso gratuito no incluye soporte humano, capacitación personalizada, migración de datos, carga de APUs, configuración guiada, integraciones ni acompañamiento operativo. Para eso existe el servicio de implementación.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className={h3Class} style={{ fontFamily: "var(--font-display)" }}>
          Addon Esfera Plus
        </h3>
        <p className={pClass}>
          Esfera Plus amplía la capacidad de tu cuenta: habilita <strong>múltiples empresas y proyectos</strong>, eleva el almacenamiento a <strong>10 GB</strong> y mantiene tus proyectos activos mientras el addon esté pagado, sin expiración por inactividad. Cuesta USD 30 al mes o USD 300 al año.
        </p>
        <p className={pClass}>
          Para contratarlo, escríbenos por WhatsApp o desde{" "}
          <a href="https://esfera.ai/precios/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4db8a8] underline">
            la página de precios
          </a>
          .
        </p>
      </div>

      <div className="space-y-4">
        <h3 className={h3Class} style={{ fontFamily: "var(--font-display)" }}>
          Implementación profesional
        </h3>
        <p className={pClass}>
          Pensada para constructoras que necesitan dejar ESFERA configurada, cargada y adoptada por su equipo. Se cotiza según el alcance, la cantidad de obras, la carga inicial, la capacitación, el soporte y las integraciones. La implementación no reemplaza al software gratuito: es un servicio adicional que se contrata aparte, desde USD 2.500.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className={h3Class} style={{ fontFamily: "var(--font-display)" }}>
          Inactividad de proyectos
        </h3>
        <p className={pClass}>
          La inactividad se mide <strong>por proyecto</strong>: si ningún usuario inicia sesión en un proyecto durante 60 días, el proyecto y sus datos se eliminan.
        </p>
        <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
          <p className="mb-2 text-sm font-semibold text-gray-700">⏰ Avisos por email</p>
          <p className="text-sm text-gray-700">
            Recibirás avisos a los 30, 45, 57 y 59 días de inactividad. A los 60 días se eliminan el usuario principal, los usuarios secundarios, la empresa, el proyecto y todos los datos asociados, con una notificación final.
          </p>
        </div>
        <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
          <li>Iniciar sesión periódicamente en el proyecto evita la eliminación.</li>
          <li>Con Esfera Plus activo y pagado, los proyectos no expiran por inactividad.</li>
          <li>
            Si dejas de pagar Esfera Plus vuelve a aplicarse la regla de 60 días. Si conservas un único proyecto, tu usuario no se elimina; si tienes varios, deberás elegir uno para conservar y los demás quedan sujetos a la regla. Pueden restaurarse si vuelves a contratar el addon.
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">📋 ¿Cuál me conviene?</h4>
        <ul className="list-inside list-disc space-y-2 text-sm text-gray-700">
          <li><strong>Uso autoasistido:</strong> profesionales independientes y equipos pequeños con una obra que quieren explorar y avanzar por su cuenta.</li>
          <li><strong>Esfera Plus:</strong> si gestionas varias obras o empresas, necesitas más almacenamiento o no quieres que tus proyectos expiren.</li>
          <li><strong>Implementación:</strong> constructoras con obra activa que necesitan migrar información, capacitar a sus áreas y adoptar la plataforma con acompañamiento.</li>
        </ul>
      </div>
    </div>
  );
}
