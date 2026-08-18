import ProjetoCapitulo from "@/components/content/ProjetoCapitulo";

const THEME = "purple";

const partes = [
  {
    numero: 1,
    titulo: "Mapa mental dos sonhos",
    descricao:
      "A atividade propõe que os estudantes criem um mapa mental com três sonhos: um de curto, um de médio e um de longo prazo. Para cada sonho, deverão refletir sobre as formas de realizá-lo e sobre o planejamento financeiro necessário. O mapa pode ser elaborado em ambiente virtual ou com lápis e papel e, depois, compartilhado com a turma.",
    pagina: "Educador, páginas 23 a 25",
  },
  {
    numero: 2,
    titulo: "Infográfico para economizar no supermercado",
    descricao:
      "Em duplas, os estudantes deverão produzir um infográfico com dicas para economizar nas compras de supermercado. A proposta estimula a comparação de preços e quantidades, a organização das informações e a articulação entre textos e imagens. O material poderá ser elaborado digitalmente ou à mão e apresentado aos colegas.",
    pagina: "Educador, páginas 25 a 27",
  },
  {
    numero: 3,
    titulo: "Podcast sobre economia nas compras",
    descricao:
      "A atividade convida os estudantes a produzir, em duplas, um podcast de até cinco minutos com sugestões para economizar nas compras de supermercado. Antes da gravação, eles deverão elaborar um roteiro, definir o título e organizar as informações em uma sequência clara, considerando que o conteúdo será ouvido por pessoas com diferentes conhecimentos sobre Educação Financeira.",
    pagina: "Educador, páginas 27 e 28",
    foto: "/podcast.jpg",
  },
  {
    numero: 4,
    titulo: "Cordel sobre pesquisa e comparação de preços",
    descricao:
      "Em duplas, os estudantes deverão criar um poema de cordel sobre a importância de negociar, pesquisar e comparar preços, mantendo a atenção a aumentos e cobranças exageradas. A proposta aproxima conhecimentos de Matemática e Língua Portuguesa e favorece a criatividade, a expressão oral e o trabalho colaborativo.",
    pagina: "Educador, página 28",
  },
  {
    numero: 5,
    titulo: "Quiz de Educação Financeira",
    descricao:
      "Organizados em trios, os estudantes deverão elaborar um quiz com até cinco perguntas sobre os temas de Educação Financeira e os conceitos matemáticos estudados ao longo do livro. As questões poderão ser de múltipla escolha ou de verdadeiro e falso, e o jogo poderá ser produzido em fichas ou em plataformas digitais para ser respondido pelos colegas.",
    pagina: "Educador, páginas 28 e 29",
  },
];

export default function Projeto6Ano() {
  return (
    <div>
      {partes.map((parte, i) => (
        <ProjetoCapitulo key={parte.numero} theme={THEME} {...parte} isLast={i === partes.length - 1} />
      ))}
    </div>
  );
}
