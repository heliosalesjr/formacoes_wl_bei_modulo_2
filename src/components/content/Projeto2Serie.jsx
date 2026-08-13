import ProjetoCapitulo from "@/components/content/ProjetoCapitulo";

const THEME = "green";

const parte1 = [
  {
    numero: 1,
    titulo: "Mural de necessidades e vontades",
    meta: "Capítulo 1 – Eu preciso ou eu quero?  •  35 a 45 minutos",
    descricao: [
      "Depois de tanto conversar sobre a diferença entre precisar e querer, chega a hora de cada aluno olhar para as próprias escolhas. No Livro do Estudante, cada criança desenha uma coisa de que precisa e uma coisa que gostaria de ter, mas que não é necessária. Os desenhos são apresentados aos colegas, e a conversa que nasce daí costuma render uma boa descoberta: temos necessidades parecidas, mas vontades muito diferentes.",
      "Para fechar, a turma se organiza em grupos, desenha ou recorta figuras que representam necessidades e vontades e monta um mural coletivo, afixado no fundo da sala. O mural fica exposto como um registro do que a turma considera importante para viver e dos desejos que cada um carrega, reforçando o hábito de pensar em prioridades antes de gastar.",
    ],
    pagina: "Caderno do Educador, p. 30–32",
  },
  {
    numero: 2,
    titulo: "Cartazes contra o desperdício",
    meta: "Capítulo 2 – Como evitar o desperdício  •  20 a 30 minutos, mais o momento de espalhar os cartazes",
    descricao: [
      "O que a turma aprendeu sobre desperdício vira campanha para a escola inteira. A classe se divide em três grupos: um cuida do desperdício de comida, outro do de eletricidade e o terceiro do de água. Cada aluno cria o próprio cartaz, começando pelo rascunho na página do Livro do Estudante e depois passando a versão final a limpo em uma folha.",
      "Com o apoio dos professores e da direção, os cartazes são espalhados pela escola em lugares bem visíveis. Assim, o projeto sai da sala de aula e conscientiza colegas e professores, mostrando às crianças que pequenas ações diárias podem fazer diferença.",
    ],
    pagina: "Caderno do Educador, p. 43–44",
  },
];

const parte2 = [
  {
    numero: 3,
    titulo: "Lanche coletivo: entendendo os preços",
    meta: "Capítulo 3 – Um passeio pela confeitaria  •  30 minutos de orientações, mais o dia do lanche",
    descricao: [
      "Neste projeto, os preços saem do papel e vão para a mesa. O professor estipula o valor máximo que cada aluno poderá gastar, e cada criança combina com a família a compra de um alimento que caiba nesse limite. Se o teto for de cinco reais e o aluno decidir levar pão de queijo, é até esse valor que ele pode gastar.",
      "No dia combinado, a turma reúne tudo em um lanche coletivo e compara o que cada um trouxe: o que rendeu mais, o que rendeu menos, o que é mais caro e o que é mais barato. A experiência mostra, na prática, que um mesmo valor pode comprar produtos muito diferentes, e ainda envolve as famílias na tarefa, combinada com antecedência para que ninguém fique de fora.",
    ],
    pagina: "Caderno do Educador, p. 59–60",
  },
  {
    numero: 4,
    titulo: "Cartaz da receita de sobremesa",
    meta: "Capítulo 4 – Nossa sobremesa favorita  •  30 minutos",
    descricao: [
      "Depois de aprender a juntar os ingredientes das sobremesas de que mais gostam, os alunos montam um grande cartaz de receita para que todos possam aprender. A turma forma grupos com o auxílio do professor, e cada grupo escolhe uma sobremesa diferente, pesquisa a receita e a copia na página do Livro do Estudante, o que facilita a organização do cartaz.",
      "Para o cartaz ficar interessante, a orientação é não colocar apenas texto: entram desenhos dos ingredientes, das panelas, do fogão e do que mais o grupo achar importante. Criatividade liberada, e ao final cada grupo apresenta sua receita para a classe.",
    ],
    pagina: "Caderno do Educador, p. 81–82",
    foto: "/beijinho.webp",
  },
];

const parte3 = [
  {
    numero: 5,
    titulo: "Quadro do Sonho",
    meta: "Capítulo 5 – Alcançando objetivos  •  30 a 40 minutos",
    descricao: [
      "Com o cofrinho criado, é hora de dar um destino ao dinheiro guardado. Cada aluno pensa em um objetivo que quer alcançar e o transforma em imagem: no Livro do Estudante, desenha ou cola o sonho que quer realizar, que pode ser um brinquedo, um livro, um gibi ou qualquer outra ideia.",
      "Os quadros são expostos no mural da sala, e cada estudante conhece os sonhos dos colegas e os incentiva a continuar guardando dinheiro para alcançá-los. Ao final da exposição, cada criança leva o seu Quadro do Sonho para casa e o deixa perto do cofrinho, um lembrete diário de que poupar é o caminho para realizar o que se deseja.",
    ],
    pagina: "Caderno do Educador, p. 99–100",
  },
];

function Divider({ titulo }) {
  return (
    <div className="flex items-center justify-center gap-3 pb-6 pt-4 border-t border-dashed border-slate-200 dark:border-slate-700 first:border-0 first:pt-0">
      <span className="h-px w-8 bg-green-300 dark:bg-green-800" />
      <p className="text-sm font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">
        {titulo}
      </p>
      <span className="h-px w-8 bg-green-300 dark:bg-green-800" />
    </div>
  );
}

export default function Projeto2Serie() {
  return (
    <div className="space-y-2">
      <div>
        <Divider titulo="Parte 1 • Necessidade, vontade e desperdício" />
        <div>
          {parte1.map((cap, i) => (
            <ProjetoCapitulo key={cap.numero} theme={THEME} {...cap} isLast={i === parte1.length - 1} />
          ))}
        </div>
      </div>

      <div>
        <Divider titulo="Parte 2 • Aniversário consciente" />
        <div>
          {parte2.map((cap, i) => (
            <ProjetoCapitulo key={cap.numero} theme={THEME} {...cap} isLast={i === parte2.length - 1} />
          ))}
        </div>
      </div>

      <div>
        <Divider titulo="Parte 3 • Guardando dinheiro para meu objetivo" />
        <div>
          {parte3.map((cap, i) => (
            <ProjetoCapitulo key={cap.numero} theme={THEME} {...cap} isLast={i === parte3.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
}
