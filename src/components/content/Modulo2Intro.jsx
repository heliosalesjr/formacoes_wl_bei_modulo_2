"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react'
import Image from 'next/image'

const Modulo2Intro = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed("modulo-2-intro");
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [markAsViewed]);

  return (
    <div className="p-16 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl mx-auto max-w-5xl">

      {/* === BLOCO TEXTO + IMAGEM === */}
      <div ref={ref} id="modulo-2-intro" className="scroll-mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Texto — 2/3 da largura */}
        <div className="md:col-span-2 flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white">
              Apresentação do Curso
            </h2>
          </div>

          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Dando seguimento ao curso Coleção{' '}
            <span className="italic font-semibold text-slate-800 dark:text-slate-100">Aprendendo a Lidar com Dinheiro</span>,
            o Módulo 2 aprofunda o trabalho com os conceitos de educação financeira na prática pedagógica,
            explorando novas abordagens para o ensino da Matemática de forma significativa e contextualizada.
            Esta formação integra as ações de acompanhamento pedagógico promovidas pela{' '}
            <span className="font-semibold">BEĨ Educação</span>, em parceria com a Secretaria de Educação do Município do Rio de Janeiro, e é voltada aos professores do 4º e 5º ano do Ensino Fundamental I.
          </p>

          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            O curso foi desenvolvido pela equipe pedagógica da{' '}
            <span className="font-semibold">BEĨ Educação</span>, em parceria com a equipe de tecnologia da{' '}
            <span className="font-semibold">SME Secretaria Municipal de Educação</span>, oferecido no formato{' '}
            <span className="font-semibold text-slate-800 dark:text-slate-100">autoinstrucional</span>, permitindo ao educador
            aprender no seu próprio ritmo, de maneira prática, interativa e acessível, com recursos que estimulam
            a autonomia e o aprimoramento profissional.
          </p>
        </div>

        {/* Imagem — 1/3 da largura */}
        <div className="relative w-full h-auto flex items-stretch">
          <div className="relative w-full h-full min-h-[350px] md:min-h-[100%] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/4_e_5_books.png"
              alt="Imagem ilustrativa"
              fill
              className="object-cover object-center rounded-xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>


      {/* === CARDS DE CONTEÚDO === */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-16">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center text-center">
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed max-w-xs">
            Este módulo amplia e aprofunda os conteúdos, fomentando o desenvolvimento profissional e apresentando novas estratégias para o ensino da educação financeira de maneira significativa e envolvente.
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-slate-800 dark:to-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center text-center">
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed max-w-xs">
            Assim, contribui para transformar a sala de aula e fortalecer toda a comunidade escolar.
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-yellow-100 dark:from-slate-800 dark:to-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center text-center">
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed max-w-xs">
            Ao concluir este módulo, espera-se que cada educador se sinta ainda mais preparado para integrar a educação financeira ao cotidiano escolar.
          </p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-purple-100 dark:from-slate-800 dark:to-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-300 flex items-center justify-center text-center">
          <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed max-w-xs">
            Promovendo reflexões, hábitos e atitudes que contribuam para a formação de cidadãos mais conscientes, responsáveis e capazes de lidar com os desafios do mundo financeiro de forma crítica e autônoma.
          </p>
        </div>
      </section>


      {/* === VÍDEO === */}
      <section>
        <h3 className="text-4xl font-bold text-slate-600 dark:text-white text-center pb-8">
          Vídeo de Apresentação
        </h3>

        <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/42BVLPl0xw8"
            title="Resumo Módulo 1"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default Modulo2Intro
