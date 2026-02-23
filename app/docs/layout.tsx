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
  return (
    <div className="min-h-screen bg-[#e8e8e8]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
        
        <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-3xl border border-gray-300 bg-white p-10 shadow-sm">
              <div className="flex items-center gap-3">
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
              <nav className={`mt-8 max-h-[calc(100vh-250px)] overflow-hidden group ${styles.scrollableNav}`}>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      {item.subItems.length > 0 ? (
                        <button
                          onClick={() => toggleExpanded(item.href)}
                          className={`w-full flex items-center justify-between rounded-2xl border px-5 py-4 text-lg transition ${
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
                          className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-lg transition ${
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
          <main className="rounded-3xl border border-gray-300 bg-white p-12 shadow-lg md:p-20">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}