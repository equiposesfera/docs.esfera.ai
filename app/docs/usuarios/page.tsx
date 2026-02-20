import Image from "next/image";

export default function Paso4Page() {
  const step = {
    id: "paso-4",
    title: "Gestión de usuarios",
    description:
      "Invita a tu equipo, asigna roles y controla qué puede hacer cada miembro en tu proyecto.",
    bullets: [
      "Importa usuarios por correo",
      "Asigna roles y permisos",
      "Activa notificaciones internas",
    ],
  };

  return (
    <div className="space-y-8">
      <article className="rounded-3xl border border-gray-200 bg-white px-6 py-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              {step.title}
            </h1>
          </div>
          <span className="rounded-full bg-[#d4f1eb] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-700">
            Módulo de accesos
          </span>
        </div>
        <p className="mt-3 text-base leading-7 text-gray-700 md:text-lg">
          {step.description}
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {step.bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-[#4db8a8]"></span>
              <span className="text-sm font-medium text-gray-700">{bullet}</span>
            </div>
          ))}
        </div>
      </article>

      {/* Introducción */}
      <div className="space-y-4">
        <p className="text-base leading-7 text-gray-700">
          En ESFERA, la gestión de usuarios es fundamental para garantizar que tu equipo tenga acceso a las herramientas que necesita, con los permisos y responsabilidades adecuados. La plataforma te permite invitar miembros del equipo, asignarles roles específicos y controlar exactamente qué pueden hacer en cada módulo del sistema.
        </p>
      </div>

      {/* Secciones principales */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-3 text-3xl">👥</div>
          <h3 className="mb-2 text-lg font-semibold text-[#2d2d2d]">Agregar usuarios</h3>
          <p className="text-sm text-gray-700">
            Importa miembros de tu equipo al proyecto por correo electrónico y asigna roles iniciales.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-3 text-3xl">🔑</div>
          <h3 className="mb-2 text-lg font-semibold text-[#2d2d2d]">Roles</h3>
          <p className="text-sm text-gray-700">
            Define diferentes roles (Administrador, Supervisor, Usuario) con permisos predeterminados.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-3 text-3xl">🛡️</div>
          <h3 className="mb-2 text-lg font-semibold text-[#2d2d2d]">Permisos</h3>
          <p className="text-sm text-gray-700">
            Personaliza permisos específicos por usuario en cada módulo del sistema.
          </p>
        </div>
      </div>
    </div>
  );
}
