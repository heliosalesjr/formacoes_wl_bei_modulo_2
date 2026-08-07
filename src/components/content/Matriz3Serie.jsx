import { FaCheckCircle } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";


const objetivosBNCC_parte1 = [
  {
    label: "Revisão do 2º ano (ao longo do livro).",
    code: "EF02MA01-11, EF02MA20, EF02MA22, EF02MA23",
    caps: [1, 2],
  },
  {
    label:
      "Ler, escrever e comparar números naturais de até a ordem de unidade de milhar, estabelecendo relações entre os registros numéricos e em língua materna.",
    code: "EF03MA01",
    caps: [1, 2],
  },
  {
    label:
      "Identificar características do sistema de numeração decimal, utilizando a composição e a decomposição de número natural de até quatro ordens.",
    code: "EF03MA02",
    caps: [1, 2],
  },
  {
    label: "Construir e utilizar fatos básicos da adição e da multiplicação para o cálculo mental ou escrito.",
    code: "EF03MA03",
    caps: [1, 2],
  },
  {
    label:
      "Estabelecer a relação entre números naturais e pontos da reta numérica para utilizá-la na ordenação dos números naturais e também na construção de fatos da adição e da subtração, relacionando-os com deslocamentos para a direita ou para a esquerda.",
    code: "EF03MA04",
    caps: [1, 2],
  },
  {
    label:
      "Utilizar diferentes procedimentos de cálculo mental e escrito para resolver problemas significativos envolvendo adição e subtração com números naturais.",
    code: "EF03MA05",
    caps: [1, 2],
  },
  {
    label:
      "Resolver e elaborar problemas de adição e subtração com os significados de juntar, acrescentar, separar, retirar, comparar e completar quantidades, utilizando diferentes estratégias de cálculo, incluindo cálculo mental e estimativa.",
    code: "EF03MA06",
    caps: [1, 2],
  },
  {
    label:
      "Resolver e elaborar problemas de divisão de um número natural por outro (até 10), com resto zero e com resto diferente de zero, com os significados de repartição equitativa e de medida, por meio de estratégias e registros pessoais.",
    code: "EF03MA08",
    caps: [1, 2],
  },
  {
    label:
      "Compreender a ideia de igualdade para escrever diferentes sentenças de adições ou de subtrações de dois números naturais que resultem na mesma soma ou diferença.",
    code: "EF03MA11",
    caps: [1, 2],
  },
  {
    label:
      "Resolver e elaborar problemas que envolvam a comparação e a equivalência de valores monetários do sistema brasileiro em situações de compra, venda e troca.",
    code: "EF03MA24",
    caps: [1, 2],
  },
  {
    label: "Resolver problemas cujos dados estão apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas.",
    code: "EF03MA26",
    caps: [1, 2],
  },
  {
    label:
      "Ler, interpretar e comparar dados apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas, envolvendo resultados de pesquisas significativas, utilizando termos como maior e menor frequência, apropriando-se desse tipo de linguagem para compreender aspectos da realidade sociocultural significativos.",
    code: "EF03MA27",
    caps: [1, 2],
  },
  {
    label:
      "Realizar pesquisa envolvendo variáveis categóricas em um universo de até 50 elementos, organizar os dados coletados utilizando listas, tabelas simples ou de dupla entrada e representá-los em gráficos de colunas simples, com e sem uso de tecnologias digitais.",
    code: "EF03MA28",
    caps: [1, 2],
  },
  {
    label:
      "Escutar, com atenção, falas de professores e colegas, formulando perguntas pertinentes ao tema e solicitando esclarecimentos sempre que necessário.",
    code: "EF15LP10",
    caps: [1, 2],
  },
  {
    label:
      "Reconhecer características da conversação espontânea presencial, respeitando os turnos de fala, selecionando e utilizando, durante a conversação, formas de tratamento adequadas, de acordo com a situação e a posição do interlocutor.",
    code: "EF15LP11",
    caps: [1, 2],
  },
  {
    label:
      "Atribuir significado a aspectos não linguísticos (paralinguísticos) observados na fala, como direção do olhar, riso, gestos, movimentos da cabeça (de concordância ou discordância), expressão corporal, tom de voz.",
    code: "EF15LP12",
    caps: [1, 2],
  },
  {
    label:
      "Identificar gêneros do discurso oral, utilizados em diferentes situações e contextos comunicativos, e suas características linguístico-expressivas e composicionais (conversação espontânea, conversação telefônica, entrevistas pessoais, entrevistas no rádio ou na TV, debate, noticiário de rádio e TV, narração de jogos esportivos no rádio e TV, aula, debate etc.).",
    code: "EF35LP10",
    caps: [1, 2],
  },
  {
    label:
      "Expor trabalhos ou pesquisas escolares, em sala de aula, com apoio em recursos multimodais (imagens, tabelas etc.), orientando-se por roteiro escrito, planejando o tempo de fala e adequando a linguagem à situação comunicativa.",
    code: "EF35LP20",
    caps: [1, 2],
  },
  {
    label: "Localizar informações explícitas em textos.",
    code: "EF15LP03",
    caps: [1, 2],
  },
  {
    label: "Inferir informações implícitas nos textos lidos.",
    code: "EF35LP04",
    caps: [1, 2],
  },
  {
    label:
      "Identificar e discutir o propósito do uso de recursos de persuasão (cores, imagens, escolha de palavras, jogo de palavras, tamanho de letras) em textos publicitários e de propaganda, como elementos de convencimento.",
    code: "EF03LP19",
    caps: [1, 2],
  },
  {
    label:
      "Planejar e produzir textos para apresentar resultados de observações e de pesquisas em fontes de informações, incluindo, quando pertinente, imagens, diagramas e gráficos ou tabelas simples, considerando a situação comunicativa e o tema/assunto do texto.",
    code: "EF03LP25",
    caps: [1, 2],
  },
  {
    label:
      "Identificar funções do texto dramático (escrito para ser encenado) e sua organização por meio de diálogos entre personagens e marcadores das falas das personagens e de cena.",
    code: "EF35LP24",
    caps: [1, 2],
  },
  {
    label:
      "Construir o sentido de histórias em quadrinhos e tirinhas, relacionando imagens e palavras e interpretando recursos gráficos (tipos de balões, de letras, onomatopeias).",
    code: "EF15LP14",
    caps: [1, 2],
  },
];

