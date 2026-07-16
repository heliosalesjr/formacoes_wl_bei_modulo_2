"use client";
import { useState, useEffect, useRef } from "react";
import { useSidebar } from '@/contexts/SidebarContext';
import confetti from "canvas-confetti";

const perguntas = [
  { letra: "A", pergunta: "What? – O que será feito?", respostaCorreta: "Especifica a ação que será realizada de maneira objetiva e clara." },
  { letra: "B", pergunta: "Why? – Por que será feito?", respostaCorreta: "Aponta a motivação por trás da ação e sua importância." },
  { letra: "C", pergunta: "Where? – Onde será feito?", respostaCorreta: "Define o local onde a ação será executada." },
  { letra: "D", pergunta: "When? – Quando será feito?", respostaCorreta: "Estabelece o prazo para execução e ajuda a dividir em etapas." },
  { letra: "E", pergunta: "Who? – Quem vai fazer?", respostaCorreta: "Define quem será o responsável por executar ou acompanhar a ação." },
  { letra: "F", pergunta: "How? – Como será feito?", respostaCorreta: "Explica a forma como a ação será realizada, incluindo estratégias e meios." },
  { letra: "G", pergunta: "How much? – Quanto vai custar?", respostaCorreta: "Mostra o custo ou o esforço necessário para alcançar a meta." },
];

const opcoes = [
  "Define o local onde a ação será executada.",
  "Mostra o custo ou o esforço necessário para alcançar a meta.",
  "Aponta a motivação por trás da ação e sua importância.",
  "Estabelece o prazo para execução e ajuda a dividir em etapas.",
  "Define quem será o responsável por executar ou acompanhar a ação.",
  "Explica a forma como a ação será realizada, incluindo estratégias e meios.",
  "Especifica a ação que será realizada de maneira objetiva e clara.",
];

export default function WhGame() {
  const [respostas, setRespostas] = useState({});
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const handleChange = (letra, value) => {
    setRespostas({ ...respostas, [letra]: value });
  };

  const verificarRespostas = () => {
    setMostrarResultado(true);
    const acertouTudo = perguntas.every(p => respostas[p.letra] === p.respostaCorreta);
    if (acertouTudo) {
      confetti();
    }
  };

  const resetar = () => {
    setRespostas({});
    setMostrarResultado(false);
  };
  
  const ref = useRef();
    const { markAsViewed } = useSidebar();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            markAsViewed('ferramentas-5w2h-quiz');
          }
        },
        { threshold: 0.5 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => observer.disconnect();
    }, [markAsViewed]);

  return (
    
    
    <div
      id="ferramentas-5w2h-quiz"
      ref={ref}
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700 max-w-5xl mx-auto"
    >
      <div className="scroll-mt-20 flex items-center justify-center gap-3 mb-8">

        <h2 className="text-2xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent dark:bg-none dark:text-white">
          Relacione as perguntas do 5W2H às suas funções
        </h2>

      </div>

      <div className="space-y-6 text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
        {perguntas.map((p) => {
          const correta = respostas[p.letra] === p.respostaCorreta;
          return (
            <div
              key={p.letra}
              className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-800 transition-all ease-in-out duration-300"
            >
              <div className="font-semibold text-xl mb-3 dark:text-white">
                {p.letra}) {p.pergunta}
              </div>
              <select
                value={respostas[p.letra] || ""}
                onChange={(e) => handleChange(p.letra, e.target.value)}
                disabled={mostrarResultado && correta}
                className={`w-full border rounded p-3 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-300
                  ${
                    mostrarResultado
                      ? correta
                        ? "border-green-400 dark:border-green-500 bg-green-50 dark:bg-green-900/30"
                        : "border-red-400 dark:border-red-500 bg-red-50 dark:bg-red-900/30"
                      : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                  }
                `}
              >
                <option value="" disabled>
                  Selecione a função no planejamento
                </option>
                {opcoes.map((op, idx) => (
                  <option key={idx} value={op}>
                    {op}
                  </option>
                ))}
              </select>
              {mostrarResultado && (
                <p
                  className={`mt-3 rounded-md p-3 font-semibold ${
                    correta
                      ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                      : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                  } transition ease-in-out duration-300`}
                >
                  {correta
                    ? "✅ Correto!"
                    : `❌ Incorreto. Resposta correta: ${p.respostaCorreta}`}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-6 mt-10">
        {!mostrarResultado ? (
          <button
            onClick={verificarRespostas}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded text-white font-semibold"
          >
            Verificar Respostas
          </button>
        ) : (
          <button
            onClick={resetar}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 transition rounded text-white font-semibold"
          >
            Tentar Novamente
          </button>
        )}
      </div>
    </div>
  );
}
