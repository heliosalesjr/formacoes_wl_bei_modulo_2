import { FaCheckCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const objetivosBNCC = [
  {
    label:
      "Contagem de rotina, contagem ascendente e descendente; utilizar números naturais como indicador de quantidade.",
    code: "EF01MA01",
    caps: [1, 2, 3, 4],
  },
  {
    label: "Quantificação de elementos de uma coleção: contar de maneira exata ou aproximada.",
    code: "EF01MA02",
    caps: [1, 2, 3, 4],
  },
  {
    label:
      "Quantificação de elementos de uma coleção: estimar e comparar quantidades de objetos de dois conjuntos; em torno de vinte elementos.",
    code: "EF01MA03",
    caps: [1, 2, 3, 4],
  },
  {
    label: "Contar a quantidade de objetos de coleções até cem unidades.",
    code: "EF01MA04",
    caps: [1, 2, 3, 4],
  },
  {
    label: "Comparar números naturais de até duas ordens, com e sem o suporte da reta numérica.",
    code: "EF01MA05",
    caps: [2, 3, 4],
  },
  {
    label: "Construir fatos básicos da adição.",
    code: "EF01MA06",
    caps: [1, 2, 3, 4],
  },
  {
    label: "Compor e decompor número de até duas ordens, por meio de diferentes adições.",
    code: "EF01MA07",
    caps: [3, 4],
  },
  {
    label: "Resolver problemas de adição e subtração (juntar, acrescentar, separar e retirar).",
    code: "EF01MA08",
    caps: [4],
  },
  {
    label: "Sequências recursivas (mais 1, mais 2, menos 1, menos 2).",
    code: "EF01MA10",
    caps: [1, 2, 3, 4],
  },
  {
    label: "Reconhecer e relacionar valores de moedas e cédulas do sistema monetário brasileiro.",
    code: "EF01MA19",
    caps: [2, 3, 4],
  },
];

const titulosCapitulos = [
  "Capítulo 1: O que precisamos comprar?",
  "Capítulo 2: Um passeio pela feira",
  "Capítulo 3: Comprando as frutas na feira",
  "Capítulo 4: A hora da comilança",
];

const objetivosBNCC_parte2 = [
  {
    label: "Construir fatos básicos da adição.",
    code: "EF01MA06",
    caps: [5, 6, 7],
  },
  {
    label: "Compor e decompor número de até duas ordens, por meio de diferentes adições.",
    code: "EF01MA07",
    caps: [5, 6, 7],
  },
  {
    label: "Resolver problemas de adição e subtração (juntar, acrescentar, separar e retirar).",
    code: "EF01MA08",
    caps: [5, 6, 7],
  },
  {
    label: "Sequências recursivas (mais 1, mais 2, menos 1, menos 2).",
    code: "EF01MA10",
    caps: [5, 6, 7],
  },
  {
    label: "Ler dados expressos em tabelas e gráficos de colunas simples.",
    code: "EF01MA21",
    caps: [6, 7],
  },
  {
    label: "Realizar pesquisa, envolvendo até duas variáveis categóricas.",
    code: "EF01MA22",
    caps: [6, 7],
  },
];

const titulosCapitulos_parte2 = [
  "Capítulo 5: Procurando brinquedos na feira",
  "Capítulo 6: Quem não quer um animal de estimação?",
  "Capítulo 7: Celebrando o Dia das Crianças",
];


export default function Matriz1Serie() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-orange-300 dark:bg-orange-800" />
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-400">
          Parte 1
        </p>
        <span className="h-px w-8 bg-orange-300 dark:bg-orange-800" />
      </div>

      <TooltipProvider>
        {/* 📊 TABELA BNCC */}
        <div className="space-y-4">
          <div className="overflow-auto rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 font-semibold">
                <tr>
                  <th className="p-3">Objetivo de Conhecimento</th>
                  {[1, 2, 3, 4].map((n) => (
                    <th key={n} className="p-3 text-center">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-help">Cap. {n}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{titulosCapitulos[n - 1]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {objetivosBNCC.map((obj, i) => (
                  <tr key={i} className="hover:bg-orange-50/40 dark:hover:bg-orange-950/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800 dark:text-slate-100">{obj.label}</span>
                      {obj.code && (
                        <span className="text-orange-600 dark:text-orange-400 font-semibold ml-2">
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
        <span className="h-px w-8 bg-orange-300 dark:bg-orange-800" />
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-400">
          Parte 2
        </p>
        <span className="h-px w-8 bg-orange-300 dark:bg-orange-800" />
      </div>

      <TooltipProvider>
        {/* 📊 TABELA BNCC - PARTE 2 */}
        <div className="space-y-4">
          <div className="overflow-auto rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 font-semibold">
                <tr>
                  <th className="p-3">Objetivo de Conhecimento</th>
                  {[5, 6, 7].map((n) => (
                    <th key={n} className="p-3 text-center">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="cursor-help">Cap. {n}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{titulosCapitulos_parte2[n - 5]}</p>
                        </TooltipContent>
                      </Tooltip>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                {objetivosBNCC_parte2.map((obj, i) => (
                  <tr key={i} className="hover:bg-orange-50/40 dark:hover:bg-orange-950/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800 dark:text-slate-100">{obj.label}</span>
                      {obj.code && (
                        <span className="text-orange-600 dark:text-orange-400 font-semibold ml-2">
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
