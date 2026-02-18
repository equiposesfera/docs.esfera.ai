import Link from "next/link";

const navItems = [
  { href: "/docs/introduccion", label: "Introduccion" },
  { href: "/docs/cuenta", label: "Paso 1 · Cuenta" },
  { href: "/docs/empresa", label: "Paso 2 · Empresa" },
  { href: "/docs/proyecto", label: "Paso 3 · Proyecto" },
  { href: "/docs/usuarios", label: "Paso 4 · Usuarios" },
  { href: "/docs/roles", label: "Paso 5 · Roles" },
  { href: "/docs/recursos", label: "Recursos" },
  { href: "/docs/faq", label: "FAQ" },
];

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#e8e8e8]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4db8a8]">
              Esfera Docs
            </p>
            <h1 className="text-4xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
              Manual de uso
            </h1>
          </div>
          <Link
            href="/"
            className="rounded-full border border-[#4db8a8] bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#2d2d2d] transition hover:bg-[#4db8a8] hover:text-white"
          >
            Inicio
          </Link>
        </div>
        <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <div className="rounded-3xl border border-gray-300 bg-white p-10 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4db8a8]">
                Secciones
              </p>
              <nav className="mt-8">
                <ul className="space-y-4 text-lg">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between rounded-2xl border border-transparent px-5 py-4 text-[#2d2d2d] transition hover:border-gray-200 hover:bg-gray-50"
                      >
                        <span>{item.label}</span>
                        <span className="text-base text-[#4db8a8]">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
          <main className="rounded-3xl border border-gray-300 bg-white p-12 shadow-lg md:p-20">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}