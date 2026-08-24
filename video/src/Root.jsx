import { Composition, registerRoot } from "remotion";
import { VideoComposition } from "./Video";

// Ajuste durationInFrames para corresponder exatamente à duração do áudio
// 1800 frames = 60 segundos a 30fps
// 2100 frames = 70 segundos a 30fps
export const RemotionRoot = () => {
  return (
    <Composition
      id="Modulo2Intro"
      component={VideoComposition}
      durationInFrames={1800}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

registerRoot(RemotionRoot);
