export default function Home() {
  return (
    <div className="min-h-screen bg-[#e8e8e8]">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-12 px-6 py-20 lg:px-10">
        <div className="inline-flex w-fit items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-700 shadow-sm">
          Documentacion para Esfera
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold leading-tight text-[#2d2d2d] md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
              Documenta cada paso de tu app con claridad.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-gray-700">
              Este sitio explica el flujo completo: crear cuenta, crear empresa, abrir proyecto y
              sumar usuarios. Todo listo para crecer con tu producto.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#4db8a8] px-6 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3a9688]"
                href="/docs"
              >
                Ir a la documentacion
              </a>
              <a
                className="inline-flex h-12 items-center justify-center rounded-full border border-gray-400 bg-white px-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#2d2d2d] transition hover:border-gray-600"
                href="/docs/cuenta"
              >
                Ver los pasos
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-300 bg-white p-8 shadow-lg">
            <div className="space-y-5">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                Flujo guiado
                <span className="rounded-full bg-[#d4f1eb] px-3 py-1 text-gray-700">v1</span>
              </div>
              <h2 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
                Un onboarding que no deja dudas
              </h2>
              <p className="text-sm leading-6 text-gray-700">
                Cada paso tiene objetivos, requisitos y resultados. Sirve para equipos nuevos y
                clientes finales.
              </p>
              <div className="grid gap-4">
                {[
                  "Cuenta creada en minutos",
                  "Empresa lista con reglas claras",
                  "Proyecto con plantillas y permisos",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-[#4db8a8]"></span>
                    <span className="text-sm font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
