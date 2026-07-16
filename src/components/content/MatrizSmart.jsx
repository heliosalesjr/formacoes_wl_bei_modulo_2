"use client";
import { useEffect, useRef } from "react";
import { useSidebar } from "@/contexts/SidebarContext";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MatrizSmart = () => {
  const ref = useRef(null);
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("modulo-2-smart");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div
      ref={ref}
      id="modulo-2-smart"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700"
    >
      <div className="flex items-center justify-center gap-3 mb-8">

        <h2 className="text-4xl font-bold text-center text-slate-600 dark:text-white">
          Metas SMART: um modelo para aperfeiçoar suas metas
        </h2>

      </div>

      <div className="text-slate-700 dark:text-slate-200 space-y-5 text-lg leading-relaxed">
        <p>
          Trabalhar metas com os alunos vai muito além de propor que eles
          “pensem no futuro” ou “economizem dinheiro”. Metas vagas geram
          frustração. Já as metas bem definidas ajudam a desenvolver senso de
          direção, responsabilidade e autonomia. Por isso, dentro do programa{" "}
          <strong>Aprendendo a Lidar com o Dinheiro</strong>, apresentamos as metas SMART como uma metodologia prática para ensinar os
          estudantes a formularem metas mais conscientes e realizáveis.
        </p>

        <div className="flex justify-center my-6">
          <Image
            src="/SMART.png"
            alt="Imagem da ferramenta SMART"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left dark:text-slate-200">
              S – Specific (Específica)
            </AccordionTrigger>
            <AccordionContent>
              A meta precisa dizer exatamente o que o aluno quer. Evitamos
              generalizações como “guardar dinheiro” ou “ficar rico”.<br /><br />
              <strong>Exemplo em sala:</strong> Peça aos alunos que transformem a
              frase “quero comprar um celular” em algo mais específico, como
              “quero comprar um celular usado, com boa câmera, que custa até R$
              800”.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left dark:text-slate-200">
              M – Measurable (Mensurável)
            </AccordionTrigger>
            <AccordionContent>
              A meta precisa poder ser medida. É importante saber se o aluno
              está se aproximando ou se afastando do objetivo.<br /><br />
              <strong>Exemplo:</strong> Se a meta for juntar R$ 100 em dois meses,
              os alunos podem anotar semanalmente quanto conseguiram guardar e
              quanto ainda falta.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left dark:text-slate-200">
              A – Achievable (Atingível)
            </AccordionTrigger>
            <AccordionContent>
              A meta deve ser possível dentro da realidade de cada aluno. A ideia
              é desafiar, mas não desmotivar.<br /><br />
              <strong>Dica pedagógica:</strong> Aqui é importante ouvir os alunos,
              conhecer suas rotinas, se recebem mesada, se fazem pequenos
              trabalhos, etc. Uma boa pergunta seria: “Com o que você já tem
              hoje, essa meta é possível?”
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left dark:text-slate-200">
              R – Relevant (Relevante)
            </AccordionTrigger>
            <AccordionContent>
              A meta precisa ter sentido. Se não for importante para o aluno, ele
              dificilmente manterá o esforço.<br /><br />
              <strong>Exemplo:</strong> “Quero juntar R$ 50 para comprar tinta e
              pincéis, porque gosto de desenhar e quero melhorar meus
              trabalhos.”<br /><br />
              Trabalhar esse aspecto é também trabalhar autoestima e identidade.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left dark:text-slate-200">
              T – Time-based (Temporal)
            </AccordionTrigger>
            <AccordionContent>
              Toda meta precisa de prazo. Um prazo razoável ajuda o aluno a
              organizar os passos.<br /><br />
              <strong>Exemplo:</strong> “Quero juntar R$ 150 até o final do
              trimestre para comprar um tênis novo.”
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default MatrizSmart;
