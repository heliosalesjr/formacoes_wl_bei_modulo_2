import { Composition, registerRoot } from "remotion";
import { VideoComposition } from "./Video";
import { VideoEncerramento } from "./VideoEncerramento";

// 1305 frames = 43.5s (áudio 40.5s + 3s silêncio) — vídeo de abertura
// 1410 frames = 47s   (áudio 44s   + 3s silêncio) — vídeo de encerramento
export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="Modulo2Intro"
        component={VideoComposition}
        durationInFrames={1305}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Modulo2Encerramento"
        component={VideoEncerramento}
        durationInFrames={1410}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};

registerRoot(RemotionRoot);
