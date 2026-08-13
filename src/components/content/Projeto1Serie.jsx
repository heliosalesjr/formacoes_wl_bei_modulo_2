import ProjetoCapitulo from "@/components/content/ProjetoCapitulo";

const THEME = "orange";

const parte1 = [
  {
    numero: 1,
    titulo: "O que precisamos comprar?",
    descricao:
      "Sugerir aos alunos que procurem um familiar e escrevam uma lista de compras para a feira da semana. Deverão anotar cada alimento e a quantidade de que precisam.",
    pagina: "Caderno do estudante — pág. 14 e 15",
  },
  {
    numero: 2,
    titulo: "Um passeio pela feira",
    descricao:
      "Continuando a atividade com a lista de compras, os alunos deverão acompanhar a pessoa que faz as compras da família à feira (ou mercado, sacolão etc.). Nesta atividade será estimulada a comparação, análise e tomada de decisão consciente nas compras do dia a dia.",
    pagina: "Caderno do estudante — pág. 28 e 29",
  },
  {
    numero: 3,
    titulo: "Comprando as frutas na feira",
    descricao:
      "O objetivo é desenvolver a habilidade de planejar compras a partir da organização de uma lista de produtos, identificando quantidades, prioridades e estimando os gastos da família.",
    pagina: "Caderno do estudante — pág. 42 e 43",
    foto: "/fruits.webp",
  },
  {
    numero: 4,
    titulo: "A hora da comilança",
    descricao:
      "Os alunos irão resolver situações-problema envolvendo o sistema monetário brasileiro, comparando valores, verificando a suficiência de uma quantia para efetuar uma compra e calculando o troco, utilizando estratégias de cálculo mental e registros escritos.",
    pagina: "Caderno do estudante — pág. 52 e 53",
  },
];

const parte2 = [
  {
    numero: 5,
    titulo: "Procurando brinquedos na feira",
    descricao:
      "Os alunos exercitam sua criatividade desenhando os brinquedos que gostariam de comprar na feira.",
    pagina: "Caderno do estudante — pág. 64 e 65",
  },
  {
    numero: 6,
    titulo: "Quem não quer um animal de estimação?",
    descricao:
      "Nesta atividade será possível desenvolver atitudes de cuidado, responsabilidade e respeito pelos animais de estimação, valorizando o compartilhamento de experiências pessoais e a expressão oral ao relatar formas de cuidar dos animais ou demonstrar interesse por eles.",
    pagina: null,
  },
];

export default function Projeto1Serie() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center justify-center gap-3 pb-6">
          <span className="h-px w-8 bg-orange-300 dark:bg-orange-800" />
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-400">
            Parte 1
          </p>
          <span className="h-px w-8 bg-orange-300 dark:bg-orange-800" />
        </div>
        <div>
          {parte1.map((cap, i) => (
            <ProjetoCapitulo key={cap.numero} theme={THEME} {...cap} isLast={i === parte1.length - 1} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center gap-3 pb-6 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700">
          <span className="h-px w-8 bg-orange-300 dark:bg-orange-800" />
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-600 dark:text-orange-400">
            Parte 2
          </p>
          <span className="h-px w-8 bg-orange-300 dark:bg-orange-800" />
        </div>
        <div>
          {parte2.map((cap, i) => (
            <ProjetoCapitulo key={cap.numero} theme={THEME} {...cap} isLast={i === parte2.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
