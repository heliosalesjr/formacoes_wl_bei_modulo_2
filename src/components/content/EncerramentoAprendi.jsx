'use client'
import React, { useState, useEffect } from 'react'
import { useMarkViewedOnVisible } from '@/hooks/useMarkViewedOnVisible';

import confetti from 'canvas-confetti'

const checklistItems = [
  'Conheci os projetos sugeridos nos livros.',
  'Aprendi a interpretar a Matriz de habilidades (Quadro Geral das Etapas).',
  'Conheci as ferramentas  SMART e 5W2H e suas aplicações em sala e com os projetos dos alunos.',
  
]

const EncerramentoAprendi = () => {
  const [checkedItems, setCheckedItems] = useState(Array(checklistItems.length).fill(false))
  const allChecked = checkedItems.every(Boolean)

  useEffect(() => {
    if (allChecked) {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
      })
    }
  }, [allChecked])

  const toggleCheckbox = (index) => {
    const updated = [...checkedItems]
    updated[index] = !updated[index]
    setCheckedItems(updated)
  }

  const ref = useMarkViewedOnVisible('encerramento-aprendi');

  return (
    <div ref={ref}
      id="encerramento-aprendi" className="scroll-mt-20 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 p-8 md:p-12 max-w-3xl mx-auto space-y-6">
      <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-4">
        NESTE MÓDULO EU:
      </h2>
      <ul className="space-y-4">
        {checklistItems.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <button
              onClick={() => toggleCheckbox(index)}
              className={`w-6 h-6 mt-1 flex items-center justify-center border-2 rounded transition-colors duration-300 ${
                checkedItems[index]
                  ? 'bg-green-500 border-green-500 text-white'
                  : 'border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800'
              }`}
            >
              {checkedItems[index] && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <span className="text-slate-700 dark:text-slate-200 text-base">{item}</span>
          </li>
        ))}
      </ul>

      {allChecked && (
        <div className="text-green-600 dark:text-green-400 font-semibold text-center text-lg mt-6">
          🎉 Parabéns! Você completou este módulo!
        </div>
      )}
    </div>
  )
}

export default EncerramentoAprendi
