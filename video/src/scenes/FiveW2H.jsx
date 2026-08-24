import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { FaQuestion } from "react-icons/fa";

const W_ITEMS = [
  { label: "What?",     pt: "O quê?",      desc: "O que será feito?",       color: "#3b82f6", bg: "#1d4ed8" },
  { label: "Why?",      pt: "Por quê?",    desc: "Por que será feito?",     color: "#22c55e", bg: "#15803d" },
  { label: "Who?",      pt: "Quem?",       desc: "Quem vai executar?",      color: "#f97316", bg: "#c2410c" },
  { label: "When?",     pt: "Quando?",     desc: "Quando será feito?",      color: "#a855f7", bg: "#7e22ce" },
  { label: "Where?",    pt: "Onde?",       desc: "Onde será feito?",        color: "#ef4444", bg: "#b91c1c" },
  { label: "How?",      pt: "Como?",       desc: "Como será realizado?",    color: "#f59e0b", bg: "#b45309" },
  { label: "How Much?", pt: "Quanto?",     desc: "Qual o custo e esforço?", color: "#ec4899", bg: "#be185d" },
];

const CircleItem = ({ item, delay, frame, fps, x, y }) => {
  const scl = spring({ frame: Math.max(0, frame - delay), fps, config: { damping: 12, stiffness: 100 }, from: 0, to: 1 });
  const op = interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      position: "absolute",
      left: x,
      top: y,
      transform: `translate(-50%, -50%) scale(${scl})`,
      opacity: op,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
    }}>
      {/* Círculo principal */}
      <div style={{
        width: 110,
        height: 110,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${item.color}, ${item.bg})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0 8px 32px ${item.color}50`,
        border: `3px solid ${item.color}60`,
        gap: 2,
      }}>
        <span style={{
          fontFamily: "'Bakerie Rough', sans-serif",
          fontSize: 22,
          color: "#ffffff",
          fontWeight: 700,
          lineHeight: 1,
        }}>
          {item.label}
        </span>
        <span style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 13,
          color: "rgba(255,255,255,0.8)",
          lineHeight: 1,
        }}>
          {item.pt}
        </span>
      </div>

      {/* Descrição abaixo */}
      <div style={{
        background: "rgba(255,255,255,0.9)",
        borderRadius: 8,
        padding: "5px 10px",
        maxWidth: 130,
        textAlign: "center",
        border: `1.5px solid ${item.color}30`,
      }}>
        <span style={{
          fontFamily: "'Open Sans', sans-serif",
          fontSize: 13,
          color: "#374151",
          lineHeight: 1.3,
          display: "block",
        }}>
          {item.desc}
        </span>
      </div>
    </div>
  );
};

// Seta entre dois pontos
const Arrow = ({ from, to, color, frame, delay }) => {
  const progress = interpolate(frame, [delay, delay + 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.sqrt(dx * dx + dy * dy);
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <div style={{
      position: "absolute",
      left: from.x,
      top: from.y,
      width: len * progress,
      height: 2,
      background: `linear-gradient(90deg, ${color}80, ${color}30)`,
      transformOrigin: "left center",
      transform: `rotate(${angle}deg)`,
      opacity: progress,
    }} />
  );
};

export const FiveW2H = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const sceneIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const titleOpacity = interpolate(frame, [5, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleX = interpolate(frame, [5, 40], [-60, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Posições dos círculos no espaço 1920x1080
  // Linha superior: W, W, W | Centro | Linha inferior: W, W, H, H
  const positions = [
    { x: 820, y: 240 },   // What
    { x: 1020, y: 200 },  // Why
    { x: 1220, y: 240 },  // Who
    { x: 820, y: 480 },   // When
    { x: 1220, y: 480 },  // Where
    { x: 920, y: 680 },   // How
    { x: 1120, y: 680 },  // How Much
  ];

  // Conexões entre círculos (índices)
  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 0, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
    { from: 4, to: 6 },
    { from: 5, to: 6 },
    { from: 3, to: 4 },
  ];

  const baseArrowDelay = 70;
  const baseCircleDelay = 90;

  return (
    <AbsoluteFill style={{
      background: "linear-gradient(160deg, #fff7ed 0%, #fef3c7 40%, #fff1f2 80%, #fdf4ff 100%)",
      overflow: "hidden",
      opacity: sceneIn * fadeOut,
    }}>
      {/* Círculos decorativos de fundo */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(251,191,36,0.1) 0%, transparent 70%)",
      }} />

      {/* Coluna de texto */}
      <div style={{
        position: "absolute",
        left: 80, top: 0, bottom: 0,
        width: 700,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "60px 0",
        gap: 24,
      }}>
        <div style={{
          transform: `translateX(${titleX}px)`,
          opacity: titleOpacity,
        }}>
          <span style={{
            fontFamily: "'Rustica Light', sans-serif",
            fontSize: 22,
            color: "#92400e",
            letterSpacing: 8,
            textTransform: "uppercase",
            display: "block",
            marginBottom: 8,
          }}>
            Ferramenta de Planejamento
          </span>
          <span style={{
            fontFamily: "'Bakerie Rough', sans-serif",
            fontSize: 100,
            background: "linear-gradient(135deg, #f97316 0%, #ef4444 50%, #a855f7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "block",
            lineHeight: 1,
          }}>
            5W2H
          </span>
        </div>

        <div style={{ opacity: titleOpacity }}>
          <div style={{
            width: 80, height: 4,
            background: "linear-gradient(90deg, #f97316, #ef4444, #a855f7)",
            borderRadius: 2,
            marginBottom: 20,
          }} />
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 20,
            color: "#374151",
            lineHeight: 1.8,
            margin: 0,
          }}>
            Uma ferramenta de planejamento que responde{" "}
            <strong style={{ color: "#f97316" }}>7 perguntas essenciais</strong>{" "}
            para estruturar qualquer projeto ou ação pedagógica.
          </p>
        </div>

        {/* Legenda das categorias */}
        <div style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          opacity: interpolate(frame, [200, 230], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
        }}>
          {[
            { label: "5 W's — Who, What, Why, When, Where", color: "#3b82f6" },
            { label: "2 H's — How, How Much", color: "#f59e0b" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 8,
              background: `${item.color}15`,
              border: `1.5px solid ${item.color}40`,
              borderRadius: 100,
              padding: "6px 16px",
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: item.color }} />
              <span style={{
                fontFamily: "'Open Sans', sans-serif",
                fontSize: 15,
                color: "#374151",
                fontWeight: 600,
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Diagrama de círculos */}
      <div style={{ position: "absolute", inset: 0 }}>
        {/* Setas de conexão */}
        {connections.map((conn, i) => (
          <Arrow
            key={i}
            from={positions[conn.from]}
            to={positions[conn.to]}
            color={W_ITEMS[conn.from].color}
            frame={frame}
            delay={baseArrowDelay + i * 10}
          />
        ))}

        {/* Círculos */}
        {W_ITEMS.map((item, i) => (
          <CircleItem
            key={i}
            item={item}
            delay={baseCircleDelay + i * 20}
            frame={frame}
            fps={fps}
            x={positions[i].x}
            y={positions[i].y}
          />
        ))}
      </div>

      {/* Imagem 5W2H */}
      <div style={{
        position: "absolute",
        bottom: 30, right: 30,
        opacity: interpolate(frame, [220, 260], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      }}>
        <Img
          src={staticFile("5w2h.jpg")}
          style={{ width: 200, height: "auto", borderRadius: 12, opacity: 0.7, objectFit: "cover" }}
        />
      </div>
    </AbsoluteFill>
  );
};
