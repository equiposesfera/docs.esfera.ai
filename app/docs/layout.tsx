"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const navItems = [
  { 
    href: "/docs/introduccion", 
    label: "Introduccion",
    subItems: []
  },
  { 
    href: "/docs/primeros-pasos", 
    label: "Primeros pasos",
    subItems: [
      { href: "/docs/primeros-pasos/registro", label: "Registro de cuenta" },
      { href: "/docs/primeros-pasos/verificacion", label: "Verificación de email" },
      { href: "/docs/primeros-pasos/suscripcion", label: "Suscripción" },
      { href: "/docs/primeros-pasos/olvido-contrasena", label: "Olvido de contraseña" },
      { href: "/docs/primeros-pasos/crear-empresa", label: "Crear tu empresa" },
      { href: "/docs/primeros-pasos/crear-primer-proyecto", label: "Crear tu primer proyecto" },
    ]
  },
  { 
    href: "/docs/usuarios", 
    label: "Usuarios y permisos",
    subItems: [
      { href: "/docs/usuarios/agregar", label: "Agregar usuarios" },
      { href: "/docs/usuarios/permisos", label: "Permisos" }
    ]
  },
  {
    href: "/docs/personas",
    label: "Personas",
    subItems: [
      { href: "/docs/personas/comitentes", label: "Comitentes" },
      { href: "/docs/personas/contratistas", label: "Contratistas" },
      { href: "/docs/personas/proveedores", label: "Proveedores" },
    ]
  },
  {
    href: "/docs/analisis-precio-unitario",
    label: "Analisis de precio unitario",
    subItems: [
      { href: "/docs/analisis-precio-unitario/items", label: "Items" },
      { href: "/docs/analisis-precio-unitario/mano-de-obra", label: "Mano de obra" },
      { href: "/docs/analisis-precio-unitario/materiales-y-servicios", label: "Materiales y servicios" },
      { href: "/docs/analisis-precio-unitario/equipos-maquinarias-herramientas", label: "Equipos, maquinarias y herramientas" },
      { href: "/docs/analisis-precio-unitario/unidades-de-medida", label: "Unidades de medida" },
      { href: "/docs/analisis-precio-unitario/grupos", label: "Grupos" },
      { href: "/docs/analisis-precio-unitario/categorias", label: "Categorías" },
    ]
  },
  {
    href: "/docs/presupuesto",
    label: "Presupuesto",
    subItems: [
      { href: "/docs/presupuesto/computo", label: "Cómputo" },
      { href: "/docs/presupuesto/presupuesto", label: "Presupuesto" },
      { href: "/docs/presupuesto/ejecucion", label: "Ejecución" },
      { href: "/docs/presupuesto/cronograma", label: "Cronograma" },
    ]
  },
  {
    href: "/docs/obra",
    label: "Obra",
    subItems: [
      { href: "/docs/obra/avances", label: "Avances" },
      { href: "/docs/obra/planillas", label: "Planillas" },
      { href: "/docs/obra/retenciones", label: "Retenciones" },
    ]
  },
  {
    href: "/docs/compras",
    label: "Compras",
    subItems: [
      { href: "/docs/compras/pedidos", label: "Pedidos" },
      { href: "/docs/compras/cotizaciones", label: "Cotizaciones" },
      { href: "/docs/compras/autorizaciones", label: "Autorizaciones" },
      { href: "/docs/compras/ordenes-de-compra", label: "Ordenes de compra" },
    ]
  },
  {
    href: "/docs/almacen",
    label: "Almacen",
    subItems: [
      { href: "/docs/almacen/entradas", label: "Entradas" },
      { href: "/docs/almacen/salidas", label: "Salidas" },
      { href: "/docs/almacen/stock", label: "Stock" },
    ]
  },
  
  {    href: "/docs/cartera",
    label: "Cartera",
    subItems: [
      { href: "/docs/cartera/inmuebles", label: "Inmuebles" },
      { href: "/docs/cartera/clientes", label: "Clientes" },
      { href: "/docs/cartera/ventas", label: "Ventas" },
      { href: "/docs/cartera/galeria", label: "Galeria" },
    ]
  },
  { 
    href: "/docs/recursos-visuales", 
    label: "Recursos Visuales",
    subItems: []
  },
  { 
    href: "/docs/faq", 
    label: "FAQ",
    subItems: []
  },
];

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    );
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const filteredNavItems = searchQuery.trim()
    ? navItems
        .map((item) => {
          const q = searchQuery.toLowerCase();
          const topMatch = item.label.toLowerCase().includes(q);
          const matchingSubItems = item.subItems.filter((s) =>
            s.label.toLowerCase().includes(q)
          );
          if (topMatch) return item;
          if (matchingSubItems.length > 0)
            return { ...item, subItems: matchingSubItems };
          return null;
        })
        .filter(Boolean) as typeof navItems
    : navItems;

  const renderSearchBox = () => (
    <div className="relative mb-6">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
        🔍
      </span>
      <input
        type="search"
        placeholder="Buscar en la documentación..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-[#2d2d2d] outline-none transition focus:border-[#4db8a8] focus:bg-white focus:ring-2 focus:ring-[#4db8a8]/20"
      />
    </div>
  );

  const renderNavList = () => (
    <>
      {filteredNavItems.length === 0 && (
        <p className="rounded-2xl border border-gray-200 px-5 py-4 text-sm text-gray-500">
          Sin resultados para &ldquo;{searchQuery}&rdquo;
        </p>
      )}
      <ul className="space-y-4">
        {filteredNavItems.map((item) => (
        <li key={item.href}>
          {item.subItems.length > 0 ? (
            <button
              onClick={() => toggleExpanded(item.href)}
              className={`w-full flex items-center justify-between rounded-2xl border px-5 py-4 text-base transition ${
                isActive(item.href)
                  ? "border-[#4db8a8] bg-[#d4f1eb] text-[#2d2d2d]"
                  : "border-transparent text-[#2d2d2d] hover:border-gray-200 hover:bg-gray-50"
              }`}
            >
              <span>{item.label}</span>
              <span
                className={`text-sm text-[#4db8a8] transition-transform ${
                  expandedItems.includes(item.href) ? "rotate-90" : ""
                }`}
              >
                →
              </span>
            </button>
          ) : (
            <Link
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-base transition ${
                isActive(item.href)
                  ? "border-[#4db8a8] bg-[#d4f1eb] text-[#2d2d2d]"
                  : "border-transparent text-[#2d2d2d] hover:border-gray-200 hover:bg-gray-50"
              }`}
            >
              <span>{item.label}</span>
              <span className="text-sm text-[#4db8a8]">→</span>
            </Link>
          )}

          {item.subItems.length > 0 && (
            <ul
              className={`mt-2 space-y-2 border-l-2 border-gray-200 pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                expandedItems.includes(item.href) || searchQuery.trim() ? "max-h-96" : "max-h-0"
              }`}
            >
              {item.subItems.map((subItem) => (
                <li key={subItem.href}>
                  <Link
                    href={subItem.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-lg px-4 py-2 text-xs transition ${
                      isActive(subItem.href)
                        ? "bg-[#d4f1eb] text-[#2d2d2d]"
                        : "text-gray-700 hover:bg-[#d4f1eb] hover:text-[#2d2d2d]"
                    }`}
                  >
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
    </>
  );

  return (
    <div className="min-h-screen bg-[#e8e8e8]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-Esfera-texto_250x250.png"
              alt="Esfera.AI Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4db8a8]">
                Esfera.ai Docs
              </p>
              <h1 className="text-lg font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
                Manual de uso
              </h1>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-[#2d2d2d] shadow-sm"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/40"
              aria-label="Cerrar menu"
            />
            <div className="relative h-full w-[85%] max-w-sm bg-white p-6 shadow-xl">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo-Esfera-texto_250x250.png"
                    alt="Esfera.AI Logo"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                  />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4db8a8]">
                      Esfera.ai Docs
                    </p>
                    <h2 className="text-lg font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
                      Menu
                    </h2>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg border border-gray-200 px-3 py-1 text-sm text-gray-700"
                  aria-label="Cerrar menu"
                >
                  ✕
                </button>
              </div>
              <nav className={`pr-2 ${styles.scrollableNav}`} style={{ maxHeight: "75vh" }}>
                {renderSearchBox()}
                {renderNavList()}
              </nav>
            </div>
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
          <aside className="hidden lg:block lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-3xl border border-gray-300 bg-white p-10 shadow-sm">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-Esfera-texto_250x250.png"
                  alt="Esfera.AI Logo"
                  width={80}
                  height={80}
                  className="h-18 w-18 object-contain"
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4db8a8]">
                    Esfera.ai Docs
                  </p>
                  <h1 className="text-3xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
                    Manual de uso
                  </h1>
                </div>
              </div>
              <nav className={`mt-8 pr-2 ${styles.scrollableNav}`} style={{ maxHeight: "70vh" }}>
                {renderSearchBox()}
                {renderNavList()}
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