import {
  AbsoluteFill, Img, interpolate, spring, staticFile,
  useCurrentFrame, useVideoConfig,
} from "remotion";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";

const BG = "linear-gradient(135deg, #f8fafc 0%, #eff6ff 55%, #faf5ff 100%)";

const PhraseCard = ({ text, Icon, iconColor, frame, delay, fps }) => {
  const op = interpolate(frame, [delay, delay + 30], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const x  = interpolate(frame, [delay, delay + 38], [-80, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const iconScale = spring({ frame: Math.max(0, frame - delay - 6), fps, config: { damping: 10, stiffness: 130 }, from: 0, to: 1 });

  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 40,
      transform: `translateX(${x}px)`,
      opacity: op,
    }}>
      <div style={{
        width: 110, height: 110, borderRadius: 24,
        background: "linear-gradient(135deg, #3b82f6, #a855f7)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "white",
        transform: `scale(${iconScale})`,
        boxShadow: "0 12px 30px rgba(59,130,246,0.28)",
        flexShrink: 0,
      }}>
        <Icon size={54} color={iconColor} />
      </div>
      <span style={{
        fontFamily: "'Rustica', sans-serif",
        fontSize: 60, color: "#1e293b",
        lineHeight: 1.2,
      }}>
        {text}
      </span>
    </div>
  );
};

export const RecapPhrases = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const sceneIn = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(frame, [durationInFrames - 18, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const titleOp = interpolate(frame, [5, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleY  = interpolate(frame, [5, 35], [-24, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Foto entra depois dos bullets (~frame 100), estilo polaroid descontraída
  const IMG_IN = 100;
  const imgOp    = interpolate(frame, [IMG_IN, IMG_IN + 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const imgX     = interpolate(frame, [IMG_IN, IMG_IN + 45], [280, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const imgScale = spring({ frame: Math.max(0, frame - IMG_IN), fps, config: { damping: 8, stiffness: 90, mass: 0.9 }, from: 0.4, to: 1 });
  const imgRot   = interpolate(frame, [IMG_IN, IMG_IN + 60], [-10, -3], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: BG, overflow: "hidden", opacity: sceneIn * fadeOut }}>
      {/* Decoração de fundo */}
      <div style={{
        position: "absolute", top: -100, right: -80,
        width: 460, height: 460, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -60,
        width: 380, height: 380, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
      }} />

      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        justifyContent: "center",
        padding: "80px 640px 80px 140px",
        gap: 70,
      }}>
        {/* Título discreto */}
        <div style={{ transform: `translateY(${titleY}px)`, opacity: titleOp }}>
          <span style={{
            fontFamily: "'Rustica Light', sans-serif",
            fontSize: 28,
            color: "#64748b",
            letterSpacing: 8,
            textTransform: "uppercase",
          }}>
            Neste módulo, aprendemos a:
          </span>
        </div>

        {/* Frases */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          <PhraseCard
            text="Planejar as aulas"
            Icon={FaChalkboardTeacher}
            frame={frame} delay={45} fps={fps}
          />
          <PhraseCard
            text="Orientar os estudantes"
            Icon={FaUserGraduate}
            frame={frame} delay={45} fps={fps}
          />
        </div>
      </div>

      {/* Foto — polaroid descontraída à direita */}
      <div style={{
        position: "absolute",
        right: 110, top: "50%",
        transform: "translateY(-50%)",
        opacity: imgOp,
      }}>
        <div style={{
          transform: `translateX(${imgX}px) rotate(${imgRot}deg) scale(${imgScale})`,
          width: 460, height: 560,
          background: "white",
          padding: 14,
          paddingBottom: 40,
          borderRadius: 6,
          boxShadow: "0 30px 60px rgba(15,23,42,0.35)",
        }}>
          <div style={{
            width: "100%", height: "100%",
            overflow: "hidden",
            borderRadius: 2,
          }}>
            <Img
              src={staticFile("wall.webp")}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
