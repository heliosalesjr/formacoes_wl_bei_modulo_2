"use client";
import { useState } from "react";
import { useMarkViewedOnVisible } from "@/hooks/useMarkViewedOnVisible";
import confetti from "canvas-confetti";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const perguntas = [
  {
    id: 1,
    enunciado:
      "Qual das metas abaixo melhor representa a aplicação da ferramenta SMART em um projeto escolar com os alunos?",
    opcoes: [
      "A) Incentivar os alunos a pensarem no futuro e refletirem sobre dinheiro.",
      "B) Ajudar os alunos a economizarem, se possível, para alguma coisa que eles queiram.",
      "C) Propor que cada aluno defina uma meta específica, como “juntar R$ 20 por semana, durante 5 semanas, para comprar um livro que custa R$ 100”.",
    ],
    correta: 2,
    feedbacks: [
      "Essa resposta é muito vaga. Pensar no futuro é importante, mas não define uma meta SMART.",
      "Ainda está genérico demais. Economizar é bom, mas falta clareza, prazo e mensuração.",
      "Perfeito! Essa resposta é específica, mensurável, atingível, relevante e temporal — exatamente como propõe a metodologia SMART.",
    ],
  },
  {
    id: 2,
    enunciado:
      "Durante uma atividade em sala de aula, a professora propõe que os alunos criem metas financeiras. Qual das opções a seguir mostra que a professora está aplicando corretamente a ferramenta SMART?",
    opcoes: [
      "A) Ela pede que os alunos escrevam um texto livre sobre o que gostariam de ter no futuro.",
      "B) Ela orienta os alunos a definirem metas específicas, com prazo, valor definido e justificativa pessoal.",
      "C) Ela sugere que os alunos pensem em algo importante, mas deixa que decidam se querem escrever ou apenas conversar em grupo.",
    ],
    correta: 1,
    feedbacks: [
      "A ideia é boa, mas falta estrutura e objetividade. O texto livre não garante metas SMART.",
      "Excelente! Essa opção está alinhada aos critérios da metodologia SMART.",
      "Essa abordagem pode ser útil, mas não garante metas específicas, mensuráveis ou com prazo definido.",
    ],
  },
];

export default function SmartQuiz() {
  const ref = useMarkViewedOnVisible("quiz-smart");

  const [respostas, setRespostas] = useState({});
  const [feedback, setFeedback] = useState({
    open: false,
    perguntaId: null,
    mensagem: "",
    correta: false,
  });

  const handleResposta = (perguntaIndex, opcaoIndex) => {
    const pergunta = perguntas[perguntaIndex];
    const jaAcertou = respostas[pergunta.id] === pergunta.correta;

    if (jaAcertou) return; // impede alteração se já acertou

    const correta = opcaoIndex === pergunta.correta;

    if (correta) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }

    setRespostas((prev) => ({
      ...prev,
      [pergunta.id]: correta ? opcaoIndex : prev[pergunta.id],
    }));

    setFeedback({
      open: true,
      perguntaId: pergunta.id,
      mensagem: pergunta.feedbacks[opcaoIndex],
      correta,
    });
  };

  const closeFeedback = () => {
    setFeedback({ open: false, perguntaId: null, mensagem: "", correta: false });
  };

  return (
    <div
      ref={ref}
      id="quiz-smart"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700"
    >
      <div className="flex items-center justify-center gap-3 mb-8">

        <h2 className="text-2xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent dark:bg-none dark:text-white">
          Quiz: Aplicando as metas SMART
        </h2>

      </div>

      <div className="space-y-10 text-slate-700 dark:text-slate-200">
        {perguntas.map((pergunta, perguntaIndex) => {
          const respostaUsuario = respostas[pergunta.id];

          return (
            <div key={pergunta.id} className="space-y-4">
              <p className="text-xl font-medium">{pergunta.enunciado}</p>
              <div className="space-y-3">
                {pergunta.opcoes.map((opcao, opcaoIndex) => {
                  const selecionada = respostaUsuario === opcaoIndex;
                  const jaAcertou = respostaUsuario === pergunta.correta;

                  const cor =
                    selecionada && opcaoIndex === pergunta.correta
                      ? "bg-green-100 dark:bg-green-900/30 border-green-400 dark:border-green-500 text-green-800 dark:text-green-300 font-semibold"
                      : selecionada && opcaoIndex !== pergunta.correta
                      ? "bg-red-100 dark:bg-red-900/30 border-red-400 dark:border-red-500 text-red-800 dark:text-red-300"
                      : "bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border-slate-300 dark:border-slate-600 dark:text-slate-200";

                  return (
                    <button
                      key={opcaoIndex}
                      onClick={() => handleResposta(perguntaIndex, opcaoIndex)}
                      disabled={jaAcertou}
                      className={`w-full text-left px-4 py-3 rounded-md border transition-all duration-300 ease-in-out ${cor}`}
                    >
                      {opcao}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <AlertDialog open={feedback.open}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>
              {feedback.correta ? "✅ Resposta correta!" : "❌ Resposta incorreta"}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-600 dark:text-slate-300 mt-2">
              {feedback.mensagem}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end mt-4">
            <Button onClick={closeFeedback}>Fechar</Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
