import Projeto4Ano from "@/components/content/Projeto4Ano";
import Projeto5Ano from "@/components/content/Projeto5Ano";
import Projeto6Ano from "@/components/content/Projeto6Ano";
import Projeto7Ano from "@/components/content/Projeto7Ano";
import Projeto8Ano from "@/components/content/Projeto8Ano";
import Projeto9Ano from "@/components/content/Projeto9Ano";
import Projeto1Serie from "@/components/content/Projeto1Serie";
import Projeto2Serie from "@/components/content/Projeto2Serie";
import Projeto3Serie from "@/components/content/Projeto3Serie";
import AnoAccordionCard from "@/components/content/AnoAccordionCard";

export default function ProjetoAnos() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 md:p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent dark:bg-none dark:text-white">
          Exemplos de Projeto
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">
          Sugestões de atividades práticas por capítulo, em cada ano
        </p>
      </div>

      <div className="space-y-4">
        <AnoAccordionCard
          id="projeto-1"
          ano="1º Ano"
          subtitulo="Sugestões de atividades de projeto"
          imagem="/1acapas.png"
          theme="green"
          needsUpdate
        >
          <Projeto1Serie />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="projeto-2"
          ano="2º Ano"
          subtitulo="Sugestões de atividades de projeto"
          imagem="/2acapas.png"
          theme="orange"
          needsUpdate
        >
          <Projeto2Serie />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="projeto-3"
          ano="3º Ano"
          subtitulo="Sugestões de atividades de projeto"
          imagem="/3acapas.png"
          theme="teal"
          needsUpdate
        >
          <Projeto3Serie />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="projeto-4"
          ano="4º Ano"
          subtitulo="Sugestões de atividades de projeto"
          imagem="/livros4o.png"
          theme="red"
        >
          <Projeto4Ano />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="projeto-5"
          ano="5º Ano"
          subtitulo="Sugestões de atividades de projeto"
          imagem="/livros5o.png"
          theme="cyan"
        >
          <Projeto5Ano />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="projeto-6"
          ano="6º Ano"
          subtitulo="Sugestões de atividades de projeto"
          imagem="/livrins.png"
          theme="purple"
        >
          <Projeto6Ano />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="projeto-7"
          ano="7º Ano"
          subtitulo="Sugestões de atividades de projeto"
          imagem="/7ocapas.png"
          theme="rose"
        >
          <Projeto7Ano />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="projeto-8"
          ano="8º Ano"
          subtitulo="Sugestões de atividades de projeto"
          imagem="/8ocapas.png"
          theme="blue"
        >
          <Projeto8Ano />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="projeto-9"
          ano="9º Ano"
          subtitulo="Sugestões de atividades de projeto"
          imagem="/9ocapas.png"
          theme="amber"
        >
          <Projeto9Ano />
        </AnoAccordionCard>
      </div>
    </div>
  );
}
