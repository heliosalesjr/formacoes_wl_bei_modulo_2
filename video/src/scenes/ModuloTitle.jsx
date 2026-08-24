import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const ModuloTitle = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Fade in geral da cena
  const sceneIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // "MÓDULO" texto pequeno acima
  const moduloY = interpolate(frame, [10, 45], [-40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const moduloOpacity = interpolate(frame, [10, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Número "2" - spring grande
  const num2Scale = spring({ frame: Math.max(0, frame - 20), fps, config: { damping: 12, stiffness: 80 }, from: 0.3, to: 1 });
  const num2Opacity = interpolate(frame, [20, 55], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Subtitle principal slides up
  const subtitleY = interpolate(frame, [55, 95], [50, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const subtitleOpacity = interpolate(frame, [55, 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Linha abaixo do subtítulo
  const lineW = interpolate(frame, [95, 160], [0, 900], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Imagem do livro à direita
  const imgX = interpolate(frame, [70, 130], [200, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const imgOpacity = interpolate(frame, [70, 120], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Badge "Módulo 2" info
  const badgeOpacity = interpolate(frame, [130, 160], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const badge1Scale = spring({ frame: Math.max(0, frame - 130), fps, config: { damping: 14, stiffness: 120 }, from: 0, to: 1 });
  const badge2Scale = spring({ frame: Math.max(0, frame - 150), fps, config: { damping: 14, stiffness: 120 }, from: 0, to: 1 });

  return (
    <AbsoluteFill style={{
      background: "linear-gradient(135deg, #fff7ed 0%, #fef3c7 35%, #eff6ff 70%, #dbeafe 100%)",
      overflow: "hidden",
      opacity: sceneIn * fadeOut,
    }}>
      {/* Formas geométricas decorativas de fundo */}
      <div style={{
        position: "absolute", top: -80, left: -80,
        width: 320, height: 320,
        borderRadius: "50%",
        background: "rgba(251,191,36,0.12)",
        border: "2px solid rgba(251,191,36,0.2)",
      }} />
      <div style={{
        position: "absolute", bottom: -60, right: -60,
        width: 260, height: 260,
        borderRadius: "50%",
        background: "rgba(59,130,246,0.08)",
        border: "2px solid rgba(59,130,246,0.15)",
      }} />
      {/* Retângulo decorativo */}
      <div style={{
        position: "absolute", top: "30%", left: "3%",
        width: 8, height: 200,
        background: "linear-gradient(180deg, #f97316, #3b82f6)",
        borderRadius: 4,
        opacity: 0.5,
      }} />

      {/* Layout: texto à esquerda, imagem à direita */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex",
        alignItems: "center",
      }}>
        {/* Coluna de texto */}
        <div style={{
          flex: 1,
          paddingLeft: 120,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          {/* MÓDULO */}
          <div style={{
            transform: `translateY(${moduloY}px)`,
            opacity: moduloOpacity,
          }}>
            <span style={{
              fontFamily: "'Rustica Light', sans-serif",
              fontSize: 32,
              color: "#64748b",
              letterSpacing: 12,
              textTransform: "uppercase",
            }}>
              MÓDULO
            </span>
          </div>

          {/* Número 2 */}
          <div style={{
            transform: `scale(${num2Scale})`,
            opacity: num2Opacity,
            lineHeight: 1,
            transformOrigin: "left center",
          }}>
            <span style={{
              fontFamily: "'Bakerie Rough', sans-serif",
              fontSize: 240,
              background: "linear-gradient(135deg, #f97316 0%, #fb923c 40%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 0.9,
              display: "block",
            }}>
              2
            </span>
          </div>

          {/* Título do módulo */}
          <div style={{
            transform: `translateY(${subtitleY}px)`,
            opacity: subtitleOpacity,
          }}>
            <span style={{
              fontFamily: "'Rustica', sans-serif",
              fontSize: 34,
              color: "#1e293b",
              lineHeight: 1.3,
              display: "block",
              maxWidth: 600,
            }}>
              Aprendendo a Lidar
            </span>
            <span style={{
              fontFamily: "'Rustica', sans-serif",
              fontSize: 34,
              color: "#1e293b",
              display: "block",
            }}>
              com Dinheiro
            </span>
          </div>

          {/* Linha gradiente */}
          <div style={{
            width: lineW,
            height: 4,
            maxWidth: 700,
            background: "linear-gradient(90deg, #f97316, #3b82f6, #22c55e)",
            borderRadius: 2,
          }} />

          {/* Badges de informação */}
          <div style={{
            display: "flex", gap: 16, marginTop: 16,
            opacity: badgeOpacity,
          }}>
            {[
              { label: "Educação Financeira", color: "#f97316", bg: "#fff7ed" },
              { label: "Formação Autoinstrucional", color: "#3b82f6", bg: "#eff6ff" },
            ].map((badge, i) => {
              const s = i === 0 ? badge1Scale : badge2Scale;
              return (
                <div key={i} style={{
                  transform: `scale(${s})`,
                  transformOrigin: "left center",
                  background: badge.bg,
                  border: `2px solid ${badge.color}30`,
                  borderRadius: 100,
                  padding: "8px 20px",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: "50%",
                    background: badge.color,
                  }} />
                  <span style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 18,
                    color: "#374151",
                    fontWeight: 600,
                  }}>
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coluna da imagem */}
        <div style={{
          width: 580,
          paddingRight: 80,
          transform: `translateX(${imgX}px)`,
          opacity: imgOpacity,
          flexShrink: 0,
        }}>
          <div style={{
            borderRadius: 24,
            overflow: "hidden",
            boxShadow: "0 32px 80px rgba(0,0,0,0.15)",
            border: "3px solid rgba(255,255,255,0.8)",
          }}>
            <Img
              src={staticFile("livrins.png")}
              style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
            />
          </div>
          {/* Label sobre a imagem */}
          <div style={{
            marginTop: 16,
            textAlign: "center",
            fontFamily: "'Open Sans', sans-serif",
            fontSize: 16,
            color: "#64748b",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}>
            BEĨ Educação · 2026
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
