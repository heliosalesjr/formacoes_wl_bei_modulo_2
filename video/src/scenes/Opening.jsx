import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";

export const Opening = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Logo sobe do baixo
  const logoY = interpolate(frame, [0, 40], [80, 0], { extrapolateRight: "clamp" });
  const logoOpacity = interpolate(frame, [0, 35], [0, 1], { extrapolateRight: "clamp" });

  // Título principal
  const titleOpacity = interpolate(frame, [30, 65], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const titleX = interpolate(frame, [30, 65], [-60, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Subtítulo
  const subOpacity = interpolate(frame, [60, 95], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Linha animada
  const lineW = interpolate(frame, [85, 140], [0, 600], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Círculos decorativos - spring de entrada
  const circle1 = spring({ frame: Math.max(0, frame - 10), fps, config: { damping: 16, stiffness: 80 }, from: 0, to: 1 });
  const circle2 = spring({ frame: Math.max(0, frame - 25), fps, config: { damping: 14, stiffness: 60 }, from: 0, to: 1 });
  const circle3 = spring({ frame: Math.max(0, frame - 40), fps, config: { damping: 18, stiffness: 100 }, from: 0, to: 1 });

  // Fade out ao final
  const fadeOut = interpolate(frame, [durationInFrames - 20, durationInFrames], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#0f172a", overflow: "hidden", opacity: fadeOut }}>
      {/* Grid de fundo */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Círculo decorativo 1 - top right */}
      <div style={{
        position: "absolute", top: -180, right: -180,
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
        transform: `scale(${circle1})`,
      }} />

      {/* Círculo decorativo 2 - bottom left */}
      <div style={{
        position: "absolute", bottom: -200, left: -150,
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,197,94,0.14) 0%, transparent 70%)",
        transform: `scale(${circle2})`,
      }} />

      {/* Ponto de luz center-right */}
      <div style={{
        position: "absolute", top: "40%", right: "15%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)",
        transform: `scale(${circle3})`,
      }} />

      {/* Conteúdo central */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 24,
      }}>
        {/* Logo */}
        <div style={{ transform: `translateY(${logoY}px)`, opacity: logoOpacity }}>
          <Img
            src={staticFile("logo_white.png")}
            style={{ width: 220, height: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Título principal */}
        <div style={{
          transform: `translateX(${titleX}px)`,
          opacity: titleOpacity,
          textAlign: "center",
        }}>
          <span style={{
            fontFamily: "'Bakerie Rough', sans-serif",
            fontSize: 82,
            color: "#ffffff",
            letterSpacing: 3,
            lineHeight: 1,
          }}>
            BEĨ Educação
          </span>
        </div>

        {/* Subtítulo */}
        <div style={{ opacity: subOpacity, textAlign: "center" }}>
          <span style={{
            fontFamily: "'Rustica', sans-serif",
            fontSize: 26,
            color: "#94a3b8",
            letterSpacing: 10,
            textTransform: "uppercase",
          }}>
            Formação de Educadores
          </span>
        </div>

        {/* Linha gradiente */}
        <div style={{
          width: lineW,
          height: 3,
          background: "linear-gradient(90deg, #3b82f6, #22c55e, #f97316)",
          borderRadius: 2,
        }} />
      </div>

      {/* Pontos decorativos */}
      {[
        { top: "15%", left: "10%", size: 6, color: "#3b82f6", delay: 60 },
        { top: "75%", left: "8%", size: 4, color: "#22c55e", delay: 80 },
        { top: "20%", right: "12%", size: 5, color: "#f97316", delay: 70 },
        { top: "70%", right: "9%", size: 6, color: "#a855f7", delay: 90 },
        { top: "45%", left: "5%", size: 3, color: "#f59e0b", delay: 100 },
      ].map((dot, i) => {
        const dotOpacity = interpolate(frame, [dot.delay, dot.delay + 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
        return (
          <div key={i} style={{
            position: "absolute", top: dot.top, left: dot.left, right: dot.right,
            width: dot.size, height: dot.size,
            borderRadius: "50%",
            background: dot.color,
            opacity: dotOpacity,
            boxShadow: `0 0 ${dot.size * 3}px ${dot.color}`,
          }} />
        );
      })}
    </AbsoluteFill>
  );
};
