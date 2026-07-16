"use client";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/contexts/SidebarContext";

const perguntas = [
  {
    id: 1,
    enunciado:
      "O que caracteriza um projeto didático, segundo o módulo?",
    opcoes: [
      "A) Uma sequência de aulas conectadas entre si.",
      "B) Um conjunto de atividades pontuais e sem avaliação.",
      "C) Um percurso de aprendizagem com propósito definido, desenvolvido coletivamente pelos estudantes.",
      "D) Um planejamento exclusivo do professor, sem participação dos alunos.",
    ],
    correta: 2,
    feedbacks: [
      "Incorreto. Embora uma sequência de aulas possa fazer parte, o projeto didático é mais amplo e tem propósito definido.",
      "Incorreto. Projetos didáticos não são atividades pontuais, mas percursos planejados e avaliados.",
      "Correto! O projeto didático é uma metodologia ativa com propósito definido, desenvolvida coletivamente pelos estudantes.",
      "Incorreto. O planejamento é compartilhado, e os alunos participam ativamente da construção do projeto.",
    ],
  },
  {
    id: 2,
    enunciado:
      "O principal papel do professor na condução de projetos didáticos é:",
    opcoes: [
      "A) Avaliar os alunos ao final do processo.",
      "B) Organizar todo o projeto sozinho.",
      "C) Atuar como mediador e orientador do percurso de aprendizagem.",
      "D) Manter o foco apenas nos resultados mensuráveis.",
    ],
    correta: 2,
    feedbacks: [
      "Incorreto. Avaliar é importante, mas o papel central é o de mediação durante todo o processo.",
      "Incorreto. O projeto é construído coletivamente, não apenas pelo professor.",
      "Perfeito! O professor atua como mediador e orientador, estimulando reflexão e autonomia dos alunos.",
      "Incorreto. O foco está no processo de aprendizagem, não apenas em resultados numéricos.",
    ],
  },
  {
    id: 3,
    enunciado:
      "Verdadeiro ou Falso: Um projeto didático deve sempre partir de um tema proposto pelo professor, sem considerar o interesse da turma.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 1,
    feedbacks: [
      "Incorreto. O módulo enfatiza que os projetos devem partir de temas significativos e de interesse da turma.",
      "Correto! Os projetos devem nascer de temas contextualizados e que despertem interesse real dos estudantes.",
    ],
  },
  {
    id: 4,
    enunciado:
      "Verdadeiro ou Falso: O desenvolvimento de um projeto didático envolve etapas de planejamento, execução, acompanhamento e culminância.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 0,
    feedbacks: [
      "Correto! Essas etapas garantem sequência lógica e coerência pedagógica.",
      "Incorreto. O módulo destaca que essas etapas são essenciais para a construção do projeto.",
    ],
  },
  {
    id: 5,
    enunciado:
      "Qual das ferramentas abaixo não é apresentada no módulo como apoio ao planejamento de projetos?",
    opcoes: ["A) SWOT", "B) 5W2H", "C) SMART", "D) Matriz de Habilidades"],
    correta: 0,
    feedbacks: [
      "Correto! A análise SWOT não é mencionada entre as ferramentas do módulo.",
      "Incorreto. O 5W2H é sim uma das ferramentas apresentadas.",
      "Incorreto. A metodologia SMART também é utilizada no módulo.",
      "Incorreto. A Matriz de Habilidades faz parte das ferramentas de planejamento.",
    ],
  },
  {
  id: 6,
  enunciado:
    "Associe cada ferramenta ao seu propósito principal:",
  tabela: (
    <table className="w-full border border-slate-300 dark:border-slate-600 text-sm md:text-base my-4">
      <thead className="bg-slate-100 dark:bg-slate-700">
        <tr>
          <th className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">
            Ferramenta
          </th>
          <th className="border border-slate-300 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">
            Propósito
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">1. SMART</td>
          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
            ( ) Tornar os objetivos específicos, mensuráveis, atingíveis, relevantes e temporais
          </td>
        </tr>
        <tr>
          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">2. 5W2H</td>
          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
            ( ) Organizar o planejamento respondendo às perguntas o que, por que, quem, quando, onde, como e quanto
          </td>
        </tr>
        <tr>
          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">3. Matriz de Habilidades</td>
          <td className="border border-slate-300 dark:border-slate-600 px-3 py-2">
            ( ) Relacionar as habilidades da BNCC que serão trabalhadas em cada etapa do projeto
          </td>
        </tr>
      </tbody>
    </table>
  ),
  opcoes: [
    "A) 1-C, 2-A, 3-B",
    "B) 1-B, 2-C, 3-A",
    "C) 1-A, 2-B, 3-C",
    "D) 1-C, 2-B, 3-A",
  ],
  correta: 0,
  feedbacks: [
    "Correto! 1-C (SMART define objetivos), 2-A (5W2H organiza o planejamento), 3-B (Matriz relaciona habilidades).",
    "Incorreto. Reveja a correspondência entre as ferramentas e seus propósitos.",
    "Incorreto. Essa sequência não corresponde às descrições corretas.",
    "Incorreto. Há inversão entre as funções do 5W2H e da Matriz de Habilidades.",
  ],
},
  {
    id: 7,
    enunciado:
      "A ferramenta 5W2H é usada no módulo para:",
    opcoes: [
      "A) Criar estratégias de marketing para o projeto.",
      "B) Definir o cronograma e responsabilidades de cada ação.",
      "C) Avaliar o desempenho individual dos alunos.",
      "D) Substituir o planejamento pedagógico.",
    ],
    correta: 1,
    feedbacks: [
      "Incorreto. O 5W2H é voltado para o planejamento, não para marketing.",
      "Correto! O 5W2H organiza o cronograma, papéis e prazos de cada etapa do projeto.",
      "Incorreto. Essa ferramenta não serve para avaliação individual.",
      "Incorreto. O 5W2H complementa o planejamento, não o substitui.",
    ],
  },
  {
    id: 8,
    enunciado: "Na ferramenta SMART, o “S” significa:",
    opcoes: [
      "A) Sustentável",
      "B) Específico (Specific)",
      "C) Sistemático",
      "D) Significativo",
    ],
    correta: 1,
    feedbacks: [
      "Incorreto. O 'S' representa 'Specific' — Específico.",
      "Correto! O 'S' vem de 'Specific' (Específico).",
      "Incorreto. Embora SMART envolva sistematização, a palavra correta é 'Specific'.",
      "Incorreto. O termo é 'Specific', não 'Significativo'.",
    ],
  },
  {
    id: 9,
    enunciado:
      "Verdadeiro ou Falso: Um projeto didático pode ser interdisciplinar, articulando diferentes componentes curriculares.",
    opcoes: ["Verdadeiro", "Falso"],
    correta: 0,
    feedbacks: [
      "Correto! A interdisciplinaridade amplia o sentido e as conexões entre conteúdos.",
      "Incorreto. O módulo reforça que os projetos podem e devem ser interdisciplinares.",
    ],
  },
  {
    id: 10,
    enunciado:
      "Um dos principais objetivos dos projetos didáticos é:",
    opcoes: [
      "A) Promover o protagonismo e a autonomia dos estudantes.",
      "B) Substituir as aulas expositivas.",
      "C) Aumentar a quantidade de atividades avaliativas.",
      "D) Tornar o conteúdo mais fácil de decorar.",
    ],
    correta: 0,
    feedbacks: [
      "Correto! O protagonismo e a autonomia são pilares dos projetos didáticos.",
      "Incorreto. Os projetos não substituem aulas expositivas, mas as complementam.",
      "Incorreto. O foco é na qualidade da aprendizagem, não na quantidade de avaliações.",
      "Incorreto. Projetos didáticos buscam significado, não memorização.",
    ],
  },
];

