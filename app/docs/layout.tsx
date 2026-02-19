"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { 
    href: "/docs/introduccion", 
    label: "Introduccion",
    subItems: []
  },
  { 
    href: "/docs/cuenta", 
    label: "Paso 1 · Cuenta",
    subItems: [
      { href: "/docs/cuenta/registro", label: "Registro de cuenta" },
      { href: "/docs/cuenta/suscripcion", label: "Suscripción" },
      { href: "/docs/cuenta/olvido-contrasena", label: "Olvido de contraseña" },
      { href: "/docs/cuenta/verificacion", label: "Verificación de email" },
    ]
  },
  { 
    href: "/docs/empresa", 
    label: "Paso 2 · Empresa",
    subItems: [
      { href: "/docs/empresa/datos-basicos", label: "Datos básicos" },
      { href: "/docs/empresa/contactos", label: "Contactos" },
      { href: "/docs/empresa/branding", label: "Branding" },
      { href: "/docs/empresa/configuracion", label: "Configuración" },
    ]
  },
  { 
    href: "/docs/proyecto", 
    label: "Paso 3 · Proyecto",
    subItems: [
      { href: "/docs/proyecto/crear", label: "Crear proyecto" },
      { href: "/docs/proyecto/plantillas", label: "Plantillas" },
      { href: "/docs/proyecto/configuracion", label: "Configuración" },
      { href: "/docs/proyecto/equipo", label: "Equipo" },
    ]
  },
  { 
    href: "/docs/usuarios", 
    label: "Paso 4 · Usuarios",
    subItems: [
      { href: "/docs/usuarios/invitar", label: "Invitar usuarios" },
      { href: "/docs/usuarios/roles", label: "Asignar roles" },
      { href: "/docs/usuarios/permisos", label: "Permisos" },
      { href: "/docs/usuarios/notificaciones", label: "Notificaciones" },
    ]
  },
  { 
    href: "/docs/roles", 
    label: "Paso 5 · Roles",
    subItems: [
      { href: "/docs/roles/crear", label: "Crear roles" },
      { href: "/docs/roles/permisos-sensibles", label: "Permisos sensibles" },
      { href: "/docs/roles/auditoria", label: "Auditoría" },
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
    href: "/docs/almacen",
    label: "Almacen",
    subItems: [
      { href: "/docs/almacen/entradas", label: "Entradas" },
      { href: "/docs/almacen/salidas", label: "Salidas" },
      { href: "/docs/almacen/stock", label: "Stock" },
    ]
  },
  {
    href: "/docs/cartera",
    label: "Cartera",
    subItems: [
      { href: "/docs/cartera/inmuebles", label: "Inmuebles" },
      { href: "/docs/cartera/clientes", label: "Clientes" },
      { href: "/docs/cartera/ventas", label: "Ventas" },
      { href: "/docs/cartera/galeria", label: "Galeria" },
    ]
  },
  { 
    href: "/docs/recursos", 
    label: "Recursos",
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

  const toggleExpanded = (href: string) => {
    setExpandedItems((prev) =>
      prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]
    );
  };
  return (
    <div className="min-h-screen bg-[#e8e8e8]">
      <div className="mx-auto max-w-[1400px] px-6 py-10 lg:px-10">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4db8a8]">
              Esfera.ai Docs
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
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <button
                        onClick={() => item.subItems.length > 0 && toggleExpanded(item.href)}
                        className="w-full"
                      >
                        <Link
                          href={item.href}
                          className="flex items-center justify-between rounded-2xl border border-transparent px-5 py-4 text-lg text-[#2d2d2d] transition hover:border-gray-200 hover:bg-gray-50"
                        >
                          <span>{item.label}</span>
                          {item.subItems.length > 0 ? (
                            <span
                              className={`text-base text-[#4db8a8] transition-transform ${
                                expandedItems.includes(item.href) ? "rotate-90" : ""
                              }`}
                            >
                              →
                            </span>
                          ) : (
                            <span className="text-base text-[#4db8a8]">→</span>
                          )}
                        </Link>
                      </button>
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
                                className="block rounded-lg px-4 py-2 text-sm text-gray-700 transition hover:bg-[#d4f1eb] hover:text-[#2d2d2d]"
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