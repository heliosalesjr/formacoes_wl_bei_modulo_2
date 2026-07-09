"use client";
import { useEffect, useRef } from 'react'
import { useSidebar } from '@/contexts/SidebarContext'
import { titleFont } from '@/lib/fonts'
import Image from 'next/image'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

// --- Dados das atividades do 4º ano ---
const atividades4ano = [
  {
    title: "Capítulo 1 — Exposição das profissões",
    content: `
Os alunos fazem uma pesquisa sobre duas profissões diferentes, descrevendo suas funções e importância social. A proposta estimula a valorização de todo tipo de trabalho e a compreensão das funções na sociedade. (página 8)`,
  },
  {
    title: "Capítulo 1 — Pesquisa de preços",
    content: `
O objetivo desta atividade é comparar os preços dos itens da padaria mencionados na aula com os preços reais de uma padaria local, entendendo a dinâmica dos preços. (página 12)`,
  },
  {
    title: "Capítulo 1 — Entrevistando um adulto",
    content: `
Os alunos entrevistam um adulto sobre sua profissão, registrando as respostas em um roteiro de perguntas. A ideia é compreender a rotina profissional e o valor social do trabalho, exercitando oralidade, escuta e escrita. (página 25)`,
  },
  {
    title: "Capítulo 2 — Encarte de preços",
    content: `
Os estudantes pesquisam preços de produtos ou alimentos para comparar valores e refletir sobre diferenças de custo e escolhas de consumo consciente, aplicando noções básicas de cálculo e comparação de preços. (página 43)`,
  },
  {
    title: "Capítulo 4 — O que quero comprar?",
    content: `
Os alunos escolhem um produto que desejam comprar com o dinheiro, estimulando autonomia e discernimento. (página 65)`,
  },
  {
    title: "Capítulo 5 — Anúncio de promoção",
    content: `
Os alunos pesquisam promoções no dia a dia, para entender como funcionam e quais estratégias são usadas para atrair consumidores. (página 75)`,
  },
  {
    title: "Capítulo 5 — Anúncio de parcelamento",
    content: `
Os alunos pesquisam exemplos de parcelamento e refletem sobre as vantagens e cuidados ao comprar dessa forma. (página 82)`,
  },
  {
    title: "Capítulo 6 — Reciclar garrafas de plástico",
    content: `
Os alunos devem separar garrafas plásticas usadas em casa, lavá-las e levá-las à escola para coleta. Em sala, calculam quantas garrafas juntaram e projetam o total até o fim do ano, promovendo educação ambiental e cálculo aplicado. (página 93)`,
  },
  {
    title: "Capítulo 6 — Cartaz de economia",
    content: `
Os alunos produzem um cartaz sobre economia e sustentabilidade, estimulando responsabilidade coletiva e hábitos conscientes. (página 94)`,
  },
]

// --- Dados das atividades do 5º ano ---
const atividades5ano = [
  {
    title: "Capítulo 2 — Pesquisa de preços",
    content: `
O projeto convida os alunos a iniciarem a organização de uma festa de aniversário da turma. Eles precisam realizar uma pesquisa de preços em dois mercados diferentes, registrando tudo o que descobrirem. A atividade introduz, na prática, o conceito de comparação de preços e mostra como esse hábito ajuda a tomar decisões de compra mais conscientes e econômicas. (página 26)`,
  },
  {
    title: "Capítulo 3 — Embalagem grande ou pequena?",
    content: `
Os alunos devem visitar um mercado para comparar preços e tamanhos de embalagens do mesmo produto, observando se compensa mais comprar a versão grande ou a pequena. Eles anotam marca, peso/volume e preço de achocolatado e refrigerantes, comparando produtos iguais sempre que possível. (Página 42)`,
  },
  {
    title: "Capítulo 4 — Dividindo com os amigos",
    content: `
Nesta etapa do projeto da festa, os alunos aprendem a planejar a quantidade de comida e bebida necessária para todos os participantes. Eles escolhem um salgado, um doce e uma bebida e registram no quadro. Depois, definem a quantidade por estudante e multiplicam pelos participantes, calculando a quantidade total a ser comprada. (Página 48)`,
  },
  {
    title: "Capítulo 4 — O orçamento da festa",
    content: `
A turma define, junto com a professora, um valor total de orçamento para a festa. Em grupos, escolhem comidas, bebidas, ingredientes e quantidades, pesquisam preços e montam suas tabelas de orçamento, cuidando para não ultrapassar o limite. Depois, apresentam e decidem se combinam ideias ou votam em um único orçamento coletivo. (Página 56)`,
  },
  {
    title: "Capítulo 5 — Criando minha própria loja",
    content: `
Os alunos imaginam que possuem sua própria loja, escolhem o que gostariam de vender e criam um cartaz ilustrando sua loja e produtos. Depois, conversam com colegas sobre outras ideias de negócio, anotam cinco sugestões e circulam a que mais chamou sua atenção. A proposta estimula criatividade, visão empreendedora e troca de ideias. (Página 75)`,
  },
  {
    title: "Capítulo 6 — Exposição das propagandas",
    content: `
Após produzirem diversas propagandas ao longo do ano, os alunos organizam uma exposição com as peças criadas. Definem data, local e forma de organização (por tema, ordem cronológica ou outro critério). Depois, criam um cartaz de divulgação e espalham pela escola, convidando a comunidade. (Página 90)`,
  },
]

