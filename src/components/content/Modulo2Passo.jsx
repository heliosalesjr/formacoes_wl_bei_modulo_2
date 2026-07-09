"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';
import { titleFont } from '@/lib/fonts'

const Modulo2Passo = () => {
  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('modulo-2-passo');
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
      id="modulo-2-passo"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700"
    >
      <div className="flex items-center justify-center gap-3 mb-8">
        <h2 className={`${titleFont.className} text-4xl font-bold text-center text-slate-600 dark:text-white`}>
          Projetos do livro
        </h2>
      </div>

      <div className="text-slate-700 dark:text-slate-200 space-y-5 text-lg leading-relaxed">
        <p>
          Como já vimos, o livro tem uma seção <strong>“Agora é sua vez!”</strong>, em que apresentamos
          atividades de projeto para desenvolver com os estudantes.
        </p>
        <p>
          Essas atividades são encadeadas com as demais atividades do livro e outras atividades de
          projeto, ajudando a colocar as crianças em situações práticas que vão construir
          conhecimentos mais amplos e trabalhar em equipe.
        </p>
      </div>
    </div>
  );
};

export default Modulo2Passo;
