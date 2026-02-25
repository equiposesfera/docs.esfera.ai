import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e8e8e8]">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-12 px-6 py-20 lg:px-10">
        <div className="inline-flex w-fit items-center gap-3 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#4db8a8]"></span>
          Documentación de Esfera.AI
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-Esfera-texto_250x250.png"
                alt="Esfera.AI Logo"
                width={80}
                height={80}
                className="h-20 w-20 object-contain"
              />
              <h1 className="text-4xl font-semibold leading-tight text-[#2d2d2d] md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
                Tu plataforma IA para proyectos de construcción
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-gray-700">
              Esfera.AI te ayuda a gestionar cada etapa de tu proyecto: desde presupuestos y análisis de precios, pasando por ejecución, planillas y almacén, hasta la gestión comercial de clientes e inmuebles. Con inteligencia artificial integrada para optimizar tus decisiones.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#4db8a8] px-8 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#3a9688]"
                href="docs/introduccion"
              >
                Conocer Esfera.AI
              </Link>
              <Link
                className="inline-flex h-12 items-center justify-center rounded-full border border-gray-400 bg-white px-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#2d2d2d] transition hover:border-gray-600"
                href="docs/primeros-pasos/registro"
              >
                Comenzar ahora
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-300 bg-white p-8 shadow-lg">
            <div className="space-y-5">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
                Características
                <span className="rounded-full bg-[#d4f1eb] px-3 py-1 text-gray-700">v1</span>
              </div>
              <h2 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
                Control total de tu construcción
              </h2>
              <p className="text-sm leading-6 text-gray-700">
                Una plataforma integrada con IA para cada módulo de tu negocio constructivo.
              </p>
              <div className="grid gap-4">
                {[
                  "Análisis de precios y presupuestos",
                  "Control de avances y cuadrillas",
                  "Gestión integral de compras",
                  "Almacén y cobranza de clientes",
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
