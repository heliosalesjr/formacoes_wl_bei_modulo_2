import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { FaGraduationCap } from "react-icons/fa";

export const CourseIntro = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const sceneIn = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Título
  const titleY = interpolate(frame, [10, 50], [-50, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleOpacity = interpolate(frame, [10, 45], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Ícone
  const iconScale = spring({ frame: Math.max(0, frame - 30), fps, config: { damping: 10, stiffness: 80 }, from: 0, to: 1 });

  // Parágrafo 1
  const p1Opacity = interpolate(frame, [60, 100], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const p1X = interpolate(frame, [60, 100], [-40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Parágrafo 2
  const p2Opacity = interpolate(frame, [110, 150], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const p2X = interpolate(frame, [110, 150], [-40, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Imagem lateral
  const imgOpacity = interpolate(frame, [80, 140], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const imgY = interpolate(frame, [80, 140], [60, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Caixas de destaque
  const box1Scale = spring({ frame: Math.max(0, frame - 160), fps, config: { damping: 14, stiffness: 100 }, from: 0, to: 1 });
  const box2Scale = spring({ frame: Math.max(0, frame - 185), fps, config: { damping: 14, stiffness: 100 }, from: 0, to: 1 });

  const highlights = [
    { text: "Autoinstrucional", color: "#3b82f6" },
    { text: "BEĨ Educação", color: "#22c55e" },
  ];

  return (
    <AbsoluteFill style={{
      background: "linear-gradient(145deg, #0f2744 0%, #1e3a5f 50%, #162032 100%)",
      overflow: "hidden",
      opacity: sceneIn * fadeOut,
    }}>
      {/* Textura de grade */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Linhas decorativas */}
      <div style={{
        position: "absolute", top: 0, right: "40%",
        width: 2, height: "100%",
        background: "linear-gradient(180deg, transparent, rgba(59,130,246,0.3), transparent)",
      }} />

      {/* Conteúdo */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex",
        padding: "80px 100px",
        gap: 80,
        alignItems: "center",
      }}>
        {/* Coluna esquerda */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 28 }}>
          {/* Ícone + título */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{
              transform: `scale(${iconScale})`,
              color: "#60a5fa",
              flexShrink: 0,
            }}>
              <FaGraduationCap size={52} />
            </div>
            <div style={{
              transform: `translateY(${titleY}px)`,
              opacity: titleOpacity,
            }}>
              <span style={{
                fontFamily: "'Bakerie Rough', sans-serif",
                fontSize: 54,
                color: "#ffffff",
                lineHeight: 1.1,
              }}>
                Apresentação
              </span>
              <br />
              <span style={{
                fontFamily: "'Rustica Light', sans-serif",
                fontSize: 36,
                color: "#94a3b8",
                letterSpacing: 4,
              }}>
                do Curso
              </span>
            </div>
          </div>

          {/* Linha divisória */}
          <div style={{
            width: 80, height: 3,
            background: "linear-gradient(90deg, #3b82f6, #22c55e)",
            borderRadius: 2,
            opacity: titleOpacity,
          }} />

          {/* Parágrafo 1 */}
          <div style={{ transform: `translateX(${p1X}px)`, opacity: p1Opacity }}>
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 22,
              color: "#e2e8f0",
              lineHeight: 1.8,
              margin: 0,
            }}>
              Dando sequência à formação sobre a coleção{" "}
              <strong style={{ color: "#fbbf24" }}>Aprendendo a Lidar com Dinheiro</strong>,
              o <strong style={{ color: "#60a5fa" }}>Módulo 2</strong> aprofunda o
              planejamento de aulas e projetos.
            </p>
          </div>

          {/* Parágrafo 2 */}
          <div style={{ transform: `translateX(${p2X}px)`, opacity: p2Opacity }}>
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 22,
              color: "#cbd5e1",
              lineHeight: 1.8,
              margin: 0,
            }}>
              Esta formação integra as ações de acompanhamento pedagógico, voltada
              aos educadores que lecionam <strong style={{ color: "#34d399" }}>Matemática</strong>,
              no formato autoinstrucional.
            </p>
          </div>

          {/* Badges de destaque */}
          <div style={{ display: "flex", gap: 14 }}>
            {highlights.map((h, i) => {
              const s = i === 0 ? box1Scale : box2Scale;
              return (
                <div key={i} style={{
                  transform: `scale(${s})`,
                  transformOrigin: "left center",
                  background: `${h.color}1a`,
                  border: `1.5px solid ${h.color}60`,
                  borderRadius: 8,
                  padding: "10px 22px",
                }}>
                  <span style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: 17,
                    color: h.color,
                    fontWeight: 700,
                    letterSpacing: 1,
                  }}>
                    {h.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coluna da imagem */}
        <div style={{
          width: 520,
          flexShrink: 0,
          transform: `translateY(${imgY}px)`,
          opacity: imgOpacity,
        }}>
          <div style={{
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
            border: "2px solid rgba(59,130,246,0.3)",
          }}>
            <Img
              src={staticFile("ef1.png")}
              style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={{
            marginTop: 16,
            padding: "12px 20px",
            background: "rgba(59,130,246,0.1)",
            borderRadius: 10,
            border: "1px solid rgba(59,130,246,0.2)",
          }}>
            <p style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: 15,
              color: "#94a3b8",
              margin: 0,
              textAlign: "center",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}>
              Ensino Fundamental · Anos Finais
            </p>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
