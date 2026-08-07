import Matriz2 from "@/components/content/Matriz2";
import Matriz5 from "@/components/content/Matriz5";
import Matriz6 from "@/components/content/Matriz6";
import Matriz7 from "@/components/content/Matriz7";
import Matriz8 from "@/components/content/Matriz8";
import Matriz9 from "@/components/content/Matriz9";
import Matriz1Serie from "@/components/content/Matriz1Serie";
import Matriz2Serie from "@/components/content/Matriz2Serie";
import Matriz3Serie from "@/components/content/Matriz3Serie";
import AnoAccordionCard from "@/components/content/AnoAccordionCard";

export default function MatrizAnos() {
  return (
    <div className="rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-6 md:p-8 shadow-2xl border border-slate-100 dark:border-slate-700 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent dark:bg-none dark:text-white">
          Matriz de Habilidades
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg">
          Objetos de Conhecimento da BNCC
        </p>
      </div>

      <div className="space-y-4">
        <AnoAccordionCard
          id="matriz-2"
          ano="4º Ano"
          subtitulo="Objetos de Conhecimento e habilidades da BNCC"
          imagem="/livros4o.png"
          theme="red"
        >
          <Matriz2 />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="matriz-5"
          ano="5º Ano"
          subtitulo="Objetos de Conhecimento e habilidades da BNCC"
          imagem="/livros5o.png"
          theme="cyan"
        >
          <Matriz5 />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="matriz-6"
          ano="6º Ano"
          subtitulo="Objetos de Conhecimento e habilidades da BNCC"
          imagem="/livrins.png"
          theme="purple"
        >
          <Matriz6 />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="matriz-7"
          ano="7º Ano"
          subtitulo="Objetos de Conhecimento e habilidades da BNCC"
          imagem="/7ocapas.png"
          theme="rose"
        >
          <Matriz7 />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="matriz-8"
          ano="8º Ano"
          subtitulo="Objetos de Conhecimento e habilidades da BNCC"
          imagem="/8ocapas.png"
          theme="blue"
        >
          <Matriz8 />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="matriz-9"
          ano="9º Ano"
          subtitulo="Objetos de Conhecimento e habilidades da BNCC"
          imagem="/9ocapas.png"
          theme="amber"
        >
          <Matriz9 />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="matriz-1s"
          ano="1ª Série"
          subtitulo="Objetos de Conhecimento e habilidades da BNCC"
          imagem="/1acapas.png"
          theme="green"
        >
          <Matriz1Serie />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="matriz-2s"
          ano="2ª Série"
          subtitulo="Objetos de Conhecimento e habilidades da BNCC"
          imagem="/2acapas.png"
          theme="orange"
        >
          <Matriz2Serie />
        </AnoAccordionCard>

        <AnoAccordionCard
          id="matriz-3s"
          ano="3ª Série"
          subtitulo="Objetos de Conhecimento e habilidades da BNCC"
          imagem="/3acapas.png"
          theme="teal"
        >
          <Matriz3Serie />
        </AnoAccordionCard>
      </div>
    </div>
  );
}
