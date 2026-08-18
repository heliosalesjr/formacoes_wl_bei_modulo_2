import ProjetoCapitulo from "@/components/content/ProjetoCapitulo";

const THEME = "blue";

const cap1 = [
  {
    numero: 1,
    titulo: "Painel de Profissões",
    meta: "Atividade complementar",
    descricao:
      "Os alunos interagem com um painel físico ou online sobre profissões e, assim, conseguem conversar sobre elas de forma dinâmica e envolvente.",
    pagina: "Educador, página 31",
  },
  {
    numero: 2,
    titulo: "Encarte de mercado",
    descricao:
      "A sala se divide em grupos e cada grupo escolhe um prato para fazer a atividade. A partir desse processo de colaboração, os alunos elaboram um encarte de mercado através da pesquisa dos ingredientes que compõe o prato escolhido.",
    pagina: "Educador, página 32 • Estudante, página 14",
  },
];

const cap2 = [
  {
    numero: 3,
    titulo: "Experiência Culinária",
    descricao:
      "Os alunos decidem qual prato querem fazer a partir das condições que os professores estabelecem. Depois é organizar quem pode trazer cada ingrediente para a aula e convidar algum profissional da cozinha para auxiliar na realização do prato de forma coletiva. Quando o prato ficar pronto, é momento de degustar e conversar sobre os custos do prato.",
    pagina: "Educador, página 55 • Estudante, página 36",
    foto: "/receita.webp",
  },
];

const cap3 = [
  {
    numero: 4,
    titulo: "Jogo: O poder da propaganda",
    meta: "Atividade complementar",
    descricao:
      "Os alunos se organizam para realizar compras de produtos que estão em propagandas com as fichas que têm disponíveis e registram tudo o que gostariam de comprar. Após a atividade, se reúnem para refletir sobre o que é necessidade e vontade.",
    pagina: "Educador, página 67",
  },
  {
    numero: 5,
    titulo: "Mercadinho",
    descricao:
      "Os alunos se reúnem para fazer um mercadinho dentro da sala de aula. Produzem os produtos, se dividem para que o mercadinho funcione e, com essa dinâmica, os estudantes acabam aprofundando a discussão sobre necessidade e vontade, além de formas de pagamento.",
    pagina: "Educador, página 77 • Estudante, página 54",
  },
];

const cap4 = [
  {
    numero: 6,
    titulo: "Jogo: O caminho para o Objetivo",
    meta: "Atividade complementar",
    descricao:
      "Nesse jogo, os alunos discutem como economizar dinheiro para alcançar os objetivos através de uma amarelinha que constrói aos poucos a relação entre economia e o dia a dia.",
    pagina: "Educador, página 89",
  },
  {
    numero: 7,
    titulo: "História em quadrinhos",
    descricao:
      "Os estudantes criam histórias em quadrinhos para, de forma criativa e bem-humorada, falar sobre economia e os assuntos estudados até o momento.",
    pagina: "Educador, página 101 • Estudante, página 74",
  },
];

function Divider({ titulo }) {
  return (
    <div className="flex items-center justify-center gap-3 pb-6 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700 first:border-0 first:pt-0">
      <span className="h-px w-8 bg-blue-300 dark:bg-blue-800" />
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
        {titulo}
      </p>
      <span className="h-px w-8 bg-blue-300 dark:bg-blue-800" />
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

export default function Projeto3Serie() {
  return (
    <div className="space-y-2">
      <Grupo titulo="Capítulo 1 – O que é ganhar dinheiro?" itens={cap1} />
      <Grupo titulo="Capítulo 2 – Ganhando dinheiro com doces" itens={cap2} />
      <Grupo titulo="Capítulo 3 – Gasto Consciente" itens={cap3} />
      <Grupo titulo="Capítulo 4 – Economizando Dinheiro" itens={cap4} />
    </div>
  );
}
