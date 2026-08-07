import { FaCheckCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const objetivosBNCC = [
  {
    label: "Revisão do 8º ano",
    code: "",
    caps: [1],
  },
  {
    label: "Operação com números racionais",
    code: "EF09MA04",
    caps: [1],
  },
  {
    label: "Interpretação de gráficos e tabelas",
    code: "EF09MA21, EF09MA22 e EF09MA23",
    caps: [1],
  },
  {
    label: "Operações com números racionais na representação fracionária",
    code: "EF09MA03 e EF09MA04",
    caps: [2],
  },
  {
    label: "Porcentagem",
    code: "EF09MA05",
    caps: [2],
  },
  {
    label: "Gráficos de pizza",
    code: "EF09MA21 e EF09MA22",
    caps: [2],
  },
  {
    label: "Equação polinomial de 1º grau",
    code: "EF09MA06 e EF09MA07",
    caps: [2],
  },
  {
    label: "Juros compostos",
    code: "EF09MA05 e EF09MA06",
    caps: [3],
  },
  {
    label: "Função Exponencial",
    code: "EF09MA03 e EF09MA06",
    caps: [3],
  },
  {
    label: "Proporções e porcentagens",
    code: "EF09MA05 e EF09MA08",
    caps: [4],
  },
  {
    label: "Inflação e taxa de inflação",
    code: "EF09MA05, EF09MA06 e EF09MA21",
    caps: [4],
  },
];

const titulosCapitulos = [
  "Primeira Etapa",
  "Segunda Etapa",
  "Terceira Etapa",
  "Quarta Etapa",
];


export default function Matriz9() {
  return (
    <TooltipProvider>
      {/* 📊 TABELA BNCC */}
      <div className="overflow-auto rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
        <table className="w-full text-left text-sm md:text-base">
          <thead className="bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-semibold">
            <tr>
              <th className="p-3">Objetivo de Conhecimento</th>
              {[1, 2, 3, 4].map((n) => (
                <th key={n} className="p-3 text-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-help">Etapa {n}</span>
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
              <tr key={i} className="hover:bg-amber-50/40 dark:hover:bg-amber-950/40 transition">
                <td className="p-3">
                  <span className="font-medium text-slate-800 dark:text-slate-100">{obj.label}</span>
                  {obj.code && (
                    <span className="text-amber-600 dark:text-amber-400 font-semibold ml-2">
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
