import ProjetoCapitulo from "@/components/content/ProjetoCapitulo";

const THEME = "red";

const cap1 = [
  {
    numero: 1,
    titulo: "Exposição das profissões",
    descricao:
      "Os alunos fazem uma pesquisa sobre duas profissões diferentes, descrevendo suas funções e importância social. A proposta estimula a valorização de todo tipo de trabalho e a compreensão das funções na sociedade.",
    pagina: "Estudante, página 8",
  },
  {
    numero: 2,
    titulo: "Pesquisa de preços",
    descricao:
      "O objetivo desta atividade é comparar os preços dos itens da padaria mencionados na aula com os preços reais de uma padaria local, entendendo a dinâmica dos preços.",
    pagina: "Estudante, página 12",
  },
  {
    numero: 3,
    titulo: "Entrevistando um adulto",
    descricao:
      "Os alunos entrevistam um adulto sobre sua profissão, registrando as respostas em um roteiro de perguntas. A ideia é compreender a rotina profissional e o valor social do trabalho, exercitando oralidade, escuta e escrita.",
    pagina: "Estudante, página 25",
  },
];

const cap2 = [
  {
    numero: 4,
    titulo: "Encarte de preços",
    descricao:
      "Os estudantes pesquisam preços de produtos ou alimentos para comparar valores e refletir sobre diferenças de custo e escolhas de consumo consciente, aplicando noções básicas de cálculo e comparação de preços.",
    pagina: "Estudante, página 43",
  },
];

const cap4 = [
  {
    numero: 5,
    titulo: "O que quero comprar?",
    descricao: "Os alunos escolhem um produto que desejam comprar com o dinheiro, estimulando autonomia e discernimento.",
    pagina: "Estudante, página 65",
  },
];

const cap5 = [
  {
    numero: 6,
    titulo: "Anúncio de promoção",
    descricao:
      "Os alunos pesquisam promoções no dia a dia, para entender como funcionam e quais estratégias são usadas para atrair consumidores.",
    pagina: "Estudante, página 75",
  },
  {
    numero: 7,
    titulo: "Anúncio de parcelamento",
    descricao:
      "Os alunos pesquisam exemplos de parcelamento e refletem sobre as vantagens e cuidados ao comprar dessa forma.",
    pagina: "Estudante, página 82",
  },
];

const cap6 = [
  {
    numero: 8,
    titulo: "Reciclar garrafas de plástico",
    descricao:
      "Os alunos devem separar garrafas plásticas usadas em casa, lavá-las e levá-las à escola para coleta. Em sala, calculam quantas garrafas juntaram e projetam o total até o fim do ano, promovendo educação ambiental e cálculo aplicado.",
    pagina: "Estudante, página 93",
    foto: "/pets.webp",
  },
  {
    numero: 9,
    titulo: "Cartaz de economia",
    descricao:
      "Os alunos produzem um cartaz sobre economia e sustentabilidade, estimulando responsabilidade coletiva e hábitos conscientes.",
    pagina: "Estudante, página 94",
  },
];

function Divider({ titulo }) {
  return (
    <div className="flex items-center justify-center gap-3 pb-6 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700 first:border-0 first:pt-0">
      <span className="h-px w-8 bg-red-300 dark:bg-red-800" />
      <p className="text-sm font-semibold uppercase tracking-widest text-red-600 dark:text-red-400">{titulo}</p>
      <span className="h-px w-8 bg-red-300 dark:bg-red-800" />
    </div>
  );
}

function Grupo({ titulo, itens }) {
  return (
    <div>
      <Divider titulo={titulo} />
      <div>
        {itens.map((item, i) => (
          <ProjetoCapitulo key={item.numero} theme={THEME} {...item} isLast={i === itens.length - 1} />
        ))}
      </div>
    </div>
  );
}

export default function Projeto4Ano() {
  return (
    <div className="space-y-2">
      <Grupo titulo="Capítulo 1" itens={cap1} />
      <Grupo titulo="Capítulo 2" itens={cap2} />
      <Grupo titulo="Capítulo 4" itens={cap4} />
      <Grupo titulo="Capítulo 5" itens={cap5} />
      <Grupo titulo="Capítulo 6" itens={cap6} />
    </div>
  );
}
