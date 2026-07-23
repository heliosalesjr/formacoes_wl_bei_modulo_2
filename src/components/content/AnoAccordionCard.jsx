"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useMarkViewedOnVisible } from "@/hooks/useMarkViewedOnVisible";

const THEMES = {
  red: {
    borderOpen: "border-red-300 dark:border-red-700/60",
    text: "text-red-700 dark:text-red-400",
    bgSoft: "bg-red-50 dark:bg-red-950/40",
    glow: "bg-red-400/25",
    ring: "focus-visible:ring-red-400/60",
  },
  cyan: {
    borderOpen: "border-cyan-300 dark:border-cyan-700/60",
    text: "text-cyan-700 dark:text-cyan-400",
    bgSoft: "bg-cyan-50 dark:bg-cyan-950/40",
    glow: "bg-cyan-400/25",
    ring: "focus-visible:ring-cyan-400/60",
  },
  purple: {
    borderOpen: "border-purple-300 dark:border-purple-700/60",
    text: "text-purple-700 dark:text-purple-400",
    bgSoft: "bg-purple-50 dark:bg-purple-950/40",
    glow: "bg-purple-400/25",
    ring: "focus-visible:ring-purple-400/60",
  },
};

export default function AnoAccordionCard({
  id,
  ano,
  subtitulo,
  imagem,
  theme = "red",
  defaultOpen = false,
  children,
}) {
  const visibleRef = useMarkViewedOnVisible(id);
  const [open, setOpen] = useState(defaultOpen);
  const t = THEMES[theme] ?? THEMES.red;

  useEffect(() => {
    if (window.location.hash === `#${id}`) {
      setOpen(true);
    }
  }, [id]);

  return (
    <div ref={visibleRef} id={id} className="scroll-mt-24">
      <div
        className={`relative overflow-hidden rounded-2xl border-2 bg-white dark:bg-slate-900 shadow-md transition-[box-shadow,border-color] duration-300 ${
          open ? `${t.borderOpen} shadow-xl` : "border-slate-200 dark:border-slate-700 hover:shadow-lg"
        }`}
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 ${t.glow} ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={`${id}-content`}
          className={`relative z-10 flex w-full items-center gap-4 p-4 md:p-5 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 ${t.ring} rounded-2xl`}
        >
          <div className="relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0 overflow-hidden rounded-xl shadow-md ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-300 group-hover:scale-105">
            <Image src={imagem} alt={`Livros do ${ano}`} fill sizes="80px" className="object-cover" />
          </div>

          <div className="flex-1 min-w-0">
            <p className={`text-lg md:text-xl font-bold ${t.text}`}>{ano}</p>
            {subtitulo && (
              <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{subtitulo}</p>
            )}
          </div>

          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 ${
              open ? t.bgSoft : "bg-slate-100 dark:bg-slate-800"
            } ${t.text}`}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={`${id}-content`}
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 overflow-hidden"
            >
              <div className="border-t border-slate-100 dark:border-slate-800 p-4 md:p-6">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
