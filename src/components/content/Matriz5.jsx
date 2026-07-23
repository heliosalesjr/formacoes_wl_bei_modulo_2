import { FaCheckCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const objetivosBNCC = [
  {
    label: "Revisão do 4º ano",
    code: "EF04MA01-06, EF04MA11-15",
    caps: [1],
  },
  {
    label: "Números racionais expressos na forma decimal e sua representação na reta numérica",
    code: "EF05MA02",
    caps: [1, 2, 3, 4],
  },
  {
    label: "Representação fracionária dos números racionais: reconhecimento, significados e leitura",
    code: "EF05MA03",
    caps: [4],
  },
  {
    label: "Comparação e ordenação de números racionais na representação decimal e na fracionária utilizando a noção de equivalência",
    code: "EF05MA04 e EF05MA05",
    caps: [1, 2, 3, 4],
  },
  {
    label: "Cálculo de porcentagens e representação fracionária",
    code: "EF05MA06",
    caps: [4],
  },
  {
    label: "Problemas: adição e subtração de números naturais e números racionais cuja representação decimal é finita",
    code: "EF05MA07",
    caps: [1, 2],
  },
  {
    label: "Problemas: multiplicação e divisão de números racionais cuja representação decimal é finita por números naturais",
    code: "EF05MA08",
    caps: [3, 4],
  },
  {
    label: "Propriedades da igualdade e noção de equivalência",
    code: "EF05MA10 e EF05MA11",
    caps: [3, 4],
  },
  {
    label: "Grandezas diretamente proporcionais",
    code: "EF05MA12 e EF05MA13",
    caps: [3, 4],
  },
  {
    label: "Leitura, coleta, classificação interpretação e representação de dados em tabelas de dupla entrada, gráfico de colunas agrupadas, gráficos pictóricos e gráfico de linhas",
    code: "EF05MA24 e EF05MA25",
    caps: [1],
  },
];

const titulosCapitulos = [
  "Capítulo 1: A festa dos meus sonhos",
  "Capítulo 2: Planejando o cardápio da festa!",
  "Capítulo 3: Os custos da festa",
  "Capítulo 4: Recebendo os meus presentes de aniversário",
];

const objetivosBNCC_parte2 = [
  {
    label: "Números racionais expressos na forma decimal e sua representação na reta numérica",
    code: "EF05MA02",
    caps: [5, 6, 7],
  },
  {
    label: "Comparação e ordenação de números racionais na representação decimal e na fracionária utilizando a noção de equivalência",
    code: "EF05MA04 e EF05MA05",
    caps: [5, 6, 7],
  },
  {
    label: "Problemas: multiplicação e divisão de números racionais cuja representação decimal é finita por números naturais",
    code: "EF05MA08",
    caps: [5, 6, 7],
  },
  {
    label: "Propriedades da igualdade e noção de equivalência",
    code: "EF05MA10 e EF05MA11",
    caps: [5, 6, 7],
  },
  {
    label: "Grandezas diretamente proporcionais",
    code: "EF05MA12 e EF05MA13",
    caps: [5, 6, 7],
  },
  {
    label: "Leitura, coleta, classificação interpretação e representação de dados em tabelas de dupla entrada, gráfico de colunas agrupadas, gráficos pictóricos e gráfico de linhas",
    code: "EF05MA24 e EF05MA25",
    caps: [5],
  },
  {
    label: "Revisão do livro",
    code: "",
    caps: [7],
  },
];

const titulosCapitulos_parte2 = [
  "Capítulo 5: Como é ser dona de uma loja de brinquedos",
  "Capítulo 6: Aprendendo a fazer uma propaganda",
  "Capítulo 7: Tudo que aprendemos juntos",
];


export default function Matriz5() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-cyan-300 dark:bg-cyan-800" />
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
          Parte 1
        </p>
        <span className="h-px w-8 bg-cyan-300 dark:bg-cyan-800" />
      </div>

      <TooltipProvider>
        {/* 📊 TABELA BNCC */}
        <div className="space-y-4">
          <div className="overflow-auto rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-purple-100 dark:bg-purple-950 text-cyan-700 dark:text-cyan-300 font-semibold">
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
                  <tr key={i} className="hover:bg-purple-50/40 dark:hover:bg-purple-950/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800 dark:text-slate-100">{obj.label}</span>
                      {obj.code && (
                        <span className="text-purple-600 dark:text-purple-400 font-semibold ml-2">
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

      {/* DIVISOR PARTES 2 E 3 */}
      <div className="flex items-center justify-center gap-3 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700">
        <span className="h-px w-8 bg-cyan-300 dark:bg-cyan-800" />
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
          Partes 2 e 3
        </p>
        <span className="h-px w-8 bg-cyan-300 dark:bg-cyan-800" />
      </div>

      <TooltipProvider>
        {/* 📊 TABELA BNCC - PARTE 2 */}
        <div className="space-y-4">
          <div className="overflow-auto rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
            <table className="w-full text-left text-sm md:text-base">
              <thead className="bg-purple-100 dark:bg-purple-950 text-cyan-700 dark:text-cyan-300 font-semibold">
                <tr>
                  <th className="p-3">Objetivo de Conhecimento</th>
                  {[5, 6, 7].map((n) => (
                    <th key={n} className={`p-3 text-center ${n === 7 ? 'bg-orange-100 dark:bg-orange-950 text-cyan-700 dark:text-cyan-300' : ''}`}>
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
                  <tr key={i} className="hover:bg-purple-50/40 dark:hover:bg-purple-950/40 transition">
                    <td className="p-3">
                      <span className="font-medium text-slate-800 dark:text-slate-100">{obj.label}</span>
                      {obj.code && (
                        <span className="text-purple-600 dark:text-purple-400 font-semibold ml-2">
                          ({obj.code})
                        </span>
                      )}
                    </td>

                    {[5, 6, 7].map((cap) => (
                      <td key={cap} className={`p-3 text-center ${cap === 7 ? 'bg-orange-50 dark:bg-orange-950/40' : ''}`}>
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
