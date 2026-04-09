import Image from "next/image";
import Link from "next/link";

export default function ProveedoresPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Personas</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Registro de proveedores
      </h2>
       <p className="text-base leading-7 text-gray-700 md:text-lg">
         Los proveedores abastecen materiales, servicios o equipos para tus proyectos. Registra sus datos para compras,
         comparativos y control de abastecimiento.
       </p>

       {/* Video Container */}
       <div className="space-y-4">
         <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial: Proveedores</h2>
           <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
             <iframe
               width="100%"
               height="100%"
               src="https://www.youtube.com/embed/_S2D2gFLEgo"
               title="PROVEEDORES"
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
          src="/personas/formulario-proveedor.png"
          alt="Formulario de registro de proveedores"
          width={1200}
          height={800}
          className="w-full"
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Pasos para registrar un proveedor
        </h3>
        <div className="space-y-4">
          {[
            "Entra a Personas y selecciona Proveedores.",
            "Haz clic en \"Nuevo proveedor\" para abrir el formulario.",
            "Completa los datos comerciales y de contacto.",
            "Guarda el registro para usarlo en compras y cotizaciones.",
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
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Informacion comercial</h4>
            <p className="text-sm text-gray-700">
              Razon social, NIT o documento, rubro principal y codigo interno.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Contacto</h4>
            <p className="text-sm text-gray-700">
              Correo, telefono, direccion y persona de referencia.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Condiciones</h4>
            <p className="text-sm text-gray-700">
              Plazos de entrega, formas de pago y moneda de trabajo.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Observaciones</h4>
            <p className="text-sm text-gray-700">
              Notas internas para compras o control de calidad.
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
          <li>Los telefonos deben contener solo numeros o el prefijo internacional</li>
        </ul>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">Buenas practicas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Registra el rubro principal para acelerar cotizaciones</li>
          <li>Guarda referencias de contacto por area o sucursal</li>
          <li>Actualiza condiciones comerciales antes de cada compra</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/personas/comitentes"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
        >
          Ver comitentes →
        </Link>
      </div>
    </div>
  );
}