export default function EncerramentoQuizModulo2() {
  const ref = useRef(null);
  const { markAsViewed } = useSidebar();
  const [respostas, setRespostas] = useState({});
  const [feedback, setFeedback] = useState({
    open: false,
    perguntaId: null,
    mensagem: "",
    correta: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) markAsViewed("modulo2-quiz");
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  const handleResposta = (perguntaIndex, opcaoIndex) => {
    const pergunta = perguntas[perguntaIndex];
    const jaAcertou = respostas[pergunta.id] === pergunta.correta;
    if (jaAcertou) return;
    const correta = opcaoIndex === pergunta.correta;
    if (correta) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
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

  const closeFeedback = () =>
    setFeedback({ open: false, perguntaId: null, mensagem: "", correta: false });

  const perguntasCorretas = Object.values(respostas).filter(
    (resposta, index) => resposta === perguntas[index]?.correta
  ).length;

  return (
    <div
      ref={ref}
      id="modulo2-quiz"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700"
    >
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent dark:bg-none dark:text-white pb-8 p-4">
            Quiz do Módulo 2
          </h2>
          <p className="text-slate-700 dark:text-slate-200 text-base md:text-lg max-w-3xl mx-auto">
            Agora que você concluiu o Módulo 2, teste seus conhecimentos sobre
            projetos didáticos e as ferramentas de planejamento apresentadas.
            Responda ao quiz e veja o quanto absorveu do conteúdo!
          </p>
        </div>
      </div>

      {Object.keys(respostas).length > 0 && (
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
          <p className="text-center text-blue-700 dark:text-blue-300 font-medium">
            Progresso: {perguntasCorretas} de {perguntas.length} perguntas corretas
          </p>
        </div>
      )}

      <div className="space-y-10 text-slate-700 dark:text-slate-200">
        {perguntas.map((pergunta, perguntaIndex) => {
          const respostaUsuario = respostas[pergunta.id];
          return (
            <div key={pergunta.id} className="space-y-4">
              <div className="text-xl font-medium">
                <span className="text-blue-600 dark:text-blue-400 font-bold">{pergunta.id}.</span>{" "}
                {pergunta.enunciado}
              </div>

              {pergunta.tabela && (
                <div className="mt-3">{pergunta.tabela}</div>
              )}

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
                      className={`w-full text-left px-4 py-3 rounded-md border transition-all duration-300 ease-in-out ${cor} ${
                        jaAcertou ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
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
