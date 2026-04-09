import Image from "next/image";
import Link from "next/link";

export default function ContratistasPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Personas</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Registro de contratistas
      </h2>
       <p className="text-base leading-7 text-gray-700 md:text-lg">
         Los contratistas son empresas o profesionales que ejecutan trabajos especializados. Registra sus datos para
         vincularlos a partidas, contratos y control de avances.
       </p>

       {/* Video Container */}
       <div className="space-y-4">
         <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial: Contratistas</h2>
           <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
             <iframe
               width="100%"
               height="100%"
               src="https://www.youtube.com/embed/f-49RiJD-Bk"
               title="CONTRATISTAS"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="w-full h-full"
             ></iframe>
           </div>
         </div>
       </div>

       <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
        <Image
          src="/personas/formulario-contratista.png"
          alt="Formulario de registro de contratistas"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para registrar un contratista
        </h3>
        <div className="space-y-4">
          {[
            "Entra a Personas y selecciona Contratistas.",
            "Haz clic en \"Nuevo contratista\" para abrir el formulario.",
            "Completa los datos legales, tecnicos y de contacto.",
            "Guarda el registro para usarlo en proyectos y contratos.",
          ].map((text, index) => (
            <div key={text} className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
                {index + 1}
              </div>
              <p className="text-sm text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Informacion clave
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Datos legales</h4>
            <p className="text-sm text-gray-700">
              Razon social, NIT o documento, tipo de contratista y pais de operacion.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Contacto principal</h4>
            <p className="text-sm text-gray-700">
              Responsable tecnico, correo, telefono y direccion administrativa.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Especialidad</h4>
            <p className="text-sm text-gray-700">
              Rubro o tipo de servicio (estructura, instalaciones, acabados, etc.).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Documentos</h4>
            <p className="text-sm text-gray-700">
              Licencias, vigencias, seguros y observaciones internas.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">Validaciones comunes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>La razon social es obligatoria</li>
          <li>El NIT o documento no puede repetirse</li>
          <li>El correo debe tener formato valido</li>
          <li>Se recomienda completar la especialidad</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">Buenas practicas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Registra especialidades para facilitar asignaciones</li>
          <li>Mantén al dia los documentos y vigencias</li>
          <li>Usa un contacto principal para comunicaciones formales</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/personas/proveedores"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
        >
          Ver proveedores →
        </Link>
      </div>
    </div>
  );
}

