import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Opening } from "./scenes/Opening";
import { ModuloTitle } from "./scenes/ModuloTitle";
import { CourseIntro } from "./scenes/CourseIntro";
import { Objectives } from "./scenes/Objectives";
import { SmartDiagram } from "./scenes/SmartDiagram";
import { FiveW2H } from "./scenes/FiveW2H";
import { Closing } from "./scenes/Closing";

// Timing das cenas (frames @ 30fps)
// Ajuste os valores conforme necessário após ver o preview
const SCENES = {
  opening:      { from: 0,    duration: 240 },  // 0s  → 8s
  moduloTitle:  { from: 240,  duration: 270 },  // 8s  → 17s
  courseIntro:  { from: 510,  duration: 270 },  // 17s → 26s
  objectives:   { from: 780,  duration: 300 },  // 26s → 36s
  smart:        { from: 1080, duration: 300 },  // 36s → 46s
  fiveW2H:      { from: 1380, duration: 270 },  // 46s → 55s
  closing:      { from: 1650, duration: 150 },  // 55s → 60s
};

const FONTS = `
  @font-face {
    font-family: 'Bakerie Rough';
    src: url('/bakerie-rough-bold.otf') format('opentype');
    font-weight: bold;
  }
  @font-face {
    font-family: 'Rustica';
    src: url('/rustica-regular.otf') format('opentype');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Rustica Light';
    src: url('/rustica-light.otf') format('opentype');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url('/OpenSans-varias.ttf') format('truetype');
    font-weight: normal;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
`;

export const VideoComposition = () => {
  return (
    <AbsoluteFill style={{ background: "#0f172a", fontFamily: "Open Sans, sans-serif" }}>
      <style>{FONTS}</style>

      <Audio src={staticFile("Modulo_2_Intro.mp3")} />

      <Sequence from={SCENES.opening.from} durationInFrames={SCENES.opening.duration}>
        <Opening />
      </Sequence>

      <Sequence from={SCENES.moduloTitle.from} durationInFrames={SCENES.moduloTitle.duration}>
        <ModuloTitle />
      </Sequence>

      <Sequence from={SCENES.courseIntro.from} durationInFrames={SCENES.courseIntro.duration}>
        <CourseIntro />
      </Sequence>

      <Sequence from={SCENES.objectives.from} durationInFrames={SCENES.objectives.duration}>
        <Objectives />
      </Sequence>

      <Sequence from={SCENES.smart.from} durationInFrames={SCENES.smart.duration}>
        <SmartDiagram />
      </Sequence>

      <Sequence from={SCENES.fiveW2H.from} durationInFrames={SCENES.fiveW2H.duration}>
        <FiveW2H />
      </Sequence>

      <Sequence from={SCENES.closing.from} durationInFrames={SCENES.closing.duration}>
        <Closing />
      </Sequence>
    </AbsoluteFill>
  );
};