export default function Modulo2Content() {
  const ref = useRef()
  const { markAsViewed } = useSidebar()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('modulo-2-content')
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [markAsViewed])

  return (
    <section
      ref={ref}
      id="modulo-2-content"
      className="scroll-mt-20 max-w-5xl mx-auto my-16 py-8 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Card className="w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-visible">
          <CardHeader className="text-center">
            <CardTitle className={`${titleFont.className} text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
              Atividades de Projeto do Livro
            </CardTitle>
            <p className="text-slate-600 dark:text-slate-300 text-base mt-4 max-w-2xl mx-auto">
              Nos livros, há séries de atividades que valem ponto na <strong>Gincana da Educação Financeira</strong>,
              que funcionam como pequenos projetos.
            </p>
          </CardHeader>

          <CardContent className="py-8 px-4 space-y-12 overflow-visible">
            {/* --- Atividades do 4º ano --- */}
            <div className="pb-4 overflow-visible">
              <div className="flex justify-center mb-8">
                <div className="relative w-80 h-64 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/livros-4o-5o.png"
                    alt="Livros do 4º ano"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className={`${titleFont.className} text-3xl font-bold text-red-600 dark:text-red-400 text-center mb-6`}>
                Atividades do 4º ano
              </h3>
              <div className="p-2 pb-4">
                <Accordion type="multiple" className="space-y-3">
                  {atividades4ano.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`ano4-item-${i}`}
                      className="border-2 border-red-200 dark:border-red-900/50 rounded-lg hover:border-red-300 dark:hover:border-red-700 transition-colors"
                    >
                      <AccordionTrigger className="text-left font-semibold text-slate-800 dark:text-slate-100 text-lg px-4 py-3 hover:bg-orange-50 dark:hover:bg-orange-950/30 rounded-md transition-colors">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-4 text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line text-[1rem] bg-gradient-to-b from-orange-50/30 to-transparent dark:from-orange-950/20">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* --- Atividades do 5º ano --- */}
            <div className="pb-4 overflow-visible">
              <div className="flex justify-center mb-8">
                <div className="relative w-80 h-64 rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/livros-4o-5o.png"
                    alt="Livros do 5º ano"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className={`${titleFont.className} text-3xl font-bold text-purple-700 dark:text-purple-400 text-center mb-6`}>
                Atividades do 5º ano
              </h3>
              <div className="p-2 pb-4">
                <Accordion type="multiple" className="space-y-3">
                  {atividades5ano.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`ano5-item-${i}`}
                      className="border-2 border-purple-200 dark:border-purple-900/50 rounded-lg hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
                    >
                      <AccordionTrigger className="text-left font-semibold text-slate-800 dark:text-slate-100 text-lg px-4 py-3 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-md transition-colors">
                        {item.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-4 text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line text-[1rem] bg-gradient-to-b from-blue-50/30 to-transparent dark:from-blue-950/20">
                        {item.content}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
