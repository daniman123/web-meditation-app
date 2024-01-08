import { useEffect, useState } from "react";
import { useAudioData } from "./useAudioData";
import { useCategoryState } from "./useCategoryState";
import { useDurationState } from "./useDurationState";
import { useSpeakerState } from "./useSpeakerState";
import { getAudioSrc } from "./utils";

const useAudioSelector = () => {
  const [audioSrc, setAudioSrc] = useState<string>("");
  const { category, handleCategoryChange } = useCategoryState();
  const { speaker, handleSpeakerChange } = useSpeakerState();
  const { duration, handleDurationChange } = useDurationState();
  const { categories, speakers, durations } = useAudioData(category, speaker);

  useEffect(() => {
    const src = getAudioSrc(category, speaker, duration);
    setAudioSrc(src);
  }, [category, speaker, duration]);

  return {
    categories,
    category,
    handleCategoryChange,
    speakers,
    speaker,
    handleSpeakerChange,
    durations,
    duration,
    handleDurationChange,
    audioSrc,
  };
};

export default useAudioSelector;
