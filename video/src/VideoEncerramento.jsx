import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { OpeningComplete } from "./scenes/encerramento/OpeningComplete";
import { RecapPhrases } from "./scenes/encerramento/RecapPhrases";
import { StepsRecap } from "./scenes/encerramento/StepsRecap";
import { ToolsRecap } from "./scenes/encerramento/ToolsRecap";
import { Farewell } from "./scenes/encerramento/Farewell";

// 30fps — total: 1410 frames = 47s (áudio 44s + 3s de silêncio no final)
const SCENES = {
  opening:  { from: 0,    duration: 120 },  // 0s    → 4s
  recap:    { from: 120,  duration: 240 },  // 4s    → 12s
  steps:    { from: 360,  duration: 240 },  // 12s   → 20s
  tools:    { from: 600,  duration: 420 },  // 20s   → 34s
  farewell: { from: 1020, duration: 390 },  // 34s   → 47s
};

const SFX = {
  bgMusic: "hitslab-cheerful-joyful-playful-music-380550.mp3",
  whoosh:  "u_u4pf5h7zip-woosh-345977.mp3",
  ding:    "dragon-studio-ding-402325.mp3",
  fanfare: "freesound_community-success-fanfare-trumpets-6185.mp3",
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

export const VideoEncerramento = () => {
  return (
    <AbsoluteFill style={{ background: "#0f172a", fontFamily: "Open Sans, sans-serif" }}>
      <style>{FONTS}</style>

      {/* Narração */}
      <Audio src={staticFile("modulo_2_encerramento.mp3")} />

      {/* Trilha de fundo — entra só depois da cena de abertura */}
      <Sequence from={SCENES.recap.from}>
        <Audio src={staticFile(SFX.bgMusic)} volume={0.05} />
      </Sequence>

      {/* Fanfarra na abertura celebrativa (frame ~20) */}
      <Sequence from={20} durationInFrames={120}>
        <Audio src={staticFile(SFX.fanfare)} volume={0.22} />
      </Sequence>

      {/* Whoosh entrada RecapPhrases */}
      <Sequence from={SCENES.recap.from - 5} durationInFrames={30}>
        <Audio src={staticFile(SFX.whoosh)} volume={0.3} />
      </Sequence>

      {/* Ding sutil entrada StepsRecap */}
      <Sequence from={SCENES.steps.from - 4} durationInFrames={40}>
        <Audio src={staticFile(SFX.ding)} volume={0.22} />
      </Sequence>

      {/* Whoosh entrada ToolsRecap */}
      <Sequence from={SCENES.tools.from - 5} durationInFrames={30}>
        <Audio src={staticFile(SFX.whoosh)} volume={0.3} />
      </Sequence>

      {/* Ding entrada Farewell */}
      <Sequence from={SCENES.farewell.from - 4} durationInFrames={40}>
        <Audio src={staticFile(SFX.ding)} volume={0.25} />
      </Sequence>

      <Sequence from={SCENES.opening.from} durationInFrames={SCENES.opening.duration}>
        <OpeningComplete />
      </Sequence>
      <Sequence from={SCENES.recap.from} durationInFrames={SCENES.recap.duration}>
        <RecapPhrases />
      </Sequence>
      <Sequence from={SCENES.steps.from} durationInFrames={SCENES.steps.duration}>
        <StepsRecap />
      </Sequence>
      <Sequence from={SCENES.tools.from} durationInFrames={SCENES.tools.duration}>
        <ToolsRecap />
      </Sequence>
      <Sequence from={SCENES.farewell.from} durationInFrames={SCENES.farewell.duration}>
        <Farewell />
      </Sequence>
    </AbsoluteFill>
  );
};
