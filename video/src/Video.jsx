import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Opening } from "./scenes/Opening";
import { PhraseBooks } from "./scenes/PhraseBooks";
import { BulletList } from "./scenes/BulletList";
import { TeoriaPratica } from "./scenes/TeoriaPratica";

// 30fps — total: 1305 frames = 43.5s (áudio 40.5s + 3s de silêncio no final)
const SCENES = {
  opening:      { from: 0,    duration: 240 },  // 0s    → 8s
  phraseBooks:  { from: 240,  duration: 225 },  // 8s    → 15.5s
  bulletList:   { from: 465,  duration: 465 },  // 15.5s → 31s
  teoriaPratica:{ from: 930,  duration: 375 },  // 31s   → 43.5s
};

// SFX
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

export const VideoComposition = () => {
  return (
    <AbsoluteFill style={{ background: "#0f172a", fontFamily: "Open Sans, sans-serif" }}>
      <style>{FONTS}</style>
      {/* Narração */}
      <Audio src={staticFile("Modulo_2_Intro.mp3")} />
      {/* Trilha de fundo (bem baixinha, o vídeo todo) */}
      <Audio src={staticFile(SFX.bgMusic)} volume={0.05} />
      {/* Ding no reveal do "Módulo 2" (Opening, frame local ~95) */}
      {/* Whoosh na entrada de PhraseBooks */}
      <Sequence from={SCENES.phraseBooks.from - 5} durationInFrames={30}>
        <Audio src={staticFile(SFX.whoosh)} volume={0.3} />
      </Sequence>
      {/* Ding sutil na entrada de BulletList */}

      {/* Whoosh na entrada de TeoriaPratica */}
      <Sequence from={SCENES.teoriaPratica.from - 5} durationInFrames={30}>
        <Audio src={staticFile(SFX.whoosh)} volume={0.3} />
      </Sequence>
      {/* Fanfarra quando o troféu surge (TeoriaPratica, frame local 165) */}
      <Sequence from={SCENES.teoriaPratica.from + 165} durationInFrames={120}>
        <Audio src={staticFile(SFX.fanfare)} volume={0.22} />
      </Sequence>
      <Sequence from={SCENES.opening.from} durationInFrames={SCENES.opening.duration}>
        <Opening />
      </Sequence>
      <Sequence from={SCENES.phraseBooks.from} durationInFrames={SCENES.phraseBooks.duration}>
        <PhraseBooks />
      </Sequence>
      <Sequence from={SCENES.bulletList.from} durationInFrames={SCENES.bulletList.duration}>
        <BulletList />
      </Sequence>
      <Sequence from={SCENES.teoriaPratica.from} durationInFrames={SCENES.teoriaPratica.duration}>
        <TeoriaPratica />
      </Sequence>
    </AbsoluteFill>
  );
};
