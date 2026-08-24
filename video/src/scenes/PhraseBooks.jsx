import {
  AbsoluteFill, Img, interpolate, spring, staticFile,
  useCurrentFrame, useVideoConfig,
} from "remotion";

const BG = "linear-gradient(135deg, #f8fafc 0%, #eff6ff 55%, #faf5ff 100%)";

// ef1 entra primeiro, ef2 desliza por cima — e fica assim até o fim
const SLIDES = ["ef1.png", "ef2.png"];
const ENTRANCES = [20, 110];

const Phrase = ({ text, frame, delay, fps }) => {
  const op = interpolate(frame, [delay, delay + 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const x  = interpolate(frame, [delay, delay + 35], [-80, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const dot = spring({ frame: Math.max(0, frame - delay - 8), fps, config: { damping: 12, stiffness: 120 }, from: 0, to: 1 });

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24, transform: `translateX(${x}px)`, opacity: op }}>
      <div style={{
        width: 16, height: 16, borderRadius: "50%",
        background: "linear-gradient(135deg, #3b82f6, #a855f7)",
        flexShrink: 0,
        transform: `scale(${dot})`,
        boxShadow: "0 0 12px rgba(59,130,246,0.4)",
      }} />
      <span style={{ fontFamily: "'Rustica', sans-serif", fontSize: 52, color: "#1e293b", lineHeight: 1.2 }}>
        {text}
      </span>
    </div>
  );
};

export const PhraseBooks = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const sceneIn = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 18, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const dividerOp = interpolate(frame, [15, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG, overflow: "hidden", opacity: sceneIn * fadeOut }}>
      {/* Decoração de fundo */}
      <div style={{
        position: "absolute", top: -120, right: -100,
        width: 450, height: 450, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)",
      }} />

      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column" }}>

        {/* Parte de cima — frases (38%) */}
        <div style={{
          flex: "0 0 38%",
          display: "flex", flexDirection: "column",
          justifyContent: "center",
          padding: "0 120px",
          gap: 36,
        }}>
          <Phrase text="Planejar suas aulas"    frame={frame} delay={20} fps={fps} />
          <Phrase text="Orientar os estudantes" frame={frame} delay={85} fps={fps} />
        </div>

        {/* Divisor */}
        <div style={{
          height: 1, margin: "0 80px",
          background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.25), rgba(168,85,247,0.25), transparent)",
          opacity: dividerOp,
        }} />

        {/* Parte de baixo — slideshow (62%) */}
        <div style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          margin: "24px 60px 40px",
          borderRadius: 20,
          boxShadow: "0 24px 60px rgba(0,0,0,0.12)",
        }}>
          {SLIDES.map((src, i) => {
            const entryFrame = ENTRANCES[i];
            // Desliza da direita (100%) para o lugar (0%)
            const slideX = interpolate(
              frame,
              [entryFrame, entryFrame + 32],
              [100, 0],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );
            // Leve fade na entrada
            const op = interpolate(
              frame,
              [entryFrame, entryFrame + 20],
              [0.5, 1],
              { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
            );
            // Só renderiza quando está próximo de entrar (otimização)
            if (frame < entryFrame - 2) return null;

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `translateX(${slideX}%)`,
                  opacity: op,
                  zIndex: i,
                }}
              >
                <Img
                  src={staticFile(src)}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </AbsoluteFill>
  );
};
