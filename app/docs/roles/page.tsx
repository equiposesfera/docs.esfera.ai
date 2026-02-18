export default function Paso5Page() {
  const step = {
    id: "paso-5",
    title: "Paso 5 · Ajusta roles",
    description:
      "Define permisos por area para mantener la seguridad sin frenar el trabajo.",
    bullets: [
      "Crea roles por equipo",
      "Limita accesos sensibles",
      "Revisa permisos cada mes",
    ],
  };

  return (
    <div className="space-y-6">
      <article className="rounded-3xl border border-gray-200 bg-white px-6 py-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
            {step.title}
          </h3>
          <span className="rounded-full bg-[#d4f1eb] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-700">
            Checklist
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-700 md:text-base">
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
    </div>
  );
}
