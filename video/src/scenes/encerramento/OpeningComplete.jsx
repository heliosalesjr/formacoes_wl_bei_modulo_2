import {
  AbsoluteFill, interpolate, spring,
  useCurrentFrame, useVideoConfig,
} from "remotion";
import { FaTrophy } from "react-icons/fa";

const BG = "linear-gradient(145deg, #0f172a 0%, #1a2744 50%, #0f172a 100%)";

const pulse = (frame, cycleFrames) =>
  (1 - Math.cos((frame / cycleFrames) * Math.PI * 2)) / 2;

export const OpeningComplete = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Troféu — entrada com spring
  const trophyScale = spring({ frame, fps, config: { damping: 8, stiffness: 70 }, from: 0, to: 1 });
  const trophyOp    = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // "Módulo 2"
  const modOp    = interpolate(frame, [20, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const modY     = interpolate(frame, [20, 45], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // "CONCLUÍDO!"
  const doneScale = spring({ frame: Math.max(0, frame - 40), fps, config: { damping: 12, stiffness: 110 }, from: 0.5, to: 1 });
  const doneOp    = interpolate(frame, [40, 70], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Linha decorativa
  const lineW = interpolate(frame, [70, 110], [0, 480], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Fade out
  const fadeOut = interpolate(frame, [durationInFrames - 15, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Efeitos de fundo (mesmos do Opening)
  const pA = pulse(frame, 14 * fps);
  const pB = pulse(frame, 18 * fps);
  const pG = pulse(frame, 9 * fps);
  const drift = (frame / (40 * fps)) * 48;

  // Glow atrás do troféu
  const glowTrophy = interpolate(frame, [10, 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG, overflow: "hidden", opacity: fadeOut }}>
      {/* Blob A */}
      <div style={{
        position: "absolute", top: -120, right: -120,
        width: 420, height: 420, borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
        transform: `translate(${-20 * pA}px, ${24 * pA}px) scale(${1 + 0.14 * pA})`,
      }} />
      {/* Blob B */}
      <div style={{
        position: "absolute", bottom: 40, left: 40,
        width: 260, height: 260, borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
        transform: `translate(${18 * pB}px, ${-20 * pB}px) scale(${1 - 0.12 * pB})`,
      }} />
      {/* Glow central */}
      <div style={{
        position: "absolute", top: "40%", left: "50%",
        transform: `translate(-50%, -50%) scale(${1 + 0.18 * pG})`,
        width: 780, height: 460,
        background: "radial-gradient(ellipse, rgba(251,191,36,0.30) 0%, transparent 70%)",
        opacity: 0.18 + 0.18 * pG,
      }} />
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
        backgroundPosition: `${drift}px ${drift}px`,
        opacity: 0.18,
      }} />

      {/* Conteúdo */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 24,
      }}>
        {/* Troféu */}
        <div style={{
          transform: `scale(${trophyScale})`,
          opacity: trophyOp,
          position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 10,
        }}>
          <div style={{
            position: "absolute",
            width: 220, height: 220, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(251,191,36,0.28) 0%, transparent 70%)",
            opacity: glowTrophy,
          }} />
          <div style={{ color: "#fbbf24", position: "relative" }}>
            <FaTrophy size={130} />
          </div>
        </div>

        {/* "Módulo 2" */}
        <div style={{ transform: `translateY(${modY}px)`, opacity: modOp, textAlign: "center" }}>
          <span style={{
            fontFamily: "'Rustica', sans-serif",
            fontSize: 44,
            color: "#e2e8f0",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}>
            Módulo 2
          </span>
        </div>

        {/* "CONCLUÍDO!" */}
        <div style={{ transform: `scale(${doneScale})`, opacity: doneOp, textAlign: "center" }}>
          <span style={{
            fontFamily: "'Bakerie Rough', sans-serif",
            fontSize: 96,
            fontWeight: "bold",
            background: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: 2,
          }}>
            Concluído!
          </span>
        </div>

        {/* Linha decorativa */}
        <div style={{
          width: lineW,
          height: 2,
          background: "linear-gradient(90deg, #fbbf24, #f97316, #fbbf24)",
          borderRadius: 2,
        }} />
      </div>
    </AbsoluteFill>
  );
};
