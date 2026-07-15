"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import React from 'react';
import Image from 'next/image';

const Modulo2AoFinal = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('modulo-2-ao-final');
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
      id="modulo-2-ao-final"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700"
    >
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {/* Imagem - 1/3 da largura e altura total */}
        <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <Image
            src="/check.jpg"
            alt="Imagem ilustrativa"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent dark:bg-none dark:text-white">
              Ao final deste módulo, você será capaz de:
            </h2>
          </div>

          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Compreender o <strong>passo a passo para elaboração de Projetos</strong>, reconhecendo suas etapas e objetivos pedagógicos.
          </p>
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Aplicar as <strong>ferramentas SMART e 5W2H </strong>para planejar metas e ações concretas, estimulando o protagonismo e a autonomia dos estudantes.
          </p>
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Planejar <strong>aulas baseadas na metodologia de Aprendizagem Baseada em Projetos (ABP)</strong>, promovendo o engajamento e a participação ativa dos alunos.
          </p>
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Utilizar <strong>roteiros e modelos de projetos </strong>para orientar a realização de projetos significativos, conectados ao cotidiano e à realidade da comunidade escolar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modulo2AoFinal;