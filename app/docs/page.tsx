import Link from "next/link";

export default function DocsHome() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
          Bienvenido a la documentación de Esfera
        </h2>
        <p className="text-base leading-7 text-gray-700 md:text-lg">
          Selecciona una sección del menú lateral para comenzar.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Link 
          href="/docs/introduccion"
          className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-[#4db8a8] hover:shadow-md"
        >
          <h3 className="text-xl font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]" style={{ fontFamily: "var(--font-display)" }}>
            Introducción →
          </h3>
          <p className="mt-2 text-sm text-gray-700">
            Comienza aquí para conocer la guía paso a paso
          </p>
        </Link>

        <Link 
          href="/docs/cuenta"
          className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-[#4db8a8] hover:shadow-md"
        >
          <h3 className="text-xl font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]" style={{ fontFamily: "var(--font-display)" }}>
            Paso 1: Crea tu cuenta →
          </h3>
          <p className="mt-2 text-sm text-gray-700">
            Define tu correo principal y completa el perfil básico
          </p>
        </Link>

        <Link 
          href="/docs/recursos"
          className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-[#4db8a8] hover:shadow-md"
        >
          <h3 className="text-xl font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]" style={{ fontFamily: "var(--font-display)" }}>
            Recursos rápidos →
          </h3>
          <p className="mt-2 text-sm text-gray-700">
            Checklists, guías y plantillas
          </p>
        </Link>

        <Link 
          href="/docs/faq"
          className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-[#4db8a8] hover:shadow-md"
        >
          <h3 className="text-xl font-semibold text-[#2d2d2d] group-hover:text-[#4db8a8]" style={{ fontFamily: "var(--font-display)" }}>
            Preguntas frecuentes →
          </h3>
          <p className="mt-2 text-sm text-gray-700">
            Respuestas a las dudas más comunes
          </p>
        </Link>
      </div>
    </div>
  );
}

