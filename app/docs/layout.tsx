"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
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
    href: "/docs/obra",
    label: "Obra",
    subItems: [
      { href: "/docs/obra/presupuesto", label: "Presupuesto" },
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
    label: "Recursos visuales",
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
  const pathname = usePathname();

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    );
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  // Expandir automáticamente la sección activa cuando cambia la ruta
  useEffect(() => {
    for (const item of navItems) {
      if (item.subItems.length > 0) {
        if (item.subItems.some(subItem => pathname === subItem.href || pathname.startsWith(subItem.href + "/"))) {
          setExpandedItems([item.href]);
          return;
        }
      }
    }
    setExpandedItems([]);
  }, [pathname]);

  // Cerrar menú móvil al cambiar de ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);
  return (
    <div className="min-h-screen bg-[#e8e8e8]">
      <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-10 lg:py-10">
        
        {/* Mobile Header */}
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-Esfera-texto_250x250.png"
              alt="Esfera.AI Logo"
              width={50}
              height={50}
              className="h-12 w-12 object-contain"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#4db8a8]">
                Esfera.ai Docs
              </p>
              <h1 className="text-xl font-semibold text-[#2d2d2d]">
                Manual de uso
              </h1>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-[#4db8a8] bg-white p-2 text-[#4db8a8] transition hover:bg-[#4db8a8] hover:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        
        <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
          {/* Sidebar */}
          <aside className={`
            fixed inset-y-0 left-0 z-50 w-[85%] max-w-sm transform overflow-y-auto bg-[#e8e8e8] p-4 transition-transform duration-300 ease-in-out
            lg:static lg:z-auto lg:w-auto lg:max-w-none lg:transform-none lg:overflow-visible lg:p-0
            lg:sticky lg:top-6 lg:self-start
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}>
            <div className="rounded-3xl border border-gray-300 bg-white p-6 shadow-sm lg:p-10">
              {/* Desktop Header */}
              <div className="hidden items-center gap-3 lg:flex">
                <Image
                  src="/logo-Esfera-texto_250x250.png"
                  alt="Esfera.AI Logo"
                  width={80}
                  height={80}
                  className="h-17 w-17 object-contain"
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
              
              {/* Mobile Close Button */}
              <div className="mb-4 flex items-center justify-between lg:hidden">
                <h2 className="text-lg font-semibold text-[#2d2d2d]">Menú</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg p-1 text-gray-500 hover:bg-gray-100"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className={`mt-4 max-h-[calc(100vh-250px)] overflow-hidden group lg:mt-8 ${styles.scrollableNav}`}>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      {item.subItems.length > 0 ? (
                        <button
                          onClick={() => toggleExpanded(item.href)}
                          className={`w-full flex items-center justify-between rounded-2xl border px-4 py-3 text-base transition lg:px-5 lg:py-4 lg:text-lg ${
                            isActive(item.href)
                              ? "border-[#4db8a8] bg-[#d4f1eb] text-[#2d2d2d] font-semibold"
                              : "border-transparent text-[#2d2d2d] hover:border-gray-200 hover:bg-gray-50"
                          }`}
                        >
                          <span>{item.label}</span>
                          <span
                            className={`text-base text-[#4db8a8] transition-transform ${
                              expandedItems.includes(item.href) ? "rotate-90" : ""
                            }`}
                          >
                            →
                          </span>
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-base transition lg:px-5 lg:py-4 lg:text-lg ${
                            isActive(item.href)
                              ? "border-[#4db8a8] bg-[#d4f1eb] text-[#2d2d2d] font-semibold"
                              : "border-transparent text-[#2d2d2d] hover:border-gray-200 hover:bg-gray-50"
                          }`}
                        >
                          <span>{item.label}</span>
                          <span className="text-base text-[#4db8a8]">→</span>
                        </Link>
                      )}
                      
                      {item.subItems.length > 0 && (
                        <ul
                          className={`mt-2 space-y-2 border-l-2 border-gray-200 pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                            expandedItems.includes(item.href) ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          {item.subItems.map((subItem) => (
                            <li key={subItem.href}>
                              <Link
                                href={subItem.href}
                                className={`block rounded-lg px-4 py-2 text-sm transition ${
                                  isActive(subItem.href)
                                    ? "bg-[#4db8a8] text-white font-semibold"
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
              </nav>
            </div>
          </aside>
          <main className="rounded-3xl border border-gray-300 bg-white p-6 shadow-lg md:p-12 lg:p-20">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}