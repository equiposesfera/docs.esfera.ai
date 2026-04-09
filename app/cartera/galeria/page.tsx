import Link from "next/link";

export default function GaleriaCarteraPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Cartera</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Galería
      </h2>
       <p className="text-base leading-7 text-gray-700 md:text-lg">
         La Galería centraliza todo el material multimedia del proyecto: planos, renders, fotos de avance y material
         publicitario. Mantén a tu equipo comercial con los recursos visuales siempre actualizados.
       </p>

       {/* Video Container */}
       <div className="space-y-4">
         <div className="rounded-2xl border-2 border-[#4db8a8] bg-gradient-to-br from-[#d4f1eb] to-[#e8f5f1] p-6 shadow-lg">
           <h2 className="text-xl font-semibold text-[#2d2d2d]">Tutorial: Galería de inmuebles</h2>
           <div className="relative bg-black rounded-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
             <iframe
               width="100%"
               height="100%"
               src="https://www.youtube.com/embed/fkD-lVyvfHI"
               title="GALERIA DE INMUEBLES"
               frameBorder="0"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
               className="w-full h-full"
             ></iframe>
           </div>
         </div>
       </div>

       <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">🖼️ ¿Para qué sirve la Galería?</h4>
        <p className="text-sm text-gray-700">
          La Galería permite que el equipo de marketing y ventas acceda en cualquier momento a los planos
          arquitectónicos, renders 3D, fotografías del proyecto y material publicitario generado para la campaña.
          Todo en un solo lugar, organizado por álbumes o categorías.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Tipos de contenido en la Galería
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-3xl">📐</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Planos</h4>
            <p className="text-sm text-gray-700">
              Planos de planta, cortes y elevaciones de cada unidad o del edificio completo. En formatos PDF o imagen.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-3xl">🏙️</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Renders y visualizaciones</h4>
            <p className="text-sm text-gray-700">
              Imágenes 3D del proyecto terminado, vistas de interiores, exteriores y perspectivas aéreas.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-3xl">📸</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Fotografías de avance</h4>
            <p className="text-sm text-gray-700">
              Fotos del progreso de la obra para informar a los compradores sobre el estado de construcción.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="mb-3 text-3xl">📣</div>
            <h4 className="mb-2 font-semibold text-[#2d2d2d]">Material publicitario</h4>
            <p className="text-sm text-gray-700">
              Brochures, flyers, banners digitales y cualquier pieza gráfica generada para la campaña de ventas.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Cómo subir contenido a la Galería
        </h3>
        <div className="space-y-4">
          {[
            { title: "Accede a la Galería", desc: "En el módulo Cartera selecciona la sección Galería para ver los álbumes del proyecto." },
            { title: "Crea o selecciona un álbum", desc: "Organiza el contenido en álbumes por tipo (Planos, Renders, Fotos de obra, Marketing, etc.)." },
            { title: "Sube los archivos", desc: "Haz clic en 'Subir archivo' y selecciona las imágenes o documentos desde tu equipo." },
            { title: "Agrega descripción y etiquetas", desc: "Describe el contenido y etiqueta por unidad, piso o categoría para facilitar la búsqueda." },
            { title: "Comparte con el equipo", desc: "El material queda disponible para todo el equipo comercial con acceso al módulo Cartera." },
          ].map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4db8a8] text-lg font-bold text-white">
                {index + 1}
              </div>
              <div className="flex-1">
                <h4 className="mb-1 font-semibold text-[#2d2d2d]">{step.title}</h4>
                <p className="text-sm text-gray-700">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border-l-4 border-[#4db8a8] bg-[#d4f1eb] px-6 py-4">
        <h4 className="mb-3 font-semibold text-[#2d2d2d]">💡 Buenas prácticas</h4>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
          <li>Organiza el contenido en álbumes nombrados de forma clara (ej: "Planos Dpto. 301", "Renders Exteriores")</li>
          <li>Mantén actualizado el material de avance de obra para informar a los compradores</li>
          <li>Usa etiquetas para filtrar el contenido por unidad o tipo fácilmente</li>
          <li>Sube materiales en alta resolución para que el equipo comercial pueda usarlos en presentaciones</li>
          <li>Elimina contenido desactualizado para evitar confusiones en el equipo de ventas</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/cartera/inmuebles"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
        >
          Ver Inmuebles →
        </Link>
        <Link
          href="/cartera/ventas"
          className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
        >
          Ver Ventas →
        </Link>
      </div>
    </div>
  );
}

