import {
  AbsoluteFill, interpolate, spring,
  useCurrentFrame, useVideoConfig,
} from "remotion";

const BG = "linear-gradient(145deg, #0f172a 0%, #1a2744 50%, #0f172a 100%)";

const BULLETS = [
  {
    text: "Aplicar o passo a passo dos projetos",
    color: "#60a5fa",
    delay: 40,
  },
  {
    text: "Usar a Matriz de Habilidades com base na BNCC",
    color: "#a78bfa",
    delay: 160,
  },
  {
    text: "Trabalhar metas e ações com as ferramentas SMART e 5W2H",
    color: "#34d399",
    delay: 280,
  },
];

const BulletItem = ({ item, frame, fps }) => {
  const op  = interpolate(frame, [item.delay, item.delay + 28], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const x   = interpolate(frame, [item.delay, item.delay + 38], [-100, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const dot = spring({ frame: Math.max(0, frame - item.delay), fps, config: { damping: 12, stiffness: 140 }, from: 0, to: 1 });

  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      gap: 32,
      transform: `translateX(${x}px)`,
      opacity: op,
    }}>
      {/* Bullet */}
      <div style={{
        width: 20, height: 20,
        borderRadius: "50%",
        background: item.color,
        flexShrink: 0,
        marginTop: 10,
        transform: `scale(${dot})`,
        boxShadow: `0 0 18px ${item.color}80`,
      }} />

      {/* Texto */}
      <span style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 46,
        color: "#e2e8f0",
        lineHeight: 1.35,
        fontWeight: 400,
      }}>
        {item.text}
      </span>
    </div>
  );
};

export const BulletList = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const sceneIn = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 18, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const titleOp = interpolate(frame, [5, 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleY  = interpolate(frame, [5, 30], [-30, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG, overflow: "hidden", opacity: sceneIn * fadeOut }}>
      {/* Grade sutil */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }} />

      {/* Brilho lateral esquerdo */}
      <div style={{
        position: "absolute", left: -80, top: "50%", transform: "translateY(-50%)",
        width: 300, height: 600,
        background: "radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)",
      }} />

      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        padding: "80px 160px",
        gap: 56,
      }}>
        {/* Título discreto */}
        <div style={{ transform: `translateY(${titleY}px)`, opacity: titleOp }}>
          <span style={{
            fontFamily: "'Rustica Light', sans-serif",
            fontSize: 26,
            color: "#64748b",
            letterSpacing: 8,
            textTransform: "uppercase",
          }}>
            Neste módulo você vai
          </span>
        </div>

        {/* Bullets */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {BULLETS.map((item, i) => (
            <BulletItem key={i} item={item} frame={frame} fps={fps} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
