'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { FaPlus, FaArrowLeft } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { titleFont } from '@/lib/fonts'

const Modulo2Situacao = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('modulo-2-situacao');
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed]);

  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      ref={ref}
      id="modulo-2-situacao"
      layout
      className="scroll-mt-20 relative w-full h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
      transition={{ duration: 1.2 }}
    >
      {/* Imagem e camada escura */}
      <AnimatePresence>
        {!expanded && (
          <>
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/abp.jpg"
                alt="Aprendizagem baseada em projetos"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-blue-500/20 z-10" />
            </motion.div>

            <motion.div
              className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
            >
              <div className="max-w-3xl">
                <h2 className={`${titleFont.className} text-2xl md:text-4xl font-bold mb-4`}>
                  Projetos desenvolvidos nos livros
                </h2>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Texto alternativo com fundo azul */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white bg-blue-700 dark:bg-blue-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="max-w-3xl">

              <p className="text-base md:text-lg font-medium text-white pb-8 leading-relaxed">
                Como vimos no
                <span className="bg-white dark:bg-slate-100 text-blue-700 font-semibold px-2 py-0.5 rounded-md mx-1">
                  módulo 1
                </span>,
                o programa de
                <span className="bg-white dark:bg-slate-100 text-blue-700 font-semibold px-2 py-0.5 rounded-md mx-1">
                  educação financeira
                </span>
                <span className="bg-white dark:bg-slate-100 text-blue-700 font-semibold px-2 py-0.5 rounded-md mx-1">
                  Aprendendo a Lidar com Dinheiro
                </span>, propõe que os(as)
                <span className="bg-white dark:bg-slate-100 text-blue-700 font-semibold px-2 py-0.5 rounded-md mx-1">
                  educadores(as)
                </span>
                trabalhem os conteúdos do
                <span className="bg-white dark:bg-slate-100 text-blue-700 font-semibold px-2 py-0.5 rounded-md mx-1">
                  Livro do Estudante
                </span>
                por meio da
                <span className="bg-white dark:bg-slate-100 text-blue-700 font-semibold px-2 py-0.5 rounded-md mx-1">
                  Aprendizagem Baseada em Projetos
                </span>, realizando
                <span className="bg-white dark:bg-slate-100 text-blue-700 font-semibold px-2 py-0.5 rounded-md mx-1">
                  atividades de curta duração
                </span>
                que constituem
                <span className="bg-white dark:bg-slate-100 text-blue-700 font-semibold px-2 py-0.5 rounded-md mx-1">
                  projetos
                </span>
                que objetivam desenvolver o
                <span className="bg-white dark:bg-slate-100 text-blue-700 font-semibold px-2 py-0.5 rounded-md mx-1">
                  protagonismo dos estudantes
                </span>
                e potencializar o
                <span className="bg-white dark:bg-slate-100 text-blue-700 font-semibold px-2 py-0.5 rounded-md mx-1">
                  aprendizado
                </span>, o
                <span className="bg-white dark:bg-slate-100 text-blue-700 font-semibold px-2 py-0.5 rounded-md mx-1">
                  desenvolvimento de habilidades
                </span>
                e a
                <span className="bg-white dark:bg-slate-100 text-blue-700 font-semibold px-2 py-0.5 rounded-md mx-1">
                  percepção da importância
                </span>
                do tema para suas vidas.
              </p>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão flutuante com efeito bounce */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-4 right-4 z-30 bg-white dark:bg-slate-800 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/40 rounded-full p-3 shadow-xl transition-all"
        aria-label={expanded ? 'Voltar' : 'Expandir'}
      >
        {expanded ? <FaArrowLeft className="text-lg" /> : <FaPlus className="text-lg" />}
      </motion.button>
    </motion.div>
  )
}

export default Modulo2Situacao
