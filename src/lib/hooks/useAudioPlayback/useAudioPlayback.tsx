import { useAudioSelectorContext } from "@/components/features/audioContextProvider/AudioContextProvider";
import useAudioControl from "@/lib/hooks/useAudioPlayback/useAudioControl";
import useAudioEvents from "@/lib/hooks/useAudioPlayback/useAudioEvents";
import { logMeditation } from "@/lib/services/database/dataBaseManager";
import { useCallback, useRef, useState } from "react";

const useAudioPlaybackState = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { audioSrc, resetSelections } = useAudioSelectorContext();
  const { togglePlayPause } = useAudioControl(audioRef, setIsPlaying);

  const reset = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setCurrentTime(0);
    resetSelections();
  }, [resetSelections]);

  useAudioEvents(audioRef, setDuration, setCurrentTime, logMeditation, reset);

  return {
    audioRef,
    duration,
    currentTime,
    isPlaying,
    togglePlayPause,
    reset,
    audioSrc,
  };
};

export default useAudioPlaybackState;
