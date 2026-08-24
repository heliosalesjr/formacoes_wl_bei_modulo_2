import {
  AbsoluteFill, Img, interpolate, spring, staticFile,
  useCurrentFrame, useVideoConfig,
} from "remotion";

const BG = "linear-gradient(145deg, #0f172a 0%, #1a2744 50%, #0f172a 100%)";

const pulse = (frame, cycleFrames) =>
  (1 - Math.cos((frame / cycleFrames) * Math.PI * 2)) / 2;

// Divisão da cena (local frames, 0..389)
// 0..240   → texto de encorajamento
// 240..300 → transição: texto sai, logo + "Nos vemos!" entram
// 300..390 → 3s de silêncio com logo estática
export const Farewell = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneIn = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });

  // Texto de encorajamento
  const encOp   = interpolate(frame, [10, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const encY    = interpolate(frame, [10, 45], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const encOut  = interpolate(frame, [230, 265], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Logo + farewell
  const logoOp   = interpolate(frame, [255, 290], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const logoY    = interpolate(frame, [255, 290], [30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const farewellOp = interpolate(frame, [275, 305], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const farewellScale = spring({ frame: Math.max(0, frame - 275), fps, config: { damping: 14, stiffness: 100 }, from: 0.7, to: 1 });
  const lineW  = interpolate(frame, [300, 340], [0, 340], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Efeitos de fundo
  const pA = pulse(frame, 14 * fps);
  const pB = pulse(frame, 18 * fps);
  const pG = pulse(frame, 9 * fps);
  const drift = (frame / (40 * fps)) * 48;

  return (
    <AbsoluteFill style={{ background: BG, overflow: "hidden", opacity: sceneIn }}>
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
        position: "absolute", top: "50%", left: "50%",
        transform: `translate(-50%, -50%) scale(${1 + 0.18 * pG})`,
        width: 780, height: 460,
        background: "radial-gradient(ellipse, rgba(96,165,250,0.30) 0%, transparent 70%)",
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

      {/* Texto de encorajamento */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "0 220px",
        opacity: encOp * encOut,
        transform: `translateY(${encY}px)`,
      }}>
        <p style={{
          fontFamily: "'Rustica', sans-serif",
          fontSize: 48,
          color: "#e2e8f0",
          textAlign: "center",
          lineHeight: 1.45,
          maxWidth: 1400,
        }}>
          Esperamos que este conteúdo <br />
          fortaleça sua prática docente e ajude a transformar o conteúdo em <span style={{
            background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "'Bakerie Rough', sans-serif",
          }}>experiências significativas</span> para os estudantes.
        </p>
      </div>

      {/* Logo + Nos vemos */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 30,
        opacity: logoOp,
        transform: `translateY(${logoY}px)`,
      }}>
        <Img
          src={staticFile("logo_white.png")}
          style={{ width: 260, height: "auto", objectFit: "contain" }}
        />

        {/* Linha decorativa */}
        <div style={{
          width: lineW,
          height: 2,
          background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.6), rgba(167,139,250,0.6), transparent)",
          borderRadius: 2,
        }} />

        {/* "Nos vemos no próximo módulo!" */}
        <div style={{
          transform: `scale(${farewellScale})`,
          opacity: farewellOp,
          textAlign: "center",
          marginTop: 12,
        }}>
          <span style={{
            fontFamily: "'Bakerie Rough', sans-serif",
            fontSize: 58,
            background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Nos vemos no próximo módulo!
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
