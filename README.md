# docs.esfera.ai

Sitio de documentación para [Esfera](https://docs.esfera.ai), construido con Next.js App Router y desplegado en GitHub Pages.

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Stack

- **Next.js 16** — App Router, exportación estática (`output: export`)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **pnpm**

## Despliegue

El sitio se despliega automáticamente en GitHub Pages al hacer push a `main` mediante el workflow [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml).

El build genera archivos estáticos en `./out` usando `STATIC_EXPORT=true`.

## SEO

- Sitemap: `https://docs.esfera.ai/sitemap.xml` — generado desde [`app/sitemap.ts`](app/sitemap.ts)
- Robots: `https://docs.esfera.ai/robots.txt` — generado desde [`app/robots.ts`](app/robots.ts)

## Estructura

```
app/
├── introduccion/         # Página de inicio
├── primeros-pasos/       # Registro, suscripción, configuración inicial
├── presupuesto/          # Presupuesto, cómputo, cronograma, ejecución
├── analisis-precio-unitario/  # APU: materiales, mano de obra, equipos, ítems
├── compras/              # Pedidos, cotizaciones, órdenes, autorizaciones
├── obra/                 # Avances, planillas, retenciones
├── almacen/              # Entradas, salidas, stock
├── cartera/              # Clientes, inmuebles, ventas, galería
├── personas/             # Comitentes, contratistas, proveedores
├── usuarios/             # Gestión de usuarios y permisos
├── flujo-trabajo/
├── ia-chat/
├── recursos-visuales/
└── faq/
```
