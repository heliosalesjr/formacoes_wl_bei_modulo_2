"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

import React from 'react'
import { FaChalkboardTeacher, FaBookOpen, FaUsers } from 'react-icons/fa'
import { titleFont } from '@/lib/fonts'

const objetivos = [
  {
    icon: <FaChalkboardTeacher size={32} className="text-blue-600" />,
    title: 'Projetos do Ano',
    description: 'Conhecer os projetos sugeridos e sua estrutura.'
  },
  {
    icon: <FaBookOpen size={32} className="text-red-500" />,
    title: 'Matriz de habilidades',
    description: 'Conhecer e interpretar a Matriz de habilidades.'
  },
  {
    icon: <FaUsers size={32} className="text-green-500" />,
    title: 'Ferramentas de Planejamento',
    description: 'Conhecer as ferramentas SMART e 5W2H.'
  },
]

const Modulo2Objetivos = () => {

  const ref = useRef();
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed('modulo-2-objetivos');
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
    <div ref={ref} id="modulo-2-objetivos" className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700">
      <div className="flex items-center justify-center gap-3 mb-8">
        <h2 className={`${titleFont.className} text-4xl font-bold text-center text-slate-600 dark:text-white py-4`}>
          Objetivos do Módulo 2
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {objetivos.map((obj, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center "
          >
            <div className="mb-4 p-3 rounded-full bg-slate-50 dark:bg-slate-700">{obj.icon}</div>
            <h3 className={`${titleFont.className} text-lg font-bold text-slate-800 dark:text-slate-200 mb-3`}>{obj.title}</h3>
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed">{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Modulo2Objetivos
