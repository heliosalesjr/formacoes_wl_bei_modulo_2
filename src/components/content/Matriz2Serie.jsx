import { FaCheckCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const objetivosBNCC_parte1 = [
  {
    label: "Revisão do 1º ano (ao longo do livro).",
    code: "EF01MA01-08, EF01MA10, EF01MA19, EF01MA21-22",
    caps: [1, 2],
  },
  {
    label:
      "Comparar e ordenar números naturais (até a ordem de centenas) pela compreensão de características do sistema de numeração decimal (valor posicional e função do zero).",
    code: "EF02MA01",
    caps: [1, 2],
  },
  {
    label:
      'Comparar quantidades de objetos de dois conjuntos, por estimativa e/ou por correspondência (um a um, dois a dois, entre outros), para indicar "tem mais", "tem menos" ou "tem a mesma quantidade", indicando, quando for o caso, quantos a mais e quantos a menos.',
    code: "EF02MA03",
    caps: [1, 2],
  },
  {
    label:
      "Indicar a duração de intervalos de tempo entre duas datas, como dias da semana e meses do ano, utilizando calendário, para planejamentos e organização de agenda.",
    code: "EF02MA18",
    caps: [2],
  },
  {
    label:
      "Comparar informações de pesquisas apresentadas por meio de tabelas de dupla entrada e em gráficos de colunas simples ou barras, para melhor compreender aspectos da realidade próxima.",
    code: "EF02MA22",
    caps: [2],
  },
];

const titulosCapitulos_parte1 = [
  "Capítulo 1: Eu preciso ou eu quero?",
  "Capítulo 2: Como evitar o desperdício",
];

const objetivosBNCC_parte2 = [
  {
    label: "Revisão do 1º ano (ao longo do livro).",
    code: "EF01MA01-08, EF01MA10, EF01MA19, EF01MA21-22",
    caps: [3, 4],
  },
  {
    label: "Construir fatos básicos da adição e subtração e utilizá-los no cálculo mental ou escrito.",
    code: "EF02MA05",
    caps: [3, 4],
  },
  {
    label:
      "Resolver e elaborar problemas de adição e de subtração, envolvendo números de até três ordens, com os significados de juntar, acrescentar, separar, retirar, utilizando estratégias pessoais.",
    code: "EF02MA06",
    caps: [3, 4],
  },
  {
    label:
      "Resolver e elaborar problemas de multiplicação (por 2, 3, 4 e 5) com a ideia de adição de parcelas iguais por meio de estratégias e formas de registro pessoais, utilizando ou não suporte de imagens e/ou material manipulável.",
    code: "EF02MA07",
    caps: [4],
  },
  {
    label:
      "Resolver e elaborar problemas envolvendo dobro, metade, triplo e terça parte, com o suporte de imagens ou material manipulável, utilizando estratégias pessoais.",
    code: "EF02MA08",
    caps: [4],
  },
  {
    label:
      "Construir sequências de números naturais em ordem crescente ou decrescente a partir de um número qualquer, utilizando uma regularidade estabelecida.",
    code: "EF02MA09",
    caps: [3, 4],
  },
  {
    label:
      "Descrever um padrão (ou regularidade) de sequências repetitivas e de sequências recursivas, por meio de palavras, símbolos ou desenhos.",
    code: "EF02MA10",
    caps: [3, 4],
  },
  {
    label: "Descrever os elementos ausentes em sequências repetitivas e em sequências recursivas de números naturais, objetos ou figuras.",
    code: "EF02MA11",
    caps: [4],
  },
  {
    label:
      "Estabelecer a equivalência de valores entre moedas e cédulas do sistema monetário brasileiro para resolver situações cotidianas.",
    code: "EF02MA20",
    caps: [3, 4],
  },
  {
    label:
      "Realizar pesquisa em universo de até 30 elementos, escolhendo até três variáveis categóricas de seu interesse, organizando os dados coletados em listas, tabelas e gráficos de colunas simples.",
    code: "EF02MA23",
    caps: [4],
  },
];

const titulosCapitulos_parte2 = [
  "Capítulo 3: Um passeio pela confeitaria",
  "Capítulo 4: Nossa sobremesa favorita",
];

const objetivosBNCC_parte3 = [
  {
    label:
      "Resolver e elaborar problemas de multiplicação (por 2, 3, 4 e 5) com a ideia de adição de parcelas iguais por meio de estratégias e formas de registro pessoais, utilizando ou não suporte de imagens e/ou material manipulável.",
    code: "EF02MA07",
    caps: [5],
  },
  {
    label:
      "Resolver e elaborar problemas envolvendo dobro, metade, triplo e terça parte, com o suporte de imagens ou material manipulável, utilizando estratégias pessoais.",
    code: "EF02MA08",
    caps: [5],
  },
  {
    label:
      "Construir sequências de números naturais em ordem crescente ou decrescente a partir de um número qualquer, utilizando uma regularidade estabelecida.",
    code: "EF02MA09",
    caps: [5],
  },
  {
    label:
      "Descrever um padrão (ou regularidade) de sequências repetitivas e de sequências recursivas, por meio de palavras, símbolos ou desenhos.",
    code: "EF02MA10",
    caps: [5],
  },
  {
    label: "Descrever os elementos ausentes em sequências repetitivas e em sequências recursivas de números naturais, objetos ou figuras.",
    code: "EF02MA11",
    caps: [5],
  },
  {
    label: "Revisão",
    code: "",
    caps: [6],
  },
];

const titulosCapitulos_parte3 = [
  "Capítulo 5: Alcançando objetivos",
  "Capítulo 6: Revisão e celebrando as conquistas de nossos objetivos",
];


function TabelaParte({ titulo, objetivos, capitulos, titulosCapitulos, offset }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-3 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700 first:border-0 first:pt-0">
        <span className="h-px w-8 bg-green-300 dark:bg-green-800" />
        <p className="text-sm font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
          {titulo}
        </p>
        <span className="h-px w-8 bg-green-300 dark:bg-green-800" />
      </div>

      <div className="overflow-auto rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
        <table className="w-full text-left text-sm md:text-base">
          <thead className="bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 font-semibold">
            <tr>
              <th className="p-3">Objetivo de Conhecimento</th>
              {capitulos.map((n) => (
                <th key={n} className="p-3 text-center">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-help">Cap. {n}</span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{titulosCapitulos[n - offset]}</p>
                    </TooltipContent>
                  </Tooltip>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {objetivos.map((obj, i) => (
              <tr key={i} className="hover:bg-green-50/40 dark:hover:bg-green-950/40 transition">
                <td className="p-3">
                  <span className="font-medium text-slate-800 dark:text-slate-100">{obj.label}</span>
                  {obj.code && (
                    <span className="text-green-600 dark:text-green-400 font-semibold ml-2">
                      ({obj.code})
                    </span>
                  )}
                </td>

                {capitulos.map((cap) => (
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
  );
}

export default function Matriz2Serie() {
  return (
    <TooltipProvider>
      <div className="space-y-10">
        <TabelaParte
          titulo="Parte 1"
          objetivos={objetivosBNCC_parte1}
          capitulos={[1, 2]}
          titulosCapitulos={titulosCapitulos_parte1}
          offset={1}
        />
        <TabelaParte
          titulo="Parte 2"
          objetivos={objetivosBNCC_parte2}
          capitulos={[3, 4]}
          titulosCapitulos={titulosCapitulos_parte2}
          offset={3}
        />
        <TabelaParte
          titulo="Parte 3"
          objetivos={objetivosBNCC_parte3}
          capitulos={[5, 6]}
          titulosCapitulos={titulosCapitulos_parte3}
          offset={5}
        />
      </div>
    </TooltipProvider>
  );
}
