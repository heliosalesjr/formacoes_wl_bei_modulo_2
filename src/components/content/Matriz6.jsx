import { FaCheckCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const objetivosBNCC = [
  {
    label: "Revisão do 5º ano",
    code: "",
    caps: [1],
  },
  {
    label: "Sistema de numeração decimal",
    code: "EF06MA01",
    caps: [2],
  },
  {
    label: "Operações com números naturais / Divisão euclidiana",
    code: "EF06MA03",
    caps: [2],
  },
  {
    label: "Fluxograma para determinar paridade de um número natural",
    code: "EF06MA04, EF06MA05",
    caps: [2],
  },
  {
    label: "Propriedades da igualdade",
    code: "EF06MA14",
    caps: [2],
  },
  {
    label: "Problemas sobre medidas envolvendo grandezas e Aproximação de números para múltiplos de potências de 10",
    code: "EF06MA12, EF06MA24",
    caps: [2],
  },
  {
    label: "Operações com números racionais",
    code: "EF06MA11",
    caps: [3],
  },
  {
    label: "Frações",
    code: "EF06MA06, EF06MA07, EF06MA08, EF06MA09, EF06MA10",
    caps: [4],
  },
  {
    label: "Cálculo de porcentagem",
    code: "EF06MA13",
    caps: [4],
  },
  {
    label: "Problemas que tratam da partição de um todo em duas partes desiguais",
    code: "EF06MA15",
    caps: [4],
  },
  {
    label: "Leitura e interpretação de tabelas e gráficos",
    code: "EF06MA32",
    caps: [5],
  },
  {
    label: "Coleta de dados",
    code: "EF06MA33",
    caps: [5],
  },
  {
    label: "Diferentes tipos de representação de informações",
    code: "EF06MA34",
    caps: [5],
  },
  {
    label: "Cálculo de probabilidade",
    code: "EF06MA30",
    caps: [5],
  },
];

const titulosCapitulos = [
  "Parte 1: Dinheiro e valores da sociedade",
  "Parte 2: Uma visita ao mercado",
  "Parte 3: O que fazer com o dinheiro?",
  "Parte 4: Dividindo uma refeição entre os amigos",
  "Parte 5: Montando a celebração de fim de ano na escola"
];


export default function Matriz6() {
  return (
    <TooltipProvider>
      {/* 📊 TABELA BNCC */}
      <div className="overflow-auto rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
        <table className="w-full text-left text-sm md:text-base">
          <thead className="bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-semibold">
            <tr>
              <th className="p-3">Objetivo de Conhecimento</th>
              {[1, 2, 3, 4, 5].map((n) => (
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
              <tr key={i} className="hover:bg-purple-50/40 dark:hover:bg-purple-950/40 transition">
                <td className="p-3">
                  <span className="font-medium text-slate-800 dark:text-slate-100">{obj.label}</span>
                  {obj.code && (
                    <span className="text-purple-600 dark:text-purple-400 font-semibold ml-2">
                      ({obj.code})
                    </span>
                  )}
                </td>

                {[1, 2, 3, 4, 5].map((cap) => (
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
