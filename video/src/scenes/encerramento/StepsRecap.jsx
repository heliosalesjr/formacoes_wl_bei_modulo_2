import {
  AbsoluteFill, interpolate, spring,
  useCurrentFrame, useVideoConfig,
} from "remotion";
import { FaUsers, FaCogs, FaHandshake } from "react-icons/fa";

const BG = "linear-gradient(135deg, #eff6ff 0%, #faf5ff 55%, #fff7ed 100%)";

const STEPS = [
  { label: "Turma & Tema",  Icon: FaUsers,     delay: 30,  arrowStart: 60,  color: "#3b82f6" },
  { label: "Passo a Passo", Icon: FaCogs,      delay: 90,  arrowStart: 120, color: "#a855f7" },
  { label: "Culminância",   Icon: FaHandshake, delay: 150, arrowStart: null, color: "#f97316" },
];

const StepBlock = ({ step, frame, fps }) => {
  const scale = spring({ frame: Math.max(0, frame - step.delay), fps, config: { damping: 12, stiffness: 110 }, from: 0.4, to: 1 });
  const op    = interpolate(frame, [step.delay, step.delay + 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      display: "flex", flexDirection: "column",
      alignItems: "center", gap: 18,
      transform: `scale(${scale})`,
      opacity: op,
    }}>
      <div style={{
        width: 140, height: 140, borderRadius: "50%",
        background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "white",
        boxShadow: `0 12px 30px ${step.color}44`,
      }}>
        <step.Icon size={62} />
      </div>
      <span style={{
        fontFamily: "'Bakerie Rough', sans-serif",
        fontSize: 34,
        color: "#334155",
        textAlign: "center",
      }}>
        {step.label}
      </span>
    </div>
  );
};

const Arrow = ({ frame, startFrame }) => {
  const w  = interpolate(frame, [startFrame, startFrame + 30], [0, 140], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const op = interpolate(frame, [startFrame + 22, startFrame + 34], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{
      display: "flex", alignItems: "center",
      height: 12,
      marginTop: -60, // alinha com o centro do círculo do StepBlock (140/2 = 70, - textbox ajuste)
    }}>
      <div style={{
        width: w, height: 6,
        background: "linear-gradient(90deg, #3b82f6, #a855f7)",
        borderRadius: "3px 0 0 3px",
      }} />
      <div style={{
        opacity: op,
        marginLeft: -1,
        width: 0, height: 0,
        borderTop: "14px solid transparent",
        borderBottom: "14px solid transparent",
        borderLeft: "22px solid #a855f7",
      }} />
    </div>
  );
};

export const StepsRecap = () => {
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
        position: "absolute", top: -100, left: -80,
        width: 420, height: 420, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
      }} />
      <div style={{
        position: "absolute", bottom: -80, right: -60,
        width: 380, height: 380, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)",
      }} />

      <div style={{
        position: "absolute", inset: 0,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        gap: 60,
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
            Passo a passo dos projetos
          </span>
        </div>

        {/* Fluxo */}
        <div style={{
          display: "flex", alignItems: "center",
          gap: 30,
        }}>
          <StepBlock step={STEPS[0]} frame={frame} fps={fps} />
          <Arrow frame={frame} startFrame={STEPS[0].arrowStart} />
          <StepBlock step={STEPS[1]} frame={frame} fps={fps} />
          <Arrow frame={frame} startFrame={STEPS[1].arrowStart} />
          <StepBlock step={STEPS[2]} frame={frame} fps={fps} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
