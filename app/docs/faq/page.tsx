const faqs = [
  {
    question: "Cuantos usuarios puedo invitar?",
    answer: "No hay limite tecnico; ajusta segun tu plan y permisos internos.",
  },
  {
    question: "Puedo cambiar el orden de los pasos?",
    answer: "Si, puedes mover secciones y adaptar el flujo a tu producto.",
  },
  {
    question: "Cada cuanto debo revisar permisos?",
    answer: "Recomendamos una revision mensual y otra antes de auditorias.",
  },
];

export default function FAQPage() {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
        Preguntas frecuentes
      </h3>
      <div className="grid gap-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-2xl border border-gray-200 bg-white px-5 py-4">
            <summary className="cursor-pointer text-sm font-semibold text-gray-800">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-6 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
