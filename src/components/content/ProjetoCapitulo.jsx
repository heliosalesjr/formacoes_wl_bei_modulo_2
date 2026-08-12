import Image from "next/image";
import { THEMES } from "@/components/content/anoThemes";

export default function ProjetoCapitulo({
  theme = "red",
  titulo,
  meta,
  descricao,
  pagina,
  foto,
  isLast,
}) {
  const t = THEMES[theme] ?? THEMES.red;
  const paragrafos = Array.isArray(descricao) ? descricao : [descricao];

  return (
    <div className="relative flex gap-4 pb-8 last:pb-0">
      {!isLast && (
        <span
          aria-hidden
          className={`absolute left-[19px] top-10 bottom-0 w-px ${t.line}`}
        />
      )}

      <span
        className={`relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full shadow-sm ${t.solid}`}
      />

      <div
        className={`min-w-0 flex-1 pt-1 ${
          foto
            ? `flex flex-col md:flex-row md:items-center gap-4 md:gap-6 rounded-2xl ${t.bgSoft} p-4 md:p-5`
            : ""
        }`}
      >
        <div className={foto ? "min-w-0 md:w-1/2" : ""}>
          <h4 className="font-semibold text-slate-800 dark:text-slate-100">{titulo}</h4>
          {meta && (
            <p className={`mt-0.5 text-xs font-medium ${t.text}`}>{meta}</p>
          )}
          {paragrafos.map((par, i) => (
            <p key={i} className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed first:mt-1">
              {par}
            </p>
          ))}
          {pagina && (
            <span className={`mt-2 inline-block rounded-full px-2.5 py-1 text-xs font-medium ${t.chip}`}>
              {pagina}
            </span>
          )}
        </div>

        {foto && (
          <div className="min-w-0 md:w-1/2">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border dark:border-slate-700 shadow-sm">
              <Image src={foto} alt={titulo} fill className="object-cover" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
