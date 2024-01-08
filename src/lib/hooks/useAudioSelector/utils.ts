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
