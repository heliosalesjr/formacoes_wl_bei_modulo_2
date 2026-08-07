import ProjetoCapitulo from "@/components/content/ProjetoCapitulo";
import { THEMES } from "@/components/content/anoThemes";

const THEME = "amber";

const etapas = [
  {
    numero: 1,
    titulo: "Conhecer e planejar",
    descricao:
      "A turma realizará um levantamento de sonhos, problemas e aspirações para escolher democraticamente o tema do projeto coletivo. Depois, os estudantes analisarão sua viabilidade, identificarão os recursos necessários e elaborarão um plano de ação, com objetivos, atividades, responsabilidades, prazos e orçamento inicial. A etapa corresponde aos capítulos 1 e 2.",
    pagina: "páginas 18 a 33",
  },
  {
    numero: 2,
    titulo: "Iniciar a execução",
    descricao:
      "Com o projeto definido, os estudantes deverão detalhar o orçamento, revisar o plano de ação e iniciar as atividades previstas. As ações e decisões serão registradas, permitindo acompanhar o uso dos recursos, identificar dificuldades e realizar o primeiro monitoramento do projeto. A etapa corresponde aos capítulos 3, 4 e 5.",
    pagina: "páginas 34 a 42",
  },
  {
    numero: 3,
    titulo: "Acompanhar e ajustar o projeto",
    descricao:
      "A turma dará continuidade às atividades planejadas, mantendo registros dos avanços, das dificuldades e dos resultados parciais. Um novo monitoramento permitirá avaliar o andamento do projeto e tomar decisões para corrigir rotas, reorganizar responsabilidades ou adaptar ações e recursos. A etapa corresponde aos capítulos 6, 7 e 8.",
    pagina: "páginas 43 a 47",
    foto: "/projeto.webp",
  },
  {
    numero: 4,
    titulo: "Avaliar, apresentar e celebrar",
    descricao:
      "Na etapa final, os estudantes deverão concluir as atividades, avaliar os resultados alcançados e finalizar os registros do percurso. A turma organizará uma apresentação para compartilhar o desenvolvimento do projeto, as aprendizagens, os desafios e as conquistas com a comunidade escolar. A culminância encerra o processo com a divulgação e a celebração dos resultados. A etapa corresponde aos capítulos 9 e 10.",
    pagina: "a partir da página 48",
  },
];

export default function Projeto9Ano() {
  const t = THEMES[THEME];

  return (
    <div className="space-y-8">
      <div className={`rounded-2xl border ${t.borderOpen} ${t.bgSoft} p-4 md:p-5`}>
        <p className={`text-sm font-semibold uppercase tracking-widest ${t.text}`}>Projeto Coletivo</p>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Ao longo do ano, a turma deverá escolher coletivamente um sonho, uma necessidade ou um problema que
          possa ser transformado em projeto. Os estudantes participarão de todo o percurso: definição do tema,
          planejamento, elaboração do orçamento, divisão de responsabilidades, execução das ações,
          acompanhamento dos resultados e apresentação final. O projeto articula conhecimentos de Matemática e
          Educação Financeira com autonomia, cooperação, tomada de decisões e responsabilidade coletiva.
        </p>
      </div>

      <div>
        {etapas.map((etapa, i) => (
          <ProjetoCapitulo key={etapa.numero} theme={THEME} {...etapa} isLast={i === etapas.length - 1} />
        ))}
      </div>
    </div>
  );
}
