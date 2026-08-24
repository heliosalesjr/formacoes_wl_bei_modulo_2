import {
  AbsoluteFill, Img, interpolate, spring, staticFile,
  useCurrentFrame, useVideoConfig,
} from "remotion";
import { FaTrophy } from "react-icons/fa";


const BG = "linear-gradient(135deg, #fff7ed 0%, #eff6ff 55%, #faf5ff 100%)";

export const TeoriaPratica = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneIn = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });

  // ── "Teoria" aparece ──────────────────────────────────────
  const teoriaOp    = interpolate(frame, [15, 45],  [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const teoriaScale = spring({ frame: Math.max(0, frame - 15), fps, config: { damping: 14, stiffness: 100 }, from: 0.5, to: 1 });

  // ── Seta cresce da esquerda para a direita ────────────────
  // A seta ocupa a área entre "Teoria" e "Prática"
  const arrowProgress = interpolate(frame, [60, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const arrowW = arrowProgress * 340; // largura máxima da haste
  const arrowheadOp = interpolate(frame, [115, 130], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // ── "Prática" aparece quando a seta chega ────────────────
  const praticaOp    = interpolate(frame, [120, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const praticaScale = spring({ frame: Math.max(0, frame - 120), fps, config: { damping: 12, stiffness: 90 }, from: 0.5, to: 1 });

  // ── Troféu ────────────────────────────────────────────────
  const trophyScale = spring({ frame: Math.max(0, frame - 165), fps, config: { damping: 8, stiffness: 70 }, from: 0, to: 1 });
  const trophyOp    = interpolate(frame, [165, 195], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const trophyGlow  = interpolate(frame, [195, 230], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // ── Tudo some + Logo aparece ─────────────────────────────
  const contentFade = interpolate(frame, [210, 240], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const logoOp      = interpolate(frame, [240, 265], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const logoY       = interpolate(frame, [240, 265], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG, overflow: "hidden", opacity: sceneIn }}>
      {/* Círculos decorativos de fundo */}
      <div style={{
        position: "absolute", bottom: -100, left: -100,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "absolute", top: -80, right: -80,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
      }} />

      {/* ── Bloco Teoria → Prática + troféu ── */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 60,
        opacity: contentFade,
      }}>
        {/* Linha Teoria → seta → Prática */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
        }}>
          {/* "Teoria" */}
          <div style={{
            transform: `scale(${teoriaScale})`,
            opacity: teoriaOp,
            transformOrigin: "right center",
          }}>
            <span style={{
              fontFamily: "'Bakerie Rough', sans-serif",
              fontSize: 110,
              color: "#334155",
              lineHeight: 1,
            }}>
              Teoria
            </span>
          </div>

          {/* Seta animada */}
          <div style={{
            display: "flex", alignItems: "center",
            marginLeft: 40, marginRight: 0,
            position: "relative",
            height: 12,
          }}>
            {/* Haste */}
            <div style={{
              width: arrowW,
              height: 6,
              background: "linear-gradient(90deg, #3b82f6, #a855f7)",
              borderRadius: "3px 0 0 3px",
            }} />
            {/* Cabeça da seta */}
            <div style={{
              opacity: arrowheadOp,
              marginLeft: -1,
              width: 0, height: 0,
              borderTop: "18px solid transparent",
              borderBottom: "18px solid transparent",
              borderLeft: "28px solid #a855f7",
            }} />
          </div>

          {/* "Prática" */}
          <div style={{
            transform: `scale(${praticaScale})`,
            opacity: praticaOp,
            transformOrigin: "left center",
            marginLeft: 40,
          }}>
            <span style={{
              fontFamily: "'Bakerie Rough', sans-serif",
              fontSize: 110,
              background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1,
              display: "block",
            }}>
              Prática
            </span>
          </div>
        </div>

        {/* Troféu */}
        <div style={{
          transform: `scale(${trophyScale})`,
          opacity: trophyOp,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          position: "relative",
        }}>
          {/* Brilho atrás do troféu */}
          <div style={{
            position: "absolute",
            width: 200, height: 200,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(251,191,36,0.20) 0%, transparent 70%)",
            opacity: trophyGlow,
          }} />
          <div style={{ color: "#fbbf24", position: "relative" }}>
            <FaTrophy size={120} />
          </div>
          <span style={{
            fontFamily: "'Rustica', sans-serif",
            fontSize: 28,
            color: "#b45309",
            letterSpacing: 5,
            opacity: trophyGlow,
          }}>
            Você está pronto!
          </span>
        </div>
      </div>

      {/* ── Logo final ── */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 20,
        opacity: logoOp,
        transform: `translateY(${logoY}px)`,
      }}>
        <Img
          src={staticFile("logo-blue.png")}
          style={{ width: 280, height: "auto", objectFit: "contain" }}
        />
        <div style={{
          width: 300, height: 2,
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.3), transparent)",
          borderRadius: 2,
        }} />
        <span style={{
          fontFamily: "'Rustica Light', sans-serif",
          fontSize: 22,
          color: "#64748b",
          letterSpacing: 6,
          textTransform: "uppercase",
        }}>
          Formação de Educadores
        </span>
      </div>
    </AbsoluteFill>
  );
};
