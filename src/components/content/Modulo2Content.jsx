'use client'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const passos = [
  {
    title: "Passo 1: Turma",
    content: `Especificar a que turma será aplicado este roteiro.`,
  },
  {
    title: "Passo 2: Duração do projeto",
    content: `Quantas aulas vai durar o projeto?`,
  },
  {
    title: "Passo 3: Tema",
    content: `O tema deve ser, de preferência, escolhido junto com a turma.`,
  },
  {
    title: "Passo 4: Perfil da turma",
    content: `Sugerimos a aplicação das ferramentas apresentadas no Item 2, “Como engajar os estudantes?” (pp. 8-12), deste caderno.`,
  },
  {
    title: "Passo 5: Fator de mobilização",
    content: `Um desafio proposto aos estudantes a partir do que foi levantado no diagnóstico do educador, com base no que motiva e desperta o interesse da turma. Esse desafio pode ser, por exemplo, algo a ser construído (uma maquete, um livro ou uma horta), uma habilidade a ser desenvolvida (aprender a aplicar os primeiros socorros, jogar xadrez ou ler em público), uma apresentação a ser organizada (uma peça de teatro, uma dança, um experimento científico ou um truque de mágica) ou um evento a ser planejado e organizado pelos estudantes (uma exposição artística, um seminário, uma festa, um passeio ou um torneio esportivo). Enfim, é aquilo que a turma pode colocar em prática a partir do conhecimento teórico adquirido.`,
  },
  {
    title: "Passo 6: Habilidades específicas da BNCC",
    content: `
Que habilidades trabalhar? Para cada uma delas, o educador deve definir os conteúdos conceituais, procedimentais e atitudinais.

A. Conteúdos conceituais:

São conteúdos que dizem respeito ao “saber conhecer”. Estão relacionados aos conceitos que se quer trabalhar.

➡ Quais conceitos os estudantes precisam saber? Exemplo: compreender o conceito de Economia.

B. Conteúdos procedimentais:

São aqueles que envolvem o “saber fazer”, ou seja, a realização de ações e de exercícios de reflexão sobre a própria atividade e sua aplicação em diferentes contextos. Tornam claro o caráter significativo do que é ensinado e sua aplicação no dia a dia.

➡ Que procedimentos os estudantes precisam saber? Exemplos: aplicar a Matemática nos trabalhos que foram propostos pelo professor; aplicar a Matemática em situações-problema; calcular uma grandeza proporcional a outra por meio de regra de três; resolver uma equação; construir um gráfico.

C. Conteúdos atitudinais:

Estão ligados ao “saber ser”. A formação e a mudança de atitudes podem acontecer em três dimensões:
i. cognitiva – conhecimentos e crenças;
ii. afetiva – sentimentos e preferências;
iii. de conduta – ações manifestas e declaração de intenções.

➡ Que atitudes os estudantes precisam observar ao longo do projeto? Em quais delas esperam-se mudanças? Exemplos: compreender e respeitar as opiniões dos colegas em um projeto colaborativo; tomar decisões dentro do projeto que está sendo desenvolvido; ter responsabilidade com a atribuição que assumiu dentro do grupo de trabalho.
`,
  },
  {
    title: "Passo 7: Atividades",
    content: `Escolher as atividades a serem desenvolvidas em cada aula para trabalhar os conteúdos previstos e alcançar os objetivos desejados. Descrever as estratégias para as aulas. Que habilidades (definidas como importantes por meio do perfil da turma) o educador vai trabalhar, qual conteúdo utilizará e como se dará o desenvolvimento das habilidades listadas. O arranjo deve concatenar as habilidades com os conteúdos e atividades que o educador propôs aos jovens desenvolver. Montar um plano de atividades, detalhando a primeira parte: como apresentar o seu PPDA para a turma; como eles podem desenvolver o fator de mobilização que o educador solicitou; como podem se organizar. As partes posteriores serão detalhadas à medida que forem definidas, a depender das decisões tomadas junto com os jovens.

Dica: certifique-se de considerar as habilidades e competências, bem como os interesses, conhecimentos e práticas dos estudantes quanto aos assuntos abordados, para saber como ampliar o conhecimento dos conteúdos desenvolvidos. Isso ajuda a propor atividades estimulantes e motivadoras. Em geral, uma atividade é estimulante e motivadora quando propõe desafios passíveis de serem superados. As atividades devem ser planejadas de maneira que uma ocorra após a outra, dando sentido à sequência estabelecida a fim de atingir cada objetivo estabelecido.`,
  },
  {
    title: "Passo 8: Avaliação de percurso e de resultados",
    content: `É importante que, para cada atividade ou bloco de atividades, o educador programe e dedique um tempo específico para conferir se está atingindo os objetivos do PPDA. Um bom plano de avaliação contém indicadores ou evidências de aprendizagem de acordo com cada objetivo elencado (o que se pretende que os estudantes demonstrem ou façam para comprovar seu progresso no alcance das metas estabelecidas?), formas de verificação (podem ser usadas vários instrumentos, como apresentações, seminários, peças de teatro, pesquisas, debate, prova escrita, autoavaliação etc.) e um momento de verificação, ou seja, de observação durante a atividade ou ao fim de um conjunto de atividades.`,
  },
  {
    title: "Passo 9: Apresentação aos estudantes e finalização",
    content: `Com o PPDA estruturado, o educador deve apresentá-lo à turma. Nesse momento, ele pode ser ajustado e finalizado com a ajuda dos jovens, para que o educador, em seguida, dê início às atividades, conforme planejado.`,
  },
  {
    title: "Passo 10: Culminância para celebração e apresentação dos resultados",
    content: `O educador deve marcar, junto com os estudantes e com a gestão da escola, uma data para apresentar os resultados do projeto para o público a ser escolhido: outros professores, outras turmas, a comunidade do bairro, entre outros.`,
  },
]

export default function Modulo2Content() {

  const ref = useRef();
    const { markAsViewed } = useSidebar();
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            markAsViewed('modulo-2-ppda');
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
    <section ref={ref} id="modulo-2-ppda" className="scroll-mt-20 max-w-5xl mx-auto my-16 py-4 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Card className="w-full bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-blue-100 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-slate-700 dark:text-white text-center">
              Como elaborar um roteiro do PPDA
            </CardTitle>
          </CardHeader>
          <CardContent className="py-6">
            <div className="space-y-4 text-base">
            <Accordion type="multiple">
                {passos.map((passo, i) => (
                <AccordionItem
                    value={`item-${i}`}
                    key={i}
                    className="border border-blue-100 dark:border-slate-700 rounded-lg"
                >
                    <AccordionTrigger className="text-left font-semibold text-slate-800 dark:text-slate-200 text-lg px-4 py-3 hover:bg-blue-50 dark:hover:bg-slate-700 rounded-md">
                    {passo.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-4 text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line text-[1rem]">
                    {passo.content}
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
            </div>
          </CardContent>
        </Card>

       
      </motion.div>
    </section>
  )
}
