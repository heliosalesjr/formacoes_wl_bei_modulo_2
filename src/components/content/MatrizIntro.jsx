"use client";
import { useState } from "react";
import { useMarkViewedOnVisible } from "@/hooks/useMarkViewedOnVisible";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const MatrizIntro = () => {

  const ref = useMarkViewedOnVisible("matriz-intro");

  const [mostrarImagem, setMostrarImagem] = useState(false);

  return (
    <div
      ref={ref}
      id="matriz-intro"
      className="scroll-mt-20 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 p-8 shadow-2xl border border-slate-100 dark:border-slate-700"
    >
      <div className="flex items-center justify-center gap-3 mb-8">

        <h2 className="text-2xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent dark:bg-none dark:text-white">
          Quadro Geral
        </h2>

      </div>

      <div className="text-slate-700 dark:text-slate-200 space-y-5 text-lg leading-relaxed">
        <p>
           No quadro geral a seguir encontram-se os Objetos de Conhecimento abordados pelo <strong>Livro do Estudante</strong>, com as habilidades de Matemática desenvolvidas, os temas de Educação Financeira e os Temas Interdisciplinares com Habilidades da <strong>BNCC</strong>.
        </p>
        <p>
          A <strong>BNCC</strong> define dez competências a serem trabalhadas e
          desenvolvidas ao longo da Educação Básica. Cada uma delas engloba
          objetivos e habilidades que devem ser estimuladas no estudante. São
          elas:
        </p>
        <ol className="list-decimal list-inside space-y-1 pl-4">
          <li>
            <strong>Conhecimento</strong>
          </li>
          <li>
            <strong>Pensamento científico, crítico e criativo</strong>
          </li>
          <li>
            <strong>Repertório cultural</strong>
          </li>
          <li>
            <strong>Comunicação</strong>
          </li>
          <li>
            <strong>Cultura digital</strong>
          </li>
          <li>
            <strong>Trabalho e projeto de vida</strong>
          </li>
          <li>
            <strong>Argumentação</strong>
          </li>
          <li>
            <strong>Autoconhecimento e autocuidado</strong>
          </li>
          <li>
            <strong>Empatia e cooperação</strong>
          </li>
          <li>
            <strong>Responsabilidade e cidadania</strong>
          </li>
        </ol>

        <div className="flex flex-col items-center space-y-6">
          {/* Imagem principal */}
          <div className="flex justify-center">
            <Image
              src="/matriz_habilidades.png"
              alt="Matriz de Habilidades"
              width={800}
              height={800}
              className="max-w-full max-h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Box de destaque com chamada */}
          <div
            onClick={() => setMostrarImagem(!mostrarImagem)}
            className="cursor-pointer w-full max-w-3xl p-6 text-center rounded-xl shadow-md border border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-950 dark:to-blue-900 hover:from-blue-200 hover:to-blue-100 dark:hover:from-blue-900 dark:hover:to-blue-800 transition duration-300"
          >
            <p className="text-lg font-semibold text-blue-800 dark:text-blue-200">
              Para saber mais sobre as Competências Gerais da BNCC, clique aqui para abrir um infográfico.
            </p>
          </div>

          {/* Imagem com zoom que aparece ao clicar */}
          {mostrarImagem && (
            <div className="flex justify-center max-w-3xl w-full">
              <Zoom>
                <img
                  src="/competencias_gerais.jpeg"
                  alt="Competências Gerais da BNCC"
                  style={{
                    maxWidth: "800px",
                    width: "100%",
                    borderRadius: "0.5rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    cursor: "zoom-in",
                  }}
                />
              </Zoom>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatrizIntro;
