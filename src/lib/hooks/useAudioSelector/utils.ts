import audioFileRoutes from "../../services/audioFileManager/audioRoutes.json";
import { IAudioFileRoutes, IAudioSrc, ISpeaker } from "./types";

const isAudioSrc = (object: unknown): object is IAudioSrc => {
  return "src" in (object as IAudioFileRoutes);
};

export const getAudioSrc = (cat: string, spkr: string, dur: string): string => {
  if (!spkr || !cat || !dur) return "";

  const categoryData = (audioFileRoutes as IAudioFileRoutes)[cat];
  if (!categoryData) return "";

  const speakerData = categoryData[spkr];
  if (!speakerData) return "";

  if (isAudioSrc(speakerData)) {
    return speakerData.src;
  } else {
    const durationData = (speakerData as ISpeaker)[dur];
    return durationData ? durationData.src : "";
  }
};

import { useMemo } from "react";

// Generic function to extract keys based on provided path.
const extractKeys = (path: string[]): string[] => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let currentObject: any = audioFileRoutes;
  for (const key of path) {
    currentObject = (currentObject as IAudioFileRoutes)[key] ?? {};
    if (Object.keys(currentObject).length === 0) break;
  }
  return Object.keys(currentObject);
};

export const useAudioData = (category: string, speaker: string) => {
  const categories = useMemo(() => extractKeys([]), []);
  const speakers = useMemo(() => extractKeys([category]), [category]);
  const durations = useMemo(
    () => extractKeys([category, speaker]),
    [category, speaker]
  );

  return { categories, speakers, durations };
};
