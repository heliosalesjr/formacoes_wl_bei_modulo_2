import {
  AbsoluteFill, Img, interpolate, spring, staticFile,
  useCurrentFrame, useVideoConfig,
} from "remotion";

const BG = "linear-gradient(135deg, #faf5ff 0%, #eff6ff 55%, #f8fafc 100%)";

const TOOLS = [
  {
    label: "Matriz de Habilidades",
    caption: "Baseada na BNCC",
    img: "matriz_habilidades.png",
    delay: 40,
    accent: "#3b82f6",
  },
  {
    label: "SMART",
    caption: "Metas claras",
    img: "SMART.png",
    delay: 150,
    accent: "#a855f7",
  },
  {
    label: "5W2H",
    caption: "Ações organizadas",
    img: "5w2h.jpg",
    delay: 260,
    accent: "#f97316",
  },
];

const ToolCard = ({ tool, frame, fps }) => {
  const scale = spring({ frame: Math.max(0, frame - tool.delay), fps, config: { damping: 12, stiffness: 100 }, from: 0.6, to: 1 });
  const op    = interpolate(frame, [tool.delay, tool.delay + 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const y     = interpolate(frame, [tool.delay, tool.delay + 34], [40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      transform: `translateY(${y}px) scale(${scale})`,
      opacity: op,
      width: 420,
      background: "white",
      borderRadius: 24,
      padding: 28,
      display: "flex", flexDirection: "column",
      alignItems: "center", gap: 20,
      boxShadow: "0 20px 40px rgba(15,23,42,0.10)",
      border: `2px solid ${tool.accent}22`,
    }}>
      {/* Imagem */}
      <div style={{
        width: "100%", height: 260,
        borderRadius: 16,
        overflow: "hidden",
        background: "#f1f5f9",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Img
          src={staticFile(tool.img)}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      {/* Label */}
      <span style={{
        fontFamily: "'Bakerie Rough', sans-serif",
        fontSize: 46,
        color: tool.accent,
        lineHeight: 1,
      }}>
        {tool.label}
      </span>

      {/* Caption */}
      <span style={{
        fontFamily: "'Rustica Light', sans-serif",
        fontSize: 20,
        color: "#64748b",
        letterSpacing: 4,
        textTransform: "uppercase",
      }}>
        {tool.caption}
      </span>
    </div>
  );
};

export const ToolsRecap = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const sceneIn = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 18, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const titleOp = interpolate(frame, [0, 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleY  = interpolate(frame, [0, 25], [-20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG, overflow: "hidden", opacity: sceneIn * fadeOut }}>
      {/* Decoração */}
      <div style={{
        position: "absolute", top: -100, right: -60,
        width: 460, height: 460, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -60,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
      }} />

      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 50,
        padding: "60px 40px",
      }}>
        {/* Título */}
        <div style={{ transform: `translateY(${titleY}px)`, opacity: titleOp, textAlign: "center" }}>
          <span style={{
            fontFamily: "'Rustica Light', sans-serif",
            fontSize: 30,
            color: "#64748b",
            letterSpacing: 8,
            textTransform: "uppercase",
          }}>
            Ferramentas que exploramos
          </span>
        </div>

        {/* Cards */}
        <div style={{
          display: "flex", gap: 36,
          justifyContent: "center",
          alignItems: "stretch",
        }}>
          {TOOLS.map((tool, i) => (
            <ToolCard key={i} tool={tool} frame={frame} fps={fps} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
