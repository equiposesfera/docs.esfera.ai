import Image from "next/image";
import Link from "next/link";

export default function ComitentesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Personas</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Registro de comitentes
      </h2>
       <p className="text-base leading-7 text-gray-700 md:text-lg">
         Los comitentes son los clientes o propietarios que encargan la obra. En ESFERA puedes registrar sus datos
         para asociarlos a proyectos, contratos y seguimiento financiero.
       </p>

       {/* Video Container */}
       <div className="space-y-4">
         <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial: Comitentes</h2>
           <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
             <iframe
               width="100%"
               height="100%"
               src="https://www.youtube.com/embed/WNMwOKR_WFk"
               title="COMITENTES"
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
          src="/personas/formulario-comitente.png"
          alt="Formulario de registro de comitentes"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para registrar un comitente
        </h3>
        <div className="space-y-4">
          {[
            "Accede al módulo de Personas y elige la opción Comitentes.",
            "Haz clic en \"Nuevo comitente\" para abrir el formulario.",
            "Completa los datos generales y de contacto.",
            "Guarda el registro para que quede disponible en proyectos y contratos.",
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
          Datos solicitados en el formulario
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Informacion general</h4>
            <p className="text-sm text-gray-700">
              Nombre o razon social, documento de identidad, codigo interno y tipo de comitente (persona o empresa).
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Contacto</h4>
            <p className="text-sm text-gray-700">
              Correo, telefono, direccion y ciudad para notificaciones y facturacion.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Representante</h4>
            <p className="text-sm text-gray-700">
              Persona responsable del contrato o del seguimiento del proyecto.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Notas internas</h4>
            <p className="text-sm text-gray-700">
              Observaciones comerciales o condiciones particulares acordadas.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#f59e0b] bg-orange-50 px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">Validaciones comunes</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>El nombre o razon social es obligatorio</li>
          <li>El documento de identidad no puede repetirse</li>
          <li>El correo debe tener un formato valido</li>
          <li>Los telefonos deben contener solo numeros o el prefijo internacional</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">Buenas practicas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Usa un codigo interno consistente para facilitar busquedas</li>
          <li>Registra el representante principal para agilizar comunicaciones</li>
          <li>Mantén los datos de contacto actualizados antes de iniciar una obra</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/personas/contratistas"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
        >
          Ver contratistas →
        </Link>
      </div>
    </div>
  );
}

