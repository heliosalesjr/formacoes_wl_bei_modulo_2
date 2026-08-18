import ProjetoCapitulo from "@/components/content/ProjetoCapitulo";

const THEME = "rose";

const partes = [
  {
    numero: 1,
    titulo: "Infográfico: consumo versus consumismo",
    descricao:
      "Em duplas ou trios, os estudantes deverão criar um infográfico que explique a diferença entre consumo e consumismo, apresentando definições e exemplos de cada prática. O material poderá reunir textos curtos, imagens, desenhos ou recortes e ser produzido digitalmente ou à mão. Ao final, os grupos apresentarão suas produções à turma.",
    pagina: "Educador, páginas 23 a 25",
  },
  {
    numero: 2,
    titulo: "Podcast sobre administração do dinheiro",
    descricao:
      "A atividade propõe que os estudantes produzam, em duplas, um podcast de até cinco minutos sobre a importância de administrar o dinheiro, evitar gastos excessivos e prevenir dívidas. A produção poderá incluir entrevistas com familiares ou comerciantes e deverá ser organizada previamente por meio de um roteiro.",
    pagina: "Educador, páginas 25 e 26",
  },
  {
    numero: 3,
    titulo: "Mapa mental sobre poupança ou descontos",
    descricao:
      "Organizados em duplas, os estudantes deverão criar um mapa mental sobre poupança ou descontos, sistematizando as principais ideias estudadas. A atividade poderá combinar palavras, frases curtas, imagens e desenhos e ser realizada em plataforma digital ou com lápis e papel. Depois, os mapas serão compartilhados com a turma.",
    pagina: "Educador, páginas 26 e 27",
  },
  {
    numero: 4,
    titulo: "Mural do Aprendizado",
    descricao:
      "A proposta combina sala de aula invertida e produção coletiva. Inicialmente, os estudantes deverão revisar, em casa, os conteúdos e exercícios do livro, registrando os principais aprendizados. Em sala, organizados em grupos, responderão a perguntas sobre Educação Financeira e Matemática e reunirão as respostas em um mural físico ou digital, formando uma síntese do percurso realizado.",
    pagina: "Educador, páginas 27 e 28",
    foto: "/wall.webp",
  },
];

export default function Projeto7Ano() {
  return (
    <div>
      {partes.map((parte, i) => (
        <ProjetoCapitulo key={parte.numero} theme={THEME} {...parte} isLast={i === partes.length - 1} />
      ))}
    </div>
  );
}
