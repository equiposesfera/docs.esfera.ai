import Image from "next/image";

export default function InvitarUsuariosPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Usuarios</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Agregar usuarios
      </h2>
       <p className="text-base leading-7 text-gray-700 md:text-lg">
         Invita a los miembros de tu equipo a tu proyecto en ESFERA. Puedes agregar usuarios de forma individual o importarlos en lotes, y asignarles roles específicos.
       </p>

       {/* Video Container */}
       <div className="space-y-4">
         <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial: Gestión de usuarios</h2>
           <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
             <iframe
               width="100%"
               height="100%"
               src="https://www.youtube.com/embed/tMOWL29otuA"
               title="USUARIOS"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="w-full h-full"
             ></iframe>
           </div>
         </div>
       </div>

       {/* Paso 1: Acceder a usuarios */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          1. Acceder a la sección de usuarios
        </h3>
        <p className="text-base leading-7 text-gray-700">
          En el menú de tu proyecto, dirígete a la sección "Usuarios" donde encontrarás la opción para agregar nuevos miembros del equipo.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/modulo-accesos/pestana-usuarios.png"
            alt="Pestaña de usuarios en el proyecto"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Paso 2: Completar formulario */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          2. Completar el formulario de usuarios
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Ingresa el correo electrónico del usuario y selecciona el rol que deseas asignarle. Puedes agregar múltiples usuarios a la vez separando los correos con comas.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/modulo-accesos/formulario-creacion-usuarios.png"
            alt="Formulario de creación de usuarios"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Información sobre roles */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Roles disponibles
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h4 className="mb-2 text-lg font-semibold text-[#2d2d2d]">Administrador</h4>
            <p className="text-sm text-gray-700">
              Acceso completo al proyecto. Puede crear, editar, eliminar y gestionar usuarios, permisos y configuraciones.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h4 className="mb-2 text-lg font-semibold text-[#2d2d2d]">Supervisor</h4>
            <p className="text-sm text-gray-700">
              Acceso a la mayoría de funciones. Puede ver, crear y editar contenido, pero no gestionar usuarios ni configuraciones.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h4 className="mb-2 text-lg font-semibold text-[#2d2d2d]">Usuario</h4>
            <p className="text-sm text-gray-700">
              Acceso limitado. Puede ver información y realizar acciones básicas según los permisos asignados.
            </p>
          </div>
        </div>
      </div>

      {/* Paso 3: Confirmación */}
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          3. Confirmación de creación
        </h3>
        <p className="text-base leading-7 text-gray-700">
          Una vez completado el formulario, recibirás una confirmación de que los usuarios han sido invitados. Ellos recibirán un correo con instrucciones para acceder al proyecto.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <Image
            src="/modulo-accesos/confirmacion-creacion-usuario.png"
            alt="Confirmación de creación de usuario"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      </div>

      {/* Consejos */}
      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-2 font-semibold text-[#2d2d2d]">💡 Consejos útiles</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Asegúrate de usar correos electrónicos válidos y correctos</li>
          <li>Puedes cambiar el rol de un usuario en cualquier momento desde la lista de usuarios</li>
          <li>Los usuarios invitados recibirán un email con un link para conectarse</li>
          <li>Un usuario solo puede conectarse si tiene al menos un proyecto asignado</li>
        </ul>
      </div>
    </div>
  );
}
