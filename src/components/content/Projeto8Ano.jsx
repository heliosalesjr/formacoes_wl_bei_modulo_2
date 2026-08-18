import ProjetoCapitulo from "@/components/content/ProjetoCapitulo";

const THEME = "blue";

const partes = [
  {
    numero: 1,
    titulo: "Mapa conceitual sobre consumo sustentável",
    descricao:
      "Em duplas, os estudantes deverão construir um mapa conceitual sobre maneiras de consumir de forma responsável e sustentável. A produção deverá organizar os conceitos hierarquicamente e mostrar as relações entre eles por meio de palavras ou frases de ligação. O mapa poderá ser elaborado digitalmente ou à mão e, depois, apresentado à turma.",
    pagina: "Educador, páginas 23 e 24",
  },
  {
    numero: 2,
    titulo: "Infográfico sobre a conta-poupança",
    descricao:
      "A atividade propõe a criação, em duplas, de um infográfico que explique a origem da conta-poupança, seu funcionamento e suas vantagens. Os estudantes poderão pesquisar informações complementares e incluir exemplos de rendimentos mensais, articulando textos curtos e elementos visuais. Ao final, os trabalhos serão compartilhados com a turma.",
    pagina: "Educador, páginas 24 a 26",
    foto: "/info.png",
  },
  {
    numero: 3,
    titulo: "Podcast sobre desigualdade econômica",
    descricao:
      "Em duplas, os estudantes deverão produzir um podcast de até sete minutos sobre a desigualdade econômica, suas consequências para a sociedade e possíveis formas de enfrentamento. O conteúdo também deverá abordar o cálculo da riqueza de um país por meio do Produto Interno Bruto (PIB) e poderá incluir entrevistas com familiares ou conhecidos.",
    pagina: "Educador, páginas 26 e 27",
  },
  {
    numero: 4,
    titulo: "Rotação por estações",
    descricao:
      "Após revisarem os conteúdos do livro em casa, os estudantes participarão de uma rotação por estações. Organizados em grupos, deverão sintetizar os conhecimentos de cada parte por meio de diferentes produções, como charge, mapa mental, quiz e podcast. Os grupos circularão pelas estações para retomar e aplicar os conceitos de Educação Financeira e Matemática estudados ao longo do ano.",
    pagina: "Educador, páginas 27 e 28",
  },
];

export default function Projeto8Ano() {
  return (
    <div>
      {partes.map((parte, i) => (
        <ProjetoCapitulo key={parte.numero} theme={THEME} {...parte} isLast={i === partes.length - 1} />
      ))}
    </div>
  );
}
