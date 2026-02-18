const resources = [
  {
    title: "Checklist de onboarding",
    detail: "Lista corta para validar que el equipo quedo activo.",
  },
  {
    title: "Guia de seguridad",
    detail: "Buenas practicas de acceso y roles.",
  },
  {
    title: "Plantillas de proyecto",
    detail: "Modelos para procesos repetibles.",
  },
];

export default function RecursosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
          Recursos rapidos
        </h3>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4db8a8]">Extras</span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {resources.map((resource) => (
          <div key={resource.title} className="rounded-3xl border border-gray-300 bg-[#5a5a5a] p-6 text-white">
            <h4 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              {resource.title}
            </h4>
            <p className="mt-3 text-sm text-white/80">{resource.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
