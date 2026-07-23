"use client"
import { useMarkViewedOnVisible } from '@/hooks/useMarkViewedOnVisible';

import { motion } from "framer-motion"
import { FaMagic } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export default function Modulo2PPDA() {

  const ref = useMarkViewedOnVisible('modulo-2-modelo');

  return (
    <motion.div
      ref={ref}
      id="modulo-2-modelo"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="scroll-mt-20 bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 rounded-2xl shadow-lg p-8 text-center space-y-4"
    >
      <div className="flex justify-center text-blue-600 dark:text-blue-400">
        <FaMagic size={40} />
      </div>
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Modelo de projeto</h2>
      <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
        Baixe este arquivo e faça uma cópia dele para usar como modelo do seu projeto.
      </p>
      <div>
        <a
          href="https://docs.google.com/spreadsheets/d/1OsxERaQzikTDw5NlSelY_cknE1C3Ty8cF3PPQLhRpak/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl shadow-md transition duration-300">
            Acessar Modelo
          </Button>
        </a>
      </div>
    </motion.div>
  )
}
