"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "¿Mis datos quedan privados?",
    answer:
      "Sí. Cada cuenta ve únicamente su propia información — está separada a nivel de base de datos, no solo oculta en la interfaz.",
  },
  {
    question: "¿Puedo usar Nimbus con mi propio producto?",
    answer:
      "Es un proyecto pensado como base: podés conectar tus propias fuentes de datos y adaptar las métricas a lo que necesites medir.",
  },
  {
    question: "¿Qué pasa si me registro solo para probarlo?",
    answer:
      "Perfecto, para eso está. Cada cuenta nueva arranca con datos de ejemplo cargados, así ves el panel funcionando de inmediato.",
  },
  {
    question: "¿Necesito tarjeta de crédito para entrar?",
    answer: "No, el registro es libre y no pide ningún medio de pago.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg italic">
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-muted transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <p className="max-w-xl pb-6 text-sm text-muted">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}