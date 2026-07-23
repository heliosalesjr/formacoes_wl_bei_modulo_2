import { FaCheckCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const objetivosBNCC = [
  {
    label: "Revisão do 3º ano",
    code: "",
    caps: [1],
  },
  {
    label: "Sistema de numeração decimal",
    code: "EF04MA01",
    caps: [1, 2, 3],
  },

  {
    label:
      "Propriedades das operações para o desenvolvimento de diferentes estratégias de cálculo com números naturais",
    code: "EF04MA03-05",
    caps: [1, 2, 3],
  },

  {
    label:
      "Problemas envolvendo diferentes significados da multiplicação e da divisão: adição de parcelas iguais, configuração retangular, proporcionalidade, repartição equitativa e medida",
    code: "EF04MA06-08",
    caps: [1, 2, 3, 4],
  },

  {
    label: "Propriedades da igualdade",
    code: "EF04MA14-15",
    caps: [1, 2, 3],
  },

  {
    label: "Problemas utilizando o sistema monetário brasileiro",
    code: "EF04MA25",
    caps: [1, 2, 3, 4],
  },

  {
    label: "Inferir informações implícitas nos textos lidos",
    code: "EF35LP04",
    caps: [1],
  },

  {
    label:
      "Opinar e defender ponto de vista sobre tema polêmico relacionado a situações vivenciadas na escola e/ou na comunidade, utilizando registro formal e estrutura adequada à argumentação, considerando a situação comunicativa e o tema/assunto do texto. ",
    code: "EF04MA09",
    caps: [1],
  },

  {
    label: "Números racionais: frações unitárias mais usuais (1/2, 1/3 e 1/4)",
    code: "EF35LP04",
    caps: [2],
  },

  {
    label:
      "Sequência numérica recursiva formada por múltiplos de um número natural",
    code: "EF04MA11",
    caps: [2, 3, 4],
  },


  {
    label:
      "Relações entre adição e subtração e entre multiplicação e divisão",
    code: "EF04MA12-13",
    caps: [2, 4],
  },


  {
    label:
      "Ler e compreender, com autonomia, boletos, faturas e carnês, dentre outros gêneros do campo da vida cotidiana.",
    code: "EF04LP09",
    caps: [2],
  },
];

const titulosCapitulos = [
  "Capítulo 1: De onde vem o dinheiro?",
  "Capítulo 2: Bateu uma fome! Onde vamos comer?",
  "Capítulo 3: Aprendendo a economizar dinheiro",
  "Capítulo 4: Sonhando com um presente de aniversário",
];

const objetivosBNCC_parte2 = [
  {
    label: "Propriedades da igualdade",
    code: "EF04MA14-15",
    caps: [5],
  },
  {
    label: "Problemas utilizando o sistema monetário brasileiro",
    code: "EF04MA25",
    caps: [5],
  },
  {
    label: "Números racionais: representação decimal para escrever valores do sistema monetário brasileiro",
    code: "EF04MA10",
    caps: [5],
  },
  {
    label: "Identificar gêneros do discurso oral, utilizados em diferentes situações e contextos comunicativos, e suas características linguístico-expressivas e composicionais",
    code: "EF35LP10",
    caps: [5],
  },
  {
    label: "Identificar, em narrativas, cenário, personagem central, conflito gerador, resolução e o ponto de vista com base no qual histórias são narradas",
    code: "EF35LP29",
    caps: [5],
  },
  {
    label: "Leitura, interpretação e representação de dados em gráficos de colunas simples, gráficos de barras e colunas",
    code: "EF04MA27",
    caps: [6],
  },
  {
    label: "Coleta, classificação e representação de dados de pesquisa realizada",
    code: "EF04MA28",
    caps: [6],
  },
  {
    label: "Reconhecer especificidades e analisar a interdependência do campo e da cidade, considerando fluxos econômicos, de informações, de ideias e de pessoas",
    code: "EF04GE04",
    caps: [6],
  },
  {
    label: "Comparar as características do trabalho no campo e na cidade",
    code: "EF04GE07",
    caps: [6],
  },
  {
    label: "Descrever e discutir o processo de produção (transformação de matérias-primas), circulação e consumo de diferentes produtos",
    code: "EF04GE08",
    caps: [6],
  },
  {
    label: "Opinar e defender ponto de vista sobre tema polêmico relacionado a situações vivenciadas na escola e/ou na comunidade, utilizando registro formal e estrutura adequada à argumentação, considerando a situação comunicativa e o tema/assunto do texto",
    code: "EF35LP15",
    caps: [6],
  },
  {
    label: "Revisão do livro",
    code: "",
    caps: [7],
  },
];

const titulosCapitulos_parte2 = [
  "Capítulo 5: De olho nas promoções",
  "Capítulo 6: Minha responsabilidade como consumidor e cidadão",
  "Capítulo 7: Tudo que aprendemos",
];


export default function Matriz2() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-red-300 dark:bg-red-800" />
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600 dark:text-red-400">
          Parte 1
        </p>
        <span className="h-px w-8 bg-red-300 dark:bg-red-800" />
      </div>

      <TooltipProvider>
        {/* 📊 TABELA BNCC */}
        <div className="space-y-4">
          <div className="overflow-auto rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-semibold">
                <tr>
                  <th className="p-3">Objetivo de Conhecimento</th>
                  {[1, 2, 3, 4].map((n) => (
                    <th key={n} className="p-3 text-center">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-help">Cap. {n}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{titulosCapitulos[n-1]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {objetivosBNCC.map((obj, i) => (
                  <tr key={i} className="hover:bg-red-50/40 dark:hover:bg-red-950/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800 dark:text-slate-100">{obj.label}</span>
                      {obj.code && (
                        <span className="text-red-600 dark:text-red-400 font-semibold ml-2">
                          ({obj.code})
                        </span>
                      )}
                    </td>

                    {[1, 2, 3, 4].map((cap) => (
                      <td key={cap} className="p-3 text-center">
                        {obj.caps.includes(cap) && (
                          <FaCheckCircle className="text-green-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </TooltipProvider>

      {/* DIVISOR PARTE 2 */}
      <div className="flex items-center justify-center gap-3 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700">
        <span className="h-px w-8 bg-red-300 dark:bg-red-800" />
        <p className="text-sm font-semibold uppercase tracking-widest text-red-600 dark:text-red-400">
          Parte 2
        </p>
        <span className="h-px w-8 bg-red-300 dark:bg-red-800" />
      </div>

      <TooltipProvider>
        {/* 📊 TABELA BNCC - PARTE 2 */}
        <div className="space-y-4">
          <div className="overflow-auto rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-semibold">
                <tr>
                  <th className="p-3">Objetivo de Conhecimento</th>
                  {[5, 6, 7].map((n) => (
                    <th key={n} className="p-3 text-center">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-help">Cap. {n}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{titulosCapitulos_parte2[n-5]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {objetivosBNCC_parte2.map((obj, i) => (
                  <tr key={i} className="hover:bg-red-50/40 dark:hover:bg-red-950/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800 dark:text-slate-100">{obj.label}</span>
                      {obj.code && (
                        <span className="text-red-600 dark:text-red-400 font-semibold ml-2">
                          ({obj.code})
                        </span>
                      )}
                    </td>

                    {[5, 6, 7].map((cap) => (
                      <td key={cap} className="p-3 text-center">
                        {obj.caps.includes(cap) && (
                          <FaCheckCircle className="text-green-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </TooltipProvider>

    </div>
  );
}