const titulosCapitulos_parte1 = [
  "Capítulo 1: O que é o dinheiro?",
  "Capítulo 2: Ganhando dinheiro com doces",
];

const objetivosBNCC_parte2 = [
  {
    label: "Construir e utilizar fatos básicos da adição e da multiplicação para o cálculo mental ou escrito.",
    code: "EF03MA03",
    caps: [3, 4, 5],
  },
  {
    label:
      "Estabelecer a relação entre números naturais e pontos da reta numérica para utilizá-la na ordenação dos números naturais e também na construção de fatos da adição e da subtração, relacionando-os com deslocamentos para a direita ou para a esquerda.",
    code: "EF03MA04",
    caps: [3, 4, 5],
  },
  {
    label:
      "Utilizar diferentes procedimentos de cálculo mental e escrito para resolver problemas significativos envolvendo adição e subtração com números naturais.",
    code: "EF03MA05",
    caps: [3, 4, 5],
  },
  {
    label:
      "Resolver e elaborar problemas de multiplicação (por 2, 3, 4, 5 e 10) com os significados de adição de parcelas iguais e elementos apresentados em disposição retangular, utilizando diferentes estratégias de cálculo e registros.",
    code: "EF03MA07",
    caps: [3, 4, 5],
  },
  {
    label:
      "Associar o quociente de uma divisão com resto zero de um número natural por 2, 3, 4, 5 e 10 às ideias de metade, terça, quarta, quinta e décima partes.",
    code: "EF03MA09",
    caps: [3, 4, 5],
  },
  {
    label:
      "Identificar regularidades em sequências ordenadas de números naturais, resultantes da realização de adições ou subtrações sucessivas, por um mesmo número, descrever uma regra de formação da sequência e determinar elementos faltantes ou seguintes.",
    code: "EF03MA10",
    caps: [3, 4, 5],
  },
  {
    label:
      "Resolver e elaborar problemas que envolvam a comparação e a equivalência de valores monetários do sistema brasileiro em situações de compra, venda e troca.",
    code: "EF03MA24",
    caps: [3, 4, 5],
  },
  {
    label: "Resolver problemas cujos dados estão apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas.",
    code: "EF03MA26",
    caps: [3, 4, 5],
  },
  {
    label:
      "Ler, interpretar e comparar dados apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas, envolvendo resultados de pesquisas significativas, utilizando termos como maior e menor frequência, apropriando-se desse tipo de linguagem para compreender aspectos da realidade sociocultural significativos.",
    code: "EF03MA27",
    caps: [3, 4, 5],
  },
  {
    label:
      "Realizar pesquisa envolvendo variáveis categóricas em um universo de até 50 elementos, organizar os dados coletados utilizando listas, tabelas simples ou de dupla entrada e representá-los em gráficos de colunas simples, com e sem uso de tecnologias digitais.",
    code: "EF03MA28",
    caps: [3, 4, 5],
  },
  {
    label:
      "Relacionar a produção de lixo doméstico ou da escola aos problemas causados pelo consumo excessivo e construir propostas para o consumo consciente, considerando a ampliação de hábitos de redução, reuso e reciclagem/descarte de materiais consumidos em casa, na escola e/ou no entorno.",
    code: "EF03GE08",
    caps: [3, 4, 5],
  },
  {
    label:
      "Investigar os usos dos recursos naturais, com destaque para os usos da água em atividades cotidianas (alimentação, higiene, cultivo de plantas etc.), e discutir os problemas ambientais provocados por esses usos.",
    code: "EF03GE09",
    caps: [3, 4, 5],
  },
  {
    label:
      "Comparar impactos das atividades econômicas urbanas e rurais sobre o ambiente físico natural, assim como os riscos provenientes do uso de ferramentas e máquinas.",
    code: "EF03GE11",
    caps: [3, 4, 5],
  },
  {
    label:
      "Escutar, com atenção, falas de professores e colegas, formulando perguntas pertinentes ao tema e solicitando esclarecimentos sempre que necessário.",
    code: "EF15LP10",
    caps: [3, 4, 5],
  },
  {
    label:
      "Reconhecer características da conversação espontânea presencial, respeitando os turnos de fala, selecionando e utilizando, durante a conversação, formas de tratamento adequadas, de acordo com a situação e a posição do interlocutor.",
    code: "EF15LP11",
    caps: [3, 4, 5],
  },
  {
    label:
      "Atribuir significado a aspectos não linguísticos (paralinguísticos) observados na fala, como direção do olhar, riso, gestos, movimentos da cabeça (de concordância ou discordância), expressão corporal, tom de voz.",
    code: "EF15LP12",
    caps: [3, 4, 5],
  },
  {
    label:
      "Identificar gêneros do discurso oral, utilizados em diferentes situações e contextos comunicativos, e suas características linguístico-expressivas e composicionais (conversação espontânea, conversação telefônica, entrevistas pessoais, entrevistas no rádio ou na TV, debate, noticiário de rádio e TV, narração de jogos esportivos no rádio e TV, aula, debate etc.).",
    code: "EF35LP10",
    caps: [3, 4, 5],
  },
  {
    label:
      "Expor trabalhos ou pesquisas escolares, em sala de aula, com apoio em recursos multimodais (imagens, tabelas etc.), orientando-se por roteiro escrito, planejando o tempo de fala e adequando a linguagem à situação comunicativa.",
    code: "EF35LP20",
    caps: [3, 4, 5],
  },
  {
    label: "Localizar informações explícitas em textos.",
    code: "EF15LP03",
    caps: [3, 4, 5],
  },
  {
    label: "Inferir informações implícitas nos textos lidos.",
    code: "EF35LP04",
    caps: [3, 4, 5],
  },
  {
    label:
      "Identificar e discutir o propósito do uso de recursos de persuasão (cores, imagens, escolha de palavras, jogo de palavras, tamanho de letras) em textos publicitários e de propaganda, como elementos de convencimento.",
    code: "EF03LP19",
    caps: [3, 4, 5],
  },
  {
    label:
      "Planejar e produzir textos para apresentar resultados de observações e de pesquisas em fontes de informações, incluindo, quando pertinente, imagens, diagramas e gráficos ou tabelas simples, considerando a situação comunicativa e o tema/assunto do texto.",
    code: "EF03LP25",
    caps: [3, 4, 5],
  },
  {
    label:
      "Identificar funções do texto dramático (escrito para ser encenado) e sua organização por meio de diálogos entre personagens e marcadores das falas das personagens e de cena.",
    code: "EF35LP24",
    caps: [3, 4, 5],
  },
  {
    label:
      "Construir o sentido de histórias em quadrinhos e tirinhas, relacionando imagens e palavras e interpretando recursos gráficos (tipos de balões, de letras, onomatopeias).",
    code: "EF15LP14",
    caps: [3, 4, 5],
  },
];

