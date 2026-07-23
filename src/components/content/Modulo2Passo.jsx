"use client";
import { useMarkViewedOnVisible } from '@/hooks/useMarkViewedOnVisible';

const Modulo2Passo = () => {
  const ref = useMarkViewedOnVisible('modulo-2-passo');

  return (
    <div
      ref={ref}
      id="modulo-2-passo"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700"
    >
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
        <h2 className="text-4xl font-bold text-center text-slate-700 dark:text-white">
          Passo a passo
        </h2>
        <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-slate-500 rounded-full"></div>
      </div>

      <div className="text-slate-700 dark:text-slate-200 space-y-5 text-lg leading-relaxed">
        <p>
          Existem várias formas de trabalhar por projetos. Sugerimos aqui o <strong>Pequeno Projeto Didático Ativo </strong>, projeto de curta duração (mensal, bimestral ou trimestral) como fator de mobilização para engajar os estudantes.
        </p>
        <p>
          Ao fim de cada projeto, os estudantes devem apresentar os resultados para a comunidade escolar. A cada capítulo do Livro do Estudante há uma atividade prática que pode ser trabalhada com a metodologia de projeto.
        </p>
        <p>
          Cada uma corresponde a um <strong>Fator de Mobilização</strong>, constituindo uma forma interessante e divertida de aplicar os conteúdos aprendidos. Lembre-se de adaptar o projeto ao perfil da turma, às condições do local, da escola e da comunidade etc.
        </p>
        <p className='text-center text-xl'>
          O programa inteiro pode ser trabalhado dessa maneira.
        </p>
      </div>
    </div>
  );
};

export default Modulo2Passo;
