import { useEffect } from "react";

import { getAudioSrc } from "./utils";

const useAudioSelector = (
  setAudioSrc: React.Dispatch<React.SetStateAction<string>>,
  category: string,
  speaker: string,
  duration: string
) => {
  useEffect(() => {
    const src = getAudioSrc(category, speaker, duration);
    setAudioSrc(src);
  }, [category, speaker, duration, setAudioSrc]);
};

export default useAudioSelector;