const titulosCapitulos_parte2 = [
  "Capítulo 3: Gasto consciente",
  "Capítulo 4: Lugares seguros para guardar dinheiro",
  "Capítulo 5: Celebrando a conquista dos nossos objetivos",
];


function TabelaParte({ titulo, objetivos, capitulos, titulosCapitulos, offset }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-3 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700 first:border-0 first:pt-0">
        <span className="h-px w-8 bg-teal-300 dark:bg-teal-800" />
        <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
          {titulo}
        </p>
        <span className="h-px w-8 bg-teal-300 dark:bg-teal-800" />
      </div>

      <div className="overflow-auto rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
        <table className="w-full text-left text-sm md:text-base">
          <thead className="bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-semibold">
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
              <tr key={i} className="hover:bg-teal-50/40 dark:hover:bg-teal-950/40 transition">
                <td className="p-3">
                  <span className="font-medium text-slate-800 dark:text-slate-100">{obj.label}</span>
                  {obj.code && (
                    <span className="text-teal-600 dark:text-teal-400 font-semibold ml-2">
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

export default function Matriz3Serie() {
  return (
    <TooltipProvider>
      <div className="space-y-10">
        <TabelaParte
          titulo="Parte 1: Primeiros passos com o dinheiro"
          objetivos={objetivosBNCC_parte1}
          capitulos={[1, 2]}
          titulosCapitulos={titulosCapitulos_parte1}
          offset={1}
        />
        <TabelaParte
          titulo="Parte 2: Consumo consciente para alcançar objetivos"
          objetivos={objetivosBNCC_parte2}
          capitulos={[3, 4, 5]}
          titulosCapitulos={titulosCapitulos_parte2}
          offset={3}
        />
      </div>
    </TooltipProvider>
  );
}
