"use client";
import { useMarkViewedOnVisible } from '@/hooks/useMarkViewedOnVisible';
import React from 'react'
import Image from 'next/image'
import { titleFont } from '@/lib/fonts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

const images = ['em.png', 'ef1.png', 'ef2.png']

const Modulo2Intro = () => {
  const ref = useMarkViewedOnVisible("modulo-2-intro");

  return (
    <div className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl mx-auto max-w-5xl">

      {/* === TÍTULO + PARÁGRAFO + IMAGEM === */}
      <div ref={ref} id="modulo-2-intro" className="scroll-mt-20 space-y-6 w-full">
        <h2 className={`${titleFont.className} text-4xl font-bold text-center bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent dark:bg-none dark:text-white`}>
          Apresentação do Curso
        </h2>

        <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
          Dando sequência à formação sobre a coleção
          <strong> Aprendendo a Lidar com Dinheiro</strong>,
          o <strong>Módulo 2</strong> aprofunda o planejamento de aulas e projetos. Esta formação integra as ações de acompanhamento pedagógico da <strong>BEĨ Educação</strong>, voltada aos educadores que lecionam Matemática para as respectivas turmas, no formato autoinstrucional.
        </p>

        {/* Carrossel de imagens */}
        <div className="relative w-full h-[50vh] overflow-hidden rounded-xl shadow-lg">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            className="w-full h-full"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx} className="relative">
                <Image
                  src={`/${img}`}
                  alt={`Slide ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover object-center"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


      {/* === CARDS DE CONTEÚDO === */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
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
