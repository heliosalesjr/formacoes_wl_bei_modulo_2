"use client"
import React, { useState } from 'react'

import { useMarkViewedOnVisible } from '@/hooks/useMarkViewedOnVisible';
import { FaChevronDown, FaBookOpen, FaExternalLinkAlt } from 'react-icons/fa'

const referencias = [
  {
    autores: 'BACICH, Lilian; MORAN, José (org.).',
    texto: 'Metodologias ativas para uma educação inovadora: uma abordagem teórico-prática. Porto Alegre: Penso, 2018.',
  },
  {
    autores: 'BEĨ EDUCAÇÃO.',
    texto: 'Coleção Aprendendo a lidar com dinheiro: materiais do estudante e do educador do 1º ao 9º ano. [S. l.]: BEĨ Educação, [s. d.].',
  },
  {
    autores: 'BENDER, William N.',
    texto: 'Aprendizagem baseada em projetos: educação diferenciada para o século XXI. Tradução de Fernando de Siqueira Rodrigues. Porto Alegre: Penso, 2015.',
  },
  {
    autores: 'BRASIL.',
    texto: 'Ministério da Educação. Base Nacional Comum Curricular. Brasília, DF: MEC, 2018.',
    link: 'https://basenacionalcomum.mec.gov.br/images/BNCC_20dez_site.pdf',
  },
  {
    autores: 'MOÇO, Anderson.',
    texto: '14 perguntas e respostas sobre projetos didáticos. Nova Escola, 2011.',
    link: 'https://novaescola.org.br/conteudo/424/14-perguntas-e-respostas-sobre-projetos-didaticos',
  },
  {
    autores: 'NAOMI, Aline.',
    texto: 'Aprendizagem baseada em projetos: entenda o que é e como funciona na prática. Nova Escola, 2021.',
    link: 'https://novaescola.org.br/conteudo/20407/aprendizagem-baseada-em-projetos-entenda-o-que-e-e-como-funciona-na-pratica',
  },
];

const EncerramentoIntro = () => {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useMarkViewedOnVisible('encerramento-intro');

  return (
    <div ref={ref} id="encerramento-intro" className="scroll-mt-20 mt-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 rounded-lg shadow-2xl border border-slate-100 dark:border-slate-700 p-6 md:p-10 space-y-8 text-center">
      {/* Título */}
      <h2 className="text-2xl md:text-4xl font-bold text-slate-700 dark:text-white">
        Encerrando o Módulo 2
      </h2>

      {/* Subtítulo */}
      <p className="text-slate-700 dark:text-slate-200 text-base md:text-lg max-w-3xl mx-auto">
        Chegamos ao final do segundo módulo da nossa trilha de aprendizagem. Assista a seguir um vídeo com um resumo dos conteúdos abordados.
      </p>

      {/* Vídeo */}
      <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/PvFMo9R1_8s"
          title="Encerramento Módulo 2"
          allowFullScreen
        ></iframe>
      </div>

      {/* Accordion de Referências */}
      <div className="text-left max-w-3xl mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="referencias-lista"
          className={`w-full flex justify-between items-center gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-800 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-slate-700 dark:hover:to-slate-700 transition-all rounded-xl ${isOpen ? 'rounded-b-none' : ''} px-6 py-4 shadow border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-semibold`}
        >
          <span className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 dark:bg-blue-700 text-white shadow-sm">
              <FaBookOpen className="w-4 h-4" />
            </span>
            <span>Acesse aqui as Referências Gerais de nosso conteúdo</span>
          </span>
          <FaChevronDown
            className={`text-slate-600 dark:text-slate-400 flex-shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        <div
          id="referencias-lista"
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <ol className="bg-white dark:bg-slate-800 border border-t-0 border-slate-200 dark:border-slate-700 rounded-b-xl px-6 py-5 divide-y divide-slate-100 dark:divide-slate-700/60 text-sm text-slate-700 dark:text-slate-300">
              {referencias.map(({ autores, texto, link }, index) => (
                <li key={autores} className="flex gap-4 py-3 first:pt-0 last:pb-0">
                  <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold">
                    {index + 1}
                  </span>
                  <div className="leading-relaxed">
                    <strong className="dark:text-slate-100">{autores}</strong> {texto}
                    {link && (
                      <>
                        {' '}Disponível em:{' '}
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-baseline gap-1 text-blue-600 dark:text-blue-400 hover:underline break-all"
                        >
                          <span>{link}</span>
                          <FaExternalLinkAlt className="w-2.5 h-2.5 flex-shrink-0" />
                        </a>
                        .
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EncerramentoIntro
