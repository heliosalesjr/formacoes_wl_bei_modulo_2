import {
  AbsoluteFill, Img, interpolate, spring, staticFile,
  useCurrentFrame, useVideoConfig,
} from "remotion";

const BG = "linear-gradient(145deg, #0f172a 0%, #1a2744 50%, #0f172a 100%)";

// (1 - cos)/2 replica o padrão de keyframe 0/50/100 do CSS (mesmo formato do hero)
const pulse = (frame, cycleFrames) =>
  (1 - Math.cos((frame / cycleFrames) * Math.PI * 2)) / 2;

export const Opening = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Logo
  const logoY   = interpolate(frame, [0, 40],  [60, 0],  { extrapolateRight: "clamp" });
  const logoOp  = interpolate(frame, [0, 35],  [0, 1],   { extrapolateRight: "clamp" });

  // "Aprendendo a Lidar com Dinheiro"
  const title1Op = interpolate(frame, [50, 85],  [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const title1Y  = interpolate(frame, [50, 85],  [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // "Módulo 2"
  const title2Scale = spring({ frame: Math.max(0, frame - 95), fps, config: { damping: 14, stiffness: 100 }, from: 0.6, to: 1 });
  const title2Op    = interpolate(frame, [95, 125], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Linha decorativa
  const lineW = interpolate(frame, [130, 200], [0, 480], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Fade out
  const fadeOut = interpolate(frame, [durationInFrames - 18, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // ── Efeitos do HeroBento ──
  // Blob flutuante A (14s no site) — canto superior direito
  const pA = pulse(frame, 14 * fps);
  const floatA = {
    x: -20 * pA,
    y: 24 * pA,
    scale: 1 + 0.14 * pA,
  };
  // Blob flutuante B (18s) — canto inferior esquerdo
  const pB = pulse(frame, 18 * fps);
  const floatB = {
    x: 18 * pB,
    y: -20 * pB,
    scale: 1 - 0.12 * pB,
  };
  // Glow pulse (9s)
  const pG = pulse(frame, 9 * fps);
  const glowOp    = 0.18 + 0.18 * pG;
  const glowScale = 1 + 0.18 * pG;
  // Drift grid (40s → +48px)
  const drift = (frame / (40 * fps)) * 48;

  return (
    <AbsoluteFill style={{ background: BG, overflow: "hidden", opacity: fadeOut }}>
      {/* Blob flutuante A — canto superior direito */}
      <div style={{
        position: "absolute",
        top: -120, right: -120,
        width: 420, height: 420,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
        transform: `translate(${floatA.x}px, ${floatA.y}px) scale(${floatA.scale})`,
      }} />

      {/* Blob flutuante B — canto inferior esquerdo */}
      <div style={{
        position: "absolute",
        bottom: 40, left: 40,
        width: 260, height: 260,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
        transform: `translate(${floatB.x}px, ${floatB.y}px) scale(${floatB.scale})`,
      }} />

      {/* Brilho central pulsando */}
      <div style={{
        position: "absolute", top: "35%", left: "50%",
        transform: `translate(-50%, -50%) scale(${glowScale})`,
        width: 780, height: 460,
        background: "radial-gradient(ellipse, rgba(96,165,250,0.35) 0%, transparent 70%)",
        opacity: glowOp,
      }} />

      {/* Dot grid — igual ao hero, com drift lento */}
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
        gap: 28,
      }}>
        {/* Logo */}
        <div style={{ transform: `translateY(${logoY}px)`, opacity: logoOp }}>
          <Img
            src={staticFile("logo_white.png")}
            style={{ width: 240, height: "auto", objectFit: "contain" }}
          />
        </div>

        {/* "Aprendendo a Lidar com Dinheiro" */}
        <div style={{ transform: `translateY(${title1Y}px)`, opacity: title1Op, textAlign: "center" }}>
          <span style={{
            fontFamily: "'Rustica', sans-serif",
            fontSize: 46,
            color: "#e2e8f0",
            letterSpacing: 1,
          }}>
            Aprendendo a Lidar com Dinheiro
          </span>
        </div>

        {/* "Módulo 2" */}
        <div style={{ transform: `scale(${title2Scale})`, opacity: title2Op, textAlign: "center" }}>
          <span style={{
            fontFamily: "'Bakerie Rough', sans-serif",
            fontSize: 72,
            fontWeight: "bold",
            background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Módulo 2
          </span>
        </div>

        {/* Linha decorativa */}
        <div style={{
          width: lineW,
          height: 2,
          background: "linear-gradient(90deg, #3b82f6, #a855f7, #3b82f6)",
          borderRadius: 2,
        }} />
      </div>
    </AbsoluteFill>
  );
};
