"use client";
import { useMarkViewedOnVisible } from "@/hooks/useMarkViewedOnVisible";

const planilhas = [
  {
    label: "SMART",
    title: "Planilha de Metas SMART",
    description:
      "Modelo pronto para seus alunos definirem e acompanharem metas bem estruturadas — específicas, mensuráveis, atingíveis, relevantes e com prazo. É só abrir, fazer uma cópia e aplicar!",
    href: "https://docs.google.com/spreadsheets/d/1VYOu9T_fnvbgDQ1hQHCj7XfPdFroNFxu/edit?usp=sharing&ouid=116777454560124583783&rtpof=true&sd=true",
    gradient: "from-orange-500 to-orange-600",
    shadowColor: "hover:shadow-orange-200 dark:hover:shadow-orange-900/40",
    buttonLabel: "Abrir planilha SMART",
  },
  {
    label: "5W2H",
    title: "Planilha 5W2H",
    description:
      "Modelo de plano de ação com as 7 perguntas-chave para guiar seus alunos no planejamento de projetos e atividades de forma clara e organizada. Disponível para cópia ou download.",
    href: "https://docs.google.com/spreadsheets/d/1BIzDQfZhVTvF7QRNcIMCeI_G5xKOWmsv/edit?usp=sharing&ouid=116777454560124583783&rtpof=true&sd=true",
    gradient: "from-emerald-500 to-emerald-600",
    shadowColor: "hover:shadow-emerald-200 dark:hover:shadow-emerald-900/40",
    buttonLabel: "Abrir planilha 5W2H",
  },
];

const PlanilhasModelos = () => {
  const ref = useMarkViewedOnVisible("ferramentas-planilhas");

  return (
    <div
      ref={ref}
      id="ferramentas-planilhas"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1 mb-4">
          Material de apoio
        </span>
        <h2 className="text-4xl font-bold text-slate-600 dark:text-white mb-3">
          Leve as ferramentas para a sala de aula
        </h2>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Preparamos planilhas prontas para você usar diretamente com seus alunos.
          Abra o link, faça uma cópia no Google Sheets ou baixe em Excel — e já pode aplicar!
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {planilhas.map((p) => (
          <div
            key={p.label}
            className={`rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-lg hover:-translate-y-1 hover:shadow-xl ${p.shadowColor} transition-all duration-300 flex flex-col`}
          >
            {/* Colored header */}
            <div className={`bg-gradient-to-r ${p.gradient} px-6 py-5 flex items-center gap-3`}>
              <div className="bg-white/20 rounded-lg p-2 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M10 3v18M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6z" />
                </svg>
              </div>
              <div>
                <p className="text-white/70 text-xs font-semibold tracking-widest uppercase">Planilha modelo</p>
                <h3 className="text-white font-bold text-xl leading-tight">{p.title}</h3>
              </div>
            </div>

            {/* Body */}
            <div className="bg-white dark:bg-slate-800 p-6 flex flex-col gap-5 flex-1">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base flex-1">
                {p.description}
              </p>

              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 w-full bg-gradient-to-r ${p.gradient} text-white font-semibold rounded-xl px-5 py-3 hover:opacity-90 active:scale-95 transition-all duration-200`}
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {p.buttonLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanilhasModelos;
