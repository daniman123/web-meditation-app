import { useCallback } from "react";
import { pauseAudio, playAudio, seekAudio } from "./utils";

const useAudioControl = (
  audioRef: React.RefObject<HTMLAudioElement>,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const togglePlayPause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) {
      setIsPlaying(false);
      return;
    }

    if (!audio.paused) {
      pauseAudio(audio);
      setIsPlaying(false);
    } else {
      playAudio(audio);
      setIsPlaying(true);
    }
  }, [audioRef, setIsPlaying]);

  const handleSeek = useCallback(
    (time: number) => {
      const audio = audioRef.current;
      if (!audio) return;

      seekAudio(audio, time);
    },
    [audioRef]
  );

  return { togglePlayPause, handleSeek };
};

export default useAudioControl;
