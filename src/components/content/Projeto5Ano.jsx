import ProjetoCapitulo from "@/components/content/ProjetoCapitulo";

const THEME = "cyan";

const cap2 = [
  {
    numero: 1,
    titulo: "Pesquisa de preços",
    descricao:
      "O projeto convida os alunos a iniciarem a organização de uma festa de aniversário da turma. Eles precisam realizar uma pesquisa de preços em dois mercados diferentes, registrando tudo o que descobrirem. A atividade introduz, na prática, o conceito de comparação de preços e mostra como esse hábito ajuda a tomar decisões de compra mais conscientes e econômicas.",
    pagina: "Estudante, página 26",
  },
];

const cap3 = [
  {
    numero: 2,
    titulo: "Embalagem grande ou pequena?",
    descricao:
      "Os alunos devem visitar um mercado para comparar preços e tamanhos de embalagens do mesmo produto, observando se compensa mais comprar a versão grande ou a pequena. Eles anotam marca, peso/volume e preço de achocolatado e refrigerantes, comparando produtos iguais sempre que possível.",
    pagina: "Estudante, página 42",
    foto: "/piggyb.webp",
  },
];

const cap4 = [
  {
    numero: 3,
    titulo: "Dividindo com os amigos",
    descricao:
      "Nesta etapa do projeto da festa, os alunos aprendem a planejar a quantidade de comida e bebida necessária para todos os participantes. Eles escolhem um salgado, um doce e uma bebida e registram no quadro. Depois, definem a quantidade por estudante e multiplicam pelos participantes, calculando a quantidade total a ser comprada.",
    pagina: "Estudante, página 48",
  },
  {
    numero: 4,
    titulo: "O orçamento da festa",
    descricao:
      "A turma define, junto com a professora, um valor total de orçamento para a festa. Em grupos, escolhem comidas, bebidas, ingredientes e quantidades, pesquisam preços e montam suas tabelas de orçamento, cuidando para não ultrapassar o limite. Depois, apresentam e decidem se combinam ideias ou votam em um único orçamento coletivo.",
    pagina: "Estudante, página 56",
  },
];

const cap5 = [
  {
    numero: 5,
    titulo: "Criando minha própria loja",
    descricao:
      "Os alunos imaginam que possuem sua própria loja, escolhem o que gostariam de vender e criam um cartaz ilustrando sua loja e produtos. Depois, conversam com colegas sobre outras ideias de negócio, anotam cinco sugestões e circulam a que mais chamou sua atenção. A proposta estimula criatividade, visão empreendedora e troca de ideias.",
    pagina: "Estudante, página 75",
  },
];

const cap6 = [
  {
    numero: 6,
    titulo: "Exposição das propagandas",
    descricao:
      "Após produzirem diversas propagandas ao longo do ano, os alunos organizam uma exposição com as peças criadas. Definem data, local e forma de organização (por tema, ordem cronológica ou outro critério). Depois, criam um cartaz de divulgação e espalham pela escola, convidando a comunidade.",
    pagina: "Estudante, página 90",
  },
];

function Divider({ titulo }) {
  return (
    <div className="flex items-center justify-center gap-3 pb-6 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700 first:border-0 first:pt-0">
      <span className="h-px w-8 bg-cyan-300 dark:bg-cyan-800" />
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">{titulo}</p>
      <span className="h-px w-8 bg-cyan-300 dark:bg-cyan-800" />
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

export default function Projeto5Ano() {
  return (
    <div className="space-y-2">
      <Grupo titulo="Capítulo 2" itens={cap2} />
      <Grupo titulo="Capítulo 3" itens={cap3} />
      <Grupo titulo="Capítulo 4" itens={cap4} />
      <Grupo titulo="Capítulo 5" itens={cap5} />
      <Grupo titulo="Capítulo 6" itens={cap6} />
    </div>
  );
}
