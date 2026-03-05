const faqCategories = [
  {
    category: "Inicio y Configuración",
    faqs: [
      {
        question: "¿Cuánto tiempo toma configurar Esfera.AI?",
        answer: "La configuración básica toma entre 15-30 minutos: crear tu cuenta, configurar empresa y primer proyecto. Puedes empezar a usar la plataforma inmediatamente.",
      },
      {
        question: "¿Puedo agregar múltiples proyectos?",
        answer: "Sí, puedes crear ilimitados proyectos según tu plan. Cada proyecto tiene su presupuesto, equipo y historial independiente.",
      },
      {
        question: "¿Cómo me creo una suscripción?",
        answer: "La suscripción se completa después del registro. Elige plan, ingresa método de pago y accede a todos los módulos inmediatamente.",
      },
      {
        question: "¿Qué hago si olvido mi contraseña?",
        answer: "Usa la función 'Olvidé mi contraseña' en login. Recibirás un email con instrucciones para restablecerla en minutos.",
      },
    ],
  },
  {
    category: "Presupuesto y APU",
    faqs: [
      {
        question: "¿Cómo funciona el análisis de precio unitario?",
        answer: "Define items, mano de obra, materiales y equipos. Esfera.AI calcula automáticamente el costo unitario combinando insumos y rendimientos con la IA.",
      },
      {
        question: "¿Puedo actualizar presupuestos en tiempo real?",
        answer: "Sí, los presupuestos se actualizan automáticamente cuando cambias costos, avances o insumos. Los cambios se reflejan en reportes al instante.",
      },
      {
        question: "¿Puedo exportar datos?",
        answer: "Sí, exporta presupuestos, planillas, reportes y estadísticas en formatos estándar (PDF, Excel) para integración con otros sistemas.",
      },
    ],
  },
  {
    category: "Obra y Avances",
    faqs: [
      {
        question: "¿Cómo se registran los avances de obra?",
        answer: "Usa el módulo de Avances para registrar volumenes por frente de trabajo y agregar evidencias fotográficas. Esfera.AI calcula automáticamente el porcentaje de avance.",
      },
      {
        question: "¿Puedo generar planillas de trabajadores?",
        answer: "Sí, en el módulo de Obra registras asistencia, horas trabajadas y costos. La IA genera automáticamente reportes de nómina y análisis de costos.",
      },
      {
        question: "¿Cómo manejo las retenciones?",
        answer: "El módulo de Obra permite definir tipos de retención por monto y plazo. Esfera.AI calcula automáticamente y registra liberaciones.",
      },
    ],
  },
  {
    category: "Almacén",
    faqs: [
      {
        question: "¿Cómo gestiono el almacén?",
        answer: "Registra entradas de materiales, salidas por obra y controla niveles de stock. Esfera.AI alerta cuando inventario es bajo.",
      },
      {
        question: "¿Qué diferencia hay entre Compras y Almacén?",
        answer: "Compras: solicita, cotiza y autoriza adquisiciones. Almacén: recibe, almacena y distribuye materiales. Son módulos complementarios.",
      },
    ],
  },
  {
    category: "Compras",
    faqs: [
      {
        question: "¿Puedo solicitar múltiples cotizaciones?",
        answer: "Sí, crea pedidos con detalles de items y proveedores. Recibe cotizaciones en paralelo y compara precios y plazos en una sola vista.",
      },
      {
        question: "¿Cómo funcionan las autorizaciones de compra?",
        answer: "Define flujos de aprobación por monto. Solo usuarios autorizados pueden aprobar compras, dejando un rastro de auditoría completo.",
      },
    ],
  },
  {
    category: "Cartera y Clientes",
    faqs: [
      {
        question: "¿Puedo gestionar múltiples clientes?",
        answer: "Sí, en Cartera registras datos de clientes, contratos, inmuebles y estado de pagos. Genera reportes de cobranza automáticamente.",
      },
      {
        question: "¿Cómo hago seguimiento de pagos de clientes?",
        answer: "Registra facturas e ingresos en Cartera. Esfera.AI rastrea pagos pendientes, vencimientos y genera automáticamente recordatorios de cobranza.",
      },
      {
        question: "¿Cómo gestiono contratos con clientes?",
        answer: "Almacena contratos en cada cliente, adjunta documentos, define condiciones de pago y plazos. Recibe alertas de renovación o vencimiento automáticamente.",
      },
    ],
  },
  {
    category: "Usuarios y Permisos",
    faqs: [
      {
        question: "¿Cómo administro los permisos de mi equipo?",
        answer: "Asigna permisos granulares a nivel de módulo, proyecto y dato. Define quién puede editar, visualizar o eliminar información en cada área de trabajo.",
      },
      {
        question: "¿Cuáles son mis opciones de privacidad?",
        answer: "Tu datos están encriptados. Controla permisos detallados sobre quién ve qué información en cada módulo.",
      },
    ],
  },
  {
    category: "Inteligencia Artificial",
    faqs: [
      {
        question: "¿Cómo me ayuda la IA de Esfera.AI?",
        answer: "Solicita resúmenes de proyectos, predicciones de costos, análisis de avances o reportes especializados. La IA entiende contexto de construcción.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
        Preguntas frecuentes
      </h3>
      {faqCategories.map((category) => (
        <div key={category.category} className="space-y-4">
          <h4 className="text-lg font-semibold text-[#2d2d2d]" style={{ fontFamily: "var(--font-display)" }}>
            {category.category}
          </h4>
          <div className="grid gap-4">
            {category.faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-gray-200 bg-white px-5 py-4">
                <summary className="cursor-pointer text-sm font-semibold text-gray-800">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
