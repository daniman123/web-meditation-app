import { useMemo } from "react";
import audioFileRoutes from "../../services/audioFileManager/audioRoutes.json";
import { IAudioFileRoutes } from "./types";

export const useAudioData = (category: string, speaker: string) => {
  const categories = useMemo(() => Object.keys(audioFileRoutes), []);
  const speakers = useMemo(
    () => category ? Object.keys((audioFileRoutes as IAudioFileRoutes)[category] ?? {}) : [],
    [category]
  );
  const durations = useMemo(
    () => speaker && category ? Object.keys((audioFileRoutes as IAudioFileRoutes)[category]?.[speaker] ?? {}) : [],
    [speaker, category]
  );

  return { categories, speakers, durations };
};
