import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { FaRocket } from "react-icons/fa";

const Particle = ({ x, y, size, color, delay, frame }) => {
  const op = interpolate(frame, [delay, delay + 20, delay + 80, delay + 100], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const dy = interpolate(frame, [delay, delay + 100], [0, -40], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      position: "absolute",
      left: x, top: y,
      width: size, height: size,
      borderRadius: "50%",
      background: color,
      opacity: op,
      transform: `translateY(${dy}px)`,
      boxShadow: `0 0 ${size * 4}px ${color}`,
    }} />
  );
};

export const Closing = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const sceneIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  // Logo
  const logoScale = spring({ frame: Math.max(0, frame - 5), fps, config: { damping: 12, stiffness: 70 }, from: 0, to: 1 });
  const logoOpacity = interpolate(frame, [5, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Título principal
  const mainScale = spring({ frame: Math.max(0, frame - 30), fps, config: { damping: 10, stiffness: 80 }, from: 0.3, to: 1 });
  const mainOpacity = interpolate(frame, [30, 65], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Ícone foguete
  const rocketScale = spring({ frame: Math.max(0, frame - 55), fps, config: { damping: 8, stiffness: 60 }, from: 0, to: 1 });

  // Subtítulo
  const subOpacity = interpolate(frame, [75, 105], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subY = interpolate(frame, [75, 105], [20, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Linha final
  const lineW = interpolate(frame, [100, durationInFrames - 5], [0, 700], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Partículas de fundo
  const particles = [
    { x: "10%", y: "20%", size: 8,  color: "#3b82f6", delay: 10 },
    { x: "85%", y: "15%", size: 6,  color: "#22c55e", delay: 15 },
    { x: "15%", y: "75%", size: 5,  color: "#f97316", delay: 20 },
    { x: "80%", y: "80%", size: 7,  color: "#a855f7", delay: 8  },
    { x: "50%", y: "10%", size: 4,  color: "#fbbf24", delay: 25 },
    { x: "25%", y: "50%", size: 5,  color: "#ef4444", delay: 18 },
    { x: "75%", y: "50%", size: 4,  color: "#60a5fa", delay: 22 },
    { x: "90%", y: "40%", size: 6,  color: "#34d399", delay: 12 },
    { x: "5%",  y: "45%", size: 4,  color: "#f472b6", delay: 30 },
    { x: "60%", y: "90%", size: 5,  color: "#fbbf24", delay: 35 },
    { x: "40%", y: "85%", size: 3,  color: "#a78bfa", delay: 28 },
  ];

  return (
    <AbsoluteFill style={{
      background: "linear-gradient(145deg, #0f172a 0%, #1e1b4b 45%, #1e3a5f 100%)",
      overflow: "hidden",
      opacity: sceneIn,
    }}>
      {/* Grade de fundo */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Brilho central */}
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 900, height: 500,
        background: "radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)",
      }} />

      {/* Arcos decorativos */}
      <div style={{
        position: "absolute", top: -200, right: -200,
        width: 600, height: 600,
        borderRadius: "50%",
        border: "1px solid rgba(139,92,246,0.15)",
      }} />
      <div style={{
        position: "absolute", top: -150, right: -150,
        width: 450, height: 450,
        borderRadius: "50%",
        border: "1px solid rgba(59,130,246,0.15)",
      }} />
      <div style={{
        position: "absolute", bottom: -200, left: -200,
        width: 550, height: 550,
        borderRadius: "50%",
        border: "1px solid rgba(34,197,94,0.12)",
      }} />

      {/* Partículas flutuantes */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} frame={frame} />
      ))}

      {/* Conteúdo central */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
      }}>
        {/* Logo */}
        <div style={{
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
        }}>
          <Img
            src={staticFile("logo_white.png")}
            style={{ width: 180, height: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Ícone + título principal */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          transform: `scale(${mainScale})`,
          opacity: mainOpacity,
        }}>
          <div style={{ transform: `scale(${rocketScale})`, color: "#fbbf24" }}>
            <FaRocket size={56} />
          </div>
          <span style={{
            fontFamily: "'Bakerie Rough', sans-serif",
            fontSize: 96,
            color: "#ffffff",
            lineHeight: 1,
          }}>
            Vamos Começar!
          </span>
        </div>

        {/* Subtítulo */}
        <div style={{
          opacity: subOpacity,
          transform: `translateY(${subY}px)`,
          textAlign: "center",
        }}>
          <span style={{
            fontFamily: "'Rustica', sans-serif",
            fontSize: 28,
            color: "#94a3b8",
            letterSpacing: 6,
            display: "block",
          }}>
            BEĨ Educação · Módulo 2 · 2026
          </span>
          <span style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 20,
            color: "#64748b",
            letterSpacing: 3,
            display: "block",
            marginTop: 8,
          }}>
            Aprendendo a Lidar com Dinheiro
          </span>
        </div>

        {/* Linha gradiente final */}
        <div style={{
          width: lineW,
          height: 3,
          background: "linear-gradient(90deg, #3b82f6, #a855f7, #ef4444, #f97316, #22c55e)",
          borderRadius: 2,
        }} />
      </div>
    </AbsoluteFill>
  );
};
