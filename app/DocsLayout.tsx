"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const navItems = [
  { 
    href: "/introduccion", 
    label: "Introduccion",
    subItems: []
  },
  { 
    href: "/flujo-trabajo", 
    label: "Flujo de trabajo",
    subItems: []
  },
  { 
    href: "/primeros-pasos", 
    label: "Primeros pasos",
    subItems: [
      { href: "/primeros-pasos/registro", label: "Registro de cuenta" },
      { href: "/primeros-pasos/verificacion", label: "Verificación de email" },
      { href: "/primeros-pasos/suscripcion", label: "Suscripción" },
      { href: "/primeros-pasos/olvido-contrasena", label: "Olvido de contraseña" },
      { href: "/primeros-pasos/crear-empresa", label: "Crear tu empresa" },
      { href: "/primeros-pasos/crear-primer-proyecto", label: "Crear tu primer proyecto" },
    ]
  },
  { 
    href: "/usuarios", 
    label: "Usuarios y permisos",
    subItems: [
      { href: "/usuarios/agregar", label: "Agregar usuarios" },
      { href: "/usuarios/permisos", label: "Permisos" }
    ]
  },
  {
    href: "/personas",
    label: "Personas",
    subItems: [
      { href: "/personas/comitentes", label: "Comitentes" },
      { href: "/personas/contratistas", label: "Contratistas" },
      { href: "/personas/proveedores", label: "Proveedores" },
    ]
  },
  {
    href: "/analisis-precio-unitario",
    label: "Analisis de precio unitario",
    subItems: [
      { href: "/analisis-precio-unitario/items", label: "Items" },
      { href: "/analisis-precio-unitario/mano-de-obra", label: "Mano de obra" },
      { href: "/analisis-precio-unitario/materiales-y-servicios", label: "Materiales y servicios" },
      { href: "/analisis-precio-unitario/equipos-maquinarias-herramientas", label: "Equipos, maquinarias y herramientas" },
      { href: "/analisis-precio-unitario/unidades-de-medida", label: "Unidades de medida" },
      { href: "/analisis-precio-unitario/grupos", label: "Grupos" },
      { href: "/analisis-precio-unitario/categorias", label: "Categorías" },
    ]
  },
  {
    href: "/presupuesto",
    label: "Presupuesto",
    subItems: [
      { href: "/presupuesto/computo", label: "Cómputo" },
      { href: "/presupuesto/presupuesto", label: "Presupuesto" },
      { href: "/presupuesto/ejecucion", label: "Ejecución" },
      { href: "/presupuesto/cronograma", label: "Cronograma" },
    ]
  },
  {
    href: "/obra",
    label: "Obra",
    subItems: [
      { href: "/obra/avances", label: "Avances" },
      { href: "/obra/planillas", label: "Planillas" },
      { href: "/obra/retenciones", label: "Retenciones" },
    ]
  },
  {
    href: "/compras",
    label: "Compras",
    subItems: [
      { href: "/compras/pedidos", label: "Pedidos" },
      { href: "/compras/cotizaciones", label: "Cotizaciones" },
      { href: "/compras/autorizaciones", label: "Autorizaciones" },
      { href: "/compras/ordenes-de-compra", label: "Ordenes de compra" },
    ]
  },
  {
    href: "/almacen",
    label: "Almacen",
    subItems: [
      { href: "/almacen/entradas", label: "Entradas" },
      { href: "/almacen/salidas", label: "Salidas" },
      { href: "/almacen/stock", label: "Stock" },
    ]
  },
  
  {    href: "/cartera",
    label: "Cartera",
    subItems: [
      { href: "/cartera/inmuebles", label: "Inmuebles" },
      { href: "/cartera/clientes", label: "Clientes" },
      { href: "/cartera/ventas", label: "Ventas" },
      { href: "/cartera/galeria", label: "Galeria" },
    ]
  },
  { 
    href: "/recursos-visuales", 
    label: "Video Tutoriales",
    subItems: []
  },
  { 
    href: "/faq", 
    label: "FAQ",
    subItems: []
  },
];

export function DocsLayout({
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
    <div className="relative mt-4 mb-4">
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
              src="/logo-Esfera_120x120.png"
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
                    src="/logo-Esfera_120x120.png"
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
              {renderSearchBox()}
              <nav className={`pr-2 ${styles.scrollableNav}`} style={{ maxHeight: "calc(100dvh - 10rem)" }}>
                {renderNavList()}
              </nav>
            </div>
          </div>
        )}

        <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
          <aside className="hidden lg:block lg:sticky lg:top-8" style={{ height: "90vh" }}>
            <div className="rounded-3xl border border-gray-300 bg-white p-10 shadow-sm h-full flex flex-col">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo-Esfera_120x120.png"
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
              {renderSearchBox()}
              <nav className={`mt-4 pr-2 flex-1 overflow-hidden ${styles.scrollableNav}`}>
                {renderNavList()}
              </nav>
            </div>
          </aside>
          <main className="rounded-3xl border border-gray-300 bg-white p-12 shadow-lg md:p-20">
            {children}
          </main>
        </div>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/15557021023?text=Ayuda"
          className={styles.whatsappBtn}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chatea con nosotros en WhatsApp"
        >
          <Image
            src="/WhatsApp_icon.png"
            alt="WhatsApp"
            width={32}
            height={32}
          />
        </a>
      </div>
    </div>
  );
}
