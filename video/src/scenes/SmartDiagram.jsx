import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { FaBullseye } from "react-icons/fa";

const SMART_ITEMS = [
  { letter: "S", word: "ESPECÍFICO", desc: "Specific — Objetivos claros e bem definidos", color: "#3b82f6", bg: "#1d4ed8" },
  { letter: "M", word: "MENSURÁVEL", desc: "Measurable — Progresso quantificável", color: "#22c55e", bg: "#15803d" },
  { letter: "A", word: "ATINGÍVEL", desc: "Achievable — Metas alcançáveis e realistas", color: "#f97316", bg: "#c2410c" },
  { letter: "R", word: "RELEVANTE", desc: "Relevant — Alinhado aos objetivos maiores", color: "#a855f7", bg: "#7e22ce" },
  { letter: "T", word: "TEMPORAL", desc: "Time-bound — Prazo definido para conclusão", color: "#ef4444", bg: "#b91c1c" },
];

const SmartRow = ({ item, index, frame, fps, totalItems }) => {
  const delay = 80 + index * 35;
  const rowX = interpolate(frame, [delay, delay + 45], [-300, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const rowOpacity = interpolate(frame, [delay, delay + 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const letterScale = spring({ frame: Math.max(0, frame - delay - 10), fps, config: { damping: 12, stiffness: 100 }, from: 0.5, to: 1 });

  return (
    <div style={{
      transform: `translateX(${rowX}px)`,
      opacity: rowOpacity,
      display: "flex",
      alignItems: "center",
      gap: 0,
      height: 72,
    }}>
      {/* Letra */}
      <div style={{
        width: 90,
        height: 72,
        background: item.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px 0 0 12px",
        flexShrink: 0,
        transform: `scale(${letterScale})`,
        transformOrigin: "right center",
      }}>
        <span style={{
          fontFamily: "'Bakerie Rough', sans-serif",
          fontSize: 48,
          color: "#ffffff",
          fontWeight: 700,
        }}>
          {item.letter}
        </span>
      </div>

      {/* Barra colorida */}
      <div style={{
        flex: 1,
        height: "100%",
        background: `linear-gradient(90deg, ${item.color}, ${item.color}88)`,
        display: "flex",
        alignItems: "center",
        padding: "0 28px",
        gap: 20,
        borderRadius: "0 12px 12px 0",
      }}>
        {/* Palavra em inglês */}
        <span style={{
          fontFamily: "'Bakerie Rough', sans-serif",
          fontSize: 28,
          color: "#ffffff",
          fontWeight: 700,
          letterSpacing: 2,
          minWidth: 200,
          textTransform: "uppercase",
        }}>
          {item.word}
        </span>

        {/* Separador */}
        <div style={{ width: 2, height: 36, background: "rgba(255,255,255,0.3)", flexShrink: 0 }} />

        {/* Descrição */}
        <span style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 19,
          color: "rgba(255,255,255,0.9)",
          lineHeight: 1.4,
        }}>
          {item.desc}
        </span>
      </div>
    </div>
  );
};

export const SmartDiagram = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const sceneIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const titleOpacity = interpolate(frame, [5, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [5, 45], [-40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Ícone alvo
  const iconScale = spring({ frame: Math.max(0, frame - 10), fps, config: { damping: 10, stiffness: 70 }, from: 0, to: 1 });

  // Imagem SMART à direita
  const imgOpacity = interpolate(frame, [260, 290], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: "linear-gradient(145deg, #020817 0%, #0f172a 60%, #1e1b4b 100%)",
      overflow: "hidden",
      opacity: sceneIn * fadeOut,
    }}>
      {/* Brilho de fundo */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        width: 800, height: 400,
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)",
      }} />

      {/* Pontos decorativos */}
      {[...Array(12)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          top: `${10 + (i * 8)}%`,
          right: `${3 + (i % 4) * 2}%`,
          width: 3, height: 3,
          borderRadius: "50%",
          background: `${["#3b82f6", "#22c55e", "#f97316", "#a855f7"][i % 4]}`,
          opacity: 0.4,
        }} />
      ))}

      <div style={{
        position: "absolute", inset: 0,
        display: "flex",
        padding: "60px 100px",
        gap: 60,
        alignItems: "center",
      }}>
        {/* Coluna principal */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 32 }}>
          {/* Header */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            transform: `translateY(${titleY}px)`,
            opacity: titleOpacity,
          }}>
            <div style={{ transform: `scale(${iconScale})`, color: "#fbbf24" }}>
              <FaBullseye size={48} />
            </div>
            <div>
              <span style={{
                fontFamily: "'Rustica Light', sans-serif",
                fontSize: 22,
                color: "#64748b",
                letterSpacing: 8,
                textTransform: "uppercase",
                display: "block",
              }}>
                Ferramenta de Planejamento
              </span>
              <span style={{
                fontFamily: "'Bakerie Rough', sans-serif",
                fontSize: 80,
                color: "#ffffff",
                lineHeight: 1,
                display: "block",
              }}>
                SMART
              </span>
            </div>
          </div>

          {/* Linhas SMART */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {SMART_ITEMS.map((item, i) => (
              <SmartRow
                key={i}
                item={item}
                index={i}
                frame={frame}
                fps={fps}
                totalItems={SMART_ITEMS.length}
              />
            ))}
          </div>
        </div>

        {/* Imagem SMART lateral */}
        <div style={{
          width: 380,
          flexShrink: 0,
          opacity: imgOpacity,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          alignItems: "center",
        }}>
          <div style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "2px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }}>
            <Img
              src={staticFile("SMART.png")}
              style={{ width: "100%", height: "auto", display: "block", maxHeight: 360, objectFit: "contain" }}
            />
          </div>
          <div style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: 10,
            padding: "10px 20px",
          }}>
            <span style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 15,
              color: "#94a3b8",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}>
              Metas Eficazes
            </span>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
