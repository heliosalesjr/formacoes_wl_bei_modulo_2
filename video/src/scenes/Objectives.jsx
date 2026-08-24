import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { FaChalkboardTeacher, FaBookOpen, FaUsers } from "react-icons/fa";

const objetivos = [
  {
    icon: FaChalkboardTeacher,
    title: "Projetos do Ano",
    description: "Conhecer os projetos sugeridos pela coleção e compreender sua estrutura pedagógica.",
    color: "#3b82f6",
    bg: "linear-gradient(135deg, #eff6ff, #dbeafe)",
    border: "#bfdbfe",
    iconBg: "#dbeafe",
  },
  {
    icon: FaBookOpen,
    title: "Matriz de Habilidades",
    description: "Conhecer e interpretar a Matriz de habilidades da BNCC aplicada à Educação Financeira.",
    color: "#ef4444",
    bg: "linear-gradient(135deg, #fff1f2, #ffe4e6)",
    border: "#fecaca",
    iconBg: "#fee2e2",
  },
  {
    icon: FaUsers,
    title: "Ferramentas de Planejamento",
    description: "Conhecer e aplicar as ferramentas SMART e 5W2H no planejamento de projetos.",
    color: "#22c55e",
    bg: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
    border: "#bbf7d0",
    iconBg: "#dcfce7",
  },
];

const Card = ({ obj, delay, frame, fps }) => {
  const cardScale = spring({
    frame: Math.max(0, frame - delay),
    fps,
    config: { damping: 14, stiffness: 90 },
    from: 0,
    to: 1,
  });
  const cardY = interpolate(frame, [delay, delay + 35], [60, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const cardOpacity = interpolate(frame, [delay, delay + 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const Icon = obj.icon;

  return (
    <div style={{
      transform: `translateY(${cardY}px) scale(${cardScale})`,
      opacity: cardOpacity,
      transformOrigin: "bottom center",
      background: obj.bg,
      border: `2px solid ${obj.border}`,
      borderRadius: 24,
      padding: "40px 36px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: 20,
      flex: 1,
      boxShadow: `0 16px 48px ${obj.color}18`,
    }}>
      {/* Ícone */}
      <div style={{
        width: 80, height: 80,
        borderRadius: "50%",
        background: obj.iconBg,
        border: `2px solid ${obj.border}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: obj.color,
        flexShrink: 0,
      }}>
        <Icon size={36} />
      </div>

      {/* Número da ordem */}
      <div style={{
        width: 32, height: 32,
        borderRadius: "50%",
        background: obj.color,
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "absolute",
        top: 20, right: 20,
      }}>
        <span style={{
          fontFamily: "'Bakerie Rough', sans-serif",
          fontSize: 16,
          color: "#fff",
          fontWeight: 700,
        }}>
          {objetivos.indexOf(obj) + 1}
        </span>
      </div>

      {/* Título */}
      <div>
        <span style={{
          fontFamily: "'Rustica', sans-serif",
          fontSize: 26,
          color: "#1e293b",
          fontWeight: 700,
          lineHeight: 1.2,
          display: "block",
        }}>
          {obj.title}
        </span>
      </div>

      {/* Separador colorido */}
      <div style={{
        width: 48, height: 3,
        background: obj.color,
        borderRadius: 2,
      }} />

      {/* Descrição */}
      <p style={{
        fontFamily: "'Open Sans', sans-serif",
        fontSize: 18,
        color: "#475569",
        lineHeight: 1.7,
        margin: 0,
      }}>
        {obj.description}
      </p>
    </div>
  );
};

export const Objectives = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const sceneIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const titleY = interpolate(frame, [5, 40], [-50, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [5, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subtitleOpacity = interpolate(frame, [30, 60], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{
      background: "linear-gradient(160deg, #f8fafc 0%, #f0f9ff 50%, #faf5ff 100%)",
      overflow: "hidden",
      opacity: sceneIn * fadeOut,
    }}>
      {/* Decoração de fundo */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -80,
        width: 350, height: 350, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
      }} />

      <div style={{
        position: "absolute", inset: 0,
        display: "flex",
        flexDirection: "column",
        padding: "70px 100px",
        gap: 48,
      }}>
        {/* Cabeçalho */}
        <div style={{ textAlign: "center" }}>
          <div style={{ transform: `translateY(${titleY}px)`, opacity: titleOpacity }}>
            <span style={{
              fontFamily: "'Rustica Light', sans-serif",
              fontSize: 22,
              color: "#94a3b8",
              letterSpacing: 8,
              textTransform: "uppercase",
              display: "block",
              marginBottom: 8,
            }}>
              O que você vai aprender
            </span>
            <span style={{
              fontFamily: "'Bakerie Rough', sans-serif",
              fontSize: 68,
              color: "#1e293b",
              display: "block",
              lineHeight: 1,
            }}>
              Objetivos do Módulo 2
            </span>
          </div>

          <div style={{ opacity: subtitleOpacity, marginTop: 16 }}>
            <div style={{
              width: 120, height: 4,
              background: "linear-gradient(90deg, #3b82f6, #a855f7, #22c55e)",
              borderRadius: 2,
              margin: "0 auto",
            }} />
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: "flex",
          gap: 32,
          flex: 1,
          position: "relative",
        }}>
          {objetivos.map((obj, i) => (
            <Card
              key={i}
              obj={obj}
              delay={80 + i * 30}
              frame={frame}
              fps={fps}
            />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
