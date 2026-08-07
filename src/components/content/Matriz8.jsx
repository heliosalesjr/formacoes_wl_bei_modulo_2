import { FaCheckCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const objetivosBNCC = [
  {
    label: "Revisão do 7º ano",
    code: "",
    caps: [1],
  },
  {
    label: "Porcentagens",
    code: "EF08MA04",
    caps: [1],
  },
  {
    label: "Notação Científica",
    code: "EF08MA01",
    caps: [1],
  },
  {
    label: "Volume de bloco retangular e Medidas de capacidade",
    code: "EF04MA20 e EF08MA21",
    caps: [1],
  },
  {
    label: "Princípio multiplicativo da contagem",
    code: "EF08MA03",
    caps: [1],
  },
  {
    label: "Valor numérico de expressões algébricas",
    code: "EF08MA06",
    caps: [2],
  },
  {
    label: "Associação de uma equação linear de 1º grau e uma reta no plano cartesiano",
    code: "EF08MA07",
    caps: [2],
  },
  {
    label:
      "Variação de grandezas: diretamente proporcionais, inversamente proporcionais ou não proporcionais",
    code: "EF08MA12 e EF08MA13",
    caps: [2],
  },
  {
    label:
      "Sistema de equações polinomiais de 1º grau: resolução algébrica e representação no plano cartesiano",
    code: "EF08MA08",
    caps: [2],
  },
  {
    label: "Sequências recursivas e não recursivas",
    code: "EF08MA10 e EF08MA11",
    caps: [2],
  },
  {
    label:
      "Gráficos de barras, linhas, colunas ou setores e seus elementos constitutivos e adequação para determinado conjunto de dados",
    code: "EF08MA23",
    caps: [3],
  },
  {
    label: "Medidas de tendência central e de dispersão",
    code: "EF08MA25",
    caps: [3],
  },
  {
    label: "Pesquisa censitária ou amostral",
    code: "EF08MA26",
    caps: [4],
  },
  {
    label: "Planejamento e execução de pesquisa amostral",
    code: "EF08MA27",
    caps: [4],
  },
  {
    label: "Soma das probabilidades de todos os elementos de um espaço amostral",
    code: "EF08MA22",
    caps: [4],
  },
];

const titulosCapitulos = [
  "Parte 1: Consumo Sustentável e Economia Circular",
  "Parte 2: Aprendendo a Poupar",
  "Parte 3: Ricos e Pobres",
  "Parte 4: Cidadania e Solidariedade",
];


export default function Matriz8() {
  return (
    <TooltipProvider>
      {/* 📊 TABELA BNCC */}
      <div className="overflow-auto rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
        <table className="w-full text-left text-sm md:text-base">
          <thead className="bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold">
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
              <tr key={i} className="hover:bg-blue-50/40 dark:hover:bg-blue-950/40 transition">
                <td className="p-3">
                  <span className="font-medium text-slate-800 dark:text-slate-100">{obj.label}</span>
                  {obj.code && (
                    <span className="text-blue-600 dark:text-blue-400 font-semibold ml-2">
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
