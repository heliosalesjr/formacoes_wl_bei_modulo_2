import { FaCheckCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const objetivosBNCC = [
  {
    label: "Múltiplos e divisores de um número natural",
    code: "EF07MA01",
    caps: [1],
  },
  {
    label: "Problemas envolvendo medições",
    code: "EF07MA29",
    caps: [1],
  },
  {
    label: "Cálculo de volume de blocos retangulares, utilizando unidades de medida convencionais mais usuais",
    code: "EF07MA30",
    caps: [1],
  },
  {
    label: "Números racionais na representação fracionária e na decimal",
    code: "EF07MA10, EF07MA11 e EF07MA12",
    caps: [1],
  },
  {
    label: "Fração e seus significados: como parte de inteiros, resultado da divisão, razão e operador",
    code: "EF07MA05, EF07MA06, EF07MA07, EF07MA08 e EF07MA09",
    caps: [1],
  },
  {
    label: "Gráficos de setores: interpretação, pertinência e construção para representar conjunto de dados",
    code: "EF07MA37",
    caps: [2],
  },
  {
    label: "Números inteiros: usos, história, ordenação, associação com pontos da reta numérica e operações",
    code: "EF07MA03 e EF07MA04",
    caps: [2],
  },
  {
    label: "Equivalência de expressões algébricas: identificação da regularidade de uma sequência numérica",
    code: "EF07MA16",
    caps: [3],
  },
  {
    label: "Linguagem algébrica: variável e incógnita",
    code: "EF07MA13, EF07MA14 e EF07MA15",
    caps: [3],
  },
  {
    label: "Problemas envolvendo grandezas diretamente proporcionais e grandezas inversamente proporcionais",
    code: "EF07MA17",
    caps: [3],
  },
  {
    label: "Equações polinomiais do 1º grau",
    code: "EF07MA18",
    caps: [3],
  },
  {
    label: "Cálculo de porcentagens e de acréscimos e decréscimos simples",
    code: "EF07MA02",
    caps: [3],
  },
  {
    label: "Experimentos aleatórios: espaço amostral e estimativa de probabilidade por meio de frequência de ocorrências",
    code: "EF07MA34",
    caps: [4],
  },
  {
    label: "Estatística: média e amplitude de um conjunto de dados",
    code: "EF07MA35",
    caps: [4],
  },
  {
    label: "Pesquisa amostral e pesquisa censitária",
    code: "EF07MA36",
    caps: [4],
  },
  {
    label: "Planejamento de pesquisa, coleta e organização dos dados, construção de tabelas e gráficos e interpretação das informações",
    code: "EF07MA36",
    caps: [4],
  },
];

const titulosCapitulos = [
  "Parte 1: Consumo vs. Consumismo",
  "Parte 2: Quem sabe administrar o dinheiro?",
  "Parte 3: Caminhando em direção aos sonhos",
  "Parte 4: É possível multiplicar sonhos",
];


export default function Matriz7() {
  return (
    <TooltipProvider>
      {/* 📊 TABELA BNCC */}
      <div className="overflow-auto rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
        <table className="w-full text-left text-sm md:text-base">
          <thead className="bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 font-semibold">
            <tr>
              <th className="p-3">Objetivo de Conhecimento</th>
              {[1, 2, 3, 4].map((n) => (
                <th key={n} className="p-3 text-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-help">Parte {n}</span>
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
              <tr key={i} className="hover:bg-rose-50/40 dark:hover:bg-rose-950/40 transition">
                <td className="p-3">
                  <span className="font-medium text-slate-800 dark:text-slate-100">{obj.label}</span>
                  {obj.code && (
                    <span className="text-rose-600 dark:text-rose-400 font-semibold ml-2">
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
    </TooltipProvider>
  );
}
