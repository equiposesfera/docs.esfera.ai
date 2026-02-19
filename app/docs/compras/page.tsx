export default function ComprasPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
        <span>Modulo</span>
        <span className="h-1 w-1 rounded-full bg-[#4db8a8]"></span>
        <span>Actualizado Feb 2026</span>
      </div>
      <h2 className="text-3xl font-semibold text-[#2d2d2d] md:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Compras
      </h2>
      <p className="text-base leading-7 text-gray-700 md:text-lg">
        Gestiona requisiciones, cotizaciones, ordenes de compra y seguimiento de proveedores.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {["Requisiciones", "Cotizaciones", "Ordenes"].map((item) => (
          <div key={item} className="rounded-2xl border border-gray-200 bg-[#d4f1eb] px-4 py-3 text-sm font-medium text-gray-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
